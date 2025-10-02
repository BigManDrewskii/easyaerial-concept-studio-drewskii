import { useState } from 'react';

export default function FeaturedProduct() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const specs = [
    {
      title: 'Processor',
      value: 'Qualcomm SM7325 Snapdragon 778G'
    },
    {
      title: 'Encryption',
      value: 'AES256 with FIPS 140-2 compatibility'
    },
    {
      title: 'Wireless Link',
      value: '1W, 2x2 MIMO with LDPC'
    },
    {
      title: 'Certification',
      value: 'DIU Blue List Certified'
    }
  ];
  
  return (
    <div className="py-16 px-6 pb-0 border-t border-charcoal" id="products">
      <div className="container-elegant">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block border border-bright-yellow/30 rounded-lg px-5 py-2.5 backdrop-blur-sm bg-black/20 shadow-[inset_0_1px_0_0_rgba(255,196,0,0.1)] mb-6">
            <span className="text-bright-yellow text-caption font-semibold tracking-wider uppercase">Featured Product</span>
          </div>
          <h2 className="text-h2 font-bold text-warm-gray mb-4 tracking-tight">
            Easy Aerial Remote Handheld Control Station
          </h2>
        </div>
        
        {/* Product Layout */}
        <div className="space-y-12">
          {/* Product Image - Full Width on Top */}
          <div 
            className="max-w-2xl mx-auto relative"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Original image */}
            <img 
              src="/Airboss.png" 
              alt="Easy Aerial Remote Handheld Control Station"
              className="w-full h-auto object-contain block"
            />
            
            {/* Technical overlay with spotlight effect on hover */}
            {isHovering && (
              <img
                src="/Airboss-Technical.png"
                alt="Easy Aerial Remote Handheld Control Station - Technical Drawing"
                className="absolute top-0 left-0 w-full h-full object-contain pointer-events-none transition-opacity duration-700"
                style={{
                  opacity: 0.8,
                  maskImage: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)`,
                  WebkitMaskImage: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)`
                }}
              />
            )}
          </div>
          
          {/* Two Column Layout Below Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Description Paragraphs */}
            <div>
              <p className="text-body text-warm-gray leading-relaxed mb-6">
                A tough, all-weather, handheld ground station that utilizes an industrial-grade tablet, powered by a Qualcomm SM7325 Snapdragon 778G processor. Easy Aerial's Handheld Controller embodies a decade of operational experience, in both defense and commercial, extreme operational use cases.
              </p>
              
              <p className="text-body text-warm-gray leading-relaxed">
                Datalink is reliable and secure with AES256 encryption and FIPS 140-2 compatibility. It also features an adjustable 1W, 2x2 MIMO with Low-Density Parity Check (LDPC) wireless RF link.
              </p>
            </div>
            
            {/* Right Column - Certification and Specs */}
            <div>
              <div className="border-2 border-deep-yellow rounded-lg p-4 mb-8 bg-near-black">
                <p className="text-deep-yellow font-semibold text-center text-body-sm">
                  Easy Aerial's Handheld Controller is DIU Blue List Certified
                </p>
              </div>
              
              {/* Technical Specs - Refined with frosted glass effect */}
              <div className="space-y-3">
                {specs.map((spec) => (
                  <div 
                    key={spec.title}
                    className="relative overflow-hidden flex justify-between items-center border border-warm-gray/20 rounded-xl p-4 transition-all duration-300 hover:border-bright-yellow/40 hover:shadow-lg group"
                    style={{
                      backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)',
                      backgroundSize: '7px 7px',
                      backgroundImage: 'repeating-linear-gradient(45deg, rgba(85, 85, 85, 0.15) 0, rgba(85, 85, 85, 0.15) 0.7px, transparent 0, transparent 50%)',
                      backgroundColor: 'rgba(0, 0, 0, 0.6)'
                    }}
                  >
                    {/* Subtle yellow glow from bottom on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-bright-yellow/0 via-transparent to-transparent opacity-0 group-hover:from-bright-yellow/10 group-hover:opacity-100 transition-all duration-700 pointer-events-none rounded-xl" />
                    <span className="relative z-10 text-mid-gray font-medium text-body-sm group-hover:text-warm-gray transition-colors duration-700">{spec.title}</span>
                    <span className="relative z-10 text-warm-gray font-semibold text-caption text-right group-hover:text-bright-yellow transition-colors duration-700">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
