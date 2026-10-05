import React, { useState } from 'react';
import { Mail, ExternalLink, Copy, MapPin, Sparkles } from 'lucide-react';

/**
 * Hand-drawn 8-point Starburst matching Template.pdf Page 9
 */
const Starburst = ({ size = 48, color = "#00C0F0", className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path 
      d="M50 4 L53 38 L84 16 L62 44 L96 50 L62 56 L84 84 L53 62 L50 96 L47 62 L16 84 L38 56 L4 50 L38 44 L16 16 L47 38 Z" 
      fill={color} 
    />
  </svg>
);

export default function Contact({ content }) {
  const ct = content.contact;
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(ct.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      id="contact" 
      className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#88BBD3] overflow-visible"
      style={{
        backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.45) 1.5px, transparent 1.5px)',
        backgroundSize: '28px 28px'
      }}
    >
      {/* Background grain texture */}
      <div className="absolute inset-0 paper-grain pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Editorial Section Masthead */}
        <div data-reveal="heading" className="flex items-center justify-between gap-4 mb-10 pb-3 border-b border-earth-900/30">
          <div className="flex items-center gap-3">
            <span className="scrapbook-interactive-stamp font-mono text-xs uppercase tracking-widest text-earth-900 font-bold bg-[#FAF6F0] px-3.5 py-1.5 border-2 border-earth-900 shadow-[2px_2px_0_rgba(42,24,21,0.2)]">
              {ct.sectionNumber} — {ct.sectionTitle}
            </span>
            <span className="text-white drop-shadow-xs font-mono text-xs hidden sm:inline-block font-bold">
              Closing Spread & Collaborative Invitation
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-editorial-script text-xl text-white drop-shadow-xs hidden md:inline-block font-bold">
              ~ final dispatch ~
            </span>
            <span className="text-xs sm:text-sm font-mono text-earth-900 bg-white/95 px-3 py-1 border border-earth-900 uppercase tracking-wider font-black">
              SPREAD · 05
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TEMPLATE.PDF PAGE 9 RECONSTRUCTION:                                      */}
        {/* TWO-PAGE OPEN ALBUM SPREAD ON SKY BLUE CANVAS                            */}
        {/* LEFT PAGE: Pink Gingham Tape, HERO SINGLE IMAGE (17.jpg), Cyan Starburst */}
        {/* CENTER CREASE: Soft book spine crease shadow                             */}
        {/* RIGHT PAGE: Cyan Starburst, Script "Contact Me", 4 Rounded Color Pills,  */}
        {/*             Yellow Starburst, Blue Gingham Tape                          */}
        {/* ========================================================================= */}
        <div data-reveal="paper" className="delay-150 relative">
          
          {/* Torn letter paper texture peeking out from the left edge (Template Page 9 echo) */}
          <div 
            className="absolute -left-3 sm:-left-6 top-8 bottom-8 w-8 sm:w-12 bg-[#F4EFE6] opacity-80 border-l-2 border-y-2 border-earth-900/30 -rotate-1 pointer-events-none hidden md:block rounded-l-sm"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent 0px, transparent 18px, rgba(42,24,21,0.06) 19px, rgba(42,24,21,0.06) 20px)'
            }}
          />

          {/* Torn letter paper texture peeking out from the right edge (Template Page 9 echo) */}
          <div 
            className="absolute -right-3 sm:-right-6 top-10 bottom-10 w-8 sm:w-12 bg-[#F4EFE6] opacity-80 border-r-2 border-y-2 border-earth-900/30 rotate-1 pointer-events-none hidden md:block rounded-r-sm"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent 0px, transparent 18px, rgba(42,24,21,0.06) 19px, rgba(42,24,21,0.06) 20px)'
            }}
          />

          {/* The Physical Open Book Sheet */}
          <div className="relative bg-white sm:bg-[#FAF9F6] border-3 border-earth-900 shadow-[18px_18px_0_rgba(42,24,21,0.32)] rounded-xs overflow-visible">
            
            {/* Center spine vertical crease (Soft book fold shadow) */}
            <div 
              className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-8 -translate-x-1/2 z-20 pointer-events-none"
              style={{
                background: 'linear-gradient(to right, transparent, rgba(42,24,21,0.04) 40%, rgba(42,24,21,0.12) 50%, rgba(42,24,21,0.04) 60%, transparent)'
              }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[640px]">
              
              {/* ----------------------------------------------------------------- */}
              {/* LEFT PAGE OF THE BOOK: HERO SINGLE IMAGE (IMAGE 17 ONLY)          */}
              {/* ----------------------------------------------------------------- */}
              <div className="lg:col-span-5 p-6 sm:p-10 lg:p-12 flex flex-col justify-between relative border-b-2 lg:border-b-0 lg:border-r border-earth-900/15 bg-[#FCFBF8]">
                
                {/* Pink Gingham Washi Tape at top-left (Pure CSS rendered, Page 9 exact replica) */}
                <div className="flex justify-start pt-1 pb-4">
                  <div 
                    className="w-32 sm:w-40 h-7 sm:h-8 transform -rotate-1 shadow-xs border border-rose-400/40"
                    style={{
                      backgroundColor: '#FDE2E4',
                      backgroundImage: `
                        repeating-linear-gradient(0deg, rgba(226, 109, 92, 0.45) 0px, rgba(226, 109, 92, 0.45) 7px, transparent 7px, transparent 14px),
                        repeating-linear-gradient(90deg, rgba(226, 109, 92, 0.45) 0px, rgba(226, 109, 92, 0.45) 7px, transparent 7px, transparent 14px)
                      `
                    }}
                  />
                </div>

                {/* Polaroid Photo Frame: Containing EXACTLY AND ONLY Image 17 */}
                <div data-reveal="photo" className="delay-200 my-auto py-2 flex flex-col items-center relative">
                  
                  {/* Polaroid Frame */}
                  <div className="relative w-full max-w-[280px] sm:max-w-[320px] bg-white p-3 sm:p-3.5 pb-9 sm:pb-11 border-2 border-earth-900 shadow-[10px_10px_0_rgba(42,24,21,0.18)] transform -rotate-2 hover:rotate-0 hover:-translate-y-2 hover:shadow-[14px_14px_0_rgba(42,24,21,0.24)] transition-all duration-500 cursor-pointer group">
                    
                    {/* Semi-translucent Beige Washi Tape crossing the top-left corner */}
                    <div 
                      className="scrapbook-interactive-tape absolute -top-3.5 -left-4 w-28 sm:w-32 h-7 bg-[#EFE8D6]/90 backdrop-blur-xs border-y border-earth-400/60 shadow-2xs transform -rotate-12 pointer-events-none z-10"
                    />

                    {/* Image 17: Natural sunlight portrait */}
                    <div className="aspect-[3/4] overflow-hidden bg-earth-100 border border-earth-300">
                      <img 
                        src="/assets/17.jpg" 
                        alt="Nguyen Nhu Hong Ngoc" 
                        className="w-full h-full object-cover object-top group-hover:scale-104 transition-transform duration-700 ease-out" 
                      />
                    </div>

                    {/* Handwritten polaroid signature caption */}
                    <div className="pt-3 px-1 text-center">
                      <span className="font-editorial-script text-earth-900 text-xl sm:text-2xl font-bold block leading-snug">
                        Nguyen Nhu Hong Ngoc
                      </span>
                      <span className="font-mono text-[10px] text-earth-500 uppercase tracking-widest font-semibold block pt-0.5">
                        International Business Economics · FTU
                      </span>
                    </div>
                  </div>

                  {/* Cyan Hand-drawn Starburst Doodle positioned next to the photo (Template Page 9 echo) */}
                  <div className="absolute -bottom-6 -left-2 sm:-left-4 z-20 pointer-events-none animate-micro-twinkle">
                    <Starburst size={42} color="#00C0F0" />
                  </div>

                </div>

                {/* Bottom of Left Page: Archival note strip */}
                <div className="pt-4 border-t border-earth-900/10 flex items-center justify-between text-xs font-mono text-earth-600">
                  <span className="font-bold">PAGE 09 // CLOSING FOLIO</span>
                  <span className="text-rosewood-600 font-bold">AUTUMN · 2026</span>
                </div>

              </div>

              {/* ----------------------------------------------------------------- */}
              {/* RIGHT PAGE OF THE BOOK: SCRIPT TITLE & 4 COLOR PILLS STACK        */}
              {/* ----------------------------------------------------------------- */}
              <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between relative bg-white sm:bg-[#FAF9F6]">
                
                {/* Top Right: Large Cyan Hand-drawn Starburst Doodle (Template Page 9 exact replica) */}
                <div className="flex justify-end pr-2 sm:pr-6 pt-1">
                  <Starburst size={54} color="#00C0F0" className="animate-micro-twinkle" />
                </div>

                <div className="space-y-6 max-w-lg mx-auto lg:mx-0 w-full">
                  
                  {/* Script Header: "Contact Me" matching Template Page 9 */}
                  <div className="space-y-2 text-center lg:text-left">
                    <h3 className="font-editorial-script text-5xl sm:text-6xl lg:text-7xl text-earth-950 font-black tracking-tight leading-none">
                      Contact Me
                    </h3>
                    <p className="text-earth-800 text-sm sm:text-base font-sans font-medium leading-relaxed pt-1 text-justify sm:text-left">
                      {ct.statement}
                    </p>
                  </div>

                  {/* 
                    THE 4 STACKED COLOR PILLS WITH THICK BORDERS (PAGE 9 EXACT STRUCTURE):
                    1. Yellow Pill: Location & Institution
                    2. Pink Pill: Direct Email Address with Copy
                    3. Cyan Pill: Verified ORCID Academic Identifier
                    4. Yellow Pill: Collaboration Scope
                  */}
                  <div className="space-y-3.5 pt-1">
                    
                    {/* PILL 1: Yellow (#FEE78A) — University & Location */}
                    <div data-reveal="sticker" className="delay-100 bg-[#FEE78A] border-2 border-earth-900 px-5 sm:px-6 py-3 rounded-full flex items-center justify-center sm:justify-start gap-2.5 shadow-[3px_3px_0_rgba(42,24,21,0.2)] hover:translate-y-[-1px] transition-transform">
                      <MapPin size={17} className="text-earth-900 shrink-0" />
                      <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-earth-900 truncate">
                        Foreign Trade University · Hanoi, Vietnam
                      </span>
                    </div>

                    {/* PILL 2: Pink (#FFB7CE) — Direct Email */}
                    <div data-reveal="sticker" className="delay-200 bg-[#FFB7CE] border-2 border-earth-900 px-5 sm:px-6 py-3 rounded-full flex items-center justify-between shadow-[3px_3px_0_rgba(42,24,21,0.2)] hover:translate-y-[-1px] transition-transform">
                      <div className="flex items-center gap-2.5 truncate">
                        <Mail size={17} className="text-earth-900 shrink-0" />
                        <a 
                          href={`mailto:${ct.email}`}
                          className="font-mono text-xs sm:text-sm font-black text-earth-900 uppercase hover:underline truncate"
                        >
                          {ct.email}
                        </a>
                      </div>
                      <button
                        onClick={copyEmail}
                        className="text-[11px] font-mono font-bold text-earth-900 bg-white/90 hover:bg-white px-3 py-1 rounded-full border border-earth-900 transition-colors shrink-0 shadow-2xs cursor-pointer ml-2"
                        title="Copy email to clipboard"
                      >
                        {copied ? <span className="text-emerald-800 font-bold">Copied!</span> : <><Copy size={11} className="inline mr-1" /> Copy</>}
                      </button>
                    </div>

                    {/* PILL 3: Cyan (#38BDF8) — Verified ORCID Identifier */}
                    <a 
                      data-reveal="sticker"
                      href={ct.orcid}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="delay-300 bg-[#38BDF8] border-2 border-earth-900 px-5 sm:px-6 py-3 rounded-full flex items-center justify-between shadow-[3px_3px_0_rgba(42,24,21,0.2)] hover:translate-y-[-1px] transition-transform cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <span className="w-5 h-5 bg-white text-earth-900 rounded-full flex items-center justify-center font-bold text-[10px] shrink-0 border border-earth-900">iD</span>
                        <span className="font-mono text-xs sm:text-sm font-black text-earth-900 uppercase tracking-wider truncate">
                          ORCID: {ct.orcidId}
                        </span>
                      </div>
                      <ExternalLink size={17} className="text-earth-900 shrink-0 ml-2" />
                    </a>

                    {/* PILL 4: Yellow (#FEE78A) — Collaboration Callout */}
                    <div data-reveal="sticker" className="delay-400 bg-[#FEE78A] border-2 border-earth-900 px-5 sm:px-6 py-3 rounded-full flex items-center justify-center sm:justify-start gap-2.5 shadow-[3px_3px_0_rgba(42,24,21,0.2)] hover:translate-y-[-1px] transition-transform">
                      <Sparkles size={17} className="text-earth-900 shrink-0" />
                      <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-earth-900 truncate">
                        Open to Research & Project Collaboration
                      </span>
                    </div>

                  </div>

                  {/* Editorial Narrative Subtext */}
                  <p className="text-earth-800 text-xs sm:text-sm leading-relaxed font-sans pt-2 border-t border-earth-900/15 text-justify sm:text-left">
                    {ct.subtext}
                  </p>

                </div>

                {/* Bottom of Right Page: Yellow Starburst (left) & Blue Gingham Tape (right) */}
                <div className="flex items-center justify-between pt-6 sm:pt-8">
                  
                  {/* Yellow Hand-drawn Starburst Doodle (Template Page 9 exact replica) */}
                  <Starburst size={48} color="#FEE78A" className="filter drop-shadow-2xs animate-cover-star" />

                  {/* Blue Gingham Washi Tape at bottom-right (Template Page 9 exact replica) */}
                  <div 
                    className="w-32 sm:w-44 h-7 sm:h-8 transform rotate-1 shadow-xs border border-sky-400/50"
                    style={{
                      backgroundColor: '#E0F2FE',
                      backgroundImage: `
                        repeating-linear-gradient(0deg, rgba(56, 140, 210, 0.45) 0px, rgba(56, 140, 210, 0.45) 7px, transparent 7px, transparent 14px),
                        repeating-linear-gradient(90deg, rgba(56, 140, 210, 0.45) 0px, rgba(56, 140, 210, 0.45) 7px, transparent 7px, transparent 14px)
                      `
                    }}
                  />
                </div>

              </div>

            </div>

          </div>

          {/* Closing Editorial Folio Signoff */}
          <div className="mt-8 flex items-center justify-between text-xs font-mono text-white/90 drop-shadow-xs px-2">
            <span className="font-bold">Nguyen Nhu Hong Ngoc · Portfolio 2024–2028</span>
            <span className="font-bold">VOL. 01 // COMPLETE</span>
          </div>

        </div>

      </div>
    </section>
  );
}
