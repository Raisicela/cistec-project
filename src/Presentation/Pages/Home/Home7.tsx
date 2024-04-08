import React from "react";
import APP_ASSETS from "../../../Config/assets";

function Home7() {
  return (
    <div
      className="bg-white flex flex-row py-16 md:py-0"
      style={{
        backgroundImage: `url(${APP_ASSETS.HOME_BG7})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  );
}

export default Home7;
