import React from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { AuroraBackground } from "../ui/aurora-background";
import { Trash2, Plus, Minus } from 'lucide-react';

const CartItem = ({ item }) => (
  <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
    <div className="flex items-center space-x-4">
      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
      <div>
        <h3 className="font-semibold text-gray-800 dark:text-gray-200">{item.name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">${item.price.toFixed(2)}</p>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <div className="flex items-center border border-gray-300 rounded">
        <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700" aria-label="Decrease quantity">
          <Minus className="w-4 h-4" />
        </button>
        <input
          type="number"
          className="w-12 text-center border-none focus:ring-0"
          min="1"
          max="99"
          value={item.quantity}
          readOnly
        />
        <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700" aria-label="Increase quantity">
          <Plus className="w-4 h-4" />
        </button>
      </div>
      <button className="text-red-500 hover:text-red-700" aria-label="Remove item">
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  </div>
);

const Cart = () => {
  // Dummy cart items
  const cartItems = [
    { id: 1, name: "Wireless Headphones", price: 99.99, quantity: 1, image: "https://placeholder.com/150" },
    { id: 2, name: "Smartphone", price: 599.99, quantity: 1, image: "https://placeholder.com/150" },
    { id: 3, name: "Laptop", price: 1299.99, quantity: 1, image: "https://placeholder.com/150" },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.1; // Assuming 10% tax
  const total = subtotal + tax;

  return (
    <section className="min-h-screen flex flex-col">
      <AuroraBackground>
        <Navbar />
        <div className="flex-grow container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200">Your Cart</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
                {cartItems.map(item => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Order Summary</h2>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Tax</span>
                    <span className="font-semibold">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-semibold">
                    <span className="text-gray-800 dark:text-gray-200">Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded transition duration-300">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </AuroraBackground>
    </section>
  );
};

export default Cart;