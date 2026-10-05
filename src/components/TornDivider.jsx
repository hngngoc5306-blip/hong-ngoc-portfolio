import React from 'react';

/**
 * Reusable Torn Paper Deckle Edge Divider
 * Creates an organic, physical torn paper edge between editorial sections
 */
export default function TornDivider({ 
  fill = '#FAF6F0', 
  flip = false,
  className = '' 
}) {
  return (
    <div 
      className={`w-full overflow-hidden leading-none select-none pointer-events-none ${className} ${
        flip ? 'transform rotate-180 -mb-1' : '-mt-1'
      }`}
      aria-hidden="true"
    >
      <svg 
        viewBox="0 0 1440 48" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-8 sm:h-12 block"
      >
        <path 
          d="M0,0 
             L0,24 
             Q40,32 90,20 
             T180,28 
             Q220,16 270,30 
             T360,22 
             Q410,34 460,18 
             T550,26 
             Q600,14 650,28 
             T740,20 
             Q790,32 840,16 
             T930,26 
             Q980,14 1030,28 
             T1120,20 
             Q1170,34 1220,18 
             T1310,26 
             Q1370,14 1440,24 
             L1440,0 
             Z" 
          fill={fill} 
        />
        {/* Subtle shadow line along torn paper teeth */}
        <path 
          d="M0,24 
             Q40,32 90,20 
             T180,28 
             Q220,16 270,30 
             T360,22 
             Q410,34 460,18 
             T550,26 
             Q600,14 650,28 
             T740,20 
             Q790,32 840,16 
             T930,26 
             Q980,14 1030,28 
             T1120,20 
             Q1170,34 1220,18 
             T1310,26 
             Q1370,14 1440,24" 
          stroke="rgba(61, 34, 29, 0.08)" 
          strokeWidth="1.5" 
          fill="none" 
        />
      </svg>
    </div>
  );
}
