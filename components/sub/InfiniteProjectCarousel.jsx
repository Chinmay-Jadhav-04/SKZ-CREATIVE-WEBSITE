"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

const ProjectCard = ({ project }) => {
  return (
    <div className="min-w-[300px] w-80 bg-white rounded-lg shadow-md overflow-hidden mx-4 flex flex-col">
      <div className="h-48 bg-gray-200 relative">
        {project.imageUrl && (
          <Image 
            src={project.imageUrl} 
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        )}
      </div>
      <div className="p-4 flex-grow">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="p-4 flex justify-between items-center border-t border-gray-200">
        {project.liveUrl && (
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            <ExternalLink size={16} className="mr-1" />
            <span>Live Demo</span>
          </a>
        )}
        {project.githubUrl && (
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center text-gray-700 hover:text-gray-900"
          >
            <Github size={16} className="mr-1" />
            <span>Source Code</span>
          </a>
        )}
      </div>
    </div>
  );
};

const InfiniteProjectCarousel = ({ projects }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const [isDragging, setIsDragging] = useState(false);

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
    <div className="relative py-8 px-2 w-full">
      <h2 className="text-2xl font-bold mb-8 text-center">My Projects</h2>
      
      <div className="absolute left-0 top-1/2 z-10">
        <button 
          onClick={scrollLeft}
          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
          aria-label="Scroll left"
        >
          <ArrowLeft size={24} />
        </button>
      </div>
      
      <div className="absolute right-0 top-1/2 z-10">
        <button 
          onClick={scrollRight}
          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
          aria-label="Scroll right"
        >
          <ArrowRight size={24} />
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
  );
};

export default InfiniteProjectCarousel;
