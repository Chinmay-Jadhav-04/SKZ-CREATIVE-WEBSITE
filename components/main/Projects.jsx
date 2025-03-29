"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="min-w-[300px] w-80 bg-[#0300145e] backdrop-blur-md rounded-lg overflow-hidden mx-4 flex flex-col border border-blue-500/20 shadow-md hover:shadow-xl transition-shadow"
    >
      <div className="h-48 bg-gray-200 relative">
        {project.imageUrl && (
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <span className="text-blue-500 text-sm font-medium">{project.category}</span>
          <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
          <p className="text-white/70 text-sm">{project.description}</p>
        </div>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-white/70 hover:text-blue-400 transition-colors"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-white/70 hover:text-blue-400 transition-colors"
              >
                <Github size={16} />
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const [isDragging, setIsDragging] = useState(false);

  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "YouTube Video Editing",
      description: "Full-length YouTube videos featuring engaging transitions, text overlays, and professional color grading. Includes before-and-after comparisons showcasing raw footage versus final edited product.",
      imageUrl: "/video-editing.jpg", // Add appropriate image
      technologies: ["Premiere Pro", "After Effects", "Color Grading", "Motion Graphics"],
      liveUrl: "https://example.com/youtube-edit",
      githubUrl: null
    },
    {
      id: 2,
      title: "Social Media Reels",
      description: "Fast-paced, engaging reels for Instagram and TikTok, perfect for fashion brands, fitness influencers, and travel vloggers. Featuring trending music and effects.",
      imageUrl: "/reels.jpg", // Add appropriate image
      technologies: ["Final Cut Pro", "Instagram", "TikTok", "Sound Design"],
      liveUrl: "https://example.com/reels",
      githubUrl: null
    },
    {
      id: 3,
      title: "Logo & Brand Identity",
      description: "Professional logo and brand identity designs including color palettes, logo mockups, and complete stationery designs (business cards, letterheads).",
      imageUrl: "/brand-identity.jpg", // Add appropriate image
      technologies: ["Illustrator", "Photoshop", "Brand Design", "Typography"],
      liveUrl: "https://example.com/brand-identity",
      githubUrl: null
    },
    {
      id: 4,
      title: "Social Media Content",
      description: "Engaging social media content including carousel posts, stories, and infographics for Instagram and LinkedIn, with consistent brand messaging.",
      imageUrl: "/social-content.jpg", // Add appropriate image
      technologies: ["Canva", "Photoshop", "Social Media", "Content Strategy"],
      liveUrl: "https://example.com/social-content",
      
    },
    {
      id: 5,
      title: "Event Coverage",
      description: "Professional event highlight videos featuring weddings, concerts, and corporate events. Including drone shots, crowd footage, and cinematic effects.",
      imageUrl: "/event-coverage.jpg", // Add appropriate image
      technologies: ["DaVinci Resolve", "Drone Photography", "Live Events", "Audio Mixing"],
      liveUrl: "https://example.com/events",
      
    },
    {
      id: 6,
      title: "UI/UX Design",
      description: "Sleek website and mobile app mockups for e-commerce stores and service-based businesses, focusing on user experience and modern design principles.",
      imageUrl: "/ui-design.jpg", // Add appropriate image
      technologies: ["Figma", "Adobe XD", "Prototyping", "Web Design"],
      liveUrl: "https://example.com/ui-design",
      
    },
    {
      id: 7,
      title: "Content Strategy",
      description: "Comprehensive 30-day social media content plans including post ideas, captions, hashtags, and posting schedules with analytics reporting.",
      imageUrl: "/content-strategy.jpg", // Add appropriate image
      technologies: ["Analytics", "Content Planning", "Social Strategy", "Marketing"],
      liveUrl: "https://example.com/strategy",
      
    },
    {
      id: 8,
      title: "Custom Illustrations",
      description: "Bespoke digital illustrations, mascots, and artwork created according to client specifications and brand guidelines.",
      imageUrl: "/illustrations.jpg", // Add appropriate image
      technologies: ["Procreate", "Illustrator", "Digital Art", "Character Design"],
      liveUrl: "https://example.com/illustrations",
      
    }
  ];

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }

    const handleResize = () => {
      if (carousel.current) {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [projects]);

  // Duplicate projects for infinite scrolling effect
  const duplicatedProjects = [...projects, ...projects, ...projects];

  const scrollLeft = () => {
    if (carousel.current) {
      carousel.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carousel.current) {
      carousel.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <div id="projects" className="relative py-16 px-4 z-[2]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Our Projects</h2>
        
        <div className="absolute left-0 top-1/2 z-10">
          <button 
            onClick={scrollLeft}
            className="p-2 bg-blue-600/20 rounded-full shadow-md hover:bg-blue-600/30 transition-colors"
            aria-label="Scroll left"
          >
            <ArrowLeft size={24} className="text-white" />
          </button>
        </div>
        
        <div className="absolute right-0 top-1/2 z-10">
          <button 
            onClick={scrollRight}
            className="p-2 bg-blue-600/20 rounded-full shadow-md hover:bg-blue-600/30 transition-colors"
            aria-label="Scroll right"
          >
            <ArrowRight size={24} className="text-white" />
          </button>
        </div>
        
        <motion.div 
          ref={carousel} 
          className="overflow-hidden cursor-grab"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div 
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex"
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            onMouseUp={() => setIsDragging(false)}
          >
            {duplicatedProjects.map((project, index) => (
              <ProjectCard key={`${project.id}-${index}`} project={project} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
