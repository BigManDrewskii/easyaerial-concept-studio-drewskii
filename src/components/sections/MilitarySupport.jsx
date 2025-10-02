export default function MilitarySupport() {
  const branches = [
    { name: 'Department of Defense', logo: '/United_States_Department_of_Defense_Logo_(2021)_Icon_Dark_Simple 1.svg', scale: 'scale-125' },
    { name: 'United States Army', logo: '/Logo_of_the_United_States_Army.svg' },
    { name: 'United States Navy', logo: '/Emblem_of_the_United_States_Navy.svg' },
    { name: 'United States Air Force', logo: '/Mark_of_the_United_States_Air_Force.svg' },
    { name: 'Special Operations Command', logo: '/United_States_Special_Operations_Command_Insignia.svg' },
    { name: 'Defense Threat Reduction Agency', logo: '/US-DefenseThreatReductionAgency-Seal.svg' }
  ];
  
  return (
    <section className="py-16 px-6 bg-black border-t border-charcoal">
      <div className="container-elegant">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-h2 font-bold text-warm-gray mb-6 tracking-tight">
            Trusted by the US Military
          </h2>
          <p className="text-body text-mid-gray-light max-w-2xl mx-auto">
            Easy Aerial has delivered hundreds of systems for global defense and commercial use.
          </p>
        </div>
        
        {/* Military Branch Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-16">
          {branches.map((branch) => (
            <div 
              key={branch.logo}
              className="relative flex flex-col items-center justify-center cursor-pointer group"
            >
              <div className="aspect-square p-4 transition-all duration-700 group-hover:scale-110">
                <img 
                  src={branch.logo} 
                  alt={branch.name}
                  className={`w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-all duration-700 filter grayscale group-hover:grayscale-0 ${branch.scale || ''}`}
                />
              </div>
              {/* Hover Label - appears below logo */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none">
                <span className="bg-warm-gray text-black text-xs font-medium px-3 py-1.5 rounded-md shadow-xl whitespace-nowrap">
                  {branch.name}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Supporting Stats - Refined with frosted glass effect */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div 
            className="relative overflow-hidden text-center border border-warm-gray/20 rounded-xl p-8 transition-all duration-300 hover:border-bright-yellow/40 hover:shadow-xl group"
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
            <div className="relative z-10">
              <div className="text-5xl font-bold text-bright-yellow mb-2 group-hover:scale-105 transition-transform duration-300">100+</div>
              <p className="text-mid-gray text-body-sm">Systems Delivered</p>
            </div>
          </div>
          <div 
            className="relative overflow-hidden text-center border border-warm-gray/20 rounded-xl p-8 transition-all duration-300 hover:border-bright-yellow/40 hover:shadow-xl group"
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
            <div className="relative z-10">
              <div className="text-5xl font-bold text-bright-yellow mb-2 group-hover:scale-105 transition-transform duration-300">24/7</div>
              <p className="text-mid-gray text-body-sm">Remote Operations</p>
            </div>
          </div>
          <div 
            className="relative overflow-hidden text-center border border-warm-gray/20 rounded-xl p-8 transition-all duration-300 hover:border-bright-yellow/40 hover:shadow-xl group"
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
            <div className="relative z-10">
              <div className="text-5xl font-bold text-bright-yellow mb-2 group-hover:scale-105 transition-transform duration-300">100%</div>
              <p className="text-mid-gray text-body-sm">NDAA Compliant</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
