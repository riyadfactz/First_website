import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,175,80,0.1),rgba(0,0,0,0))]" />
      </div>

      <div className="text-center z-10 px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-8">
          <motion.div
            className="relative group"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-green-400/50 glow relative z-10">
              <motion.img
                src= "/images/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover filter brightness-105 transition-transform duration-500 group-hover:scale-110"
                whileHover={{ scale: 1.1 }}
              />
            </div>
            
            {/* Decorative rings */}
            <div className="absolute inset-0 rounded-full border-2 border-green-400/20 animate-pulse" />
            <div className="absolute -inset-2 rounded-full border-2 border-green-400/10 animate-pulse delay-75" />
            <div className="absolute -inset-4 rounded-full border-2 border-green-400/5 animate-pulse delay-150" />

            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-b from-green-400/10 to-transparent pointer-events-none"
              animate={{
                boxShadow: [
                  '0 0 25px rgba(74, 222, 128, 0.2)',
                  '0 0 50px rgba(74, 222, 128, 0.4)',
                  '0 0 25px rgba(74, 222, 128, 0.2)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          <motion.div
            className="text-left"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-green-400"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Al Mahmud
              </motion.h1>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-green-400/50 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </div>
            <motion.p 
              className="text-xl md:text-2xl text-gray-400 font-light"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Student of Materials Science & Engineering
            </motion.p>
          </motion.div>
        </div>

        <motion.p
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Passionate about exploring the intersection of technology and materials science,
          with a keen interest in innovative solutions and cutting-edge developments.
        </motion.p>

        <motion.a
          href="#about"
          className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-green-500/10 to-green-500/20 
                     text-green-400 rounded-full hover:from-green-500/20 hover:to-green-500/30 
                     transition-all duration-300 shadow-lg shadow-green-500/5"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          See More
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
