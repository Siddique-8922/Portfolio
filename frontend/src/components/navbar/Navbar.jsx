import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Nav links data
  const navLinks = ["About", "Skills", "Projects", "Experience", "Contact"];

  // Add blur and border when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#060810]/80 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-4"
          : "bg-transparent py-6"
      }`}
      style={{ paddingLeft: '40px', paddingRight: '40px' }}
    >
      <div className="max-w-[1280px] mx-auto flex justify-between items-center w-full">
        
        {/* ── LOGO ── */}
        <a href="#home" className="text-2xl font-black tracking-widest cursor-pointer group">
          <span className="text-white transition-colors duration-300 group-hover:text-gray-200">
            SIDDIQUE
          </span>
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
            .DEV
          </span>
        </a>

        {/* ── DESKTOP LINKS ── */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase()}`}
              className="group relative flex items-center text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300"
            >
              <span className="text-cyan-500 mr-1.5 opacity-70 group-hover:opacity-100 transition-opacity">
                //
              </span>
              {link}
              
              {/* Underline hover effect */}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_#22d3ee]"></span>
            </a>
          ))}
        </div>

        {/* ── MOBILE MENU TOGGLE ── */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-300 hover:text-cyan-400 transition-colors"
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* ── MOBILE MENU DROPDOWN ── */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-[#0a0f1c] border-b border-white/10 shadow-xl"
        >
          <div className="flex flex-col px-10 py-6 gap-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-cyan-400 text-lg font-medium tracking-wide flex items-center"
              >
                <span className="text-cyan-500 mr-3">//</span>
                {link}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;