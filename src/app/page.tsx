import Blogs3 from "@/components/Blogs3";
import Carousel2 from "@/components/Carousel2";
import ContainerFluid from "@/components/ContainerFluid";
import Hero from "@/components/Hero";
import ProductCards10 from "@/components/ProductCards10";
import ShopCard31 from "@/components/ShopCard31";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <ShopCard31 />
      <ProductCards10 />
      <Carousel2 />
      <ContainerFluid />
      <Blogs3 />
    </div>
  );
}
