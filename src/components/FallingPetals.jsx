import React from 'react';

/**
 * Editorial Falling Sakura Petals & Fresh Leaves (Cánh hoa anh đào rơi chao lượn + lá xanh tươi)
 * Designed for scrapbook spreads with organic Japanese cherry blossom notched shape
 */
export default function FallingPetals({ count = 12, className = '' }) {
  // Rich array of cherry blossom petals with varied sizes, positions, delays, and fresh green leaves
  const items = [
    // 1. Sakura Petal (Top-left)
    {
      type: 'sakura',
      top: '5%',
      left: '10%',
      width: 24,
      height: 22,
      anim: 'petal-drift-a',
      delay: '0s',
      rot: '-18deg'
    },
    // 2. Sakura Petal (Top-center)
    {
      type: 'sakura',
      top: '12%',
      left: '42%',
      width: 28,
      height: 25,
      anim: 'petal-drift-b',
      delay: '2.1s',
      rot: '24deg'
    },
    // 3. Fresh Green Leaf (Top-right)
    {
      type: 'leaf',
      top: '8%',
      left: '78%',
      width: 24,
      height: 14,
      anim: 'leaf-drift',
      delay: '1.2s',
      rot: '35deg'
    },
    // 4. Sakura Petal (Upper-right)
    {
      type: 'sakura',
      top: '22%',
      left: '86%',
      width: 22,
      height: 20,
      anim: 'petal-drift-c',
      delay: '3.6s',
      rot: '-30deg'
    },
    // 5. Sakura Petal (Mid-left)
    {
      type: 'sakura',
      top: '32%',
      left: '18%',
      width: 26,
      height: 24,
      anim: 'petal-drift-b',
      delay: '4.5s',
      rot: '12deg'
    },
    // 6. Fresh Green Leaf (Mid-center)
    {
      type: 'leaf',
      top: '38%',
      left: '52%',
      width: 26,
      height: 15,
      anim: 'leaf-drift',
      delay: '4.0s',
      rot: '-25deg'
    },
    // 7. Sakura Petal (Mid-right)
    {
      type: 'sakura',
      top: '46%',
      left: '72%',
      width: 30,
      height: 27,
      anim: 'petal-drift-a',
      delay: '1.8s',
      rot: '-42deg'
    },
    // 8. Sakura Petal (Lower-left)
    {
      type: 'sakura',
      top: '58%',
      left: '8%',
      width: 23,
      height: 21,
      anim: 'petal-drift-c',
      delay: '5.2s',
      rot: '28deg'
    },
    // 9. Sakura Petal (Lower-center)
    {
      type: 'sakura',
      top: '65%',
      left: '36%',
      width: 27,
      height: 25,
      anim: 'petal-drift-b',
      delay: '3.1s',
      rot: '-15deg'
    },
    // 10. Fresh Green Leaf (Lower-right)
    {
      type: 'leaf',
      top: '68%',
      left: '84%',
      width: 25,
      height: 14,
      anim: 'leaf-drift',
      delay: '2.7s',
      rot: '42deg'
    },
    // 11. Sakura Petal (Near-bottom left)
    {
      type: 'sakura',
      top: '78%',
      left: '22%',
      width: 29,
      height: 26,
      anim: 'petal-drift-a',
      delay: '6.5s',
      rot: '35deg'
    },
    // 12. Sakura Petal (Bottom-center)
    {
      type: 'sakura',
      top: '84%',
      left: '56%',
      width: 25,
      height: 23,
      anim: 'petal-drift-c',
      delay: '4.8s',
      rot: '-28deg'
    },
    // 13. Fresh Green Leaf (Bottom-left)
    {
      type: 'leaf',
      top: '88%',
      left: '12%',
      width: 22,
      height: 13,
      anim: 'leaf-drift',
      delay: '5.5s',
      rot: '-18deg'
    },
    // 14. Sakura Petal (Bottom-right)
    {
      type: 'sakura',
      top: '86%',
      left: '79%',
      width: 26,
      height: 24,
      anim: 'petal-drift-b',
      delay: '7.2s',
      rot: '16deg'
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
          {item.type === 'sakura' ? (
            /* 
              AUTHENTIC SAKURA (CHERRY BLOSSOM) PETAL:
              Distinctive heart-notched cleft at the wide top edge,
              tapering down to a delicate petal base.
            */
            <svg
              width={item.width}
              height={item.height}
              viewBox="0 0 32 30"
              fill="none"
              style={{ transform: `rotate(${item.rot})` }}
              className="filter drop-shadow-[0_2px_4px_rgba(235,90,130,0.32)]"
            >
              {/* Petal Outer Body with Notched Sakura Cleft */}
              <path
                d="M16 28 C10 21, 2 15, 2 8 C2 3, 7 0.5, 12 1 C14.2 1.3, 15.3 3, 16 4.5 C16.7 3, 17.8 1.3, 20 1 C25 0.5, 30 3, 30 8 C30 15, 22 21, 16 28 Z"
                fill="url(#sakuraGradient)"
                opacity="0.96"
              />
              {/* Soft Inner Sakura Highlight / Center Crease */}
              <path
                d="M16 5.5 C16 11, 16 18, 16 26"
                stroke="#FFF1F5"
                strokeWidth="1.1"
                strokeLinecap="round"
                opacity="0.8"
              />
              {/* Delicate radial gradient for tender sakura blush */}
              <defs>
                <linearGradient id="sakuraGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#FA82A5" />
                  <stop offset="55%" stopColor="#FFADC6" />
                  <stop offset="100%" stopColor="#FFF0F5" />
                </linearGradient>
              </defs>
            </svg>
          ) : (
            /* 
              FRESH SPRING LEAF:
              Smooth lanceolate botanical leaf with vivid green gradient & center stem
            */
            <svg
              width={item.width}
              height={item.height}
              viewBox="0 0 32 18"
              fill="none"
              style={{ transform: `rotate(${item.rot})` }}
              className="filter drop-shadow-[0_2px_4px_rgba(38,135,50,0.28)]"
            >
              <path
                d="M2 9 C8 1, 24 1, 30 9 C24 17, 8 17, 2 9 Z"
                fill="url(#vibrantLeafGradient)"
                opacity="0.96"
              />
              {/* Leaf Center Stem */}
              <path
                d="M4 9 L28 9"
                stroke="#D4EDDA"
                strokeWidth="1.2"
                strokeLinecap="round"
                opacity="0.85"
              />
              {/* Secondary delicate veins */}
              <path
                d="M12 9 L17 5.5 M18 9 L23 5.5 M12 9 L17 12.5 M18 9 L23 12.5"
                stroke="#D4EDDA"
                strokeWidth="0.8"
                strokeLinecap="round"
                opacity="0.75"
              />
              <defs>
                <linearGradient id="vibrantLeafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8CE08A" />
                  <stop offset="45%" stopColor="#43B948" />
                  <stop offset="100%" stopColor="#257529" />
                </linearGradient>
              </defs>
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}
