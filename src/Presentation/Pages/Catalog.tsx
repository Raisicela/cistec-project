import React from "react";
import Catalog1 from "./Catalog/Catalog1";
import Catalog2 from "./Catalog/Catalog2";
import Catalog3 from "./Catalog/Catalog3";

function Catalog() {
  return (
    <main className="flex-col">
      <Catalog1 />
      <Catalog2 />
      <Catalog3 />
    </main>
  );
}

export default Catalog;
