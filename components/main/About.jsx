'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromTop } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/20/solid';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Clapperboard, Palette, PencilRuler, Smartphone } from 'lucide-react';

const ServiceCard = ({ title, icon, description, delay }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      variants={slideInFromLeft(delay)}
      initial="hidden"
      animate="visible"
      className="w-[280px] md:w-[280px] h-[300px] md:h-[350px] relative cursor-pointer mx-auto"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className={`w-full h-full transition-all duration-500 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full bg-[#0300145e] backdrop-blur-lg rounded-lg p-3 md:p-6 flex flex-col items-center justify-center gap-2 md:gap-4 border border-[#7042f88b] [backface-visibility:hidden]">
          <div className="text-2xl md:text-4xl">
            {icon === "🛠" ? <span className="text-white">{icon}</span> : icon}
          </div>
          <h3 className="text-lg md:text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {title}
          </h3>
          <p className="text-gray-300 text-center text-xs md:text-sm">
            {description}
          </p>
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full bg-[#0300145e] backdrop-blur-lg rounded-lg p-3 md:p-6 flex flex-col items-center justify-center gap-2 md:gap-4 border border-[#7042f88b] [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <p className="text-gray-300 text-center text-xs md:text-sm">
            Click to learn more about our {title.toLowerCase()} services.
          </p>
          <button className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-purple-500 text-white text-xs md:text-sm hover:bg-purple-600 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      // Reset currentIndex when switching between mobile and desktop
      setCurrentIndex(0);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const services = [
    {
      title: "Professional Video Editing",
      icon: <Clapperboard className="text-white h-6 w-6" />,
      description: "Transform your raw footage into stunning videos! From short reels to long-form content, we create dynamic and engaging visuals tailored to your brand.",
      delay: 0.2
    },
    {
      title: "Creative Graphic Design",
      icon: <Palette className="text-white h-6 w-6" />,
      description: "Custom designs to make your brand stand out. From logos to marketing banners, we deliver visually captivating graphics.",
      delay: 0.4
    },
    {
      title: "Social Media Content Creation",
      icon: <Smartphone className="text-white h-6 w-6" />,
      description: "We help you manage and create consistent, eye-catching social media content to boost your online presence.",
      delay: 0.6
    },
    {
      title: "Custom Design Solutions",
      icon: <PencilRuler className="text-white h-6 w-6" />,
      description: "Need something unique? We offer tailored design and video solutions to meet your specific business needs.",
      delay: 0.8
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      // For mobile (show 1 card)
      if (isMobile) {
        return prevIndex + 1 >= services.length ? 0 : prevIndex + 1;
      }
      // For desktop (show 2 cards)
      return prevIndex + 2 >= services.length ? 0 : prevIndex + 2;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      // For mobile (show 1 card)
      if (isMobile) {
        return prevIndex - 1 < 0 ? services.length - 1 : prevIndex - 1;
      }
      // For desktop (show 2 cards)
      return prevIndex - 2 < 0 ? services.length - 2 : prevIndex - 2;
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const getVisibleCards = () => {
    if (isMobile) {
      // Show 1 card on mobile
      return services.slice(currentIndex, currentIndex + 1);
    }
    // Show 2 cards on desktop
    return services.slice(currentIndex, currentIndex + 2);
  };

  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-hidden mb-[20px]" id="about" ref={sectionRef}>
      {/* Section-specific video overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-[2]">
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{
            opacity: 0.1,
            transform: 'rotate(180deg)',
            filter: 'blur(2.5px) brightness(1.2) contrast(1.1)',
            mixBlendMode: 'screen',
          }}
        >
          <source src="/Creativity1.mp4" type="video/mp4" />
        </video>
        
        {/* Gradient overlay for smooth transition */}
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: 'linear-gradient(transparent 0%, rgba(3, 0, 20, 0.8) 95%)',
            opacity: 0.8,
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-[4] flex flex-col items-center justify-center min-h-screen w-full px-4 md:px-20 pt-[60px] md:pt-[100px]">
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="Welcome-box py-[6px] md:py-[8px] px-[5px] md:px-[7px] border border-[#7042f88b] opacity-[0.9] mb-[15px] md:mb-[20px]"
        >
          <SparklesIcon className="text-[#9bfffa] mr-[8px] md:mr-[10px] h-4 w-4 md:h-5 md:w-5"/>
          <h1 className="Welcome-text text-[12px] md:text-[13px] flex items-center">
            <span>About Us</span>
          </h1>
        </motion.div>

        <div className="max-w-[800px] text-center px-2 md:px-0">
          <motion.div
            variants={slideInFromLeft(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-4 md:gap-6"
          >
            <h2 className="text-2xl md:text-4xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-yellow-500">
                About SKZ Creative
              </span>
            </h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-gray-200 text-sm md:text-lg"
            >
              At SKZ Creative, we specialize in crafting visually engaging content to help your brand stand out. From editing long and short videos to managing social media content, we create compelling visuals that capture attention. Our team also designs custom graphics and unique design solutions tailored to your specific needs, ensuring your brand identity stays fresh, modern, and impactful.
            </motion.p>
          </motion.div>
        </div>

        {/* Services Cards Carousel */}
        <div className="w-full mt-6 md:mt-8 relative max-w-[calc(100vw-20px)] md:max-w-[1000px] mx-auto">
          <div className="flex justify-center items-center relative">
            {/* Left Arrow */}
            <button 
              onClick={prevSlide}
              className="absolute left-1 md:left-0 z-10 bg-purple-500/20 hover:bg-purple-500/30 rounded-full p-1 md:p-1.5 transition-all duration-200"
              aria-label="Previous slides"
            >
              <ChevronLeftIcon className="h-4 w-4 md:h-6 md:w-6 text-white" />
            </button>

            {/* Cards Container */}
            <div className="flex justify-center w-full px-8 md:px-0">
              {getVisibleCards().map((service, index) => (
                <ServiceCard
                  key={currentIndex + index}
                  title={service.title}
                  icon={service.icon}
                  description={service.description}
                  delay={service.delay}
                />
              ))}
            </div>

            {/* Right Arrow */}
            <button 
              onClick={nextSlide}
              className="absolute right-1 md:right-0 z-10 bg-purple-500/20 hover:bg-purple-500/30 rounded-full p-1 md:p-1.5 transition-all duration-200"
              aria-label="Next slides"
            >
              <ChevronRightIcon className="h-4 w-4 md:h-6 md:w-6 text-white" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: isMobile 
              ? services.length 
              : Math.ceil(services.length / 2)
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(isMobile
                  ? index
                  : index * 2
                )}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  (isMobile ? currentIndex : Math.floor(currentIndex / 2)) === index
                    ? 'bg-purple-500 w-3' 
                    : 'bg-purple-500/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
