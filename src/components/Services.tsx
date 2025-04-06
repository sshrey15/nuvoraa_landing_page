import React from 'react';

const OurServices: React.FC = () => {
  const services = [
    { number: 1, name: 'PERFORMANCE MARKETING', background: 'bg-[#B15C41]', textColor: 'text-stone-200' },
    { number: 2, name: 'SOCIAL MEDIA MANAGEMENT', background: 'bg-stone-200', textColor: 'text-[#B15C41]' },
    { number: 3, name: 'SEARCH ENGINE OPTIMIZATION', background: 'bg-[#B15C41]', textColor: 'text-stone-200' },
    { number: 4, name: 'WEBSITE DESIGN AND DEVELOPMENT', background: 'bg-stone-200', textColor: 'text-[#B15C41]' },
    { number: 5, name: 'VIDEO PRODUCTION', background: 'bg-[#B15C41]', textColor: 'text-stone-200' }
  ];

return (
  <section className="w-full bg-black text-white py-8 md:py-16 overflow-hidden">
    {/* Header Content */}
    <div className="max-w-6xl mx-auto px-4 md:px-6 mb-8 md:mb-16">
      <h3 className="text-center text-white text-lg md:text-xl mb-4">Our Services</h3>
      
      <h2 
        className="text-4xl sm:text-5xl md:text-6xl text-center font-black mb-6 md:mb-8 leading-tight"
        style={{ 
          fontFamily: 'aurora',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          color: '#f0ebe3'
        }}
      >
        SMART STRATEGIES.<br />
        POWERFUL RESULTS.
      </h2>
      
      <div className="w-full h-px bg-gray-600"></div>
    </div>
    
    {/* Full-width Services List */}
    <div className="w-full space-y-4 md:space-y-6">
      {services.map((service, index) => (
        <div 
          key={index}
          className={`w-full ${service.background} py-6 sm:py-8 md:py-10 transform transition-transform hover:scale-[1.02]`}
        >
          <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
            <span 
              className={`text-4xl sm:text-5xl md:text-7xl font-bold opacity-90 ${service.textColor}`}
              style={{ 
                fontFamily: 'aurora',
                textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
              }}
            >
              {service.number}.
            </span>
            <span 
              className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide ${service.textColor}`}
              style={{ 
                fontFamily: 'aurora',
                textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
              }}
            >
              {service.name}
            </span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

};

export default OurServices;