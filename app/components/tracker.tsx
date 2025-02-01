import { useLoaderData } from "react-router";
import { useFetcher } from "react-router";
import type { IPAddressInfo } from "~/types/types";
import MapClient from "~/components/map.client";
import IpDetails from "~/components/ipdetails";
import Header from "~/components/header";

export function Tracker() {
  let fetcher = useFetcher();
  let loaderData = useLoaderData();

  let ipGeoLocation: IPAddressInfo = fetcher.data || loaderData;

  return (
    <main className={"relative w-[1440px]"}>
      <Header fetcher={fetcher} />
      <IpDetails ipGeoLocation={ipGeoLocation} />
      <MapClient ipGeoLocation={ipGeoLocation} />
    </main>
  );
}
