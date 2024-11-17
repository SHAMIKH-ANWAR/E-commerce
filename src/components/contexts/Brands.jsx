import React from "react";
import { createContext, useContext } from "react";

const brandsContext = createContext();
const Brands = ({ children }) => {
  const brandProvider = [
    {
      title: "Adidas",
      link: "",
      thumbnail:
        ".\\src\\assets\\adidas-logo-photo-png-3-removebg-preview.png",
    },
    {
      title: "Nike",
      link: "",
      thumbnail: ".\\src\\assets\\nike-logo-18-1024x1024-removebg-preview.png",
    },
    {
      title: "ROG",
      link: "",
      thumbnail:
        ".\\src\\assets\\Rog-removebg-preview.png",
    },
    {
      title: "Versace",
      link: "",
      thumbnail:
        ".\\src\\assets\\Versace-removebg-preview.png",
    },
    {
      title: "Claude",
      link: "",
      thumbnail:
        ".\\src\\assets\\Claude-removebg-preview.png",
    },
    {
      title: "Louis Vitton",
      link: "",
      thumbnail:
        ".\\src\\assets\\LouisVitton-removebg.png",
    },
    {
      title: "Asus",
      link: "",
      thumbnail:
        ".\\src\\assets\\Asus2-removebg-preview.png",
    },
    // {
    //   title: "Lenovo",
    //   link: "",
    //   thumbnail:
    //     "",
    // },
    // {
    //   title: "Lenovo",
    //   link: "",
    //   thumbnail:
    //     ".\\src\\assets\\Lenovo-removebg-preview.png",
    // },
    {
      title: "Intel",
      link: "",
      thumbnail:
        ".\\src\\assets\\Intel-removebg-preview.png",
    },
  ];
  return (
    <brandsContext.Provider value={brandProvider}>
      {children}
    </brandsContext.Provider>
  );
};

export const useBrands = () => {
  return useContext(brandsContext);
};

export default Brands;
