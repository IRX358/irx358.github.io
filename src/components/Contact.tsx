import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Github, Linkedin } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFlying, setIsFlying] = useState(false);

  const { contact, siteMeta } = portfolioData;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Trigger paper plane animation
    setIsFlying(true);
    
    // Create mailto link
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    
    // Small delay to show animation, then open email client
    setTimeout(() => {
      window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
      setIsFlying(false);
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4 max-w-2xl">
        {/* Section Title */}
        <motion.h2
          className="font-marker text-4xl md:text-5xl text-center mb-4 text-foreground"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          className="font-handwriting text-xl text-center text-muted-foreground mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          Let's build something amazing together! ✉️
        </motion.p>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-8 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
        >
          {/* Name Field */}
          <div className="relative">
            <label htmlFor="name" className="font-mono text-sm text-muted-foreground mb-2 block">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="handwriting-input w-full py-2"
              placeholder="John Doe"
              required
            />
            {/* Lined paper effect */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
          </div>

          {/* Email Field */}
          <div className="relative">
            <label htmlFor="email" className="font-mono text-sm text-muted-foreground mb-2 block">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="handwriting-input w-full py-2"
              placeholder="john@example.com"
              required
            />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
          </div>

          {/* Message Field */}
          <div className="relative">
            <label htmlFor="message" className="font-mono text-sm text-muted-foreground mb-2 block">
              Your Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="handwriting-input w-full py-2 min-h-[120px] resize-none"
              placeholder="Hey Irfan, I'd love to work with you on..."
              required
            />
            {/* Lined paper lines */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-full h-px bg-border/50"
                  style={{ top: `${30 + i * 24}px` }}
                />
              ))}
            </div>
          </div>

          {/* Submit Button - Paper Plane */}
          <div className="flex justify-center pt-4">
            <motion.button
              type="submit"
              className={`sketch-button flex items-center gap-3 bg-foreground text-background ${isFlying ? 'pointer-events-none' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={isFlying ? {
                x: '100vw',
                y: '-50vh',
                rotate: 30,
                opacity: 0,
              } : {}}
              transition={isFlying ? { duration: 1, ease: "easeOut" } : {}}
            >
              <Send className="w-5 h-5" />
              Send Message
            </motion.button>
          </div>
        </motion.form>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6 mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <motion.a
            href={siteMeta.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border-2 border-foreground/30 rounded-full hover:border-foreground hover:bg-secondary transition-all"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github className="w-6 h-6" />
          </motion.a>
          <motion.a
            href={siteMeta.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border-2 border-foreground/30 rounded-full hover:border-foreground hover:bg-secondary transition-all"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
          <motion.a
            href={siteMeta.socials.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border-2 border-foreground/30 rounded-full hover:border-foreground hover:bg-secondary transition-all"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Send className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
