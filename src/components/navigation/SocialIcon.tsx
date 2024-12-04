import React from 'react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface SocialIconProps {
  Icon: LucideIcon;
  href: string;
  size?: number;
}

const SocialIcon: React.FC<SocialIconProps> = ({ Icon, href, size = 20 }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-green-400 transition-colors duration-200 touch-target 
               flex items-center justify-center"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <Icon size={size} />
  </motion.a>
);

export default SocialIcon;