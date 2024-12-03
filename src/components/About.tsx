import React from 'react';
import { Code, Palette, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About <span className="text-green-400">Me</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { Icon: Code, title: "Development", description: "Specialized in building modern web applications using React, TypeScript, and Node.js" },
            { Icon: Palette, title: "Design", description: "Creating beautiful and intuitive user interfaces with attention to detail" },
            { Icon: Brain, title: "Problem Solving", description: "Passionate about solving complex problems with elegant solutions" }
          ].map((skill, index) => (
            <SkillCard key={index} {...skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ Icon, title, description, index }: { 
  Icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}) => (
  <motion.div 
    className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    whileHover={{ scale: 1.02 }}
  >
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
    >
      <Icon className="w-12 h-12 text-green-400 mb-4" />
    </motion.div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

export default About;