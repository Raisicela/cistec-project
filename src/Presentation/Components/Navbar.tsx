import React from "react";
import { ROUTES } from "../../Config/Routes";
import APP_ASSETS from "../../Config/assets";
import { NavbarItem } from "./NavbarItem";
import URLS from "../../Config/urls";
import { useLocation } from "react-router-dom";

enum NavbarItemEnum {
  HOME = "INICIO",
  PROJECTS = "OBRAS",
  ABOUT = "QUIÉNES SOMOS",
  CATALOG = "CATÁLOGO",
  CONTACT = "CONTÁCTENOS",
}

function Navbar() {
  const [selected, setSelected] = React.useState<NavbarItemEnum>(
    NavbarItemEnum.HOME
  );
  const [expanded, setExpanded] = React.useState(false);
  const location = useLocation();
  console.log(location.pathname);
  const titleColor = location.pathname !== ROUTES.HOME;
  return (
    <>
      <nav
        className={`hidden md:block px-4 ${
          titleColor ? "" : "bg-black bg-opacity-20"
        } gap=6 absolute w-[100%]`}
      >
        <div className="flex flex-row py-6">
          <ul className="flex flex-row  w-5/6 justify-end lg:gap-14 md:gap-0  items-center">
            <NavbarItem
              title={NavbarItemEnum.HOME}
              link={ROUTES.HOME}
              selected={selected === NavbarItemEnum.HOME}
              titleColor={titleColor}
              onClick={() => setSelected(NavbarItemEnum.HOME)}
            />
            <NavbarItem
              title={NavbarItemEnum.PROJECTS}
              link={ROUTES.PROJECTS}
              selected={selected === NavbarItemEnum.PROJECTS}
              titleColor={titleColor}
              onClick={() => setSelected(NavbarItemEnum.PROJECTS)}
            />
            <NavbarItem
              title={NavbarItemEnum.ABOUT}
              link={ROUTES.ABOUT}
              selected={selected === NavbarItemEnum.ABOUT}
              titleColor={titleColor}
              onClick={() => setSelected(NavbarItemEnum.ABOUT)}
            />
            <NavbarItem
              title={NavbarItemEnum.CATALOG}
              link={ROUTES.CATALOG}
              selected={selected === NavbarItemEnum.CATALOG}
              titleColor={titleColor}
              onClick={() => setSelected(NavbarItemEnum.CATALOG)}
            />
            <NavbarItem
              title={NavbarItemEnum.CONTACT}
              link={ROUTES.CONTACT}
              selected={selected === NavbarItemEnum.CONTACT}
              titleColor={titleColor}
              onClick={() => setSelected(NavbarItemEnum.CONTACT)}
            />
          </ul>
          <div className="flex flex-row w-1/6 justify-around px-6 lg:gap-2 md:gap-0">
            <button onClick={() => window.open(URLS.FACEBOOK, "_blank")}>
              <img
                className="w-7 h-8 p-2"
                src={APP_ASSETS.LOGO_FACEBOOK}
                alt="Facebook"
              />
            </button>
            <button onClick={() => window.open(URLS.INSTAGRAM, "_blank")}>
              <img
                className="w-9 h-9 p-2"
                src={APP_ASSETS.LOGO_INSTAGRAM}
                alt="Instagram"
              />
            </button>

            <button onClick={() => window.open(URLS.LINKEDIN, "_blank")}>
              <img
                className="w-8 h-8 p-2"
                src={APP_ASSETS.LOGO_LINKEDIN}
                alt="LinkedIn"
              />
            </button>
          </div>
        </div>
      </nav>
      <div className="z-50 visible md:hidden">
        <nav className="top-0 bg-transparent w-screen">
          <div className="flex flex-row items-center justify-between py-4 px-[3%]">
            <img src={APP_ASSETS.LOGO2} alt="Logo Cistec" width={40} />
            <div className="flex flex-col">
              <span className="self-center text-lg font-semibold whitespace-nowrap">
                CISTEC
              </span>
              <span className="self-center text-xs font-semibold whitespace-nowrap ">
                Sistemas de Estructuras Metálicas
              </span>
            </div>
            <button onClick={() => setExpanded(!expanded)}>
              <img className="w-10 h-10" src={APP_ASSETS.MENU} alt="menu" />
            </button>
          </div>
        </nav>
        {expanded && (
          <div
            className="w-screen h-screen pt-2 "
            onClick={() => setExpanded(false)}
          >
            <div className="bg-[#D9D9D9] h-screen w-screen bg-opacity-50">
              <ul className="flex flex-col pt-10 gap-10 items-center">
                <NavbarItem
                  title={NavbarItemEnum.HOME}
                  link={ROUTES.HOME}
                  selected={selected === NavbarItemEnum.HOME}
                  titleColor={true}
                  onClick={() => setSelected(NavbarItemEnum.HOME)}
                />
                <NavbarItem
                  title={NavbarItemEnum.PROJECTS}
                  link={ROUTES.PROJECTS}
                  selected={selected === NavbarItemEnum.PROJECTS}
                  titleColor={true}
                  onClick={() => setSelected(NavbarItemEnum.PROJECTS)}
                />
                <NavbarItem
                  title={NavbarItemEnum.ABOUT}
                  link={ROUTES.ABOUT}
                  selected={selected === NavbarItemEnum.ABOUT}
                  titleColor={true}
                  onClick={() => setSelected(NavbarItemEnum.ABOUT)}
                />
                <NavbarItem
                  title={NavbarItemEnum.CATALOG}
                  link={ROUTES.CATALOG}
                  selected={selected === NavbarItemEnum.CATALOG}
                  titleColor={true}
                  onClick={() => setSelected(NavbarItemEnum.CATALOG)}
                />
                <NavbarItem
                  title={NavbarItemEnum.CONTACT}
                  link={ROUTES.CONTACT}
                  selected={selected === NavbarItemEnum.CONTACT}
                  titleColor={true}
                  onClick={() => setSelected(NavbarItemEnum.CONTACT)}
                />
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
