import React, { useState } from 'react';
import { Mail, ExternalLink, Check, Copy, BookMarked, Sparkles } from 'lucide-react';
import TornDivider from './TornDivider';
import WashiTape from './WashiTape';

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

      {/* Decorative yellow star top left */}
      <div className="absolute top-12 left-10 text-yellow-300 z-20 hidden lg:block opacity-90 animate-pulse-glow">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.6 8.4L23.4 8.4L16.3 13.6L19 22L12 16.8L5 22L7.7 13.6L0.6 8.4L9.4 8.4L12 0Z"/>
        </svg>
      </div>

      {/* Large Notebook Paper Spread (As seen in Template.pdf Page 2 & 3) */}
      <div className="relative z-10 max-w-7xl mx-auto bg-[#FAF6F0] p-6 sm:p-10 lg:p-14 border-2 border-earth-900 shadow-[10px_10px_0_rgba(42,24,21,0.25)]">
        
        {/* Binder clip at top center pinning the entire page */}
        <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 sm:w-16 h-14 z-30 pointer-events-none">
          <img src="/assets/collage_elem_40.png" alt="Binder clip" className="w-full h-full object-contain" />
        </div>

        {/* Editorial Section Masthead */}
        <div className="relative mb-12 border-b-2 border-earth-900/80 pb-4">
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
          {/* LEFT COLUMN: Photo Frame, Badge, Quote, Connect (3.5 cols) */}
          {/* ========================================================= */}
          <div className="lg:col-span-4 xl:col-span-3.5 space-y-7">
            
            {/* Retro rectangular framed photo with tape & doodles matching Template.pdf */}
            <div className="relative mx-auto max-w-[280px] sm:max-w-[310px]">
              
              {/* Washi tape pinning top of frame */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-28 h-6 z-30 opacity-80 pointer-events-none -rotate-1">
                <img src="/assets/collage_elem_39.png" alt="Washi tape" className="w-full h-full object-contain" />
              </div>

              {/* Hand-drawn star doodle top right */}
              <div className="absolute -top-5 -right-3 text-accent-terracotta z-20 animate-pulse-glow">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14.6 8.4L23.4 8.4L16.3 13.6L19 22L12 16.8L5 22L7.7 13.6L0.6 8.4L9.4 8.4L12 0Z"/>
                </svg>
              </div>

              {/* Rectangular print frame with thin dark border and offset shadow */}
              <div className="relative p-2.5 bg-white border-2 border-earth-900 shadow-[6px_6px_0_rgba(42,24,21,0.18)]">
                <div className="relative aspect-[3/4] overflow-hidden border border-earth-900/30 bg-paper-200">
                  <img 
                    src="/assets/profile.jpg" 
                    alt={o.name}
                    className="w-full h-full object-cover object-top hover:scale-103 transition-transform duration-700"
                  />
                </div>

                {/* "hello!" / "xin chào!" speech bubble badge on bottom right of photo */}
                <div className="absolute bottom-4 right-4 bg-paper-50 text-earth-900 font-editorial-serif font-bold text-xs px-3.5 py-1 border-2 border-earth-900 shadow-[2px_2px_0_rgba(42,24,21,0.3)] transform -rotate-2">
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
            <div className="pt-2">
              <div className="border-l-3 border-earth-900 pl-4 py-1.5">
                <p className="font-editorial-serif italic text-earth-900 text-base sm:text-lg lg:text-[1.15rem] leading-relaxed font-medium">
                  “{o.quote}”
                </p>
              </div>
            </div>

            {/* Direct Connect Channels (Rectangular postal styling) */}
            <div className="space-y-3 pt-2">
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

          </div>

          {/* ========================================================= */}
          {/* CENTER COLUMN: Bio, Expertise, Tools, 3 Words, Soft Skills (5 cols) */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Identity & Short Bio with Muted Pink Highlighter */}
            <div>
              <div className="inline-block">
                <h2 className="font-editorial-serif text-4xl sm:text-5xl lg:text-[3.8rem] font-black text-earth-900 tracking-tight leading-[1.05] pink-marker">
                  I’m {o.name}
                </h2>
              </div>
              <p className="text-rosewood-600 font-bold text-lg sm:text-xl lg:text-[1.5rem] mt-3 font-mono tracking-wide leading-snug">
                {o.role}
              </p>
              <p className="text-earth-800 text-base sm:text-lg lg:text-[1.15rem] leading-relaxed mt-5 font-sans text-justify">
                {o.intro}
              </p>
            </div>

            {/* Expertise & Tools: Open Typographic Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-5 border-t border-earth-300">
              
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

              {/* Tools & Language */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-editorial-serif font-black text-lg sm:text-xl text-earth-900 pb-1.5 border-b border-earth-300 flex items-center gap-2 tracking-wide uppercase">
                    <span className="w-2 h-2 bg-accent-terracotta shrink-0" />
                    {o.toolsTitle}
                  </h3>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {o.tools.map((t, idx) => (
                      <span 
                        key={idx} 
                        className="editorial-tag text-earth-900 bg-white font-mono text-xs sm:text-sm font-bold border border-earth-900 shadow-2xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

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
              </div>

            </div>

            {/* Me in 3 words: Torn Notebook Lined Paper Sheet with Tape */}
            <div className="pt-3 relative">
              <div className="relative p-6 bg-white border-2 border-earth-400 shadow-[5px_5px_0_rgba(42,24,21,0.12)] notebook-ruled">
                {/* Washi tape at corner */}
                <div className="absolute -top-3.5 right-6 w-28 h-6 opacity-85 pointer-events-none rotate-2">
                  <img src="/assets/collage_elem_39.png" alt="Tape" className="w-full h-full object-contain" />
                </div>

                <h3 className="font-editorial-serif font-black text-lg sm:text-xl text-earth-900 mb-3 flex items-center gap-2">
                  <span>{o.meIn3WordsTitle}</span>
                  <span className="font-editorial-script text-rosewood-600 font-bold text-base">~ self reflection ~</span>
                </h3>

                <div className="space-y-3 text-sm">
                  {o.meIn3Words.map((item, idx) => (
                    <div key={idx} className="flex items-baseline gap-2.5">
                      <span className="font-black text-earth-900 font-editorial-serif text-lg sm:text-xl shrink-0">
                        {item.word}:
                      </span>
                      <span className="text-earth-800 italic font-editorial-script text-lg sm:text-xl">“{item.desc}”</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Soft Skills: Rectangular Archival Stamp Tags */}
            <div className="pt-2">
              <h3 className="font-editorial-serif font-black text-base sm:text-lg text-earth-900 uppercase tracking-wider mb-2.5">
                {o.softSkillsTitle}
              </h3>
              <div className="flex flex-wrap gap-2">
                {o.softSkills.map((s, idx) => (
                  <span 
                    key={idx} 
                    className="editorial-tag bg-paper-100 hover:bg-earth-900 hover:text-paper-50 transition-colors cursor-default text-xs sm:text-sm font-semibold border border-earth-900/40 px-3 py-1"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Experience, Education, Academic Snapshot (3.5 cols) */}
          {/* ========================================================= */}
          <div className="lg:col-span-3 xl:col-span-3.5 space-y-8">
            
            {/* Experience Open Ledger */}
            <div className="border-2 border-earth-900 bg-white p-6 shadow-[5px_5px_0_rgba(42,24,21,0.15)]">
              <div className="flex justify-between items-center mb-4 pb-2 border-b-2 border-earth-900">
                <h3 className="font-editorial-serif font-black text-lg sm:text-xl text-earth-900 uppercase tracking-wider">
                  {o.experienceTitle}
                </h3>
                <span className="text-xs font-mono text-earth-600 font-bold">{o.orgPeriod || '2023–Present'}</span>
              </div>

              <div className="space-y-5">
                {(o.experienceGroups || []).map((grp, gIdx) => (
                  <div key={gIdx} className="space-y-2 pb-4 last:pb-0 border-b last:border-b-0 border-earth-200">
                    <div className="text-sm sm:text-base font-mono uppercase tracking-wider text-rosewood-600 font-black">
                      {grp.org}
                    </div>

                    <div className="text-xs sm:text-sm font-bold text-earth-900">
                      <span className="text-earth-500 font-normal">Position: </span>
                      {grp.role}
                    </div>

                    <div className="pt-1 space-y-1.5 pl-3 border-l-2 border-earth-900">
                      <span className="text-xs font-mono uppercase tracking-wider text-earth-600 font-bold block">
                        {grp.events.length > 1 ? 'Events:' : 'Event:'}
                      </span>
                      {grp.events.map((ev, eIdx) => (
                        <div key={eIdx} className="flex items-baseline justify-between gap-1.5 text-xs sm:text-sm text-earth-800">
                          <span className="font-semibold text-xs sm:text-sm leading-snug">• {ev.name}</span>
                          <span className="font-mono text-xs text-earth-600 shrink-0 font-bold">· {ev.year}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Open Ledger */}
            <div className="border-2 border-earth-900 bg-white p-6 shadow-[5px_5px_0_rgba(42,24,21,0.15)]">
              <h3 className="font-editorial-serif font-black text-lg sm:text-xl text-earth-900 uppercase tracking-wider mb-4 pb-2 border-b-2 border-earth-900">
                {o.educationTitle}
              </h3>

              <div className="space-y-4">
                {o.eduItems.map((edu, idx) => (
                  <div 
                    key={idx} 
                    className={`p-4 border-2 text-xs sm:text-sm space-y-1.5 ${
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
                    <div className="font-black text-earth-900 text-base sm:text-lg pt-1 font-editorial-serif">
                      {edu.school}
                    </div>
                    <div className="text-earth-800 font-semibold text-xs sm:text-sm">
                      {edu.major}
                    </div>
                    <div className="text-xs text-earth-600 font-mono font-medium">
                      {edu.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Snapshot — Vintage Catalog Matrix */}
            <div className="border-3 border-earth-900 bg-earth-900 text-paper-50 p-6 shadow-[6px_6px_0_rgba(42,24,21,0.25)] relative overflow-hidden">
              <div className="flex items-center gap-2.5 mb-4 pb-2.5 border-b border-earth-700">
                <BookMarked size={18} className="text-[#EBBEC3]" />
                <h3 className="font-editorial-serif font-black text-base sm:text-lg text-paper-50 uppercase tracking-wider">
                  {o.snapshotTitle}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                {o.snapshotStats.map((st, idx) => (
                  <div key={idx} className="bg-earth-800/90 p-3.5 border border-earth-700">
                    <div className="font-editorial-serif text-3xl font-black text-[#EBBEC3]">
                      {st.num}
                    </div>
                    <div className="text-xs font-mono text-paper-200 uppercase tracking-wider leading-tight mt-1 font-semibold">
                      {st.label}
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
