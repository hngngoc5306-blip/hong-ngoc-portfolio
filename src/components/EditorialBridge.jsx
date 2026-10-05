import React from 'react';

/**
 * EditorialBridge — Seamless visual continuity component between sections
 * Eliminates harsh black divider lines with layered deckle paper edges, 
 * crossing washi tape, stamps, botanical collages, and handwritten notes.
 */
export default function EditorialBridge({
  variant = 'torn-paper', // 'torn-paper' | 'sky-to-cream' | 'cream-to-sky' | 'stamp-tape' | 'botanical'
  fillTop = '#88BBD3',
  fillBottom = '#FAF6F0',
  tapeColor = 'cream',
  tapeAngle = '-3deg',
  handwriting = '',
  stampText = '',
  starColor = '#E26D5C',
  className = '',
}) {
  return (
    <div className={`relative w-full overflow-visible z-20 select-none pointer-events-none ${className}`} aria-hidden="true">
      {/* Torn Deckle Edge Transition */}
      <div className="w-full overflow-hidden leading-none -my-1">
        <svg 
          viewBox="0 0 1440 56" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-8 sm:h-12 lg:h-14 block"
        >
          {/* Top colored background wave */}
          <path 
            d="M0,0 L0,32 
               Q60,18 130,34 
               T260,26 
               Q330,42 410,22 
               T530,30 
               Q610,14 690,32 
               T820,24 
               Q900,40 980,18 
               T1110,28 
               Q1190,16 1270,36 
               T1440,24 
               L1440,0 Z" 
            fill={fillTop} 
          />
          {/* Bottom incoming paper contour with subtle organic edge shadow */}
          <path 
            d="M0,32 
               Q60,18 130,34 
               T260,26 
               Q330,42 410,22 
               T530,30 
               Q610,14 690,32 
               T820,24 
               Q900,40 980,18 
               T1110,28 
               Q1190,16 1270,36 
               T1440,24 
               L1440,56 L0,56 Z" 
            fill={fillBottom} 
          />
          {/* Delicate paper fiber line */}
          <path 
            d="M0,32 
               Q60,18 130,34 
               T260,26 
               Q330,42 410,22 
               T530,30 
               Q610,14 690,32 
               T820,24 
               Q900,40 980,18 
               T1110,28 
               Q1190,16 1270,36 
               T1440,24" 
            stroke="rgba(42, 24, 21, 0.15)" 
            strokeWidth="1.5" 
            strokeDasharray="4 2"
          />
        </svg>
      </div>

      {/* Crossing Washi Tape bridging the seam */}
      <div 
        className="absolute top-1/2 left-8 sm:left-24 lg:left-36 -translate-y-1/2 w-28 sm:w-36 h-7 sm:h-8 shadow-sm pointer-events-none"
        style={{ transform: `translateY(-50%) rotate(${tapeAngle})` }}
      >
        <div 
          className="w-full h-full bg-[#FAF0D8]/90 backdrop-blur-xs border-y border-amber-900/20"
          style={{
            clipPath: 'polygon(0% 4%, 4% 0%, 96% 3%, 100% 6%, 97% 95%, 94% 100%, 3% 96%, 0% 92%)',
            borderLeft: '2px dashed rgba(82, 47, 41, 0.3)',
            borderRight: '2px dashed rgba(82, 47, 41, 0.3)',
          }}
        />
      </div>

      {/* Optional Handwritten annotation across the bridge */}
      {handwriting && (
        <div className="absolute top-1/2 right-12 sm:right-28 lg:right-44 -translate-y-1/2 hidden md:block">
          <span className="font-editorial-script text-base sm:text-lg lg:text-xl text-earth-800 font-bold tracking-wide transform rotate-1 inline-block drop-shadow-xs">
            {handwriting}
          </span>
        </div>
      )}

      {/* Optional Vintage Stamp or Badge across boundary */}
      {stampText && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden sm:block">
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-earth-800 bg-[#FAF6F0] px-3 py-1 border border-earth-900/30 shadow-[2px_2px_0_rgba(42,24,21,0.15)] transform -rotate-1">
            {stampText}
          </span>
        </div>
      )}

      {/* Decorative Floating Doodle Star */}
      <div 
        className="absolute top-1/2 right-6 sm:right-12 -translate-y-1/2 hidden sm:block animate-micro-twinkle"
        style={{ color: starColor }}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.6 8.4L23.4 8.4L16.3 13.6L19 22L12 16.8L5 22L7.7 13.6L0.6 8.4L9.4 8.4L12 0Z"/>
        </svg>
      </div>
    </div>
  );
}
