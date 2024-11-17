import React from "react";
import Navbar from "@/components/common/Navbar";

import ProductCategories from "@/components/HomePageComponents/PopularProducts";
import Trending from "@/components/HomePageComponents/Trending";
import ItemCircles from "@/components/HomePageComponents/ItemCircles";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { FlipWords } from "@/components/ui/flip-words";
import { HeroParallax } from "@/components/ui/hero-parallax";
import Brands from "@/components/contexts/Brands";
import TrendingProducts from "@/components/contexts/HomePageTrending";
import ShoeSection from "@/components/HomePageComponents/ShoeSection";
import ProductShoe from "@/components/contexts/ProductShoe";
import WatchProduct from "@/components/contexts/ProductWatch";
import WatchSection from "@/components/HomePageComponents/WatchSection";
import SportsProduct from "../contexts/ProductSports";
import SportsSection from "../HomePageComponents/SportsSection";
import Footer from "../common/Footer";
import Sale from "../HomePageComponents/OnSale";

export default function Home() {
  const words = [
    "Discover Our Curated Categories",
    "Handpicked Selections to Elevate Your Experience",
  ];

  return (
    <main className="flex flex-col min-h-screen w-full bg-black">
      <Navbar isLoggedIn={false} />
      <div className="flex-1 flex w-full">
        <div className="flex-1 max-w-full relative">
          <AuroraBackground>
            <TrendingProducts>
              <section className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 mt-4 sm:mt-6 md:mt-9">
                <Trending />
              </section>
            </TrendingProducts>
            <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-24">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-white">
                <FlipWords words={words} />
              </h2>
              <ProductCategories />
            </section>
            <ProductShoe>
              <section className="w-full max-w-full mx-auto px-4 sm:px-6">
                <h1 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-white w-full max-w-6xl mx-auto px-4 font-mono">
                  Explore Quality Shoes That Suit You
                </h1>
                <ShoeSection />
              </section>
            </ProductShoe>
            <WatchProduct>
              <section className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-24">
                <h1 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-white w-full max-w-6xl mx-auto px-4">
                  Shop Branded Watches at Best Prices
                </h1>
                <WatchSection />
              </section>
            </WatchProduct>
            <section className="w-full flex max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-24 flex-col">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-white font-serif">
                Popular Products
              </h2>
              <ItemCircles />
            </section>
            <SportsProduct>
              <section className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-24">
                <h1 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-white w-full max-w-6xl mx-auto px-4 font-mono">
                  Shop Long Lasting Sports Equipments at Best Prices
                </h1>
                <SportsSection />
              </section>
            </SportsProduct>
            <section className="w-full max-w-full mx-auto px-4 sm:px-6">
              <h1 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-white w-full max-w-6xl mx-auto px-4 font-mono">
                This Week Top Sale
              </h1>
              <Sale />
            </section>
            <Brands>
              <section className="py-16 sm:py-24">
                <HeroParallax />
              </section>
            </Brands>
          </AuroraBackground>
        </div>
      </div>
      <Footer />
    </main>
  );
}
