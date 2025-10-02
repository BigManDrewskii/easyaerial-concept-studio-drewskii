import { useState, useEffect } from 'react';
import { Button } from '../ui/button-system';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`group fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[1120px] transition-all duration-300 border border-warm-gray/20 rounded-2xl overflow-hidden hover:border-bright-yellow/40 ${
        scrolled 
          ? 'shadow-2xl' 
          : 'shadow-xl'
      }`}
      style={{
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        backgroundSize: '7px 7px',
        backgroundImage: 'repeating-linear-gradient(45deg, rgba(85, 85, 85, 0.15) 0, rgba(85, 85, 85, 0.15) 0.7px, transparent 0, transparent 50%)',
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
      }}
    >
      {/* Subtle yellow glow from bottom on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-bright-yellow/0 via-transparent to-transparent opacity-0 group-hover:from-bright-yellow/10 group-hover:opacity-100 transition-all duration-700 pointer-events-none rounded-2xl" />
      
      <nav className="relative flex items-center justify-between px-8 py-4 z-10">
        {/* Logo - Text Only */}
        <div className="group cursor-pointer">
          <span className="text-warm-gray font-semibold text-xl tracking-tight transition-colors duration-300 group-hover:text-bright-yellow">
            Easy Aerial
          </span>
        </div>
        
        {/* Navigation */}
        <div className="flex items-center gap-3">
          <a href="#products">
            <Button variant="ghost" size="md">
              Products
            </Button>
          </a>
          <a href="#contact">
            <Button variant="primary" size="md">
              Contact
            </Button>
          </a>
        </div>
      </nav>
    </header>
  );
}
