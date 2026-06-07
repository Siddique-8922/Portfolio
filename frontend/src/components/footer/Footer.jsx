import { motion } from 'framer-motion';
import { Mail, ArrowUp } from 'lucide-react';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0a0c10] pt-16 pb-8 border-t border-gray-800/40 overflow-hidden z-10">
      {/* Subtle Radial Bottom Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-cyan-500/5 blur-[80px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand & Bio */}
          <div className="space-y-4">
            <h3 className="orbitron text-xl font-bold tracking-wider text-white">
              SIDDIQUE
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                .DEV
              </span>
            </h3>
            <p className="text-gray-400 max-w-xs text-sm leading-relaxed">
              Building premium digital experiences with modern web technologies, scalable cloud architecture, and intuitive design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item} className="flex items-center">
                  <a 
                    href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center"
                  >
                    <span className="text-cyan-500/50 text-xs mr-2 font-mono select-none">//</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">Connect With Me</h4>
            <div className="flex gap-3 mb-6">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-xl border border-gray-800 bg-gray-900/30 backdrop-blur-md flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                <FiGithub size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-xl border border-gray-800 bg-gray-900/30 backdrop-blur-md flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                <FiLinkedin size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-xl border border-gray-800 bg-gray-900/30 backdrop-blur-md flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                <FiInstagram size={18} />
              </a>
              <a 
                href="mailto:ksiddiq449@gmail.com" 
                className="w-10 h-10 rounded-xl border border-gray-800 bg-gray-900/30 backdrop-blur-md flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs tracking-wide">
            © {currentYear} Siddique Khan. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-gray-400 hover:text-white transition-colors group"
          >
            Back to top 
            <span className="w-8 h-8 rounded-xl border border-gray-800 bg-gray-900/30 backdrop-blur-md flex items-center justify-center group-hover:border-cyan-500/30 group-hover:text-cyan-400 transition-all duration-300">
              <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;