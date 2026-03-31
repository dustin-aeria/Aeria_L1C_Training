# Aeria L1C Training - Migration Progress Tracker

**Last Updated:** 2026-03-31
**Current Status:** L1C00 Complete ✅ | Working on L1C01 Air Law

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

---

## In Progress 🚧

### L1C01: Air Law (86 slides)
- **Duration:** 4 hours
- **Slides:** 86 slides covering CARs Part IX, airspace, regulations
- **Status:** Ready to extract and build
- **Next Steps:**
  1. Extract PowerPoint content and images
  2. Build module sections
  3. Add interactive elements

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
│   │   └── l1c00-introduction/page.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── CourseLayout.tsx
│   ├── CourseSection.tsx
│   └── InstructorNote.tsx
├── public/
│   ├── images/
│   │   └── l1c00/
│   │       ├── images/slide08_img01.jpg
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

### Content Preservation
- **Rule:** ALL regulatory content must be preserved exactly as-is
- **Enhancement:** Can add interactive elements, better visuals, references
- **Approval:** Content changes require discussion with user

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

1. **Extract L1C01 Air Law PowerPoint**
   - 86 slides, largest module
   - Multiple major sections (regulatory framework, airspace, Part IX)

2. **Build L1C01 Module Structure**
   - Break into logical sections
   - Add navigation between sections
   - Implement instructor notes

3. **Enhancement Opportunities** (discuss with user)
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

**Last Commit:** `babf83e` - Add API test route to debug Vercel deployment
**Next Milestone:** L1C01 Air Law module complete
