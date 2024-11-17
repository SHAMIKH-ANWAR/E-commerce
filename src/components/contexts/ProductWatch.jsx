'use client'

import React, { createContext, useContext } from "react";

const ProductsContext = createContext([]);

export const useProducts = () => {
  return useContext(ProductsContext);
};

const WatchProduct = ({ children }) => {
  const products = [
    {
      name: "Fastrack P650",
      image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "A comfortable and versatile Silver theme Watch for everyday wear.",
      price: 19.99,
    },
    {
      name: "Fossil Q65",
      image: "https://images.pexels.com/photos/3829441/pexels-photo-3829441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Stylish slim Fossil that offer both comfort and fashion.",
      price: 49.99,
    },
    {
        name: "Fossil Premium Edition",
        image: "https://images.pexels.com/photos/3419331/pexels-photo-3419331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "A Premium Product that offers Great lavish and comfort",
        price: 49.99,
      },
      {
        name: "Trinda Flawless",
        image: "https://images.pexels.com/photos/3487862/pexels-photo-3487862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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

export default WatchProduct;