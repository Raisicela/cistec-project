import React from "react";
import APP_ASSETS from "../../../Config/assets";

function Catalog1() {
  return (
    <div
      className=" md:h-auto md:w-screen bg-white flex flex-row"
      style={{
        backgroundImage: `url(${APP_ASSETS.CATALOG_BG1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col md:flex-row md:justify-end items-center lg:px-4 lg:gap-20  w-screen mt-5 md:my-[10%] ">
        <div className="hidden xl:block  md:px-8 xl:absolute xl:top-10 xl:left-5">
          <img
            className="md:w-[10%] aspect-auto"
            src={APP_ASSETS.HOME_IMG1}
            alt="Quienes somos"
          />
        </div>
        <div className="flex flex-col items-center justify-center border-solid border-4 border-black w-90vw  md:w-1/3 mt-10 mx-[12%]">
          <p className="poppins-black text-black text-[29px] md:text-[44px] lg:text-[50px] font-bold text-center">
            CATÁLOGO
          </p>
          <p className="poppins-light text-black text-[18px] lg:text-[35px] text-center">
            DE SERVICIOS
          </p>
        </div>
      </div>
    </div>
  );
}

export default Catalog1;
