import React from 'react';
import { motion } from 'framer-motion';

interface MobileNavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ href, children, onClick }) => (
  <motion.a
    href={href}
    className="block w-full px-4 py-3 text-gray-300 hover:text-green-400 transition-colors duration-200 
               rounded-lg hover:bg-gray-800/50 active:bg-gray-800/70 text-lg touch-target"
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

export default MobileNavLink;