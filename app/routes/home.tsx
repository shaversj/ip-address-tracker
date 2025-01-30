import type { Route } from "./+types/home";
import { Tracker } from "~/tracker";
import { data } from "react-router";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const res = await fetch(`https://api.ipify.org?format=json`).then((res) => res.json());
  return await fetch(`https://geo.ipify.org/api/v1?apiKey=${import.meta.env.VITE_IP_API_KEY}&ipAddress=${res.ip}`).then((res) => res.json());
}

export async function clientAction({ request }: Route.ActionArgs) {
  function getIPAddress(ip?: string) {
    if (ip) {
      return fetch(`https://geo.ipify.org/api/v1?apiKey=${process.env.IP_API_KEY}&ipAddress=${ip}`);
    } else {
      return fetch("https://api.ipify.org?format=json");
    }
  }

  function isValidIPAddress(ip: string) {
    const regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return regex.test(ip);
  }

  const formData = await request.formData();
  const ip = String(formData.get("ipAddress"));
  const isValidIp = isValidIPAddress(ip);
  let errors: { ipValidationErrors: string | undefined } = {
    ipValidationErrors: undefined,
  };

  if (ip === "" || isValidIp) {
    const response = await getIPAddress();
    const data = await response.json();
    console.log("data", data);
    return { ipData: data };
  } else {
    errors.ipValidationErrors = "Invalid IP Address";
    return data({ error: "Invalid IP Address" }, { status: 400 });
  }
}

export function meta({}: Route.MetaArgs) {
  // return [{ title: "New React Router App" }, { name: "description", content: "Welcome to React Router!" }];
  return [{ title: "Ip Address Tracker" }];
}

export default function Home({ actionData, loaderData }: Route.ComponentProps) {
  console.log(loaderData);
  return <Tracker />;
}
