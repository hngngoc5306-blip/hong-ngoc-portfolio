import { useEffect } from 'react';

/**
 * useScrollEntrance — Lightweight, high-performance IntersectionObserver hook
 * Automatically detects elements with data-reveal attributes and adds 'is-revealed' class
 * when they enter the viewport for the first time.
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

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target); // Animate once on initial scroll
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -8% 0px', // Trigger slightly before element reaches bottom
        threshold: 0.1,
      }
    );

    const elements = document.querySelectorAll('[data-reveal]');
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);
}
