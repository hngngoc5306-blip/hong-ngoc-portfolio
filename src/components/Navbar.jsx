import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ content }) {
  const [scrolledPastCover, setScrolledPastCover] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('cover');

  const navItems = [
    { id: 'overview', label: content.nav.overview },
    { id: 'work', label: content.nav.work },
    { id: 'experience', label: content.nav.experience },
    { id: 'research', label: content.nav.research },
    { id: 'contact', label: content.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled past the dedicated opening cover
      const coverEl = document.getElementById('cover');
      const coverHeight = coverEl ? coverEl.offsetHeight : 600;
      setScrolledPastCover(window.scrollY > coverHeight * 0.4);

      // Section tracker
      const allSections = [
        { id: 'cover' },
        ...navItems
      ].map(item => document.getElementById(item.id)).filter(Boolean);

      const scrollPos = window.scrollY + 250;
      for (let i = allSections.length - 1; i >= 0; i--) {
        const sec = allSections[i];
        if (sec.offsetTop <= scrollPos) {
          setActiveSection(sec.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* 
        Full Editorial Navigation Bar:
        Smoothly reveals only when user scrolls into Overview and later sections
      */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolledPastCover 
          ? 'translate-y-0 opacity-100 bg-paper-100/90 backdrop-blur-md py-3 shadow-paper border-b border-earth-700/10' 
          : '-translate-y-full opacity-0 pointer-events-none py-3'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Jump to Cover */}
          <button 
            onClick={() => scrollTo('cover')}
            className="text-left group flex items-center gap-2 focus:outline-none"
          >
            <span className="font-editorial-serif font-bold text-lg text-earth-800 tracking-tight group-hover:text-rosewood-600 transition-colors">
              Hồng Ngọc
            </span>
            <span className="hidden sm:inline-block text-xs uppercase tracking-wider font-semibold text-earth-500/80 border-l border-earth-300 pl-2">
              Portfolio
            </span>
          </button>

          {/* Desktop Navigation Links — Publication Index */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-[#FAF6F0]/95 px-3 py-1.5 rounded-full border border-earth-900/20 shadow-[2px_2px_0_rgba(42,24,21,0.1)] backdrop-blur-md">
            {navItems.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-3 py-1 text-xs font-mono transition-all duration-200 rounded-full flex items-center gap-1.5 ${
                  activeSection === item.id
                    ? 'bg-earth-900 text-white font-bold shadow-xs'
                    : 'text-earth-700 hover:text-earth-950 hover:bg-paper-200/70 font-medium'
                }`}
              >
                <span className={`text-[10px] ${activeSection === item.id ? 'text-[#FF007F]' : 'text-earth-500'}`}>
                  0{idx + 1}
                </span>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Mobile Burger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-earth-800 hover:text-earth-600 rounded-lg hover:bg-paper-200 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-paper-100/98 border-b border-earth-200 shadow-paper-lg px-4 pt-3 pb-5 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-2 gap-2 max-w-sm mx-auto">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`py-2 px-3 text-left text-xs rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-earth-800 text-paper-50 font-semibold'
                      : 'text-earth-800 hover:bg-paper-200'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
