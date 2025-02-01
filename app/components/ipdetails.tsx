import React, { Fragment } from "react";
import type { IPAddressInfo } from "~/types/types";
import { getOffsetFromUTC } from "~/util/util";

export default function IpDetails({ ipGeoLocation }: { ipGeoLocation: IPAddressInfo }) {
  const dataHeaders = ["IP Address", "Location", "Timezone", "ISP"];
  return (
    <section className={"absolute left-1/2 z-30 mt-[20px] h-[320px] w-[327px] -translate-x-1/2 -translate-y-1/2 transform rounded-[15px] border bg-white pt-[20px] md:mt-[30px] lg:mt-0 lg:h-auto lg:w-auto lg:pt-0"}>
      <div className={"flex flex-col items-center gap-y-6 lg:flex-row lg:items-baseline lg:gap-y-0"}>
        {ipGeoLocation?.query && (
          <>
            {dataHeaders.map((header, index) => (
              <Fragment key={index}>
                <div className={"flex items-center"}>
                  <div className={"ml-8 w-[213px]"}>
                    <h2 className={"justify-self-start text-data-label-sm font-bold uppercase text-dark-gray lg:text-data-label-lg"}>{header}</h2>
                    <p className={"pt-[7px] text-heading-sm text-very-dark-gray lg:pt-[13px] lg:text-heading-lg"}>
                      {index === 0 && ipGeoLocation.query}
                      {index === 1 && `${ipGeoLocation.city}, ${ipGeoLocation.regionName} ${ipGeoLocation.zip}`}
                      {index === 2 && `UTC ${getOffsetFromUTC(ipGeoLocation.timezone)}`}
                      {index === 3 && ipGeoLocation.isp}
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
  );
}
