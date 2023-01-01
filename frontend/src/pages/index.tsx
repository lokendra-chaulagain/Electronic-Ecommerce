import React from "react";
import { FaBeer } from "react-icons/fa";
import HeroCarousel from "../components/HeroCarousel";
import ProductItem from "../components/ProductItem";

function Index() {
  return (
    <div>
      <HeroCarousel />
      <div className="row  ">
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
      </div>
    </div>
  );
}

export default Index;
