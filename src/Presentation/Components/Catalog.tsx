import React from "react";
import APP_ASSETS from "../../Config/assets";

type CatalogProps = {
  imagen: string;
  titulo: string;
  subtitulo: string;
  contenido: string;
  invertir?: boolean;
};

const Catalog = (props: CatalogProps) => {
  return (
    <div
      className={`w-screen flex flex-col bg-white py-5 items-center ${
        props.invertir ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div
        className={`flex  justify-center items-center px-5 ${
          props.invertir ? "flex-row-reverse md:pr-10" : "flex-row md:pl-20"
        }`}
      >
        <div className="">
          <img
            src={props.imagen}
            alt="servicios"
            className="w-[100%] h-[auto] object-cover"
          />
        </div>
      </div>
      <div
        className={`flex flex-col w-[100%] lg:w-1/2  lg:h-min justify-center items-center lg:items-start ${
          props.invertir ? "lg:pl-16 md:pr-10" : "lg:pl-10 lg:pr-20"
        }`}
      >
        <div className="justify-start items-center">
          <p className="poppins-light text-black text-[14px]  text-center lg:text-left">
            {props.titulo}
          </p>
          <p className="poppins-bold text-black text-xl md:text-[25px]  text-center lg:text-left">
            {props.subtitulo}
          </p>

          <p className="poppins-light text-black text-sm md:text-[18px]  text-center lg:text-left pt-4">
            {props.contenido}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
