import type { FetcherWithComponents } from "react-router";
import iconArrow from "~/assets/icon-arrow.svg";
import React from "react";

type HeaderProps = {
  fetcher: FetcherWithComponents<any>;
};

export default function Header({ fetcher }: HeaderProps) {
  let error = fetcher.data?.error;
  return (
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
  );
}
