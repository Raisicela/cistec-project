import APP_ASSETS from "../../Config/assets";
import URLS from "../../Config/urls";

const Footer = () => {
  return (
    <div className="flex flex-col w-screen bg-[#000000C0] md:flex-row">
      <section className="flex flex-col p-5">
        <h5 className="poppins-bold text-white text-3xl">Contacto:</h5>

        <div className="flex flex-row gap-4 md:my-4 mt-5 items-center ">
          <img src={APP_ASSETS.CONTACT_ICON2} alt="" />
          <p className="poppins-light text-sm md:text-lg text-white">
            02 247 - 8355
          </p>
        </div>
        <div className="flex flex-row gap-4 md:mb-2 items-center">
          <img src={APP_ASSETS.CONTACT_ICON3} alt="" />
          <p className="poppins-light text-sm md:text-lg text-white">
            099 983 - 8941 - 098 767 - 9492
          </p>
        </div>
        <div className="flex flex-row gap-4 md:my-4 items-center">
          <img src={APP_ASSETS.CONTACT_ICON4} alt="" />
          <p className="poppins-light text-sm md:text-lg text-white">
            info@cistececuador.com
          </p>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <img src={APP_ASSETS.CONTACT_ICON5} alt="" />
          <p className="poppins-light text-sm md:text-lg text-white leading-6">
            Nazareth OE 1-33 y Av. Galo Plaza Lasso Quito, Pichincha 170530
          </p>
        </div>
      </section>

      <div className="bg-white p-4 lg:mt-[-3vw] mb-4 md:hidden lg:block">
        <div className=" p-5 flex flex-row justify-center bg-[#D9D9D9]  lg:px-10">
          <img src={APP_ASSETS.LOGO} alt="" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-6 px-6">
        <h6 className="text-white text-2xl text-center">
          Hagamos algo grande juntos
        </h6>
        <p className="poppins-regular text-white text-center mt-4">
          ¡Contáctenos hoy mismo para obtener una cotización personalizada!
        </p>
        <div className="flex flex-row justify-around px-6 lg:gap-2 md:gap-0 mt-4">
          <button onClick={() => window.open(URLS.FACEBOOK, "_blank")}>
            <img
              className="w-7 h-8 p-2"
              src={APP_ASSETS.LOGO_FACEBOOK}
              alt="Facebook"
            />
          </button>
          <button onClick={() => window.open(URLS.INSTAGRAM, "_blank")}>
            <img
              className="w-9 h-9 p-2"
              src={APP_ASSETS.LOGO_INSTAGRAM}
              alt="Instagram"
            />
          </button>

          <button onClick={() => window.open(URLS.LINKEDIN, "_blank")}>
            <img
              className="w-8 h-8 p-2"
              src={APP_ASSETS.LOGO_LINKEDIN}
              alt="LinkedIn"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
