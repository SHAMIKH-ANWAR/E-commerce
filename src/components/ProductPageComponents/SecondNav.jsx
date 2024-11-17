import { Blend } from 'lucide-react'
import React from 'react'

const SecondNav = () => {
  return (
    <nav className="w-full h-1/6 bg-slate-800 flex gap-6 text-white text-sm md:text-2xl items-center justify-center font-thin">
        <button>Sell</button>
        <button className="hidden lg:block">Best sellers</button>
        <button className="hidden lg:block">Todays Deals</button>
        <button>Home</button>
        <button className="hidden md:block">Mobiles</button>
        <button className="hidden md:block">Electronics</button>
        <button className="hidden md:block">Home & Kitchen</button>
        <button className="hidden lg:block">Customer Service</button>
       
        <Blend className="w-4" />
      </nav>
  )
}

export default SecondNav