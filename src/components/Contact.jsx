import React, { useState } from 'react';
import { Mail, ExternalLink, Copy, Check, MapPin, Send, ArrowUpRight, Sparkles } from 'lucide-react';

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
      className="relative py-28 lg:py-36 px-4 sm:px-6 lg:px-8 bg-[#88BBD3] overflow-visible"
      style={{
        backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.45) 1.5px, transparent 1.5px)',
        backgroundSize: '28px 28px'
      }}
    >
      {/* Background grain texture */}
      <div className="absolute inset-0 paper-grain pointer-events-none" />

      {/* Floating Botanical Bouquet in bottom left corner (Template Page 9 echo) */}
      <div className="absolute -bottom-10 left-6 sm:left-14 w-40 sm:w-56 opacity-95 pointer-events-none z-20 hidden md:block animate-cover-tulip">
        <img 
          src="/assets/collage_elem_34.png" 
          alt="Tulips Bouquet" 
          className="w-full h-auto object-contain filter drop-shadow-lg"
        />
      </div>

      {/* Floating Starburst top right */}
      <div className="absolute top-12 right-12 text-yellow-400 z-10 hidden sm:block animate-cover-star">
        <svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor" className="filter drop-shadow-xs">
          <path d="M12 0L14.6 8.4L23.4 8.4L16.3 13.6L19 22L12 16.8L5 22L7.7 13.6L0.6 8.4L9.4 8.4L12 0Z"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Editorial Section Header */}
        <div className="flex items-center justify-between gap-4 mb-12 pb-3 border-b border-earth-900/30">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-earth-900 font-bold bg-[#FAF6F0] px-3.5 py-1.5 border-2 border-earth-900 shadow-[2px_2px_0_rgba(42,24,21,0.2)]">
              {ct.sectionNumber} — {ct.sectionTitle}
            </span>
            <span className="text-white drop-shadow-xs font-mono text-xs hidden sm:inline-block font-bold">
              Closing Spread & Postcard Invitation
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-editorial-script text-lg text-white drop-shadow-xs hidden md:inline-block">
              ~ final dispatch ~
            </span>
            <span className="text-xs sm:text-sm font-mono text-earth-900 bg-white/95 px-3 py-1 border border-earth-900 uppercase tracking-wider font-black">
              POSTCARD · 05
            </span>
          </div>
        </div>

        {/* 
          Template.pdf Page 9 & 10 Closing Spread:
          Open Notebook Postcard with Polaroids, Colorful Contact Badges, and Star Doodles
        */}
        <div className="relative bg-[#FAF6F0] p-6 sm:p-10 lg:p-14 border-3 border-earth-900 shadow-[16px_16px_0_rgba(42,24,21,0.3)]">
          
          {/* Blue Checkered Washi Tape at bottom right (Echoing Template Page 9) */}
          <div 
            className="absolute bottom-6 right-8 w-28 h-8 z-20 hidden sm:block rotate-2 shadow-xs"
            style={{
              backgroundColor: '#DCE8F2',
              backgroundImage: 'repeating-linear-gradient(0deg, rgba(70,130,180,0.3) 0px, rgba(70,130,180,0.3) 6px, transparent 6px, transparent 12px), repeating-linear-gradient(90deg, rgba(70,130,180,0.3) 0px, rgba(70,130,180,0.3) 6px, transparent 6px, transparent 12px)',
              border: '1.5px solid rgba(70,130,180,0.6)'
            }}
          />

          {/* Yellow Star doodles top right & bottom left */}
          <div className="absolute -top-5 right-20 text-yellow-400 z-10 hidden sm:block animate-cover-star">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.6 8.4L23.4 8.4L16.3 13.6L19 22L12 16.8L5 22L7.7 13.6L0.6 8.4L9.4 8.4L12 0Z"/>
            </svg>
          </div>
          <div className="absolute bottom-8 left-12 text-[#3A6878] z-10 hidden sm:block animate-micro-twinkle">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.6 8.4L23.4 8.4L16.3 13.6L19 22L12 16.8L5 22L7.7 13.6L0.6 8.4L9.4 8.4L12 0Z"/>
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Overlapping Memories Polaroids (Echoing Template Page 9) (5 cols) */}
            <div className="lg:col-span-5 relative flex justify-center py-4">
              
              {/* Polaroid 1 (Tilted Left) */}
              <div className="w-48 sm:w-56 template-polaroid transform -rotate-4 -mr-8 z-10 hover:rotate-0 transition-transform duration-300">
                <div className="aspect-[4/5] overflow-hidden bg-earth-200 border border-earth-300">
                  <img src="/assets/profile.jpg" alt="Hong Ngoc" className="w-full h-full object-cover object-top" />
                </div>
                <div className="text-center pt-2.5 font-editorial-script text-earth-900 text-sm font-bold">
                  Hong Ngoc · 2026
                </div>
              </div>

              {/* Polaroid 2 (Tilted Right) */}
              <div className="w-48 sm:w-56 template-polaroid transform rotate-3 mt-12 z-15 hover:rotate-0 transition-transform duration-300">
                <div className="aspect-[4/5] overflow-hidden bg-earth-200 border border-earth-300">
                  <img src="/assets/2.jpg" alt="Concert Stage" className="w-full h-full object-cover object-center" />
                </div>
                <div className="text-center pt-2.5 font-editorial-script text-earth-900 text-sm font-bold">
                  Symphonic Concert Production
                </div>
              </div>

            </div>

            {/* Right Column: Statement, Script Header, and Template.pdf Signature Badges (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <span className="font-editorial-script text-4xl sm:text-5xl text-earth-950 font-bold block transform -rotate-1">
                  Contact Me
                </span>
                <h3 className="font-editorial-serif text-3xl sm:text-4xl lg:text-5xl font-black text-earth-900 leading-tight">
                  {ct.statement}
                </h3>
              </div>

              <p className="text-earth-800 text-base leading-relaxed font-sans text-justify">
                {ct.subtext}
              </p>

              {/* Template.pdf Page 9 Signature Colorful Contact Badges (Yellow, Pink, Sky Blue) */}
              <div className="space-y-3.5 pt-2">
                
                {/* Yellow Badge: Institutional Location */}
                <div className="bg-[#FEE78A] border-2 border-earth-900 px-6 py-3.5 rounded-full flex items-center justify-between shadow-[3px_3px_0_rgba(42,24,21,0.2)]">
                  <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-earth-900 flex items-center gap-2.5">
                    <MapPin size={16} className="text-earth-900" />
                    Foreign Trade University · Hanoi, Vietnam
                  </span>
                  <span className="font-editorial-script text-earth-900 font-bold text-base hidden sm:inline-block">
                    IBE 2024–2028
                  </span>
                </div>

                {/* Pink Badge: Email Address with Copy */}
                <div className="bg-[#F8B4D9] border-2 border-earth-900 px-6 py-3.5 rounded-full flex items-center justify-between shadow-[3px_3px_0_rgba(42,24,21,0.2)]">
                  <div className="flex items-center gap-2.5 truncate">
                    <Mail size={16} className="text-earth-900 shrink-0" />
                    <a 
                      href={`mailto:${ct.email}`}
                      className="font-mono text-xs sm:text-base font-black text-earth-900 hover:underline truncate"
                    >
                      {ct.email}
                    </a>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="text-xs font-mono font-bold text-earth-900 bg-white/90 hover:bg-white px-4 py-1.5 rounded-full border border-earth-800 transition-colors shrink-0 shadow-2xs cursor-pointer"
                  >
                    {copied ? <span className="text-emerald-800 font-bold">Copied!</span> : <><Copy size={12} className="inline mr-1" /> Copy</>}
                  </button>
                </div>

                {/* Sky Blue Badge: Verified ORCID Identifier */}
                <a 
                  href={ct.orcid}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#62C8EB] border-2 border-earth-900 px-6 py-3.5 rounded-full flex items-center justify-between shadow-[3px_3px_0_rgba(42,24,21,0.2)] hover:brightness-105 transition-all block cursor-pointer"
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <span className="w-5 h-5 bg-white text-earth-900 rounded-full flex items-center justify-center font-bold text-[10px] shrink-0 border border-earth-900">iD</span>
                    <span className="font-mono text-xs sm:text-base font-black text-earth-900 truncate">
                      ORCID: {ct.orcidId}
                    </span>
                  </div>
                  <ArrowUpRight size={18} className="text-earth-900 shrink-0" />
                </a>

              </div>

              {/* Handwritten Note at bottom */}
              <div className="pt-3 border-t-2 border-earth-900/20">
                <p className="font-editorial-script text-xl sm:text-2xl text-rosewood-700 font-bold">
                  “Always eager to exchange perspectives with researchers, mentors, and collaborative teams.”
                </p>
              </div>

            </div>

          </div>

          {/* Closing Editorial "Thank You" Moment inspired by Template.pdf Page 10 */}
          <div className="mt-14 pt-8 border-t-2 border-earth-900/30 flex flex-col sm:flex-row items-center justify-between gap-6 relative">
            {/* Washi tape at bottom edge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-32 h-6 opacity-85 pointer-events-none -rotate-1 hidden sm:block">
              <img src="/assets/collage_elem_39.png" alt="Tape" className="w-full h-full object-contain" />
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full border-2 border-earth-900 flex items-center justify-center shadow-[2px_2px_0_rgba(42,24,21,0.2)]">
                <Sparkles size={22} className="text-yellow-500 fill-yellow-400" />
              </div>
              <div>
                <span className="font-editorial-script text-2xl sm:text-3xl text-earth-900 font-black tracking-tight block">
                  thank you for visiting my portfolio!
                </span>
                <span className="font-mono text-xs text-earth-800 uppercase tracking-widest font-bold">
                  Nguyen Nhu Hong Ngoc · 2024–2028 · Hanoi, Vietnam
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="template-banner-pink text-xs uppercase tracking-widest font-mono">
                END OF PUBLICATION
              </span>
              <span className="font-mono text-xs text-earth-900 bg-white px-2.5 py-1 border border-earth-900 font-bold">
                VOL. 01 / COMPLETE
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
