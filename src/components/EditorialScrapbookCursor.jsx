import React, { useEffect, useState, useRef } from 'react';

/**
 * CuteMagicStarCursor — Option 1: Ngôi sao lấp lánh & Vệt bụi sao ma thuật
 * - Con trỏ chính: Ngôi sao 4 cánh / 8 cánh vẽ tay màu vàng pastel (#FEE78A) viền nâu đất, xoay nhẹ & nhún nhảy đáng yêu.
 * - Vệt sao ma thuật: Những ngôi sao mini và hạt bụi sao lấp lánh rơi rải rác mềm mại theo đường di chuyển chuột.
 * - Khi hover vào các mục tương tác (ảnh, link, nút, nhạc): Ngôi sao nở to, xoay tít và hiển thị sticker ruy băng nhỏ xinh (look, listen, read...).
 * - Khi click chuột: Ngôi sao co lại nhún nảy (cute squash & stretch) và bắn ra một chùm sao nhỏ xinh xắn.
 */
export default function EditorialScrapbookCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [followerPos, setFollowerPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [badgeText, setBadgeText] = useState('');
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [starParticles, setStarParticles] = useState([]);
  
  const rafId = useRef(null);
  const targetPos = useRef({ x: -100, y: -100 });
  const currentFollower = useRef({ x: -100, y: -100 });
  const lastSpawnTime = useRef(0);
  const starRotation = useRef(0);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const handleMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      targetPos.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });

      // Detect interactive targets for cute context reaction
      const target = e.target.closest(
        'button, a, input, [role="button"], img, .cursor-pointer, [data-cursor], .group'
      );

      if (target) {
        setIsHovered(true);
        const customCursor = target.getAttribute('data-cursor');
        if (customCursor) {
          setBadgeText(customCursor);
        } else if (target.closest('#cover, #overview img, .polaroid-card, [data-reveal="photo"]')) {
          setBadgeText('peek ✨');
        } else if (target.closest('#contact a, #contact button')) {
          setBadgeText('say hi! ♡');
        } else if (target.closest('#research a, #research .cursor-pointer')) {
          setBadgeText('read 📖');
        } else if (target.closest('audio, button[aria-label*="music"], button[aria-label*="Play"]')) {
          setBadgeText('listen ♫');
        } else if (target.closest('#work a, #work button')) {
          setBadgeText('explore ✦');
        } else {
          setBadgeText('');
        }
      } else {
        setIsHovered(false);
        setBadgeText('');
      }

      // Spawn cute magical star particles trail (more vibrant & noticeable)
      const now = Date.now();
      if (now - lastSpawnTime.current > 24) {
        lastSpawnTime.current = now;
        const colors = ['#FEE78A', '#FFB5D5', '#88D49E', '#93C5FD', '#FDE047', '#E26D5C', '#C084FC'];
        // Spawn 2 distinct particles per tick: one star/sparkle and one luminous dust dot
        const newStar = {
          id: now + Math.random(),
          x: e.clientX + (Math.random() * 22 - 11),
          y: e.clientY + (Math.random() * 22 - 11),
          size: Math.random() * 11 + 6, // Larger stars (6px to 17px)
          rotation: Math.random() * 360,
          color: colors[Math.floor(Math.random() * colors.length)],
          isSparkle: true,
        };
        const newDot = {
          id: now + Math.random() + 0.1,
          x: e.clientX + (Math.random() * 18 - 9),
          y: e.clientY + (Math.random() * 18 - 9),
          size: Math.random() * 6 + 3.5, // 3.5px to 9.5px round dust dots
          rotation: 0,
          color: colors[Math.floor(Math.random() * colors.length)],
          isSparkle: false,
        };
        setStarParticles((prev) => [...prev.slice(-32), newStar, newDot]);
      }
    };

    const handleMouseDown = (e) => {
      setIsMouseDown(true);
      // Spawn an impressive burst of stars & luminous dust on click
      const burstColors = ['#FEE78A', '#FFB5D5', '#FDE047', '#E26D5C', '#93C5FD'];
      const burst = Array.from({ length: 12 }).map((_, i) => ({
        id: Date.now() + i + Math.random(),
        x: e.clientX + (Math.cos((i * Math.PI) / 6) * (Math.random() * 24 + 12)),
        y: e.clientY + (Math.sin((i * Math.PI) / 6) * (Math.random() * 24 + 12)),
        size: Math.random() * 12 + 6,
        rotation: Math.random() * 360,
        color: burstColors[i % burstColors.length],
        isSparkle: i % 3 !== 0,
      }));
      setStarParticles((prev) => [...prev.slice(-24), ...burst]);
    };

    const handleMouseUp = () => setIsMouseDown(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Smooth spring physics for following trailing halo
    const animateFollower = () => {
      const ease = 0.22;
      currentFollower.current.x += (targetPos.current.x - currentFollower.current.x) * ease;
      currentFollower.current.y += (targetPos.current.y - currentFollower.current.y) * ease;
      starRotation.current += 1.2;
      setFollowerPos({
        x: currentFollower.current.x,
        y: currentFollower.current.y,
      });
      rafId.current = requestAnimationFrame(animateFollower);
    };
    rafId.current = requestAnimationFrame(animateFollower);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isVisible]);

  // Clean old star particles
  useEffect(() => {
    if (starParticles.length === 0) return;
    const timer = setTimeout(() => {
      setStarParticles((prev) => prev.slice(2));
    }, 550);
    return () => clearTimeout(timer);
  }, [starParticles]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden select-none" aria-hidden="true">
      {/* 1. Magical Star Dust Particle Trail */}
      {starParticles.map((star) => (
        <span
          key={star.id}
          className="absolute pointer-events-none animate-star-sparkle"
          style={{
            left: `${star.x}px`,
            top: `${star.y}px`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            transform: `translate(-50%, -50%) rotate(${star.rotation}deg)`,
            color: star.color,
          }}
        >
          {star.isSparkle ? (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-xs">
              <path d="M12 0L14.6 8.4L23.4 8.4L16.3 13.6L19 22L12 16.8L5 22L7.7 13.6L0.6 8.4L9.4 8.4L12 0Z"/>
            </svg>
          ) : (
            <span 
              className="block rounded-full w-full h-full" 
              style={{ backgroundColor: star.color, boxShadow: `0 0 6px ${star.color}` }} 
            />
          )}
        </span>
      ))}

      {/* 2. Soft Pastel Trailing Star Aura (Follows with slight spring delay) */}
      <div
        className={`absolute rounded-full transition-all duration-300 pointer-events-none flex items-center justify-center ${
          isHovered
            ? 'w-12 h-12 bg-[#FEE78A]/35 border border-[#EAB308]/50 shadow-[0_0_12px_rgba(254,231,138,0.6)]'
            : 'w-7 h-7 bg-[#FEE78A]/20 border border-[#EAB308]/30'
        }`}
        style={{
          left: `${followerPos.x}px`,
          top: `${followerPos.y}px`,
          transform: `translate(-50%, -50%) scale(${isMouseDown ? 0.7 : 1})`,
        }}
      />

      {/* 3. Main Cute Sparkle Star Cursor (Follows real-time mouse position) */}
      <div
        className="absolute pointer-events-none transition-transform duration-75 flex flex-col items-center"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isMouseDown ? 0.75 : isHovered ? 1.25 : 1}) rotate(${starRotation.current}deg)`,
        }}
      >
        {/* Cute hand-drawn star with warm pastel fill and thin comic ink outline */}
        <svg 
          width="26" 
          height="26" 
          viewBox="0 0 24 24" 
          fill="#FEE78A" 
          stroke="#451A03" 
          strokeWidth="1.5" 
          strokeLinejoin="round"
          className="filter drop-shadow-[0_2px_4px_rgba(42,24,21,0.25)]"
        >
          <path d="M12 1L14.8 8.6L22.6 9.4L16.8 14.5L18.4 22.2L12 18.2L5.6 22.2L7.2 14.5L1.4 9.4L9.2 8.6L12 1Z"/>
        </svg>

        {/* Tiny sparkle highlight in the center of the star */}
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full pointer-events-none shadow-xs" />
      </div>

      {/* 4. Cute Contextual Pastel Sticker Ribbon (Displays playfully beside star when hovering) */}
      {badgeText && (
        <div
          className="absolute pointer-events-none transition-all duration-150 animate-in fade-in zoom-in-90"
          style={{
            left: `${position.x + 18}px`,
            top: `${position.y - 18}px`,
          }}
        >
          <span className="font-editorial-script text-xs font-bold text-earth-900 bg-[#FAF6F0] px-2.5 py-0.5 border border-earth-900 shadow-[2px_2px_0_rgba(42,24,21,0.2)] rounded-full whitespace-nowrap block transform rotate-[-4deg]">
            {badgeText}
          </span>
        </div>
      )}
    </div>
  );
}
