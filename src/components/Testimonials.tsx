import React from 'react';
import Image from 'next/image';

interface TestimonialsProps {
  topBorderImage: string;
  bottomBorderImage: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({
  topBorderImage,
  bottomBorderImage
}) => {
  return (
    <section className="relative w-full">
      {/* Top Border */}
      <div className="w-full relative">
        <Image
          src={topBorderImage}
          alt="Top border"
          width={1920}
          height={200}
          className="w-full h-auto"
          style={{ display: 'block' }}
        />
      </div>

      {/* Main Content */}
      <div className="w-full bg-stone-100 py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm uppercase text-black mb-2 font-semibold">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-12" style={{
            fontFamily: 'aurora',
            textShadow: '1px 1px 0 rgba(0,0,0,0.2)',
            letterSpacing: '-0.02em'
          }}>
            WHAT OUR <br /> CLIENTS THINK
          </h2>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[1, 2].map((_, idx) => (
              <div key={idx} className="border p-4 bg-white text-left">
                <div className="w-full h-40 bg-gray-200 mb-4" /> {/* Placeholder for client image */}

                <p className="text-sm text-black mb-2">
                  Nuvoraa transformed our digital presence! Their AI-driven strategies boosted our engagement and sales like never before. Highly recommend!
                </p>
                <p className="text-sm text-black mb-2">
                  Nuvoraa transformed our digital presence! Their AI-driven strategies boosted our engagement and sales like never before. Highly recommend!
                </p>

                <div className="flex justify-between items-center mt-4">
                  <p className="text-lg font-bold tracking-widest">RANGE ROVER</p>
                  <div className="bg-orange-500 p-2">
                    <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                      <path d="M14 3l1.41 1.41L8.83 11H20v2H8.83l6.58 6.59L14 21l-9-9z"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="w-full relative">
        <Image
          src={bottomBorderImage}
          alt="Bottom border"
          width={1920}
          height={200}
          className="w-full h-auto mix-blend-multiply"
          style={{ display: 'block' }}
        />
      </div>
    </section>
  );
};

export default Testimonials;
