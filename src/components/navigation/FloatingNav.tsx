import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, Code, Mail } from 'lucide-react';

const FloatingNav = () => {
  const navItems = [
    { icon: Home, href: '#hero', label: 'Home' },
    { icon: User, href: '#about', label: 'About' },
    { icon: Code, href: '#projects', label: 'Skills' },
    { icon: Mail, href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.div
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900/60 backdrop-blur-lg border border-gray-700/30 shadow-lg">
        {navItems.map(({ icon: Icon, href, label }) => (
          <motion.a
            key={href}
            href={href}
            className="relative p-3 rounded-full text-gray-300 hover:text-green-400 transition-colors group"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon className="w-5 h-5" />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900/80 backdrop-blur-sm 
                           rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              {label}
            </span>
          </motion.a>
        ))}
      </nav>
    </motion.div>
  );
};

export default FloatingNav;