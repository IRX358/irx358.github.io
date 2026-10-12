export const portfolioData = {
  siteMeta: {
    name: "IRFAN IR",
    role: "B.Tech CS Student",
    profileImage: "/pfp0.jpg",
    socials: {
      github: "https://github.com/IRX358",
      linkedin: "https://www.linkedin.com/in/irfan358",
      telegram: "https://t.me/IRX358"
    }
  },

  navigation: {
    items: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" }
    ]
  },

  hero: {
    id: "home",
    title: "Hi, I'm IRFAN",
    subtitle: "Full Stack Developer | Backend Engineer | AI-Assisted Development",
    description: "Computer Science undergraduate with a strong engineering mindset and hands-on experience architecting and shipping production-grade, AI-powered web applications — from system design and REST API development to cloud deployment. Adopts a project-oriented and curiosity-driven learning approach, with proficiency in AI-assisted development workflows to build and ship faster without cutting corners on code quality.",
    quote: "A developer's mindset and an explorer's curiosity — building reliable, scalable, and future-ready solutions.",
    actions: [
      {
        label: "Download Resume",
        type: "download",
        link: "/resume_01.pdf"
      },
      {
        label: "Get In Touch",
        type: "anchor",
        link: "#contact"
      }
    ],
    images: {
      mainProfile: "/pfp2.jpg",
      decorativeIcons: ["Code", "Database"]
    }
  },

  skills: {
    languagesCore: [
      { name: "Python", level: 85 },
      { name: "HTML", level: 95 },
      { name: "React", level: 70 },
      { name: "JavaScript", level: 75 },
      { name: "SQL", level: 80 },
      { name: "Bash / Shell Scripting", level: 75 },
      { name: "OOP", level: 85 }
    ],
    backendAPIsDB: [
      { name: "FastAPI", level: 85 },
      { name: "REST API Design", level: 85 },
      { name: "PostgreSQL", level: 75 },
      { name: "DB Architecture", level: 70 },
      { name: "Caching & Load Balancing", level: 65 }
    ],
    devOpsDeployment: [
      { name: "Git / GitHub", level: 85 },
      { name: "CI/CD", level: 70 },
      { name: "Docker", level: 65 },
      { name: "AWS (CloudFormation, VPC, CDN, EC2, S3, ASG, ALB)", level: 65 },
      { name: "Vercel", level: 80 }
    ],
    aiAssistedDev: [
      { name: "ML Models & AI Web Integrations", level: 70 },
      { name: "Prompt Engineering", level: 80 },
      { name: "AI Pair-Programming", level: 85 }
    ],
    other: [
      { name: "System Design", level: 75 },
      { name: "Linux", level: 80 },
      { name: "UI/UX Fundamentals", level: 75 },
      { name: "Cybersecurity Fundamentals", level: 65 },
      { name: "Team Leadership", level: 85 },
      { name: "Technical Presentations", level: 80 }
    ],
     cyberSecurity: [
      { name: "Wireshark", level: 0 },
      { name: "OpenVAS", level: 0 },
      { name: "OWASP ZAP", level: 0 },
      { name: "Metasploit", level: 0 },
      { name: "Wiz", level: 0 }
    ]
  },

  projects: [
      {
      title: "Insider Navs",
      status: "Ongoing",
      description: "A smart indoor navigation & information system designed with a custom graph DB, OSM data and a routing engine, combining it with a locally optimized data layer for fast, offline-friendly access.",
      tech: ["React", "OSM", "PostgreSQL", "sqlite cache", "Routing Engine","FastAPI"],
      link: "https://github.com/IRX358/Insider_Navs",
      icon: "pin"
    },
    {
      title: "RouteSaathi",
      status: "Completed",
      description: "An AI-powered fleet management prototype designed to modernize the BMTC by bridging the gap between control centers and on-field conductors. Uses a recommendation engine to predict passenger demand and optimize bus-route allocation.",
      tech: ["WebDev", "FastAPI", "Model Training"],
      link: "https://github.com/IRX358/RouteSaathi-2.0",
      icon: "bus"
    },
    {
      title: "RazorRecover",
      status: "Completed",
      description: "Built an autonomous revenue recovery engine featuring a dual-mode LLM agent with deterministic pattern matching & self-calibrating feedback loops, integrating Razorpay webhooks with idempotency-backed automated capture pipelines.",
      tech: ["React", "FastAPI", "Razorpay", "SQLite", "SciPy", "Gemini API"],
      link: "https://github.com/IRX358/razorrecover",
      icon: "dollar"
    },
    {
      title: "Portfolio Website",
      status: "Completed",
      description: "A React + Vite based portfolio using a data-driven architecture for dynamic rendering and scalability.",
      tech: ["React", "Tailwind CSS", "TypeScript", "Node", "Vite"],
      link: "https://github.com/IRX358/irx358.github.io",
      icon: "user"
    },
    {
      title: "InternSaathi",
      status: "Completed",
      description: "A student-friendly internship recommendation platform designed for inclusivity and low-bandwidth environments.",
      tech: ["WebDev", "FastAPI", "MySQL", "Model Training"],
      link: "https://github.com/IRX358/InternSaathi",
      icon: "briefcase"
    }
  ],

  strengths: [
    "Rapid Learner",
    "Highly Adaptive",
    "Disciplined & Consistent",
    "Ownership-Driven",
    "Curiosity-Fueled"
  ],

  certifications: [
    { title: "Responsive Web Dev [freecodecamp]", logo: "/certi2.jpg" },
    { title: "Frontend Dev - React [Hackerrank]", logo: "/certi4.jpg" },
    { title: "Rest API Intermediate [Hackerrank]", logo: "/certi4.jpg" },
    { title: "Accenture - Job Simulation [Forage]", logo: "/certi1.jpg" },
    { title: "Deloitte - Cyber Job Simulation [Forage]", logo: "/certi3.jpg" },
    { title: "JavaScript Intermediate [Hackerrank]", logo: "/certi4.jpg" }
  ],

  contact: {
    email: "talk@irfan.qzz.io",
    socials: {
      github: "https://github.com/IRX358",
      linkedin: "https://www.linkedin.com/in/irfan-basha-396b97282/"
    }
  },

  footer: {
    text: "2025 Irfan IR || Built with CURIOSITY"
  }
};

export type PortfolioData = typeof portfolioData;
