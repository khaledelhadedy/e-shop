"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { CiPhone } from "react-icons/ci";
import { GoGitCompare } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { BsSearch } from "react-icons/bs";
import { LiaOpencart } from "react-icons/lia";

const Header: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState('en'); // Default language is English
  const [isLangOpen, setIsLangOpen] = useState(false); // Control language dropdown visibility
  const langMenuRef = useRef<HTMLDivElement>(null); // Ref to handle outside click detection for language dropdown

  const [selectedCurrency, setSelectedCurrency] = useState('USD'); // Default currency is USD
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false); // Control currency dropdown visibility
  const currencyMenuRef = useRef<HTMLDivElement>(null); // Ref to handle outside click detection for currency dropdown

  const languages = [
    { code: 'en', label: 'English', flag: '🇺🇸' }, 
    { code: 'fr', label: 'French', flag: '🇫🇷' },  
    { code: 'us', label: 'United States', flag: '🇺🇸' }, 
  ];

  const currencies = [
    { code: 'USD', label: 'USD', symbol: '$' },
    { code: 'EUR', label: 'Euro', symbol: '€' },
    { code: 'GBP', label: 'Pound', symbol: '£' },
  ];

  // Close dropdowns if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
      if (currencyMenuRef.current && !currencyMenuRef.current.contains(event.target as Node)) {
        setIsCurrencyOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (langCode: string) => {
    setSelectedLang(langCode); 
    setIsLangOpen(false); 
  };

  const handleCurrencyChange = (currencyCode: string) => {
    setSelectedCurrency(currencyCode); 
    setIsCurrencyOpen(false); 
  };

  return (
    <header>
      {/* Top Bar */}
      <div className="bg-gray-100 text-gray-600 h-[52px] border-b border-gray-300 transition-all duration-500 ease-in-out px-[400px]">
        <div className="flex justify-between items-center h-full">
          <div className="flex space-x-8 items-center">
            {/* Language Dropdown */}
            <div className="relative flex items-center" ref={langMenuRef}>
              <button
                className="flex items-center gap-2"
                onClick={() => setIsLangOpen(!isLangOpen)}
              >
                <span>{languages.find(lang => lang.code === selectedLang)?.label}</span>
                {isLangOpen ? <FaAngleUp /> : <FaAngleDown />}
              </button>
              {isLangOpen && (
                <div className="absolute left-0 top-[40px] bg-white border rounded shadow-lg py-2 w-32">
                  {languages.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      <span className="mr-2">{lang.flag}</span>
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Currency Dropdown */}
            <div className="relative flex items-center" ref={currencyMenuRef}>
              <button
                className="flex items-center gap-2"
                onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
              >
                <span>{currencies.find(currency => currency.code === selectedCurrency)?.label}</span>
                {isCurrencyOpen ? <FaAngleUp /> : <FaAngleDown />}
              </button>
              {isCurrencyOpen && (
                <div className="absolute left-0 top-[40px] bg-white border rounded shadow-lg py-2 w-32">
                  {currencies.map(currency => (
                    <button
                      key={currency.code}
                      onClick={() => handleCurrencyChange(currency.code)}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      <span className="mr-2">{currency.symbol}</span>
                      {currency.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Contact Number */}
            <span className="flex items-center gap-2">
              <CiPhone /> <span>123-456-7890</span>
            </span>
          </div>

          {/* Right Section */}
          <div className="flex space-x-7 items-center">
            <Link className="flex items-center gap-2 hover:text-red-600" href="/compare">
              <GoGitCompare /> Compare
            </Link>
            <Link className="flex items-center gap-2 hover:text-red-600" href="/wishlist">
              <CiHeart /> Wishlist
            </Link>
            <Link className="flex items-center gap-2 hover:text-red-600" href="/login">
              <CgProfile /> Login
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md h-[67px] px-[400px]">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/logo_dark.svg" // Replace with your logo
              alt="Shopwise"
              width={150}
              height={50}
              className="object-cover brightness-0" 
            />
          </Link>

          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-6 font-medium text-[#687188] text-[16px] font-poppins ml-auto">
            <li className="relative group">
              <Link href="/" className="hover:text-red-600 flex items-center gap-1">
                Home
                <FaAngleDown />
              </Link>
              <div className="absolute left-0 top-[40px] w-32 bg-white border rounded shadow-lg py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link href="/subpage1" className="block px-4 py-2 hover:bg-gray-100">Subpage 1</Link>
                <Link href="/subpage2" className="block px-4 py-2 hover:bg-gray-100">Subpage 2</Link>
              </div>
            </li>
            <li className="relative group">
              <Link href="/pages" className="hover:text-red-600 flex items-center gap-1">
                Pages
                <FaAngleDown />
              </Link>
              <div className="absolute left-0 top-[40px] w-32 bg-white border rounded shadow-lg py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link href="/pages/about" className="block px-4 py-2 hover:bg-gray-100">About</Link>
                <Link href="/pages/contact" className="block px-4 py-2 hover:bg-gray-100">Contact</Link>
              </div>
            </li>
            <li className="relative group">
              <Link href="/products" className="hover:text-red-600 flex items-center gap-1">
                Products
                <FaAngleDown />
              </Link>
              <div className="absolute left-0 top-[40px] w-32 bg-white border rounded shadow-lg py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link href="/products/new" className="block px-4 py-2 hover:bg-gray-100">New Arrivals</Link>
                <Link href="/products/best-sellers" className="block px-4 py-2 hover:bg-gray-100">Best Sellers</Link>
              </div>
            </li>
            <li className="relative group">
              <Link href="/blog" className="hover:text-red-600 flex items-center gap-1">
                Blog
                <FaAngleDown />
              </Link>
              <div className="absolute left-0 top-[40px] w-32 bg-white border rounded shadow-lg py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link href="/blog/articles" className="block px-4 py-2 hover:bg-gray-100">Articles</Link>
                <Link href="/blog/news" className="block px-4 py-2 hover:bg-gray-100">News</Link>
              </div>
            </li>
            <li className="relative group">
              <Link href="/shop" className="hover:text-red-600 flex items-center gap-1">
                Shop
                <FaAngleDown />
              </Link>
              <div className="absolute left-0 top-[40px] w-32 bg-white border rounded shadow-lg py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link href="/shop/mens" className="block px-4 py-2 hover:bg-gray-100">Men's</Link>
                <Link href="/shop/womens" className="block px-4 py-2 hover:bg-gray-100">Women's</Link>
              </div>
            </li>
            <li className="relative group">
              <Link href="/contact" className="hover:text-red-600 flex items-center gap-1">
                Contact Us
                <FaAngleDown />
              </Link>
              <div className="absolute left-0 top-[40px] w-32 bg-white border rounded shadow-lg py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link href="/contact/form" className="block px-4 py-2 hover:bg-gray-100">Contact Form</Link>
                <Link href="/contact/locations" className="block px-4 py-2 hover:bg-gray-100">Our Locations</Link>
              </div>
            </li>
          </ul>

          {/* Icons (Search, Cart) */}
          <div className="flex items-center space-x-4 ">
            <button className="text-xl text-black items-center gap-2 hover:text-red-600"><BsSearch /></button>
            <Link href="/cart" className="relative text-2xl text-black flex items-center gap-2 hover:text-red-600">
              <LiaOpencart />
              <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                2
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
