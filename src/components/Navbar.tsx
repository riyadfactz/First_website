import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import NavLink from './navigation/NavLink';
import SocialIcon from './navigation/SocialIcon';
import MobileMenu from './navigation/MobileMenu';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => window.innerWidth >= 768 && setIsOpen(false);
    const handleScroll = () => isOpen && setIsOpen(false);

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  return (
    <>
      <motion.header 
        className="fixed top-0 left-0 right-0 flex justify-center z-50 px-4"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className={`mt-4 px-8 py-2 rounded-full w-[min(95%,800px)] ${
          isScrolled 
            ? 'bg-gray-900/80 backdrop-blur-lg shadow-lg border border-gray-800/50' 
            : 'bg-gray-900/50 backdrop-blur-sm'
        }`}>
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-green-400 font-bold text-lg">Mahmud</span>
            </motion.div>

            <div className="hidden md:flex items-center gap-12">
              <div className="flex items-center space-x-8">
                <NavLink href="#about">About</NavLink>
                <NavLink href="#projects">Skills</NavLink>
                <NavLink href="#contact">Contact</NavLink>
              </div>

              <div className="flex items-center space-x-4">
                <SocialIcon Icon={Github} href="https://github.com/mdalmahmud023" />
                <SocialIcon Icon={Linkedin} href="https://linkedin.com/in/mdalmahmud023" />
                <SocialIcon Icon={Mail} href="mailto:mdalmahmud023@gmail.com" />
              </div>
            </div>

            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <div className={`fixed top-[60px] left-0 right-0 z-40 transition-transform duration-300 ${
        isOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </>
  );
};

export default Navbar;