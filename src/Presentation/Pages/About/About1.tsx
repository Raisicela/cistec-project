import React from "react";
import APP_ASSETS from "../../../Config/assets";

function About1() {
  return (
    <div
      className="md:h-[60%] lg:h-auto lg:w-screen bg-white flex flex-row"
      style={{
        backgroundImage: `url(${APP_ASSETS.ABOUT_BG1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col md:flex-row md:justify-center items-center lg:px-4 lg:gap-20  w-screen mt-5 ">
        <div className="hidden xl:block  md:px-8 xl:absolute xl:top-10 xl:left-5">
          <img
            className="md:w-[10%] aspect-auto"
            src={APP_ASSETS.HOME_IMG1}
            alt="Quienes somos"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-90vw p-[3%] md:w-2/3 m-[4%] my-[10%]">
          <p className=" text-black text-[29px] md:text-[44px] lg:text-7xl font-bold text-center">
            CISTEC
          </p>
        </div>
      </div>
    </div>
  );
}

export default About1;
