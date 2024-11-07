import React from 'react';
import { Heart } from 'lucide-react';

interface LandingPageProps {
  onTransitionComplete: () => void;
}

export default function LandingPage({ onTransitionComplete }: LandingPageProps) {
  const handleClick = () => {
    const element = document.querySelector('.landing-text');
    if (element) {
      element.classList.add('melt');
      setTimeout(onTransitionComplete, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-red-100 to-pink-200 flex items-center justify-center">
      <button
        onClick={handleClick}
        className="landing-text group relative text-5xl md:text-7xl font-serif text-red-600 hover:text-red-700 transition-colors duration-300"
      >
        <span className="relative z-10">Happy Birthday My Love</span>
        <Heart className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-red-500" />
      </button>
    </div>
  );
}