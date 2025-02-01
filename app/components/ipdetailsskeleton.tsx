import React, { Fragment } from "react";

export default function IpDetailsSkeleton() {
  const dataHeaders = ["IP Address", "Location", "Timezone", "ISP"];

  return (
    <section className={"absolute left-1/2 z-30 h-[294px] w-[327px] -translate-x-1/2 -translate-y-1/2 transform rounded-[15px] border bg-white pt-[20px] md:mt-[30px] lg:mt-0 lg:h-auto lg:w-auto lg:pt-0"}>
      <div className={"flex flex-col items-center gap-y-6 lg:flex-row lg:items-baseline lg:gap-y-0"}>
        {dataHeaders.map((header, index) => (
          <Fragment key={index}>
            <div className={"flex items-center"}>
              <div className={"lg:ml-8 lg:w-[213px]"}>
                <h2 className={"justify-self-center text-data-label-sm font-bold uppercase text-dark-gray lg:justify-self-start lg:text-data-label-lg"}>{header}</h2>
                <p className={"pt-[7px] text-heading-sm text-very-dark-gray lg:pt-[13px] lg:text-heading-lg"}>Loading...</p>
              </div>
              {index !== dataHeaders.length - 1 && <div className={"my-[43px] ml-8 hidden h-[75px] w-[1px] bg-black opacity-15 lg:flex"}></div>}
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
