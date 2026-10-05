import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function OpeningCover({ content, onScrollDown }) {
  const c = content.cover;
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Staggered entrance timer
    const timer = setTimeout(() => setMounted(true), 120);

    // Subtle scroll-based parallax
    const handleScroll = () => {
      if (window.scrollY <= window.innerHeight * 1.2) {
        setScrollY(window.scrollY);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      id="cover" 
      className="relative w-full h-screen min-h-[640px] flex items-center justify-center overflow-hidden bg-[#88BBD3] select-none"
    >
      {/* 
        Full Opening Spread based faithfully on PAGE 1 OF TEMPLATE.PDF
        Occupies full viewport while keeping authentic composition
      */}
      <div 
        className={`relative w-full h-full flex items-center justify-center transition-opacity duration-1000 ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transform: `translateY(${scrollY * 0.12}px)`,
        }}
      >
        
        {/* Master Visual Base Layer (Ultra HD Page 1 from Template.pdf) with entrance scale transition */}
        <div 
          className="relative w-full h-full max-w-[1920px] max-h-[1080px] aspect-[16/9] flex items-center justify-center transition-transform duration-1000 ease-out"
          style={{
            transform: mounted ? 'scale(1)' : 'scale(0.98)',
          }}
        >
          <img 
            src="/assets/cover_clean.webp" 
            alt="Creative Portfolio Cover" 
            className="w-full h-full object-cover object-center pointer-events-none drop-shadow-sm transition-transform duration-700 ease-out"
          />

          {/* 
            Subtle Floating Elements Overlay for Micro-Motion (Aligning with Template Page 1 Elements)
          */}
          {/* Paintbrush Micro-sway (Left edge) */}
          <div 
            data-reveal="photo"
            className="delay-150 absolute left-[3.5%] top-[38%] w-[10%] h-[38%] pointer-events-none z-15 hidden sm:block animate-cover-brush group"
            style={{ transformOrigin: 'bottom center' }}
          >
            <img 
              src="/assets/collage_elem_36.png" 
              alt="Paintbrush" 
              className="w-full h-full object-contain filter drop-shadow-xs transform -rotate-25 hover:rotate-[-22deg] transition-transform duration-500 pointer-events-auto"
            />
          </div>

          {/* Yellow Star Doodle Micro-spin (Top Center Star) */}
          <div 
            data-reveal="sticker"
            className="delay-100 absolute left-[44%] top-[30%] w-[9%] h-[15%] pointer-events-none z-15 hidden sm:block animate-micro-twinkle"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full fill-yellow-400/90 drop-shadow-xs">
              <path d="M50 0 L58 35 L95 20 L68 50 L95 80 L58 65 L50 100 L42 65 L5 80 L32 50 L5 20 L42 35 Z" />
            </svg>
          </div>

          {/* Yellow Star Doodle Micro-spin (Bottom Right Star) */}
          <div 
            data-reveal="sticker"
            className="delay-250 absolute left-[78%] top-[68%] w-[8%] h-[14%] pointer-events-none z-15 hidden sm:block animate-cover-star"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full fill-yellow-400/90 drop-shadow-xs">
              <path d="M50 0 L58 35 L95 20 L68 50 L95 80 L58 65 L50 100 L42 65 L5 80 L32 50 L5 20 L42 35 Z" />
            </svg>
          </div>

          {/* Tulips Bouquet Gentle Breeze (Bottom Left) */}
          <div 
            data-reveal="paper"
            className="delay-200 absolute left-[8.5%] top-[63%] w-[16%] h-[32%] pointer-events-none z-20 hidden sm:block animate-cover-tulip"
            style={{ transformOrigin: 'bottom center' }}
          >
            <img 
              src="/assets/collage_elem_42.png" 
              alt="Tulips bouquet" 
              className="w-full h-full object-contain filter drop-shadow-sm pointer-events-auto hover:scale-102 transition-transform duration-500"
            />
          </div>

          {/* Green Leopard Pattern Star (Top Left) */}
          <div 
            data-reveal="sticker"
            className="delay-75 absolute left-[6.8%] top-[6.5%] w-[17%] h-[27%] pointer-events-none z-10 hidden sm:block animate-micro-float-a"
          >
            <img 
              src="/assets/collage_elem_30.png" 
              alt="Green patterned star" 
              className="w-full h-full object-contain filter drop-shadow-xs"
            />
          </div>

          {/* 
            Exact Overlaid Identity: Nguyen Nhu Hong Ngoc 
            Positioned precisely inside the pink hand-drawn oval on the notebook paper:
            - Center x: 740 / 2880 = 25.694% ~ 25.7% from left
            - Center y: 590 / 1620 = 36.42% from top
            - Tilt angle: -14.2 degrees (matching patch_cover3.cjs and original Template.pdf)
            - Nested micro-motion container to preserve exact center positioning
          */}
          <div 
            data-reveal="heading"
            className="delay-200 absolute z-25 pointer-events-auto cursor-default flex items-center justify-center"
            style={{
              left: '25.7%',
              top: '36.42%',
              width: '17%',
              height: '6.6%',
              transform: `translate(-50%, -50%) rotate(-14.2deg) translateY(${scrollY * -0.04}px)`,
            }}
            title={c.name}
          >
            <div className="w-full h-full flex items-center justify-center animate-micro-paper">
              <span 
                className="font-editorial-script font-bold tracking-normal text-center leading-none transition-all duration-500 hover:scale-105"
                style={{
                  fontSize: 'clamp(0.85rem, 1.55vw, 1.75rem)',
                  textShadow: '0 1px 2px rgba(255,255,255,0.7)',
                  color: '#1A1816',
                  fontFamily: "'Patrick Hand', 'Caveat', cursive",
                  lineHeight: 1.05,
                  whiteSpace: 'nowrap',
                }}
              >
                {c.name}
              </span>
            </div>
          </div>

          {/* 
            Subtle editorial scroll indicator at bottom 
            Designed to guide user down into Overview without obstructing Cover artwork
          */}
          <div 
            data-reveal="text"
            className="delay-300 absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center transition-opacity duration-500"
            style={{
              opacity: Math.max(0, 1 - scrollY / 150),
            }}
          >
            <button
              onClick={onScrollDown}
              className="group flex flex-col items-center gap-1 text-earth-900/80 hover:text-earth-950 transition-colors focus:outline-none"
              aria-label="Scroll to Overview"
            >
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest bg-paper-50/90 backdrop-blur-xs px-3.5 py-1 rounded-full shadow-xs group-hover:bg-paper-50 transition-all border border-earth-700/20">
                {c.scrollPrompt}
              </span>
              <ChevronDown 
                size={18} 
                className="text-earth-900 group-hover:translate-y-1 transition-transform duration-300 animate-bounce" 
              />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
