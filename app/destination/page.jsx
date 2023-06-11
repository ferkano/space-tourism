"use client";

import React, { useState } from "react";
import { destinations } from "../../public/data.json";
import Image from "next/image";
import { Barlow, Barlow_Condensed } from "next/font/google";

const barlowCondensed = Barlow_Condensed({
  weight: ["400"],
  variable: "--font-barlowC",
  subsets: ["latin"],
});

const barlow = Barlow({
  weight: ["400"],
  variable: "--font-barlow",
  subsets: ["latin"],
});

function Page() {
  const planets = destinations;

  const [value, setValue] = useState(0);
  const { name, images, description, distance, travel } = planets[value];

  return (
    <div className="flex text-white flex-col items-center lg:grid lg:grid-cols-2 lg:h-screen lg:items-start">
      <div className="flex flex-col items-center w-full lg:justify-start  lg:ms-[14px] lg:mt-[7px]">
        <div
          className={`${barlowCondensed.className} mt-[77px] flex tracking-[3.7px] gap-[14px] md:w-[100%] md:ps-[27px] md:mt-[116px] `}
        >
          <h3 className="font-bold lg:text-[22px]">01</h3>
          <h3 className="lg:text-[22px]">PICK YOUR DESTINATION</h3>
        </div>

        <Image
          className="mt-[14px] md:w-[300px] lg:mt-[69px]"
          src={images.png}
          alt={name}
          width="170"
          height="170"
        />
      </div>
      <div className="flex flex-col items-center lg:items-start lg:mt-[133px]">
        <div
          className={`${barlowCondensed.className} mt-[16px] flex gap-[18px] text-textPrimary md:mt-[38px]`}
        >
          {planets.map((el, index) => (
            <a
              className={` hover:cursor-pointer ${
                index === value && "border-b-2"
              }`}
              key={index}
              onClick={() => setValue(index)}
            >
              {el.name.toUpperCase()}
            </a>
          ))}
        </div>
        <h2 className="w-[187px] h-[64px] text-[53px] text-center lg:text-[84px]">
          {name.toUpperCase()}
        </h2>
        <p
          className={`${barlow.className} w-[327px] h-[125px] text-[15px] mt-[13px] text-center leading-[25px] text-textPrimary md:w-[573px] lg:w-[73%] lg:text-left lg:mt-[54px]`}
        >
          {description}
        </p>
        <div className="border-t-[1px] w-[327px] mt-[19px] border-gray-500 md:flex md:w-[550px] md:justify-evenly [&>div]:mt-[7px]  lg:items-start lg:justify-start lg:gap-[31px] lg:w-[79%]">
          <div className="flex flex-col items-center">
            <p
              className={`${barlowCondensed.className} text-textPrimary text-[14px] mt-[23px] md:mt-[0px] lg:w-full`}
            >
              AVG. DISTANCE
            </p>
            <p className="text-[28px]">{distance.toUpperCase()}</p>
          </div>
          <div className="flex items-center flex-col mt-[8px]">
            <p
              className={`${barlowCondensed.className} text-textPrimary text-[14px]`}
            >
              EST. TRAVEL TIME
            </p>
            <p className="text-[28px]">{travel.toUpperCase()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
