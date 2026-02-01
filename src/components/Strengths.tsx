import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const Strengths = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { strengths } = portfolioData;

  return (
    <section className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
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
          className="font-handwriting text-xl text-center text-muted-foreground mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          What drives my work ethic ⚡
        </motion.p>

        {/* Strengths Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
          {strengths.map((strength, index) => (
            <motion.div
              key={index}
              className="bg-card border-2 border-foreground/20 rounded-xl p-6 text-center hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-accent to-accent/80 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-foreground font-mono leading-relaxed">{strength}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strengths;
