import { motion } from "framer-motion";
import {
  FaRocket,
  FaLaptopCode,
  FaAws,
  FaCode,
  FaGlobe,
  FaBrain,
  FaFolderOpen,
  FaTools,
  FaFire,
  FaCog,
} from "react-icons/fa";

const About = () => {
  const stats = [
    { number: "10+", title: "Projects Completed", icon: <FaFolderOpen /> },
    { number: "15+", title: "Skills Learned", icon: <FaTools /> },
    { number: "1",   title: "Internship",         icon: <FaCog /> },
    { number: "100%",title: "Dedication",          icon: <FaFire /> },
  ];

  const timeline = [
    {
      icon: <FaLaptopCode size={20} />,
      year: "2024 - PRESENT",
      title: "Diploma in Computer Engineering",
      description:
        "Key focus on learning frontend, backend, cloud, UI/UX, and AI concepts.",
    },
    {
      icon: <FaAws size={20} />,
      year: "AWS INTERNSHIP",
      title: "Cloud Computing Journey",
      description:
        "Hands-on experience with EC2, IAM, S3, and Load Balancer.",
    },
    {
      icon: <FaCode size={20} />,
      year: "FRONTEND + DESIGN",
      title: "Modern UI Development",
      description:
        "Building responsive websites and interactive UI systems using Figma.",
    },
  ];

  const bullets = [
    { icon: <FaGlobe className="text-cyan-400" size={13} />, text: "Building modern, responsive websites and premium digital products." },
    { icon: <FaAws className="text-cyan-400" size={13} />,   text: "Leveraging AWS cloud services (EC2, S3, IAM) and frontend technologies." },
    { icon: <FaBrain className="text-purple-400" size={13} />, text: "Applying AI/ML concepts to practical solutions." },
  ];

  return (
    <section
      id="about"
      className="relative py-20 w-full bg-[#080b10] overflow-hidden flex flex-col items-center justify-center min-h-screen"
    >
      {/* Ambient Background */}
      <div className="absolute left-[-5%] top-[10%] w-[500px] h-[500px] bg-cyan-500/5 blur-[150px] pointer-events-none" />
      <div className="absolute right-[-5%] bottom-[10%] w-[500px] h-[500px] bg-purple-500/5 blur-[150px] pointer-events-none" />

      {/* Background code pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none overflow-hidden text-cyan-400 text-xs font-mono leading-6 p-8">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i}>
            {`const developer = { name: "Siddique", skills: ["React", "Node", "AWS"], passion: true };`}
          </div>
        ))}
      </div>

      {/* Header */}
      <div className="text-center mb-10 w-full px-6 relative z-10">
        <p className="text-cyan-400 text-xs font-semibold tracking-[0.3em] uppercase mb-2">
          GET TO KNOW MORE
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          About{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent italic">
            Me
          </span>
        </h2>
      </div>

      {/* Main Container */}
      <div className="w-full max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-5 items-stretch">

          {/* ── LEFT CARD ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[48%] flex flex-col"
            style={{
              background: 'linear-gradient(135deg, rgba(10,20,40,0.95) 0%, rgba(8,12,20,0.98) 100%)',
              border: '1px solid rgba(6,182,212,0.25)',
              borderRadius: '20px',
              padding: '28px',
              boxShadow: '0 0 40px rgba(6,182,212,0.08), inset 0 1px 0 rgba(255,255,255,0.05)',
            }}
          >
            {/* Rocket Icon */}
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, rgba(6,182,212,0.15), rgba(139,92,246,0.15))',
              border: '1px solid rgba(6,182,212,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#22d3ee',
              fontSize: '22px',
              marginBottom: '20px',
              boxShadow: '0 0 20px rgba(6,182,212,0.2)'
            }}>
              <FaRocket />
            </div>

            {/* Title */}
            <h3 style={{
              fontSize: '20px',
              fontWeight: 700,
              color: 'white',
              marginBottom: '10px',
              letterSpacing: '-0.01em'
            }}>
              Siddique Khan: Developer &amp; Designer
            </h3>

            {/* Intro text */}
            <p style={{ color: '#9ca3af', fontSize: '13.5px', lineHeight: 1.6, marginBottom: '14px' }}>
              I am Siddique Khan, a passionate fresher with:
            </p>

            {/* Bullet Points */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
              {bullets.map((b, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{ marginTop: '2px', flexShrink: 0 }}>{b.icon}</span>
                  <p style={{ color: '#d1d5db', fontSize: '13px', lineHeight: 1.6 }}>{b.text}</p>
                </div>
              ))}
            </div>

            {/* Goal text */}
            <p style={{ color: '#9ca3af', fontSize: '13px', lineHeight: 1.7, marginBottom: '24px' }}>
              My goal is to become a highly skilled Full Stack Developer contributing to impactful, real-world products.
            </p>

            {/* Stats Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '10px',
              marginTop: 'auto'
            }}>
              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -2 }}
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '12px',
                    padding: '14px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    cursor: 'default'
                  }}
                >
                  <div style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '8px',
                    background: 'rgba(6,182,212,0.1)',
                    border: '1px solid rgba(6,182,212,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#22d3ee',
                    fontSize: '13px',
                    flexShrink: 0
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{
                      fontSize: '18px',
                      fontWeight: 800,
                      background: 'linear-gradient(90deg, #22d3ee, #a855f7)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      lineHeight: 1.1
                    }}>
                      {item.number}
                    </div>
                    <div style={{ color: '#6b7280', fontSize: '11px', marginTop: '2px' }}>
                      {item.title}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT TIMELINE ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[52%] flex flex-col justify-between gap-4"
          >
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                style={{
                  background: 'linear-gradient(135deg, rgba(10,20,40,0.9) 0%, rgba(8,12,20,0.95) 100%)',
                  border: '1px solid rgba(6,182,212,0.2)',
                  borderRadius: '16px',
                  padding: '20px 24px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '18px',
                  flex: 1,
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
                  cursor: 'default'
                }}
              >
                {/* Left cyan accent line */}
                <div style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: '3px',
                  background: 'linear-gradient(180deg, #22d3ee, #a855f7)',
                  borderRadius: '3px 0 0 3px'
                }} />

                {/* Icon Box */}
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(6,182,212,0.08)',
                  border: '1px solid rgba(6,182,212,0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#22d3ee',
                  flexShrink: 0,
                  boxShadow: '0 0 16px rgba(6,182,212,0.15)'
                }}>
                  {item.icon}
                </div>

                {/* Text Content */}
                <div style={{ flex: 1 }}>
                  <p style={{
                    color: '#22d3ee',
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    marginBottom: '5px'
                  }}>
                    {item.year}
                  </p>
                  <h4 style={{
                    color: 'white',
                    fontSize: '17px',
                    fontWeight: 700,
                    marginBottom: '6px',
                    letterSpacing: '-0.01em'
                  }}>
                    {item.title}
                  </h4>
                  <p style={{
                    color: '#9ca3af',
                    fontSize: '13px',
                    lineHeight: 1.65
                  }}>
                    {item.description}
                  </p>
                </div>

                {/* Subtle glow on hover */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, rgba(6,182,212,0.03), transparent)',
                  borderRadius: '16px',
                  pointerEvents: 'none'
                }} />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>

      
    </section>
  );
};

export default About;