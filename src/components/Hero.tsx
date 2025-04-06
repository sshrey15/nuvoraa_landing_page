// components/HeroSection.tsx
import React from "react";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <div className="w-full bg-black text-white py-8 md:py-16 px-4 md:px-8">
      <div className="container mx-auto">
        {/* Logo */}
        <div className="mb-8 md:mb-12 flex justify-center items-center">
          <h1
            className="text-[10vw] md:text-[12vw] font-bold text-slate-100 tracking-wider text-center w-full px-2 md:px-4"
            style={{
              fontFamily: "aurora",
              filter: "drop-shadow(2px 2px 0px rgba(0,0,0,0.2))",
              textShadow: "2px 2px 0px rgba(0,0,0,0.5)",
            }}
          >
            NUVORAA
          </h1>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Image/Empty Space Placeholder */}
          <div className="bg-white rounded-lg w-full h-48 sm:h-64 md:h-96"></div>

          {/* Text Content */}
          <div className="space-y-6 md:space-y-8">
            <p className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed px-2 md:px-0">
              At Nuvoraa, we create trends, not follow them. With AI-driven
              intelligence, we craft data-backed strategies that innovate,
              automate, and accelerate. No guesswork—just smarter marketing with
              real results.
            </p>

            {/* CTA Button */}
            <div className="px-2 md:px-0">
              <Link href="/services">
                <span className="inline-block text-lg md:text-xl border-b-2 border-white pb-1 hover:border-orange-500 hover:text-orange-400 transition-colors cursor-pointer">
                  Explore Our Services
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;