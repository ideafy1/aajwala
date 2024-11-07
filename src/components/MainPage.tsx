import React, { useEffect, useState, useRef } from 'react';
import { Heart } from 'lucide-react';

const message = `Hello! This is kuchi puchi from the macro world having macro issues. I have never imagined having so real, so rare, so cute, so handsome, so sexy, so everything person in my life. Talking to you after so long on 12th July, I never imagined being this close to you. Thank you for making me strong, Thank you for making me laugh, Thank you for making me realize who I am, Thank you for being an important part of my life, Thank you for everything you have done for me. Happy birthday! I LOVE YOU❤️`;

export default function MainPage() {
  const [displayedText, setDisplayedText] = useState('');
  const [showHearts, setShowHearts] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < message.length) {
        setDisplayedText(prev => prev + message[index]);
        index++;
      } else {
        clearInterval(timer);
        setShowHearts(true);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const audio = new Audio('https://dl.sndup.net/33q9w/Audio.mp3');
    audioRef.current = audio;
    audio.loop = true;

    const handleClick = () => {
      if (!isPlaying) {
        audio.play()
          .then(() => setIsPlaying(true))
          .catch(error => console.log('Audio playback failed:', error));
      }
    };

    document.addEventListener('click', handleClick, { once: true });

    return () => {
      document.removeEventListener('click', handleClick);
      audio.pause();
      audio.src = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-red-50 to-pink-100 p-6 relative overflow-hidden">
      <div className="max-w-3xl mx-auto mt-12 relative">
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-serif relative">
            {displayedText}
            <span className="animate-pulse inline-block ml-1">❤️</span>
          </p>
        </div>
      </div>

      {showHearts && (
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-pink-500 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                opacity: 0.6,
                transform: `scale(${0.5 + Math.random() * 0.5})`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}