import React from "react";
import APP_ASSETS from "../../../Config/assets";
import { ROUTES } from "../../../Config/Routes";
import { Link } from "react-router-dom";

function Home7() {
  return (
    <div
      className="bg-white flex flex-col py-16 md:py-0 justify-center items-center"
      style={{
        backgroundImage: `url(${APP_ASSETS.HOME_BG7})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="justify-center  my-20">
        <button className="justify-center mt-[15%] md:mt-[10%]">
          <Link
            to={ROUTES.CATALOG}
            className="bg-[#B35F27] text-white w-[170px] rounded-3xl p-4"
          >
            Catálogo
          </Link>
        </button>
      </div>
      <section className="bg-[#D9D9D9] w-[90%] flex flex-col justify-center md:w-5/12 mx-6 md:mx-40 rounded-lg p-5 md:p-10 mb-10 items-center">
        <h1 className=" text-9xl">"</h1>
        <p className="poppins-bold text-5xl text-center">NUESTRO TRABAJO</p>
        <p className="poppins-regular text-3xl text-center">
          garantiza calidad
        </p>
      </section>
    </div>
  );
}

export default Home7;
