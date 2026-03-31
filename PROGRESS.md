# Aeria L1C Training - Migration Progress Tracker

**Last Updated:** 2026-03-31 (Missing Slides 18-22 Added + Interactive Reveals)
**Current Status:** L1C00 Complete ✅ | L1C01 Air Law COMPLETE & ENHANCED ✅ | All Slides Included | Deployed & Ready for Review

---

## Project Overview

**Goal:** Migrate PowerPoint-based L1C training to modern web platform
**Source Materials:** `C:\Users\Dusti\OneDrive\Desktop\Aeria Solutions Deliverable - February 2026`
**Tech Stack:** Next.js 15, TypeScript, Tailwind CSS, Supabase, Vercel
**Live Site:** https://aeria-l1-c-training.vercel.app/
**GitHub:** https://github.com/dustin-aeria/Aeria_L1C_Training

---

## Completed ✅

### Infrastructure
- [x] Next.js 15 project setup with TypeScript
- [x] Tailwind CSS with Typography plugin
- [x] Supabase package installed (not configured yet)
- [x] Vercel deployment configured and working
- [x] GitHub repository connected to Vercel
- [x] Python extraction script for PowerPoints (`scripts/extract_pptx.py`)

### Components Built
- [x] **CourseLayout** - Responsive sidebar navigation for all 10 modules
- [x] **CourseSection** - Reusable section component with styled headers
- [x] **InstructorNote** - Color-coded note boxes (info=blue, keypoint=yellow, activity=green)
- [x] **RevealAnswer** - Interactive click-to-reveal component for Q&A pedagogy (NEW - 2026-03-31)

### Modules Completed

#### ✅ L1C00: Introduction (8 slides)
- **Location:** `app/course/l1c00-introduction/page.tsx`
- **Images Extracted:** 1 (slide08_img01.jpg)
- **Status:** Complete and deployed
- **Content Preserved:** 100%
- **URL:** https://aeria-l1-c-training.vercel.app/course/l1c00-introduction

**Sections:**
1. Course Administration
2. Student Portal
3. Instructor Introduction (template)
4. What to Expect
5. Curriculum & Schedule
6. Mandatory Links & Software
7. After This Course

#### ✅ L1C01: Air Law (86 slides) - FULLY ENHANCED
- **Location:** `app/course/l1c01-air-law/page.tsx`
- **Images Extracted:** 18 (all diagrams and reference images)
- **Status:** ✅ COMPLETE - All content + Full regulation text + Comprehensive enhancements
- **Content Preserved:** 100% - All 86 slides converted with NO content lost
- **Duration:** 4 hours
- **URL:** https://aeria-l1-c-training.vercel.app/course/l1c01-air-law
- **Last Major Update:** 2026-03-31 - Complete regulation enhancement pass

**MAJOR ENHANCEMENTS COMPLETED:**

**Phase 1: Initial Content Migration (COMPLETE)**
- All 86 slides from PowerPoint converted to web format
- All instructor notes, key points, and activities preserved
- 18 images extracted and integrated
- Table of contents with anchor navigation
- 12 major section divisions

**Phase 2: Practical Examples & Context (COMPLETE)**
Added 8 enhancement categories:
1. ✅ Numbering Structure - Real Part IX examples (901.56, 901.87, 901.213, etc.)
2. ✅ 3P Approach - 6 pass/fail scenarios with detailed analysis
3. ✅ Standard 923 - 6 "Can You Fly?" decision scenarios
4. ✅ Weather Assessment - METAR/TAF reading with real examples
5. ✅ Site Survey - Complete agricultural example with checklist
6. ✅ Canadian Airspace - Real airports (CYYZ, CYOW, CYVR, CYYC, etc.)
7. ✅ Ground Risk Buffer - Calculation examples with wind/altitude factors
8. ✅ ROM Structure - Complete templates (pre-flight, emergency, training, maintenance)

**Phase 3: Full Regulation Text Replacement (COMPLETE)**
Fixed 25 regulation sections - replaced ALL partial quotes/bullet points with COMPLETE CAR text:

