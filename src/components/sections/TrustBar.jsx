export default function TrustBar() {
  const certifications = [
    { name: 'Blue UAS', logo: '/logos/BlueUAS-logo.png' },
    { name: 'ISO Certificate', logo: '/logos/ISO_certificate.png' },
    { name: 'NDAA Compliant', logo: '/logos/NDAA_logo_HQ.png' }
  ];
  
  return (
    <section className="py-12 px-6 bg-black border-y border-charcoal">
      <div className="container-elegant">
        <div className="flex flex-wrap items-center justify-center gap-12">
          <div className="text-mid-gray text-body-sm font-medium uppercase tracking-wider">
            Certified & Trusted
          </div>
          
          {certifications.map((cert, index) => (
            <div key={index} className="flex items-center justify-center h-16">
              <img 
                src={cert.logo} 
                alt={cert.name}
                className="h-full w-auto object-contain opacity-80 hover:opacity-100 transition-smooth"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
