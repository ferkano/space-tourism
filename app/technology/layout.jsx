import React from "react";

function layout({ children }) {
  return (
    <div className="bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop  w-full h-full bg-cover min-h-screen max-h-full">
      {children}
    </div>
  );
}

export default layout;
