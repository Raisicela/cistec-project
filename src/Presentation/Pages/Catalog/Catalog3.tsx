import React from "react";
import APP_ASSETS from "../../../Config/assets";
import Catalog from "../../Components/Catalog";

function Catalog3() {
  return (
    <div>
      <Catalog
        imagen={APP_ASSETS.CATALOG_IMG3_1}
        titulo="ESTRUCTURAS METÁLICAS"
        subtitulo="EDIFICIOS, VIVIENDAS
        Y UNIDADES EDUCATIVAS"
        contenido="En CISTEC, nos destacamos por la reducción de plazos
        y costos, brindando un asesoramiento integral, ofertando
        los servicios de diseño, ingeniería estructural, sanitaria
        y eléctrica, gracias a los avances tecnológicos ofrecemos
        la posibilidad de visualizar tu proyecto de manera virtual. Nos encargamos de asesorarte y gestionar la aprobación de proyectos y licencias de construcción. A lo largo de todas las etapas de la obra, desde la construcción de obra gris hasta la ejecución de estructuras
        y acabados finales, garantizamos un proceso eficiente
        y de alta calidad."
        invertir={false}
      />
      <div>
        <img
          src={APP_ASSETS.CATALOG_BG3_1}
          alt=""
          className="w-[auto] h-[auto] object-cover justify-center items-center bg-white"
        />
      </div>
      <Catalog
        imagen={APP_ASSETS.CATALOG_IMG3_2}
        titulo="ESTRUCTURAS METÁLICAS, DISEÑO, CONSTRUCCIÓN"
        subtitulo="HANGARES Y NAVES INDUSTRIALES"
        contenido="Ofrecemos una amplia gama de servicios en la construcción
        de hangares y naves industriales, respaldos por nuestra
        experiencia, calidad, profesionalismo y compromiso con
        el cliente. Conociendo las necesidades y requerimientos
        del cliente, te asesoramos y te acompañaremos desde el diseño arquitectónico, aprobación de planos, licencias
        para ejecución, estudio topográfico, ingeniería estructural,
        sanitaria y eléctrica, maquetación virtual, presupuesto detallado, aprobación de licencias de construcción hasta
        los acabados arquitectónicos.
        Nuestro enfoque se inicia con una reunión personalizada
        con el cliente, seguida de una oferta detallada para garantizar la satisfacción y el éxito del proyecto."
        invertir={true}
      />
      <Catalog
        imagen={APP_ASSETS.CATALOG_IMG3_3}
        titulo="ESTRUCTURAS METÁLICAS, DISEÑO, CONSTRUCCIÓN"
        subtitulo="COLISEOS Y POLIDEPORTIVOS"
        contenido="Nuestra oferta en la construcción de coliseos y polideportivos se destaca por sus ventajas clave: rapidez,
        resistencia, diseño flexible e innovador. Ofrecemos un servicio completo y especializado en diseño arquitectónico.
        Contamos con un equipo experto en ingeniería estructural,
        civil, sanitaria y eléctrica para garantizar la ejecución total de la obra. Nuestro proceso también abarca la remodelación de interiores, fiscalización y supervisión de
        obra, así como la maquetación virtual para una visualización
        precisa del proyecto. Con un enfoque en la calidad y la satisfacción del cliente, ofrecemos  estructuras polifuncionales,
        graderíos de hormigón e instalaciones de alta calidad."
        invertir={false}
      />
      <div>
        <img
          src={APP_ASSETS.CATALOG_BG3_2}
          alt=""
          className="w-[auto] h-[auto] object-cover justify-center items-center bg-white"
        />
      </div>
      <Catalog
        imagen={APP_ASSETS.CATALOG_IMG3_4}
        titulo="ESTRUCTURAS METÁLICAS, DISEÑO, CONSTRUCCIÓN"
        subtitulo="AUTOMOTRIZ"
        contenido="En el competitivo mundo del sector automotriz, nos destacamos por ofrecer soluciones ágiles y vanguardistas
        que responden a las demandas del mercado. Nuestra oferta se distingue por su rapidez, diseño innovador y la capacidad de optimizar espacios para una mayor eficiencia operativa. Ofrecemos un servicio
        integral que abarca desde la obra civil hasta la construcción de estructuras metálicas adaptadas a las necesidades específicas de cada cliente, incluyendo
        la instalación de mezanines, oficinas y bodegas. Nos enorgullecemos de ofrecer acabados de primera calidad
        y la creación de showrooms impactantes, diseñados para atraer y cautivar a nuestra audiencia objetivo."
        invertir={true}
      />

      <Catalog
        imagen={APP_ASSETS.CATALOG_IMG3_5}
        titulo="ESTRUCTURAS, DISEÑO, CONSTRUCCIÓN"
        subtitulo="OBRA CIVIL Y ACABADOS"
        contenido="BEn nuestro servicio de obra civil y acabados, nos esforzamos por ejecutar infraestructuras que superen las expectativas de nuestros clientes en todas las etapas
        del proceso, desde la cimentación hasta los acabados finales. En cada proyecto de obra civil, nos encargamos
        de definir especificaciones técnicas, requerimientos específicos, normativas a seguir, plazos de realización, presupuestos, lista de materiales y tecnologías, así como
        la distribución y uso de los espacios. Nuestro compromiso
        es brindarte asesoramiento experto para garantizar la funcionalidad, innovación y estética óptimas en tu proyecto."
        invertir={false}
      />
      <div>
        <img
          src={APP_ASSETS.CATALOG_BG3_3}
          alt=""
          className="w-[auto] h-[auto] object-cover justify-center items-center bg-white"
        />
      </div>
      <Catalog
        imagen={APP_ASSETS.CATALOG_IMG3_6}
        titulo="ESTRUCTURAS METÁLICAS"
        subtitulo="PÉRGOLAS - DISEÑO, CONSTRUCCIÓN"
        contenido="Las pérgolas son elementos arquitectónicos compuestos
        por columnas y vigas que, gracias a su diseño, permiten
        el paso de la luz natural mientras proporcionan sombra
        adecuada. En CISTEC, ofrecemos una amplia gama de materiales como madera, metal y madera plástica para
        adaptarse a tus preferencias.
        Te brindamos el asesoramiento desde el diseño su montaje
        e instalación, nos comprometemos a brindarte soluciones
        personalizadas y de calidad para tus espacios al aire libre."
        invertir={true}
      />
    </div>
  );
}

export default Catalog3;
