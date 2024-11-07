import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

function App() {
  const [showMain, setShowMain] = useState(false);
  const [text, setText] = useState('');
  const [showHearts, setShowHearts] = useState(false);
  const message = `Hello! This is kuchi puchi from the macro world having macro issues. I have never imagined having so real, so rare, so cute, so handsome, so sexy, so everything person in my life. Talking to you after so long on 12th July, I never imagined being this close to you. Thank you for making me strong, Thank you for making me laugh, Thank you for making me realize who I am, Thank you for being an important part of my life, Thank you for everything you have done for me. Happy birthday! I LOVE YOU❤️`;

  useEffect(() => {
    if (showMain) {
      let i = 0;
      const audio = new Audio('https://dl.sndup.net/33q9w/Audio.mp3');
      audio.play();

      const typing = setInterval(() => {
        setText(message.slice(0, i));
        i++;
        if (i > message.length) {
          clearInterval(typing);
          setShowHearts(true);
        }
      }, 50);

      return () => {
        clearInterval(typing);
        audio.pause();
      };
    }
  }, [showMain]);

  const handleClick = () => {
    setShowMain(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-red-100 flex items-center justify-center relative overflow-hidden">
      {!showMain ? (
        <button
          onClick={handleClick}
          className="text-5xl font-serif text-pink-600 hover:text-pink-700 transition-all duration-500 hover:scale-110"
        >
          Happy Birthday My Love
        </button>
      ) : (
        <div className="max-w-2xl p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-xl relative">
          <div className="relative">
            {text}
            <span className="animate-pulse inline-block ml-1">❤️</span>
          </div>
          {showHearts && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <Heart
                  key={i}
                  className="absolute text-pink-500 animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    opacity: 0.6,
                  }}
                  size={24}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;