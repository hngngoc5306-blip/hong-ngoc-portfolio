import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer({ content }) {
  const f = content.footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-earth-900 text-paper-100 py-12 px-4 sm:px-6 lg:px-8 border-t border-earth-800">
      <div data-reveal="text" className="delay-100 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono">
        
        <div className="space-y-1 text-center md:text-left">
          <div className="text-paper-50 font-bold font-editorial-serif text-sm">
            {f.name}
          </div>
          <div className="text-earth-400">
            {f.curation}
          </div>
        </div>

        <div className="text-earth-400 text-center">
          {f.rights}
        </div>

        <button
          data-reveal="sticker"
          onClick={scrollToTop}
          className="delay-200 inline-flex items-center gap-2 bg-earth-800 hover:bg-rosewood-600 text-paper-50 px-4 py-2 font-mono text-xs transition-colors border border-earth-700 shadow-[2px_2px_0_rgba(0,0,0,0.5)] cursor-pointer"
          title="Scroll back to top"
        >
          <span>TOP [ ↑ ]</span>
        </button>

      </div>
    </footer>
  );
}
