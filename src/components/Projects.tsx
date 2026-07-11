import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Bus, Cog, User, Briefcase, Plane, Globe, MapPinCheckInside, DollarSign} from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  bus: Bus,
  cog: Cog,
  user: User,
  briefcase: Briefcase,
  plane: Plane,
  globe: Globe,
  pin: MapPinCheckInside,
  dollar:DollarSign
};

const ProjectCard = ({ project, index }: { project: typeof portfolioData.projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = iconMap[project.icon] || Globe;
  const [showEmoji, setShowEmoji] = useState(false);

  const isGithub = project.link.includes('github.com');

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -2 : 2 }}
      animate={isInView ? { opacity: 1, y: 0, rotate: index % 2 === 0 ? -1 : 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.02, 
        rotate: 0,
        transition: { duration: 0.2 }
      }}
      onMouseEnter={() => setShowEmoji(true)}
      onMouseLeave={() => setShowEmoji(false)}
      className="relative group"
    >
      {/* Card */}
      <div className="paperclip bg-card border-2 border-border rounded-lg p-5 hover:border-accent/50 transition-all duration-300 relative z-10 overflow-hidden"
      >
        {/* Penguin Emoji Popup - only for GitHub projects, peeps out from card border inside the card at bottom-right */}
        <AnimatePresence>
          {showEmoji && isGithub && (
            <motion.div
              className="absolute bottom-0 right-4 z-20 pointer-events-none"
              initial={{ y: 50, rotate: 30, opacity: 0 }}
              animate={{ y: 0, rotate: -12, opacity: 1 }}
              exit={{ y: 50, rotate: 30, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <span className="text-4xl block origin-bottom-right">🐧</span>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Header */}
        <div className="flex items-start gap-3 mb-3">
          <motion.div
            className="p-2 bg-accent/10 rounded-lg border border-accent/20"
            whileHover={{ rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.5 }}
          >
            <Icon className="w-5 h-5 text-accent" />
          </motion.div>
          <div className="flex-1">
            <h3 className="font-marker text-lg text-foreground mb-1">{project.title}</h3>
            <span className="inline-block px-2 py-0.5 text-xs font-mono bg-muted rounded-full text-muted-foreground">
              {project.status}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="font-handwriting text-base text-muted-foreground mb-4">
          {project.description}
        </p>

        {/* Tech Stack with masking tape */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-mono border border-foreground/20 rounded hover:border-accent/40 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Link */}
        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-sm text-accent hover:text-accent/80 transition-colors sketch-underline"
          whileHover={{ x: 5 }}
        >
          {isGithub ? (
            <>
              <Github className="w-4 h-4" />
              View on GitHub →
            </>
          ) : (
            <>
              <ExternalLink className="w-4 h-4" />
              Visit Project →
            </>
          )}
        </motion.a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { projects } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          className="font-marker text-4xl md:text-5xl text-center mb-4 text-foreground"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <motion.p
          className="font-handwriting text-xl text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          Some things I've built with curiosity !
        </motion.p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
