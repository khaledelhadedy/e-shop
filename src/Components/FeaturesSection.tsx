// src/components/FeaturesSection.tsx
"use client";
import React from 'react';
import { FaTruck, FaMoneyBillWave, FaHeadset, FaLock } from 'react-icons/fa'; // Icons for the features

const FeaturesSection: React.FC = () => {
  return (
    <div className="bg-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Free Delivery */}
        <div className="flex items-center justify-center p-6 border border-gray-200 rounded-md">
          <FaTruck className="text-red-600 text-4xl mr-4" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Free Delivery</h3>
            <p className="text-sm text-gray-500">Worldwide</p>
          </div>
        </div>
        
        {/* Money Returns */}
        <div className="flex items-center justify-center p-6 border border-gray-200 rounded-md">
          <FaMoneyBillWave className="text-red-600 text-4xl mr-4" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Money Returns</h3>
            <p className="text-sm text-gray-500">30 Days money return</p>
          </div>
        </div>
        
        {/* Online Support */}
        <div className="flex items-center justify-center p-6 border border-gray-200 rounded-md">
          <FaHeadset className="text-red-600 text-4xl mr-4" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">24/7 Online Support</h3>
            <p className="text-sm text-gray-500">Customer Support</p>
          </div>
        </div>
        
        {/* Payment Security */}
        <div className="flex items-center justify-center p-6 border border-gray-200 rounded-md">
          <FaLock className="text-red-600 text-4xl mr-4" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Payment Security</h3>
            <p className="text-sm text-gray-500">Safe Payment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
