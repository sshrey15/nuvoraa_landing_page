'use client';
import React from 'react';
import Image from 'next/image';

const Companies: React.FC = () => {
  const logos = [
    '/logos/l1.svg',
    '/logos/l2.svg',
    '/logos/l1.svg',
    '/logos/l2.svg',
    '/logos/l2.svg',
    '/logos/l1.svg',
  ];

  return (
    <div className="w-full bg-black py-16 overflow-hidden">
      {/* <div className="mb-20">
        <h3 className="text-center text-white text-xl">(Trusted By Industry Leaders)</h3>
      </div> */}
      
      <div className="relative w-full">
        {/* Gradient Overlay - Left */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
        
        {/* Logo Slider */}
        <div className="flex animate-slider space-x-48 whitespace-nowrap">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div 
              key={`first-${index}`} 
              className="inline-block w-[150px] flex-shrink-0"
            >
              <Image
                src={logo}
                alt={`Company logo ${index + 1}`}
                width={150}
                height={75}
                className="w-full h-auto object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
          
          {/* Duplicated set for seamless loop */}
          {logos.map((logo, index) => (
            <div 
              key={`second-${index}`} 
              className="inline-block w-[150px] flex-shrink-0"
            >
              <Image
                src={logo}
                alt={`Company logo ${index + 1}`}
                width={150}
                height={75}
                className="w-full h-auto object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
        
        {/* Gradient Overlay - Right */}
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
      </div>
    </div>
  );
};

export default Companies;