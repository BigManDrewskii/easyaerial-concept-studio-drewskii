export default function Mission() {
  return (
    <section className="py-16 px-6 bg-black border-t border-charcoal">
      <div className="container-elegant">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-h2 font-bold text-warm-gray mb-6 tracking-tight">
            Above and Beyond
          </h2>
          
          {/* Refined Mission Statement - Compact with subtle border accent */}
          <div className="max-w-4xl mx-auto border-l-2 border-bright-yellow/30 pl-6 mb-16">
            <p className="text-body text-warm-gray/90 leading-relaxed text-left">
              Military-grade autonomous Drone-in-a-Box solutions designed to meet security needs both on the move and on the ground. Founded and developed by former military personnel and aerospace, robotics, and software engineers, with the support of the US Air Force and proudly built in the US, Easy Aerial's free flight and tethered UAVs are designed to go above and beyond in even the most hostile environments. All Easy Aerial solutions can be automatically deployed and commanded remotely from any location around the world. The result: a versatile eye in the sky offering{' '}
              <span className="text-bright-yellow font-semibold">unparalleled protection and situational awareness</span>.
            </p>
          </div>
        </div>
        
        {/* Key Features Grid - Refined with frosted glass effect */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              <h4 className="text-warm-gray font-semibold text-h5 mb-2 group-hover:text-bright-yellow transition-colors duration-300">Military-Grade</h4>
              <p className="text-mid-gray text-body-sm">Built for hostile environments</p>
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
              <h4 className="text-warm-gray font-semibold text-h5 mb-2 group-hover:text-bright-yellow transition-colors duration-300">Remote Command</h4>
              <p className="text-mid-gray text-body-sm">Deploy from anywhere globally</p>
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
              <h4 className="text-warm-gray font-semibold text-h5 mb-2 group-hover:text-bright-yellow transition-colors duration-300">Situational Awareness</h4>
              <p className="text-mid-gray text-body-sm">Versatile eye in the sky</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
