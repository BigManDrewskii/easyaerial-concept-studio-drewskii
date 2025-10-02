export default function TrustSignals() {
  const certifications = [
    {
      name: 'NDAA Compliant',
      description: 'All products meet National Defense Authorization Act requirements',
      logo: '/logos/NDAA_logo_HQ.png'
    },
    {
      name: 'ISO9001 & AS9100',
      description: 'Quality management systems certified for aerospace standards',
      logo: '/logos/ISO_certificate.png'
    },
    {
      name: 'DIU Blue Clear List',
      description: 'Approved by Defense Innovation Unit for trusted defense solutions',
      logo: '/logos/BlueUAS-logo.png'
    }
  ];
  
  return (
    <section className="py-16 px-6 bg-black border-t border-charcoal">
      <div className="container-elegant">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-h2 font-bold text-warm-gray mb-6 tracking-tight">
            Certified Excellence
          </h2>
          <p className="text-body text-mid-gray-light max-w-3xl mx-auto">
            Easy Aerial maintains the highest standards of quality, security, and compliance for defense and commercial applications.
          </p>
        </div>
        
        {/* Certification Cards with Logos - Refined with frosted glass effect */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert) => (
            <div 
              key={cert.name}
              className="relative overflow-hidden border border-warm-gray/20 rounded-xl p-8 text-center transition-all duration-300 hover:border-bright-yellow/40 hover:shadow-xl flex flex-col items-center group"
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
              
              <div className="relative z-10 flex flex-col items-center">
                {/* Logo */}
                <div className="h-24 w-full flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-700">
                  <img 
                    src={cert.logo} 
                    alt={cert.name}
                    className="max-h-full max-w-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                  />
                </div>
                
                {/* Title */}
                <div className="text-warm-gray font-semibold text-lg mb-3 group-hover:text-bright-yellow transition-colors duration-700">{cert.name}</div>
                
                {/* Description */}
                <div className="text-mid-gray text-caption leading-relaxed">{cert.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
