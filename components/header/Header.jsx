"use client";
import React from "react";
import Image from "next/image";
import ButtonHamburg from "../Buttonhamburg";
import Link from "next/link";
import { Barlow_Condensed } from "next/font/google";
import ButtonExit from "../ButtonExit";
import { usePathname } from "next/navigation";

const barlowCondensed = Barlow_Condensed({
  weight: ["400"],
  variable: "--font-barlowC",
  subsets: ["latin"],
});

function Header() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <>
      {" "}
      <div className="flex flex-nowrap  text-primary justify-between px-6 mt-6 absolute z-10  w-full lg:ps-[48px] lg:pt-[28px]">
        <Image
          src="./images/shared/logo.svg"
          alt="logo"
          width="40"
          height="40"
        />
        <ButtonHamburg />
      </div>
      <div className="text-white absolute z-10 navbar translate-y-[-100%] h-screen w-[67%] backdrop-blur-3xl md:translate-y-0 md:w-[59%] md:h-[74px] md:right-0 md:bg-[#97979752] lg:mt-[27px]">
        <ButtonExit />

        <ul
          className={`${barlowCondensed.className} text-[16px] tracking-[2.7px] [&>li>a]:flex [&>li>a]:flex-row mt-[85px] [&>li>a]:gap-[7px] [&>li>a>p]:font-bold ms-[33px] flex flex-col gap-[24px] [&>li>a>p]:md:hidden md:flex-row md:mt-[22px] md:gap-[12px] md:mr-[20px] md:justify-end md:flex-nowrap [&>li>a>p]:lg:flex lg:justify-around `}
        >
          <li className="bg-red">
            <Link href="/">
              {" "}
              <p>00</p> HOME
            </Link>
          </li>
          <li>
            <Link href="/destination">
              {" "}
              <p>01</p>DESTINATION
            </Link>
          </li>
          <li>
            <Link href="/crew">
              <p>02</p>CREW
            </Link>
          </li>
          <li>
            <Link href="/technology">
              <p>03</p> TECHNOLOGY
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
