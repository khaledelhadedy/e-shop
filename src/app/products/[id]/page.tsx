"use client"; // Ensure this component is client-side

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Header from '@/Components/Header/Header'; // Adjust the path based on your project structure

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const ProductPage: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams(); // Use useParams instead of useRouter

  // Fetch product details based on the product ID
  useEffect(() => {
    if (!id) return; // Return if there's no product ID yet

    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="text-center py-10">Loading product details...</div>;
  }

  if (!product) {
    return <div className="text-center py-10">Product not found</div>;
  }

  return (
    <div>
      {/* Add Header component */}
      <Header />

      <div className="container mx-auto py-10 px-4">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Section - Product Image */}
          <div className="w-full md:w-1/2 mt-10">
            <Image
              src={product.image}
              alt={product.title}
              width={400}
              height={400}
              className="object-cover"
            />
          </div>

          {/* Right Section - Product Info */}
          <div className="w-full md:w-1/2 mt-20">
            <h1 className="text-2xl font-bold mb-3 text-gray-900">{product.title}</h1>
            <p className="text-gray-500 mb-3">{product.category}</p>

            <div className="flex items-center mb-4">
              <span className="text-3xl font-bold text-red-600">
                ${product.price.toFixed(2)}
              </span>
            </div>

            <p className="text-gray-600 mb-5">{product.description}</p>

            {/* Add to Cart Button */}
            <button className="bg-red-600 text-white font-bold py-3 px-6 rounded hover:bg-red-700 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
