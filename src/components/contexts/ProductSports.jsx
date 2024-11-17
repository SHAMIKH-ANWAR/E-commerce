

import React, { createContext, useContext } from "react";

const ProductsContext = createContext([]);

export const useSports = () => {
  return useContext(ProductsContext);
};

const SportsProduct = ({ children }) => {
  const products = [
    {
      name: "New Balance 350 Bat",
      image: "https://cdn.quicksell.co/-No0NhCAHL2PKNexgGj9/products/-Nr4dX7FWe6we2-bSnrX.jpg",
      description: "A comfortable and versatile Silver theme Watch for everyday wear.",
      price: 19.99,
    },
    {
      name: "GM Premium HardBall Bat",
      image: "https://www.deluxsports.com/media/wysiwyg/GM-bat.jpg",
      description: "Stylish slim Fossil that offer both comfort and fashion.",
      price: 49.99,
    },
    {
        name: "Fifa World Cup 2022 Ball",
        image: "https://static.independent.co.uk/2022/12/14/11/adidas%20gold%20dream%20ball.jpg",
        description: "A Premium Product that offers Great lavish and comfort",
        price: 49.99,
      },
      {
        name: "Tennis Balls",
        image: "https://cdn.mos.cms.futurecdn.net/B3BJMxU8s3zA8P6fd3P2s6.jpg",
        description: "A Trinda Exclusive For Urban Nest Members",
        price: 49.99,
      },
  ];

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};

export default SportsProduct;