import React from 'react';

/**
 * Editorial Falling Pink Petals & Fresh Green Leaves (Cánh hoa hồng + Lá xanh rơi rải rác chìm dưới text)
 * Designed for scrapbook spreads with organic floating physics
 */
export default function FallingPetals({ count = 8, className = '' }) {
  // Rich list of petals and vibrant green leaves
  const items = [
    // 1. Pink Petal (Top-left)
    {
      type: 'petal',
      top: '8%',
      left: '12%',
      width: 22,
      height: 14,
      anim: 'petal-drift-a',
      delay: '0s',
      rot: '-15deg'
    },
    // 2. Fresh Green Leaf (Top-right)
    {
      type: 'leaf',
      top: '15%',
      left: '75%',
      width: 20,
      height: 12,
      anim: 'leaf-drift',
      delay: '1.2s',
      rot: '35deg'
    },
    // 3. Pink Petal (Upper-center)
    {
      type: 'petal',
      top: '28%',
      left: '42%',
      width: 26,
      height: 16,
      anim: 'petal-drift-b',
      delay: '2.5s',
      rot: '20deg'
    },
    // 4. Fresh Green Leaf (Mid-left)
    {
      type: 'leaf',
      top: '40%',
      left: '20%',
      width: 24,
      height: 13,
      anim: 'leaf-drift',
      delay: '4.0s',
      rot: '-25deg'
    },
    // 5. Pink Petal (Mid-right)
    {
      type: 'petal',
      top: '52%',
      left: '82%',
      width: 24,
      height: 15,
      anim: 'petal-drift-c',
      delay: '1.8s',
      rot: '-35deg'
    },
    // 6. Pink Petal (Lower-left)
    {
      type: 'petal',
      top: '65%',
      left: '28%',
      width: 20,
      height: 13,
      anim: 'petal-drift-a',
      delay: '5.2s',
      rot: '15deg'
    },
    // 7. Fresh Green Leaf (Lower-center)
    {
      type: 'leaf',
      top: '72%',
      left: '58%',
      width: 22,
      height: 12,
      anim: 'leaf-drift',
      delay: '3.1s',
      rot: '40deg'
    },
    // 8. Pink Petal (Lower-right)
    {
      type: 'petal',
      top: '82%',
      left: '88%',
      width: 28,
      height: 17,
      anim: 'petal-drift-b',
      delay: '6.5s',
      rot: '-20deg'
    },
    // 9. Extra Small Petal
    {
      type: 'petal',
      top: '35%',
      left: '64%',
      width: 18,
      height: 11,
      anim: 'petal-drift-c',
      delay: '3.8s',
      rot: '45deg'
    },
    // 10. Extra Fresh Leaf
    {
      type: 'leaf',
      top: '88%',
      left: '15%',
      width: 21,
      height: 11,
      anim: 'leaf-drift',
      delay: '5.8s',
      rot: '-10deg'
    }
  ].slice(0, count);

  return (
    <div 
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-1 ${className}`}
      aria-hidden="true"
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className={`absolute ${item.anim}`}
          style={{
            top: item.top,
            left: item.left,
            animationDelay: item.delay,
          }}
        >
          {item.type === 'petal' ? (
            /* Organic Rose Petal SVG: Vibrant Rose/Pink Gradient with Inner Vein */
            <svg
              width={item.width}
              height={item.height}
              viewBox="0 0 32 20"
              fill="none"
              style={{ transform: `rotate(${item.rot})` }}
              className="filter drop-shadow-[0_1.5px_3px_rgba(226,109,92,0.28)]"
            >
              <path
                d="M1 10 C4 1, 23 1, 31 10 C23 19, 4 19, 1 10 Z"
                fill="url(#vibrantPetalGradient)"
                opacity="0.95"
              />
              <path
                d="M4 10 Q16 7 28 10"
                stroke="#FFF5F7"
                strokeWidth="1"
                strokeLinecap="round"
                opacity="0.75"
              />
              <defs>
                <linearGradient id="vibrantPetalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF94B8" />
                  <stop offset="45%" stopColor="#F06292" />
                  <stop offset="100%" stopColor="#E26D5C" />
                </linearGradient>
              </defs>
            </svg>
          ) : (
            /* Fresh Botanical Green Leaf SVG: Lush Spring Green with Center Vein */
            <svg
              width={item.width}
              height={item.height}
              viewBox="0 0 32 18"
              fill="none"
              style={{ transform: `rotate(${item.rot})` }}
              className="filter drop-shadow-[0_1.5px_3px_rgba(46,125,50,0.25)]"
            >
              <path
                d="M2 9 C8 1, 24 1, 30 9 C24 17, 8 17, 2 9 Z"
                fill="url(#vibrantLeafGradient)"
                opacity="0.95"
              />
              {/* Leaf Center Stem */}
              <path
                d="M4 9 L28 9"
                stroke="#C8E6C9"
                strokeWidth="1"
                strokeLinecap="round"
                opacity="0.8"
              />
              {/* Secondary delicate veins */}
              <path
                d="M12 9 L17 6 M18 9 L23 6 M12 9 L17 12 M18 9 L23 12"
                stroke="#C8E6C9"
                strokeWidth="0.75"
                strokeLinecap="round"
                opacity="0.65"
              />
              <defs>
                <linearGradient id="vibrantLeafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#81C784" />
                  <stop offset="50%" stopColor="#4CAF50" />
                  <stop offset="100%" stopColor="#2E7D32" />
                </linearGradient>
              </defs>
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}
