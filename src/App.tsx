import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Presentation/Pages/Home";
import About from "./Presentation/Pages/About";
import Catalog from "./Presentation/Pages/Catalog";
import Contact from "./Presentation/Pages/Contact";
import { ROUTES } from "./Config/Routes";
import Navbar from "./Presentation/Components/Navbar";
import Projects from "./Presentation/Pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.PROJECTS} element={<Projects />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.CATALOG} element={<Catalog />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
