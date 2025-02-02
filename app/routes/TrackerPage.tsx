import type { Route } from "./+types/TrackerPage";
import { isValidDomain, isValidIPAddress } from "~/util/util";
import { fetchCurrentIPAddress, fetchGeoLocation } from "~/api/api";
import { useFetcher, data } from "react-router";

import type { IPAddressInfo } from "~/types/types";
import Header from "~/components/header";
import IpDetails from "~/components/ipdetails";
import MapClient from "~/components/map.client";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const ipResponse = await fetchCurrentIPAddress();
  const ipData = await ipResponse.json();
  if (!ipData.success) {
    return data({ error: `Failed to fetch IP Address. ${ipData.error.type}` });
  }

  const ip = (await ipData.json()).ip;
  const geoResponse = await fetchGeoLocation(ip);
  const geoLocation = await geoResponse.json();

  if (!geoLocation.success) {
    return data({ error: `Failed to fetch Geo Location. Error Type: ${geoLocation.error.type}` });
  } else {
    return geoLocation;
  }
}

export async function clientAction({ request }: Route.ActionArgs) {
  const query = String((await request.formData()).get("ipAddress"));

  if (isValidIPAddress(query) || isValidDomain(query)) {
    const response = await fetchGeoLocation(query);
    const data = await response.json();
    if (!data.success) {
      return data({ error: `Failed to fetch Geo Location. Error Type: ${data.error.type}` });
    } else {
      return data;
    }
  } else {
    return data({ error: "Invalid IP or Domain" }, { status: 400 });
  }
}

export function meta({}: Route.MetaArgs) {
  return [{ title: "Ip Address Tracker" }];
}

export default function TrackerPage({ actionData, loaderData }: Route.ComponentProps) {
  let fetcher = useFetcher();
  let ipGeoLocation: IPAddressInfo = fetcher.data || loaderData;

  return (
    <main className={"relative h-[800px] xl:mx-auto lg:w-[1440px]"}>
      <Header fetcher={fetcher} />
      <IpDetails ipGeoLocation={ipGeoLocation} />
      <MapClient ipGeoLocation={ipGeoLocation} />
    </main>
  );
}
