import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Bus, Cog, User, Briefcase, Plane, Globe, MapPinCheckInside} from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  bus: Bus,
  cog: Cog,
  user: User,
  briefcase: Briefcase,
  plane: Plane,
  globe: Globe,
  pin: MapPinCheckInside
};

const ProjectCard = ({ project, index }: { project: typeof portfolioData.projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = iconMap[project.icon] || Globe;

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
      className="relative group"
    >
      {/* Paperclip */}
      <div className="absolute -top-4 right-8 text-3xl transform rotate-12 z-10">
        📎
      </div>

      {/* Card */}
      <div className="bg-card border-2 border-foreground/20 p-6 pt-8 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden"
        style={{ borderRadius: '4px 16px 4px 16px' }}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-secondary rounded-md border border-border">
              <Icon className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="font-marker text-xl text-foreground">{project.title}</h3>
              <span className="text-xs font-mono text-muted-foreground">{project.status}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="font-mono text-sm text-muted-foreground mb-6 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
          {project.description}
        </p>

        {/* Tech Stack as Masking Tape Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, idx) => (
            <span
              key={tech}
              className="masking-tape text-[10px]"
              style={{ transform: `rotate(${(idx % 3 - 1) * 2}deg)` }}
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
          className="inline-flex items-center gap-2 font-mono text-sm text-accent hover:text-accent/80 transition-colors"
          whileHover={{ x: 5 }}
        >
          {isGithub ? (
            <>
              <Github className="w-4 h-4" />
              View on GitHub
            </>
          ) : (
            <>
              <ExternalLink className="w-4 h-4" />
              Visit Project
            </>
          )}
        </motion.a>

        {/* GitHub Octocat peeking (for GitHub links) */}
        {isGithub && (
          <motion.div
            className="absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity"
            initial={{ y: 20, x: 10 }}
            whileHover={{ y: 0, x: 0 }}
          >
            <div className="text-4xl transform -rotate-12">🐙</div>
          </motion.div>
        )}
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
          className="font-handwriting text-xl text-center text-muted-foreground mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          Things I've built with curiosity ✨
        </motion.p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
