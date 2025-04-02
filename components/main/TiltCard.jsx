"use client";

import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ExternalLink } from "lucide-react";

// TiltCard Component
const TiltCard = ({ service }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const ROTATION_RANGE = 32.5;
  const HALF_ROTATION_RANGE = 32.5 / 2;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300 mx-4 mb-8"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 rounded-xl bg-[#0300145e] backdrop-blur-md shadow-lg overflow-hidden border border-blue-500/20"
      >
        <div className="h-36 bg-gray-800 relative">
          {service.imageUrl && (
            <img
              src={service.imageUrl}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <div 
          style={{
            transform: "translateZ(50px)",
          }}
          className="p-4 flex flex-col h-56"
        >
          <h3 
            style={{
              transform: "translateZ(10px)",
            }}
            className="text-xl font-semibold mb-2 text-white"
          >
            {service.title}
          </h3>
          
          <p 
            style={{
              transform: "translateZ(5px)",
            }}
            className="text-white/70 text-sm mb-3 flex-grow overflow-hidden"
          >
            {service.description}
          </p>

          <div className="mt-auto">
            <div 
              style={{
                transform: "translateZ(15px)",
              }}
              className="flex flex-wrap gap-2 mb-3"
            >
              {service.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            {service.liveUrl && (
              <a
                href={service.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  transform: "translateZ(25px)",
                }}
                className="flex items-center gap-1 text-sm text-white/70 hover:text-blue-400 transition-colors"
              >
                <ExternalLink size={16} />
                Learn More
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Main Component
const ServiceTiltCards = () => {
  // Selected services from your projects data
  const services = [
    {
      id: 1,
      title: "YouTube Video Editing",
      description: "Full-length YouTube videos featuring engaging transitions, text overlays, and professional color grading. Includes before-and-after comparisons showcasing raw footage versus final edited product.",
      imageUrl: "/video-editing.jpg",
      technologies: ["Premiere Pro", "After Effects", "Color Grading", "Motion Graphics"],
      liveUrl: "https://example.com/youtube-edit"
    },
    {
      id: 2,
      title: "Social Media Reels",
      description: "Fast-paced, engaging reels for Instagram and TikTok, perfect for fashion brands, fitness influencers, and travel vloggers. Featuring trending music and effects.",
      imageUrl: "/reels.jpg",
      technologies: ["Final Cut Pro", "Instagram", "TikTok", "Sound Design"],
      liveUrl: "https://example.com/reels"
    },
    {
      id: 3,
      title: "Event Coverage",
      description: "Professional event highlight videos featuring weddings, concerts, and corporate events. Including drone shots, crowd footage, and cinematic effects.",
      imageUrl: "/event-coverage.jpg",
      technologies: ["DaVinci Resolve", "Drone Photography", "Live Events", "Audio Mixing"],
      liveUrl: "https://example.com/events"
    },
    {
      id: 4,
      title: "Content Strategy",
      description: "Comprehensive 30-day social media content plans including post ideas, captions, hashtags, and posting schedules with analytics reporting.",
      imageUrl: "/content-strategy.jpg",
      technologies: ["Analytics", "Content Planning", "Social Strategy", "Marketing"],
      liveUrl: "https://example.com/strategy"
    },
    {
      id: 5,
      title: "Graphics Designing",
      description: "Professional logo and brand identity designs including color palettes, logo mockups, and complete stationery designs (business cards, letterheads).",
      imageUrl: "/brand-identity.jpg",
      technologies: ["Illustrator", "Photoshop", "Brand Design", "Typography"],
      liveUrl: "https://example.com/brand-identity"
    }
  ];

  return (
    <div className="grid w-full place-content-center px-4 py-12 text-slate-900">
      <div className="w-full mb-12 text-center">
        <h2 className="text-4xl font-bold text-white">Our Projects</h2>
        <p className="text-white/70 mt-2">Hover over each card to explore our offerings</p>
      </div>
      
      <div className="flex flex-wrap justify-center">
        {services.map((service) => (
          <TiltCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceTiltCards;
