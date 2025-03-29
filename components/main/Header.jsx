
"use client";

import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full h-[80px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50">
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-full flex items-center justify-between px-10">
          {/* Logo Text */}
          <button 
            onClick={scrollToTop}
            className="cursor-pointer"
          >
            <span className="text-2xl font-bold text-transparent bg-clip-text animate-gradient-text bg-gradient-to-r from-blue-500 via-purple-500 to-yellow-500">
              SKZ-CREATIVE
            </span>
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="nav-link" onClick={handleNavClick}>About</a>
            <a href="#services" className="nav-link" onClick={handleNavClick}>Services</a>
            <a href="#projects" className="nav-link" onClick={handleNavClick}>Projects</a>
            <a href="#contact" className="nav-link" onClick={handleNavClick}>Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="w-6 h-6"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d={isMenuOpen 
                  ? "M6 18L18 6M6 6l12 12" // X icon when menu is open
                  : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" // Hamburger icon when menu is closed
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden w-full bg-[#03001417] backdrop-blur-md">
            <div className="flex flex-col items-center gap-4 py-4">
              <a 
                href="#about" 
                className="nav-link w-full text-center py-2"
                onClick={handleNavClick}
              >
                About
              </a>
              <a 
                href="#services" 
                className="nav-link w-full text-center py-2"
                onClick={handleNavClick}
              >
                Services
              </a>
              <a 
                href="#projects" 
                className="nav-link w-full text-center py-2"
                onClick={handleNavClick}
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="nav-link w-full text-center py-2"
                onClick={handleNavClick}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
