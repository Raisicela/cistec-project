import "./Home.css";
import APP_ASSETS from "../../../Config/assets";

const items: string[] = [
  APP_ASSETS.HOME_BG4_1,
  APP_ASSETS.HOME_BG4_2,
  APP_ASSETS.HOME_BG4_3,
  APP_ASSETS.HOME_BG4_4,
  APP_ASSETS.HOME_BG4_5,
  APP_ASSETS.HOME_BG4_6,
  APP_ASSETS.HOME_BG4_7,
  APP_ASSETS.HOME_BG4_8,
  APP_ASSETS.HOME_BG4_9,
  APP_ASSETS.HOME_BG4_10,
  APP_ASSETS.HOME_BG4_11,
  APP_ASSETS.HOME_BG4_12,
];

const Home3 = () => {
  // const isSmallScreen = window.innerWidth < 768;
  // const isMediumScreen = window.innerWidth < 1024;
  // const isLargeScreen = window.innerWidth < 1440;

  return (
    <div className="md:h-[60%] lg:h-auto lg:w-screen bg-white flex flex-row">
      <div className="flex flex-col justify-center items-center w-screen mt-20 mb-10">
        <p className="text-[12px] text-[#00000080] text-center">
          TRABAJOS RECIENTES
        </p>
        <p className="font-bold text-2xl text-[#000000] text-center mx-5">
          Proyectos innovadores para clientes <br className="hidden md:flex" />{" "}
          que anhelan lo excepcional.
        </p>
        <div className="flex flex-col md:flex-wrap md:flex-row w-full gap-0 overflow-x-clip mt-5 justify-center items-start">
          {items.map((item, index) => (
            <Item key={index} img={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home3;

type ItemProps = {
  img: string;
};

const Item = (props: ItemProps) => {
  return (
    <div className="rounded-xl mx-5 p-2 md:w-1/3 lg:w-1/4">
      <img src={props.img} alt="Proyecto" className="rounded-xl" />
    </div>
  );
};
