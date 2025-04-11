"use client"
// Example usage in a page component
import MarketingServices from './components/screamSection';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  const seoServices = [
    {
      title: "REVENUE DRIVEN ECOMMERCE",
      description: "Boost sales and profitability with intelligent AI-driven strategies that optimize conversions, personalize customer experiences, and drive scalable growth."
    },
    {
      title: "AI DRIVEN LEAD GENERATION",
      description: "Harness AI-powered insights to attract, qualify, and convert high-value leads with precision and efficiency."
    },
    {
      title: "TARGET BRAND AWARENESS",
      description: "Make your brand unforgettable with strategic exposure and meaningful audience connections."
    },
    {
      title: "HIGH INTENT APP INSTALLS",
      description: "Drive installs that go beyond downloads—focus on users who take meaningful actions and contribute to your growth."
    }
  ];

  const webDevServices = [
    {
      title: "WEBSITE DEVELOPMENT",
      description: "Custom-built, high-performance websites that deliver exceptional user experiences and convert visitors into customers."
    },
    {
      title: "E-COMMERCE SOLUTIONS",
      description: "Scalable online stores with seamless checkout processes, inventory management, and payment integrations."
    },
    {
      title: "CMS IMPLEMENTATION",
      description: "User-friendly content management systems that empower your team to update content without technical assistance."
    },
    {
      title: "WEBSITE MAINTENANCE",
      description: "Ongoing support, security updates, and performance optimization to keep your digital presence running smoothly."
    }
  ];
  
  const brandingServices = [
    {
      title: "BRAND STRATEGY",
      description: "Develop a cohesive brand identity that resonates with your target audience and differentiates you from competitors."
    },
    {
      title: "VISUAL IDENTITY",
      description: "Create compelling logos, color palettes, and design systems that communicate your brand's values and personality."
    },
    {
      title: "BRAND MESSAGING",
      description: "Craft a distinctive voice and messaging framework that connects with your audience across all touchpoints."
    },
    {
      title: "BRAND GUIDELINES",
      description: "Comprehensive documentation to ensure consistent application of your brand across all marketing materials."
    }
  ];
  
  const advertisingServices = [
    {
      title: "PPC MANAGEMENT",
      description: "Data-driven paid search campaigns that maximize ROI through strategic keyword targeting and continuous optimization."
    },
    {
      title: "DISPLAY ADVERTISING",
      description: "Visual ad campaigns that capture attention and drive engagement across relevant websites and platforms."
    },
    {
      title: "REMARKETING",
      description: "Targeted campaigns that re-engage visitors who have shown interest in your products or services."
    },
    {
      title: "ANALYTICS & REPORTING",
      description: "Comprehensive tracking and analysis to measure performance and inform data-backed optimization decisions."
    }
  ];

  // Animation variants for the first section
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const socialMediaServices = [
    {
      title: "CONTENT STRATEGY",
      description: "Develop engaging content calendars that resonate with your audience and drive meaningful engagement."
    },
    {
      title: "PAID SOCIAL CAMPAIGNS",
      description: "Strategic ad placement and optimization across social platforms to maximize ROI and reach."
    },
    {
      title: "COMMUNITY MANAGEMENT",
      description: "Build and nurture an active community around your brand with consistent and authentic interactions."
    },
    {
      title: "ANALYTICS & REPORTING",
      description: "Comprehensive performance tracking with actionable insights to continuously improve your social presence."
    }
  ];

  return (
    <main className="">
      {/* Direct implementation of first black component */}
      <section className="relative w-full bg-black">
        <div className="w-full  py-10 md:py-16 px-4 sm:px-6 md:px-12 lg:px-20 relative z-20 max-w-7xl mx-auto bg-black">
          {/* Main Title */}
          <motion.div
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-8 mt-40 md:mb-16 "
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-white font-peckham">
              SOCIAL MEDIA MARKETING
            </h2>
            
            <p className="mt-2 md:mt-4 text-lg md:text-xl text-white opacity-80">
              Build your brand presence across platforms
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6"
          >
            {socialMediaServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col"
              >
                {/* Placeholder for icon */}
                <div className="bg-gray-200 w-24 h-24 mb-6"></div>
                
                {/* Service Title */}
                <h3 className="text-xl mb-3 uppercase tracking-wide text-white">
                  {service.title}
                </h3>
                
                {/* Service Description */}
                <p className="text-white opacity-80 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Cream component second */}
      <MarketingServices
        mainTitle="SEARCH ENGINE OPTIMISATION"
        backgroundColor="bg-[#E0D9CD]" 
        textColor="text-black"
        topBorderImage="/pattern.png"
        bottomBorderImage="/pattern2.png"
        services={seoServices}
      />
      
      {/* Black component third - no borders */}
      <MarketingServices
        mainTitle="WEB DEVELOPMENT"
        subTitle="Custom digital experiences that convert"
        backgroundColor="bg-black" 
        textColor="text-white"
        services={webDevServices}
      />
      
      {/* Cream component fourth */}
      <MarketingServices
        mainTitle="BRAND STRATEGY"
        subTitle="Create an unforgettable brand identity"
        backgroundColor="bg-[#E0D9CD]" 
        textColor="text-black"
        topBorderImage="/pattern.png"
        bottomBorderImage="/pattern2.png"
        services={brandingServices}
      />
      
      {/* Black component fifth - no borders */}
      <MarketingServices
        mainTitle="DIGITAL ADVERTISING"
        subTitle="Targeted campaigns that drive results"
        backgroundColor="bg-black" 
        textColor="text-white"
        services={advertisingServices}
      />
    
    </main>
  );
}