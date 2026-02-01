import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';

interface Skill {
  name: string;
  level: number;
}

const SkillBadge = ({ skill, isSelected, onClick }: { skill: Skill; isSelected: boolean; onClick: () => void }) => {
  const isLearningSoon = skill.level === 0;

  return (
    <motion.button
      onClick={onClick}
      className={`relative px-4 py-2 mx-2 rounded-md border-2 transition-colors font-mono text-sm whitespace-nowrap ${
        isSelected 
          ? 'border-accent bg-accent/10' 
          : 'border-foreground/30 hover:border-foreground/60'
      }`}
      whileHover={{ scale: 1.05, rotate: Math.random() > 0.5 ? 1 : -1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Learning Soon tape */}
      {isLearningSoon && (
        <span className="absolute -top-3 -right-2 masking-tape text-[10px]">
          Learning Soon
        </span>
      )}
      
      {/* Shield effect when selected */}
      {isSelected && (
        <motion.div
          className="absolute inset-0 border-2 border-accent rounded-md"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            borderRadius: '8px 12px 8px 12px',
          }}
        />
      )}
      
      <span className={isLearningSoon ? 'opacity-60' : ''}>
        {skill.name}
      </span>
      
      {!isLearningSoon && (
        <span className="ml-2 text-xs text-muted-foreground">
          {skill.level}%
        </span>
      )}
    </motion.button>
  );
};

const SkillCategory = ({ title, skills, selectedSkill, onSkillClick }: { 
  title: string; 
  skills: Skill[]; 
  selectedSkill: string | null;
  onSkillClick: (name: string) => void;
}) => {
  return (
    <div className="mb-8">
      <h3 className="font-marker text-xl mb-4 text-foreground/80">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <SkillBadge
            key={skill.name}
            skill={skill}
            isSelected={selectedSkill === skill.name}
            onClick={() => onSkillClick(skill.name)}
          />
        ))}
      </div>
    </div>
  );
};

const Marquee = ({ children, direction = 'left' }: { children: React.ReactNode; direction?: 'left' | 'right' }) => {
  return (
    <div className="relative overflow-hidden py-4">
      <motion.div
        className="flex"
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          x: {
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
};

const Skills = () => {
  const { skills } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const allSkills = [
    ...skills.frontend,
    ...skills.backend,
    ...skills.databases,
    ...skills.tools,
  ];

  const handleSkillClick = (name: string) => {
    setSelectedSkill(selectedSkill === name ? null : name);
  };

  const categories = [
    { title: '🎨 Frontend', skills: skills.frontend },
    { title: '⚙️ Backend', skills: skills.backend },
    { title: '🗄️ Databases', skills: skills.databases },
    { title: '🛠️ Tools', skills: skills.tools },
    { title: '🔐 Cybersecurity', skills: skills.cyberSecurity },
    { title: '🤖 Machine Learning', skills: skills.machineLearning },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          className="font-marker text-4xl md:text-5xl text-center mb-8 text-foreground"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Skills & Tools
        </motion.h2>

        <motion.p
          className="font-handwriting text-xl text-center text-muted-foreground mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          Click a skill to highlight it! ✨
        </motion.p>

        {/* Marquee */}
        <motion.div
          className="mb-16 border-y-2 border-dashed border-border py-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          <Marquee>
            {allSkills.map((skill, index) => (
              <SkillBadge
                key={`marquee-${skill.name}-${index}`}
                skill={skill}
                isSelected={selectedSkill === skill.name}
                onClick={() => handleSkillClick(skill.name)}
              />
            ))}
          </Marquee>
        </motion.div>

        {/* Skill Categories Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          {categories.map((category) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
              selectedSkill={selectedSkill}
              onSkillClick={handleSkillClick}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
