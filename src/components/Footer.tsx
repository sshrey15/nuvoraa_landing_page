"use client"
import React,{useState} from 'react';
import { motion } from "framer-motion";

const Footer = () => {
   const [isHovered, setIsHovered] = useState(false);
  return (
    <footer className="w-full bg-black text-[#e9dbc8] py-16 px-6 relative">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center mb-24">
        <p className="text-sm mb-20">(Contact us)</p>
        <h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl  tracking-tight leading-tight text-center "
        
        >
          SEE <br className="hidden sm:block" /> WHAT <br className="hidden sm:block" /> GROWTH <br className="hidden sm:block" /> MEANS
        </h2>
        
        {/* Centered text below the heading */}
        <motion.div className=
        " relative inline-block mt-6 text-lg md:text-xl pb-1"

        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
                  <span>Ready to lead the digital revolution? Let’s make it happen.</span>
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-white"
                    initial={{ width: "100%" }}
                    animate={{ width: isHovered ? "30%" : "100%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </motion.div>
      </div>

      {/* Bottom Links */}
      <div className="absolute bottom-16 w-full left-0">
        <div className="w-full flex justify-between">
          {/* Left Links - Touching left edge */}
          <div className="flex flex-col space-y-4 text-sm pl-8">
            <p className="cursor-pointer transition-colors">Home</p>
            <p className="cursor-pointer transition-colors">Story</p>
            <p className="cursor-pointer transition-colors">Work</p>
          </div>

          {/* Right Links - Touching right edge */}
          <div className="flex flex-col space-y-4 text-sm text-right pr-8">
            <p className="cursor-pointer transition-colors">LinkedIn</p>
            <p className="cursor-pointer transition-colors">Instagram</p>
            <p className="cursor-pointer transition-colors">Facebook</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
