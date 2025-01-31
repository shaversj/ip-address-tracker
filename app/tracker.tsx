import iconArrow from "./assets/icon-arrow.svg";
import { useLoaderData } from "react-router";
import React, { Fragment } from "react";
import { useFetcher } from "react-router";
import SimpleMap from "~/simplemap.client";

export function Tracker() {
  let data = useLoaderData();

  const dataHeaders = ["IP Address", "Location", "Timezone", "ISP"];
  const sampleData = ["192.212.174.101", "Brooklyn, NY 10001", "UTC -05:00", "SpaceX Starlink"];

  let fetcher = useFetcher();
  let error = fetcher.data?.error;

  return (
    <main className={"relative w-[1440px]"}>
      <header className={"flex h-[280px] flex-col items-center bg-[url('./assets/pattern-bg-desktop.png')] bg-no-repeat"}>
        <h1 className={"pt-[26px] text-heading-lg text-white lg:pt-[33px]"}>IP Address Tracker</h1>
        <fetcher.Form id={"ipForm"} method="post" className={"flex flex-col pt-[29px] lg:pt-[31px]"}>
          <div className={"flex"}>
            <input type={"text"} name={"ipAddress"} className={"h-[58px] w-[497px] rounded-l-[15px] pl-6 text-[18px] text-very-dark-gray outline-none placeholder:text-opacity-50"} placeholder={"Search for any IP address or domain"} />
            <button type={"submit"} className={"grid size-[58px] place-items-center rounded-r-[15px] bg-black"}>
              <img src={iconArrow} alt={"arrow"} />
            </button>
          </div>
          {error && <p className={"ml-2 justify-self-end pt-2 text-red-500"}>{error}</p>}
        </fetcher.Form>
      </header>

      <section className={"absolute left-1/2 z-30 -translate-x-1/2 -translate-y-1/2 transform rounded-[15px] border bg-white"}>
        <div className={"flex flex-col gap-y-6 lg:flex-row lg:gap-y-0"}>
          {data && (
            <>
              {dataHeaders.map((header, index) => (
                <Fragment key={index}>
                  <div className={"flex items-center"}>
                    <div className={"ml-8 w-[213px]"}>
                      <h2 className={"justify-self-start text-data-label-sm font-bold uppercase text-dark-gray lg:text-data-label-lg"}>{header}</h2>
                      <p className={"pt-[7px] text-heading-sm text-very-dark-gray lg:pt-[13px] lg:text-heading-lg"}>
                        {index === 0 && data.ip}
                        {index === 1 && `${data.location.city}, ${data.location.region} ${data.location.postalCode}`}
                        {index === 2 && `UTC ${data.location.timezone}`}
                        {index === 3 && data.isp}
                      </p>
                    </div>
                    {index !== dataHeaders.length - 1 && <div className={"my-[43px] ml-8 hidden h-[75px] w-[1px] bg-black opacity-15 lg:flex"}></div>}
                  </div>
                </Fragment>
              ))}
            </>
          )}
        </div>
      </section>
      <SimpleMap />
    </main>
  );
}
