# Project Rules & Design Configuration: Hong Ngoc Portfolio

This project integrates **Taste Skill** (Anti-Slop Frontend Design System) for building an authentic, editorial, high-craft bilingual portfolio.

---

## 1. Taste Skill Configuration (The Three Dials)

* **`DESIGN_VARIANCE: 8`** (Asymmetry, collage layering, scrapbook tape/pins, magazine editorial spreads)
* **`MOTION_INTENSITY: 6`** (Restrained, fluid scroll reveals, subtle hover lifts, tactile button physics)
* **`VISUAL_DENSITY: 4`** (Airy publication spacing, negative space, rhythmic reading pacing)

---

## 2. Design Read (Brief Inference)

* **Page kind**: Bilingual (EN/VI) One-page Academic–Professional Portfolio.
* **Owner**: Nguyen Nhu Hong Ngoc (Nguyễn Như Hồng Ngọc) — International Business Economics, Foreign Trade University.
* **Target Audience**:
  1. Academic professors & research committees (demanding rigor, citation clarity, methodological depth).
  2. Professional recruiters (demanding UX product thinking, event execution leadership, and organizational acumen).
* **Aesthetic Direction**: **Editorial Scrapbook / Creative Academic Monograph**.
* **Anti-Defaults**: Strictly reject standard AI-slop (no purple/cyan gradient glow, no generic 3-card SaaS grids, no plain Inter on dark mesh).

---

## 3. Typography & Color Palette

* **Display Serif**: `Fraunces` (Editorial elegance, variable optical size, warmth).
* **Handwriting / Accents**: `Caveat` (Humanized scrapbook annotations, notebook paper signatures).
* **Body Sans**: `Plus Jakarta Sans` (Clean, high-legibility modern sans-serif).
* **Metadata & Citations**: `JetBrains Mono` / `font-mono` (DOI, ORCID, dates, status badges).
* **Color Palette**:
  - Sky Blue: `#88BBD3` (Cover background)
  - Warm Cream Paper: `#FAF6F0`, `#F4EFE6`
  - Deep Earth Charcoal: `#1A1816`, `#2C2623`
  - Terracotta / Rosewood: `#E26D5C`, `#B85D58`
  - Sage / Slate: `#5A8B9C`, `#769888`

---

## 4. Architectural Rules

1. **Cover Fidelity**: Screen 01 reproduces Page 1 of `Template.pdf` with exact 16:9 editorial composition; only the author's name is dynamically overlaid. Standard navbar remains hidden on Cover.
2. **Seamless Transition**: Bottom of Cover feathers softly into the cream tones of Overview (Section 02).
3. **Overview Spread**: Section 02 strictly follows `overview layout.jpg` (retro frame photo, quote, contact pills, bio, expertise, tools, languages, me in 3 words, soft skills, experience, education, academic snapshot).
4. **Factual Integrity**: Never invent credentials. Do not display GPA, expired IELTS, or unverified claims. Follow `Portfolio_Public_Content_for_Antigravity_Nguyen_Nhu_Hong_Ngoc.docx` as source of truth.
