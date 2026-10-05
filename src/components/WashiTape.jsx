import React from 'react';

/**
 * Tactical Washi Tape component
 * Pins cards, polaroids, and notes to the editorial page
 */
export default function WashiTape({ 
  className = '', 
  angle = '-2deg',
  color = 'cream', // 'cream' | 'blue' | 'rosewood' | 'gold'
  width = 'w-24 sm:w-32',
  height = 'h-6 sm:h-7'
}) {
  const colorMap = {
    cream: 'bg-[#FDFBF7]/85 border-earth-300/60 text-earth-800',
    blue: 'bg-[#D2E4EC]/85 border-[#5A8B9C]/50 text-earth-900',
    rosewood: 'bg-[#F7E6E8]/85 border-rosewood-300/60 text-rosewood-800',
    gold: 'bg-[#FAF0D8]/85 border-[#C9933B]/50 text-earth-900',
  };

  return (
    <div 
      className={`living-stationery-tape absolute z-20 pointer-events-none select-none ${width} ${height} ${className}`}
      style={{ 
        transform: `rotate(${angle})`,
        '--tape-rot': angle,
      }}
      aria-hidden="true"
    >
      <div 
        className={`w-full h-full ${colorMap[color] || colorMap.cream} shadow-xs backdrop-blur-xs`}
        style={{
          clipPath: 'polygon(0% 4%, 3% 0%, 97% 2%, 100% 6%, 98% 95%, 95% 100%, 4% 97%, 0% 93%)',
          borderLeft: '2px dashed rgba(82, 47, 41, 0.25)',
          borderRight: '2px dashed rgba(82, 47, 41, 0.25)',
        }}
      />
    </div>
  );
}
