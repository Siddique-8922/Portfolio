import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Categorized Data Structure
const skillsData = [
  { name: 'React.js', level: 90, category: 'Frontend' },
  { name: 'JavaScript (ES6+)', level: 85, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 95, category: 'Frontend' },
  { name: 'HTML5 & CSS3', level: 90, category: 'Frontend' },
  { name: 'UI/UX & Figma', level: 80, category: 'Design' },
  { name: 'Node.js', level: 75, category: 'Backend' },
  { name: 'Express.js', level: 75, category: 'Backend' },
  { name: 'MongoDB', level: 70, category: 'Backend' },
  { name: 'AWS (EC2, S3, IAM)', level: 65, category: 'Cloud' },
  { name: 'Git & GitHub', level: 85, category: 'Tools' },
  { name: 'C / C++', level: 70, category: 'Core' },
];

const categories = ['All', 'Frontend', 'Backend', 'Cloud', 'Design', 'Tools', 'Core'];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section className="py-24 relative z-10" id="skills">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A versatile toolkit tailored for building scalable, high-performance web applications and premium user experiences.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/20' 
                  : 'glass-card text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="glass-card p-6 group hover:border-primary/50 transition-colors"
              >
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">
                    {skill.name}
                  </h4>
                  <span className="text-sm text-accent font-semibold">
                    {skill.level}%
                  </span>
                </div>
                
                {/* Animated Progress Bar */}
                <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full relative"
                  >
                    {/* Glowing tip on the progress bar */}
                    <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/50 blur-[4px] rounded-full"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;