import React from "react";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../ui/Buttons";
import { useTrendingProducts } from "../contexts/HomePageTrending";

const Trending = () => {
  const products = useTrendingProducts();

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      grabCursor={true}
      effect={"fade"}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation, EffectFade]}
      className="w-full h-[500px] sm:h-[550px] md:h-[600px] lg:h-[500px] rounded-3xl shadow-xl"
    >
      {products.map((product, idx) => (
        <SwiperSlide key={idx} className="relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <img src={product.bg} alt={product.category} className="w-full h-full object-cover" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row h-full p-4 sm:p-6 md:p-8 lg:p-10">
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-white text-2xl sm:text-3xl font-bold drop-shadow-lg font-serif">
                {product.text}
              </h2>
              <p className="text-white text-base sm:text-lg drop-shadow-md mb-4">
                Discover our amazing {product.category} collection
              </p>
              <Button />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Trending;
