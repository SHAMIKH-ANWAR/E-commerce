'use client'

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { ShoppingCart } from 'lucide-react';
import { useProducts } from "@/components/contexts/ProductShoe";

const ProductCard = React.memo(({ product }) => (
  <BackgroundGradient className="rounded-[22px] max-w-lg p-4 sm:p-6 bg-white dark:bg-zinc-900">
    <div className="img w-11/12 h-36 object-cover">
      <img
        src={product.image}
        alt={product.name}
        height={100}
        width={100}
        className="object-cover w-full h-full"
      />
    </div>
    <p className="text-base font-semibold text-black mt-4 mb-2 dark:text-neutral-200">
      {product.name}
    </p>
    <p className="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-2">
      {product.description}
    </p>
    <div className="flex justify-evenly gap-4 md:gap-32">
      <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
        <span className="text-nowrap">Buy now </span>
        <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
          ${product.price}
        </span>
      </button>
      <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1  mt-4 text-xs font-bold dark:bg-zinc-800">
        <span className="hidden">Add to Cart </span>
        <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
          {/* <ShoppingCart /> */}
        </span>
      </button>
    </div>
  </BackgroundGradient>
));

export default function ShoeSection() {
  const products = useProducts();

  return (
    <Swiper
      spaceBetween={20}
      centeredSlides={false}
      autoplay={{
        delay: 100000,
        disableOnInteraction: false,
      }}
      navigation={false}
      modules={[Autoplay, Navigation]}
      className="h-[400px] sm:h-[450px] md:h-[400px] rounded-lg"
      breakpoints={{
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        640: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        1024: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
      }}
    >
      {products.map((product, index) => (
        <SwiperSlide key={index} className="flex items-center justify-center">
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}