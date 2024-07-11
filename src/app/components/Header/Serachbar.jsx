import React from "react";
import Image from "next/image";
export default function SearchInput() {
  return (
    <div
      className="relative flex w-[300px] h-[40px] gap-0"
      style={{
        position: "absolute",
        top: "20px",
        left: "425px",
      }}
    >
      <input
        type="search"
        className="block min-h-[auto] w-full rounded-l-md bg-searchInputBg border-0 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 bg-gray-800 text-white"
        placeholder="Search"
        aria-label="Search"
        id="exampleFormControlInput"
        aria-describedby="basic-addon1"
      />
      <label
        htmlFor="exampleFormControlInput"
        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
      >
        Search here ....
      </label>
      <button
        className="relative z-[2] flex items-center rounded-r-md bg-searchIcon px-5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-accent-300 focus:bg-primary-accent-300 focus:outline-none active:bg-primary-600"
        type="button"
        id="button-addon1"
        data-twe-ripple-init
        data-twe-ripple-color="light"
      >
        <span className="h-5 w-4">
          <Image src="/search.svg" alt="image" />
        </span>
      </button>
    </div>
  );
}
