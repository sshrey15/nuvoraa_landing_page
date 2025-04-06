import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-[#e9dbc8] py-16 px-6 relative">
      {/* Center Content */}
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        <p className="text-sm uppercase mb-2">Contact us</p>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-black mb-4"
          style={{
            fontFamily: 'aurora',
            textShadow: '1px 1px 0 rgba(0,0,0,0.3)',
          }}
        >
          SEE WHAT <br className="hidden sm:block" /> GROWTH MEANS
        </h2>
        <p className="text-sm mt-2">Lets Get Wild</p>
      </div>

      {/* Side Links for Large Screens */}
      <div className="hidden md:flex absolute left-6 top-1/2 transform -translate-y-1/2 flex-col space-y-4 text-sm">
        <p className="cursor-pointer hover:underline">Home</p>
        <p className="cursor-pointer hover:underline">Story</p>
        <p className="cursor-pointer hover:underline">Work</p>
      </div>

      <div className="hidden md:flex absolute right-6 top-1/2 transform -translate-y-1/2 flex-col space-y-4 text-sm text-right">
        <p className="cursor-pointer hover:underline">LinkedIn</p>
        <p className="cursor-pointer hover:underline">Instagram</p>
        <p className="cursor-pointer hover:underline">Facebook</p>
      </div>

      {/* Side Links for Mobile */}
      <div className="md:hidden mt-10 flex flex-col items-center text-sm space-y-4">
        <div className="flex space-x-6">
          <p className="cursor-pointer hover:underline">Home</p>
          <p className="cursor-pointer hover:underline">Story</p>
          <p className="cursor-pointer hover:underline">Work</p>
        </div>
        <div className="flex space-x-6">
          <p className="cursor-pointer hover:underline">LinkedIn</p>
          <p className="cursor-pointer hover:underline">Instagram</p>
          <p className="cursor-pointer hover:underline">Facebook</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
