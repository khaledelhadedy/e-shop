"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { AiFillStar, AiOutlineZoomIn, AiOutlineHeart } from 'react-icons/ai';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { GoGitCompare } from 'react-icons/go';
import { LiaOpencart } from 'react-icons/lia';
import { useRouter } from 'next/navigation'; // Correct import for useRouter in Next.js

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentIndex, setCurrentIndex] = useState(0); // Index for card-by-card navigation
  const cardWidth = 260; // Card width in pixels
  const cardGap = 16; // Gap between cards
  const totalCardWidth = cardWidth + cardGap; // Total width of each card plus the gap

  const productRowRef = useRef<HTMLDivElement>(null);
  const router = useRouter(); // Initialize useRouter

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProducts(data);
        setLoading(false); // Turn off the loading state
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Infinite loop pagination logic
  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1));
  };

  // Mouse drag functionality
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.buttons === 1 && productRowRef.current) {
      const scrollAmount = e.movementX;
      productRowRef.current.scrollLeft -= scrollAmount;
    }
  };

  // If loading, show a spinner or loading text
  if (loading) {
    return <div className="text-center py-10">Loading products...</div>;
  }

  return (
    <div className="container mx-auto py-10 relative">
      <h2 className="text-3xl font-semibold text-black text-center mb-8">Exclusive Products</h2>

      {/* Wrapper for arrows and product row */}
      <div className="relative flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={prevCard}
          className="absolute left-0 z-10 p-2 transition-opacity duration-300 opacity-100"
        >
          <FaArrowLeft className="text-3xl text-black" />
        </button>

        {/* Product Row (Swipeable/Draggable) */}
        <div
          ref={productRowRef}
          className="overflow-hidden w-full max-w-[1050px]"
          onMouseMove={handleMouseMove}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * totalCardWidth}px)`,
              width: `${products.length * totalCardWidth}px`, // Dynamic width based on number of products
            }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between mx-2 relative group"
                style={{ width: '260px', height: '400px' }} // Fixed card size
              >
                {/* Product Image */}
                <div className="flex justify-center mb-4 relative">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={180}
                    height={180}
                    className="object-contain w-[180px] h-[180px]" // Fixed image size
                  />

                  {/* Hover Icons */}
                  <div className="absolute inset-0 flex justify-center items-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-100/80">
                    <button className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition">
                      <GoGitCompare className="text-gray-700 text-xl" />
                    </button>
                    <button className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition">
                      <AiOutlineZoomIn className="text-gray-700 text-xl" />
                    </button>
                    <button className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition">
                      <AiOutlineHeart className="text-gray-700 text-xl" />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex flex-col flex-1 justify-between">
                  <div className="text-center h-[60px]">
                    {/* Navigate to Single Product Page */}
                    <h3
                      className="text-sm font-semibold text-gray-800 mb-1 cursor-pointer hover:text-red-600 transition truncate ..."
                      onClick={() => router.push(`/products/${product.id}`)} // Use router to navigate
                    >
                      {product.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-3 font-bold">{product.category}</p>
                  </div>

                  <p className="text-xs text-gray-600 mb-3 text-center h-[30px]">
                    {product.description.slice(0, 40)}...
                  </p>

                  <div className="text-center mb-4">
                    {/* Price */}
                    <div className="text-red-600 font-bold text-sm mb-1">
                      ${product.price.toFixed(2)}
                    </div>

                    {/* Rating and Reviews */}
                    <div className="flex justify-center items-center text-yellow-500 mb-9 space-x-1">
                      <AiFillStar className="text-xs" />
                      <AiFillStar className="text-xs" />
                      <AiFillStar className="text-xs" />
                      <AiFillStar className="text-xs" />
                      <AiFillStar className="text-xs" />
                      <span className="text-xs text-gray-500">(5 reviews)</span>
                    </div>
                  </div>
                </div>

                {/* Add to Cart Button - Visible only on Hover */}
                <button className="absolute bottom-2 left-2 right-2 bg-red-600 text-white text-sm font-bold py-2 rounded-md opacity-0 group-hover:opacity-100 transition hover:bg-red-700">
                  <LiaOpencart className="inline mr-1" /> Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextCard}
          className="absolute right-0 z-10 p-2 transition-opacity duration-300 opacity-100"
        >
          <FaArrowRight className="text-3xl text-black" />
        </button>
      </div>
    </div>
  );
};

export default ProductList;
