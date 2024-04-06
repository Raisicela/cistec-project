import React from "react";
import APP_ASSETS from "../../../Config/assets";

const Home1 = () => {
  return (
    <div
      className="md:h-[60%] lg:h-auto lg:w-screen bg-white flex flex-row"
      style={{
        backgroundImage: `url(${APP_ASSETS.HOME_BG1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col md:flex-row lg:justify-between items-center lg:px-4 lg:gap-20  w-screen mt-5 ">
        <div className="flex flex-col items-center justify-center border-solid border-4 border-black w-90vw p-[3%] md:w-2/3 m-[4%] my-[10%]">
          <p className="font-poppins text-black text-[29px] md:text-[44px] lg:text-[50px] font-bold text-center">
            ESPECIALISTAS EN CONSTRUCCIÓN
          </p>
          <p className="font-poppins text-black text-[18px] lg:text-[35px] text-center">
            CIVIL E INDUSTRIAL DEL ECUADOR
          </p>
        </div>
        <div className=" h-64 w-[30%] md:px-8 ">
          <img
            className="md:w-[70%]"
            src={APP_ASSETS.HOME_IMG1}
            alt="Services"
          />
        </div>
      </div>
    </div>
  );
};

export default Home1;
