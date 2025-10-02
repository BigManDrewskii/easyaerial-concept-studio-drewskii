import { useState } from 'react';
import FeaturedProduct from './FeaturedProduct';
import Footer from './Footer';

export default function ProductFooterSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <section
      className="relative bg-black overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Diagonal pattern background - unified across both sections */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundSize: '7px 7px',
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(85, 85, 85, 0.15) 0, rgba(85, 85, 85, 0.15) 0.7px, transparent 0, transparent 50%)'
        }}
      />
      
      {/* Drone background image with very low opacity - unified */}
      <div 
        className="absolute inset-0 opacity-8 pointer-events-none"
        style={{
          backgroundImage: 'url(/Drone-04.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          mixBlendMode: 'lighten'
        }}
      />
      
      {/* Unified spotlight effect - reveals drone image on hover across both sections */}
      {isHovering && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-700"
          style={{
            backgroundImage: 'url(/Drone-04.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            mixBlendMode: 'lighten',
            opacity: 0.35,
            maskImage: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)`,
            WebkitMaskImage: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)`
          }}
        />
      )}
      
      {/* Child sections - now without duplicate backgrounds */}
      <div className="relative z-10">
        <FeaturedProduct />
        <Footer />
      </div>
    </section>
  );
}
