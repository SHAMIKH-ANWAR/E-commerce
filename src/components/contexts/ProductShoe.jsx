'use client'

import React, { createContext, useContext } from "react";

const ProductsContext = createContext([]);

export const useProducts = () => {
  return useContext(ProductsContext);
};

const ProductShoe = ({ children }) => {
  const products = [
    {
      name: "Air Jordan 4 Retro Reimagined",
      image: "https://crepdogcrew.com/cdn/shop/products/AJ1HighLost_Found.jpg?v=1667562977&width=2048",
      description: "The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.",
      price: 200,
    },
    {
      name: "Nike Air Max 90",
      image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/011744ef273d4a66b9cc880b980340a2_9366/Samba_OG_Shoes_White_ID0478_01_standard.jpg",
      description: "The Nike Air Max 90 remains a popular choice for sneaker enthusiasts, offering comfort and style in one iconic package.",
      price: 120,
    },
    {
      name: "Harley David 650",
      image: "https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "The Nike Air Max 90 remains a popular choice for sneaker enthusiasts, offering comfort and style in one iconic package.",
      price: 120,
    },
    {
      name: "Nike Retro",
      image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "The Nike Air Max 90 remains a popular choice for sneaker enthusiasts, offering comfort and style in one iconic package.",
      price: 120,
    },
    {
      name: "Claude A320",
      image: "https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "The Nike Air Max 90 remains a popular choice for sneaker enthusiasts, offering comfort and style in one iconic package.",
      price: 120,
    },
    {
      name: "Lavish Freeby",
      image: "https://images.pexels.com/photos/1445696/pexels-photo-1445696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "The Nike Air Max 90 remains a popular choice for sneaker enthusiasts, offering comfort and style in one iconic package.",
      price: 120,
    },
    {
      name: "Cassandra High Heel",
      image: "https://images.pexels.com/photos/3076787/pexels-photo-3076787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "The Nike Air Max 90 remains a popular choice for sneaker enthusiasts, offering comfort and style in one iconic package.",
      price: 120,
    },
  ];

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductShoe;