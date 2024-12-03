import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.div 
      className={`fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/80 backdrop-blur-lg' : ''
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto rounded-full backdrop-blur-md bg-gray-900/30 border border-gray-800/30 shadow-lg">
        <div className="px-4 md:px-6">
          <div className="flex justify-between h-14 items-center">
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-green-400 font-bold text-xl md:text-2xl">Mahmud</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#projects">Skills</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>

            {/* Desktop Social Icons */}
            <div className="hidden md:flex items-center space-x-4">
              <SocialIcon Icon={Github} href="https://github.com/mdalmahmud023" />
              <SocialIcon Icon={Linkedin} href="https://linkedin.com/in/mdalmahmud023" />
              <SocialIcon Icon={Mail} href="mailto:mdalmahmud023@gmail.com" />
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 rounded-2xl backdrop-blur-md bg-gray-900/95 border border-gray-800/30 shadow-lg overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-4 space-y-3">
                <MobileNavLink href="#about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
                <MobileNavLink href="#projects" onClick={() => setIsOpen(false)}>Skills</MobileNavLink>
                <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
                
                <div className="pt-4 border-t border-gray-800/30 flex justify-center space-x-6">
                  <SocialIcon Icon={Github} href="https://github.com/mdalmahmud023" size={20} />
                  <SocialIcon Icon={Linkedin} href="https://linkedin.com/in/mdalmahmud023" size={20} />
                  <SocialIcon Icon={Mail} href="mailto:mdalmahmud023@gmail.com" size={20} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.div>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <motion.a
    href={href}
    className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm md:text-base"
    onClick={(e) => {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
);

const MobileNavLink: React.FC<{ 
  href: string; 
  children: React.ReactNode;
  onClick: () => void;
}> = ({ href, children, onClick }) => (
  <motion.a
    href={href}
    className="block px-4 py-3 text-gray-300 hover:text-green-400 transition-colors duration-200 
               rounded-lg hover:bg-gray-800/50 active:bg-gray-800/70 text-lg"
    onClick={(e) => {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      onClick();
    }}
    whileTap={{ scale: 0.98 }}
  >
    {children}
  </motion.a>
);

const SocialIcon: React.FC<{ 
  Icon: React.ElementType;
  href: string;
  size?: number;
}> = ({ Icon, href, size = 20 }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-green-400 transition-colors duration-200"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <Icon size={size} />
  </motion.a>
);

export default Navbar;