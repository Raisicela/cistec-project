import APP_ASSETS from "../../../Config/assets";

const obras: Obra[] = [
  {
    business: "ADELCA",
    title: "Montaje Estructuras",
    city: "ADELCA - MILAGRO",
    image: APP_ASSETS.OBRAS_BG2_1,
  },
  {
    business: "ARCA - TONY",
    title: "Diseño, Fabricación, Montaje de estructura",
    city: "ARCA TONY - GUAYAQUIL",
    image: APP_ASSETS.OBRAS_BG2_2,
  },
  {
    business: "AUTOFENIX",
    title: "Estructura Metálica, Obra Civil y Acabados",
    city: "AUTOFENIX - CUMBAYA/QUITO",
    image: APP_ASSETS.OBRAS_BG2_3,
  },
  {
    business: "BIMBO",
    title: "Diseño, Fabricación, Montaje de estructura y Cambio de techo",
    city: "BIMBO - GUAYAQUIL",
    image: APP_ASSETS.OBRAS_BG2_4,
  },
  {
    business: "CARLY SNACK",
    title: "Diseño, Fabricación, Montaje de estructura incluido obra civil",
    city: "CARLY SNACK - SANGOLQUI/QUITO",
    image: APP_ASSETS.OBRAS_BG2_5,
  },
  {
    business: "CHOCONO",
    title:
      "Diseño, Fabricación, Montaje de estructura, instalación de panel de cubierta, obra civil y acabados",
    city: "CHOCONO - QUITO",
    image: APP_ASSETS.OBRAS_BG2_6,
  },
  {
    business: "FAMILIA SANCELA",
    title: "Diseño, Fabricación, Montaje de estructura incluido obra civil",
    city: "FAMILIA SANCELA - LATACUNGA",
    image: APP_ASSETS.OBRAS_BG2_7,
  },
  {
    business: "FARMAENLACE",
    title:
      "Diseño, Fabricación, Montaje de estructura, instalación de panel de pared y cubierta",
    city: "FARMAENLACE - LLANO CHICO/QUITO",
    image: APP_ASSETS.OBRAS_BG2_8,
  },
  {
    business: "GRUPO KFC",
    title:
      "Diseño, Fabricación, Montaje de estructura, instalación de panel de pared y cubierta",
    city: "GRUPO KFC - PIFO/QUITO",
    image: APP_ASSETS.OBRAS_BG2_9,
  },
  {
    business: "IMPTEK",
    title: "Diseño, Fabricación, Montaje de estructura",
    city: "IMPTEK - PIFO/QUITO",
    image: APP_ASSETS.OBRAS_BG2_10,
  },
  {
    business: "SIGMAPLAST",
    title:
      "Diseño, Fabricación, Montaje de estructura, instalación de panel de pared y cubierta",
    city: "SIGMAPLAST - QUITO",
    image: APP_ASSETS.OBRAS_BG2_11,
  },
  {
    business: "HANASKA",
    title:
      "Diseño, Fabricación, Montaje de estructura, instalación de panel de pared y cubierta",
    city: "HANASKA - SANGOLQUÍ/QUITO",
    image: APP_ASSETS.OBRAS_BG2_12,
  },
];

const Obras2 = () => {
  return (
    <div
      className=" lg:w-screen bg-white flex flex-row pb-16"
      style={{
        backgroundImage: `url(${APP_ASSETS.OBRAS_BG2})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center items-center w-screen overflow-x-clip">
        {obras.map((obra) => ObraItem(obra))}
      </div>
    </div>
  );
};

export default Obras2;

type Obra = {
  business: string;
  title: string;
  city: string;
  image: string;
};
const ObraItem = (props: Obra) => {
  return (
    <div className="flex flex-col p-5 w-[100%] md:w-1/3">
      <p className="poppins-bold">{props.business}</p>
      <div className="relative inline-block ">
        <img className=" w-[100%]" src={props.image} alt={props.title} />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[#B3602880] bg-opacity-20 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="flex flex-col items-center px-4">
            <h6 className="poppins-bold text-center">{props.title}</h6>
            <p className="poppins-regular text-center">{props.city}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
