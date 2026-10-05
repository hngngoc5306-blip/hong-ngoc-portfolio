import { useEffect } from 'react';

/**
 * useScrollEntrance — Replaying IntersectionObserver animation system
 * 
 * Rules:
 * 1. Element enters viewport -> add 'is-revealed' class (plays entrance animation with stagger delay).
 * 2. Element leaves viewport -> remove 'is-revealed' class (smoothly resets to pre-reveal state, 0 delay on exit).
 * 3. Element re-enters viewport -> replays entrance animation smoothly.
 * 4. Tracks scroll direction ('scroll-down' vs 'scroll-up' on body) for natural entrance physics.
 */
export function useScrollEntrance() {
  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('[data-reveal]').forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    // Scroll direction tracker
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          if (currentY > lastScrollY) {
            document.body.setAttribute('data-scroll-dir', 'down');
          } else if (currentY < lastScrollY) {
            document.body.setAttribute('data-scroll-dir', 'up');
          }
          lastScrollY = currentY;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Bidirectional Repeating Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Re-enters or enters viewport -> Trigger staggered entrance
            entry.target.classList.add('is-revealed');
          } else {
            // Leaves viewport -> Smoothly re-arm / reset for next entrance
            // Check bounding rect to avoid resetting elements while still partially visible
            const rect = entry.boundingClientRect;
            const isOutside = rect.bottom < -20 || rect.top > window.innerHeight + 20;
            if (isOutside) {
              entry.target.classList.remove('is-revealed');
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -4% 0px', // Re-arms cleanly as elements cross viewport
        threshold: [0, 0.08, 0.15],
      }
    );

    const observeAll = () => {
      const elements = document.querySelectorAll('[data-reveal]');
      elements.forEach((el) => observer.observe(el));
    };

    observeAll();

    // Re-query if dynamic components mount
    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
