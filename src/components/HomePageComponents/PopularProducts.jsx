import React from "react";
import { Card, CardContent } from "@/components/ui/Auth-ui/card";

const categories = [
  {
    name: "Latest Shoes",
    image:
      "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Trendy Accessories",
    image:
      "https://images.pexels.com/photos/1078958/pexels-photo-1078958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Stylish Clothing",
    image:
      "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Smart Gadgets",
    image:
      "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export default function ProductCategories() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {categories.map((category) => (
        <Card key={category.name} className="overflow-hidden shadow-lg">
          <CardContent className="p-0">
            <div className="aspect-square relative group cursor-pointer">
              <img
                src={category.image}
                alt={category.name}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">
                  {category.name}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
