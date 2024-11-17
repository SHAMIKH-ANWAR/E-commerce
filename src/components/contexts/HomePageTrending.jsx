import { createContext,useContext } from "react";
import React from "react";
const TrendingProductContext = createContext();

const TrendingProducts = ({ children }) => {
  const trendingProducts = [
    {
      category: "furnitures",
      // image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Redefine your living space with our latest Modern Furniture Collection, crafted to blend comfort with luxurious style.",
      bg: "https://naurelle.com/wp-content/uploads/2023/10/NAURELLE-INSTALLED-PROJECT-DUBAI-UAE.jpg",
    },
    {
      category: "fashion",
      // image: "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Step into the spotlight with trendy fashion styles that define elegance, confidence, and uniqueness in every piece!",
      bg: "https://images.squarespace-cdn.com/content/v1/5a6f71fde45a7cd7623bb4c5/4f1b631c-05c2-4731-8299-d73e379ed435/Nomi+Designs-+fall+2022+Studio+-+Ethos+Imagery+-55.jpg",
    },
    {
      category: "gadgets",
      // image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Get your hands on the latest tech gadgets designed to elevate your digital experience and simplify your life.",
      bg: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      category: "electronics",
      // image: "https://images.pexels.com/photos/1841841/pexels-photo-1841841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Discover cutting-edge electronics that bring innovation to your home and work, blending performance with style.",
      bg: "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      category: "toys",
      // image: "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Unleash the joy with our exciting range of toys for all ages, designed to inspire imagination and fun!",
      bg: "https://images.pexels.com/photos/1319572/pexels-photo-1319572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return (
    <TrendingProductContext.Provider value={trendingProducts}>
      {children}
    </TrendingProductContext.Provider>
  );
};

export const useTrendingProducts = () => {
    return useContext(TrendingProductContext);
  };

  export default TrendingProducts