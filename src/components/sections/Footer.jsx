export default function Footer() {
  return (
    <footer className="pt-94 pb-0 px-6" id="contact">
      <div className="container-elegant">
        {/* Elevated footer container - with transparent blend */}
        <div 
          className="group relative rounded-t-2xl border border-b-0 border-warm-gray/20 overflow-hidden p-8 md:p-12 hover:border-bright-yellow/40 transition-all duration-300"
          style={{
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            backgroundSize: '7px 7px',
            backgroundImage: 'repeating-linear-gradient(45deg, rgba(85, 85, 85, 0.15) 0, rgba(85, 85, 85, 0.15) 0.7px, transparent 0, transparent 50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          }}
        >
          {/* Subtle yellow glow from bottom on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-bright-yellow/0 via-transparent to-transparent opacity-0 group-hover:from-bright-yellow/10 group-hover:opacity-100 transition-all duration-700 pointer-events-none rounded-t-2xl" />
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="mb-6 group">
                <span className="text-warm-gray font-semibold text-2xl tracking-tight transition-colors duration-300 group-hover:text-bright-yellow cursor-pointer">
                  Easy Aerial
                </span>
              </div>
              <p className="text-mid-gray text-body-sm leading-relaxed">
                Military-grade autonomous Drone-in-a-Box solutions. Proudly made in the USA.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-warm-gray font-semibold mb-6 text-body">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="#products" 
                    className="text-mid-gray hover:text-bright-yellow transition-all duration-700 text-body-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-mid-gray group-hover:bg-bright-yellow transition-colors duration-700"></span>
                    Products
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="text-mid-gray hover:text-bright-yellow transition-all duration-700 text-body-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-mid-gray group-hover:bg-bright-yellow transition-colors duration-700"></span>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Certifications */}
            <div>
              <h4 className="text-warm-gray font-semibold mb-6 text-body">Certifications</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-body-sm text-mid-gray">
                  <span className="w-1.5 h-1.5 rounded-full bg-bright-yellow"></span>
                  NDAA Compliant
                </li>
                <li className="flex items-center gap-2 text-body-sm text-mid-gray">
                  <span className="w-1.5 h-1.5 rounded-full bg-bright-yellow"></span>
                  ISO9001 Certified
                </li>
                <li className="flex items-center gap-2 text-body-sm text-mid-gray">
                  <span className="w-1.5 h-1.5 rounded-full bg-bright-yellow"></span>
                  AS9100 Certified
                </li>
                <li className="flex items-center gap-2 text-body-sm text-mid-gray">
                  <span className="w-1.5 h-1.5 rounded-full bg-bright-yellow"></span>
                  DIU Blue Clear List
                </li>
              </ul>
            </div>
          </div>
          
          {/* Copyright inside footer */}
          <div className="relative z-10 pt-8 border-t border-warm-gray/10 text-center">
            <p className="text-mid-gray text-caption">
              © {new Date().getFullYear()} Easy Aerial. All rights reserved. Made in the USA.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
