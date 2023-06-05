import React from "react";
import Image from "next/image";
import ButtonHamburg from "../Buttonhamburg";

function Header() {
  return (
    <div className="flex flex-nowrap  text-primary justify-between px-6 mt-6 absolute z-10 w-screen">
      <Image src="./images/shared/logo.svg" alt="logo" width="40" height="40" />
      <ButtonHamburg />
    </div>
  );
}

export default Header;
