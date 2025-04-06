// components/WhyWorkWithUs.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface WhyWorkWithUsProps {
  topBorderImage: string;
  bottomBorderImage: string;
}

const WhyWorkWithUs: React.FC<WhyWorkWithUsProps> = ({
  topBorderImage,
  bottomBorderImage,
}) => {
  return (
    <section className="relative w-full">
      {/* Top border pattern */}
      <div className="w-full relative z-10 bg-stone-100">
        <Image
          src={topBorderImage}
          alt="Top Decorative Border"
          width={1920}
          height={200}
          className="w-full h-auto mix-blend-multiply select-none pointer-events-none"
          style={{
            display: 'block',
            imageRendering: 'auto',
          }}
        />
      </div>

      {/* Main content */}
      <div className="w-full bg-stone-100 py-16 px-6 md:px-12 lg:px-20 relative z-20">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <h3 className="text-center text-black text-xl mb-8">Why Work with us?</h3>

          {/* Bold statement */}
          <div className="mb-10">
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-black text-center tracking-tight leading-tight"
              style={{
                fontFamily: 'aurora',
                textShadow: '1px 1px 0px rgba(0,0,0,0.2)',
                letterSpacing: '-0.02em',
              }}
            >
              WE DON’T COMPETE
              <br />
              WE DOMINATE
            </h2>
          </div>

          {/* Description */}
          <div className="mb-12">
            <p className="text-center text-stone-600 max-w-3xl mx-auto leading-relaxed">
              We go beyond traditional marketing by leveraging predictive analytics, machine learning, and intelligent
              automation to outmaneuver the competition. Our AI-driven approach optimizes campaigns in real time, delivering
              hyper-personalized messaging, laser-precise targeting, and data-backed decisions that maximize impact.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/story">
              <span className="inline-block border-b-2 border-black pb-1 text-lg hover:border-orange-500 hover:text-orange-600 transition-colors cursor-pointer">
                Know Our Story
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom border pattern */}
      <div className="w-full relative z-10 bg-stone-100">
        <Image
          src={bottomBorderImage}
          alt="Bottom Decorative Border"
          width={1920}
          height={200}
          className="w-full h-auto mix-blend-multiply select-none pointer-events-none"
          style={{
            display: 'block',
            imageRendering: 'auto',
          }}
        />
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
