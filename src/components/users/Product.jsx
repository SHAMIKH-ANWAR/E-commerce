import React from "react";
import Navbar from "../common/Navbar";
import SecondNav from "../ProductPageComponents/SecondNav";
import ExploreProductHeader from "../ProductPageComponents/ExploreProductHeader";
import ItemPage from "../ProductPageComponents/ItemPage";

const Product = () => {
  return (
    <main className="w-full h-full">
      <Navbar />
      <SecondNav/>
      <ExploreProductHeader/>
      <ItemPage/>
    </main>
  );
};

export default Product;
