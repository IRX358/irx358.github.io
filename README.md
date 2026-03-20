<div align="center">
  
  <!-- Animated Typing Header -->
  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.demolab.com?font=Orbitron&weight=700&size=40&pause=1000&color=6366F1&center=true&vCenter=true&width=600&lines=IRFAN+IR" alt="Typing SVG" />
  </a>

  <!-- Animated Logo/Badge -->
  <img src="https://img.shields.io/badge/IR-Portfolio-6366F1?style=for-the-badge&logo=react&logoColor=white&labelColor=1e1e2e" alt="Portfolio Badge" />

  <!-- Badges Row -->
  <p align="center">
    <img src="https://img.shields.io/badge/Status-Active%20Development-22c55e?style=flat-square&logo=vercel&logoColor=white" />
    <img src="https://img.shields.io/badge/Version-2.0-8b5cf6?style=flat-square&logo=git&logoColor=white" />
    <img src="https://img.shields.io/badge/Platform-GitHub%20Pages-181717?style=flat-square&logo=github&logoColor=white" />
  </p>

  <!-- Animated Divider -->
  <img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">
  
</div>



<img src="https://readme-typing-svg.demolab.com?font=Orbitron&size=28&duration=3000&pause=1000&color=00F7FF&center=true&vCenter=true&width=900&lines=The+Protofolio+site;React+%2B+Vite+%2B+TypeScript+Portfolio;Clean+Design+%7C+Modern+Frontend+Architecture;Built+with+Curiosity+%26+Code" />

</p>


---

# Short Introduction

A **modern developer portfolio built as a Single Page Application** using a high-performance frontend stack.

This project showcases:

- projects
- technical skills
- developer profile
- social links

The architecture focuses on **modular React components, fast builds using Vite, and type-safe development using TypeScript**.

The site is optimized for **speed, responsiveness, and clean UI design**.

---

# Features

### 📱 Responsive UI
Mobile-first interface that seamlessly adapts to desktops, tablets, and smartphones, ensuring a consistent user experience across all devices.
### ⚡ High Performance
Powered by **Vite**, enabling extremely fast development builds, hot module replacement, and optimized production bundles.
### 🧩 Modular Component Architecture
Built using reusable **React components**, making the codebase clean, scalable, and easy to maintain.
### 🧠 Type-Safe Development
Developed with **TypeScript**, providing static typing that improves reliability, maintainability, and developer productivity.
### 🎨 Modern UI Design
Clean and minimal design approach using modern styling techniques for an aesthetically pleasing interface.
### 🚀 Smooth Navigation
Single Page Application structure enabling seamless page transitions without full page reloads.
### 🌐 GitHub Pages Deployment
Automatically deployable via **GitHub Pages**, making the portfolio easily accessible online.

---

---

### Deployment
<p align="left">
  <img src="https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white" />
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />
</p>

---

## 🚀 Setup Instructions

```
# Clone the repository
git clone https://github.com/IRX358/irx358.github.io.git

# Navigate to project directory
cd irx358.github.io

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

```
---



## 📁 Project Structure

```
irx358.github.io/
├── 📂 public/                 # Static assets
│   ├── 📄 index.html          # HTML entry point
│   ├── 🖼️ assets/             # Images, fonts, icons
│   └── 📝 favicon.ico         # Site favicon
├── 📂 src/                    # Source code
│   ├── 📂 components/         # React components
│   │   ├── 📂 ui/             # shadcn/ui components
│   │   ├── 📂 sections/       # Page sections (Hero, About, etc.)
│   │   └── 📂 layout/         # Layout components (Header, Footer)
│   ├── 📂 hooks/              # Custom React hooks
│   ├── 📂 lib/                # Utility functions & helpers
│   ├── 📂 styles/             # Global styles & Tailwind config
│   │   └── 📄 globals.css     # Global CSS + Tailwind directives
│   ├── 📂 types/              # TypeScript type definitions
│   ├── 📂 data/               # Static data (skills, projects, etc.)
│   ├── 📄 App.tsx             # Main App component
│   └── 📄 main.tsx            # Entry point (Vite)
├── 📄 package.json            # Dependencies & scripts
├── 📄 tsconfig.json           # TypeScript configuration
├── 📄 vite.config.ts          # Vite configuration
├── 📄 tailwind.config.js      # Tailwind CSS configuration
├── 📄 postcss.config.js       # PostCSS configuration
├── 📄 eslint.config.js        # ESLint configuration
├── 📄 components.json         # shadcn/ui configuration
└──📄 README.md               # This file
```

<details>
<summary>🗂️ Detailed File Tree</summary>

```text
irx358.github.io/
├── public/
│   ├── index.html
│   ├── assets/
│   │   ├── images/
│   │   │   ├── profile.jpg
│   │   │   └── projects/
│   │   └── fonts/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── ui/                    # shadcn components (button, card, etc.)
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Certifications.tsx
│   │   │   └── Contact.tsx
│   │   └── layout/
│   │       ├── Header.tsx
│   │       └── Footer.tsx
│   ├── hooks/
│   │   └── useScrollAnimation.ts
│   ├── lib/
│   │   └── utils.ts               # cn() utility for Tailwind
│   ├── styles/
│   │   └── globals.css            # @tailwind directives
│   ├── types/
│   │   └── index.ts
│   ├── data/
│   │   ├── skills.ts
│   │   ├── projects.ts
│   │   └── certifications.ts
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
├── components.json                # shadcn/ui config
├── .eslintrc.cjs
├── .gitignore
└── README.md
```

</details>

---




Here's your **static footer section** without animations:

---

<!-- Footer Divider -->
<img src="https://capsule-render.vercel.app/api?type=rect&color=6366F1&height=3&section=footer&text=&fontSize=0" width="100%"/>

<div align="center">
  
  ## 🌐 Connect With Me
  
  <p align="center">
    <a href="https://linkedin.com/in/irfan358" target="_blank">
      <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
    </a>
    <a href="mailto:talk@irfan.qzz.io">
      <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
    </a>
  </p>
  <br>

  <p>
    <strong>© 2026 Irfan IR || Built with CURIOSITY</strong>
  </p>
  
</div>