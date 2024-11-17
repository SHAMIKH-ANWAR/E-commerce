'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star, ShoppingCart} from 'lucide-react'
import Button from "../ui/Buttons";
import { Card, CardContent, CardFooter } from "@/components/ui/Auth-ui/card"

const popularProducts = [
  {
    id: 1,
    name: "Wireless Noise-Cancelling Headphones",
    price: 299.99,
    rating: 4.8,
    image: "https://m.media-amazon.com/images/I/61oCQB6wzjL._AC_UF1000,1000_QL80_.jpg",
    category: "Electronics"
  },
  {
    id: 2,
    name: "Smart Fitness Tracker",
    price: 129.99,
    rating: 4.6,
    image: "https://cdn.thewirecutter.com/wp-content/media/2023/11/fitness-tracker-2048px-5344.jpg?auto=webp&quality=75&crop=1.91:1&width=1200",
    category: "Wearables"
  },
  {
    id: 3,
    name: "Ergonomic Office Chair",
    price: 249.99,
    rating: 4.7,
    image: "https://cellbell.in/cdn/shop/files/Desire-C104-Mid-Back-Leatherette-Office-Chair-CellBell-1674148571.png?v=1714718861",
    category: "Furniture"
  },
  {
    id: 4,
    name: "Gourmet Coffee Maker",
    price: 179.99,
    rating: 4.9,
    image: "https://assets.epicurious.com/photos/62741684ef40ea9d3866a0be/16:9/w_2560%2Cc_limit/breville-bambino-espresso-maker_HERO_050422_8449_VOG_Badge_final.jpg",
    category: "Appliances"
  },
  {
    id: 5,
    name: "Portable Power Bank",
    price: 49.99,
    rating: 4.5,
    image: "https://rukminim2.flixcart.com/image/850/1000/johi3680/power-bank/g/5/p/battery-pack-eb-p1100bsngin-samsung-original-imafaxsftjwzgmkh.jpeg?q=20&crop=false",
    category: "Electronics"
  },
  {
    id: 6,
    name: "Yoga Mat",
    price: 39.99,
    rating: 4.7,
    image: "https://m.media-amazon.com/images/I/71b5fW+s18L.jpg",
    category: "Fitness"
  }
]

const ProductCard = ({ product }) => (
  <motion.div
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
  >
    <Card className="overflow-hidden">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-2 right-2">{product.category}</span>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-1 font-mono">{product.name}</h3>
        <div className="flex justify-between items-center mb-2">
          <span className="font-bold text-xl">${product.price.toFixed(2)}</span>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm">{product.rating}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button className="flex-1 mr-2">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
        {/* <Button variant="outline" size="icon">
          <Heart className="w-4 h-4" />
        </Button> */}
      </CardFooter>
    </Card>
  </motion.div>
)

export default function Sale() {
  return (
    <section className="py-12  dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}