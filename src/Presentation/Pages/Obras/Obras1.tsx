import APP_ASSETS from "../../../Config/assets";

const Obras1 = () => {
  return (
    <div
      className=" lg:w-screen bg-white flex flex-row"
      style={{
        backgroundImage: `url(${APP_ASSETS.OBRAS_BG1})`,
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
            alt="Services"
          />
        </div>
        <div className="flex flex-col items-center justify-center border-solid border-4 border-white w-90vw p-[3%] md:w-2/3 m-[4%] my-[10%]">
          <p className="poppins-black text-white text-[29px] md:text-[44px] lg:text-[50px] font-bold text-center">
            NUESTROS
          </p>
          <p className="poppins-light text-white text-[18px] lg:text-[35px] text-center">
            TRABAJOS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Obras1;