**Phase 4: Missing Image-Only Slides Added (COMPLETE)**
Added slides 18-22 that were previously skipped during initial extraction:
1. ✅ Slide 18 - Altitude References in RPAS (comprehensive guide to Home/AGL/ASL/GPS altitude systems)
2. ✅ Slide 19 - Requirements by Airspace Class (IFR) - Full table with all airspace requirements
3. ✅ Slide 20 - Requirements by Airspace Class (VFR) - Full table with VFR weather minimums
4. ✅ Slide 21 - Airspace Structure Vertical Profile - Visual diagram of "upside-down wedding cake" with detailed explanations
5. ✅ Slide 22 - Air Risk Determination (ARC-A/B/C/D) - Enhanced with practical L1C examples

**Phase 5: Interactive Q&A with RevealAnswer Component (COMPLETE)**
- Created RevealAnswer component for classroom pedagogy
- Applied to 17 instances across the module:
  - 5 practice questions with answers
  - 6 3P Approach scenarios (PASS/FAIL decisions)
  - 6 Standard 923 "Can You Fly?" decision scenarios
- Enables instructor-led discussion before revealing answers
- Removed 1 unnecessary Q&A (Designated Airspace Handbook location question)

**CONTENT INTEGRITY:**

*CRITICAL Fixes (6) - Missing regulation text entirely:*
1. ✅ CAR 601.14 - Minimum Altitudes & Distances
2. ✅ CAR 901.26 - Horizontal Distances (VLOS)
3. ✅ CAR 901.27 - Site Survey
4. ✅ CAR 901.34 - Minimum Weather Conditions
5. ✅ CAR 901.87 - Applicability (L1C gatekeeper regulation)
6. ✅ CAR 900.14-900.20 - RPAS Registration

*HIGH Priority Fixes (14) - Partial quotes/bullet summaries:*
7. ✅ CAR 601.96 - Operations at Aerodromes
8. ✅ CAR 601.97 - Uncontrolled Aerodromes/MF
9. ✅ CAR 602.15 - Permissible Low Altitude Flight
10. ✅ CAR 901.19 - Fitness of Crew Members
11. ✅ CAR 901.24 - Pre-Flight Information
12. ✅ CAR 901.74 - Extended VLOS
13. ✅ CAR 901.74 - Sheltered Operations
14. ✅ CAR 901.89 - L1C Pilot Requirements
15. ✅ CAR 901.95 - Declarations
16. ✅ CAR 901.176 - Flight Reviewer Requirements
17. ✅ CAR 901.178 - Retaking of Exam
18. ✅ CAR 901.213 - Eligibility
19. ✅ CAR 901.216 - General Conditions
20. ✅ CAR 901.217 - RPAS Operations Manual

*Previously Fixed (5) - From initial builds:*
21. ✅ CAR 901.35 - Icing Conditions
22. ✅ CAR 901.38 - FPV Devices
23. ✅ CAR 103.01 - Document Inspection
24. ✅ CAR 103.04 - Record Keeping
25. ✅ CAR 106.01 - Accountable Executive

**TRANSFORMATION PATTERN:**
- BEFORE: "...icing conditions..." (partial with ellipsis)
- AFTER: Complete CAR 901.35 with full subsections (a) and (b)

- BEFORE: Bullet points "• 30 m horizontal, 5 m vertical"
- AFTER: Full CAR 901.26 text with all subsections for small/medium/large RPAS

- BEFORE: InstructorNote: "Critical surface = lifting surface"
- AFTER: InstructorNote: Real scenarios (morning frost, freezing rain, cold-soaked aircraft), practical decision-making, common mistakes

**INSTRUCTOR NOTE ENHANCEMENTS:**
Every instructor note now provides VALUE through:
- ✓ Real-world examples students will encounter
- ✓ Common mistakes and misconceptions
- ✓ Practical decision-making guidance
- ✓ Specific scenarios with outcomes
- ✓ Enforcement implications
- ✓ "Why this matters" explanations
- ✓ Step-by-step procedures
- ✓ Calculation examples with real numbers

