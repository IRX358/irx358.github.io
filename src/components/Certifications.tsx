import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

interface CertificationItem {
  title: string;
  logo: string;
}

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { certifications } = portfolioData as { certifications: CertificationItem[] };

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          className="font-marker text-4xl md:text-5xl text-center mb-4 text-foreground"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Certifications
        </motion.h2>

        <motion.p
          className="font-handwriting text-xl text-center text-muted-foreground mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          Professional credentials & achievements 🏆
        </motion.p>

        {/* Certifications - Alternating left/right layout */}
        <div className="max-w-4xl mx-auto space-y-6">
          {certifications.map((cert, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                className={`flex items-center gap-4 ${isLeft ? 'flex-row' : 'flex-row-reverse'} justify-center`}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + index * 0.08, duration: 0.4 }}
              >
                {/* Glass Ring with Logo */}
                <motion.div
                  className="relative flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Outer glass ring */}
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 backdrop-blur-sm border-2 border-accent/30 flex items-center justify-center relative overflow-hidden shadow-md">
                    {/* Logo */}
                    <img
                      src={cert.logo}
                      alt=""
                      className="w-9 h-9 md:w-10 md:h-10 object-cover rounded-full relative z-10"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          const icon = document.createElement('div');
                          icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>';
                          icon.className = 'text-accent';
                          parent.appendChild(icon);
                        }
                      }}
                    />
                  </div>
                </motion.div>

                {/* Certificate Name Pill - attached to logo */}
                <motion.div
                  className={`flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full shadow-sm hover:border-accent/40 hover:shadow-md transition-all duration-300 ${isLeft ? '' : 'flex-row-reverse'}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <Award className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="font-handwriting text-base text-foreground whitespace-nowrap">
                    {cert.title}
                  </span>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
