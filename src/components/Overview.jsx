import React, { useState } from 'react';
import { Mail, ExternalLink, Check, Copy, Sparkles } from 'lucide-react';
import TornDivider from './TornDivider';
import WashiTape from './WashiTape';
import FallingPetals from './FallingPetals';

export default function Overview({ content }) {
  const o = content.overview;
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(o.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      id="overview" 
      className="relative pt-16 pb-24 px-4 sm:px-6 lg:px-8 bg-[#88BBD3] overflow-visible"
    >
      {/* Background sky dots & paper texture */}
      <div className="absolute inset-0 paper-grain pointer-events-none" />

      {/* Decorative botanical bouquet top right (echoing Template.pdf Page 1 & 2) */}
      <div className="absolute top-10 right-6 sm:right-16 w-32 sm:w-44 opacity-85 pointer-events-none rotate-12 hidden md:block z-20">
        <img src="/assets/collage_elem_34.png" alt="Tulips motif" className="w-full h-full object-contain" />
      </div>

      {/* Decorative yellow star top left with interactive wobble easter egg */}
      <div className="scrapbook-interactive-star absolute top-12 left-10 text-yellow-300 z-20 hidden lg:block opacity-90 animate-pulse-glow" title="Touch the star!">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.6 8.4L23.4 8.4L16.3 13.6L19 22L12 16.8L5 22L7.7 13.6L0.6 8.4L9.4 8.4L12 0Z"/>
        </svg>
      </div>

      {/* Large Notebook Paper Spread with entrance assembly animation */}
      <div 
        data-reveal="paper"
        className="relative z-10 max-w-7xl mx-auto bg-[#FAF6F0] p-6 sm:p-10 lg:p-14 border-2 border-earth-900 shadow-[10px_10px_0_rgba(42,24,21,0.25)] overflow-visible"
      >
        {/* Subtle Falling Sakura Petals & Fresh Leaves on Overview spread (contained inside) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <FallingPetals count={16} className="opacity-95 z-0" />
        </div>
        
        {/* Binder clip at top center pinning the entire page */}
        <div 
          data-reveal="sticker"
          className="delay-150 absolute -top-7 left-1/2 -translate-x-1/2 w-14 sm:w-16 h-14 z-30 pointer-events-none"
        >
          <img src="/assets/collage_elem_40.png" alt="Binder clip" className="w-full h-full object-contain" />
        </div>

        {/* Editorial Section Masthead */}
        <div 
          data-reveal="heading"
          className="delay-100 relative mb-12 border-b-2 border-earth-900/80 pb-4"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="template-banner-pink text-xs uppercase tracking-widest font-mono">
                01 — Overview
              </span>
              <span className="text-earth-700 font-mono text-xs hidden sm:inline-block font-semibold">
                Spread 01 · Profile & Structural Architecture
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-editorial-script text-lg text-earth-800 font-bold hidden md:inline-block">
                ~ monograph opening spread ~
              </span>
              <span className="text-xs font-mono text-earth-600 uppercase tracking-wider font-bold">P. 01</span>
            </div>
          </div>
        </div>
        
        {/* Open 3-Column Editorial Spread (No rounded cards!) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: Photo Frame, Badge, Quote, Connect, Me in 3 Words */}
          {/* ========================================================= */}
          <div className="lg:col-span-4 xl:col-span-3 space-y-7">
            
            {/* Retro rectangular framed photo with tape & doodles matching Template.pdf */}
            <div data-reveal="photo" className="relative mx-auto max-w-[280px] sm:max-w-[310px]">
              
              {/* Washi tape pinning top of frame */}
              <div className="scrapbook-interactive-tape absolute -top-3.5 left-1/2 -translate-x-1/2 w-28 h-6 z-30 opacity-80 pointer-events-none -rotate-1">
                <img src="/assets/collage_elem_39.png" alt="Washi tape" className="w-full h-full object-contain" />
              </div>

              {/* Hand-drawn star doodle top right */}
              <div className="scrapbook-interactive-star absolute -top-5 -right-3 text-accent-terracotta z-20 animate-pulse-glow" title="Touch the star!">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14.6 8.4L23.4 8.4L16.3 13.6L19 22L12 16.8L5 22L7.7 13.6L0.6 8.4L9.4 8.4L12 0Z"/>
                </svg>
              </div>

              {/* Rectangular print frame with physical tactile scrapbook lift, tilt & subtle shadow transition */}
              <div className="group relative p-2.5 bg-white border-2 border-earth-900 shadow-[6px_6px_0_rgba(42,24,21,0.18)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:rotate-[-0.75deg] hover:shadow-[10px_10px_0_rgba(42,24,21,0.22)] cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden border border-earth-900/30 bg-paper-200">
                  <img 
                    src="/assets/profile.jpg" 
                    alt={o.name}
                    className="w-full h-full object-cover object-top transition-all duration-700 ease-out group-hover:scale-105 group-hover:contrast-[1.03] group-hover:brightness-[1.02]"
                  />
                  
                  {/* Subtle warm vintage film light sheen overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-rosewood-900/10 via-transparent to-amber-100/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>

                {/* "hello!" speech bubble badge on bottom right with playful pop animation on hover */}
                <div className="absolute bottom-4 right-4 bg-paper-50 text-earth-900 font-editorial-serif font-bold text-xs px-3.5 py-1 border-2 border-earth-900 shadow-[2px_2px_0_rgba(42,24,21,0.3)] transform -rotate-2 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-1 group-hover:bg-[#FEE78A]">
                  {o.badgeHello}
                </div>
              </div>

              {/* Wavy ink doodle underline */}
              <div className="absolute -bottom-4 -left-3 z-20">
                <svg width="65" height="25" viewBox="0 0 100 40" fill="none" stroke="#3A6878" strokeWidth="5" strokeLinecap="round">
                  <path d="M10,25 Q30,5 50,25 T90,20" />
                </svg>
              </div>
            </div>

            {/* Quote Block — Open editorial styling with vertical rule */}
            <div data-reveal="text" className="delay-150 pt-2">
              <div className="border-l-3 border-earth-900 pl-4 py-1.5">
                <p className="font-editorial-serif italic text-earth-900 text-base sm:text-lg lg:text-[1.15rem] leading-relaxed font-medium">
                  “{o.quote}”
                </p>
              </div>
            </div>

            {/* Direct Connect Channels (Rectangular postal styling) */}
            <div data-reveal="sticker" className="delay-200 space-y-3 pt-2">
              <div className="flex items-center gap-2 pb-1.5 border-b border-earth-300">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-earth-900 bg-[#EBBEC3]/70 px-2.5 py-1 border border-earth-900/30">
                  {o.connect}
                </span>
                <span className="text-earth-600 text-xs font-mono font-medium">✈ direct channels</span>
              </div>

              {/* Email Box */}
              <div className="flex items-center justify-between gap-2 bg-white border-2 border-earth-900 p-3 text-xs sm:text-sm font-mono text-earth-900 shadow-[3px_3px_0_rgba(42,24,21,0.12)]">
                <div className="flex items-center gap-2.5 truncate">
                  <Mail size={15} className="text-rosewood-600 shrink-0" />
                  <span className="truncate font-semibold">{o.email}</span>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-1.5 text-earth-600 hover:text-earth-900 focus:outline-none shrink-0 hover:bg-paper-100"
                  title="Copy email address"
                  aria-label="Copy email"
                >
                  {copied ? <Check size={15} className="text-emerald-700" /> : <Copy size={15} />}
                </button>
              </div>

              {/* ORCID Box */}
              <a
                href={o.orcid}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-2 bg-white border-2 border-earth-900 p-3 text-xs sm:text-sm font-mono text-earth-900 shadow-[3px_3px_0_rgba(42,24,21,0.12)] hover:bg-paper-50 transition-colors"
              >
                <div className="flex items-center gap-2.5 truncate">
                  <span className="w-4 h-4 rounded-full bg-[#A6CE39] text-white flex items-center justify-center font-bold text-[10px] shrink-0">iD</span>
                  <span className="truncate font-semibold">{o.orcidLabel}</span>
                </div>
                <ExternalLink size={14} className="text-earth-600 shrink-0" />
              </a>
            </div>

            {/* Me in 3 words: Torn Notebook Lined Paper Sheet with Tape (Moved to Column 1 directly below Connect) */}
            <div data-reveal="paper" className="delay-250 pt-2 relative">
              <div className="relative p-5 sm:p-6 bg-white border-2 border-earth-400 shadow-[5px_5px_0_rgba(42,24,21,0.12)] notebook-ruled">
                {/* Washi tape at corner */}
                <div data-reveal="sticker" className="delay-300 absolute -top-3.5 right-6 w-24 sm:w-28 h-6 opacity-85 pointer-events-none">
                  <div className="living-stationery-tape w-full h-full" style={{ '--tape-rot': '2deg' }}>
                    <img src="/assets/collage_elem_39.png" alt="Tape" className="w-full h-full object-contain" />
                  </div>
                </div>

                <h3 className="font-editorial-serif font-black text-lg sm:text-xl text-earth-900 mb-4 whitespace-nowrap">
                  {o.meIn3WordsTitle}
                </h3>

                <div className="space-y-3.5 text-left">
                  {o.meIn3Words.map((item, idx) => (
                    <div key={idx} className="block text-left">
                      <span className="font-black text-earth-900 font-editorial-serif text-lg sm:text-xl block leading-tight">
                        {item.word}
                      </span>
                      <p className="text-earth-800 italic font-editorial-script text-lg sm:text-xl leading-snug mt-0.5 text-left">
                        “{item.desc}”
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* ========================================================= */}
          {/* ========================================================= */}
          {/* CENTER COLUMN: Bio, Expertise + Soft Skills, Tools + Language + Academic Snapshot */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 xl:col-span-6 space-y-8">
            
            {/* Identity & Short Bio with Muted Pink Highlighter */}
            <div data-reveal="heading" className="delay-100">
              <div className="inline-block">
                <h2 className="font-editorial-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-black text-earth-900 tracking-tight leading-[1.15] pink-marker">
                  <span>I’m Nguyen Nhu</span>
                  <br />
                  <span>Hong Ngoc</span>
                </h2>
              </div>
              <p className="text-rosewood-600 font-bold text-lg sm:text-xl lg:text-[1.5rem] mt-3 font-mono tracking-wide leading-snug">
                {o.role}
              </p>
              <p data-reveal="text" className="delay-200 text-earth-800 text-base sm:text-lg lg:text-[1.15rem] leading-relaxed mt-5 font-sans text-justify">
                {o.intro}
              </p>
            </div>

            {/* Main Content Columns: [Expertise] & [Tools -> Language -> Soft Skills] */}
            <div data-reveal="paper" className="delay-200 grid grid-cols-1 sm:grid-cols-2 gap-7 pt-5 border-t border-earth-300 items-start">
              
              {/* SUB-COLUMN A: EXPERTISE */}
              <div className="space-y-7">
                {/* Expertise List */}
                <div className="space-y-3.5">
                  <h3 className="font-editorial-serif font-black text-lg sm:text-xl text-earth-900 pb-1.5 border-b border-earth-300 flex items-center gap-2 tracking-wide uppercase">
                    <span className="w-2 h-2 bg-earth-900 shrink-0" />
                    {o.expertiseTitle}
                  </h3>
                  <div className="space-y-4 text-earth-800">
                    <div>
                      <span className="font-mono text-xs uppercase tracking-wider text-rosewood-600 font-bold block mb-1.5">
                        Research & Modeling
                      </span>
                      <ul className="space-y-1.5 pl-2.5 border-l-2 border-earth-300 text-sm sm:text-base font-medium">
                        {o.expertiseResearch.map((item, idx) => (
                          <li key={idx} className="hover:text-earth-900 transition-colors leading-snug">• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="font-mono text-xs uppercase tracking-wider text-accent-blue font-bold block mb-1.5">
                        Domain & Operations
                      </span>
                      <ul className="space-y-1.5 pl-2.5 border-l-2 border-earth-300 text-sm sm:text-base font-medium">
                        {o.expertiseDomain.map((item, idx) => (
                          <li key={idx} className="hover:text-earth-900 transition-colors leading-snug">• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* SUB-COLUMN B: TOOLS -> LANGUAGE -> SOFT SKILLS */}
              <div className="space-y-7">
                {/* Tools */}
                <div>
                  <h3 className="font-editorial-serif font-black text-lg sm:text-xl text-earth-900 pb-1.5 border-b border-earth-300 flex items-center gap-2 tracking-wide uppercase">
                    <span className="w-2 h-2 bg-accent-terracotta shrink-0" />
                    {o.toolsTitle}
                  </h3>
                  <div className="flex flex-wrap gap-x-5 gap-y-3 pt-2 items-center">
                    {o.tools.map((t, idx) => {
                      const name = typeof t === 'string' ? t : t.name;
                      const icon = typeof t === 'object' && t.icon ? t.icon : null;
                      return (
                        <div 
                          key={idx} 
                          className="text-earth-900 font-mono text-xs sm:text-sm font-bold inline-flex items-center gap-2.5 py-1"
                        >
                          {icon && (
                            <img 
                              src={icon} 
                              alt="" 
                              className="w-12 h-12 object-contain shrink-0" 
                              loading="lazy"
                            />
                          )}
                          <span>{name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Language */}
                <div>
                  <h3 className="font-editorial-serif font-black text-lg sm:text-xl text-earth-900 pb-1.5 border-b border-earth-300 flex items-center gap-2 tracking-wide uppercase">
                    <span className="w-2 h-2 bg-accent-sage shrink-0" />
                    {o.languageTitle}
                  </h3>
                  <div className="space-y-2 text-sm sm:text-base text-earth-800 pt-1.5">
                    {o.languages.map((l, idx) => (
                      <div key={idx} className="flex justify-between items-center py-1 border-b border-earth-200">
                        <span className="font-bold text-earth-900">{l.lang}</span>
                        <span className="text-earth-600 font-mono text-xs sm:text-sm font-semibold">{l.level}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Soft Skills: Placed below Language (in place of Academic Snapshot) */}
                <div className="pt-2 border-t border-earth-200">
                  <h3 className="font-editorial-serif font-black text-base sm:text-lg text-earth-900 uppercase tracking-wider mb-3">
                    {o.softSkillsTitle}
                  </h3>
                  <div className="flex flex-col items-start space-y-2">
                    {o.softSkills.map((s, idx) => (
                      <span 
                        key={idx} 
                        className="editorial-tag bg-paper-100 hover:bg-earth-900 hover:text-paper-50 transition-colors cursor-default text-xs sm:text-sm font-semibold border border-earth-900/40 px-3 py-1 block w-fit"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Experience Open Ledger -> Education Open Ledger */}
          {/* ========================================================= */}
          <div className="lg:col-span-3 xl:col-span-3 space-y-7">
            
            {/* Experience Open Ledger */}
            <div data-reveal="paper" className="delay-200 border-2 border-earth-900 bg-white p-5 sm:p-6 shadow-[5px_5px_0_rgba(42,24,21,0.15)] hover-editorial-lift">
              <div className="flex justify-between items-center mb-4 pb-2 border-b-2 border-earth-900">
                <h3 className="font-editorial-serif font-black text-lg sm:text-xl text-earth-900 uppercase tracking-wider">
                  {o.experienceTitle}
                </h3>
              </div>

              <div className="space-y-4">
                {(o.experienceGroups || []).map((grp, gIdx) => (
                  <div key={gIdx} className="space-y-1.5 pb-3.5 last:pb-0 border-b last:border-b-0 border-earth-200">
                    <div className="text-xs sm:text-sm font-mono uppercase tracking-wider text-rosewood-600 font-black">
                      {grp.org}
                    </div>

                    <div className="text-xs font-bold text-earth-900">
                      {grp.role}
                    </div>

                    <div className="pt-1 space-y-1 pl-2.5 border-l-2 border-earth-900">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-earth-600 font-bold block">
                        {grp.events.length > 1 ? 'Events:' : 'Event:'}
                      </span>
                      {grp.events.map((ev, eIdx) => (
                        <div key={eIdx} className="flex items-baseline justify-between gap-1 text-xs text-earth-800">
                          <span className="font-semibold leading-snug">• {ev.name}</span>
                          <span className="font-mono text-[11px] text-earth-600 shrink-0 font-bold">· {ev.year}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Open Ledger: DIRECTLY BELOW EXPERIENCE IN COLUMN 3 */}
            <div data-reveal="paper" className="delay-300 border-2 border-earth-900 bg-white p-5 sm:p-6 shadow-[5px_5px_0_rgba(42,24,21,0.15)] hover-editorial-lift">
              <h3 className="font-editorial-serif font-black text-lg sm:text-xl text-earth-900 uppercase tracking-wider mb-4 pb-2 border-b-2 border-earth-900">
                {o.educationTitle}
              </h3>

              <div className="space-y-3.5">
                {o.eduItems.map((edu, idx) => (
                  <div 
                    key={idx} 
                    className={`p-3.5 border-2 text-xs sm:text-sm space-y-1.5 ${
                      edu.highlight 
                        ? 'bg-[#FAF0F1] border-rosewood-500' 
                        : 'bg-paper-100 border-earth-400'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className={`font-mono text-xs font-bold px-2 py-0.5 ${
                        edu.highlight ? 'bg-rosewood-600 text-white' : 'bg-earth-800 text-paper-50'
                      }`}>
                        {edu.period}
                      </span>
                      {edu.highlight && (
                        <span className="text-xs uppercase font-black text-rosewood-600 tracking-wider">
                          Current Degree
                        </span>
                      )}
                    </div>
                    <div className="font-black text-earth-900 text-sm sm:text-base pt-0.5 font-editorial-serif leading-snug">
                      {edu.school}
                    </div>
                    <div className="text-earth-800 font-semibold text-xs">
                      {edu.major}
                    </div>
                    <div className="text-xs text-earth-600 font-mono font-medium">
                      {edu.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