**Sections (12 major divisions):**
1. Objectives & L1C Context (3P Approach)
2. Aviation Regulations (Aeronautics Act, Agencies, CARs Structure)
3. Part I - General Provisions (Definitions, Document Inspection, Records, Accountable Executive)
4. Part VI - Flight Rules (VFR/IFR, Airspace Classes, Aerodrome Operations, Minimum Altitudes)
5. Part IX Division I - Definitions (All key RPAS terms)
6. Part IX Division II & III - General Operating Rules (Emergency perimeter, Registration, Fitness, Pre-flight, Site Survey, Weather)
7. Part IX Division V - Extended VLOS & Sheltered Operations
8. Part IX Division VI - BVLOS Operations (3P Approach, Standard 923 Vision-Based DAA, CRITICAL for L1C)
9. Part IX Division X - Training & Flight Review (Standard 921, Flight Reviewer Requirements)
10. Part IX Division XI - RPAS Declarations (Manufacturer responsibilities)
11. Part IX Division XII - RPAS Operator Certificate (Eligibility, ROM requirements, Organizational Hierarchy)
12. Subpart III & References (SFOC requirements, all regulatory citations)

**Key Features:**
- Complete table of contents with anchor navigation
- All instructor notes preserved (info/keypoint/activity)
- All 18 images included from PowerPoint
- Comprehensive coverage of Standard 923 Vision-Based DAA
- 3P approach (Pilot/Procedure/Platform) fully documented
- All CARs citations with proper formatting

---

## In Progress 🚧

*No modules currently in progress - ready to start L1C02 Systems after L1C01 review*

---

## Pending 📋

### L1C02: Systems (74 slides) - 2 hours
- RPAS configurations, Standard 922, safety assurance

### L1C03: Human Factors (45 slides) - 2 hours
- Safety management systems, risk assessment, CRM

### L1C04: Meteorology (34 slides) - 2 hours
- Weather services, atmospheric science, hazards

### L1C05: Navigation (44 slides) - 3 hours
- Charts, flight planning, population density, digital tools

### L1C06: Flight Operations (52 slides) - 4 hours
- ConOps, RPAS Operator Certificate, SOPs, operational volumes

### L1C07: Theory of Flight (15 slides) - 1 hour
- Aerodynamics, quadcopter mechanics, flight principles

### L1C08: Radiotelephony (12 slides) - 1 hour
- VHF communications, frequencies, licensing

### L1C09: Flight Review Prep (14 slides) - 2 hours
- Practical mission planning and flight review preparation

### Quizzes
- [ ] Day 1 Quiz (Air Law + Systems)
- [ ] Day 2 Quiz (Radiotelephony + Navigation + Meteorology + Theory)

### Flight Review Materials
- [ ] Student Flight Review Preparation Guide
- [ ] Flight Reviewer Script & Marking Guide
- [ ] KML files integration
- [ ] Mission planning tools

---

## File Structure

```
Aeria_L1C_Training/
├── app/
│   ├── api/
│   │   └── test/route.ts
│   ├── course/
│   │   ├── l1c00-introduction/page.tsx
│   │   └── l1c01-air-law/page.tsx ✅ NEW
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── CourseLayout.tsx
│   ├── CourseSection.tsx (updated with id prop)
│   ├── InstructorNote.tsx
│   ├── RevealAnswer.tsx ✅ NEW
│   └── TableOfContents.tsx
├── public/
│   ├── images/
│   │   ├── l1c00/
│   │   │   ├── slide08_img01.jpg
│   │   │   └── slides_data.json
│   │   └── l1c01/ ✅ NEW
│   │       ├── slide03_img01.jpg ... slide76_img01.jpg (18 images)
│   │       └── slides_data.json
│   └── favicon.png
├── scripts/
│   └── extract_pptx.py
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## Key Commands

### Development
```bash
cd ~/Aeria_L1C_Training
npm run dev  # Start dev server on http://localhost:3000
```

### Extract PowerPoint
```bash
python3 scripts/extract_pptx.py "path/to/file.pptx" "public/images/MODULE_NAME"
```

### Build & Deploy
```bash
npm run build  # Test build locally
git add -A && git commit -m "message" && git push  # Auto-deploys to Vercel
```

---

## Design Decisions

### Content Preservation & Enhancement Philosophy
- **Rule:** ALL regulatory content must be preserved exactly as-is - NO content removed or falsified
- **Enhancement Approach:** ADD VALUE without changing required material
  - Full regulation text (no partial quotes with "...")
  - Instructor notes that provide examples, context, practical guidance (not just restate regs)
  - Real-world scenarios and decision-making frameworks
  - Common mistakes and misconceptions addressed
  - Canadian-specific examples (airports, locations, tools)
- **Quality Standard:** Every regulation must be completely quotable; every instructor note must teach something new
- **User Directive:** "state the full and actual regulation... the light bulb section should be a simplification and perhaps example or context to the regulation"

### Component System
- **CourseLayout:** Handles navigation and responsive sidebar
- **CourseSection:** Wraps content sections with consistent styling
- **InstructorNote:** Three types for different pedagogical purposes

### Image Handling
- Images extracted to `public/images/[module_id]/`
- Next.js Image component for optimization
- Original quality preserved

### Responsive Design
- Mobile: Collapsible sidebar, linear navigation
- Tablet: Optimized for touch, side-by-side when possible
- Desktop: Full sidebar, multi-column layouts

---

## Known Issues & Solutions

### Issue: Vercel 404 on deployment
**Solution:** Delete and reimport project with correct settings:
- Framework: Next.js
- Root Directory: blank (`./`)
- Let Vercel auto-detect build/output

### Issue: ESLint errors on build
**Solution:**
- Escape quotes: `&quot;` for `"`, `&apos;` for `'`
- Use `<Link>` from `next/link` instead of `<a>` tags

