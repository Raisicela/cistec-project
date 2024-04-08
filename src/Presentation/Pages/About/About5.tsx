import { useState } from "react";
import APP_ASSETS from "../../../Config/assets";

const brands: Brand[] = [
  {
    image: APP_ASSETS.ABOUT_BG4_1,
    imagea: APP_ASSETS.ABOUT_BG4_1A,
  },
  {
    image: APP_ASSETS.ABOUT_BG4_2,
    imagea: APP_ASSETS.ABOUT_BG4_2A,
  },
  {
    image: APP_ASSETS.ABOUT_BG4_3,
    imagea: APP_ASSETS.ABOUT_BG4_3A,
  },
  {
    image: APP_ASSETS.ABOUT_BG4_4,
    imagea: APP_ASSETS.ABOUT_BG4_4A,
  },
  {
    image: APP_ASSETS.ABOUT_BG4_5,
    imagea: APP_ASSETS.ABOUT_BG4_5A,
  },
  {
    image: APP_ASSETS.ABOUT_BG4_6,
    imagea: APP_ASSETS.ABOUT_BG4_6A,
  },
  {
    image: APP_ASSETS.ABOUT_BG4_7,
    imagea: APP_ASSETS.ABOUT_BG4_7A,
  },
  {
    image: APP_ASSETS.ABOUT_BG4_8,
    imagea: APP_ASSETS.ABOUT_BG4_8A,
  },
  {
    image: APP_ASSETS.ABOUT_BG4_9,
    imagea: APP_ASSETS.ABOUT_BG4_9A,
  },
  {
    image: APP_ASSETS.ABOUT_BG4_10,
    imagea: APP_ASSETS.ABOUT_BG4_10A,
  },
  {
    image: APP_ASSETS.ABOUT_BG4_11,
    imagea: APP_ASSETS.ABOUT_BG4_11A,
  },
  {
    image: APP_ASSETS.ABOUT_BG4_12,
    imagea: APP_ASSETS.ABOUT_BG4_12A,
  },
  {
    image: APP_ASSETS.ABOUT_BG4_13,
    imagea: APP_ASSETS.ABOUT_BG4_13A,
  },
  {
    image: APP_ASSETS.ABOUT_BG4_14,
    imagea: APP_ASSETS.ABOUT_BG4_14A,
  },
  {
    image: APP_ASSETS.ABOUT_BG4_15,
    imagea: APP_ASSETS.ABOUT_BG4_15A,
  },
  {
    image: APP_ASSETS.ABOUT_BG4_16,
    imagea: APP_ASSETS.ABOUT_BG4_16A,
  },
  {
    image: APP_ASSETS.ABOUT_BG4_17,
    imagea: APP_ASSETS.ABOUT_BG4_17A,
  },
  {
    image: APP_ASSETS.ABOUT_BG4_18,
    imagea: APP_ASSETS.ABOUT_BG4_18A,
  },
  {
    image: APP_ASSETS.ABOUT_BG4_19,
    imagea: APP_ASSETS.ABOUT_BG4_19A,
  },
  {
    image: APP_ASSETS.ABOUT_BG4_20,
    imagea: APP_ASSETS.ABOUT_BG4_20A,
  },
  {
    image: APP_ASSETS.ABOUT_BG4_21,
    imagea: APP_ASSETS.ABOUT_BG4_21A,
  },
  {
    image: APP_ASSETS.ABOUT_BG4_22,
    imagea: APP_ASSETS.ABOUT_BG4_22A,
  },
  {
    image: APP_ASSETS.ABOUT_BG4_23,
    imagea: APP_ASSETS.ABOUT_BG4_23A,
  },
  {
    image: APP_ASSETS.ABOUT_BG4_24,
    imagea: APP_ASSETS.ABOUT_BG4_24A,
  },
  {
    image: APP_ASSETS.ABOUT_BG4_25,
    imagea: APP_ASSETS.ABOUT_BG4_25A,
  },
  {
    image: APP_ASSETS.ABOUT_BG4_26,
    imagea: APP_ASSETS.ABOUT_BG4_26A,
  },
  {
    image: APP_ASSETS.ABOUT_BG4_27,
    imagea: APP_ASSETS.ABOUT_BG4_27A,
  },
  {
    image: APP_ASSETS.ABOUT_BG4_28,
    imagea: APP_ASSETS.ABOUT_BG4_28A,
  },
  {
    image: APP_ASSETS.ABOUT_BG4_29,
    imagea: APP_ASSETS.ABOUT_BG4_29A,
  },
  {
    image: APP_ASSETS.ABOUT_BG4_30,
    imagea: APP_ASSETS.ABOUT_BG4_30A,
  },
  {
    image: APP_ASSETS.ABOUT_BG4_31,
    imagea: APP_ASSETS.ABOUT_BG4_31A,
  },
];

const About4 = () => {
  return (
    <div
      className="flex flex-col py-20 px-8 justify-center items-center"
      style={{
        backgroundImage: `url(${APP_ASSETS.ABOUT_BG5})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h5 className="poppins-bold text-center text-xl">
        MARCAS QUE NOS RESPALDAN
      </h5>
      <div className="w-screen md:w-1/2 px-8">
        <hr className="my-2  border-t-4 border-white   text-center" />
      </div>
      <p className="poppins-regular text-justify lg:text-center mt-4">
        La satisfacción de nuestros clientes es nuestro mayor logro, el
        resultado de nuestro compromiso y dedicación nos acompaña para llegar
        cada vez más lejos.
      </p>

      <div className="flex flex-wrap mt-8 ">
        {brands.map((brand, index) => (
          <Brand key={index} image={brand.image} imagea={brand.imagea} />
        ))}
      </div>
    </div>
  );
};

export default About4;

type Brand = {
  image: string;
  imagea: string;
};
const Brand = (props: Brand) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="w-1/3 md:w-1/5 lg:w-1/6 xl:w-1/7 rounded-md flex items-center justify-center my-3 px-2"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={hovered ? props.imagea : props.image} alt="Marcas" />
    </div>
  );
};
