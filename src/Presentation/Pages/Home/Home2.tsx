import APP_ASSETS from "../../../Config/assets";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../Config/Routes";

const Home2 = () => {
  return (
    <section className="flex-col md:h-screen flex bg-white md:flex-row justify-center items-center my-[10%] md:my-0">
      <article className="flex flex-col md:w-3/5 items-center md:items-start md:pl-24 px-8">
        <p className="poppins-semibold text-lg md:text-5xl text-black text-center lg:text-start ">
          Combinamos diseño, innovación, eficiencia y seguridad
        </p>
        <p className="poppins-light text-sm md:text-lg text-justify text-black pt-10 md:mt-[5%]">
          Somos una empresa dedicada a la construcción, comprometida en brindar
          soluciones integrales, innovadoras y de calidad para satisfacer las
          necesidades de nuestros clientes. Con una trayectoria de 23 años en el
          sector, nos enorgullece ofrecer servicios de construcción, abarcando
          desde proyectos residenciales hasta comerciales e industriales.
        </p>
        <button className="justify-center mt-[15%] md:mt-[10%]">
          <Link
            to={ROUTES.PROJECTS}
            className="bg-[#B35F27] text-white w-[170px] rounded-3xl p-4"
          >
            Explorar más
          </Link>
        </button>
      </article>
      <figure className="hidden md:block md:w-2/5 justify-center items-center">
        <img
          className="w-[100%] h-auto  "
          src={APP_ASSETS.HOME_IMG2}
          alt="About Us"
        />
      </figure>
      <figure className="block md:hidden md:w[100%] justify-center items-center">
        <img
          className="w-[100%] h-auto mt-5 "
          src={APP_ASSETS.HOME_IMG3}
          alt="About Us"
        />
      </figure>
    </section>
  );
};

export default Home2;
