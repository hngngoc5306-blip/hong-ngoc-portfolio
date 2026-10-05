import React from 'react';

/**
 * Editorial Falling Sakura Petals & Fresh Leaves (Cánh hoa anh đào rơi chao lượn + lá xanh tươi)
 * Designed for scrapbook spreads with organic Japanese cherry blossom notched shape
 */
export default function FallingPetals({ count = 16, className = '' }) {
  // Rich array of cherry blossom petals with varied sizes, positions, delays, and fresh green leaves
  const items = [
    // 1. Sakura Petal (Top-left)
    {
      type: 'sakura',
      top: '4%',
      left: '8%',
      width: 25,
      height: 23,
      anim: 'petal-drift-a',
      delay: '0s',
      rot: '-18deg'
    },
    // 2. Sakura Petal (Top-center-left)
    {
      type: 'sakura',
      top: '10%',
      left: '28%',
      width: 28,
      height: 25,
      anim: 'petal-drift-b',
      delay: '1.5s',
      rot: '20deg'
    },
    // 3. Sakura Petal (Top-center)
    {
      type: 'sakura',
      top: '6%',
      left: '46%',
      width: 24,
      height: 22,
      anim: 'petal-drift-c',
      delay: '3.2s',
      rot: '-12deg'
    },
    // 4. Fresh Green Leaf (Top-right)
    {
      type: 'leaf',
      top: '8%',
      left: '74%',
      width: 24,
      height: 14,
      anim: 'leaf-drift',
      delay: '1.2s',
      rot: '35deg'
    },
    // 5. Sakura Petal (Upper-far-right)
    {
      type: 'sakura',
      top: '16%',
      left: '88%',
      width: 26,
      height: 24,
      anim: 'petal-drift-a',
      delay: '2.4s',
      rot: '-30deg'
    },
    // 6. Sakura Petal (Upper-mid-left)
    {
      type: 'sakura',
      top: '24%',
      left: '16%',
      width: 27,
      height: 25,
      anim: 'petal-drift-c',
      delay: '4.1s',
      rot: '28deg'
    },
    // 7. Fresh Green Leaf (Upper-mid-center)
    {
      type: 'leaf',
      top: '26%',
      left: '60%',
      width: 25,
      height: 14,
      anim: 'leaf-drift',
      delay: '3.6s',
      rot: '-20deg'
    },
    // 8. Sakura Petal (Mid-left)
    {
      type: 'sakura',
      top: '36%',
      left: '6%',
      width: 29,
      height: 26,
      anim: 'petal-drift-b',
      delay: '0.8s',
      rot: '14deg'
    },
    // 9. Sakura Petal (Mid-center)
    {
      type: 'sakura',
      top: '40%',
      left: '38%',
      width: 25,
      height: 23,
      anim: 'petal-drift-a',
      delay: '5.0s',
      rot: '-22deg'
    },
    // 10. Fresh Green Leaf (Mid-right)
    {
      type: 'leaf',
      top: '42%',
      left: '78%',
      width: 26,
      height: 15,
      anim: 'leaf-drift',
      delay: '4.8s',
      rot: '25deg'
    },
    // 11. Sakura Petal (Mid-right)
    {
      type: 'sakura',
      top: '48%',
      left: '90%',
      width: 27,
      height: 25,
      anim: 'petal-drift-c',
      delay: '2.0s',
      rot: '-38deg'
    },
    // 12. Sakura Petal (Lower-mid-left)
    {
      type: 'sakura',
      top: '56%',
      left: '22%',
      width: 26,
      height: 24,
      anim: 'petal-drift-a',
      delay: '3.5s',
      rot: '32deg'
    },
    // 13. Fresh Green Leaf (Lower-mid-center)
    {
      type: 'leaf',
      top: '58%',
      left: '52%',
      width: 23,
      height: 13,
      anim: 'leaf-drift',
      delay: '2.8s',
      rot: '-35deg'
    },
    // 14. Sakura Petal (Lower-center)
    {
      type: 'sakura',
      top: '66%',
      left: '34%',
      width: 30,
      height: 27,
      anim: 'petal-drift-b',
      delay: '1.2s',
      rot: '-15deg'
    },
    // 15. Sakura Petal (Lower-right)
    {
      type: 'sakura',
      top: '68%',
      left: '82%',
      width: 25,
      height: 23,
      anim: 'petal-drift-c',
      delay: '6.2s',
      rot: '24deg'
    },
    // 16. Fresh Green Leaf (Lower-left)
    {
      type: 'leaf',
      top: '74%',
      left: '12%',
      width: 24,
      height: 14,
      anim: 'leaf-drift',
      delay: '5.2s',
      rot: '40deg'
    },
    // 17. Sakura Petal (Near-bottom center)
    {
      type: 'sakura',
      top: '78%',
      left: '64%',
      width: 28,
      height: 25,
      anim: 'petal-drift-a',
      delay: '4.6s',
      rot: '-26deg'
    },
    // 18. Sakura Petal (Bottom-left)
    {
      type: 'sakura',
      top: '85%',
      left: '24%',
      width: 27,
      height: 24,
      anim: 'petal-drift-b',
      delay: '3.8s',
      rot: '18deg'
    },
    // 19. Fresh Green Leaf (Bottom-right)
    {
      type: 'leaf',
      top: '86%',
      left: '72%',
      width: 22,
      height: 13,
      anim: 'leaf-drift',
      delay: '6.6s',
      rot: '-18deg'
    },
    // 20. Sakura Petal (Bottom-far-right)
    {
      type: 'sakura',
      top: '88%',
      left: '92%',
      width: 26,
      height: 23,
      anim: 'petal-drift-c',
      delay: '5.8s',
      rot: '-32deg'
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
