import APP_ASSETS from "../../../Config/assets";

const About4 = () => {
  return (
    <>
      <div
        className="flex flex-col md:flex-row justify-center items-center py-20"
        style={{
          backgroundImage: `url(${APP_ASSETS.ABOUT_BG3})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col p-8 md:w-1/2">
          <h5 className="poppins-bold text-[#8C4D27] text-3xl text-center ">
            Misión
          </h5>
          <p className="poppins-regular text-justify mt-4">
            Nuestra misión es comprometernos a generar un valor constante para
            nuestros clientes y personal, proporcionando una asesoría completa
            que satisfaga sus necesidades. Buscamos desarrollar integralmente el
            mejor capital humano, basado en nuestros valores. Además, nos
            esforzamos por cumplir plenamente las expectativas de nuestros
            clientes a través de la constante innovación.
          </p>
        </div>
        <div className="flex flex-col p-8 md:w-1/2 ">
          <h5 className="poppins-bold text-[#D18B44] text-3xl text-center ">
            Visión
          </h5>
          <p className="poppins-regular text-justify mt-4">
            Nuestra visión es convertirnos en una empresa líder en la
            fabricación de estructuras metálicas, logrando la satisfacción de
            nuestros clientes a nivel nacional. Nos enfocamos en brindar
            servicios de calidad, respaldados por un equipo de profesionales
            capacitados que ofrecen asesoría técnica de excelencia. Nuestro
            objetivo es sentir el bienestar de hacer las cosas bien, asegurando
            la satisfacción de nuestros clientes en cada proyecto.
          </p>
        </div>
      </div>
      <div className=" hidden md:flex md:flex-row mt-[-100px] mb-4 items-end">
        <div className="flex flex-col w-1/2 items-end">
          <img src={APP_ASSETS.LOGO2} alt="" width={"50px"} />
          <hr className="w-screen my-2 border-t-4 border-[#B36028] " />
        </div>
        <div className="w-1/2">
          <hr className=" my-2 border-t-4 border-[#D9D9D9] " />
        </div>
      </div>
    </>
  );
};

export default About4;
