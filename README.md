# Manish Adhikari - Professional Portfolio (React Multi-Page)

A clear, modern, and professional multi-page portfolio website tailored for **Manish Adhikari**, QA & Software Testing Specialist and 7th Semester BCA Student.

---

## 🌟 Key Features

- **Multi-Page Architecture**:
  - **Home (`/`)**: Hero introduction, availability badge, quick stats, core competencies, current internship highlight, featured projects preview, and collaboration CTA.
  - **About (`/about`)**: Personal journey, testing philosophy (*Prevention over Patching*, *Boundary Vigilance*), quick facts, and engineering values.
  - **Experience (`/experience`)**: In-depth internship details at *Pravidhi Digital Innovation*, daily QA workflows, STLC testing pipeline, and technical responsibilities.
  - **Projects (`/projects`)**: Categorized project showcase (Quiz Game App, MARAZ Backend, Python Collection, QA Test Suites) with category filtering, testing highlights, and deep-dive toggles.
  - **Skills (`/skills`)**: Categorized competencies across Software Testing/QA, Programming, Databases, Developer Tools, and Soft Skills with a QA methodology glossary.
  - **Education (`/education`)**: Bachelor of Computer Applications (BCA) at La Grandee International College (Pokhara University) and +2 Science at Janapriya Multiple Campus (GPA 3.41).
  - **Contact (`/contact`)**: Interactive message form with validation, 1-click email copy button with status feedback, direct call/email links, location details, and FAQ.
- **Theme Support (Light & Dark Mode)**: Smooth toggle button with persistence in `localStorage`.
- **Responsive & Accessible**: Clean navigation on mobile, tablet, and desktop with hamburger drawer and smooth transitions.
- **Scroll Restoration & Back to Top**: Auto scrolls to top on page navigation plus a floating quick-return button.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open the link displayed in your terminal (typically `http://localhost:5173` or `http://localhost:5174`).

### 3. Build for Production
```bash
npm run build
```
This generates an optimized static build in the `dist/` directory ready for deployment on GitHub Pages, Vercel, or Netlify.

---

## 📁 Project Structure

```
manish-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky navbar with mobile drawer & theme switcher
│   │   ├── Footer.jsx          # Comprehensive footer with quick navigation & contacts
│   │   ├── PageHeader.jsx      # Reusable page banner with breadcrumb & badges
│   │   ├── ProjectCard.jsx     # Project cards with testing highlights & expand toggle
│   │   ├── ContactForm.jsx     # Interactive contact form & 1-click email copy
│   │   ├── ScrollToTop.jsx     # Scroll restoration & floating back-to-top button
│   │   └── GithubIcon.jsx      # Crisp scalable SVG icon
│   ├── context/
│   │   └── ThemeContext.jsx    # Light / Dark theme state management
│   ├── pages/
│   │   ├── HomePage.jsx        # Landing page with stats & previews
│   │   ├── AboutPage.jsx       # Bio, background & testing philosophy
│   │   ├── ExperiencePage.jsx  # Internship details & STLC pipeline
│   │   ├── ProjectsPage.jsx    # Filterable project showcase & GitHub links
│   │   ├── SkillsPage.jsx      # Categorized competencies & QA glossary
│   │   ├── EducationPage.jsx   # Academic qualifications & coursework
│   │   ├── ContactPage.jsx     # Direct contact cards, form & FAQs
│   │   └── NotFoundPage.jsx    # 404 error page
│   ├── data.js                 # Centralized structured data file
│   ├── styles.css              # Custom CSS design system (Light/Dark themes)
│   ├── App.jsx                 # Routing configuration (HashRouter)
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## ✏️ Customizing Content

All portfolio text, links, projects, and contact information are centralized in:
`src/data.js`
Edit this file to update any details, add new projects, or modify contact information.
