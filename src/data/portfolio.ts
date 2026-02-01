export const portfolioData = {
  siteMeta: {
    name: "IRFAN IR",
    role: "B.Tech CS Student",
    profileImage: "/pfp0.jpg",
    socials: {
      github: "https://github.com/IRX358",
      linkedin: "https://www.linkedin.com/in/irfan-basha-396b97282/",
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
    subtitle: "B.Tech Computer Science Student",
    description: "Computer science enthusiast with a keen focus on web development and backend systems. A fast learner with a knack for digging deep into technical challenges, quick to absorb core concepts, and skilled in transforming ideas into robust solutions.",
    quote: "Building reliable, creative, and future-ready web solutions with a developer's mindset and an explorer's curiosity.",
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
    frontend: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 95 },
      { name: "JavaScript", level: 68 },
      { name: "Bootstrap & Tailwind CSS", level: 80 },
      { name: "React", level: 60 }
    ],
    backend: [
      { name: "Python - Flask", level: 75 },
      { name: "Python - FastAPI", level: 60 },
      { name: "PHP", level: 40 },
      { name: "Node.js", level: 0 },
      { name: "TypeScript", level: 0 }
    ],
    databases: [
      { name: "MySQL", level: 90 },
      { name: "PostgreSQL", level: 70 },
      { name: "MongoDB", level: 0 }
    ],
    tools: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 95 },
      { name: "Virtual Environments", level: 80 },
      { name: "Docker", level: 0 },
      { name: "CI/CD Pipeline", level: 0 },
      { name: "Agile & Scrum", level: 0 }
    ],
    cyberSecurity: [
      { name: "Kali Linux", level: 0 },
      { name: "Wireshark", level: 0 },
      { name: "OpenVAS", level: 0 },
      { name: "OWASP ZAP", level: 0 },
      { name: "Metasploit", level: 0 },
      { name: "Wiz", level: 0 }
    ],
    machineLearning: [
      { name: "NumPy", level: 12 },
      { name: "Pandas", level: 10 },
      { name: "PyTorch", level: 0 },
      { name: "TensorFlow", level: 0 },
      { name: "Hugging Face", level: 0 }
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
      link: "https://routesaathi-prototype.vercel.app/",
      icon: "bus"
    },
    {
      title: "Predictive Maintenance Platform",
      status: "Completed",
      description: "A training internship project using deep learning to predict equipment failures from vibration data via spectrograms and CNN models.",
      tech: ["Python", "Flask", "Machine Learning", "File Processing"],
      link: "https://github.com/IRX358/Predict_M_Sys",
      icon: "cog"
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
    },
    {
      title: "Flight Booking Management System",
      status: "Completed",
      description: "An academic PHP + MySQL backend system managing bookings, payments, passengers, and flights.",
      tech: ["PHP", "MySQL", "HTML5", "CSS3", "Responsive Design"],
      link: "https://www.linkedin.com/in/irfan-basha-396b97282/details/projects/",
      icon: "plane"
    }
  ],

  strengths: [
    "Strong problem-solving skills",
    "Fast learning capability",
    "Solid grasp of both frontend and backend tech",
    "Consistent in delivering clean, organized, and efficient code",
    "Ready to adapt to new technologies and frameworks"
  ],

  certifications: [
    "Full Stack Web Dev [freecodecamp]",
    "Accenture - Job Simulation [Forage]",
    "Responsive Web Dev [freecodecamp]",
    "Deloitte - Cyber Job Simulation [Forage]",
    "Data Science Beginner [SoloLearn]"
  ],

  contact: {
    email: "ir.358.786@gmail.com",
    socials: {
      github: "https://github.com/IRX358",
      linkedin: "https://www.linkedin.com/in/irfan-basha-396b97282/"
    }
  },

  footer: {
    text: "© 2026 Irfan IR || Built with CURIOSITY"
  }
};

export type PortfolioData = typeof portfolioData;
