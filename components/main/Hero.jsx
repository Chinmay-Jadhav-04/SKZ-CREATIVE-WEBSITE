import React from 'react'
import HeroContent from '../sub/HeroContent'

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full overflow-hidden">
      {/* Remove the video section since it's now in layout.js */}
      <HeroContent />
    </div>
  );
};

export default Hero
