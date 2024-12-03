import React from 'react';
import { motion } from 'framer-motion';
import type { Skill } from './skillsData';

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const SkillCard = ({ icon: Icon, name, color }: Skill & { index: number }) => {
  return (
    <motion.div
      variants={item}
      whileHover={{ scale: 1.05, rotate: [-1, 1, -1, 0] }}
      className={`p-6 rounded-xl backdrop-blur-sm border border-gray-700/50 
                 bg-gradient-to-br from-gray-800/50 to-gray-900/50`}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 10 }}
        className="mb-4"
      >
        <Icon className={`w-12 h-12 ${color}`} />
      </motion.div>

      <h3 className="text-lg font-semibold mb-2">{name}</h3>

      <div className="w-full h-2 bg-gray-700/50 rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${color.replace('text-', 'bg-')}`}
          initial={{ width: 0 }}
          // whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>

      {/* <p className="mt-2 text-sm text-gray-400">{level}% Proficiency</p> */}
    </motion.div>
  );
};

export default SkillCard;
