import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FiGithub } from 'react-icons/fi'; // Changed to react-icons

// Project Data based on your experience
const projectsData = [
  {
    id: 1,
    title: 'Company Website Clone',
    description: 'A pixel-perfect, fully responsive clone of a modern corporate website focusing on layout architecture and performance.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    category: 'Frontend',
    github: '#',
    live: '#',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Interactive UI Design System',
    description: 'A comprehensive design system featuring reusable components, typography scales, and interactive states.',
    tech: ['Figma', 'React', 'Storybook'],
    category: 'Design',
    github: '#',
    live: '#',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'AWS Cloud Deployment Hub',
    description: 'Architecture project demonstrating secure deployment practices using EC2 instances, S3 storage, and IAM roles.',
    tech: ['AWS EC2', 'S3', 'Node.js', 'Nginx'],
    category: 'Cloud',
    github: '#',
    live: '#',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'AI Chatbot Interface',
    description: 'A futuristic chat interface designed to integrate with Large Language Models, featuring streaming text animations.',
    tech: ['React', 'CSS Modules', 'OpenAI API'],
    category: 'Frontend',
    github: '#',
    live: '#',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Gaming UI Prototype',
    description: 'High-fidelity prototype for a modern gaming dashboard with inventory management and player stats.',
    tech: ['Figma', 'UI/UX'],
    category: 'Design',
    github: '#',
    live: '#',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop'
  }
];

const categories = ['All', 'Frontend', 'Cloud', 'Design'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section className="py-24 relative z-10" id="projects">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work in frontend development, cloud architecture, and UI/UX design.
          </p>
        </motion.div>

        {/* Filters */}
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

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card group overflow-hidden flex flex-col h-full"
              >
                {/* Image Container with Hover Scale */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-100 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, index) => (
                      <span 
                        key={index}
                        className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/10 mt-auto">
                    <a 
                      href={project.github} 
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      <FiGithub size={18} /> Code {/* Changed here */}
                    </a>
                    <a 
                      href={project.live} 
                      className="flex items-center gap-2 text-sm text-accent hover:text-primary transition-colors ml-auto"
                    >
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;