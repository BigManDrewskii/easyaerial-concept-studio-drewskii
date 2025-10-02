import { useState } from 'react';
import { Button } from '../ui/button-system';

export default function Hero() {
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
      className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20 bg-black relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Original drone background with bottom-to-top fade-in */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/drone-hero-original.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Bottom-to-top fade gradient overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.7) 30%, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0.1) 100%)'
          }}
        />
      </div>
      
      {/* Technical overlay with spotlight effect on hover */}
      {isHovering && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-700"
          style={{
            backgroundImage: 'url(/drone-hero-technical.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.6,
            maskImage: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)`,
            WebkitMaskImage: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)`
          }}
        />
      )}
      
      <div className="container-elegant text-center relative z-10">
        {/* Main Headline */}
        <h1 className="text-hero font-bold text-warm-gray mb-6 tracking-tight">
          Military-Grade<br />Autonomous Drone Solutions
        </h1>
        
        {/* Subheadline with key differentiators */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <div className="inline-block border border-bright-yellow/30 rounded-lg px-6 py-3 backdrop-blur-sm bg-black/20 shadow-[inset_0_1px_0_0_rgba(255,196,0,0.1)]">
            <p className="text-bright-yellow text-caption font-semibold uppercase tracking-wider">
              Made in the USA
            </p>
          </div>
          <div className="inline-block border border-bright-yellow/25 rounded-lg px-6 py-3 backdrop-blur-sm bg-black/10">
            <p className="text-warm-gray text-caption font-medium uppercase tracking-wider">
              DIU Blue Clear List
            </p>
          </div>
          <div className="inline-block border border-bright-yellow/25 rounded-lg px-6 py-3 backdrop-blur-sm bg-black/10">
            <p className="text-warm-gray text-caption font-medium uppercase tracking-wider">
              NDAA Compliant
            </p>
          </div>
        </div>
        
        {/* Supporting Text */}
        <p className="text-body-lg text-mid-gray-light max-w-3xl mx-auto leading-relaxed mb-12">
          Designed for hostile environments. Deployed remotely from anywhere in the world. 
          Trusted by the US Department of Defense and military branches worldwide.
        </p>
        
        {/* CTA */}
        <div className="flex items-center justify-center gap-4">
          <a href="#products">
            <Button variant="primary" size="lg">
              Explore Solutions
            </Button>
          </a>
          <a href="#contact">
            <Button variant="secondary" size="lg">
              Get in Touch
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
