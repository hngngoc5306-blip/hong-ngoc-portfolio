import React from 'react';

/**
 * Editorial Falling Pink Petals (Cánh hoa rơi chìm dưới text, trên nền giấy)
 * Designed for scrapbook spreads with organic floating physics
 */
export default function FallingPetals({ count = 3, className = '' }) {
  // Configured petal variants with subtle positions, sizes, delays and animations
  const petals = [
    {
      top: '12%',
      left: '18%',
      width: '18px',
      height: '11px',
      anim: 'petal-drift-a',
      delay: '0s',
      rot: '-15deg'
    },
    {
      top: '38%',
      left: '72%',
      width: '22px',
      height: '13px',
      anim: 'petal-drift-b',
      delay: '2.4s',
      rot: '25deg'
    },
    {
      top: '55%',
      left: '32%',
      width: '16px',
      height: '10px',
      anim: 'petal-drift-c',
      delay: '4.8s',
      rot: '-40deg'
    },
    {
      top: '75%',
      left: '84%',
      width: '20px',
      height: '12px',
      anim: 'petal-drift-a',
      delay: '6.2s',
      rot: '10deg'
    },
    {
      top: '25%',
      left: '48%',
      width: '15px',
      height: '9px',
      anim: 'petal-drift-b',
      delay: '1.2s',
      rot: '-25deg'
    }
  ].slice(0, count);

  return (
    <div 
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-1 ${className}`}
      aria-hidden="true"
    >
      {petals.map((p, idx) => (
        <div
          key={idx}
          className={`absolute ${p.anim}`}
          style={{
            top: p.top,
            left: p.left,
            animationDelay: p.delay,
          }}
        >
          {/* Organic Petal SVG: Soft Rose/Pink Gradient with delicate curve */}
          <svg
            width={p.width}
            height={p.height}
            viewBox="0 0 32 20"
            fill="none"
            style={{ transform: `rotate(${p.rot})` }}
            className="filter drop-shadow-[0_1px_2px_rgba(226,109,92,0.15)]"
          >
            <path
              d="M1 10 C4 2, 22 1, 31 10 C22 19, 4 18, 1 10 Z"
              fill="url(#petalGradient)"
              opacity="0.85"
            />
            {/* Subtle inner petal vein highlight */}
            <path
              d="M5 10 Q16 8 27 10"
              stroke="#FFF0F3"
              strokeWidth="0.8"
              strokeLinecap="round"
              opacity="0.6"
            />
            <defs>
              <linearGradient id="petalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFA6C9" />
                <stop offset="50%" stopColor="#F48FB1" />
                <stop offset="100%" stopColor="#E26D5C" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ))}
    </div>
  );
}
