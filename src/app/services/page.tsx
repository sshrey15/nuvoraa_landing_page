// Example usage in a page component
import MarketingServices from './components/screamSection';

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

  return (
    <main>
      {/* Black component first */}
      <MarketingServices
        mainTitle="SOCIAL MEDIA MARKETING"
        subTitle="Build your brand presence across platforms"
        backgroundColor="bg-black" 
        textColor="text-white"
        services={[
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
        ]}
      />
      
      {/* Cream component second */}
      <MarketingServices
        mainTitle="SEARCH ENGINE OPTIMISATION"
        backgroundColor="bg-[#E0D9CD]" 
        textColor="text-black"
        topBorderImage="/pattern.png"
        bottomBorderImage="/pattern2.png"
        services={seoServices}
      />
    </main>
  );
}