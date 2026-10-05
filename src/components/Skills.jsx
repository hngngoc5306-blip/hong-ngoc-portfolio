import React from 'react';
import { Layers, Binary, PenTool, Cpu, Globe2, BookCheck, Tag } from 'lucide-react';
import TornDivider from './TornDivider';
import WashiTape from './WashiTape';

export default function Skills({ content }) {
  const sk = content.skills;

  return (
    <section 
      id="skills" 
      className="relative py-28 lg:py-36 px-4 sm:px-6 lg:px-8 bg-[#FAF6F0] overflow-hidden border-t-2 border-earth-900"
    >
      {/* Background grain texture */}
      <div className="absolute inset-0 paper-grain pointer-events-none" />

      {/* Floating Starbursts & Flower motif from Template Page 4 */}
      <div className="absolute top-12 left-10 text-yellow-400 z-10 hidden sm:block animate-cover-star">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.6 8.4L23.4 8.4L16.3 13.6L19 22L12 16.8L5 22L7.7 13.6L0.6 8.4L9.4 8.4L12 0Z"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Editorial Section Header */}
        <div className="flex items-center justify-between gap-4 mb-14 border-b-2 border-earth-900 pb-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-earth-900 font-bold bg-[#FF007F] text-white px-3 py-1 shadow-[2px_2px_0_rgba(42,24,21,0.2)]">
              {sk.sectionNumber} — {sk.sectionTitle}
            </span>
            <span className="text-earth-700 font-mono text-xs hidden sm:inline-block font-semibold">
              Editorial Taxonomic Index · Methodological & Digital Capabilities
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-editorial-script text-lg text-earth-800 hidden md:inline-block">
              ~ taxonomy index ~
            </span>
            <span className="text-xs font-mono text-earth-900 bg-white px-2 py-0.5 border border-earth-900 font-bold">P. 08</span>
          </div>
        </div>

        {/* Open Double-Page Notebook Spread (Strictly derived from Template.pdf Page 4) */}
        <div className="relative bg-white p-6 sm:p-10 lg:p-14 border-3 border-earth-900 shadow-[10px_10px_0_rgba(42,24,21,0.25)]">
          
          {/* Blue Checkered Washi Tape top left (Template Page 4 signature gingham strip) */}
          <div 
            className="absolute top-6 left-8 w-10 h-24 z-20 hidden sm:block rotate-1 shadow-xs"
            style={{
              backgroundColor: '#DCE8F2',
              backgroundImage: 'repeating-linear-gradient(0deg, rgba(70,130,180,0.3) 0px, rgba(70,130,180,0.3) 6px, transparent 6px, transparent 12px), repeating-linear-gradient(90deg, rgba(70,130,180,0.3) 0px, rgba(70,130,180,0.3) 6px, transparent 6px, transparent 12px)',
              border: '1px solid rgba(70,130,180,0.5)'
            }}
          />

          {/* Botanical flower motif top right (Template Page 4 crocus flowers) */}
          <div className="absolute -top-10 right-8 w-28 sm:w-36 opacity-95 z-20 pointer-events-none hidden md:block animate-cover-tulip">
            <img src="/assets/collage_elem_34.png" alt="Flowers" className="w-full h-full object-contain filter drop-shadow-md" />
          </div>

          {/* Center Pink Highlight Banner: "skills" */}
          <div className="text-center mb-14">
            <div className="template-banner-pink text-4xl sm:text-5xl md:text-6xl tracking-tight transform -rotate-1 shadow-md">
              skills
            </div>
            <p className="font-editorial-serif italic text-earth-900 text-base sm:text-lg mt-3 max-w-2xl mx-auto font-medium">
              “{sk.subtitle}”
            </p>
          </div>

          {/* 
            Editorial Taxonomic Index:
            Open Horizontal Clusters with Monospace Swatches & Specimen Tags
          */}
          <div className="space-y-6 max-w-5xl mx-auto">
            {sk.categories.map((cat, idx) => (
              <div 
                key={idx}
                className="bg-[#FAF6F0] p-6 sm:p-8 border-2 border-earth-900 shadow-[4px_4px_0_rgba(42,24,21,0.1)] relative transform hover:-translate-y-0.5 transition-transform"
              >
                {/* Category Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b-2 border-earth-900">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-black bg-earth-900 text-white px-2.5 py-0.5">
                      INDEX 0{idx + 1}
                    </span>
                    <h4 className="font-editorial-serif font-black text-xl text-earth-900">
                      {cat.title}
                    </h4>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-earth-700">
                    <Tag size={13} className="text-[#FF007F]" />
                    <span className="font-bold">{cat.skills.length} Certified Capabilities</span>
                  </div>
                </div>

                {/* Curated Skill Tag Swatches (Rectangular Editorial Tags) */}
                <div className="pt-4">
                  <div className="flex flex-wrap gap-2.5">
                    {cat.skills.map((skillItem, sIdx) => (
                      <span 
                        key={sIdx}
                        className="bg-white hover:bg-earth-900 hover:text-white text-earth-900 text-xs sm:text-sm px-3.5 py-1.5 font-mono font-bold border-2 border-earth-900 transition-colors shadow-[2px_2px_0_rgba(42,24,21,0.08)] cursor-default"
                      >
                        {skillItem}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Handwritten verification at bottom */}
          <div className="mt-10 pt-4 border-t-2 border-earth-900/20 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-earth-600">
            <span>Methodological Rigor & Technical Stack · Foreign Trade University</span>
            <span className="font-editorial-script text-earth-900 text-lg font-bold">verified applied competence ✦</span>
          </div>

        </div>

      </div>
    </section>
  );
}
