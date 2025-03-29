import React from "react";
import Link from "next/link";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  const footerLinks = {
    community: [
      { name: "Youtube", icon: <FaYoutube />, url: "https://youtube.com" },
      { name: "Github", icon: <RxGithubLogo />, url: "https://github.com" },
      { name: "Discord", icon: <RxDiscordLogo />, url: "https://discord.com" }
    ],
    socialMedia: [
      { name: "Instagram", icon: <RxInstagramLogo />, url: "https://instagram.com/skz.tech" },
      { name: "Twitter", icon: <RxTwitterLogo />, url: "https://twitter.com" },
      { name: "LinkedIn", icon: <RxLinkedinLogo />, url: "https://linkedin.com" }
    ],
    about: [
      { name: "Become Sponsor", url: "/sponsor" },
      { name: "Learning about me", url: "/about" },
      { name: "Contact", url: "mailto:admin@skztech.in" }
    ],
    services: [
      { name: "Web Development", url: "/services/web" },
      { name: "Mobile Apps", url: "/services/mobile" },
      { name: "UI/UX Design", url: "/services/design" },
      { name: "Consulting", url: "/services/consulting" }
    ]
  };

  const bottomLinks = {
    legal: [
      { name: "Privacy Policy", url: "/privacy-policy" },
      { name: "Terms of Service", url: "/terms-of-service" },
      { name: "Cookie Policy", url: "/cookie-policy" }
    ],
    social: [
      { name: "Instagram", icon: <RxInstagramLogo className="text-xl" />, url: "https://instagram.com/skz.tech" },
      { name: "YouTube", icon: <FaYoutube className="text-xl" />, url: "https://youtube.com" },
      { name: "LinkedIn", icon: <RxLinkedinLogo className="text-xl" />, url: "https://linkedin.com" },
      { name: "Twitter", icon: <RxTwitterLogo className="text-xl" />, url: "https://twitter.com" }
    ]
  };

  return (
    <div className="relative w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-[40]">
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row justify-between z-[41]">
        {/* Left Side */}
        <div className="md:w-1/3 mb-8 md:mb-0">
          <h1 className="text-3xl font-bold mb-4 gradient-text relative z-[42]">SKZ-CREATIVE</h1>
          <p className="text-gray-300 text-sm leading-relaxed relative z-[42]">
            Empowering businesses to build and shape their future with innovative development solutions.
          </p>
        </div>

        {/* Right Side - Links */}
        <div className="md:w-2/3">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-wrap md:justify-end md:gap-8">
            {/* First Row in Mobile */}
            <div className="grid grid-cols-2 gap-8 sm:gap-4 mb-8 md:mb-0 md:flex md:gap-8">
              {/* Community Section */}
              <div className="min-w-[150px] relative z-[42]">
                <h2 className="font-bold text-xl mb-4 text-white">Community</h2>
                {footerLinks.community.map((link, index) => (
                  <Link 
                    href={link.url} 
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 mb-3 hover:text-purple-500 transition-colors"
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </Link>
                ))}
              </div>

              {/* Social Media Section */}
              <div className="min-w-[150px] relative z-[42]">
                <h2 className="font-bold text-xl mb-4 text-white">Social Media</h2>
                {footerLinks.socialMedia.map((link, index) => (
                  <Link 
                    href={link.url} 
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 mb-3 hover:text-purple-500 transition-colors"
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Second Row in Mobile */}
            <div className="grid grid-cols-2 gap-8 sm:gap-4 md:flex md:gap-8">
              {/* Services Section */}
              <div className="min-w-[150px] relative z-[42]">
                <h2 className="font-bold text-xl mb-4 text-white">Services</h2>
                {footerLinks.services.map((link, index) => (
                  <Link 
                    href={link.url} 
                    key={index}
                    className="flex items-center gap-2 mb-3 hover:text-purple-500 transition-colors"
                  >
                    <span>{link.name}</span>
                  </Link>
                ))}
              </div>

              {/* About Section */}
              <div className="min-w-[150px] relative z-[42]">
                <h2 className="font-bold text-xl mb-4 text-white">About</h2>
                {footerLinks.about.map((link, index) => (
                  <Link 
                    href={link.url} 
                    key={index}
                    className="flex items-center gap-2 mb-3 hover:text-purple-500 transition-colors"
                  >
                    <span>{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-8 relative z-[42]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-sm text-gray-400 md:w-1/3 text-center md:text-left">
            &copy; SKZ-CREATIVE {new Date().getFullYear()} All rights reserved
          </div>

          {/* Legal Links */}
          <div className="flex gap-6 md:w-1/3 justify-center text-sm flex-wrap">
            {bottomLinks.legal.map((link, index) => (
              <Link 
                href={link.url} 
                key={index}
                className="text-gray-400 hover:text-purple-500 transition-colors whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 md:w-1/3 justify-center md:justify-end">
            {bottomLinks.social.map((link, index) => (
              <Link 
                href={link.url} 
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500 transition-colors"
                title={link.name}
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer
