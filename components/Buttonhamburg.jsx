"use client";

import React from "react";
import Image from "next/image";

function ButtonHamburg() {
  const handleClick = () => {
    const navbar = document.querySelector(".navbar");

    navbar.classList.toggle("open");
  };
  return (
    <div
      className="hover:cursor-pointer w-[24px] flex justify-center items-center md:hidden"
      onClick={() => handleClick()}
    >
      <Image
        src="./images/shared/icon-hamburger.svg"
        alt="btn-hamburg"
        width="40"
        height="40"
      />
    </div>
  );
}

export default ButtonHamburg;
