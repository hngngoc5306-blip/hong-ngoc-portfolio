import React from 'react';
import Navbar from './components/Navbar';
import OpeningCover from './components/OpeningCover';
import Overview from './components/Overview';
import SelectedWork from './components/SelectedWork';
import Experience from './components/Experience';
import Research from './components/Research';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EditorialBridge from './components/EditorialBridge';
import ScrapbookMusicPlayer from './components/ScrapbookMusicPlayer';
import EditorialScrapbookCursor from './components/EditorialScrapbookCursor';
import { useScrollEntrance } from './hooks/useScrollEntrance';
import { content } from './data/content';

export default function App() {
  const currentContent = content;
  useScrollEntrance();

  const handleScrollToOverview = () => {
    const el = document.getElementById('overview');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#88BBD3] text-earth-900 font-sans selection:bg-rosewood-200 selection:text-earth-900 relative">
      {/* Interactive Editorial Scrapbook Custom Cursor */}
      <EditorialScrapbookCursor />

      {/* Floating Global Navbar with smooth anchor navigation */}
      <Navbar content={currentContent} />

      {/* 01 — OPENING / COVER (Dedicated first screen based on Page 1 of Template.pdf) */}
      <OpeningCover content={currentContent} onScrollDown={handleScrollToOverview} />

      {/* SCRAPBOOK MUSIC PLAYER INSERT (Between Cover and Overview) */}
      <ScrapbookMusicPlayer />

      {/* 01 — OVERVIEW (Multi-column profile spread based on overview layout.jpg) */}
      <Overview content={currentContent} />

      {/* BRIDGE: Overview (Sky canvas / Cream paper) → Selected Work (Cream paper #FAF6F0) */}
      <EditorialBridge 
        fillTop="#88BBD3"
        fillBottom="#FAF6F0"
        tapeAngle="3deg"
        tapeColor="blue"
        handwriting="~ chapter i: digital product craft ~"
        stampText="BUILD 01 · OWLUP"
        starColor="#E26D5C"
        className="-my-4 sm:-my-6"
      />

      {/* 02 — SELECTED WORK (OwlUp UX flow, AI-assisted development, live product) */}
      <SelectedWork content={currentContent} />

      {/* BRIDGE: Selected Work (Cream #FAF6F0) → Experience (Cream #FAF6F0 with memo archive) */}
      <EditorialBridge 
        fillTop="#FAF6F0"
        fillBottom="#FAF6F0"
        tapeAngle="-4deg"
        tapeColor="gold"
        handwriting="~ chapter ii: operational rhythm ~"
        stampText="DISPATCH · ARCHIVE"
        starColor="#5A8B9C"
        className="-my-4 sm:-my-6"
      />

      {/* 03 — EXPERIENCE (Event operations & execution) */}
      <Experience content={currentContent} />

      {/* BRIDGE: Experience (Cream #FAF6F0) → Research (Cream #FAF6F0 with academic monograph) */}
      <EditorialBridge 
        fillTop="#FAF6F0"
        fillBottom="#FAF6F0"
        tapeAngle="2deg"
        tapeColor="rosewood"
        handwriting="~ chapter iii: empirical inquiry ~"
        stampText="PEER REVIEW · Q1 SCOPUS"
        starColor="#B85D58"
        className="-my-4 sm:-my-6"
      />

      {/* 04 — RESEARCH (Curated archive: 3 verified papers, authentic visuals, exact status labels) */}
      <Research content={currentContent} />

      {/* BRIDGE: Research (Cream #FAF6F0) → Contact (Sky blue #88BBD3 closing spread) */}
      <EditorialBridge 
        fillTop="#FAF6F0"
        fillBottom="#88BBD3"
        tapeAngle="-3.5deg"
        tapeColor="cream"
        handwriting="~ chapter iv: dialogue & collaboration ~"
        stampText="FINAL DISPATCH · 2026"
        starColor="#FEE78A"
        className="-my-4 sm:-my-6"
      />

      {/* 05 — CONTACT (Editorial invitation, direct verified email & ORCID links) */}
      <Contact content={currentContent} />

      {/* Colophon & Footer */}
      <Footer content={currentContent} />
    </div>
  );
}
