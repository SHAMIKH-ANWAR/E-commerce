import React from 'react'
import { Link } from 'react-router-dom'

const ExploreProductHeader = () => {
  return (
    <header className="w-full h-1/6 bg-teal-200 flex gap-8 text-black text-sm md:text-lg items-center justify-center font-thin">
    <Link to={"/"}><h1>Urban Nest Home</h1></Link>
    <h1 className="hidden lg:block">Kitchen and home Appliances</h1>
    <h1 className="hidden lg:block">Large Appliances</h1>
    <h1 className="hidden lg:block">Kitchen & Dining</h1>
    <h1 className="hidden lg:block">Furniture</h1>
    <h1 className="hidden md:block">Home Furnishing</h1>
    <h1 className="hidden md:block">Home Decor</h1>
  </header>
  )
}

export default ExploreProductHeader