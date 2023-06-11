"use client";

import React, { useState } from "react";
import { technology } from "../../public/data.json";
import Image from "next/image";
import { Barlow, Barlow_Condensed } from "next/font/google";

const barlow = Barlow({
  weight: ["400"],
  variable: "--font-barlow",
  subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
  weight: ["400"],
  variable: "--font-barlowC",
  subsets: ["latin"],
});

function Page() {
  const tech = technology;

  const [value, setValue] = useState(0);

  const { name, images, description } = technology[value];

  return (
    <div className="text-white flex flex-col items-center lg:grid lg:grid-cols-2 lg:grid-rows-[175px_1fr]">
      <div
        className={`${barlowCondensed.className} mt-[90px] flex items-center gap-[12px] tracking-[2.7px] md:w-full md:ps-[30px] md:mt-[107px] lg:col-start-1 lg:row-start-1 `}
      >
        <h2 className="text-[16px] font-bold lg:text-[22px]">03</h2>
        <h2 className="text-[16px] lg:text-[22px]">SPACE LAUNCH 101</h2>
      </div>
      <Image
        className="hidden  mt-[21px] md:mt-[34px] lg:col-start-2 lg:flex lg:row-start-2 lg:row-end-3 lg:justify-self-end"
        src={images.portrait}
        width="400"
        height="858"
        alt={name}
      />
      <Image
        className="w-full mt-[21px] md:mt-[34px] lg:col-start-2 lg:hidden"
        src={images.landscape}
        width="375"
        height="170"
        alt={name}
      />
      <div className="flex flex-col items-center lg:grid lg:grid-cols-[200px_1fr] lg:col-start-1">
        <div className="mt-[24px] flex content-center gap-[15px] lg:col-start-1 lg:flex lg:flex-col lg:items-center lg:row-start-1 lg:row-end-4">
          {tech.map((el, index) => (
            <button
              className={`hover:cursor-pointer broder-white text-[20px] border-2 rounded-full h-10 w-10 p-1 ${
                index === value && "bg-white text-gray-800"
              }`}
              href="#"
              key={index}
              onClick={(arg) => setValue(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <h3
          className={`${barlowCondensed.className} text-textPrimary mt-[18px] text-[14px] tracking-[2.36px] lg:col-start-2`}
        >
          THE TERMINOLOGY...
        </h3>
        <h2 className="mt-[4px] text-[24px] lg:col-start-2">
          {name.toUpperCase()}
        </h2>
        <p
          className={`${barlow.className}  mt-[18px] w-[327px] text-center text-[15px] text-textPrimary md:w-[60%] lg:col-start-2 lg:w-full lg:text-left`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default Page;
