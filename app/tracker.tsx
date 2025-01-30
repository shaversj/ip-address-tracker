import iconArrow from "./assets/icon-arrow.svg";
import { data, Form, useLoaderData } from "react-router";
import { Fragment, useEffect, useState } from "react";
import { useFetcher } from "react-router";
import type { Route } from "../.react-router/types/app/+types/root";
import type { IPAddressInfo } from "~/types/types";
import { useSubmit } from "react-router";
import { useCallback } from "react";

export function Tracker() {
  let data = useLoaderData();

  const dataHeaders = ["IP Address", "Location", "Timezone", "ISP"];
  const sampleData = ["192.212.174.101", "Brooklyn, NY 10001", "UTC -05:00", "SpaceX Starlink"];

  let fetcher = useFetcher();
  let errors = fetcher.data?.errors;

  // useEffect(() => {
  //   const formData = new FormData();
  //   formData.append("ipAddress", "");
  //   fetcher.submit(formData, { method: "post", action: "/" });
  // }, []);

  console.log("tracker_loader_data", data);

  return (
    <main className={"w-[1440px]"}>
      <header className={"flex h-[280px] flex-col items-center bg-[url('./assets/pattern-bg-desktop.png')] bg-no-repeat"}>
        <h1 className={"pt-[26px] text-heading-lg text-white lg:pt-[33px]"}>IP Address Tracker</h1>
        <fetcher.Form id={"ipForm"} method="post" className={"flex pt-[29px] lg:pt-[31px]"}>
          <input type={"text"} name={"ipAddress"} className={"h-[58px] w-[497px] rounded-l-[15px] pl-6 text-[18px] text-very-dark-gray outline-none placeholder:text-opacity-50"} placeholder={"Search for any IP address or domain"} />
          <button type={"submit"} className={"grid size-[58px] place-items-center rounded-r-[15px] bg-black"}>
            <img src={iconArrow} alt={"arrow"} />
          </button>
          {errors && <p className={"text-red-500"}>{errors.ipValidationErrors}</p>}
        </fetcher.Form>
      </header>

      <section className={"mx-[165px] rounded-[15px] border bg-white"}>
        <div className={"flex flex-col gap-y-6 lg:flex-row lg:gap-y-0"}>
          {data && (
            <>
              <Fragment>
                <div className={"flex items-center"}>
                  <div className={"ml-8 w-[213px]"}>
                    <h2 className={"justify-self-start text-data-label-sm font-bold uppercase text-dark-gray lg:text-data-label-lg"}>{dataHeaders[0]}</h2>
                    <p className={"pt-[7px] text-heading-sm text-very-dark-gray lg:pt-[13px] lg:text-heading-lg"}>{data.ip}</p>
                  </div>
                  <div className={"my-[43px] ml-8 hidden h-[75px] w-[1px] bg-black opacity-15 lg:flex"}></div>
                </div>
              </Fragment>

              <Fragment>
                <div className={"flex items-center"}>
                  <div className={"ml-8 w-[213px]"}>
                    <h2 className={"justify-self-start text-data-label-sm font-bold uppercase text-dark-gray lg:text-data-label-lg"}>{dataHeaders[1]}</h2>
                    <p className={"pt-[7px] text-heading-sm text-very-dark-gray lg:pt-[13px] lg:text-heading-lg"}>{`${data.location.city}, ${data.location.region} ${data.location.postalCode}`}</p>
                  </div>
                  <div className={"my-[43px] ml-8 hidden h-[75px] w-[1px] bg-black opacity-15 lg:flex"}></div>
                </div>
              </Fragment>

              <Fragment>
                <div className={"flex items-center"}>
                  <div className={"ml-8 w-[213px]"}>
                    <h2 className={"justify-self-start text-data-label-sm font-bold uppercase text-dark-gray lg:text-data-label-lg"}>{dataHeaders[2]}</h2>
                    <p className={"pt-[7px] text-heading-sm text-very-dark-gray lg:pt-[13px] lg:text-heading-lg"}>{`UTC ${data.location.timezone}`}</p>
                  </div>
                  <div className={"my-[43px] ml-8 hidden h-[75px] w-[1px] bg-black opacity-15 lg:flex"}></div>
                </div>
              </Fragment>

              <Fragment>
                <div className={"flex items-center"}>
                  <div className={"ml-8 w-[213px]"}>
                    <h2 className={"justify-self-start text-data-label-sm font-bold uppercase text-dark-gray lg:text-data-label-lg"}>{dataHeaders[3]}</h2>
                    <p className={"pt-[7px] text-heading-sm text-very-dark-gray lg:pt-[13px] lg:text-heading-lg"}>{data.isp}</p>
                  </div>
                  <div className={"my-[43px] ml-8 hidden h-[75px] w-[1px] bg-black opacity-15 lg:flex"}></div>
                </div>
              </Fragment>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
