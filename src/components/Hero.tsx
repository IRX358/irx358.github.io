import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowDown, Code, Database, Cpu, Binary, Brain, Shield, Monitor, Lock, Globe, Network } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const AnimatedName = () => {
  const name = "IRFAN";
  
  return (
    <motion.h1 
      className="font-marker text-6xl md:text-8xl lg:text-9xl text-foreground mb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {name.split('').map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ opacity: 0, y: 50, rotate: -10 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ 
            delay: index * 0.15,
            duration: 0.5,
            type: "spring",
            stiffness: 100
          }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

const TypewriterText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => {
      clearInterval(timer);
      clearInterval(cursorTimer);
    };
  }, [text]);

  return (
    <span className="font-mono text-lg md:text-xl text-muted-foreground">
      {displayText}
      <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
    </span>
  );
};

const FloatingDoodle = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    className="absolute text-muted-foreground/30"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: 1, 
      scale: 1,
      y: [0, -10, 0],
      rotate: [0, 5, -5, 0]
    }}
    transition={{
      opacity: { delay, duration: 0.5 },
      scale: { delay, duration: 0.5 },
      y: { delay: delay + 0.5, duration: 4, repeat: Infinity, ease: "easeInOut" },
      rotate: { delay: delay + 0.5, duration: 6, repeat: Infinity, ease: "easeInOut" }
    }}
  >
    {children}
  </motion.div>
);

const Hero = () => {
  const { hero } = portfolioData;
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 300);
    }, 5000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center overflow-hidden graph-paper paper-texture"
    >
      {/* Floating Doodles - Left Side */}
      <div className="absolute top-16 left-12 md:left-20">
        <FloatingDoodle delay={0.5}>
          <Code className="w-10 h-10 md:w-12 md:h-12" />
        </FloatingDoodle>
      </div>
      
      <div className="absolute bottom-28 left-6 md:left-16">
        <FloatingDoodle delay={1.1}>
          <Cpu className="w-12 h-12 md:w-14 md:h-14" />
        </FloatingDoodle>
      </div>

      {/* Floating Doodles - Right Side */}
      <div className="absolute top-52 right-10 md:right-24">
        <FloatingDoodle delay={0.8}>
          <Database className="w-8 h-8 md:w-10 md:h-10" />
        </FloatingDoodle>
      </div>
      
      <div className="absolute bottom-48 right-6 md:right-14">
        <FloatingDoodle delay={1.4}>
          <Binary className="w-6 h-6 md:w-8 md:h-8" />
        </FloatingDoodle>
      </div>

      {/* Floating Doodles - Center Areas (ML, Cybersecurity, Web) */}
      {/* Machine Learning - Top Left Center */}
      <div className="absolute top-24 left-[22%]">
        <FloatingDoodle delay={1.7}>
          <Brain className="w-7 h-7 md:w-10 md:h-10" />
        </FloatingDoodle>
      </div>

      {/* Cybersecurity - Top Right Center */}
      <div className="absolute top-44 right-[28%]">
        <FloatingDoodle delay={2.0}>
          <Shield className="w-6 h-6 md:w-9 md:h-9" />
        </FloatingDoodle>
      </div>

      {/* Web Development - Bottom Left Center */}
      <div className="absolute bottom-44 left-[27%]">
        <FloatingDoodle delay={2.3}>
          <Monitor className="w-8 h-8 md:w-11 md:h-11" />
        </FloatingDoodle>
      </div>

      {/* Network/ML - Bottom Right Center */}
      <div className="absolute bottom-24 right-[32%]">
        <FloatingDoodle delay={2.6}>
          <Network className="w-7 h-7 md:w-10 md:h-10" />
        </FloatingDoodle>
      </div>

      {/* Cybersecurity Lock - Top Center */}
      <div className="absolute top-36 left-[48%]">
        <FloatingDoodle delay={2.9}>
          <Lock className="w-6 h-6 md:w-8 md:h-8" />
        </FloatingDoodle>
      </div>

      {/* Web Globe - Bottom Center */}
      <div className="absolute bottom-36 left-[52%]">
        <FloatingDoodle delay={3.2}>
          <Globe className="w-7 h-7 md:w-9 md:h-9" />
        </FloatingDoodle>
      </div>

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        {/* Greeting */}
        <motion.p
          className="font-handwriting text-2xl md:text-3xl text-red-500 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
         <b>Hello, people! 👋 <br></br> I'm </b> 
        </motion.p>

        {/* Animated Name */}
        <div className={glitch ? 'animate-glitch' : ''}>
          <AnimatedName />
        </div>

        {/* Subtitle */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <TypewriterText text="Building logic from chaos..." />
        </motion.div>

        {/* Description */}
        <motion.p
          className="font-mono text-sm md:text-base text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          {hero.description}
        </motion.p>

        {/* Quote */}
        <motion.blockquote
          className="font-handwriting text-xl md:text-2xl text-foreground/80 italic max-w-xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          "{hero.quote}"
        </motion.blockquote>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3 }}
        >
          {hero.actions.map((action, index) => (
            <motion.a
              key={action.label}
              href={action.type === 'download' ? action.link : action.link}
              download={action.type === 'download' ? true : undefined}
              className={`sketch-button flex items-center gap-2 ${
                index === 0 
                  ? 'bg-foreground text-background hover:bg-foreground/90' 
                  : ''
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                if (action.type === 'anchor') {
                  e.preventDefault();
                  const element = document.querySelector(action.link);
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {action.type === 'download' && <Download className="w-4 h-4" />}
              {action.label}
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { delay: 3 },
            y: { delay: 3, duration: 1.5, repeat: Infinity } 
          }}
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
