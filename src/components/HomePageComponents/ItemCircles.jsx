'use client'

import React, { useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { ShoppingCart, CreditCard } from 'lucide-react';

const ProductImage = React.memo(({ src, alt }) => (
  <div className="flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
    <img 
      src={src} 
      alt={alt} 
      className="w-full h-full object-cover"
    />
  </div>
));

const ActionButtons = React.memo(() => (
  <div className="flex space-x-2">
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-4 py-2 rounded-full bg-blue-500 text-white flex items-center space-x-2 text-sm"
    >
      <CreditCard className="w-4 h-4" />
      <span className="md:hidden lg:visible">Buy Now</span>
    </motion.button>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-4 py-2 rounded-full bg-green-500 text-white flex items-center space-x-2 text-sm"
    >
      <ShoppingCart className="w-4 h-4 " />
      <span className="visible md:hidden lg:visible">Add to Cart</span>
    </motion.button>
  </div>
));

const ItemCircles = () => {
  const PopularProducts = useMemo(() => [
    {
      type: "Samsung Galaxy S24",
      photo: "https://akm-img-a-in.tosshub.com/aajtak/images/story/202401/65a7c1a86996f-samsung-galaxy-s24-ultra-170142999-16x9.jpg?size=948:533",
      text: "A Smartphone that elevates your experience",
    },
    {
      type: "Laravel Sunglasses",
      photo: "https://media.sunglasshut.com/cms/resource/image/1121304/landscape_ratio960x626/1536/1002/5b550f55868f53e463483122e9e9c627/0AFF3851F4A8B0289137D872816FA95F/sgh-women-iconic-1.jpg",
      text: "Sunglasses That Make You Look Divine",
    },
    {
      type: "Sports Equipments",
      photo: "https://images.pexels.com/photos/257970/pexels-photo-257970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Shine brighter in the field with cool equipments",
    },
    {
      type: "Versace Perfumes",
      photo: "https://xlncperfumery.com/cdn/shop/files/XP62.png?v=1694690700&width=2048",
      text: "Perfumes That Motivate and keep you fresh all day",
    },
    {
      type: "Clauderion Luxury Watch",
      photo: "https://www.carlington.in/cdn/shop/files/Carlington_elite_analog_ladies_watch_CT_2014_rosegold.jpg?v=1696691332&width=2400",
      text: "Timeless elegance on your wrist",
    },
    {
      type: "Louis Vitton Designer Handbag",
      photo: "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-onthego-mm-bicolor-monogram-empreinte-leather-handbags--M45495_PM1_Back%20view.jpg",
      text: "Carry your essentials in style",
    },
    {
      type: "Apple AP AIR",
      photo: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MUVX3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1713296133678",
      text: "Immersive sound, wherever you go",
    },
    {
      type: "Alexa Smart Home Device",
      photo: "https://www.futurezone.de/wp-content/uploads/sites/11/2022/10/amazon-echo-Alejandro-stock.adobe_.com_-e1675747669543.jpeg?w=1200",
      text: "Transform your life with technology",
    },
  ], []);

  const renderBentoGridItem = useCallback((product, i) => (
    <BentoGridItem
      key={i}
      title={product.type}
      description={product.text}
      className={i === 2 || i === 3 ? "md:col-span-2" : ""}
      header={<ProductImage src={product.photo} alt={product.type} />}
      icon={<ActionButtons />}
    />
  ), []);

  return (
    <BentoGrid className="max-w-7xl mx-auto p-4">
      {PopularProducts.map(renderBentoGridItem)}
    </BentoGrid>
  );
};

export default React.memo(ItemCircles);