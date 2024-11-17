import { Blend, CircleUserRound, Search, ShoppingCart, Star } from "lucide-react";
import { useState } from "react";


import { Button } from "../ui/Auth-ui/button";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";

export default function Navbar({ isLoggedIn }) {
  const [showMenu, setShowMenu] = useState(false);
  const nav = useNavigate();
  const [ShowCartPage,setShowCartPage] = useState(false);
  const Placeholder =["Search"];
  const NavigateToCart = () =>{
    setShowCartPage(true);
    if(ShowCartPage){
      nav("/Cart")
    }
  }
  return (
    <nav className="w-full bg-gray-600 text-white sticky">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between py-4">
          <div className="flex items-center gap-5">
            <Blend className="w-10 h-10 mr-2" />
            <span className="text-xl font-semibold">Urban Nest</span>
            <Link to={"/"}><h1>Home</h1></Link>
          </div>


          <button
            className="lg:hidden"
            onClick={() => setShowMenu(!showMenu)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          <div className={`w-full lg:flex lg:w-auto ${showMenu ? 'block' : 'hidden'}`}>
            <div className="flex flex-col lg:flex-row lg:items-center mt-4 lg:mt-0">
              <div className="relative mb-4 lg:mb-0 lg:mr-4">
               
                <PlaceholdersAndVanishInput
                  
                  placeholders={Placeholder}
                  className="w-full lg:w-64 pr-10 bg-gray-700 text-white placeholder-gray-400 border-gray-600"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>

              <div className="hidden lg:flex items-center space-x-4">
                <div className="flex items-center">
                  <span className="mr-2">Contact us</span>
                  <Star className="h-5 w-5" />
                </div>
                <div className="flex items-center">
                  <span className="mr-2">Rate us</span>
                  <div className="flex">
                    <Star className="h-5 w-5" />
                    <Star className="h-5 w-5" />
                    <Star className="h-5 w-5" />
                  </div>
                </div>
              </div>

              <div className="flex items-center mt-4 lg:mt-0 lg:ml-4">
                <Button variant="ghost" className="flex items-center">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  <span onClick={NavigateToCart}>View Cart</span>
                </Button>
                {isLoggedIn ? (
                  <CircleUserRound className="h-8 w-8 ml-4" />
                ) : (
                  <Link to={"/Login"}><Button variant="secondary" className="ml-4">
                    Login
                  </Button></Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
