import React from "react";
import APP_ASSETS from "../../../Config/assets";

function Home6() {
  return (
    <video
      className="max-w-[100%] rounded-3xl items-center px-5 md:px-48 py-10"
      controls
      autoPlay
    >
      <source src={APP_ASSETS.HOME_VIDEO6} type="video/mp4" />
    </video>
  );
}

export default Home6;
