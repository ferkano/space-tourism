import { Mohave } from "next/font/google";

const mohave = Mohave({
  weight: ["400"],
  variable: "--font-mohave",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="bg-home-mobile md:bg-home-tablet w-screen h-screen absolute t-0 flex flex-col items-center bg-cover lg:bg-home-desktop lg:grid lg:grid-cols-[1fr_1fr] lg:justify-items-center">
      <div className=" flex flex-col items-center mt-[7rem] h-[276px]  w-[327px] text-white mx-[24px] lg:[&>*]:text-start">
        <h3
          className={`${mohave.className} text-textPrimary mx-[55px] text-[16px] tracking-[2.7px] w-full text-center`}
        >
          SO, YOU WANT TO TRAVEL TO
        </h3>
        <h1 className="w-[327px] text-[80px] text-center h-auto mt-[5px] lg:text-[111px] lg:mt-0 lg:h-[150px] ">
          SPACE
        </h1>
        <p
          className={`${mohave.className} w-[327px] mt-[30px] text-[15px] leading-[25px] text-textPrimary text-center lg:mt-0`}
        >
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <button className="tracking-[1.25px] w-[150px] h-[150px] bg-white rounded-full hover:scale-110 mt-[68px] text-[#0B0D17] lg:mt-[262px] ">
        EXPLORE
      </button>
    </main>
  );
}
