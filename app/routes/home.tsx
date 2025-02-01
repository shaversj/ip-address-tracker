import type { Route } from "./+types/home";
import { isValidDomain, isValidIPAddress } from "~/util/util";
import { fetchCurrentIPAddress, fetchGeoLocation } from "~/api/api";
import { useFetcher, data } from "react-router";

import type { IPAddressInfo } from "~/types/types";
import Header from "~/components/header";
import IpDetails from "~/components/ipdetails";
import MapClient from "~/components/map.client";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const ipResponse = await fetchCurrentIPAddress();
  if (!ipResponse.ok) {
    return data({ error: `Failed to fetch IP Address. Status Code: ${ipResponse.status}` }, { status: ipResponse.status });
  }

  const ip = (await ipResponse.json()).query;
  const geoLocation = await fetchGeoLocation(ip);

  if (!geoLocation.ok) {
    return data({ error: `Failed to fetch Geo Location. Status Code: ${geoLocation.status}` }, { status: geoLocation.status });
  } else {
    return geoLocation.json();
  }
}

export async function clientAction({ request }: Route.ActionArgs) {
  const query = String((await request.formData()).get("ipAddress"));

  if (isValidIPAddress(query) || isValidDomain(query)) {
    return await fetchGeoLocation(query);
  } else {
    return data({ error: "Invalid IP or Domain" }, { status: 400 });
  }
}

export function meta({}: Route.MetaArgs) {
  return [{ title: "Ip Address Tracker" }];
}

export default function Home({ actionData, loaderData }: Route.ComponentProps) {
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
