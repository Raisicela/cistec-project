import APP_ASSETS from "../../../Config/assets";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../Config/Routes";

const Home2 = () => {
  return (
    <div
      className="bg-white flex flex-row py-16 md:py-0"
      style={{
        backgroundImage: `url(${APP_ASSETS.HOME_BG5})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex-col flex bg-transparent items-center my-[10%] md:my-0 md:py-0">
        <div className="flex flex-col justify-center items-center my-[10%] md:my-0 h-screen px-10 md:px-40">
          <p className="poppins-regular text-sm md:text-xl text-[#00000080] md:justify-items-end">
            PORQUE SOMOS TRANSPARENTES
          </p>
          <p className="poppins-semibold text-lg md:text-4xl text-[#000000] text-center md:items-end mx-5">
            ¿Quienes Somos?
          </p>
          <p className="poppins-light text-sm md:text-lg  md:px-0 text-justify text-black pt-10 md:pt-[5%]">
            Construye tus sueños con CISTEC, nuestra amplia experiencia en
            diseño, cálculo, ingenierías, fabricación, construcción y montaje de
            estructuras metálicas. Con 22 años de servicio, garantizamos
            calidad, responsabilidad civil y profesionalismo en obras de
            construcción que van desde proyectos residenciales hasta comerciales
            e industriales en todo el país.
          </p>
          <p className="poppins-light text-sm md:text-lg  md:px-0 text-justify text-black pt-10 md:pt-[5%]">
            Mantenemos altos estándares de calidad en el proceso de producción
            de las estructuras metálicas, así como en el diseño y asesoría. Todo
            esto es posible gracias a nuestro equipo de ingenieros y arquitectos
            altamente capacitados en CISTEC.
          </p>
          <p className="poppins-light text-sm md:text-lg text-justify text-black pt-10 md:pt-[5%]">
            Nos comprometemos a satisfacer a todos nuestros clientes con la
            mejor calidad en todos los servicios. Contamos con la mejor
            infraestructura y personal calificado para llevar a cabo la
            construcción completa de cualquier proyecto.
          </p>
          <p className="poppins-light text-sm md:text-lg text-justify text-black pt-10 md:pt-[5%]">
            En CISTEC, establecemos un modelo de liderazgo a nivel nacional con
            el objetivo de cumplir y superar las expectativas de nuestros
            clientes a través de la constante innovación y el desarrollo
            integral de nuestro personal. Buscando generar un valor constante en
            cada uno de nuestros clientes.
          </p>
          <div className="justify-end">
            <button className="mt-10">
              <Link
                to={ROUTES.ABOUT}
                className="bg-[#B35F27] text-white w-[170px] rounded-md p-3"
              >
                Más de nosotros
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2;
