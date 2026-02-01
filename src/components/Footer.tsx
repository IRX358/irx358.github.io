import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';

const Footer = () => {
  const { footer } = portfolioData;

  return (
    <footer className="py-12 border-t-2 border-dashed border-border">
      <div className="container mx-auto px-4 text-center">
        <motion.p
          className="font-handwriting text-xl text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {footer.text}
        </motion.p>
        
        {/* Decorative scribble */}
        <motion.div
          className="mt-4 flex justify-center"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <svg width="100" height="20" viewBox="0 0 100 20" className="text-muted-foreground/30">
            <motion.path
              d="M5 10 Q 25 5, 50 10 Q 75 15, 95 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
          </svg>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
