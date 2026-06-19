# 🌌 Rameez Akhtar | AI/ML Engineer & Full Stack Developer

Welcome to my personal developer portfolio website! This repository houses a modern, fast, and fully responsive showcase of my skills, projects, and educational journey. Built using the React 18, Vite, Tailwind CSS v3, and Framer Motion stack.

🔗 **Live Portfolio:** [https://github.com/Rameez-ai/portfolio](https://github.com/Rameez-ai/portfolio)

---

## 🚀 Features

- **⚡ Lightning-Fast Performance:** Built with **Vite** and **React 18** for sub-second page loading and smooth runtime operations.
- **🎨 Premium Dark/Light Modes:** Curated CSS-variable-based color schemes with fluid animations and responsive glassmorphic cards.
- **🧠 Interactive Skills Metrics:** Dynamic skill filter tags paired with animated SVG Circular Progress Rings.
- **📂 Project Showcase:** Detailed filterable project grid (AI/ML, Web, Mobile) featuring interactive overlays, key highlights, and GitHub/Live demo links.
- **📅 Education Timeline:** Vertical academic progression layout detailing BS CS coursework and achievements at the University of Layyah.
- **✉️ Validated Contact Form:** Full integration with **EmailJS** for production-ready, client-side validated email delivery straight to my inbox.

---

## 🛠️ Tech Stack & Dependencies

- **Frontend Core:** React 18 & HTML5
- **Styling:** Tailwind CSS v3 & Custom CSS Variables (Themes)
- **Animations:** Framer Motion (Transitions, Layout Morphing, Floating Badges)
- **Icons:** React Icons (`si` / `fa` sets)
- **Contact:** EmailJS (`@emailjs/browser`)
- **Build Tool:** Vite

---

## 📁 Repository Structure

```text
portfolio/
├── public/
│   └── assets/
│       ├── profile.jpeg           ← Profile Photo (optimized & positioned)
│       └── resume.pdf             ← Downloadable CV
├── src/
│   ├── components/
│   │   ├── Navbar.jsx             ← Responsive navigation & dark/light toggle
│   │   ├── Hero.jsx               ← Particle background & typewriter roles
│   │   ├── About.jsx              ← Biography, quick stats, & quick indicators
│   │   ├── Skills.jsx             ← Circular progress ratings & categories
│   │   ├── Projects.jsx           ← Featured and grid layout cards
│   │   ├── Education.jsx          ← Academic timeline at University of Layyah
│   │   ├── Contact.jsx            ← Connected validated form with EmailJS
│   │   └── Footer.jsx             ← Socials & Quick anchor links
│   ├── data/
│   │   └── portfolioData.js       ← Single source of truth for all content
│   ├── hooks/
│   │   └── useScrollSpy.js        ← Active section indicator hook
│   ├── App.jsx                    ← Main page wiring
│   ├── main.jsx                   ← React entry engine
│   └── index.css                  ← CSS custom property definitions & utilities
├── .env.example                   ← Template for EmailJS API keys
├── package.json                   ← Project dependencies & dev/build scripts
└── vite.config.js                 ← Dev server & production bundler configuration
```

---

## ⚙️ Local Development

Follow these steps to run the portfolio on your local machine:

### 📋 Prerequisites
Ensure you have **Node.js (v18+)** and **npm** installed.

### 1. Clone the repository
```bash
git clone https://github.com/Rameez-ai/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup environment variables
Rename `.env.example` to `.env` in the root of the project:
```ini
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

### 4. Run the development server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 5. Build for production
```bash
npm run build
```
This outputs a production-ready folder inside the `dist/` directory.

---

## 📬 Contact & Socials

- **Email:** [ramizakhtarr@gmail.com](mailto:ramizakhtarr@gmail.com)
- **LinkedIn:** [rameez-akhtar-ba163a336](https://www.linkedin.com/in/rameez-akhtar-ba163a336)
- **Twitter/X:** [@RameezAkhtar786](https://x.com/RameezAkhtar786)
- **GitHub:** [@Rameez-ai](https://github.com/Rameez-ai)
