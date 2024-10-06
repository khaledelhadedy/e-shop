"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { AiFillStar, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { GoGitCompare } from 'react-icons/go';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const SingleProduct: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null); // Product data
  const [quantity, setQuantity] = useState(1); // Quantity for Add to Cart
  const [selectedSize, setSelectedSize] = useState<string>('M'); // Default size
  const [selectedColor, setSelectedColor] = useState<string>('red'); // Default color
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  // Fetch product data from the API
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/1'); // API call to fetch product data
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  // Handle Add to Cart
  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product?.title} to cart.`);
  };

  // Loading State
  if (loading) {
    return <div className="text-center py-10">Loading product...</div>;
  }

  // If product is null (API fetch fails)
  if (!product) {
    return <div className="text-center py-10">Failed to load product</div>;
  }

  

  return (
    <div className="container mx-auto py-10 px-4 md:px-10">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left Section - Product Images */}
        <div className="w-full md:w-1/2">
          <div className="relative mb-5">
            <Image
              src={product.image}
              alt={product.title}
              width={400}
              height={400}
              className="object-cover"
            />
            <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow hover:shadow-lg transition">
              <AiOutlineShoppingCart className="text-2xl text-gray-600" />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3">
            {[product.image, product.image, product.image].map((thumb, index) => (
              <div key={index} className="w-16 h-16 border border-gray-300 rounded-md">
                <Image src={thumb} alt={`Thumbnail ${index + 1}`} width={64} height={64} />
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Product Info */}
        <div className="w-full md:w-1/2">
          {/* Title, Rating, and Reviews */}
          <h1 className="text-2xl font-bold mb-3">{product.title}</h1>

          {/* Price */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl font-bold text-red-600">${product.price.toFixed(2)}</span>
          </div>

          {/* Product Description */}
          <p className="text-gray-600 mb-5">{product.description}</p>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center gap-5 mb-5">
            {/* Quantity Selector */}
            <div className="flex items-center gap-2 border border-gray-300 rounded-md p-2">
              <button
                className="text-gray-600"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="text-lg">{quantity}</span>
              <button className="text-gray-600" onClick={() => setQuantity(quantity + 1)}>
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              className="flex items-center gap-2 bg-red-600 text-white font-bold px-6 py-3 rounded-md hover:bg-red-700 transition"
              onClick={handleAddToCart}
            >
              <AiOutlineShoppingCart /> Add to Cart
            </button>
          </div>

          {/* SKU, Category, and Tags */}
          <div className="text-sm text-gray-600 mb-5">
            <p>Category: {product.category}</p>
          </div>

          {/* Share Section */}
          <div className="flex items-center gap-3">
            <span className="font-semibold text-gray-600">Share:</span>
            <div className="flex gap-2">
              <a href="#" className="text-gray-600 hover:text-gray-800">Facebook</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">Twitter</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
