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
 
  const keywords = ['Full Stack Developer', 'production-grade', 'AI-assisted development', 'system design'];
 
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
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-border" />
          <motion.h2
            className="font-marker text-3xl md:text-4xl font-semibold text-foreground tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-border to-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-base md:text-lg leading-relaxed text-foreground/90">
              {renderDescription()}
            </p>
 
            <p className="text-base text-muted-foreground leading-relaxed">
              Currently building at{' '}
              <HighlightText>PetoLife</HighlightText>{' '}
              as a Full Stack Developer, shipping production-grade AI-powered features. Also a{' '}
              <HighlightText>Smart India Hackathon #1 Finalist - Internals</HighlightText>,
              IEEE organizer, and a Class Representative for 7 semesters — leading and mentoring.
            </p>
          </motion.div>
 
          {/* Polaroid Style Photo + Sketchy Annotation */}
          <div className="flex justify-center">
            {/* Wrapper relative to the card so annotation stays aligned on all screen sizes */}
            <div className="relative mt-12 sm:mt-14">
              {/* Sketchy annotation — positioned above-left relative to the card */}
              <motion.div
                className="absolute -top-12 -left-2 sm:-left-8 flex flex-col items-start z-20 pointer-events-none select-none"
                initial={{ opacity: 0, y: -6 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <span
                  className="font-handwriting text-base sm:text-lg text-accent font-semibold whitespace-nowrap"
                  style={{ transform: 'rotate(-4deg)', display: 'inline-block' }}
                >
                  Likes Leadership &amp; Networking
                </span>

                {/* Sketchy arrow pointing down-right towards the photo */}
                <svg
                  width="70"
                  height="60"
                  viewBox="0 0 70 60"
                  className="text-accent ml-4 mt-2"
                  fill="none"
                  style={{ overflow: 'visible' }}
                >
                  {/* Graceful curved stem */}
                  <motion.path
                    d="M 12 4 C 12 20, 26 34, 44 52"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{ duration: 0.8, delay: 1.2, ease: "easeInOut" }}
                  />
                  {/* Clean hand-drawn arrowhead */}
                  <motion.path
                    d="M 33.6 48.4 L 44 52 L 40.4 41.6"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{ duration: 0.35, delay: 1.9 }}
                  />
                </svg>
              </motion.div>

              {/* Polaroid card */}
              <motion.div
                initial={{ opacity: 0, x: 50, rotate: -5 }}
                animate={isInView ? { opacity: 1, x: 0, rotate: 2 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="card-frame max-w-sm w-full relative bg-card p-3 pb-8 shadow-lg rounded-xl border border-border/50">
                  {/* Profile image */}
                  <div className="aspect-square bg-secondary overflow-hidden rounded-lg">
                    <img
                      src="/pfp2.jpg"
                      alt="Irfan IR"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Card caption */}
                  <motion.p
                    className="text-lg text-center mt-4 text-foreground font-medium"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1 }}
                  >
                    Irfan IR
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
 
export default About;