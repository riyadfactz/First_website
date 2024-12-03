import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from './SkillCard';
import { skillsData } from './skillsData';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const SkillsGrid = () => {
  return (
    <motion.div 
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {skillsData.map((skill, index) => (
        <SkillCard key={index} {...skill} index={index} />
      ))}
    </motion.div>
  );
};

export default SkillsGrid;