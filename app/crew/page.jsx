"use client";
import React, { useState } from "react";
import { crew } from "../../public/data.json";
import Image from "next/image";
import { Barlow, Barlow_Condensed } from "next/font/google";
import { BsCircle } from "react-icons/bs";

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
  const crews = crew;
  const [value, setValue] = useState(0);
  const { name, images, role, bio } = crews[value];

  return (
    <div className="text-white md:grid md:w-full lg:grid lg:grid-cols-2">
      <div
        className={`${barlowCondensed.className} mt-[83px] flex justify-center gap-[13px] tracking-[2.7px] md:row-[1] md:w-full md:ps-[42px] md:mt-[103px] md:justify-start lg:col-start-1 lg:row-start-2`}
      >
        <h2 className="text-[16px] font-bold lg:text-[21px]">02</h2>
        <h2 className="text-[16px] lg:text-[21px]">MEET YOUR CREW</h2>
      </div>
      <div className="w-[327px] h-[223px]  border-gray-500 md:row-[6] md:border-b-0 md:flex md:justify-center  md:w-full md:items-end  lg:row-start-3 lg:row-end-7 lg:self-end">
        <Image
          className="mx-auto mt-[30px] lg:w-[284px]"
          src={images.png}
          width="150"
          height="112"
          alt={name}
        />
      </div>

      <div className="flex justify-center mt-[14px] md:row-[5] lg:col-start-1 lg:row-start-6 lg:flex lg:justify-start lg:ms-[41px]">
        {crews.map((el, index) => (
          <button
            className={` hover:cursor-pointer rounded-full h-5 mx-2 ${
              index === value && "bg-white"
            } `}
            key={index}
            onClick={() => setValue(index)}
          >
            <BsCircle className="h-5 w-5" />
          </button>
        ))}
      </div>
      <div className="mt-[28px] text-center text-[16px] md:row-[2] lg:col-start-1 lg:row-start-3 lg:text-start lg:ms-[41px] lg:self-center">
        {role.toUpperCase()}
      </div>
      <div className="text-[24px] text-center mt-[5px] md:row-[3] lg:col-start-1 lg:row-start-4 lg:text-start lg:ms-[41px] lg:self-center ">
        {name.toUpperCase()}
      </div>
      <div className="md:flex md:justify-center lg:col-start-1 lg:row-start-5 lg:justify-start lg:ms-[41px] lg:text-start">
        <div
          className={`${barlow.className} text-[15px] w-[327px] text-center mt-[17px] text-textPrimary mb-[11px] md:row-[4] md:justify-center lg:text-start`}
        >
          {bio}
        </div>
      </div>
    </div>
  );
}

export default Page;
