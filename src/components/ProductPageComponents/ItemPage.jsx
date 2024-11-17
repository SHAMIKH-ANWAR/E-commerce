import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import BuyButton from "../ui/BuyAndCartButton";
import { AuroraBackground } from "../ui/aurora-background";
import Footer from "../common/Footer";
import { CalendarDays, MapPin, Store, Minus, Plus } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ItemPage = () => {
  const images = [
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1710850266/Croma%20Assets/Large%20Appliances/Refrigerator/Images/267758_0_kicih5.png?tr=w-600",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1710850267/Croma%20Assets/Large%20Appliances/Refrigerator/Images/267758_1_aqwvxz.png?tr=w-600",
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1710850268/Croma%20Assets/Large%20Appliances/Refrigerator/Images/267758_2_uxhwzb.png?tr=w-600",
  ];

  return (
    <AuroraBackground>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="image-gallery">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              className="w-full aspect-square rounded-lg overflow-hidden shadow-lg"
            >
              {images.map((img, index) => (
                <SwiperSlide key={index} className="flex items-center justify-center ">
                  <img
                    src={img}
                    alt={`Product image ${index + 1}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="product-info space-y-6">
            <h1 className="text-2xl md:text-3xl font-bold text-blackdark:text-white font-mono">Boat A900 Earphones</h1>
            <div className="price-rating flex items-center justify-between">
              <span className="text-2xl font-semibold text-black-900 dark:text-black-100">$99.99</span>
              <div className="rating flex items-center">
                <span className="text-yellow-400">★★★★☆</span>
                <span className="ml-2 text-sm  dark:text-black-400">(4.2 out of 5)</span>
              </div>
            </div>
            <p className="text-black dark:text-gray-300 font-thin">
              Experience crystal-clear audio with the Boat A900 Earphones. Featuring advanced noise cancellation technology and a comfortable fit, these earphones are perfect for music lovers and professionals alike.
            </p>
            <div className="product-meta space-y-4 text-sm text-gray-800 dark:text-gray-400">
              <div className="flex items-center">
                <CalendarDays className="w-5 h-5 mr-2" />
                <span>Delivered By: Monday</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Delivering to: New York, NY 10001</span>
              </div>
              <div className="flex items-center">
                <Store className="w-5 h-5 mr-2" />
                <span>Sold by: Boat Official Store</span>
              </div>
            </div>
            <div className="quantity flex items-center space-x-4">
              <span className="text-gray-800 dark:text-gray-300">Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded">
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700" aria-label="Decrease quantity">
                  <Minus className="w-4 h-4" />
                </button>
                <input
                  type="number"
                  className="w-12 text-center border-none focus:ring-0"
                  min="1"
                  max="99"
                  value="1"
                  readOnly
                />
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700" aria-label="Increase quantity">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="cta-buttons grid grid-cols-2 gap-4">
              <BuyButton text="Buy Now" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg" />
              <BuyButton text="Add To Cart" className="w-full py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </AuroraBackground>
  );
};

export default ItemPage;