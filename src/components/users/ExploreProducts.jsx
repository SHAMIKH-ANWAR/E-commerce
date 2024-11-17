import React, { useState } from "react";
import Navbar from "@/components/common/Navbar";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Footer from "../common/Footer";
import { FilterIcon, ChevronDown, ChevronUp } from 'lucide-react';

const FilterSection = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-6">
      <button
        className="flex items-center justify-between w-full text-left font-semibold mb-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && (
        <div className="space-y-2">
          {options.map((option) => (
            <label key={option} className="flex items-center space-x-2 cursor-pointer">
              
              <span>{option}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

const Sidebar = () => {
  return (
    <aside className="hidden lg:block w-64 sticky bg-white dark:bg-gray-800 overflow-y-auto">
      <div className="p-4">
        <div className="flex items-center justify-center mb-6">
          <FilterIcon className="mr-2" />
          <h2 className="text-lg font-semibold">Filters</h2>
        </div>
        <FilterSection
          title="Price Range"
          options={["$0 - $50", "$50 - $100", "$100 - $200", "$200+"]}
        />
        <FilterSection
          title="Category"
          options={["Electronics", "Clothing", "Books", "Home & Garden"]}
        />
        <FilterSection
          title="Brand"
          options={["Apple", "Samsung", "Nike", "Adidas"]}
        />
        <FilterSection
          title="Rating"
          options={["4 Stars & Up", "3 Stars & Up", "2 Stars & Up", "1 Star & Up"]}
        />
      </div>
    </aside>
  );
};

export default function ExploreProducts() {
  return (
    <main className="flex flex-col min-h-screen w-full bg-black">
      <Navbar isLoggedIn={false} />
      <div className="flex-1 flex w-full">
        <div className="flex-1 max-w-full relative">
          <AuroraBackground>
            <div className="flex">
              <Sidebar />
              <div className="flex-1 p-6">
                <h1 className="text-2xl font-bold text-white mb-6">Explore Products</h1>
                {/* Add your product grid or list here */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Example product cards */}
                  {[...Array(8)].map((_, index) => (
                    <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4">
                      <div className="bg-gray-200 dark:bg-gray-600 h-40 rounded-md mb-4"></div>
                      <h3 className="font-semibold mb-2">Product Name</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">$99.99</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AuroraBackground>
        </div>
      </div>
      <Footer />
    </main>
  );
}