import { type FetcherWithComponents, useLoaderData } from "react-router";
import iconArrow from "/icon-arrow.svg";

type HeaderProps = {
  fetcher: FetcherWithComponents<any>;
};

export default function Header({ fetcher }: HeaderProps) {
  const fetcherError = fetcher.data?.error;
  const loaderData = useLoaderData();
  const loaderError = loaderData?.error;

  return (
    <header className={"flex h-[300px] flex-col items-center px-6 md:h-[280px]"}>
      <picture className={"absolute"}>
        <source srcSet={"/pattern-bg-desktop.webp"} type="image/webp" media="(min-width: 768px)" />
        <img src={"/pattern-bg-mobile.webp"} alt={"background"} className={"h-[300px] md:h-[280px]"} />
      </picture>
      <h1 className={"z-40 pt-[26px] text-heading-lg text-white lg:pt-[33px]"}>IP Address Tracker</h1>
      <fetcher.Form id={"ipForm"} method="post" className={"z-40 flex flex-col pt-[29px] lg:pt-[31px]"}>
        <div className={"flex"}>
          <input
            type={"text"}
            name={"ipAddress"}
            className={"h-[58px] w-[269px] rounded-l-[15px] pl-6 text-[18px] text-very-dark-gray outline-none placeholder:text-[14px] placeholder:text-opacity-50 md:w-[497px] md:placeholder:text-[18px]"}
            placeholder={"Search for any IP address or domain"}
          />
          <button type={"submit"} className={"grid size-[58px] place-items-center rounded-r-[15px] bg-black"}>
            <img src={iconArrow} alt={"arrow"} />
          </button>
        </div>
        {(loaderError || fetcherError) && (
          <div className={"mx-auto pt-2 font-medium text-red-500"}>
            <span>Error: </span>
            {loaderError || fetcherError}
          </div>
        )}
      </fetcher.Form>
    </header>
  );
}
