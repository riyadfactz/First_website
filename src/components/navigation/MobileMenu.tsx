import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import MobileNavLink from './MobileNavLink';
import SocialIcon from './SocialIcon';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800/30 shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">
          <MobileNavLink href="#about" onClick={onClose}>About</MobileNavLink>
          <MobileNavLink href="#projects" onClick={onClose}>Skills</MobileNavLink>
          <MobileNavLink href="#contact" onClick={onClose}>Contact</MobileNavLink>
          
          <div className="pt-4 border-t border-gray-800/30 flex justify-center space-x-8">
            <SocialIcon Icon={Github} href="https://github.com/mdalmahmud023" size={24} />
            <SocialIcon Icon={Linkedin} href="https://linkedin.com/in/mdalmahmud023" size={24} />
            <SocialIcon Icon={Mail} href="mailto:mdalmahmud023@gmail.com" size={24} />
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default MobileMenu;