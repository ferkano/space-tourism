import React from "react";

function layout({ children }) {
  return (
    <div className="bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop w-full h-full bg-cover flex justify-center min-h-screen max-h-full">
      {children}
    </div>
  );
}

export default layout;
