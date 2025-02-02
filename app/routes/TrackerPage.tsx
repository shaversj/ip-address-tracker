import type { Route } from "./+types/TrackerPage";
import { isValidIPAddress } from "~/util/util";
import { fetchCurrentIPAddress, fetchGeoLocation } from "~/api/api";
import { useFetcher, data } from "react-router";

import type { IPAddressInfo } from "~/types/types";
import Header from "~/components/header";
import IpDetails from "~/components/ipdetails";
import MapClient from "~/components/map.client";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const ipResponse = await fetchCurrentIPAddress();
  const ipData = await ipResponse.json();

  if (!ipData.ip) {
    return data({ error: `Failed to fetch IP Address.` });
  }

  return ipData;
}

export async function clientAction({ request }: Route.ActionArgs) {
  const query = String((await request.formData()).get("ipAddress"));

  if (isValidIPAddress(query)) {
    const response = await fetchGeoLocation(query);
    const jsonData = await response.json();
    return jsonData.success ? jsonData : { error: `Failed to fetch Geo Location. ${jsonData?.message}` };
  } else {
    return data({ error: "Invalid IP Address" }, { status: 400 });
  }
}

export function meta({}: Route.MetaArgs) {
  return [{ title: "Ip Address Tracker" }];
}

export default function TrackerPage({ actionData, loaderData }: Route.ComponentProps) {
  let fetcher = useFetcher();
  let ipGeoLocation: IPAddressInfo = fetcher?.data || loaderData;

  return (
    <main className={"relative h-[800px] xl:mx-auto lg:w-[1440px]"}>
      <Header fetcher={fetcher} />
      <IpDetails ipGeoLocation={ipGeoLocation} />
      <MapClient ipGeoLocation={ipGeoLocation} />
    </main>
  );
}
