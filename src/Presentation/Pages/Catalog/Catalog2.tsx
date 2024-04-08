import React from "react";
import APP_ASSETS from "../../../Config/assets";

function Catalog2() {
  return (
    <main>
      <div className="bg-white mx-6 md:mx-36 rounded-lg p-5 md:p-10 mt-5 items-center">
        <p className="poppins-semibold text-xl md:text-5xl">
          En CISTEC te ofrecemos:
        </p>
        <p className="poppins-light text-sm md:text-xl my-5">
          Una amplia variedad de servicios que abarcan desde proyectos
          residenciales hasta comerciales e industriales. Nuestros servicios
          incluyen la ejecución de obra civil, estructurales y de acabados.
        </p>
        <p className="poppins-semibold text-lg md:text-xl md:px-10 md:mt-20">
          Lista de servicios
        </p>
        <br />
        <div className="flex flex-col md:flex-row md:px-10">
          <ul className="list-disc list-inside md:w-1/2 ">
            <li className="poppins-light text-sm md:text-xl">
              Estudio de Suelo
            </li>
            <li className="poppins-light text-sm md:text-xl">
              Levantamiento Georeferenciado
            </li>
            <li className="poppins-light text-sm md:text-xl">Arquitectónico</li>
            <li className="poppins-light text-sm md:text-xl">
              Estudio Topográfico
            </li>
            <li className="poppins-light text-sm md:text-xl">
              Diseño Arquitectónico
            </li>
            <li className="poppins-light text-sm md:text-xl">
              Aprobación de Proyectos
            </li>
            <li className="poppins-light text-sm md:text-xl">
              Licencia de Construcción
            </li>
            <li className="poppins-light text-sm md:text-xl">
              Presupuesto de Obra
            </li>
            <li className="poppins-light text-sm md:text-xl">
              Ingeniería Estructural
            </li>
            <li className="poppins-light text-sm md:text-xl">
              Ingeniería Civil
            </li>
            <li className="poppins-light text-sm md:text-xl">
              Ingeniería Sanitaria
            </li>
          </ul>

          <ul className="list-disc list-inside md:w-1/2">
            <li className="poppins-light text-sm md:text-xl">
              Ingeniería Eléctrica
            </li>
            <li className="poppins-light text-sm md:text-xl">
              Ejecución Total de la Obra
            </li>
            <li className="poppins-light text-sm md:text-xl">
              Movimiento de Tierras
            </li>
            <li className="poppins-light text-sm md:text-xl">Cimentación</li>
            <li className="poppins-light text-sm md:text-xl">Obra Civil</li>
            <li className="poppins-light text-sm md:text-xl">
              Montaje Estructural
            </li>
            <li className="poppins-light text-sm md:text-xl">
              Acabados Arquitectónicos
            </li>
            <li className="poppins-light text-sm md:text-xl">
              Remodelación de interiores
            </li>
            <li className="poppins-light text-sm md:text-xl">
              Fiscalización de Obra
            </li>
            <li className="poppins-light text-sm md:text-xl">
              Supervisión de Obra
            </li>
            <li className="poppins-light text-sm md:text-xl">
              Maquetación virtual
            </li>
          </ul>
        </div>
      </div>

      <img
        src={APP_ASSETS.CATALOG_IMG1}
        alt=""
        className="object-cover justify-center items-center bg-white md:mb-10"
      />
    </main>
  );
}

export default Catalog2;
