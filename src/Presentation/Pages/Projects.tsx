import React from "react";
import Obras1 from "./Obras/Obras1";
import Obras2 from "./Obras/Obras2";
import Footer from "../Components/Footer";

function Projects() {
  return (
    <main className="flex flex-col">
      <Obras1 />
      <Obras2 />
      <Footer />
    </main>
  );
}

export default Projects;
