import iconArrow from "../assets/icon-arrow.svg";
import { data, Form } from "react-router";
import { Fragment } from "react";
import { useFetcher } from "react-router";
import type { Route } from "../+types/root";

export async function action({ request }: Route.ActionArgs) {
  function isValidIPAddress(ip: string) {
    const regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return regex.test(ip);
  }

  const formData = await request.formData();
  const ip = String(formData.get("ipAddress"));
  const errors: { ipValidationErrors: string | undefined } = {
    ipValidationErrors: undefined,
  };

  if (isValidIPAddress(ip)) {
    const response = await fetch(`https://geo.ipify.org/api/v1?apiKey=${process.env.IP_API_KEY}&ipAddress=${ip}`);
    const data = await response.json();
    return { ipData: data };
  } else {
    errors.ipValidationErrors = "Invalid IP Address";
    return data({ error: "Invalid IP Address" }, { status: 400 });
  }
}

export function Tracker() {
  const dataHeaders = ["IP Address", "Location", "Timezone", "ISP"];
  const sampleData = ["192.212.174.101", "Brooklyn, NY 10001", "UTC -05:00", "SpaceX Starlink"];

  let fetcher = useFetcher();
  let errors = fetcher.data?.errors;

  return (
    <main className={"w-[1440px]"}>
      <header className={"flex h-[280px] flex-col items-center bg-[url('./assets/pattern-bg-desktop.png')] bg-no-repeat"}>
        <h1 className={"text-heading-lg pt-[26px] text-white lg:pt-[33px]"}>IP Address Tracker</h1>
        <fetcher.Form method="post" className={"flex pt-[29px] lg:pt-[31px]"}>
          <input type={"text"} name={"ipAddress"} className={"h-[58px] w-[497px] rounded-l-[15px] pl-6 text-[18px] text-very-dark-gray outline-none placeholder:text-opacity-50"} placeholder={"Search for any IP address or domain"} />
          <button type={"submit"} className={"grid size-[58px] place-items-center rounded-r-[15px] bg-black"}>
            <img src={iconArrow} alt={"arrow"} />
          </button>
          {errors && <p className={"text-red-500"}>{errors.ipValidationErrors}</p>}
        </fetcher.Form>
      </header>

      <section className={"mx-[165px] rounded-[15px] border bg-white"}>
        <div className={"flex flex-col gap-y-6 lg:flex-row lg:gap-y-0"}>
          {dataHeaders.map((header, index) => (
            <Fragment key={index}>
              <div className={"flex items-center"}>
                <div className={"ml-8 w-[213px]"}>
                  <h2 className={"text-data-label-sm lg:text-data-label-lg justify-self-start font-bold uppercase text-dark-gray"}>{header}</h2>
                  <p className={"text-heading-sm lg:text-heading-lg pt-[7px] text-very-dark-gray lg:pt-[13px]"}>{sampleData[index]}</p>
                </div>
                {index !== dataHeaders.length - 1 && <div className={"my-[43px] ml-8 hidden h-[75px] w-[1px] bg-black opacity-15 lg:flex"}></div>}
              </div>
            </Fragment>
          ))}
        </div>
      </section>
    </main>
  );
}
