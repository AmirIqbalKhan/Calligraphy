import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark pt-24 pb-12 border-t border-brand-secondary/30 text-brand-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Column 1: Brand & Philosophy */}
          <div className="space-y-6">
            <h3 className="font-script text-4xl text-white">CaligraphyByMaryum</h3>
            <p className="font-sans text-sm text-gray-400 leading-relaxed max-w-xs">
              Blending the sacred discipline of traditional ink with the breathing space of modern minimalism. Creating art that speaks in silence.
            </p>
            <div className="flex space-x-4 pt-2">
              {/* Social Icons */}
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary hover:text-brand-dark transition-all duration-300 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary hover:text-brand-dark transition-all duration-300 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary hover:text-brand-dark transition-all duration-300 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h4 className="font-serif text-xl text-white mb-8">Explore</h4>
            <ul className="space-y-4">
              {['The Collection', 'Bespoke Commissions', 'Artist Philosophy', 'Wedding Suites', 'Journal'].map((item) => (
                <li key={item}>
                  <a href="#" className="font-sans text-xs text-gray-400 uppercase tracking-widest hover:text-brand-primary transition-colors duration-300 flex items-center group">
                    <span className="w-0 h-[1px] bg-brand-primary mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Studio Info */}
          <div>
            <h4 className="font-serif text-xl text-white mb-8">Studio</h4>
            <ul className="space-y-6 font-sans text-sm text-gray-400">
              <li className="flex items-start">
                <span className="text-brand-primary mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </span>
                <span>
                  Based in Lahore, Pakistan.<br />
                  Available for Global Shipping.
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-brand-primary mr-3">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                </span>
                <a href="mailto:hello@maryum.art" className="hover:text-white transition-colors">hello@caligraphybymaryum.com</a>
              </li>
              <li className="flex items-center">
                 <span className="text-brand-primary mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                 </span>
                <span>Mon - Fri: 10am - 6pm PKT</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-serif text-xl text-white mb-6">The Inner Circle</h4>
            <p className="font-sans text-xs text-gray-400 mb-6 leading-relaxed">
              Join our list for exclusive releases, studio insights, and first access to commissioned slots.
            </p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-primary transition-colors font-sans"
                />
              </div>
              <button className="w-full bg-brand-primary text-brand-dark py-3 px-6 font-sans text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 font-sans tracking-widest uppercase">
          <p>© {new Date().getFullYear()} CaligraphyByMaryum. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Shipping & Returns</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;