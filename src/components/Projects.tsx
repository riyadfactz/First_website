import React from 'react';
import SkillsGrid from './skills/SkillsGrid';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-green-400">Skills</span>
        </motion.h2>
        
        <SkillsGrid />
      </div>
    </section>
  );
};

export default Projects;