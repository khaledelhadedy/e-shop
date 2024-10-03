"use client";
import Image from "next/image";
import Header from "@/Components/Header";
import Banner from "@/Components/Banner";
import FeaturesSection from "@/Components/FeaturesSection"
import ProductList from "@/Components/ProductList";

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
