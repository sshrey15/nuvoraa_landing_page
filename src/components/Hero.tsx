"use client"
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [textHeight, setTextHeight] = useState(0);
  const textContainerRef = useRef<HTMLDivElement>(null);

  // Measure the text content height on mount and window resize
  useEffect(() => {
    const updateTextHeight = () => {
      if (textContainerRef.current) {
        setTextHeight(textContainerRef.current.clientHeight);
      }
    };

    // Initial measurement
    updateTextHeight();
    
    // Update on window resize
    window.addEventListener('resize', updateTextHeight);
    
    return () => {
      window.removeEventListener('resize', updateTextHeight);
    };
  }, []);

  return (
    <div className="w-full bg-black text-white py-8 md:py-16 px-4 md:px-8">
      <div className="container mx-auto">
        {/* Logo */}
        <div className="mt-8 md:mt-16 mb-12 md:mb-16 flex justify-center items-center">
          <h1
            className="text-[10vw] md:text-[8vw] mt-20 font-bold text-[#E0D9CD] tracking-wider text-center w-full px-2 md:px-4"
            style={{
              fontFamily: "peckham",
              filter: "drop-shadow(2px 2px 0px rgba(0,0,0,0.2))",
              textShadow: "2px 2px 0px rgba(0,0,0,0.5)",
            }}
          >
            NUVORAA
          </h1>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Video Container - replacing the white box */}
          <div 
            className="w-full relative rounded-lg overflow-hidden"
            style={{ 
              height: textHeight > 0 ? `${textHeight}px` : 'auto',
              minHeight: '200px'
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/v1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Optional overlay for better text contrast */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* Text Content */}
          <div ref={textContainerRef} className="space-y-6 md:space-y-8">
            <p className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed px-2 md:px-0">
              At Nuvoraa, we create trends, not follow them. With AI-driven
              intelligence, we craft data-backed strategies that innovate,
              automate, and accelerate. No guesswork—just smarter marketing with
              real results.
            </p>

            {/* CTA Button with line animation */}
            <div 
              className="px-2 md:px-0 inline-block cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Link href="/services">
                <motion.div className="relative inline-block text-lg md:text-xl pb-1">
                  <span>Explore Our Services</span>
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-white"
                    initial={{ width: "100%" }}
                    animate={{ width: isHovered ? "30%" : "100%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;