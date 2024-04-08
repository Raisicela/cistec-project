import APP_ASSETS from "../../../Config/assets";

const About2 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center ">
      <div className="flex flex-col p-8 md:w-1/2">
        <h5 className="poppins-bold text-3xl text-center md:text-start">
          ¿Quienes Somos?
        </h5>
        <p className="poppins-regular text-justify mt-4">
          Somos una empresa ecuatoriana que opera desde el año 2001, enfocada en
          la construcción civil e industrial en todo el país. Nos especializamos
          en el diseño, cálculo, fabricación, construcción y montaje de una
          amplia gama de estructuras, incluyendo bodegas, galpones, edificios,
          coliseos, viviendas, naves industriales, hangares, estructuras en
          acero inoxidable, pasamanos, escaleras, pérgolas, entre otros.
        </p>
      </div>
      <div
        className=" md:h-auto bg-white flex flex-row pl-8 pb-3 md:w-1/2"
        style={{
          backgroundImage: `url(${APP_ASSETS.ABOUT_BG2_2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img
          className="md:mt-[-40px]"
          src={APP_ASSETS.ABOUT_BG2_1}
          alt="About"
        />
      </div>
    </div>
  );
};

export default About2;
