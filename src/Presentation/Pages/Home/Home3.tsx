import React from "react";
import "./Home.css";
import APP_ASSETS from "../../../Config/assets";

const items: ItemProps[] = [
  {
    title: "01",
    subtitle: "Diseño arquitectónico y estructural",
    description: `Nuestro equipo de arquitectos e ingenieros
        con amplia experiencia, trabaja estrechamente
        contigo para comprender tus necesidades
        y visiones. A través de un proceso colaborativo,
        creamos diseños innovadores y funcionales
        que se ajusten a tus requerimientos y
        cumpliendo con las normativas vigentes.`,
  },
  {
    title: "02",
    subtitle: "Cálculo",
    description: `Contamos con software de vanguardia (Tekla),
        acompañado de los años de experiencia, nuestros cálculos precisos nos permiten optimizar los recursos y minimizar los costos sin comprometer la calidad.`,
  },
  {
    title: "03",
    subtitle:
      "Ingenierías y arquitecturasMantenimiento y reparación de espacios",
    description: `Nuestro equipo de expertos se encarga de
        desarrollar los planos con todas sus
        especificaciones técnicas necesarias para
        asesoría y gestión de trámites municipales,
        elaborando todos los planos arquitectónicos,
        estructurales, hidrosanitarios y eléctricos según
        todas las normas que solicita el municipio y las entidades colaboradoras.`,
  },
  {
    title: "04",
    subtitle: "Fabricación",
    description: `Contamos con instalaciones de fabricación muy bien equipadas y personal altamente capacitado. Aquí, llevamos a cabo la fabricación de los elementos estructurales y componentes necesarios para el proyecto. Nuestro compromiso con la calidad se refleja en cada detalle, asegurando que los productos
        fabricados cumplan con los estándares más exigentes.`,
  },
  {
    title: "05",
    subtitle: "Montaje y Construcción",
    description: `Contamos con un equipo para administrar los proyectos, con herramientas en línea para que el equipo esté conectado, proveemos cuadrillas capacitadas con experiencia y que cumplen con todas las normas de seguridad. Con una planificación meticulosa y un enfoque
        en la seguridad, nos aseguramos de que el montaje se realice de manera eficiente y precisa,
        cumpliendo con los plazos acordados, ofrecemos
        garantía por materiales y mano de obra.`,
  },
];

const Home3 = () => {
  return (
    <div
      className="md:h-[60%] lg:h-auto lg:w-screen bg-white flex flex-row"
      style={{
        backgroundImage: `url(${APP_ASSETS.HOME_BG3})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col justify-center items-center w-screen mt-20 mb-10">
        <p className="poppins-regular text-[12px] text-[#00000080] text-center">
          TRANSFORMAMOS ESPACIOS EN LUGARES EXTRAORDINARIOS
        </p>
        <p className="poppins-semibold font-bold text-2xl text-[#000000] text-center mx-5">
          ¡Descubre el poder de construir <br /> tus sueños con CISTEC!
        </p>
        <div className="flex flex-col md:flex-wrap md:flex-row w-full gap-5 overflow-x-clip mt-5 justify-center items-start">
          {items.map((item, index) => (
            <_Item key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home3;

type ItemProps = {
  title: string;
  subtitle: string;
  description: string;
};

const _Item = (props: ItemProps) => {
  return (
    <div className="flex flex-col rounded-xl bg-[#E0E0E0C8] mx-5 p-5 md:w-1/3 lg:w-1/4">
      <p className="text-5xl poppins-bold text-center text-[#444242]">
        {props.title}
      </p>
      <p className="text-lg poppins-bold text-center">{props.subtitle}</p>
      <p className="text-sm poppins-light text-justify mt-3">
        {props.description}
      </p>
    </div>
  );
};
