import { motion } from "framer-motion";
import heroImg from "../../assets/hero.png";
import { FaGithub, FaLinkedin, FaInstagram, FaReact, FaAws, FaComments } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";

const Hero = () => {
  const skillTags = [
    { icon: <FaReact size={13} />, label: "React" },
    { icon: <SiTailwindcss size={13} />, label: "Tailwind CSS" },
    { icon: <FaAws size={13} />, label: "AWS" },
    { icon: <MdDesignServices size={13} />, label: "UI/UX Design" },
    { icon: <FaComments size={13} />, label: "Communication" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#060810]"
      style={{ padding: '0 40px' }}
    >
      {/* ── Network / Circuit Background ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Radial dot grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(rgba(6,182,212,0.15) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          opacity: 0.4
        }} />

        {/* Network lines SVG */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.12 }}>
          <defs>
            <radialGradient id="lineGrad" cx="70%" cy="50%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* Network lines - right side */}
          <line x1="55%" y1="20%" x2="75%" y2="35%" stroke="url(#lineGrad)" strokeWidth="1"/>
          <line x1="75%" y1="35%" x2="90%" y2="25%" stroke="url(#lineGrad)" strokeWidth="1"/>
          <line x1="75%" y1="35%" x2="85%" y2="55%" stroke="url(#lineGrad)" strokeWidth="1"/>
          <line x1="85%" y1="55%" x2="95%" y2="45%" stroke="url(#lineGrad)" strokeWidth="1"/>
          <line x1="85%" y1="55%" x2="80%" y2="75%" stroke="url(#lineGrad)" strokeWidth="1"/>
          <line x1="60%" y1="15%" x2="75%" y2="35%" stroke="url(#lineGrad)" strokeWidth="1"/>
          <line x1="90%" y1="65%" x2="85%" y2="55%" stroke="url(#lineGrad)" strokeWidth="1"/>
          <line x1="65%" y1="80%" x2="80%" y2="75%" stroke="url(#lineGrad)" strokeWidth="1"/>
          <line x1="55%" y1="60%" x2="65%" y2="75%" stroke="url(#lineGrad)" strokeWidth="1"/>
          <line x1="55%" y1="60%" x2="75%" y2="35%" stroke="url(#lineGrad)" strokeWidth="0.5"/>
          {/* Node dots */}
          {[
            [75,35],[90,25],[85,55],[95,45],[80,75],[65,80],[55,60],[60,15],[90,65]
          ].map(([cx,cy],i) => (
            <circle key={i} cx={`${cx}%`} cy={`${cy}%`} r="3" fill="#22d3ee" opacity="0.6"/>
          ))}
        </svg>

        {/* Glow blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/5 blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[5%] w-[400px] h-[400px] bg-purple-500/8 blur-[120px]" />
        <div className="absolute top-[20%] right-[25%] w-[300px] h-[300px] bg-cyan-400/5 blur-[100px]" />
      </div>

      {/* ── Main Grid ── */}
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        alignItems: 'center',
        position: 'relative',
        zIndex: 10,
        paddingTop: '80px',
        paddingBottom: '40px'
      }}>

        {/* ── LEFT SIDE ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Hello I'm */}
          <p style={{
            color: '#e5e7eb',
            fontSize: '22px',
            fontWeight: 500,
            marginBottom: '4px',
            letterSpacing: '0.01em'
          }}>
            Hello, I'M
          </p>

          {/* Name */}
          <h1 style={{
            fontSize: 'clamp(48px, 7vw, 80px)',
            fontWeight: 800,
            lineHeight: 1.05,
            marginBottom: '16px',
            letterSpacing: '-0.02em'
          }}>
            <span style={{ color: 'white' }}>Siddique </span>
            <span style={{
              background: 'linear-gradient(90deg, #22d3ee 0%, #818cf8 50%, #c084fc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Khan</span>
          </h1>

          {/* Skills subtitle */}
          <h3 style={{
            color: 'white',
            fontSize: '18px',
            fontWeight: 700,
            marginBottom: '10px'
          }}>
            Siddique's Skills:
          </h3>

          {/* Description */}
          <p style={{
            color: '#9ca3af',
            fontSize: '14px',
            lineHeight: 1.75,
            maxWidth: '480px',
            marginBottom: '28px'
          }}>
            Passionate Frontend Developer and UI/UX Designer focused on
            building modern web applications, responsive user experiences and
            cloud-powered solutions using React, Tailwind CSS 4, AWS, and
            modern development technologies.
          </p>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '14px', marginBottom: '28px', flexWrap: 'wrap' }}>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: '11px 28px',
                borderRadius: '10px',
                background: 'linear-gradient(90deg, #06b6d4, #3b82f6)',
                color: 'white',
                fontWeight: 600,
                fontSize: '14px',
                textDecoration: 'none',
                boxShadow: '0 0 20px rgba(6,182,212,0.4)',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Hire Me
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: '11px 28px',
                borderRadius: '10px',
                background: 'transparent',
                color: '#e5e7eb',
                fontWeight: 600,
                fontSize: '14px',
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.25)',
                cursor: 'pointer'
              }}
            >
              Resume
            </motion.a>
          </div>

          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '16px', marginBottom: '36px' }}>
            {[
              { icon: <FaGithub size={18} />, href: 'https://github.com' },
              { icon: <FaLinkedin size={18} />, href: 'https://linkedin.com' },
              { icon: <FaInstagram size={18} />, href: 'https://instagram.com' },
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2, color: '#22d3ee' }}
                style={{
                  color: '#9ca3af',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'all 0.2s'
                }}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>

          {/* Skill Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {skillTags.map((tag, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -2, borderColor: 'rgba(6,182,212,0.5)' }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '7px',
                  padding: '7px 14px',
                  borderRadius: '999px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: '#d1d5db',
                  fontSize: '12px',
                  fontWeight: 500,
                  cursor: 'default',
                  transition: 'all 0.2s'
                }}
              >
                <span style={{ color: '#22d3ee' }}>{tag.icon}</span>
                {tag.label}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── RIGHT SIDE: Image Frame ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
          }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            style={{ position: 'relative' }}
          >
            {/* Available badge */}
            <div style={{
              position: 'absolute',
              top: '-14px',
              left: '20px',
              zIndex: 20,
              background: 'rgba(10,15,25,0.85)',
              backdropFilter: 'blur(10px)',
              padding: '6px 14px',
              borderRadius: '999px',
              border: '1px solid rgba(6,182,212,0.4)',
              display: 'flex',
              alignItems: 'center',
              gap: '7px'
            }}>
              <span style={{
                width: '8px', height: '8px',
                borderRadius: '50%',
                background: '#22c55e',
                boxShadow: '0 0 8px #22c55e',
                animation: 'pulse 2s infinite'
              }} />
              <span style={{
                color: '#e5e7eb',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.02em'
              }}>
                Available for Internship
              </span>
            </div>

            {/* Outer glow frame */}
            <div style={{
              position: 'absolute',
              inset: '-3px',
              borderRadius: '30px',
              background: 'linear-gradient(135deg, #22d3ee, #3b82f6, #22d3ee)',
              opacity: 0.8,
              filter: 'blur(1px)',
              zIndex: 0
            }} />

            {/* Inner image container */}
            <div style={{
              position: 'relative',
              zIndex: 1,
              background: 'linear-gradient(180deg, #0f1923 0%, #080c14 100%)',
              borderRadius: '28px',
              padding: '8px',
              boxShadow: '0 0 60px rgba(6,182,212,0.3), 0 0 120px rgba(6,182,212,0.15), inset 0 0 30px rgba(6,182,212,0.05)'
            }}>
              <img
                src={heroImg}
                alt="Siddique Khan"
                style={{
                  width: '320px',
                  height: '420px',
                  objectFit: 'cover',
                  objectPosition: 'top',
                  borderRadius: '22px',
                  display: 'block'
                }}
              />
            </div>

            {/* Reflection below */}
            <div style={{
              position: 'absolute',
              bottom: '-40px',
              left: '10%',
              right: '10%',
              height: '40px',
              background: 'radial-gradient(ellipse at center, rgba(6,182,212,0.35) 0%, transparent 70%)',
              filter: 'blur(12px)',
              borderRadius: '50%',
              zIndex: 0
            }} />

            {/* Side glow effects */}
            <div style={{
              position: 'absolute',
              top: '20%',
              left: '-20px',
              width: '3px',
              height: '60%',
              background: 'linear-gradient(180deg, transparent, #22d3ee, transparent)',
              borderRadius: '3px',
              opacity: 0.6
            }} />
            <div style={{
              position: 'absolute',
              top: '20%',
              right: '-20px',
              width: '3px',
              height: '60%',
              background: 'linear-gradient(180deg, transparent, #22d3ee, transparent)',
              borderRadius: '3px',
              opacity: 0.6
            }} />
          </motion.div>
        </motion.div>

      </div>

      {/* Pulse animation */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }
      `}</style>

    </section>
  );
};

export default Hero;