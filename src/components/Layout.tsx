import React from 'react';
import Navbar from './Navbar';
import { useScrollPosition } from '../hooks/useScrollPosition';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const scrollPosition = useScrollPosition();
  
  return (
    <div className="relative min-h-screen bg-gray-900 text-gray-100 overflow-x-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(76,175,80,0.15),rgba(0,0,0,0))]" />
      <div className="relative z-10">
        <Navbar isScrolled={scrollPosition > 50} />
        <main className="relative">{children}</main>
      </div>
    </div>
  );
};

export default Layout;