### Issue: Missing favicon
**Solution:** Created `app/favicon.ico` and `public/favicon.png`

---

## Next Session Tasks

1. **User Review of L1C01 Air Law**
   - Deployed at: https://aeria-l1-c-training.vercel.app/course/l1c01-air-law
   - Full 86 slides completed
   - Verify content accuracy and completeness
   - Identify any enhancement opportunities

2. **Start L1C02: Systems (74 slides)**
   - Extract PowerPoint content and images
   - Build module sections
   - 2 hour duration, RPAS configurations and Standard 922

3. **Enhancement Opportunities** (discuss with user after L1C01 review)
   - Interactive regulatory reference lookup
   - Airspace diagrams with clickable layers
   - CARs Part IX navigation tree
   - Visual flowcharts for decision-making

---

## Supabase Integration (Not Started)

### Planned Features
- User authentication
- Progress tracking
- Quiz results storage
- Certificate generation
- Instructor dashboard

### Setup Required
1. Create Supabase project
2. Set up authentication
3. Create database schema
4. Add environment variables to Vercel
5. Build API routes

---

## Questions for User

- [ ] L1C01 Air Law: Build all 86 slides in one page or split into sections?
- [ ] Interactive elements priority: What's most important?
- [ ] Supabase: When should we integrate? (After all modules or earlier?)
- [ ] Images: Which modules need image upgrades most urgently?

---

## Resources

### Source Materials Location
`C:\Users\Dusti\OneDrive\Desktop\Aeria Solutions Deliverable - February 2026\`

### PowerPoints
- `PowerPoints/Aeria Solutions L1C00 Introduction - February 2026.pptx` ✅
- `PowerPoints/Aeria Solutions L1C01 Air Law - February 2026.pptx` 🚧
- `PowerPoints/Aeria Solutions L1C02 Systems - February 2026.pptx`
- `PowerPoints/Aeria Solutions L1C03 Human Factors - February 2026.pptx`
- `PowerPoints/Aeria Solutions L1C04 Meteorology - February 2026.pptx`
- `PowerPoints/Aeria Solutions L1C05 Navigation - February 2026.pptx`
- `PowerPoints/Aeria Solutions L1C06 Flight Operations - February 2026.pptx`
- `PowerPoints/Aeria Solutions L1C07 Theory of Flight - February 2026.pptx`
- `PowerPoints/Aeria Solutions L1C08 Radiotelephony - February 2026.pptx`
- `PowerPoints/Aeria Solutions L1C09 Flight Review Prep - February 2026.pptx`

### Regulatory References
- `Regulations/` folder contains all CARs, AIM, SORA documents

---

**Last Commit:** Complete L1C01 Air Law module (86 slides, all content preserved)
**Next Milestone:** User review L1C01, then start L1C02 Systems
