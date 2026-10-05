import React, { useState } from 'react';
import { Calendar, Users, Music2, MapPin, Eye, X, Ticket, Sparkles, Clock, CheckCircle } from 'lucide-react';
import WashiTape from './WashiTape';

export default function Experience({ content }) {
  const exp = content.experience;
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const tatakeEvent = exp.events.find(e => e.id === 'tatake') || exp.events[0];
  const toTheLineEvent = exp.events.find(e => e.id === 'totheline' || e.id === 'to-the-line') || exp.events[1];

  return (
    <section 
      id="experience" 
      className="relative py-28 lg:py-36 px-4 sm:px-6 lg:px-8 bg-[#FAF6F0] overflow-visible"
    >
      {/* Background grain texture */}
      <div className="absolute inset-0 paper-grain pointer-events-none" />

      {/* Floating Tulip Bouquet from Template.pdf Page 6 bottom left */}
      <div className="absolute bottom-8 right-6 w-36 sm:w-48 opacity-85 pointer-events-none z-20 hidden md:block animate-cover-tulip">
        <img 
          src="/assets/collage_elem_34.png" 
          alt="Tulips bouquet" 
          className="w-full h-auto object-contain filter drop-shadow-md"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Editorial Section Masthead */}
        <div data-reveal="heading" className="flex items-center justify-between gap-4 mb-16 border-b-2 border-earth-900 pb-4">
          <div className="flex items-center gap-4">
            <span className="scrapbook-interactive-stamp font-mono text-xs sm:text-sm uppercase tracking-widest text-earth-900 font-black bg-[#FF007F] text-white px-4 py-1.5 shadow-[3px_3px_0_rgba(42,24,21,0.2)]">
              {exp.sectionNumber} — {exp.sectionTitle}
            </span>
            <span className="text-earth-800 font-mono text-xs sm:text-sm hidden sm:inline-block font-bold">
              Event Scrapbook & Backstage Operational Field Notes
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-editorial-script text-xl text-earth-900 font-bold hidden md:inline-block">
              ~ backstage chronicle ~
            </span>
            <span className="text-xs sm:text-sm font-mono text-earth-900 bg-white px-3 py-1 border border-earth-900 uppercase tracking-wider font-black">
              LOG · 03
            </span>
          </div>
        </div>

        {/* 
          OVERVIEW SPREAD:
          Master Event Production Archive Banner with 3 Stacked Archival Color Memos
        */}
        <div data-reveal="paper" className="delay-150 relative mb-20 p-6 sm:p-10 lg:p-12 bg-white border-3 border-earth-900 shadow-[14px_14px_0_rgba(42,24,21,0.28)]">
          {/* Dispatch seal on top right with interactive touch */}
          <div className="scrapbook-interactive-stamp absolute -top-6 -right-4 w-16 sm:w-20 opacity-85 pointer-events-auto rotate-6 z-20 animate-cover-star" title="Dispatch seal">
            <img src="/assets/collage_elem_30.png" alt="Dispatch seal" className="w-full h-full object-contain filter drop-shadow-xs" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Organization & Overview (6 cols) */}
            <div className="lg:col-span-6 space-y-5">
              <div className="space-y-2.5">
                <div className="template-banner-pink text-xs uppercase tracking-widest font-mono">
                  EVENT PRODUCTION ARCHIVE
                </div>

                <h3 className="font-editorial-serif text-4xl sm:text-5xl lg:text-6xl font-black text-earth-900 tracking-tight leading-none">
                  Operations & Coordination
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-mono text-earth-800 pt-1">
                <span className="font-mono text-xs font-bold bg-[#FAF6F0] px-3 py-1 border-2 border-earth-900 shadow-2xs">
                  <Calendar size={13} className="mr-1.5 text-rosewood-600 inline" />
                  2023 – Present
                </span>
                <span className="font-mono text-xs font-bold bg-[#FAF6F0] px-3 py-1 border-2 border-earth-900 shadow-2xs">
                  <MapPin size={13} className="mr-1.5 text-[#3A6878] inline" />
                  Hanoi, Vietnam
                </span>
              </div>

              <p className="text-earth-800 text-base sm:text-lg leading-relaxed font-sans text-justify border-t border-earth-300 pt-3">
                {exp.overviewText}
              </p>
            </div>

            {/* Right Column: Stacked Color Memos (Yellow, Pink, Blue) (6 cols) */}
            <div className="lg:col-span-6 space-y-4 pt-2 lg:pt-0">
              
              {/* Memo 1: Yellow — Highschool Music Showdown */}
              <div data-reveal="sticker" className="delay-100 template-sticky-yellow p-5 transform -rotate-1 border-2 border-earth-900 shadow-[5px_5px_0_rgba(42,24,21,0.15)]">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="font-mono text-xs sm:text-sm font-black uppercase tracking-wider text-earth-900">
                    2023 · Highschool Music Showdown
                  </span>
                  <span className="font-mono text-[10px] bg-earth-900 text-white px-2 py-0.5 font-bold">The Finale</span>
                </div>
                <div className="font-editorial-serif font-black text-lg sm:text-xl text-earth-900">
                  Volunteer Event Coordinator
                </div>
                <div className="text-xs sm:text-sm text-earth-800 font-sans mt-1">
                  Audience reception, check-in operations & live finale coordination.
                </div>
              </div>

              {/* Memo 2: Pink — The Inspirers */}
              <div data-reveal="sticker" className="delay-200 template-sticky-pink p-5 transform rotate-1 border-2 border-earth-900 shadow-[5px_5px_0_rgba(42,24,21,0.15)]">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="font-mono text-xs sm:text-sm font-black uppercase tracking-wider text-earth-900">
                    2024 – 2025 · The Inspirers
                  </span>
                  <span className="font-mono text-[10px] bg-rosewood-700 text-white px-2 py-0.5 font-bold">4 Major Productions</span>
                </div>
                <div className="font-editorial-serif font-black text-lg sm:text-xl text-earth-900">
                  Event Coordination / Check-in · Backstage Operations
                </div>
                <div className="text-xs sm:text-sm text-earth-800 font-sans mt-1.5 space-y-1 font-medium">
                  <div>• Lousound #6: Songs of Hope (2024) · Lousound #7: Diverine (2025)</div>
                  <div>• Classic in Concert #1: Tatake (2025) · Classic in Concert #2: To the Line (2025)</div>
                </div>
              </div>

              {/* Memo 3: Sky Blue — FansViet */}
              <div data-reveal="sticker" className="delay-300 template-sticky-blue p-5 transform -rotate-1 border-2 border-earth-900 shadow-[5px_5px_0_rgba(42,24,21,0.15)]">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="font-mono text-xs sm:text-sm font-black uppercase tracking-wider text-earth-900">
                    2025 · FansViet
                  </span>
                  <span className="font-mono text-[10px] bg-earth-900 text-white px-2 py-0.5 font-bold">Arena Scale</span>
                </div>
                <div className="font-editorial-serif font-black text-lg sm:text-xl text-earth-900">
                  Event Coordination Collaborator
                </div>
                <div className="text-xs sm:text-sm text-earth-800 font-sans mt-1">
                  Anh Trai Say Hi Concert: A White Valentine · 2025
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* EPISODE 01: CLASSIC IN CONCERT #1: TATAKE                                */}
        {/* STRUCTURAL RECONSTRUCTION BASED ON PAGE 5 OF TEMPLATE.PDF:               */}
        {/* PHYSICAL RULED NOTEBOOK SPREAD DIVIDED BY VERTICAL SPIRAL BINDING         */}
        {/* LEFT OF SPIRAL: Tilted Scrapbook Photograph Specimen with Washi Tape     */}
        {/* RIGHT OF SPIRAL: Ruled Notebook Paper, Title, Yellow Note -> Arrow ->     */}
        {/*                  Pink Note, Blue Starbursts, Concert Ribbon, Field Note   */}
        {/* ========================================================================= */}
        {tatakeEvent && (
          <div className="mb-24 relative">
            
            {/* The Notebook Surface Sheet */}
            <div data-reveal="paper" className="delay-100 relative bg-[#FAF6F0] border-3 border-earth-900 shadow-[18px_18px_0_rgba(42,24,21,0.28)] overflow-visible">
              
              {/* Binder Clip at top left of notebook */}
              <div data-reveal="sticker" className="delay-200 absolute -top-7 left-[18%] -translate-x-1/2 w-12 h-12 z-30 pointer-events-none hidden md:block">
                <img src="/assets/collage_elem_40.png" alt="Binder clip" className="w-full h-full object-contain filter drop-shadow-md" />
              </div>

              {/* Flex Container: Left Spread (~33%) | Spiral Binding (Center) | Right Spread (~67%) */}
              <div className="flex flex-col lg:flex-row items-stretch min-h-[720px] relative">
                
                {/* ------------------------------------------------------------- */}
                {/* LEFT OF THE SPIRAL: SCRAPBOOK PHOTOGRAPHIC MEMORY AREA        */}
                {/* ------------------------------------------------------------- */}
                <div className="w-full lg:w-[36%] xl:w-[32%] shrink-0 p-6 sm:p-8 bg-[#F4EFE6]/90 flex flex-col justify-between relative border-b-2 lg:border-b-0 lg:border-r border-earth-900/20">
                  
                  {/* Top Specimen Label */}
                  <div className="flex items-center justify-between pb-3 border-b border-earth-300">
                    <span className="font-mono text-xs font-black uppercase tracking-wider text-earth-800 flex items-center gap-1.5">
                      <span>✦</span>
                      <span>EVENT SPECIMEN // 01</span>
                    </span>
                    <span className="font-mono text-[10px] bg-earth-900 text-white px-2 py-0.5 font-bold">
                      2025
                    </span>
                  </div>

                  {/* Collage Photo Stack (Photo 1 dominant + Photo 2 supporting offset) */}
                  <div className="my-6 relative flex flex-col items-center">
                    
                    {/* Primary Hero Photograph — Tilted Left (-2 deg) with Washi Tape */}
                    <div 
                      data-reveal="photo"
                      className="delay-150 relative z-15 w-full max-w-[270px] sm:max-w-[300px] bg-white p-2.5 pb-7 border-2 border-earth-900 shadow-[6px_6px_0_rgba(42,24,21,0.18)] transform -rotate-2 hover:rotate-0 transition-transform duration-300 cursor-pointer group"
                      onClick={() => setSelectedPhoto({ src: `/assets/${tatakeEvent.images[0]}`, title: `${tatakeEvent.title} — Main Concert Hall Stage & Audience` })}
                    >
                      {/* Translucent Washi tape at top */}
                      <div data-reveal="sticker" className="delay-200 absolute -top-3.5 left-1/2 -translate-x-1/2 w-32 h-7 opacity-90 pointer-events-none rotate-1">
                        <img src="/assets/collage_elem_39.png" alt="Tape" className="w-full h-full object-contain" />
                      </div>

                      <div className="aspect-[4/3] bg-earth-950 overflow-hidden border border-earth-300">
                        <img 
                          src={`/assets/${tatakeEvent.images[0]}`} 
                          alt="Tatake Stage" 
                          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                        />
                      </div>
                      <div className="pt-2 px-1 text-center">
                        <span className="font-editorial-script text-earth-900 text-base font-bold block leading-snug">
                          Main Symphonic Hall Production
                        </span>
                        <span className="font-mono text-[9px] text-earth-500 uppercase tracking-widest font-semibold">
                          Concert Hall Audience · 2025
                        </span>
                      </div>
                    </div>

                    {/* Secondary Supporting Photograph — Positioned lower and slightly behind, Tilted Right (+3 deg) */}
                    <div 
                      data-reveal="photo"
                      className="delay-250 relative -mt-8 ml-auto w-36 sm:w-44 bg-white p-2 pb-5 border-2 border-earth-900 shadow-[5px_5px_0_rgba(42,24,21,0.15)] transform rotate-3 hover:rotate-0 transition-transform duration-300 cursor-pointer z-20 group"
                      onClick={() => setSelectedPhoto({ src: `/assets/${tatakeEvent.images[1]}`, title: `${tatakeEvent.title} — Backstage Operations & Team` })}
                    >
                      <div className="aspect-[4/3] bg-earth-950 overflow-hidden border border-earth-300">
                        <img 
                          src={`/assets/${tatakeEvent.images[1]}`} 
                          alt="Tatake detail" 
                          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" 
                        />
                      </div>
                      <div className="text-[10px] font-mono text-earth-800 text-center pt-1 font-bold">
                        Backstage log ↗
                      </div>
                    </div>

                  </div>

                  {/* Botanical tulip bouquet anchoring the lower left of the spread (Template Page 5 echo) */}
                  <div data-reveal="paper" className="delay-200 relative pt-2">
                    <div className="w-28 sm:w-36 -ml-2 opacity-95 pointer-events-none">
                      <img src="/assets/collage_elem_34.png" alt="Tulips collage" className="w-full h-auto object-contain filter drop-shadow-sm" />
                    </div>
                    <div className="pt-2 border-t border-earth-300 flex items-center justify-between text-[11px] font-mono text-earth-700">
                      <span className="font-bold">THE INSPIRERS · HANOI</span>
                      <span className="text-rosewood-600 font-bold">PRODUCTION #01</span>
                    </div>
                  </div>

                </div>

                {/* ------------------------------------------------------------- */}
                {/* CENTER: AUTHENTIC VERTICAL SPIRAL NOTEBOOK BINDING            */}
                {/* ------------------------------------------------------------- */}
                <div className="hidden lg:flex flex-col justify-around py-8 w-12 xl:w-14 absolute left-[36%] xl:left-[32%] -translate-x-1/2 top-0 bottom-0 z-30 select-none pointer-events-none items-center">
                  {[...Array(14)].map((_, i) => (
                    <div key={i} className="flex items-center justify-between w-full my-1">
                      {/* Left punch hole */}
                      <div className="spiral-hole" />
                      {/* Metallic Ring Loop Passing Through */}
                      <div className="spiral-metal-ring -mx-2 z-10" />
                      {/* Right punch hole */}
                      <div className="spiral-hole" />
                    </div>
                  ))}
                </div>

                {/* Mobile Spiral Ring Divider */}
                <div className="lg:hidden flex justify-around py-2.5 bg-earth-900/10 border-y-2 border-earth-900/30">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-3.5 h-7 bg-earth-900 rounded-full shadow-inner" />
                  ))}
                </div>

                {/* ------------------------------------------------------------- */}
                {/* RIGHT OF THE SPIRAL: RULED NOTEBOOK & EDITORIAL CONTENT       */}
                {/* ------------------------------------------------------------- */}
                <div className="flex-1 p-6 sm:p-8 lg:p-10 xl:p-12 notebook-ruled space-y-7 flex flex-col justify-between bg-[#FAF6F0] relative overflow-hidden lg:pl-10">
                  
                  {/* Decorative Concert Ribbon / Pass (Template Page 5 Top-Right Ribbon Reinterpretation) */}
                  <div data-reveal="sticker" className="delay-100 absolute top-4 right-5 sm:right-8 z-20 flex flex-col items-center pointer-events-none transform rotate-3">
                    <div className="bg-[#FF007F] text-white font-mono text-[10px] font-black uppercase tracking-widest px-3 py-1 shadow-xs border border-earth-900">
                      LIVE ACCESS PASS
                    </div>
                    <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[8px] border-t-[#FF007F]" />
                  </div>

                  <div className="space-y-6">
                    
                    {/* Large Editorial Title (Occupying Upper-Right, Inspired by "Educational Attainment") */}
                    <div data-reveal="heading" className="delay-150 space-y-1 pt-1 pr-24 sm:pr-32">
                      <span className="font-mono text-xs uppercase tracking-widest text-earth-600 font-black block">
                        EVENT EXPERIENCE // LOG 03
                      </span>
                      <h4 className="font-editorial-serif text-3xl sm:text-4xl lg:text-5xl font-black text-earth-900 tracking-tight leading-tight">
                        Classic in Concert <br className="hidden sm:inline" />
                        <span className="italic font-serif text-rosewood-700">#1: Tatake</span>
                      </h4>
                      <span className="font-editorial-script text-xl sm:text-2xl text-earth-800 font-bold block pt-1">
                        ~ Year 2025 · Hanoi Opera & Concert Hall ~
                      </span>
                    </div>

                    {/* 
                      SPATIAL RELATIONSHIP FROM TEMPLATE.PDF PAGE 5:
                      Yellow Paper Note  --[Hand-drawn Arrow]-->  Pink Paper Note
                    */}
                    <div className="relative pt-2 pb-1 flex flex-col sm:flex-row items-center sm:items-start gap-4 lg:gap-6 xl:gap-8">
                      
                      {/* YELLOW PAPER NOTE: 2025 & Role (Replacing Education Note 1) */}
                      <div data-reveal="sticker" className="delay-200 w-full sm:w-[240px] xl:w-[260px] template-sticky-yellow p-4 sm:p-5 border-2 border-earth-900 shadow-[6px_6px_0_rgba(42,24,21,0.18)] transform -rotate-2 relative z-10 shrink-0">
                        {/* Translucent washi tape at top */}
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-24 h-6 opacity-85 pointer-events-none rotate-2">
                          <img src="/assets/collage_elem_39.png" alt="Tape" className="w-full h-full object-contain" />
                        </div>

                        <div className="border-b border-earth-900/20 pb-1.5 mb-2 flex items-center justify-between">
                          <span className="font-editorial-serif font-black text-xl text-earth-900">
                            2025
                          </span>
                          <span className="font-mono text-[9px] uppercase font-bold bg-earth-900 text-white px-1.5 py-0.5">
                            CONFIRMED
                          </span>
                        </div>

                        <div className="font-editorial-serif font-black text-base text-earth-900 leading-snug">
                          CLASSIC IN CONCERT #1
                        </div>
                        <div className="font-mono text-xs text-earth-800 font-bold mt-1.5 border-t border-earth-900/15 pt-1.5">
                          {tatakeEvent.role}
                        </div>
                      </div>

                      {/* HAND-DRAWN ARROW: Connecting Yellow Note to Pink Note */}
                      <div data-reveal="line" className="delay-250 hidden sm:flex items-center justify-center pt-8 text-earth-900 z-20 shrink-0">
                        <svg width="56" height="38" viewBox="0 0 70 45" fill="none" className="filter drop-shadow-2xs">
                          {/* Smooth curved organic hand-drawn stroke */}
                          <path 
                            d="M 4 20 C 22 8, 42 12, 58 24" 
                            stroke="#2A1815" 
                            strokeWidth="3" 
                            strokeLinecap="round" 
                            strokeDasharray="1 0" 
                          />
                          {/* Arrow head */}
                          <path 
                            d="M 44 26 L 58 24 L 54 10" 
                            stroke="#2A1815" 
                            strokeWidth="3" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                          />
                        </svg>
                      </div>

                      {/* PINK PAPER NOTE: 700+ Audience & Operations (Replacing Education Note 2) */}
                      <div data-reveal="sticker" className="delay-300 w-full sm:w-[240px] xl:w-[260px] template-sticky-pink p-4 sm:p-5 border-2 border-earth-900 shadow-[6px_6px_0_rgba(42,24,21,0.18)] transform rotate-2 relative z-10 shrink-0">
                        {/* Translucent washi tape at top */}
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-24 h-6 opacity-85 pointer-events-none -rotate-2">
                          <img src="/assets/collage_elem_39.png" alt="Tape" className="w-full h-full object-contain" />
                        </div>

                        <div className="border-b border-rosewood-900/20 pb-1 mb-2">
                          <span className="font-editorial-serif font-black text-2xl text-earth-950 block leading-none">
                            700+ ATTENDEES
                          </span>
                        </div>

                        <div className="font-mono text-xs font-black text-earth-900 uppercase tracking-tight">
                          CHECK-IN & AUDIENCE FLOW
                        </div>
                        <ul className="text-xs text-earth-800 font-sans mt-2 space-y-1 font-medium">
                          <li>• Verified Tickets Check-in</li>
                          <li>• Multi-tier Seating Guidance</li>
                          <li>• Rapid Queue Triage</li>
                        </ul>
                      </div>

                      {/* Blue Hand-Drawn Starburst marks (from Template Page 5) */}
                      <div data-reveal="sticker" className="delay-350 absolute -top-3 right-2 text-[#3A6878] z-20 hidden md:block animate-micro-twinkle">
                        <svg width="38" height="38" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0L14.6 8.4L23.4 8.4L16.3 13.6L19 22L12 16.8L5 22L7.7 13.6L0.6 8.4L9.4 8.4L12 0Z"/>
                        </svg>
                      </div>
                      <div data-reveal="sticker" className="delay-400 absolute -bottom-4 right-10 text-[#3A6878] z-20 hidden md:block">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0L14.6 8.4L23.4 8.4L16.3 13.6L19 22L12 16.8L5 22L7.7 13.6L0.6 8.4L9.4 8.4L12 0Z"/>
                        </svg>
                      </div>

                    </div>

                    {/* FIELD NOTE: Event Description Styled as a Documentation Note */}
                    <div data-reveal="paper" className="delay-350 p-4 bg-[#FAF0F1]/90 border-2 border-rosewood-400 shadow-[3px_3px_0_rgba(42,24,21,0.1)] relative">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-rosewood-700 font-black block mb-1">
                        FIELD NOTE // OPERATIONAL EXECUTION
                      </span>
                      <p className="text-earth-900 text-sm sm:text-base leading-relaxed font-sans text-justify font-medium">
                        “{tatakeEvent.description}”
                      </p>
                    </div>

                    {/* Operational Competencies: Archival Printed Labels (Thin borders, no SaaS pills) */}
                    <div className="space-y-2 pt-1">
                      <span className="font-mono text-xs uppercase tracking-wider text-earth-700 font-black block">
                        OPERATIONAL COMPETENCIES:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {tatakeEvent.tags.map((tg, tIdx) => (
                          <span 
                            key={tIdx} 
                            className="font-mono text-xs font-bold bg-white text-earth-900 px-3 py-1 border border-earth-900 shadow-2xs uppercase tracking-wider"
                          >
                            [ {tg} ]
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Editorial Handwritten Annotation Note with Gold Star Marker */}
                  <div className="pt-4 border-t-2 border-earth-900/15 flex items-center justify-between">
                    <p className="font-editorial-script text-xl sm:text-2xl text-rosewood-700 font-black">
                      ✦ Real-time stage timing, audience logistics & crisis triage
                    </p>
                    <div className="text-yellow-400 shrink-0 ml-3 animate-cover-star">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0L14.6 8.4L23.4 8.4L16.3 13.6L19 22L12 16.8L5 22L7.7 13.6L0.6 8.4L9.4 8.4L12 0Z"/>
                      </svg>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>
        )}

        {/* Editorial Page Divider / Transition Spine */}
        <div className="flex items-center justify-center my-14 sm:my-18">
          <div className="h-[2px] bg-earth-900/20 flex-1 max-w-xs sm:max-w-md" />
          <div className="px-5 flex items-center gap-3">
            <span className="font-editorial-script text-2xl sm:text-3xl text-rosewood-700 font-bold">
              ~ turn to page 02 · backstage chronicle ~
            </span>
            <span className="font-mono text-xs bg-earth-900 text-white px-2.5 py-1 font-bold shadow-2xs">
              LOG · 04
            </span>
          </div>
          <div className="h-[2px] bg-earth-900/20 flex-1 max-w-xs sm:max-w-md" />
        </div>

        {/* ========================================================================= */}
        {/* EPISODE 02: CLASSIC IN CONCERT #2: TO THE LINE                           */}
        {/* MIRRORED SIBLING SPREAD OF TATAKE:                                        */}
        {/* PHYSICAL RULED NOTEBOOK SPREAD DIVIDED BY VERTICAL SPIRAL BINDING         */}
        {/* LEFT OF SPIRAL: Ruled Notebook Paper, Title, Yellow Note -> Arrow ->      */}
        {/*                 Pink Note, Starbursts, Backstage Pass, Field Note        */}
        {/* RIGHT OF SPIRAL: Photographic Memory Area with Washi Tape & Frames       */}
        {/* ========================================================================= */}
        {toTheLineEvent && (
          <div className="mb-24 relative">
            
            {/* The Notebook Surface Sheet — Same Warm Cream & Heavy Editorial Shadow as Tatake */}
            <div data-reveal="paper" className="delay-100 relative bg-[#FAF6F0] border-3 border-earth-900 shadow-[18px_18px_0_rgba(42,24,21,0.28)] overflow-visible">
              
              {/* Binder Clip at top right clipping the photo memory page */}
              <div data-reveal="sticker" className="delay-200 absolute -top-7 right-[18%] translate-x-1/2 w-12 h-12 z-30 pointer-events-none hidden md:block">
                <img src="/assets/collage_elem_40.png" alt="Binder clip" className="w-full h-full object-contain filter drop-shadow-md" />
              </div>

              {/* Flex Container: Left Spread (~67%) | Spiral Binding (Center) | Right Spread (~33%) */}
              <div className="flex flex-col lg:flex-row items-stretch min-h-[720px] relative">
                
                {/* ------------------------------------------------------------- */}
                {/* LEFT OF THE SPIRAL: RULED NOTEBOOK & EDITORIAL CONTENT       */}
                {/* ------------------------------------------------------------- */}
                <div className="flex-1 p-6 sm:p-8 lg:p-10 xl:p-12 notebook-ruled space-y-7 flex flex-col justify-between bg-[#FAF6F0] relative overflow-hidden lg:pr-10 border-b-2 lg:border-b-0 border-earth-900/20">
                  
                  {/* Decorative Backstage Access Pass Ribbon (Mirrored to top-left) */}
                  <div className="absolute top-4 left-5 sm:left-8 z-20 flex flex-col items-center pointer-events-none transform -rotate-3">
                    <div className="bg-[#FF007F] text-white font-mono text-[10px] font-black uppercase tracking-widest px-3 py-1 shadow-xs border border-earth-900">
                      BACKSTAGE ACCESS PASS
                    </div>
                    <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[8px] border-t-[#FF007F]" />
                  </div>

                  <div className="space-y-6">
                    
                    {/* Large Editorial Title (Mirrored: Placed on Left, with right margin for clear reading) */}
                    <div className="space-y-1 pt-1 pl-28 sm:pl-36">
                      <span className="font-mono text-xs uppercase tracking-widest text-earth-600 font-black block">
                        EVENT EXPERIENCE // LOG 04
                      </span>
                      <h4 className="font-editorial-serif text-3xl sm:text-4xl lg:text-5xl font-black text-earth-900 tracking-tight leading-tight">
                        Classic in Concert <br className="hidden sm:inline" />
                        <span className="italic font-serif text-rosewood-700">#2: To the Line</span>
                      </h4>
                      <span className="font-editorial-script text-xl sm:text-2xl text-earth-800 font-bold block pt-1">
                        ~ Year 2025 · Backstage Operations & Stage Cues ~
                      </span>
                    </div>

                    {/* 
                      SPATIAL RELATIONSHIP FROM TEMPLATE SIBLING SYSTEM:
                      Yellow Paper Note  --[Hand-drawn Arrow]-->  Pink Paper Note
                    */}
                    <div className="relative pt-2 pb-1 flex flex-col sm:flex-row items-center sm:items-start gap-4 lg:gap-6 xl:gap-8">
                      
                      {/* YELLOW PAPER NOTE: 2025 & Role */}
                      <div data-reveal="sticker" className="delay-150 w-full sm:w-[240px] xl:w-[260px] template-sticky-yellow p-4 sm:p-5 border-2 border-earth-900 shadow-[6px_6px_0_rgba(42,24,21,0.18)] transform -rotate-2 relative z-10 shrink-0">
                        {/* Translucent washi tape at top */}
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-24 h-6 opacity-85 pointer-events-none rotate-2">
                          <img src="/assets/collage_elem_39.png" alt="Tape" className="w-full h-full object-contain" />
                        </div>

                        <div className="border-b border-earth-900/20 pb-1.5 mb-2 flex items-center justify-between">
                          <span className="font-editorial-serif font-black text-xl text-earth-900">
                            2025
                          </span>
                          <span className="font-mono text-[9px] uppercase font-bold bg-earth-900 text-white px-1.5 py-0.5">
                            STAGE DEPLOYED
                          </span>
                        </div>

                        <div className="font-editorial-serif font-black text-base text-earth-900 leading-snug">
                          CLASSIC IN CONCERT #2
                        </div>
                        <div className="font-mono text-xs text-earth-800 font-bold mt-1.5 border-t border-earth-900/15 pt-1.5">
                          {toTheLineEvent.role}
                        </div>
                      </div>

                      {/* HAND-DRAWN ARROW: Connecting Yellow Note to Pink Note */}
                      <div data-reveal="line" className="delay-200 hidden sm:flex items-center justify-center pt-8 text-earth-900 z-20 shrink-0">
                        <svg width="56" height="38" viewBox="0 0 70 45" fill="none" className="filter drop-shadow-2xs">
                          {/* Smooth curved organic hand-drawn stroke */}
                          <path 
                            d="M 4 20 C 22 8, 42 12, 58 24" 
                            stroke="#2A1815" 
                            strokeWidth="3" 
                            strokeLinecap="round" 
                            strokeDasharray="1 0" 
                          />
                          {/* Arrow head */}
                          <path 
                            d="M 44 26 L 58 24 L 54 10" 
                            stroke="#2A1815" 
                            strokeWidth="3" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                          />
                        </svg>
                      </div>

                      {/* PINK PAPER NOTE: Stage Flow & Cue Operations */}
                      <div data-reveal="sticker" className="delay-250 w-full sm:w-[240px] xl:w-[260px] template-sticky-pink p-4 sm:p-5 border-2 border-earth-900 shadow-[6px_6px_0_rgba(42,24,21,0.18)] transform rotate-2 relative z-10 shrink-0">
                        {/* Translucent washi tape at top */}
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-24 h-6 opacity-85 pointer-events-none -rotate-2">
                          <img src="/assets/collage_elem_39.png" alt="Tape" className="w-full h-full object-contain" />
                        </div>

                        <div className="border-b border-rosewood-900/20 pb-1 mb-2">
                          <span className="font-editorial-serif font-black text-xl sm:text-2xl text-earth-950 block leading-tight">
                            TIMELINE & STAGE FLOW
                          </span>
                        </div>

                        <div className="font-mono text-xs font-black text-earth-900 uppercase tracking-tight">
                          STAGE CUE & BACKSTAGE FLOW
                        </div>
                        <ul className="text-xs text-earth-800 font-sans mt-2 space-y-1 font-medium">
                          <li>• Artist Hospitality & Prep</li>
                          <li>• Master Show Timeline Cues</li>
                          <li>• Zero-lag Act Transitions</li>
                        </ul>
                      </div>

                      {/* Blue Hand-Drawn Starburst marks */}
                      <div data-reveal="sticker" className="delay-300 absolute -top-3 right-4 text-[#3A6878] z-20 hidden md:block animate-micro-twinkle">
                        <svg width="38" height="38" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0L14.6 8.4L23.4 8.4L16.3 13.6L19 22L12 16.8L5 22L7.7 13.6L0.6 8.4L9.4 8.4L12 0Z"/>
                        </svg>
                      </div>
                      <div data-reveal="sticker" className="delay-350 absolute -bottom-4 right-12 text-[#3A6878] z-20 hidden md:block">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0L14.6 8.4L23.4 8.4L16.3 13.6L19 22L12 16.8L5 22L7.7 13.6L0.6 8.4L9.4 8.4L12 0Z"/>
                        </svg>
                      </div>

                    </div>

                    {/* FIELD NOTE: Event Description Styled as a Documentation Note */}
                    <div data-reveal="paper" className="delay-300 p-4 bg-[#FAF0F1]/90 border-2 border-rosewood-400 shadow-[3px_3px_0_rgba(42,24,21,0.1)] relative">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-rosewood-700 font-black block mb-1">
                        FIELD NOTE // BACKSTAGE OPERATIONS & PROTOCOLS
                      </span>
                      <p className="text-earth-900 text-sm sm:text-base leading-relaxed font-sans text-justify font-medium">
                        “{toTheLineEvent.description}”
                      </p>
                    </div>

                    {/* Operational Competencies: Archival Printed Labels (Thin borders, no SaaS pills) */}
                    <div className="space-y-2 pt-1">
                      <span className="font-mono text-xs uppercase tracking-wider text-earth-700 font-black block">
                        OPERATIONAL COMPETENCIES:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {toTheLineEvent.tags.map((tg, tIdx) => (
                          <span 
                            key={tIdx} 
                            className="font-mono text-xs font-bold bg-white text-earth-900 px-3 py-1 border border-earth-900 shadow-2xs uppercase tracking-wider"
                          >
                            [ {tg} ]
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Editorial Handwritten Annotation Note with Gold Star Marker */}
                  <div className="pt-4 border-t-2 border-earth-900/15 flex items-center justify-between">
                    <p className="font-editorial-script text-xl sm:text-2xl text-rosewood-700 font-black">
                      ✦ Real-time stage timing, audience logistics & crisis triage
                    </p>
                    <div className="text-yellow-400 shrink-0 ml-3 animate-cover-star">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0L14.6 8.4L23.4 8.4L16.3 13.6L19 22L12 16.8L5 22L7.7 13.6L0.6 8.4L9.4 8.4L12 0Z"/>
                      </svg>
                    </div>
                  </div>

                </div>

                {/* ------------------------------------------------------------- */}
                {/* CENTER: AUTHENTIC VERTICAL SPIRAL NOTEBOOK BINDING            */}
                {/* ------------------------------------------------------------- */}
                <div className="hidden lg:flex flex-col justify-around py-8 w-12 xl:w-14 absolute left-[64%] xl:left-[68%] -translate-x-1/2 top-0 bottom-0 z-30 select-none pointer-events-none items-center">
                  {[...Array(14)].map((_, i) => (
                    <div key={i} className="flex items-center justify-between w-full my-1">
                      {/* Left punch hole */}
                      <div className="spiral-hole" />
                      {/* Metallic Ring Loop Passing Through */}
                      <div className="spiral-metal-ring -mx-2 z-10" />
                      {/* Right punch hole */}
                      <div className="spiral-hole" />
                    </div>
                  ))}
                </div>

                {/* Mobile Spiral Ring Divider */}
                <div className="lg:hidden flex justify-around py-2.5 bg-earth-900/10 border-y-2 border-earth-900/30">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-3.5 h-7 bg-earth-900 rounded-full shadow-inner" />
                  ))}
                </div>

                {/* ------------------------------------------------------------- */}
                {/* RIGHT OF THE SPIRAL: SCRAPBOOK PHOTOGRAPHIC MEMORY AREA       */}
                {/* ------------------------------------------------------------- */}
                <div className="w-full lg:w-[36%] xl:w-[32%] shrink-0 p-6 sm:p-8 bg-[#F4EFE6]/90 flex flex-col justify-between relative border-t-2 lg:border-t-0 lg:border-l border-earth-900/20">
                  
                  {/* Top Specimen Label */}
                  <div className="flex items-center justify-between pb-3 border-b border-earth-300">
                    <span className="font-mono text-xs font-black uppercase tracking-wider text-earth-800 flex items-center gap-1.5">
                      <span>✦</span>
                      <span>EVENT SPECIMEN // 02</span>
                    </span>
                    <span className="font-mono text-[10px] bg-earth-900 text-white px-2 py-0.5 font-bold">
                      2025
                    </span>
                  </div>

                  {/* Collage Photo Stack (Photo 1 dominant + Photo 2 supporting offset) */}
                  <div className="my-6 relative flex flex-col items-center">
                    
                    {/* Primary Hero Photograph — Tilted Right (+2 deg) with Washi Tape (Mirrored from Tatake's -2 deg) */}
                    <div 
                      data-reveal="photo"
                      className="delay-150 relative z-15 w-full max-w-[270px] sm:max-w-[300px] bg-white p-2.5 pb-7 border-2 border-earth-900 shadow-[6px_6px_0_rgba(42,24,21,0.18)] transform rotate-2 hover:rotate-0 transition-transform duration-300 cursor-pointer group"
                      onClick={() => setSelectedPhoto({ src: `/assets/${toTheLineEvent.images[0]}`, title: `${toTheLineEvent.title} — Full Symphonic Hall & Production` })}
                    >
                      {/* Translucent Washi tape at top */}
                      <div data-reveal="sticker" className="delay-200 absolute -top-3.5 left-1/2 -translate-x-1/2 w-32 h-7 opacity-90 pointer-events-none -rotate-1">
                        <img src="/assets/collage_elem_39.png" alt="Tape" className="w-full h-full object-contain" />
                      </div>

                      <div className="aspect-[4/3] bg-earth-950 overflow-hidden border border-earth-300">
                        <img 
                          src={`/assets/${toTheLineEvent.images[0]}`} 
                          alt="To The Line Stage" 
                          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                        />
                      </div>
                      <div className="pt-2 px-1 text-center">
                        <span className="font-editorial-script text-earth-900 text-base font-bold block leading-snug">
                          Full Symphonic Hall Production
                        </span>
                        <span className="font-mono text-[9px] text-earth-500 uppercase tracking-widest font-semibold">
                          Concert Stage & Orchestra · 2025
                        </span>
                      </div>
                    </div>

                    {/* Secondary Supporting Photograph — Positioned lower and offset to the left, Tilted Left (-3 deg) */}
                    <div 
                      data-reveal="photo"
                      className="delay-250 relative -mt-8 mr-auto w-36 sm:w-44 bg-white p-2 pb-5 border-2 border-earth-900 shadow-[5px_5px_0_rgba(42,24,21,0.15)] transform -rotate-3 hover:rotate-0 transition-transform duration-300 cursor-pointer z-20 group"
                      onClick={() => setSelectedPhoto({ src: `/assets/${toTheLineEvent.images[1]}`, title: `${toTheLineEvent.title} — Backstage Operations & Artists` })}
                    >
                      <div className="aspect-[4/3] bg-earth-950 overflow-hidden border border-earth-300">
                        <img 
                          src={`/assets/${toTheLineEvent.images[1]}`} 
                          alt="To The Line backstage" 
                          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" 
                        />
                      </div>
                      <div className="text-[10px] font-mono text-earth-800 text-center pt-1 font-bold">
                        Backstage log ↗
                      </div>
                    </div>

                  </div>

                  {/* Botanical / Dispatch Seal anchoring the lower right of the spread */}
                  <div className="relative pt-2">
                    <div className="flex items-center justify-between pb-1">
                      <div className="w-16 sm:w-20 opacity-85 pointer-events-none">
                        <img src="/assets/collage_elem_30.png" alt="Dispatch seal" className="w-full h-auto object-contain filter drop-shadow-xs" />
                      </div>
                      <div className="w-24 sm:w-28 opacity-90 pointer-events-none">
                        <img src="/assets/collage_elem_34.png" alt="Tulips collage" className="w-full h-auto object-contain filter drop-shadow-sm" />
                      </div>
                    </div>

                    {/* Additional Frame Strip for images 7.jpg and 8.jpg */}
                    {toTheLineEvent.images.length > 2 && (
                      <div className="pt-2 pb-1 border-t border-earth-300 flex items-center justify-between">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-earth-600 font-bold">
                          CONTACT FRAMES:
                        </span>
                        <div className="flex gap-1.5">
                          {toTheLineEvent.images.slice(2).map((img, idx) => (
                            <button
                              key={idx}
                              onClick={() => setSelectedPhoto({ src: `/assets/${img}`, title: `${toTheLineEvent.title} — Frame 0${idx + 3}` })}
                              className="w-9 h-6 border border-earth-900 bg-earth-950 overflow-hidden hover:scale-105 transition-transform cursor-pointer"
                              title={`View frame 0${idx + 3}`}
                            >
                              <img src={`/assets/${img}`} alt={`Frame 0${idx + 3}`} className="w-full h-full object-cover" />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="pt-2 border-t border-earth-300 flex items-center justify-between text-[11px] font-mono text-earth-700">
                      <span className="font-bold">THE INSPIRERS · HANOI</span>
                      <span className="text-rosewood-600 font-bold">PRODUCTION #02</span>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>
        )}

      </div>

      {/* Lightbox Photo Preview */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-[9990] bg-earth-950/85 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-white p-5 border-2 border-earth-900 shadow-[8px_8px_0_rgba(0,0,0,0.5)]" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-3 pb-2 border-b border-earth-300">
              <span className="font-editorial-serif font-bold text-lg text-earth-900">
                {selectedPhoto.title}
              </span>
              <button 
                onClick={() => setSelectedPhoto(null)}
                className="p-1 text-earth-700 hover:text-earth-950 hover:bg-paper-100 transition-colors cursor-pointer"
                aria-label="Close photo preview"
              >
                <X size={20} />
              </button>
            </div>
            <div className="max-h-[75vh] overflow-auto flex items-center justify-center bg-paper-100 p-2">
              <img 
                src={selectedPhoto.src} 
                alt={selectedPhoto.title} 
                className="max-h-[72vh] w-auto object-contain border border-earth-300"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
