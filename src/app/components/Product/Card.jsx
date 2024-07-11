import React from "react";
import Image from "next/image";
const Card = ({ desc, buttonItem, src, heading }) => {
  return (
    <div
      className="flex flex-col mt-10 text-gray-700 bg-white rounded mx-4 sm:ml-8"
      style={{
        border: "2px solid #CED4DA",
        width: "calc(100% - 2rem)",
        maxWidth: "608px",
        height: "auto",
        minHeight: "297px",
      }}
    >
      <div className="p-4">
        <div className="flex items-center">
          <Image
            src={src}
            className="w-8 h-8 sm:w-10 sm:h-10 mr-2 ml-2 sm:ml-10 mt-4 sm:mt-7"
            alt="Program Icon"
          />
          <div className="font-sans text-lg sm:text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 ml-2 sm:ml-5 mt-4 sm:mt-7">
            {heading}
          </div>
        </div>
        <div
          className="block font-sans text-base sm:text-lg antialiased font-medium leading-relaxed text-inherit p-2 sm:p-4 mt-2 sm:mt-4"
          style={{
            width: "100%",
            maxWidth: "520px",
            height: "auto",
            minHeight: "54px",
          }}
        >
          {desc}
        </div>
      </div>
      <div className="p-4 sm:p-10 pt-4 sm:pt-19">
        <button className="relative bg-transparent text-searchIcon font-semibold py-1 px-4 border border-searchIcon rounded shadow-md transition-all duration-300 ease-in-out hover:bg-blue-500 hover:text-white hover:border-transparent">
          {buttonItem}
        </button>
      </div>
    </div>
  );
};

export default Card;
