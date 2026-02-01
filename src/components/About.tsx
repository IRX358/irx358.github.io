import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { User } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const HighlightText = ({ children }: { children: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.span
      ref={ref}
      className="relative inline-block"
      initial={{ backgroundSize: "0% 100%" }}
      animate={isInView ? { backgroundSize: "100% 100%" } : {}}
      transition={{ duration: 0.5, delay: 0.2 }}
      style={{
        backgroundImage: "linear-gradient(to right, hsl(var(--highlight) / 0.4) 0%, hsl(var(--highlight) / 0.4) 100%)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0 40%",
        padding: "0 4px",
      }}
    >
      {children}
    </motion.span>
  );
};

const About = () => {
  const { hero } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const keywords = ['Python', 'web development', 'backend systems', 'fast learner', 'technical challenges'];

  const renderDescription = () => {
    let text = hero.description;
    const parts: (string | JSX.Element)[] = [];
    let lastIndex = 0;

    keywords.forEach((keyword, idx) => {
      const keywordLower = keyword.toLowerCase();
      const textLower = text.toLowerCase();
      const index = textLower.indexOf(keywordLower, lastIndex);
      
      if (index !== -1) {
        if (index > lastIndex) {
          parts.push(text.slice(lastIndex, index));
        }
        parts.push(
          <HighlightText key={idx}>
            {text.slice(index, index + keyword.length)}
          </HighlightText>
        );
        lastIndex = index + keyword.length;
      }
    });

    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          className="font-marker text-4xl md:text-5xl text-center mb-16 text-foreground"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="font-mono text-base md:text-lg leading-relaxed text-foreground/90">
              {renderDescription()}
            </p>

            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              I thrive on building <HighlightText>reliable</HighlightText>, 
              creative, and future-ready web solutions with a developer's mindset 
              and an explorer's <HighlightText>curiosity</HighlightText>.
            </p>
          </motion.div>

          {/* Polaroid Style Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: -5 }}
            animate={isInView ? { opacity: 1, x: 0, rotate: 2 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center relative"
          >
            {/* Hand-drawn arrow annotation - positioned to point at photo from top-left */}
            <motion.div
              className="absolute -top-8 left-0 md:-left-8 md:top-4 flex items-center gap-2 md:gap-3 z-10"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              <span className="font-handwriting text-lg md:text-2xl text-accent whitespace-nowrap">
                <b>This guy is creative uhh! ✨</b>
              </span>
              <svg width="50" height="25" viewBox="0 0 50 25" className="text-red-500 hidden md:block">
                <motion.path
                  d="M5 12 Q 25 4, 40 12 Q 43 14, 45 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1, delay: 1 }}
                />
                <motion.path
                  d="M40 8 L 45 12 L 40 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 0.3, delay: 1.8 }}
                />
              </svg>
            </motion.div>
            <div className="polaroid max-w-sm w-full relative">
              {/* Profile image */}
              <div className="aspect-square bg-secondary overflow-hidden border-2 border-dashed border-border">
                <img 
                  src="/pfp2.jpg" 
                  alt="Irfan IR"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Polaroid caption */}
              <motion.p
                className="font-handwriting text-xl text-center mt-5 text-foreground"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1 }}
              >
                Irfan IR ⚡
              </motion.p>

              {/* Decorative tape */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-7 bg-highlight/60 rotate-3 shadow-sm" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
