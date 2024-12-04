import React from 'react';
import { motion } from 'framer-motion';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <motion.a
    href={href}
    className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm md:text-base font-medium"
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

export default NavLink;