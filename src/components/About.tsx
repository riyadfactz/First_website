import React from 'react';
import { Code, Brain, GraduationCap, Award, BookOpen, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About <span className="text-green-400">Me</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="relative">
              <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-green-400">
                Materials Science & Engineering Student
              </h3>
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-green-400 to-transparent"
                initial={{ width: 0 }}
                whileInView={{ width: '60%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </div>
            
            <p className="text-gray-300 leading-relaxed text-lg">
              I am a current student of Materials Science and Engineering with a strong interest in Computational Materials Science,
              advanced materials, and nanotechnology. I am building a solid foundation in material properties, processing methods, and
               characterization techniques through my studies. <br />
              I am also passionate about technology — including programming and exploring new tools — to find innovative solutions that
              connect materials science with modern tech. I am eager to gain practical experience through internships, research, and 
              collaborations, and I am committed to continuous learning and problem-solving in the field.
            </p>

            <motion.div 
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* {[
                { value: "3.73", label: "CGPA" },
                { value: "10+", label: "Projects" },
                { value: "5+", label: "Publications" },
                { value: "3+", label: "Awards" }
              ].map(({ value, label }) => (
                <div key={label} className="text-center p-4 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50">
                  <div className="text-2xl font-bold text-green-400">{value}</div>
                  <div className="text-sm text-gray-400">{label}</div>
                </div>
              ))} */}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-semibold mb-6">Key Highlights</h4>
            
            <div className="space-y-4">
              {[
                { Icon: GraduationCap, title: "Academic Excellence", desc: "Good academic performance" },
                { Icon: Rocket, title: "Research Focus", desc: "Active involvement in materials science research projects" },
                { Icon: Code, title: "Technical Skills", desc: "Proficient in Python, C, and C++ programming" },
                { Icon: BookOpen, title: "Continuous Learning", desc: "Always exploring new technologies and methodologies" }
              ].map(({ Icon, title, desc }, index) => (
                <motion.div
                  key={title}
                  className="flex gap-4 p-4 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-gray-700/30"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <Icon className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium mb-1">{title}</h5>
                    <p className="text-sm text-gray-400">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              Icon: Code, 
              title: "Development", 
              description: ""//"Specialized in building modern applications using Python, C, and C++, with a focus on efficiency and performance" 
            },
            { 
              Icon: Brain, 
              title: "Research", 
              description:  ""//"Conducting research in advanced materials and their applications in modern technology" 
            },
            { 
              Icon: Rocket, 
              title: "Innovation", 
              description: " "//"Creating innovative solutions at the intersection of materials science and technology" 
            }
          ].map((skill, index) => (
            <SkillCard key={index} {...skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ 
  Icon, 
  title, 
  description, 
  index 
}: { 
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
