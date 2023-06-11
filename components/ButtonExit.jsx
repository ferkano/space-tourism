"use client";

import React from "react";
import Image from "next/image";

function ButtonExit() {
  const handleClick = () => {
    const navbar = document.querySelector(".navbar");

    navbar.classList.toggle("open");
  };
  return (
    <div
      className="hover:cursor-pointer w-[24px] flex justify-center items-center ms-[188px] mt-[48px] md:hidden"
      onClick={() => handleClick()}
    >
      <Image
        src="/images/shared/icon-close.svg"
        alt="btn-close"
        width="40"
        height="40"
      />
    </div>
  );
}

export default ButtonExit;
