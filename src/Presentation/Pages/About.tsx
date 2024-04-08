import React from "react";
import About1 from "./About/About1";
import About2 from "./About/About2";
import About3 from "./About/About3";
import About4 from "./About/About4";
import About5 from "./About/About5";
import Footer from "../Components/Footer";

export default function About() {
  return (
    <main className="flex-col">
      <About1 />
      <About2 />
      <About3 />
      <About4 />
      <About5 />
      <Footer />
    </main>
  );
}
