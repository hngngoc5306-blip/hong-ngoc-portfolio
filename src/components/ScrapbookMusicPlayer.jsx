import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Music, Volume2, VolumeX } from 'lucide-react';

export default function ScrapbookMusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn('Playback prevented or file error:', err);
      });
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const formatTime = (secs) => {
    if (isNaN(secs) || secs < 0) return '00:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // 42 bars representing equalizer waveform echoing the reference image
  // Each bar has varied height and responsive animated delays
  const waveformHeights = [
    35, 60, 45, 80, 50, 70, 90, 65, 40, 85, 100, 75,
    55, 90, 70, 45, 80, 95, 60, 40, 75, 85, 50, 65,
    90, 75, 60, 85, 45, 70, 95, 80, 55, 65, 40, 50,
    75, 90, 60, 45, 70, 55
  ];

  return (
    <div className="relative w-full py-8 sm:py-10 px-4 sm:px-6 lg:px-8 bg-[#88BBD3] overflow-visible select-none z-20">
      {/* Background grain continuation */}
      <div className="absolute inset-0 paper-grain pointer-events-none" />

      {/* Hidden functional audio element */}
      <audio ref={audioRef} src="/music.mp3" preload="metadata" />

      {/* Main Music Player Envelope / Scrapbook Insert: Extended horizontally to max-w-6xl */}
      <div className="relative max-w-5xl xl:max-w-6xl mx-auto">
        
        {/* Layer 0: Slightly offset scrapbook paper underneath for physical depth */}
        <div 
          className="absolute inset-0 bg-[#EFE6D8] border-2 border-earth-900 shadow-[6px_6px_0_rgba(42,24,21,0.2)] transform translate-x-1.5 translate-y-1.5 sm:translate-x-2.5 sm:translate-y-2.5 rotate-[-0.5deg] pointer-events-none transition-transform duration-300" 
        />

        {/* Layer 1: Tape strip pinned at the top left edge */}
        <div className="absolute -top-3.5 left-8 sm:left-14 w-24 sm:w-28 h-6 z-30 pointer-events-none rotate-[-2deg] opacity-90">
          <img src="/assets/collage_elem_39.png" alt="Washi Tape" className="w-full h-full object-contain" />
        </div>

        {/* Layer 1b: Cute hand-drawn star decoration on top right corner (echoing reference star) */}
        <div className="absolute -top-3 -right-2 text-yellow-300 z-30 pointer-events-none rotate-12 drop-shadow-xs">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.6 8.4L23.4 8.4L16.3 13.6L19 22L12 16.8L5 22L7.7 13.6L0.6 8.4L9.4 8.4L12 0Z"/>
          </svg>
        </div>

        {/* Layer 2: Main Player Card with comfortable horizontal padding (px-6 sm:px-8 md:px-10) */}
        <div className="relative bg-[#FAF6F0] border-2 border-earth-900 py-3.5 sm:py-4 px-5 sm:px-8 md:px-10 shadow-[5px_5px_0_rgba(42,24,21,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_rgba(42,24,21,0.22)]">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8">
            
            {/* LEFT SECTION: Scrapbook Vinyl + Introductory Sentence + Title */}
            <div className="flex items-center gap-3.5 sm:gap-4.5 w-full lg:w-auto shrink-0">
              
              {/* Album Art Frame with paper border and spinning vinyl disc interaction */}
              <div className="relative w-15 h-15 sm:w-16 sm:h-16 shrink-0">
                {/* Paper polaroid backing */}
                <div className="absolute inset-0 bg-white border border-earth-900 shadow-xs rotate-[-3deg]" />
                
                {/* Vinyl / Cover Art */}
                <div 
                  className={`relative w-full h-full p-1 flex items-center justify-center transition-transform ${
                    isPlaying ? 'rotate-0' : 'rotate-[-3deg]'
                  }`}
                >
                  <div 
                    className={`w-full h-full rounded-full bg-[#1A1816] border border-earth-800 flex items-center justify-center shadow-inner relative overflow-hidden ${
                      isPlaying ? 'animate-[spin_4s_linear_infinite]' : ''
                    }`}
                  >
                    {/* Vinyl grooves */}
                    <div className="absolute inset-1.5 rounded-full border border-earth-700/40" />
                    <div className="absolute inset-3 rounded-full border border-earth-700/50" />
                    
                    {/* Center label */}
                    <div className="w-5 h-5 rounded-full bg-[#E26D5C] border border-white/60 flex items-center justify-center shadow-xs">
                      <div className="w-1.5 h-1.5 rounded-full bg-earth-900" />
                    </div>
                  </div>
                </div>

                {/* Mini music note badge */}
                <div className="absolute -bottom-1 -right-1 bg-[#FEE78A] text-earth-900 border border-earth-900 p-0.5 rounded-xs shadow-2xs">
                  <Music size={10} className="stroke-[2.5]" />
                </div>
              </div>

              {/* Track Metadata & Title Hierarchy */}
              <div className="min-w-0 flex-1">
                {/* Title */}
                <h3 className="font-editorial-serif font-black text-lg sm:text-xl lg:text-2xl text-earth-900 tracking-tight leading-tight truncate">
                  A Tiny Tune ♫
                </h3>

                {/* File tag */}
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-mono text-[10px] sm:text-[11px] font-bold text-earth-600 bg-[#FAF0E6] px-1.5 py-0.5 border border-earth-900/25">
                    // music.mp3
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-mono text-earth-500 tracking-wider uppercase hidden sm:inline">
                    320KBPS · STUDY GROOVE
                  </span>
                </div>
              </div>
            </div>

            {/* CENTER SECTION: Scrapbook Waveform Equalizer */}
            <div className="w-full lg:flex-1 max-w-lg px-1 sm:px-2 flex flex-col justify-center">
              <div 
                className="h-10 sm:h-11 bg-[#F3EDE2] border border-earth-900/40 rounded-xs px-2.5 sm:px-3 flex items-center justify-between gap-1 shadow-inner overflow-hidden"
                title={isPlaying ? "Playing audio waveform" : "Paused waveform"}
              >
                {waveformHeights.map((h, i) => (
                  <span
                    key={i}
                    className="w-1 sm:w-1.5 rounded-full transition-all duration-150"
                    style={{
                      height: isPlaying ? `${Math.max(15, (h * ((i % 3 + 1) * 0.35)))}%` : `${h * 0.4}%`,
                      backgroundColor: i % 3 === 0 ? '#E26D5C' : i % 3 === 1 ? '#5A8B9C' : '#D18D9E',
                      opacity: isPlaying ? 0.95 : 0.45,
                      animation: isPlaying ? `waveformBounce 0.8s ease-in-out infinite alternate ${i * 0.04}s` : 'none',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* RIGHT SECTION: Controls & Time Display (With comfortable right-side padding) */}
            <div className="flex items-center justify-between lg:justify-end gap-3.5 sm:gap-5 w-full lg:w-auto shrink-0 pr-1 sm:pr-2">
              
              {/* Play / Pause Main Interactive Red/Terracotta Circular Button */}
              <button
                type="button"
                onClick={togglePlay}
                className="relative group flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 bg-[#E26D5C] hover:bg-[#D05C4B] active:translate-y-0.5 text-white border-2 border-earth-900 shadow-[3px_3px_0_rgba(42,24,21,0.25)] rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-earth-900 focus:ring-offset-2 shrink-0 cursor-pointer"
                aria-label={isPlaying ? 'Pause music' : 'Play music'}
              >
                {isPlaying ? (
                  <Pause size={20} className="fill-current" />
                ) : (
                  <Play size={20} className="fill-current ml-0.5" />
                )}
              </button>

              {/* Mute / Unmute Button */}
              <button
                type="button"
                onClick={toggleMute}
                className="p-2 text-earth-700 hover:text-earth-950 hover:bg-paper-200 border border-earth-900/30 rounded-xs transition-colors focus:outline-none shrink-0"
                aria-label={isMuted ? 'Unmute music' : 'Mute music'}
                title={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>

            </div>

          </div>

          {/* Bottom subtle handwritten note with enlarged text */}
          <div className="mt-2.5 pt-1.5 border-t border-earth-300/80 flex items-center justify-between text-earth-800">
            <span className="font-editorial-script text-base sm:text-lg lg:text-xl font-bold tracking-wide">
              ~ background listening while exploring portfolio ~
            </span>
            <span className="font-mono text-[10px] sm:text-xs text-earth-500 uppercase tracking-widest hidden sm:inline">
              TRACK NO. 01 · CASSETTE INSERT
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}
