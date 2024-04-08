import React from "react";
import APP_ASSETS from "../../../Config/assets";

function Contact2() {
  return (
    <div
      className="bg-white flex flex-col py-16 md:py-0 justify-center items-center md:my-[5%]"
      style={{
        backgroundImage: `url(${APP_ASSETS.CONTACT_BG2})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex w-screen justify-center items-center">
        <iframe
          className="w-[90%] h-[50vh] lg:h-[70vh] justify-center border-solid border-8 border-white md:mt-10"
          src="https://maps.google.com/maps?q=-0.1240276,-78.4721252&z=15&output=embed"
          aria-hidden="false"
        ></iframe>
      </div>
      <section className="bg-[#D9D9D9] w-[90%] md:w-5/12 mx-6 md:mx-40 rounded-lg p-5 md:p-10 mt-10 items-center">
        <div className="flex flex-row gap-4">
          <img src={APP_ASSETS.CONTACT_ICON1} alt="" />
          <p className="poppins-semibold text-2xl md:text-3xl">Oficinas</p>
        </div>
        <hr className="my-2 border-t-4 border-white" />
        <div className="flex flex-row gap-4 md:my-4">
          <img src={APP_ASSETS.CONTACT_ICON2} alt="" />
          <p className="poppins-light text-sm md:text-lg">02 247 - 8355</p>
        </div>
        <div className="flex flex-row gap-4 md:mb-2">
          <img src={APP_ASSETS.CONTACT_ICON3} alt="" />
          <p className="poppins-light text-sm md:text-lg">
            099 983 - 8941 - 098 767 - 9492
          </p>
        </div>
        <div className="flex flex-row gap-4 md:my-4">
          <img src={APP_ASSETS.CONTACT_ICON4} alt="" />
          <p className="poppins-light text-sm md:text-lg">
            info@cistececuador.com
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <p className="poppins-light text-sm md:text-lg leading-6">
            <img src={APP_ASSETS.CONTACT_ICON5} alt="" />
            Nazareth OE 1-33 y Av. Galo Plaza Lasso <br />
            Quito, Pichincha 170530
          </p>
        </div>
      </section>
    </div>
  );
}

export default Contact2;
