import React, { useState } from 'react';
import { ExternalLink, BookOpen, FileText, CheckCircle, BarChart3, Eye, X, Bookmark, Sparkles, ArrowUpRight } from 'lucide-react';
import WashiTape from './WashiTape';

export default function Research({ content }) {
  const r = content.research;
  const [selectedResearchImage, setSelectedResearchImage] = useState(null);

  return (
    <section 
      id="research" 
      className="relative py-28 lg:py-36 px-4 sm:px-6 lg:px-8 bg-[#FAF6F0] overflow-visible"
    >
      {/* Background grain texture */}
      <div className="absolute inset-0 paper-grain pointer-events-none" />

      {/* Botanical watermark from Template.pdf */}
      <div className="absolute top-12 right-6 lg:right-16 w-32 sm:w-44 opacity-20 pointer-events-none transform rotate-12 hidden md:block">
        <img 
          src="/assets/collage_elem_34.png" 
          alt="Botanical watermark" 
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Editorial Section Masthead */}
        <div className="flex items-center justify-between gap-4 mb-16 border-b-2 border-earth-900 pb-4">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-earth-900 font-black bg-[#EBBEC3] px-4 py-1.5 border-2 border-earth-900 shadow-[3px_3px_0_rgba(42,24,21,0.2)]">
              {r.sectionNumber} — {r.sectionTitle}
            </span>
            <span className="text-earth-700 font-mono text-xs sm:text-sm hidden sm:inline-block font-bold">
              Academic Archive & Empirical Journal Desk · Peer-Reviewed Monograph
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-editorial-script text-xl text-earth-900 font-bold hidden md:inline-block">
              ~ journal desk ~
            </span>
            <span className="text-xs sm:text-sm font-mono text-earth-900 bg-white px-3 py-1 border border-earth-900 uppercase tracking-wider font-black">
              ARCHIVE · 04
            </span>
          </div>
        </div>

        {/* 
          OVERSIZED TYPOGRAPHIC STATEMENT:
          RESEARCH / QUESTIONS / METHODS / EVIDENCE
        */}
        <div className="mb-14 pb-10 border-b-2 border-earth-900/20">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 font-editorial-serif font-black text-3xl sm:text-5xl lg:text-6xl text-earth-900 uppercase tracking-tight">
            <span>RESEARCH</span>
            <span className="text-rosewood-600 font-sans font-light">/</span>
            <span>QUESTIONS</span>
            <span className="text-rosewood-600 font-sans font-light">/</span>
            <span>METHODS</span>
            <span className="text-rosewood-600 font-sans font-light">/</span>
            <span className="text-rosewood-600">EVIDENCE</span>
          </div>
          <p className="font-editorial-serif italic text-earth-800 text-lg sm:text-2xl mt-4 max-w-3xl leading-snug">
            “{r.lensDescription}”
          </p>
        </div>

        {/* Thematic Research Pillars: Horizontal Monograph Ledger Table */}
        <div className="bg-white p-6 sm:p-8 border-3 border-earth-900 shadow-[8px_8px_0_rgba(42,24,21,0.18)] mb-20">
          <div className="flex items-center justify-between pb-3 mb-6 border-b-2 border-earth-900">
            <span className="font-mono text-xs uppercase tracking-widest text-rosewood-600 font-black flex items-center gap-2">
              <Bookmark size={14} />
              <span>{r.lensTitle}</span>
            </span>
            <span className="font-mono text-[11px] text-earth-500 font-bold">
              TAXONOMIC INVENTORY // 4 DOMAINS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {r.areas.map((area, idx) => (
              <div key={idx} className="space-y-1.5 border-l-2 border-earth-900 pl-4">
                <div className="font-editorial-serif font-black text-sm text-earth-900 flex items-center justify-between">
                  <span>{area.name}</span>
                  <span className="font-mono text-xs text-rosewood-600 font-black">0{idx + 1}</span>
                </div>
                <p className="text-xs text-earth-700 leading-relaxed font-sans">
                  {area.items}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* RESEARCH ARTIFACT PLATES: 3 Curated Works                */}
        {/* ======================================================== */}
        <div className="space-y-20">
          
          {/* ======================================================== */}
          {/* PLATE 01 (FLAGSHIP): Published Journal Article in Sustainability (Q1) */}
          {/* ======================================================== */}
          <div className="relative bg-[#FAF0F1] p-6 sm:p-10 lg:p-14 border-3 border-rosewood-600 shadow-[16px_16px_0_rgba(184,93,88,0.28)]">
            {/* Washi tape on corner */}
            <div className="absolute -top-4 left-10 w-32 h-7 opacity-90 hidden sm:block -rotate-1 pointer-events-none">
              <img src="/assets/collage_elem_39.png" alt="Tape" className="w-full h-full object-contain" />
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-2">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="font-mono text-xs font-black bg-earth-900 text-white px-3 py-0.5">
                    {r.records[0].number}
                  </span>
                  <span className="text-xs font-mono font-black px-3 py-0.5 bg-emerald-100 text-emerald-950 border border-emerald-400">
                    Published — Sustainability, 2026
                  </span>
                  <span className="text-xs font-mono text-earth-800 uppercase tracking-wider font-bold">
                    Q1 Scopus / Web of Science
                  </span>
                </div>

                <h4 className="font-editorial-serif text-3xl sm:text-4xl lg:text-[2.3rem] font-black text-earth-900 leading-tight">
                  {r.records[0].title}
                </h4>

                <p className="text-earth-800 text-base sm:text-lg leading-relaxed font-sans text-justify">
                  {r.records[0].description}
                </p>

                {/* Author Contribution Callout */}
                <div className="bg-white p-4 border-2 border-earth-900 space-y-1.5 shadow-[3px_3px_0_rgba(42,24,21,0.12)]">
                  <div className="font-mono text-xs uppercase tracking-wider font-black text-rosewood-600">
                    Author Contribution & Role:
                  </div>
                  <div className="text-xs sm:text-sm text-earth-900 leading-relaxed font-sans pl-2 border-l-2 border-rosewood-500 font-semibold">
                    {r.records[0].contribution}
                  </div>
                </div>

                {/* DOI & Citation Button */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href={r.records[0].doiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-earth-900 hover:bg-[#FF007F] text-white text-xs sm:text-sm font-mono font-bold px-7 py-3.5 transition-colors group shadow-[3px_3px_0_rgba(42,24,21,0.25)] border-2 border-earth-900 cursor-pointer"
                  >
                    <span>DOI: {r.records[0].doi}</span>
                    <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                  <span className="text-xs font-mono text-earth-800 font-bold">
                    Published Paper Record · Verified Indexed Journal
                  </span>
                </div>
              </div>

              {/* Offset Manuscript Preview Plate with Tape */}
              <div 
                className="lg:col-span-5 relative p-4 bg-white border-3 border-earth-900 shadow-[8px_8px_0_rgba(42,24,21,0.2)] group cursor-pointer hover:-translate-y-1 transition-transform"
                onClick={() => setSelectedResearchImage({ src: '/assets/13.jpg', title: r.records[0].title })}
              >
                <div className="flex justify-between items-center text-xs font-mono text-earth-800 mb-2.5 px-1 border-b border-earth-300 pb-1.5">
                  <span className="font-black uppercase tracking-wider text-rosewood-600">Plate I · Journal Excerpt</span>
                  <span className="text-earth-600 group-hover:text-earth-950 font-bold">Inspect ↗</span>
                </div>
                <div className="aspect-[4/5] overflow-hidden bg-gray-50 border border-earth-300 flex items-center justify-center p-1">
                  <img 
                    src="/assets/13.jpg" 
                    alt="Sustainability Article 13"
                    className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-500"
                  />
                </div>
                <div className="mt-3 text-center border-t border-earth-200 pt-1.5">
                  <span className="font-editorial-script text-earth-900 text-base font-bold">
                    “Published manuscript verification · MDPI Sustainability”
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* PLATE 02: Accepted Conference Research — SR-ICYREB 2025   */}
          {/* ======================================================== */}
          <div className="bg-white p-6 sm:p-10 lg:p-12 border-3 border-earth-900 shadow-[12px_12px_0_rgba(42,24,21,0.22)] relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="font-mono text-xs font-black bg-earth-900 text-white px-2.5 py-0.5">
                    {r.records[1].number}
                  </span>
                  <span className={`text-xs font-mono font-black px-2.5 py-0.5 border ${r.records[1].statusColor}`}>
                    {r.records[1].status}
                  </span>
                  <span className="text-xs font-mono text-earth-700 uppercase tracking-wider font-bold">
                    {r.records[1].typeBadge}
                  </span>
                </div>

                <h4 className="font-editorial-serif text-2xl sm:text-3xl lg:text-[2.1rem] font-black text-earth-900 leading-tight">
                  {r.records[1].title}
                </h4>

                <p className="text-earth-800 text-base leading-relaxed font-sans text-justify">
                  {r.records[1].description}
                </p>

                {/* Metadata Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-[#FAF6F0] p-4 border-2 border-earth-900 text-xs shadow-2xs">
                  <div>
                    <span className="font-mono text-earth-500 text-[10px] uppercase font-bold block">Position</span>
                    <span className="font-black text-earth-900 text-sm font-editorial-serif">{r.records[1].authorPosition}</span>
                  </div>
                  <div>
                    <span className="font-mono text-earth-500 text-[10px] uppercase font-bold block">Methodology</span>
                    <span className="font-black text-earth-900 text-sm font-editorial-serif">{r.records[1].method}</span>
                  </div>
                  <div>
                    <span className="font-mono text-earth-500 text-[10px] uppercase font-bold block">Contribution</span>
                    <span className="font-black text-earth-900 text-sm font-editorial-serif">{r.records[1].contribution}</span>
                  </div>
                </div>

                <div className="text-xs font-mono text-earth-800 pt-1 font-bold">
                  Conference Proceedings: <strong className="text-earth-900">{r.records[1].conference}</strong>
                </div>
              </div>

              {/* Conference Evidence Visual (14.jpg) */}
              <div 
                className="lg:col-span-5 relative p-4 bg-[#FAF6F0] border-2 border-earth-900 shadow-[6px_6px_0_rgba(42,24,21,0.15)] group cursor-pointer hover:-translate-y-1 transition-transform"
                onClick={() => setSelectedResearchImage({ src: '/assets/14.jpg', title: r.records[1].title })}
              >
                <div className="flex justify-between items-center text-xs font-mono text-earth-800 mb-2 px-1 border-b border-earth-300 pb-1">
                  <span className="font-black uppercase tracking-wider text-rosewood-600">Plate II · Conference Acceptance</span>
                  <span className="text-earth-600 group-hover:text-earth-950 font-bold">Inspect ↗</span>
                </div>
                <div className="aspect-[4/5] overflow-hidden bg-white border border-earth-300 flex items-center justify-center p-1">
                  <img 
                    src="/assets/14.jpg" 
                    alt="SR-ICYREB Research 14"
                    className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-500"
                  />
                </div>
                <div className="mt-2.5 text-center border-t border-earth-200 pt-1">
                  <span className="font-editorial-script text-earth-900 text-base font-bold">
                    “Official letter of acceptance & presentation schedule”
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* ======================================================== */}
          {/* PLATE 03: Completed Manuscript — SSB Tax Policy           */}
          {/* ======================================================== */}
          <div className="bg-white p-6 sm:p-10 lg:p-12 border-3 border-earth-900 shadow-[12px_12px_0_rgba(42,24,21,0.22)] relative">
            <div className="space-y-6">
              
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="font-mono text-xs font-black bg-earth-900 text-white px-2.5 py-0.5">
                  {r.records[2].number}
                </span>
                <span className={`text-xs font-mono font-black px-2.5 py-0.5 border ${r.records[2].statusColor}`}>
                  {r.records[2].status}
                </span>
                <span className="text-xs font-mono text-earth-700 uppercase tracking-wider font-bold">
                  {r.records[2].typeBadge}
                </span>
              </div>

              <h4 className="font-editorial-serif text-2xl sm:text-3xl lg:text-[2.1rem] font-black text-earth-900 leading-tight max-w-4xl">
                {r.records[2].title}
              </h4>

              <p className="text-earth-800 text-base leading-relaxed font-sans text-justify max-w-4xl">
                {r.records[2].description}
              </p>

              {/* Statistical & Sample Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#FAF6F0] p-4 border-2 border-earth-900 text-xs shadow-2xs">
                <div>
                  <span className="font-mono text-earth-500 text-[10px] uppercase font-bold block">Position</span>
                  <span className="font-black text-rosewood-600 text-sm font-editorial-serif">{r.records[2].authorPosition}</span>
                </div>
                <div>
                  <span className="font-mono text-earth-500 text-[10px] uppercase font-bold block">Methodology</span>
                  <span className="font-black text-earth-900 text-sm font-editorial-serif">{r.records[2].method}</span>
                </div>
                <div>
                  <span className="font-mono text-earth-500 text-[10px] uppercase font-bold block">Empirical Sample</span>
                  <span className="font-black text-earth-900 text-sm font-editorial-serif">{r.records[2].sample}</span>
                </div>
                <div>
                  <span className="font-mono text-earth-500 text-[10px] uppercase font-bold block">Contribution</span>
                  <span className="font-black text-earth-900 text-sm font-editorial-serif">{r.records[2].contribution}</span>
                </div>
              </div>

              {/* Research Model Visuals (15.jpg and 16.jpg) Styled as Paired Plates */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-3">
                
                <div 
                  className="relative p-3.5 bg-white border-2 border-earth-900 shadow-[4px_4px_0_rgba(42,24,21,0.12)] group cursor-pointer hover:-translate-y-1 transition-transform"
                  onClick={() => setSelectedResearchImage({ src: '/assets/15.jpg', title: 'Empirical Model & Measurement Framework' })}
                >
                  <div className="flex justify-between items-center text-xs font-mono text-earth-800 mb-2 px-1 border-b border-earth-200 pb-1">
                    <span className="font-black uppercase tracking-wider text-rosewood-600">Plate III-A · Conceptual Model</span>
                    <span className="text-earth-600 group-hover:text-earth-950 font-bold">Zoom ↗</span>
                  </div>
                  <div className="aspect-[16/9] overflow-hidden bg-gray-50 border border-earth-300 flex items-center justify-center">
                    <img 
                      src="/assets/15.jpg" 
                      alt="SSB Tax Framework 15"
                      className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-500"
                    />
                  </div>
                  <div className="mt-2 text-center border-t border-earth-200 pt-1">
                    <span className="font-editorial-script text-earth-900 text-sm font-bold">
                      Research model & structural path hypotheses
                    </span>
                  </div>
                </div>

                <div 
                  className="relative p-3.5 bg-white border-2 border-earth-900 shadow-[4px_4px_0_rgba(42,24,21,0.12)] group cursor-pointer hover:-translate-y-1 transition-transform"
                  onClick={() => setSelectedResearchImage({ src: '/assets/16.jpg', title: 'PLS-SEM Statistical Results Table' })}
                >
                  <div className="flex justify-between items-center text-xs font-mono text-earth-800 mb-2 px-1 border-b border-earth-200 pb-1">
                    <span className="font-black uppercase tracking-wider text-rosewood-600">Plate III-B · PLS-SEM Results</span>
                    <span className="text-earth-600 group-hover:text-earth-950 font-bold">Zoom ↗</span>
                  </div>
                  <div className="aspect-[16/9] overflow-hidden bg-gray-50 border border-earth-300 flex items-center justify-center">
                    <img 
                      src="/assets/16.jpg" 
                      alt="SSB Tax Results Table 16"
                      className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-500"
                    />
                  </div>
                  <div className="mt-2 text-center border-t border-earth-200 pt-1">
                    <span className="font-editorial-script text-earth-900 text-sm font-bold">
                      Bootstrapped coefficients & statistical significance
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedResearchImage && (
        <div 
          className="fixed inset-0 z-50 bg-earth-950/85 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedResearchImage(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-white p-5 border-2 border-earth-900 shadow-[8px_8px_0_rgba(0,0,0,0.5)]" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-3 pb-2 border-b border-earth-300">
              <span className="font-editorial-serif font-bold text-lg text-earth-900">
                {selectedResearchImage.title}
              </span>
              <button 
                onClick={() => setSelectedResearchImage(null)}
                className="p-1 text-earth-700 hover:text-earth-950 hover:bg-paper-100 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>
            <div className="max-h-[75vh] overflow-auto flex items-center justify-center bg-paper-100 p-2">
              <img 
                src={selectedResearchImage.src} 
                alt={selectedResearchImage.title} 
                className="max-h-[72vh] w-auto object-contain border border-earth-300"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
