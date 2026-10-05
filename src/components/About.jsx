import React from 'react';
import { Compass, Sparkles, ArrowRight, Quote, Bookmark, GraduationCap, Code } from 'lucide-react';
import WashiTape from './WashiTape';
import FallingPetals from './FallingPetals';

export default function About({ content }) {
  const a = content.about;
  const o = content.overview;

  return (
    <section 
      id="about" 
      className="relative py-28 lg:py-36 px-4 sm:px-6 lg:px-8 bg-[#88BBD3] overflow-visible"
      style={{
        backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.45) 1.5px, transparent 1.5px)',
        backgroundSize: '28px 28px'
      }}
    >
      {/* Background paper grain texture */}
      <div className="absolute inset-0 paper-grain pointer-events-none" />

      {/* Floating Botanical Tulips & Paintbrush in sky canvas */}
      <div className="absolute -top-12 -right-6 w-36 sm:w-52 opacity-85 pointer-events-none transform rotate-12 hidden md:block z-20 animate-cover-brush">
        <img 
          src="/assets/collage_elem_36.png" 
          alt="Paintbrush collage element" 
          className="w-full h-auto object-contain filter drop-shadow-md"
        />
      </div>

      <div className="absolute bottom-6 left-6 w-32 sm:w-44 opacity-85 pointer-events-none z-20 hidden md:block animate-cover-tulip">
        <img 
          src="/assets/collage_elem_34.png" 
          alt="Tulips bouquet" 
          className="w-full h-auto object-contain filter drop-shadow-md"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Editorial Section Masthead */}
        <div className="flex items-center justify-between gap-4 mb-16 pb-4 border-b-2 border-earth-900/40">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-earth-900 font-black bg-[#FAF6F0] px-4 py-1.5 border-2 border-earth-900 shadow-[3px_3px_0_rgba(42,24,21,0.2)]">
              {a.sectionNumber} — {a.sectionTitle}
            </span>
            <span className="text-white drop-shadow-xs font-mono text-xs sm:text-sm hidden sm:inline-block font-bold">
              Identity File & Research Monograph
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-editorial-script text-xl text-white drop-shadow-xs hidden md:inline-block">
              ~ personal archive ~
            </span>
            <span className="text-xs sm:text-sm font-mono text-earth-900 bg-white/95 px-3 py-1 border border-earth-900 uppercase tracking-wider font-black">
              DOSSIER · 02
            </span>
          </div>
        </div>

        {/* 
          V3 RECOMPOSED SPREAD:
          An authentic 3-part open publication spread:
          LEFT: Pinned Photographic Artifacts & Field Specimen
          CENTER: Oversized Editorial Statement, Narrative Text & Lined Notebook Reflection
          RIGHT: Vertical Archival Dossier Index (3 Words, Education timeline & Taxonomy)
        */}
        <div className="relative bg-[#FAF6F0] border-3 border-earth-900 shadow-[16px_16px_0_rgba(42,24,21,0.28)]">
          
          {/* Subtle faint background typographic watermark: "RESEARCH · SYSTEMS · PEOPLE" */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none select-none opacity-[0.035] flex items-center justify-center">
            <span className="font-editorial-serif font-black text-[13vw] uppercase tracking-tighter text-earth-900 whitespace-nowrap -rotate-6">
              RESEARCH · SYSTEMS
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* ======================================================== */}
            {/* COLUMN 1: LEFT PHOTO SPECIMEN (3 cols)                   */}
            {/* ======================================================== */}
            <div className="lg:col-span-3 p-6 sm:p-8 bg-[#F4EFE6]/70 border-b-2 lg:border-b-0 lg:border-r-2 border-earth-900/20 flex flex-col justify-between relative">
              
              {/* Star doodle top left */}
              <div className="absolute -top-3 -left-3 text-yellow-400 z-20 animate-cover-star">
                <svg width="38" height="38" viewBox="0 0 24 24" fill="currentColor" className="filter drop-shadow-xs">
                  <path d="M12 0L14.6 8.4L23.4 8.4L16.3 13.6L19 22L12 16.8L5 22L7.7 13.6L0.6 8.4L9.4 8.4L12 0Z"/>
                </svg>
              </div>

              <div className="space-y-6">
                <div className="border-b border-earth-300 pb-2 flex items-center justify-between">
                  <span className="font-mono text-[11px] font-black uppercase tracking-wider text-earth-800">
                    IDENTIFICATION
                  </span>
                  <span className="text-[10px] font-mono font-bold bg-earth-900 text-white px-2 py-0.5">
                    DOC #02
                  </span>
                </div>

                {/* Primary Photo Specimen with Tape */}
                <div className="relative pt-3 flex flex-col items-center">
                  <div className="w-full max-w-[220px] bg-white p-2.5 pb-6 border-2 border-earth-900 shadow-[5px_5px_0_rgba(42,24,21,0.18)] transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                    {/* Washi tape at top */}
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-28 h-6 opacity-90 pointer-events-none rotate-1">
                      <img src="/assets/collage_elem_39.png" alt="Tape" className="w-full h-full object-contain" />
                    </div>
                    <div className="aspect-[4/5] overflow-hidden bg-earth-200 border border-earth-300">
                      <img src="/assets/profile.jpg" alt="Hong Ngoc" className="w-full h-full object-cover object-top" />
                    </div>
                    <div className="pt-3 text-center">
                      <span className="font-editorial-script text-earth-900 text-base font-bold block">
                        Nguyen Nhu Hong Ngoc
                      </span>
                      <span className="font-mono text-[10px] text-earth-500 uppercase font-semibold">
                        FTU · Hanoi, Vietnam
                      </span>
                    </div>
                  </div>
                </div>

                {/* Secondary Tilted Fieldwork Print */}
                <div className="relative pt-2 hidden sm:flex flex-col items-center">
                  <div className="w-full max-w-[200px] bg-white p-2 pb-4 border border-earth-900 shadow-[4px_4px_0_rgba(42,24,21,0.12)] transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <div className="aspect-[16/10] overflow-hidden bg-earth-200">
                      <img src="/assets/1.jpg" alt="Backstage execution" className="w-full h-full object-cover object-center" />
                    </div>
                    <div className="pt-2 text-center">
                      <span className="font-editorial-script text-earth-800 text-xs font-bold block">
                        fieldwork & operations
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Marginalia Stamp */}
              <div className="mt-8 pt-4 border-t border-earth-300 flex items-center justify-between text-[11px] font-mono text-earth-700">
                <span className="font-bold">STATUS: ENROLLED</span>
                <span className="text-rosewood-600 font-bold">2024–2028</span>
              </div>
            </div>

            {/* ======================================================== */}
            {/* COLUMN 2: CENTER EDITORIAL MANIFESTO (6 cols)            */}
            {/* ======================================================== */}
            <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 space-y-8 flex flex-col justify-between border-b-2 lg:border-b-0 lg:border-r-2 border-earth-900/20">
              
              <div className="space-y-6">
                {/* Signature Pink Banner from Template.pdf */}
                <div className="space-y-3">
                  <div className="template-banner-pink text-3xl sm:text-4xl md:text-5xl tracking-tight transform -rotate-1">
                    hi, i’m hong ngoc
                  </div>
                  
                  <h3 className="font-editorial-serif text-2xl sm:text-3xl lg:text-[2.1rem] font-black text-earth-900 tracking-tight leading-snug">
                    “{a.leadStatement}”
                  </h3>
                </div>

                {/* Narrative Paragraphs */}
                <div className="space-y-5 text-earth-800 text-base sm:text-lg leading-relaxed font-sans text-justify">
                  <p className="first-letter:text-5xl first-letter:font-editorial-serif first-letter:font-black first-letter:mr-2 first-letter:float-left first-letter:text-rosewood-600 leading-relaxed">
                    {a.narrative1}
                  </p>
                  <p className="leading-relaxed">
                    {a.narrative2}
                  </p>
                </div>
              </div>

              {/* Research Foundations (Taxonomic Ledger) */}
              <div className="pt-6 border-t-2 border-earth-900/15 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-wider text-rosewood-600 font-black flex items-center gap-1.5">
                    <span>✦</span>
                    <span>{a.strengthsHeading}</span>
                  </span>
                  <span className="font-mono text-[11px] text-earth-500 font-bold">FOUNDATIONAL PILLARS</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {a.values.map((v, idx) => (
                    <div key={idx} className="bg-white p-3.5 border-2 border-earth-900 shadow-[3px_3px_0_rgba(42,24,21,0.12)] space-y-1.5 hover:-translate-y-1 transition-transform">
                      <div className="font-editorial-serif font-black text-sm text-earth-900 flex items-center justify-between">
                        <span>{v.title}</span>
                        <span className="font-mono text-xs text-rosewood-600 font-bold">0{idx + 1}</span>
                      </div>
                      <p className="text-xs text-earth-700 leading-snug font-medium">
                        {v.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lined Notebook Paper Memo */}
              <div className="relative p-5 bg-[#FAF0F1] border-2 border-rosewood-400 shadow-[4px_4px_0_rgba(42,24,21,0.1)] notebook-ruled overflow-hidden">
                {/* Falling pink sakura petals & green leaves drift under memo text */}
                <FallingPetals count={9} className="opacity-95 z-0" />

                <div className="absolute -top-3.5 left-8 w-24 h-6 opacity-90 pointer-events-none rotate-1 z-10">
                  <img src="/assets/collage_elem_39.png" alt="Tape" className="w-full h-full object-contain" />
                </div>
                <p className="font-editorial-script text-xl sm:text-2xl text-earth-900 leading-snug pt-1 relative z-1">
                  “Bridging theoretical economic equilibrium with real-world operational friction.”
                </p>
                <span className="font-mono text-xs text-rosewood-600 uppercase font-black tracking-wider block text-right mt-1.5 relative z-1">
                  ~ Foreign Trade University · Hanoi ~
                </span>
              </div>

            </div>

            {/* ======================================================== */}
            {/* COLUMN 3: RIGHT ARCHIVAL DOSSIER & EDUCATION (3 cols)    */}
            {/* ======================================================== */}
            <div className="lg:col-span-3 p-6 sm:p-8 bg-[#FDFBF7] space-y-8 flex flex-col justify-between">
              
              <div className="space-y-6">
                {/* Section Index Header */}
                <div className="border-b-2 border-earth-900 pb-2 flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-widest font-black text-earth-900">
                    DOSSIER INDEX
                  </span>
                  <span className="font-editorial-script text-rosewood-600 text-base font-bold">
                    curated data
                  </span>
                </div>

                {/* Me In 3 Words — Notebook Reflection Tags */}
                {o?.meIn3Words && (
                  <div className="space-y-3">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-earth-600 font-black block">
                      PERSONAL PROFILE // 3 WORDS
                    </span>
                    <div className="space-y-2.5">
                      {o.meIn3Words.map((item, idx) => (
                        <div key={idx} className="bg-white p-3 border border-earth-900/30 shadow-[2px_2px_0_rgba(42,24,21,0.08)]">
                          <span className="font-editorial-serif text-sm font-black text-earth-900 block">
                            0{idx + 1}. {item.word}
                          </span>
                          <p className="text-xs text-earth-700 leading-relaxed font-sans mt-1">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Education Timeline Strip */}
                {o?.eduItems && (
                  <div className="space-y-3 pt-2">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-earth-600 font-black flex items-center gap-1.5">
                      <GraduationCap size={14} className="text-earth-900" />
                      <span>{o.educationTitle || 'Education'}</span>
                    </span>

                    <div className="border-l-2 border-earth-900 pl-3.5 space-y-3.5">
                      {o.eduItems.map((edu, idx) => (
                        <div key={idx} className="space-y-1">
                          <span className="font-mono text-[10px] text-rosewood-600 font-black uppercase">
                            {edu.period}
                          </span>
                          <h4 className="font-editorial-serif text-sm font-black text-earth-900 leading-snug">
                            {edu.school}
                          </h4>
                          <div className="text-xs text-earth-700 font-sans">
                            {edu.major}
                          </div>
                          <span className="inline-block text-[10px] font-mono font-bold bg-[#FAF6F0] px-2 py-0.5 border border-earth-300 text-earth-600">
                            {edu.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Languages / Native Fluency */}
              {o?.languages && (
                <div className="pt-4 border-t border-earth-300">
                  <span className="font-mono text-[10px] uppercase font-bold text-earth-500 block mb-2">
                    COMMUNICATION MEDIUMS
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {o.languages.map((l, idx) => (
                      <span key={idx} className="font-mono text-xs font-bold bg-white px-2.5 py-1 border border-earth-900 shadow-2xs text-earth-900">
                        {l.lang} ({l.level})
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
