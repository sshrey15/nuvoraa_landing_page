import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-[#e9dbc8] py-16 px-6 relative">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center mb-24">
        <p className="text-sm mb-20">(Contact us)</p>
        <h2
          className="text-3xl sm:text-4xl md:text-6xl font-black mb-4"
          style={{
            fontFamily: 'aurora',
            textShadow: '1px 1px 0 rgba(0,0,0,0.3)',
          }}
        >
          SEE <br className="hidden sm:block" /> WHAT <br className="hidden sm:block" /> GROWTH <br className="hidden sm:block" /> MEANS
        </h2>
       
      </div>

  {/* Bottom Links */}
  <div className="absolute bottom-16 w-full left-0">
        <div className="w-full flex justify-between">
          {/* Left Links - Touching left edge */}
          <div className="flex flex-col space-y-4 text-sm pl-8">
            <p className="cursor-pointer  transition-colors">Home</p>
            <p className="cursor-pointer  transition-colors">Story</p>
            <p className="cursor-pointer  transition-colors">Work</p>
          </div>

          {/* Right Links - Touching right edge */}
          <div className="flex flex-col space-y-4 text-sm text-right pr-8">
            <p className="cursor-pointer  transition-colors">LinkedIn</p>
            <p className="cursor-pointer  transition-colors">Instagram</p>
            <p className="cursor-pointer  transition-colors">Facebook</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;