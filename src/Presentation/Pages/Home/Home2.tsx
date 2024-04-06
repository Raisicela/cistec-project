import APP_ASSETS from "../../../Config/assets";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../Config/Routes";

const Home2 = () => {
  return (
    <div className="flex-col md:h-screen flex bg-white md:flex-row justify-center items-center mt-[10%] md:mt-0 lg:mt-10">
      <div className="flex flex-col md:w-3/5 items-center md:items-start md:pl-24 px-8">
        <p className="poppins-semibold text-[24px] lg:text-[50px] text-black text-center lg:text-start ">
          Combinamos diseño, innovación, eficiencia y seguridad
        </p>
        <p className="poppins-light text-[10px] lg:text-[17px]  md:px-0 text-justify text-black pt-10 md:pt-[5%]">
          Somos una empresa dedicada a la construcción, comprometida en brindar
          soluciones integrales, innovadoras y de calidad para satisfacer las
          necesidades de nuestros clientes. Con una trayectoria de 23 años en el
          sector, nos enorgullece ofrecer servicios de construcción, abarcando
          desde proyectos residenciales hasta comerciales e industriales.
        </p>
        <div className="justify-center mt-10">
          <Link
            to={ROUTES.PROJECTS}
            className="bg-[#B35F27] text-white w-[170px] rounded-md p-3"
          >
            Explorar más
          </Link>
        </div>
      </div>
      <div className="hidden md:block md:w-2/5 justify-center items-center">
        <img
          className="w-[100%] h-auto  "
          src={APP_ASSETS.HOME_IMG2}
          alt="About Us"
        />
      </div>
      <div className="block md:hidden md:w[100%] justify-center items-center">
        <img
          className="w-[100%] h-auto mt-5 "
          src={APP_ASSETS.HOME_IMG3}
          alt="About Us"
        />
      </div>
    </div>
  );
};

export default Home2;
