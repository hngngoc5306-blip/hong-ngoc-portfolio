import React, { useState } from 'react';
import { ExternalLink, CheckCircle2, Layers, Cpu, Eye, Sparkles, X, Smartphone, GitBranch, ArrowUpRight } from 'lucide-react';
import WashiTape from './WashiTape';
import FallingPetals from './FallingPetals';

export default function SelectedWork({ content }) {
  const w = content.work;
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section 
      id="work" 
      className="relative py-28 lg:py-36 px-4 sm:px-6 lg:px-8 bg-[#FAF6F0] overflow-visible"
    >
      {/* Background blueprint and paper grain */}
      <div className="absolute inset-0 paper-grain pointer-events-none" />
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />

      {/* Decorative starbursts in background */}
      <div className="absolute top-12 left-10 text-yellow-400 z-10 hidden lg:block animate-cover-star">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.6 8.4L23.4 8.4L16.3 13.6L19 22L12 16.8L5 22L7.7 13.6L0.6 8.4L9.4 8.4L12 0Z"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Editorial Section Masthead */}
        <div data-reveal="heading" className="flex items-center justify-between gap-4 mb-16 border-b-2 border-earth-900 pb-4">
          <div className="flex items-center gap-4">
            <span className="scrapbook-interactive-stamp font-mono text-xs sm:text-sm uppercase tracking-widest text-earth-900 font-black bg-[#FF007F] text-white px-4 py-1.5 shadow-[3px_3px_0_rgba(42,24,21,0.2)]">
              {w.sectionNumber} — {w.sectionTitle}
            </span>
            <span className="text-earth-800 font-mono text-xs sm:text-sm hidden sm:inline-block font-bold">
              Design Process Studio & Digital Product Specimen
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-editorial-script text-xl text-earth-900 font-bold hidden md:inline-block">
              ~ studio wall case study ~
            </span>
            <span className="text-xs sm:text-sm font-mono text-earth-900 bg-white px-3 py-1 border border-earth-900 uppercase tracking-wider font-black">
              PLATE · 02
            </span>
          </div>
        </div>

        {/* 
          V3 RECOMPOSED STUDIO WALL CASE STUDY:
          Not an isolated card, but a layered studio drafting board with pinned artifacts,
          hero specimen screen, drafting blueprint, and uneven overlapping contact sheets.
        */}
        <div data-reveal="paper" className="delay-150 relative bg-white border-3 border-earth-900 shadow-[16px_16px_0_rgba(42,24,21,0.28)] p-6 sm:p-10 lg:p-14 mb-16 overflow-visible">
          
          {/* Subtle Falling Sakura Petals & Fresh Leaves on OwlUp studio board (contained inside) */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <FallingPetals count={16} className="opacity-95 z-0" />
          </div>

          {/* Blue Checkered Washi Tape on top left corner */}
          <div 
            className="living-stationery-tape scrapbook-interactive-tape absolute -top-5 left-12 w-36 h-8 z-20 hidden sm:block shadow-xs"
            style={{
              backgroundColor: '#DCE8F2',
              backgroundImage: 'repeating-linear-gradient(0deg, rgba(70,130,180,0.3) 0px, rgba(70,130,180,0.3) 6px, transparent 6px, transparent 12px), repeating-linear-gradient(90deg, rgba(70,130,180,0.3) 0px, rgba(70,130,180,0.3) 6px, transparent 6px, transparent 12px)',
              border: '1.5px solid rgba(70,130,180,0.6)',
              '--tape-rot': '1deg'
            }}
          />

          {/* Yellow Post-it Note with Binder Clip (Studio Wall Annotation) */}
          <div className="living-stationery-note scrapbook-interactive-tape absolute -top-10 right-6 sm:right-16 w-56 sm:w-64 template-sticky-yellow p-4.5 z-20 hidden md:block shadow-md" style={{ '--note-rot': '2deg' }}>
            <div className="living-stationery-clip absolute -top-6 left-1/2 -translate-x-1/2 w-10 h-10 pointer-events-none">
              <img src="/assets/collage_elem_40.png" alt="Clip" className="w-full h-full object-contain filter drop-shadow-xs" />
            </div>
            <p className="font-editorial-serif text-sm text-earth-900 leading-snug pt-2 text-justify font-bold">
              “Full-stack development fusing evidence-based sleep research with dynamic interactive UI components.”
            </p>
            <span className="font-editorial-script text-rosewood-700 text-lg font-black block mt-1.5 text-right">
              ~ live build ~
            </span>
          </div>

          {/* Top Title Block & Typography Headline */}
          <div data-reveal="heading" className="delay-100 max-w-4xl space-y-3 mb-10 pb-8 border-b-2 border-earth-900/20">
            <div data-reveal="sticker" className="delay-150 inline-block template-banner-pink text-xs uppercase tracking-widest font-mono">
              {w.type} // FULL SPECIMEN
            </div>
            
            <h3 className="font-editorial-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-earth-900 tracking-tight leading-none">
              {w.projectName}
            </h3>
            
            <p className="font-editorial-serif italic text-rosewood-700 text-xl sm:text-2xl lg:text-3xl font-bold leading-snug">
              “{w.tagline}”
            </p>
          </div>

          {/* Core Case Study Spread: Split between Narrative Specimen & Process Flow */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left 6 cols: Project Intent, Narrative & Editorial Action */}
            <div data-reveal="text" className="delay-200 lg:col-span-6 space-y-6">
              <p className="text-earth-800 text-base sm:text-lg lg:text-[1.15rem] leading-relaxed font-sans text-justify">
                {w.description}
              </p>

              {/* Tooling Inventory as Physical Printed Tags */}
              <div data-reveal="paper" className="delay-250 space-y-2.5 pt-2">
                <div className="text-xs sm:text-sm font-mono uppercase tracking-wider text-earth-800 font-black flex items-center gap-2">
                  <span>ENVIRONMENT & TOOLING INVENTORY</span>
                  <div className="h-px flex-1 bg-earth-300" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {w.toolsUsed.map((tool, idx) => (
                    <span 
                      key={idx} 
                      className="font-mono text-xs sm:text-sm font-bold bg-[#FAF6F0] text-earth-900 px-3 py-1.5 border-2 border-earth-900 shadow-[2px_2px_0_rgba(42,24,21,0.15)]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tactile Editorial Action Button */}
              <div data-reveal="sticker" className="delay-300 pt-4 flex flex-col sm:flex-row sm:items-center gap-4">
                <a
                  href={w.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between gap-4 bg-earth-900 hover:bg-[#FF007F] text-white px-8 py-4 font-mono font-bold text-xs sm:text-sm uppercase tracking-widest shadow-[4px_4px_0_rgba(42,24,21,0.3)] transition-all group border-2 border-earth-900 cursor-pointer"
                >
                  <span>{w.liveButtonText}</span>
                  <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>

                <div className="font-mono text-xs text-earth-700 font-medium">
                  Direct Live Deployment · owlup.vercel.app
                </div>
              </div>
            </div>

            {/* Right 6 cols: Process & Interaction Rules (Drafting Ledger) */}
            <div data-reveal="paper" className="delay-250 lg:col-span-6 bg-[#FAF6F0] p-6 sm:p-8 border-2 border-earth-900 shadow-[6px_6px_0_rgba(42,24,21,0.15)] space-y-6 relative">
              <div className="flex items-center justify-between pb-3 border-b-2 border-earth-900">
                <div className="flex items-center gap-2.5">
                  <Cpu size={20} className="text-earth-900" />
                  <h4 className="font-editorial-serif text-lg sm:text-xl font-black text-earth-900 uppercase tracking-wider">
                    {w.processTitle}
                  </h4>
                </div>
                <span className="font-editorial-script text-rosewood-600 font-bold text-lg">
                  UX logic & interaction
                </span>
              </div>

              <div className="space-y-4">
                {w.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 text-sm sm:text-base text-earth-800">
                    <span className="font-mono text-[#FF007F] font-black shrink-0 text-base mt-0.5">
                      0{idx + 1}.
                    </span>
                    <span className="leading-relaxed font-sans">{pt}</span>
                  </div>
                ))}
              </div>

              {/* Status footer inside ledger */}
              <div className="mt-6 pt-3.5 border-t border-earth-300 flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm font-mono text-earth-800">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
                  <span className="font-bold">Production: Deployed on Vercel</span>
                </span>
                <span className="border border-earth-900 px-2.5 py-1 font-bold bg-white text-earth-900">
                  Interactive Prototype
                </span>
              </div>
            </div>

          </div>

          {/* ======================================================== */}
          {/* STUDIO WALL ARTIFACTS: DRAFTING FLOW & INTERFACE SPREAD  */}
          {/* ======================================================== */}
          <div className="mt-14 pt-10 border-t-2 border-earth-900/30 space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-rosewood-600 font-black block">
                  PHYSICAL ARTIFACTS & BLUEPRINT
                </span>
                <h4 className="font-editorial-serif text-2xl sm:text-3xl font-black text-earth-900">
                  Interactive Flow & Screen Specimen Board
                </h4>
              </div>
              <span className="font-editorial-script text-base text-earth-700 hidden sm:inline-block">
                (click any plate to enlarge)
              </span>
            </div>

            {/* Asymmetrical Studio Specimen Grid: Flow (Large Blueprint) + Off-axis Screens */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Drafting Blueprint 1: UX Journey Flow (5 cols) */}
              <div 
                data-reveal="photo"
                className="delay-100 lg:col-span-5 relative p-4 bg-white border-2 border-earth-900 shadow-[6px_6px_0_rgba(42,24,21,0.2)] group cursor-pointer hover:-translate-y-1 transition-transform"
                onClick={() => setSelectedImage({ src: '/assets/9.jpg', title: w.flowLabel })}
              >
                {/* Washi tape on blueprint */}
                <div data-reveal="sticker" className="delay-200 absolute -top-3.5 left-10 w-28 h-6 opacity-90 pointer-events-none -rotate-1">
                  <img src="/assets/collage_elem_39.png" alt="Tape" className="w-full h-full object-contain" />
                </div>

                <div className="flex items-center justify-between mb-3 text-xs font-mono text-earth-800 pb-1.5 border-b border-earth-300">
                  <span className="font-bold flex items-center gap-1.5 text-rosewood-600 uppercase tracking-wider">
                    <GitBranch size={14} />
                    {w.flowLabel}
                  </span>
                  <span className="text-earth-500 group-hover:text-earth-900 text-xs font-bold">Inspect ↗</span>
                </div>

                <div className="aspect-[4/5] bg-paper-50 overflow-hidden border border-earth-300 flex items-center justify-center p-2 relative">
                  <img 
                    src="/assets/9.jpg" 
                    alt="OwlUp UX Flow" 
                    className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-500"
                  />
                </div>

                <div className="mt-3 text-center border-t border-earth-200 pt-2">
                  <span className="font-editorial-script text-earth-900 text-base font-bold">
                    “Complete user journey logic: onboarding → diagnostic quiz → adaptive schedule”
                  </span>
                </div>
              </div>

              {/* Interface Screens (7 cols) — Offset Polaroid / Specimen Arrangement */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Screen 01 (10.jpg) */}
                  <div 
                    data-reveal="photo"
                    className="delay-200 relative p-3.5 bg-white border-2 border-earth-900 shadow-[5px_5px_0_rgba(42,24,21,0.15)] group cursor-pointer hover:-translate-y-1 transition-transform"
                    onClick={() => setSelectedImage({ src: '/assets/10.jpg', title: 'OwlUp Recovery Timeline Interface' })}
                  >
                    <div className="aspect-[4/3] bg-paper-100 overflow-hidden border border-earth-300 mb-2">
                      <img 
                        src="/assets/10.jpg" 
                        alt="OwlUp Screen 10" 
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      />
                    </div>
                    <div className="text-center pt-1 border-t border-earth-200">
                      <span className="text-[10px] font-mono text-earth-500 uppercase tracking-wider block font-bold">Plate II · Screen 01</span>
                      <span className="font-editorial-serif text-earth-900 text-sm font-bold">
                        Recovery Timeline Planner
                      </span>
                    </div>
                  </div>

                  {/* Screen 02 (11.jpg) */}
                  <div 
                    data-reveal="photo"
                    className="delay-300 relative p-3.5 bg-white border-2 border-earth-900 shadow-[5px_5px_0_rgba(42,24,21,0.15)] group cursor-pointer hover:-translate-y-1 transition-transform"
                    onClick={() => setSelectedImage({ src: '/assets/11.jpg', title: 'OwlUp Caffeine Advisor Interface' })}
                  >
                    <div className="aspect-[4/3] bg-paper-100 overflow-hidden border border-earth-300 mb-2">
                      <img 
                        src="/assets/11.jpg" 
                        alt="OwlUp Screen 11" 
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      />
                    </div>
                    <div className="text-center pt-1 border-t border-earth-200">
                      <span className="text-[10px] font-mono text-earth-500 uppercase tracking-wider block font-bold">Plate III · Screen 02</span>
                      <span className="font-editorial-serif text-earth-900 text-sm font-bold">
                        Caffeine Decay Advisor
                      </span>
                    </div>
                  </div>
                </div>

                {/* Screen 03 (12.jpg) — Wide Interface Specimen with Tape */}
                <div 
                  data-reveal="photo"
                  className="delay-400 relative p-4 bg-white border-2 border-earth-900 shadow-[6px_6px_0_rgba(42,24,21,0.18)] group cursor-pointer hover:-translate-y-1 transition-transform"
                  onClick={() => setSelectedImage({ src: '/assets/12.jpg', title: 'OwlUp Settings & Chronotype Profile' })}
                >
                  <div data-reveal="sticker" className="delay-500 absolute -top-3.5 right-12 w-28 h-6 opacity-85 pointer-events-none rotate-2">
                    <img src="/assets/collage_elem_39.png" alt="Tape" className="w-full h-full object-contain" />
                  </div>

                  <div className="aspect-[16/9] bg-paper-100 overflow-hidden border border-earth-300 mb-2">
                    <img 
                      src="/assets/12.jpg" 
                      alt="OwlUp Screen 12" 
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-earth-200 px-1">
                    <span className="font-editorial-serif text-earth-900 text-sm font-bold">
                      User Settings, Chronotype Diagnostic & Sleep Rhythm Controls
                    </span>
                    <span className="text-[10px] font-mono text-earth-500 uppercase tracking-wider font-bold">Plate IV · Screen 03</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[9990] bg-earth-950/85 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-white p-5 border-2 border-earth-900 shadow-[8px_8px_0_rgba(0,0,0,0.5)]" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-3 pb-2 border-b border-earth-300">
              <span className="font-editorial-serif font-bold text-lg text-earth-900">
                {selectedImage.title}
              </span>
              <button 
                onClick={() => setSelectedImage(null)}
                className="p-1 text-earth-700 hover:text-earth-950 hover:bg-paper-100 transition-colors cursor-pointer"
                aria-label="Close image preview"
              >
                <X size={20} />
              </button>
            </div>
            <div className="max-h-[75vh] overflow-auto flex items-center justify-center bg-paper-100 p-2">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title} 
                className="max-h-[72vh] w-auto object-contain border border-earth-300"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
