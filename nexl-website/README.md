# NEXL — Newline Express Logistics Website

React + Vite + JSX static website for Newline Express Logistics, Chennai.

---

## Quick Start

```bash
npm install        # Install dependencies
npm run dev        # Dev server → http://localhost:5173
npm run build      # Production build → /dist folder
npm run preview    # Preview production build locally
```

---

## Folder Structure

```
nexl-website/
├── public/
│   └── images/
│       └── nexl_logo.jpeg       ← NEXL logo (used in Navbar + Footer)
│
├── src/
│   ├── App.jsx                  ← Router + layout
│   ├── main.jsx                 ← Entry point
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx       ← Sticky navbar with NEXL logo
│   │   │   └── Footer.jsx       ← Full footer
│   │   ├── home/
│   │   │   ├── HeroSection.jsx
│   │   │   ├── StatsBar.jsx
│   │   │   ├── ServicesOverview.jsx
│   │   │   ├── WhyChooseUs.jsx
│   │   │   ├── IndustriesServed.jsx
│   │   │   ├── HowItWorks.jsx
│   │   │   ├── ClientLogos.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   └── CtaBanner.jsx
│   │   └── shared/
│   │       ├── PageHero.jsx
│   │       ├── SectionHeading.jsx
│   │       ├── QuoteForm.jsx    ← ⚠️ Update YOUR_FORM_ID here
│   │       ├── WhatsAppButton.jsx
│   │       └── ScrollToTop.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Industries.jsx
│   │   ├── Quote.jsx
│   │   ├── Contact.jsx
│   │   ├── Privacy.jsx
│   │   ├── Terms.jsx
│   │   ├── Cookies.jsx
│   │   ├── NotFound.jsx
│   │   └── services/
│   │       └── ServiceDetail.jsx  ← Dynamic, handles all 7 services
│   │
│   ├── lib/
│   │   └── constants.js         ← ⭐ All site data lives here
│   │
│   └── styles/
│       └── globals.css          ← Design tokens + animations
│
├── index.html
└── vite.config.js
```

---

## Customise Before Launch

### 1. Connect the contact form (required)
1. Go to https://formspree.io → create free account → new form
2. Copy your Form ID (e.g. `xpwzrqkl`)
3. Open `src/components/shared/QuoteForm.jsx`
4. Replace `YOUR_FORM_ID`:
   ```js
   const res = await fetch('https://formspree.io/f/xpwzrqkl', {
   ```

### 2. Update phone number
Open `src/lib/constants.js`:
```js
export const SITE_PHONE = '+91 XXXXX XXXXX'  // ← real number here
```

### 3. Update email
```js
export const SITE_EMAIL = 'info@nexllogistics.com'  // ← real email here
```

### 4. Update WhatsApp number
The WhatsApp button uses SITE_PHONE. Just update the phone in constants.js and it will automatically update the WhatsApp link too.

### 5. Update testimonials
Replace the TESTIMONIALS array in `src/lib/constants.js` with real client quotes.

### 6. Update stats
Update the STATS array with your real numbers:
```js
export const STATS = [
  { value: 10,   suffix: '+', label: 'Years Experience' },
  ...
]
```

---

## Deploy to Netlify (Free)

1. Run `npm run build` — creates `/dist` folder
2. Go to https://netlify.com → "Add new site" → "Deploy manually"
3. Drag and drop the `dist/` folder
4. Add custom domain in Site Settings → Domain Management

---

## Tech Stack

| Tool          | Purpose                        |
|---------------|--------------------------------|
| React 18      | UI framework                   |
| Vite          | Build tool (fast dev server)   |
| React Router  | Client-side routing            |
| Formspree     | Contact form (no backend)      |
| Google Fonts  | Syne + DM Sans                 |
| Netlify       | Free static hosting            |

---

## Pages (16 total)

| Page                  | Route                          |
|-----------------------|--------------------------------|
| Home                  | /                              |
| About Us              | /about                         |
| Services Overview     | /services                      |
| Sea Freight           | /services/sea-freight          |
| Air Freight           | /services/air-freight          |
| LCL Consolidation     | /services/lcl-consolidation    |
| Customs Clearance     | /services/customs-clearance    |
| Door-to-Door          | /services/door-to-door         |
| Project Cargo         | /services/project-cargo        |
| Domestic & Coastal    | /services/domestic-coastal     |
| Industries            | /industries                    |
| Get a Quote           | /quote                         |
| Contact               | /contact                       |
| Privacy Policy        | /privacy-policy                |
| Terms of Service      | /terms-of-service              |
| Cookie Policy         | /cookie-policy                 |

