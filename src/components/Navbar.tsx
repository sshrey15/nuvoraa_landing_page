"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string): boolean => {
    return pathname === path;
  };
  
  return (
    <nav className="w-full bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <span className="cursor-pointer hover:text-orange-500 transition-colors duration-300" style={{fontFamily: 'aurora'}}>
              NUVORAA
            </span>
          </Link>
        </div>
        
        {/* Hamburger Menu Button */}
        <button 
          className="md:hidden p-2 hover:text-orange-500 transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg 
            className="w-6 h-6 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        
        {/* Navigation Links */}
        <div className={`
          ${isMenuOpen ? 'flex' : 'hidden'} 
          md:flex flex-col md:flex-row 
          absolute md:relative 
          top-16 md:top-0 
          left-0 md:left-auto 
          w-full md:w-auto 
          bg-black md:bg-transparent 
          py-4 md:py-0 
          px-4 md:px-0 
          space-y-4 md:space-y-0 
          md:space-x-8
          z-50
        `}>
          <Link href="/">
            <span className={`cursor-pointer block md:inline transition-all duration-300 hover:text-orange-500 
              ${isActive('/') ? 'bg-orange-600 px-4 py-2 hover:bg-orange-700' : ''}`}>
              Home
            </span>
          </Link>
          <Link href="/story">
            <span className={`cursor-pointer block md:inline transition-all duration-300 hover:text-orange-500 
              ${isActive('/story') ? 'bg-orange-600 px-4 py-2 hover:bg-orange-700' : ''}`}>
              Story
            </span>
          </Link>
          <Link href="/services">
            <span className={`cursor-pointer block md:inline transition-all duration-300 hover:text-orange-500 
              ${isActive('/services') ? 'bg-orange-600 px-4 py-2 hover:bg-orange-700' : ''}`}>
              Services
            </span>
          </Link>
          <Link href="/work">
            <span className={`cursor-pointer block md:inline transition-all duration-300 hover:text-orange-500 
              ${isActive('/work') ? 'bg-orange-600 px-4 py-2 hover:bg-orange-700' : ''}`}>
              Work
            </span>
          </Link>
          <Link href="/contact">
            <span className="cursor-pointer block md:inline border-b border-white hover:border-orange-500 hover:text-orange-500 transition-all duration-300">
              Get Offer Today
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;