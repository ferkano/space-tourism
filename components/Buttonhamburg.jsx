import React from "react";
import Image from "next/image";

function ButtonHamburg() {
  return (
    <div className="hover:cursor-pointer">
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
