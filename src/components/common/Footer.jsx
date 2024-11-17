import React from 'react'
import { Blend, Facebook, Instagram, Twitter } from 'lucide-react'
import { PlaceholdersAndVanishInput } from '../ui/placeholders-and-vanish-input'


const Footer = () => {
  const currentYear = new Date().getFullYear()
  const Placeholder = ["Enter Your Email"]
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 flex gap-3">Urban Nest <Blend/></h2>
            <p className="text-gray-400">Your one-stop shop for all your needs.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-gray-300 transition-colors">Home</a></li>
              <li><a href="/products" className="hover:text-gray-300 transition-colors">Products</a></li>
              <li><a href="/about" className="hover:text-gray-300 transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-gray-300 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="/faq" className="hover:text-gray-300 transition-colors">FAQ</a></li>
              <li><a href="/shipping" className="hover:text-gray-300 transition-colors">Shipping</a></li>
              <li><a href="/returns" className="hover:text-gray-300 transition-colors">Returns</a></li>
              <li><a href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest offers</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col space-y-2">
              <PlaceholdersAndVanishInput
                type="email" 
                placeholders={Placeholder}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Urban Nest. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
              <Facebook size={24} />
            </a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
              <Instagram size={24} />
            </a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer