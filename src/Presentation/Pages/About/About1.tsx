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
      <div className="flex flex-col md:flex-row lg:justify-between items-center lg:px-4 lg:gap-20  w-screen mt-5 ">
        <div className="h-36 w-[20%] md:px-8">
          <img
            className="md:w-[50%]"
            src={APP_ASSETS.HOME_IMG1}
            alt="Services"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-100vw p-[3%] md:w-2/3 m-[4%] my-[10%]">
          <p className=" text-black md:text-9xl font-bold text-center">
            CISTEC
          </p>
        </div>
      </div>
    </div>
  );
}

export default About1;
