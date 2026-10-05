import React, { useEffect, useState, useRef } from 'react';

/**
 * EditorialScrapbookCursor — High-craft physical scrapbook cursor
 * 1. Dot follower with spring physics.
 * 2. Rotating physical paper ring that expands on interactive targets.
 * 3. Dynamic contextual badges:
 *    - "LOOK" on photos / specimens
 *    - "PLAY" / "PAUSE" on music player
 *    - "READ" on research & text cards
 *    - "EXPLORE" on interactive links / case studies
 *    - "HELLO" on contact elements
 * 4. Faint ink particle trail: spawns gentle ink specks as you move cursor.
 * 5. Hidden on touch devices (pointer: coarse) & respects prefers-reduced-motion.
 */
export default function EditorialScrapbookCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [followerPos, setFollowerPos] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState('default'); // 'default' | 'pointer' | 'photo' | 'read' | 'audio' | 'contact'
  const [badgeText, setBadgeText] = useState('');
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [trail, setTrail] = useState([]);
  
  const rafId = useRef(null);
  const targetPos = useRef({ x: -100, y: -100 });
  const currentFollower = useRef({ x: -100, y: -100 });
  const lastTrailTime = useRef(0);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const handleMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      targetPos.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });

      // Detect hover target
      const target = e.target.closest(
        'button, a, input, [role="button"], img, .cursor-pointer, [data-cursor], .group'
      );

      if (target) {
        const customCursor = target.getAttribute('data-cursor');
        if (customCursor) {
          setBadgeText(customCursor.toUpperCase());
          setCursorState('custom');
        } else if (target.closest('#cover, #overview img, .polaroid-card, [data-reveal="photo"]')) {
          setBadgeText('LOOK');
          setCursorState('photo');
        } else if (target.closest('#contact a, #contact button')) {
          setBadgeText('SAY HELLO');
          setCursorState('contact');
        } else if (target.closest('#research a, #research .cursor-pointer')) {
          setBadgeText('READ');
          setCursorState('read');
        } else if (target.closest('audio, button[aria-label*="music"], button[aria-label*="Play"]')) {
          setBadgeText('LISTEN');
          setCursorState('audio');
        } else if (target.closest('#work a, #work button')) {
          setBadgeText('EXPLORE');
          setCursorState('explore');
        } else {
          setBadgeText('');
          setCursorState('pointer');
        }
      } else {
        setBadgeText('');
        setCursorState('default');
      }

      // Spawn subtle ink dust particle trail (rate limited)
      const now = Date.now();
      if (now - lastTrailTime.current > 70) {
        lastTrailTime.current = now;
        const newParticle = {
          id: now,
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 3 + 2,
          rotation: Math.random() * 360,
          color: Math.random() > 0.5 ? '#E26D5C' : '#5A8B9C'
        };
        setTrail((prev) => [...prev.slice(-8), newParticle]);
      }
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Smooth spring physics for trailing paper ring
    const animateFollower = () => {
      const ease = 0.18;
      currentFollower.current.x += (targetPos.current.x - currentFollower.current.x) * ease;
      currentFollower.current.y += (targetPos.current.y - currentFollower.current.y) * ease;
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

  // Clean old trail particles automatically
  useEffect(() => {
    if (trail.length === 0) return;
    const timer = setTimeout(() => {
      setTrail((prev) => prev.slice(1));
    }, 380);
    return () => clearTimeout(timer);
  }, [trail]);

  if (!isVisible) return null;

  const hasBadge = Boolean(badgeText);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden select-none" aria-hidden="true">
      {/* 1. Subtle Organic Ink Dust Particles Trail */}
      {trail.map((pt) => (
        <span
          key={pt.id}
          className="absolute rounded-full pointer-events-none animate-ink-fade"
          style={{
            left: `${pt.x}px`,
            top: `${pt.y}px`,
            width: `${pt.size}px`,
            height: `${pt.size}px`,
            backgroundColor: pt.color,
            transform: `translate(-50%, -50%) rotate(${pt.rotation}deg)`,
            opacity: 0.45,
          }}
        />
      ))}

      {/* 2. Trailing Physical Paper Stamp Ring */}
      <div
        className={`absolute rounded-full transition-transform duration-200 pointer-events-none flex items-center justify-center ${
          hasBadge 
            ? 'w-16 h-16 bg-[#FAF6F0]/95 border-2 border-earth-900 shadow-[3px_3px_0_rgba(42,24,21,0.25)]' 
            : cursorState === 'pointer'
            ? 'w-11 h-11 border-2 border-earth-900 bg-paper-50/40 backdrop-blur-2xs'
            : 'w-8 h-8 border border-earth-900/60 bg-earth-900/5'
        }`}
        style={{
          left: `${followerPos.x}px`,
          top: `${followerPos.y}px`,
          transform: `translate(-50%, -50%) scale(${isMouseDown ? 0.85 : 1})`,
        }}
      >
        {/* Contextual Badge Text inside stamp ring */}
        {hasBadge && (
          <span className="font-mono text-[9px] font-black tracking-wider text-earth-900 uppercase animate-in fade-in zoom-in-90 duration-150">
            {badgeText}
          </span>
        )}
      </div>

      {/* 3. Real-time Ink Pen Dot Tip */}
      <div
        className={`absolute rounded-full bg-earth-900 pointer-events-none transition-transform duration-75 ${
          hasBadge ? 'w-1 h-1 opacity-0' : 'w-2 h-2'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isMouseDown ? 1.5 : 1})`,
          boxShadow: '0 0 2px rgba(42,24,21,0.6)',
        }}
      />
    </div>
  );
}
