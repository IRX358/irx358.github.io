import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, Code, Database, Globe, Zap, ArrowRight, ExternalLink, Download, User, Briefcase, Award, MessageSquare } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const skills = {
    frontend: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'Bootstrap 4', level: 80 },
      { name: 'Tailwind CSS', level: 80 },
      { name: 'React', level: 60 }
    ],
    backend: [
      { name: 'Python (Flask)', level: 75 },
      { name: 'PHP (MySQL)', level: 70 },
      { name: 'REST API', level: 0 },
      { name: 'Node js', level: 0 },
      { name: 'Express js', level: 0 },
      { name: 'TypeScript', level: 0 }
    ],
    databases: [
      { name: 'MySQL', level: 90 },
      { name: 'MongoDB', level: 0 },
      { name: 'PostgreSQL', level: 0 }
    ],
    tools: [
      { name: 'Git & GitHub', level: 75 },
      { name: 'VS Code', level: 95 },
      { name: 'Virtual Environments', level: 40 },
      { name: 'Agile & Scrum', level: 70 }
    ]
  };

  const projects = [
    {
      title: 'Flight Booking Management System',
      status: 'Completed',
      description: ' [An Academic Project] PHP + MySQL powered backend for managing bookings, payments, passenger data, and flight info. Integrates frontend forms with backend data retrieval.',
      tech: ['PHP', 'MySQL', 'HTML5', 'CSS3','Responsive Design'],
      link:'https://www.linkedin.com/in/irfan-basha-396b97282/details/projects/?profileUrn=urn%3Ali%3Afsd_profile%3AACoAAETf7mIBLDWvfIUilGFdWkJgngyOuJbitII',
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Predictive Maintenance Platform',
      status: 'Completed',
      description: ' [A Training + Intership Project] Python-based predictive maintenance system capable of handling file uploads and executing predictive scripts, intended for future deployment on the web.',
      tech: ['Python', 'Flask', 'Machine Learning', 'File Processing'],
      link:'https://github.com/IRX358/Predict_M_Sys',
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Portfolio Website',
      status: 'Completed',
      description: 'Modern and responsive portfolio built with HTML, CSS, and JavaScript, showcasing personal projects, skills, and contact features.',
      tech: ['React','Tailwind CSS','TypeScript','Node','Vite'],
      link:'https://irx358.github.io',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'TRAVER: Travel Everywhere',
      status: 'Future',
      description: ' [Planning Phase] Wireframing a tourism platform across India\'s 36 states with modules for planning trips, managing stays, and place exploration. An tourism website with unique features',
      tech: ['Wireframing', 'UI/UX Design', 'Project Planning'],
      link:'https://www.linkedin.com/posts/irfan-basha-396b97282_designing-reigns-supreme-over-all-my-other-activity-7290612028317007873-7wMt?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETf7mIBLDWvfIUilGFdWkJgngyOuJbitII',
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'Full Stack Practice Projects',
      status: 'Multiple Projects',
      description: 'Multiple small-scale web apps for exploring the integration of HTML/CSS frontends with Python Flask backends, involving forms, CRUD operations, and local data handling.',
      tech: ['HTML', 'CSS', 'Python', 'Flask', 'CRUD Operations'],
      link:'https://www.linkedin.com/in/irfan-basha-396b97282/details/projects/?profileUrn=urn%3Ali%3Afsd_profile%3AACoAAETf7mIBLDWvfIUilGFdWkJgngyOuJbitII',
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      {/* Binary Background Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute inset-0 binary-rain"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center"> */}
                {/* <Code className="w-6 h-6 text-white" /> */}
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img src="/irx358.github.io/public/pfp0.jpg" alt="profile" className="w-full h-full object-cover"/>
              </div>
              <div>
                <h1 className="text-xl font-bold">IRFAN IR</h1>
                <p className="text-sm text-slate-400">B.Tech CS Student</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
            </div>

            <div className="flex items-center space-x-4">
              <a href="https://github.com/IRX358" target='_blank' className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors group">
                <Github className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/irfan-basha-396b97282/" target='_blank' className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors group">
                <Linkedin className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-400 to-white bg-clip-text text-transparent leading-tight">
                  Hi, I'm IRFAN
                </h1>
                <h2 className="text-2xl md:text-3xl text-cyan-400 font-semibold mb-6">
                  B.Tech Computer Science Student
                </h2>
                <p className="text-xl text-slate-300 leading-relaxed mb-8">
                  Computer science enthusiast with a keen focus on web development and backend systems. A fast learner with a knack for digging deep into technical challenges, quick to absorb core concepts, and skilled in transforming ideas into robust solutions.
                </p>
                <div className="text-lg text-slate-400 mb-8 p-4 bg-slate-800/50 rounded-lg border-l-4 border-cyan-400">
                  <em>"Building reliable, creative, and future-ready web solutions with a developer's mindset and an explorer's curiosity."</em>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
               <a href="\irx358.github.io\resume_01.pdf" target='_blank'>  <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-cyan-500/25">
                  <Download className="w-5 h-5" />
                 <span>Download Resume</span>
                </button></a>
                <a href="#contact" className="px-8 py-4 border border-slate-600 rounded-lg font-semibold text-white hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 text-center">
                  Get In Touch
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-cyan-500/30">
                {/* <div className="w-64 h-64 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                  <User className="w-32 h-32 text-white" />
                </div> */}
                <div className="w-64 h-64 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full overflow-hidden flex items-center justify-center">
                  <img src='/irx358.github.io/public/pfp1.jpg' alt='profile_pic' className="w-full h-full object-cover " />
                </div>

              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-slate-800 rounded-lg flex items-center justify-center border border-cyan-500/30">
                <Code className="w-12 h-12 text-cyan-400" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-slate-800 rounded-lg flex items-center justify-center border border-cyan-500/30">
                <Database className="w-12 h-12 text-cyan-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Technical Skills</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A comprehensive toolkit for building modern web applications from frontend to backend
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300">
              <div className="flex items-center mb-6">
                <Globe className="w-8 h-8 text-cyan-400 mr-3" />
                <h3 className="text-xl font-semibold">Frontend</h3>
              </div>
              <div className="space-y-4">
                {skills.frontend.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">{skill.name}</span>
                      <span className="text-sm text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300">
              <div className="flex items-center mb-6">
                <Zap className="w-8 h-8 text-cyan-400 mr-3" />
                <h3 className="text-xl font-semibold">Backend</h3>
              </div>
              <div className="space-y-4">
                {skills.backend.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">{skill.name}</span>
                      <span className="text-sm text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300">
              <div className="flex items-center mb-6">
                <Database className="w-8 h-8 text-cyan-400 mr-3" />
                <h3 className="text-xl font-semibold">Databases</h3>
              </div>
              <div className="space-y-4">
                {skills.databases.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">{skill.name}</span>
                      <span className="text-sm text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300">
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-cyan-400 mr-3" />
                <h3 className="text-xl font-semibold">Tools & More</h3>
              </div>
              <div className="space-y-4">
                {skills.tools.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">{skill.name}</span>
                      <span className="text-sm text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A showcase of my work spanning web development, backend systems, and full-stack applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                <div className="mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full">
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} target="_blank">
                <button className="w-full flex items-center justify-center space-x-2 py-2 border border-slate-600 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
                  <ExternalLink className="w-4 h-4" />
                  <span>View Details</span>
                </button></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Key Strengths</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              'Strong problem-solving skills',
              'Fast learning capability',
              'Solid grasp of both frontend and backend tech',
              'Consistent in delivering clean, organized, and efficient code',
              'Ready to adapt to new technologies and frameworks'
            ].map((strength, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm text-slate-300">{strength}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Cetification Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Certifications </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              'Full Stack Web Dev [freecodecamp] ',
              'Accenture - Job Simulation [Forage] ',
              'Responsive Web Dev [freecodecamp] ',
              'Deloite - Cyber Job Simulation [Forage] ',
              'Data Science Begginer [SoloLearn] '
            ].map((certi, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300">
                
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full overflow-hidden flex items-center justify-center mx-auto mb-4">
                  <img src='/irx358.github.io/public/badge.svg' alt='profile_pic' className="w-10 h-10 object-cover invert" />
                </div>
                <p className="text-sm text-slate-300">{certi}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl text-slate-300 mb-12">
            Ready to collaborate on your next project? Let's discuss how we can work together.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a href="mailto:ir.358.786@gmail.com" className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
              <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-slate-300">ir.358.786@gmail.com</p>
            </a>
            
            <a href="https://github.com/IRX358" target='_blank' className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
              <Github className="w-8 h-8 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2">GitHub</h3>
              <p className="text-slate-300">View my code</p>
            </a>
            
            <a href="https://www.linkedin.com/in/irfan-basha-396b97282/" target='_blank' className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
              <Linkedin className="w-8 h-8 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
              <p className="text-slate-300">Professional network</p>
            </a>
          </div>
          
          <a href="mailto:ir.358.786@gmail.com"><button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-cyan-500/25 mx-auto">
            <MessageSquare className="w-5 h-5" />
            <span>Start a Conversation</span>
          </button></a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <Code className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-semibold">Irfan IR</span>
          </div>
          <p className="text-slate-400 mb-4">
            © 2025 Irfan IR || 
            Built with CURIOSITY
          </p>
          <p className="text-sm text-slate-500">
            "Building reliable, creative, and future-ready web solutions"
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
