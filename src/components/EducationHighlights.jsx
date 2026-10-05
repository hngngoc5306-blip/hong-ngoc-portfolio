import React from 'react';
import { GraduationCap, BookOpen, Award, CheckCircle, MapPin, Sparkles } from 'lucide-react';
import TornDivider from './TornDivider';
import WashiTape from './WashiTape';

export default function EducationHighlights({ content }) {
  const edu = content.education;

  return (
    <section 
      id="education" 
      className="relative py-28 lg:py-36 px-4 sm:px-6 lg:px-8 bg-[#FAF6F0] overflow-hidden border-t-2 border-earth-900"
    >
      {/* Background grain texture */}
      <div className="absolute inset-0 paper-grain pointer-events-none" />

      {/* Floating ribbon bow from Template.pdf Page 5 top right */}
      <div className="absolute top-12 right-12 text-yellow-400 z-10 hidden sm:block animate-cover-star">
        <svg width="42" height="42" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.6 8.4L23.4 8.4L16.3 13.6L19 22L12 16.8L5 22L7.7 13.6L0.6 8.4L9.4 8.4L12 0Z"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Editorial Section Header */}
        <div className="flex items-center justify-between gap-4 mb-14 border-b-2 border-earth-900 pb-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-earth-900 font-bold bg-[#FF007F] text-white px-3 py-1 shadow-[2px_2px_0_rgba(42,24,21,0.2)]">
              {edu.sectionNumber} — {edu.sectionTitle}
            </span>
            <span className="text-earth-700 font-mono text-xs hidden sm:inline-block font-semibold">
              Institutional Milestones & Academic Foundation
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-editorial-script text-lg text-earth-800 hidden md:inline-block">
              ~ academic ledger ~
            </span>
            <span className="text-xs font-mono text-earth-900 bg-white px-2 py-0.5 border border-earth-900 font-bold">P. 07</span>
          </div>
        </div>

        {/* Template.pdf Page 5 Master Spread: Open Spiral Notebook with Yellow & Pink Milestone Memos */}
        <div className="relative bg-white p-6 sm:p-10 lg:p-14 border-3 border-earth-900 shadow-[10px_10px_0_rgba(42,24,21,0.25)] mb-14">
          
          {/* Tulips bouquet corner decoration bottom left */}
          <div className="absolute -bottom-8 left-8 w-28 sm:w-36 opacity-90 z-20 pointer-events-none hidden md:block animate-cover-tulip">
            <img src="/assets/collage_elem_34.png" alt="Tulips" className="w-full h-full object-contain filter drop-shadow-md" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Milestone: Yellow Sticky Note (2021–2024: Specialized High School) (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="template-sticky-yellow p-6 sm:p-8 transform -rotate-2 relative border-2 border-earth-900 shadow-[5px_5px_0_rgba(42,24,21,0.15)] animate-micro-float-a">
                
                {/* Washi tape at top */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-28 h-6 opacity-85 pointer-events-none rotate-1">
                  <img src="/assets/collage_elem_39.png" alt="Tape" className="w-full h-full object-contain" />
                </div>

                <div className="flex items-center justify-between pb-3 border-b-2 border-earth-900/20">
                  <span className="font-editorial-serif text-3xl sm:text-4xl font-black text-earth-950">
                    {edu.journey[1].period}
                  </span>
                  <span className="text-[10px] font-mono font-bold bg-earth-900 text-white px-2 py-0.5">
                    Preparatory
                  </span>
                </div>

                <div className="pt-4 space-y-1.5">
                  <h4 className="font-editorial-serif text-xl sm:text-2xl font-black text-earth-900">
                    {edu.journey[1].school}
                  </h4>
                  <div className="text-xs font-mono text-earth-700">
                    {edu.journey[1].schoolSub} • {edu.journey[1].location}
                  </div>
                  <div className="text-sm font-bold text-rosewood-700 font-editorial-serif">
                    Major: {edu.journey[1].major}
                  </div>
                </div>

                <p className="text-earth-800 text-xs sm:text-sm leading-relaxed mt-3 font-sans text-justify">
                  {edu.journey[1].details}
                </p>

                <div className="pt-4 border-t border-earth-900/10 mt-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-earth-600 block mb-2 font-bold">
                    Key Academic Foundation
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.journey[1].interests.map((it, iIdx) => (
                      <span key={iIdx} className="bg-white/90 border border-earth-400 text-earth-900 text-[11px] px-2 py-0.5 font-mono font-bold">
                        • {it}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Center Arrow Flow (Echoing Template Page 5 hand-drawn curved arrow) (2 cols) */}
            <div className="lg:col-span-2 hidden lg:flex flex-col items-center justify-center">
              <span className="font-editorial-script text-2xl text-rosewood-600 font-bold mb-1">
                progression
              </span>
              <svg width="90" height="45" viewBox="0 0 100 50" fill="none" stroke="#2A1815" strokeWidth="3.5" strokeLinecap="round">
                <path d="M10,25 C40,5 60,45 85,25" />
                <path d="M75,18 L85,25 L75,32" />
              </svg>
            </div>

            {/* Right Milestone: Pink Sticky Note (2024–2028: Foreign Trade University) (5 cols) — PROMINENT */}
            <div className="lg:col-span-5 relative">
              <div className="template-sticky-pink p-6 sm:p-8 transform rotate-2 relative border-3 border-earth-900 shadow-[6px_6px_0_rgba(42,24,21,0.2)] animate-micro-float-b">
                
                {/* Washi tape at top */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-28 h-6 opacity-85 pointer-events-none -rotate-1">
                  <img src="/assets/collage_elem_39.png" alt="Tape" className="w-full h-full object-contain" />
                </div>

                {/* Decorative Red Stamp Seal on top right */}
                <div className="absolute -top-6 -right-4 w-16 sm:w-20 opacity-90 pointer-events-none rotate-6 z-20 animate-cover-star">
                  <img src="/assets/collage_elem_30.png" alt="Degree seal" className="w-full h-full object-contain filter drop-shadow-xs" />
                </div>

                <div className="flex items-center justify-between pb-3 border-b-2 border-earth-900/20">
                  <span className="font-editorial-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-black text-earth-950">
                    {edu.journey[0].period}
                  </span>
                  <span className="editorial-tag text-white font-bold bg-[#FF007F] border border-earth-900 text-[10px] shadow-2xs">
                    Current Degree
                  </span>
                </div>

                <div className="pt-4 space-y-1.5">
                  <h4 className="font-editorial-serif text-2xl sm:text-3xl font-black text-earth-900">
                    {edu.journey[0].school}
                  </h4>
                  <div className="text-xs font-mono text-earth-700 font-semibold">
                    {edu.journey[0].schoolSub} • {edu.journey[0].location}
                  </div>
                  <div className="text-sm font-bold text-rosewood-800 font-editorial-serif">
                    Major: {edu.journey[0].major}
                  </div>
                </div>

                <p className="text-earth-800 text-xs sm:text-sm leading-relaxed mt-3 font-sans text-justify">
                  {edu.journey[0].details}
                </p>

                <div className="pt-4 border-t border-earth-900/10 mt-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-earth-600 block mb-2 font-bold">
                    Key Academic Disciplines
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.journey[0].interests.map((it, iIdx) => (
                      <span key={iIdx} className="bg-white/90 border border-earth-400 text-earth-900 text-[11px] px-2 py-0.5 font-mono font-bold">
                        • {it}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* Academic Snapshot Matrix Ledger (3 Works, 1 Journal, 1 Conference, 1 Manuscript) */}
        <div className="bg-[#FAF0F1] p-6 sm:p-8 border-3 border-earth-900 shadow-[6px_6px_0_rgba(42,24,21,0.18)]">
          <div className="flex items-center justify-between pb-3 border-b-2 border-earth-900 mb-6">
            <div className="flex items-center gap-2">
              <span className="font-editorial-serif font-black text-lg text-earth-900 uppercase tracking-wider">
                Academic Snapshot & Scholarly Output
              </span>
            </div>
            <span className="font-mono text-xs text-rosewood-600 font-bold uppercase">Empirical Record</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-4 border-2 border-earth-900 shadow-[3px_3px_0_rgba(42,24,21,0.1)]">
              <div className="font-editorial-serif text-3xl sm:text-4xl font-black text-earth-900">3</div>
              <div className="text-xs font-mono uppercase tracking-wider text-earth-600 font-bold mt-1">Research Works</div>
            </div>
            <div className="bg-white p-4 border-2 border-rosewood-500 shadow-[3px_3px_0_rgba(184,93,88,0.2)]">
              <div className="font-editorial-serif text-3xl sm:text-4xl font-black text-rosewood-600">1</div>
              <div className="text-xs font-mono uppercase tracking-wider text-earth-600 font-bold mt-1">Published Journal Article</div>
            </div>
            <div className="bg-white p-4 border-2 border-earth-900 shadow-[3px_3px_0_rgba(42,24,21,0.1)]">
              <div className="font-editorial-serif text-3xl sm:text-4xl font-black text-[#3A6878]">1</div>
              <div className="text-xs font-mono uppercase tracking-wider text-earth-600 font-bold mt-1">Accepted Conference Research</div>
            </div>
            <div className="bg-white p-4 border-2 border-earth-900 shadow-[3px_3px_0_rgba(42,24,21,0.1)]">
              <div className="font-editorial-serif text-3xl sm:text-4xl font-black text-earth-900">1</div>
              <div className="text-xs font-mono uppercase tracking-wider text-earth-600 font-bold mt-1">Completed Manuscript</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
