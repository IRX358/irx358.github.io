import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { portfolioData } from '@/data/portfolio';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { navigation, siteMeta } = portfolioData;

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b-2 border-dashed border-border"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo with Image */}
        <motion.a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('#home');
          }}
          className="flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-foreground">
            <img 
              src={siteMeta.profileImage} 
              alt={siteMeta.name}
              className="w-full h-full object-cover" 
            />
          </div>
          <div>
            <h1 className="font-marker text-xl text-foreground">{siteMeta.name}</h1>
            <p className="text-xs text-muted-foreground font-mono">{siteMeta.role}</p>
          </div>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navigation.items.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="sketch-underline font-mono text-sm text-foreground hover:text-accent transition-colors"
              whileHover={{ y: -2 }}
            >
              {item.label}
            </motion.a>
          ))}
          
          {/* Social Icons */}
          <motion.a
            href={siteMeta.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border-2 border-foreground/30 rounded-full hover:border-foreground hover:bg-secondary transition-all"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github className="w-4 h-4" />
          </motion.a>
          
          <motion.a
            href={siteMeta.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border-2 border-foreground/30 rounded-full hover:border-foreground hover:bg-secondary transition-all"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin className="w-4 h-4" />
          </motion.a>
          
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 border-2 border-foreground rounded-md"
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t-2 border-dashed border-border"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navigation.items.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="font-mono text-lg text-foreground hover:text-accent transition-colors py-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                </motion.a>
              ))}
              
              {/* Mobile Social Links */}
              <div className="flex gap-4 mt-4">
                <a
                  href={siteMeta.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border-2 border-foreground/30 rounded-full hover:border-foreground hover:bg-secondary transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={siteMeta.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border-2 border-foreground/30 rounded-full hover:border-foreground hover:bg-secondary transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;

