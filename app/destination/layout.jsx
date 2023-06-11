import React from "react";

function layout({ children }) {
  return (
    <main className="bg-destinations-mobile md:bg-destinations-tablet lg:bg-destinations-desktop w-full h-full bg-cover lg:h-screen min-h-screen max-h-full">
      {children}
    </main>
  );
}

export default layout;
