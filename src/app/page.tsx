"use client";
import Image from "next/image";
import Header from "../Components/Header/Header"
import Banner from "../Components/Banner/Banner";
import FeaturesSection from "../Components/Section/FeaturesSection"
import ProductList from "../Components/Products/ProductList";

export default function Home() {
  return (
    <div>
      <Header/>
      <Banner/>
      <FeaturesSection/>
      <ProductList />
    </div>
  );
}
