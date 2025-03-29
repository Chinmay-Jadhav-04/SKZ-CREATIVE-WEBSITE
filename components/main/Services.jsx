'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const servicesData = [
  {
    id: 1,
    title: "Video Editing Services 🎬",
    services: [
      {
        name: "Short & Long-form Video Editing",
        description: "Edit YouTube videos, Instagram reels, TikTok content, or corporate videos."
      },
      {
        name: "Promotional Videos",
        description: "Create high-quality promotional content for businesses or events."
      },
      {
        name: "Motion Graphics",
        description: "Add animated elements, like text overlays, transitions, or logo animations."
      },
      {
        name: "Color Grading",
        description: "Enhance video quality with professional color correction and grading."
      },
      {
        name: "Audio Editing",
        description: "Clean up audio, sync soundtracks, or add sound effects."
      }
    ]
  },
  {
    id: 2,
    title: "Graphic Design Services 🎨",
    services: [
      {
        name: "Logo & Branding Design",
        description: "Craft unique logos, color palettes, and visual brand identities."
      },
      {
        name: "Social Media Post Design",
        description: "Design Instagram posts, Facebook banners, and Pinterest graphics."
      },
      {
        name: "Custom Posters & Flyers",
        description: "Create eye-catching event posters, digital flyers, and advertisements."
      },
      {
        name: "UI/UX Design",
        description: "Design user-friendly and visually appealing interfaces for websites or apps."
      },
      {
        name: "Packaging Design",
        description: "Offer product packaging design that enhances a brand's appeal."
      }
    ]
  },
  {
    id: 3,
    title: "Social Media Services 📲",
    services: [
      {
        name: "Social Media Content Creation",
        description: "Plan and create engaging posts, stories, and reels."
      },
      {
        name: "Content Calendar Management",
        description: "Schedule and manage posts to ensure consistent online presence."
      },
      {
        name: "Growth Strategies",
        description: "Help clients grow their followers through targeted strategies and analytics."
      },
      {
        name: "Hashtag Research & SEO Optimization",
        description: "Research trending hashtags and optimize content for better visibility."
      }
    ]
  },
  {
    id: 4,
    title: "Custom Design & Video Solutions 🛠",
    services: [
      {
        name: "Brand Introduction Videos",
        description: "Create compelling videos that introduce and showcase your brand."
      },
      {
        name: "Infographics & Data Visualizations",
        description: "Transform complex data into visually appealing and easy-to-understand graphics."
      },
      {
        name: "Corporate Presentations & Pitch Decks",
        description: "Design professional presentations for business meetings and investor pitches."
      },
      {
        name: "Event Coverage Video Editing",
        description: "Capture and edit footage from events to create memorable highlight reels."
      },
      {
        name: "Customized Illustrations",
        description: "Create unique illustrations tailored to your brand and message."
      }
    ]
  },
  {
    id: 5,
    title: "Additional Add-Ons ✨",
    services: [
      {
        name: "Revisions Policy",
        description: "Enjoy a specific number of free revisions with every project."
      },
      {
        name: "Express Delivery",
        description: "Get your project completed faster with our priority service option."
      },
      {
        name: "Bundled Packages",
        description: "Save with our combined service packages like video editing + social media management."
      }
    ]
  }
];

export const Services = () => {
  const [activeService, setActiveService] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const timelineRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    });
  }, [activeService, controls]);

  const handleScroll = (e) => {
    if (timelineRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = timelineRef.current;
      const scrollPercentage = scrollLeft / (scrollWidth - clientWidth);
      
      // Determine which service should be active based on scroll position
      const serviceIndex = Math.min(
        Math.floor(scrollPercentage * servicesData.length) + 1,
        servicesData.length
      );
      
      if (serviceIndex !== activeService) {
        setActiveService(serviceIndex);
      }
    }
  };

  const scrollToService = (id) => {
    if (timelineRef.current) {
      const scrollWidth = timelineRef.current.scrollWidth - timelineRef.current.clientWidth;
      const scrollPosition = ((id - 1) / (servicesData.length - 1)) * scrollWidth;
      
      timelineRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      
      setActiveService(id);
    }
  };

  return (
    <section id="services" className="relative py-16 px-4 z-[2]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Our Services</h2>
        
        {/* Timeline Navigation */}
        <div 
          ref={timelineRef}
          className="relative mb-16 overflow-x-auto pb-4 hide-scrollbar"
          onScroll={handleScroll}
        >
          <div className="flex space-x-8 min-w-max px-4">
            {servicesData.map((service) => (
              <div key={service.id} className="relative flex flex-col items-center min-w-max">
                <button
                  onClick={() => scrollToService(service.id)}
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl z-20 transition-all duration-300 ${
                    activeService === service.id
                      ? 'bg-blue-600 text-white shadow-lg scale-110'
                      : 'bg-[#0300145e] text-white border-2 border-blue-600'
                  }`}
                >
                  {service.id}
                </button>
                <p className={`mt-4 font-medium transition-all duration-300 whitespace-nowrap ${
                  activeService === service.id ? 'text-blue-500 scale-105' : 'text-white/70'
                }`}>
                  {service.title.split(' ')[0]}
                </p>
              </div>
            ))}
            
            {/* Timeline Line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-white/20 -z-0">
              <div 
                className="absolute top-0 left-0 h-full bg-blue-600 transition-all duration-500"
                style={{ 
                  width: `${(activeService / servicesData.length) * 100}%` 
                }}
              />
            </div>
          </div>
        </div>

        {/* Service Content */}
        {servicesData.map((service) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={activeService === service.id ? controls : { opacity: 0, y: 20 }}
            className={`${activeService === service.id ? 'block' : 'hidden'}`}
          >
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-8 text-blue-500">{service.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.services.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { delay: index * 0.1, duration: 0.4 } 
                    }}
                    className="bg-[#0300145e] backdrop-blur-md p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-blue-500/20"
                  >
                    <h4 className="text-xl font-semibold mb-2 text-white">{item.name}</h4>
                    <p className="text-white/70">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Mobile Navigation (Show only on Mobile) */}
        {isMobile && (
          <div className="mt-10 flex justify-center">
            <div className="flex space-x-2">
              {servicesData.map((service) => (
                <button
                  key={service.id}
                  onClick={() => scrollToService(service.id)}
                  className={`w-3 h-3 rounded-full ${
                    activeService === service.id ? 'bg-blue-600' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* CSS for hiding scrollbar */}
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Services;
