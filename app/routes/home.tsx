import type { Route } from "./+types/home";
import { Tracker } from "~/tracker";
import { isValidIPAddress } from "~/util/util";
import { fetchCurrentIPAddress, fetchGeoLocation } from "~/api";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const ip = await fetchCurrentIPAddress().then((res) => res.ip);
  return await fetchGeoLocation(ip);
}

export async function clientAction({ request }: Route.ActionArgs) {
  const ip = String((await request.formData()).get("ipAddress"));

  if (isValidIPAddress(ip)) {
    console.log("ip", ip);
    const data = await fetchGeoLocation(ip);
    console.log("data", data);
    return data;
  } else {
    return { ok: false, error: "Invalid IP Address" };
  }
}

export function meta({}: Route.MetaArgs) {
  return [{ title: "Ip Address Tracker" }];
}

export default function Home({ actionData, loaderData }: Route.ComponentProps) {
  return <Tracker />;
}
