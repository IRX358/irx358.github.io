import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Zap, Sparkles, Target, Lightbulb, Rocket, ChevronRight } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const icons = [Rocket, Zap, Target, Lightbulb, Sparkles];

const Strengths = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { strengths } = portfolioData;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background glow effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.h2
          className="font-marker text-4xl md:text-5xl text-center mb-4 text-foreground"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Key Strengths
        </motion.h2>

        <motion.p
          className="font-handwriting text-xl text-center text-muted-foreground mb-12 md:mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          What drives my work ethic ⚡
        </motion.p>

        {/* Strengths Cards - Masonry-like layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5 max-w-6xl mx-auto">
          {strengths.map((strength, index) => {
            const Icon = icons[index % icons.length];
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, y: 40, rotateX: -15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ delay: 0.15 + index * 0.1, duration: 0.5, ease: "easeOut" }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ perspective: "1000px" }}
              >
                {/* Animated gradient border */}
                <motion.div
                  className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-accent/60 via-primary/60 to-accent/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={isHovered ? { backgroundPosition: ["0%", "100%", "0%"] } : {}}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  style={{ backgroundSize: "200% 100%" }}
                />

                {/* Card content */}
                <motion.div
                  className="relative bg-card/90 backdrop-blur-sm border border-border/50 rounded-2xl p-5 md:p-6 h-full overflow-hidden"
                  animate={isHovered ? {
                    y: -8,
                    scale: 1.02,
                    rotateY: index % 2 === 0 ? 3 : -3,
                    rotateX: 2,
                  } : {
                    y: 0,
                    scale: 1,
                    rotateY: 0,
                    rotateX: 0,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Floating particles on hover */}
                  <AnimatePresence>
                    {isHovered && (
                      <>
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1.5 h-1.5 bg-accent rounded-full"
                            initial={{ opacity: 0, scale: 0, x: 20 + i * 15, y: 20 }}
                            animate={{
                              opacity: [0, 1, 0],
                              scale: [0, 1, 0],
                              y: -30 - i * 10,
                              x: 25 + i * 12 + Math.sin(i) * 10,
                            }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1, delay: i * 0.15, repeat: Infinity }}
                          />
                        ))}
                      </>
                    )}
                  </AnimatePresence>

                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)",
                    }}
                    animate={isHovered ? { x: ["-100%", "200%"] } : { x: "-100%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />

                  {/* Icon container with glow */}
                  <div className="relative mb-4">
                    <motion.div
                      className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 border border-accent/30 flex items-center justify-center relative overflow-hidden"
                      animate={isHovered ? {
                        boxShadow: "0 0 30px rgba(var(--accent), 0.4)",
                        rotate: [0, -5, 5, 0],
                      } : {
                        boxShadow: "0 0 0px rgba(var(--accent), 0)",
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* Pulsing inner glow */}
                      <motion.div
                        className="absolute inset-0 bg-accent/20 rounded-2xl"
                        animate={isHovered ? { scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] } : {}}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-accent relative z-10" />
                    </motion.div>

                    {/* Orbiting dot */}
                    <motion.div
                      className="absolute top-0 right-0 w-3 h-3 bg-primary rounded-full"
                      animate={isHovered ? {
                        rotate: 360,
                      } : { rotate: 0 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      style={{ transformOrigin: "-20px 20px" }}
                    />
                  </div>

                  {/* Strength text */}
                  <p className="text-sm md:text-base text-foreground font-mono leading-relaxed relative z-10">
                    {strength}
                  </p>

                  {/* Hover indicator */}
                  <motion.div
                    className="absolute bottom-4 right-4 text-accent"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.div>

                  {/* Corner decoration */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
                    <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-accent/10 to-transparent" />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Strengths;
