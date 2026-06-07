import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { MessageSquare, User, Mail, MapPin, Settings, Trophy, Rocket, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import profileImg from "../../assets/hero.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  const SERVICE_ID = 'service_nq44k8j';   // ← Paste yours here
  const TEMPLATE_ID = 'template_3ndusfb'; // ← Paste yours here
  const PUBLIC_KEY = 'Lzv7frBppcLhn1I64';   // ← Paste yours here

  const templateParams = {
    name: formData.name,      // → {{name}} in template
    email: formData.email,    // → {{email}} in template
    title: formData.subject,  // → {{title}} in template
    message: formData.message // → {{message}} in template
  };

  toast.promise(
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY),
    {
      loading: 'Sending your message...',
      success: () => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        return 'Message sent successfully! 🎉';
      },
      error: 'Failed to send message. Please try again.',
    }
  ).finally(() => {
    setIsSubmitting(false);
  });
};

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <section
      className="w-full bg-[#0a0f18] text-white font-sans overflow-hidden relative"
      id="contact"
      style={{ paddingTop: '80px', paddingBottom: '60px' }}
    >
      <Toaster position="bottom-right" />

      {/* Background dots */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#06b6d4 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          opacity: 0.07
        }}
      />

      <div className="relative z-10" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

        {/* ── TITLE ── */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 900,
            letterSpacing: '0.2em',
            background: 'linear-gradient(180deg, #ffffff 0%, #94a3b8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: 'none',
            margin: 0
          }}>
            LET'S CONNECT
          </h2>
        </div>

        {/* ── 3 COLUMN MAIN ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
          alignItems: 'stretch',
          marginBottom: '24px'
        }}>

          {/* LEFT: Profile Card */}
          <div style={{
            background: 'linear-gradient(180deg, #3a3f47 0%, #2a2d33 50%, #15171a 100%)',
            padding: '3px',
            borderRadius: '24px',
            boxShadow: '0 25px 50px rgba(0,0,0,0.8)'
          }}>
            <div style={{
              background: '#0d1016',
              borderRadius: '21px',
              padding: '12px',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              {/* Portrait */}
              <div style={{
                position: 'relative',
                borderRadius: '14px',
                overflow: 'hidden',
                minHeight: '340px',
                flex: 1,
                border: '1px solid rgba(6,182,212,0.2)'
              }}>
                <img
                  src={profileImg}
                  alt="Profile"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)'
                }} />
              </div>

              {/* Brushed Metal Social Bar */}
              <div style={{
                background: 'linear-gradient(180deg, #e5e7eb 0%, #f9fafb 40%, #9ca3af 100%)',
                borderRadius: '14px',
                padding: '10px 16px',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                boxShadow: 'inset 0 2px 6px rgba(255,255,255,0.7), inset 0 -2px 4px rgba(0,0,0,0.2), 0 4px 10px rgba(0,0,0,0.5)'
              }}>
                {[
                  { icon: FaGithub, label: 'GITHUB', href: 'https://github.com' },
                  { icon: FaLinkedin, label: 'LINKEDIN', href: 'https://linkedin.com' },
                  { icon: FaInstagram, label: 'INSTAGRAM', href: 'https://instagram.com' }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {i > 0 && <div style={{ width: '1px', height: '28px', background: 'linear-gradient(to bottom, transparent, #9ca3af, transparent)', marginRight: '8px' }} />}
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '4px',
                          color: '#111827',
                          textDecoration: 'none',
                          fontSize: '9px',
                          fontWeight: 700,
                          letterSpacing: '0.1em'
                        }}
                      >
                        <Icon size={18} />
                        <span>{item.label}</span>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CENTER: Form */}
          <div style={{ position: 'relative' }}>
            {/* Glow border */}
            <div style={{
              position: 'absolute',
              inset: '-2px',
              background: 'linear-gradient(135deg, #22d3ee, #a855f7, #22d3ee)',
              borderRadius: '28px',
              opacity: 0.7,
              filter: 'blur(2px)'
            }} />
            <div style={{
              position: 'relative',
              background: '#0a0f18',
              borderRadius: '26px',
              padding: '24px',
              height: '100%',
              border: '1px solid rgba(6,182,212,0.3)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px', height: '100%' }}>

                {/* Name */}
                <div>
                  <label style={{ display: 'block', fontSize: '10px', fontWeight: 700, color: '#9ca3af', letterSpacing: '0.15em', marginBottom: '6px' }}>NAME</label>
                  <input
                    type="text" name="name" value={formData.name} onChange={handleChange} required
                    placeholder="John Doe"
                    style={{
                      width: '100%',
                      background: '#0d131f',
                      border: '1px solid rgba(6,182,212,0.35)',
                      borderRadius: '10px',
                      padding: '9px 16px',
                      color: 'white',
                      fontSize: '13px',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label style={{ display: 'block', fontSize: '10px', fontWeight: 700, color: '#9ca3af', letterSpacing: '0.15em', marginBottom: '6px' }}>EMAIL</label>
                  <input
                    type="email" name="email" value={formData.email} onChange={handleChange} required
                    placeholder="john@example.com"
                    style={{
                      width: '100%',
                      background: '#0d131f',
                      border: '1px solid rgba(168,85,247,0.35)',
                      borderRadius: '10px',
                      padding: '9px 16px',
                      color: 'white',
                      fontSize: '13px',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                {/* Subject */}
                <div>
                  <label style={{ display: 'block', fontSize: '10px', fontWeight: 700, color: '#9ca3af', letterSpacing: '0.15em', marginBottom: '6px' }}>SUBJECT</label>
                  <input
                    type="text" name="subject" value={formData.subject} onChange={handleChange} required
                    placeholder="Project Inquiry"
                    style={{
                      width: '100%',
                      background: '#0d131f',
                      border: '1px solid rgba(6,182,212,0.35)',
                      borderRadius: '10px',
                      padding: '9px 16px',
                      color: 'white',
                      fontSize: '13px',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                {/* Message */}
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', fontSize: '10px', fontWeight: 700, color: '#9ca3af', letterSpacing: '0.15em', marginBottom: '6px' }}>MESSAGE</label>
                  <textarea
                    name="message" value={formData.message} onChange={handleChange} required
                    placeholder="Tell me about your project..."
                    rows={4}
                    style={{
                      width: '100%',
                      background: '#0d131f',
                      border: '1px solid rgba(168,85,247,0.35)',
                      borderRadius: '10px',
                      padding: '9px 16px',
                      color: 'white',
                      fontSize: '13px',
                      outline: 'none',
                      resize: 'none',
                      boxSizing: 'border-box',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>

                {/* Submit Row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', paddingTop: '4px' }}>
                  <a href="https://github.com" target="_blank" rel="noreferrer" style={{ color: '#6b7280' }}>
                    <FaGithub size={22} />
                  </a>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      padding: '10px 36px',
                      borderRadius: '999px',
                      background: 'linear-gradient(90deg, #2dd4bf, #22d3ee, #3b82f6)',
                      color: 'white',
                      fontWeight: 700,
                      fontSize: '13px',
                      letterSpacing: '0.1em',
                      border: 'none',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      opacity: isSubmitting ? 0.5 : 1,
                      boxShadow: '0 0 20px rgba(6,182,212,0.5)'
                    }}
                  >
                    {isSubmitting ? 'Sending...' : 'Submit'}
                  </button>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ color: '#6b7280' }}>
                    <FaInstagram size={22} />
                  </a>
                </div>

              </form>
            </div>
          </div>

          {/* RIGHT: Info Cards */}
          <div style={{
            background: 'linear-gradient(180deg, #3a3f47 0%, #2a2d33 50%, #15171a 100%)',
            padding: '3px',
            borderRadius: '24px',
            boxShadow: '0 25px 50px rgba(0,0,0,0.8)'
          }}>
            <div style={{
              background: '#0d1016',
              borderRadius: '21px',
              padding: '12px',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}>
              {[
                { icon: MessageSquare, title: "Say hello!", text: "Let's talk about development solutions or collaborations", isLink: false },
                { icon: User, title: "Find Me", text: "ksiddiqu449@gmail.com", isLink: true },
                { icon: Mail, title: "Email Address", text: "ksiddiqu449@gmail.com", isLink: true },
                { icon: MapPin, title: "Location", text: "Mumbai, Maharashtra, India", isLink: false }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} style={{
                    background: 'linear-gradient(135deg, #161a20, #0f1217)',
                    borderRadius: '14px',
                    padding: '12px',
                    border: '1px solid #26292e',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    flex: 1
                  }}>
                    <div style={{
                      color: '#e5e7eb',
                      padding: '8px',
                      background: 'linear-gradient(180deg, #2a2d33, #15171a)',
                      borderRadius: '10px',
                      border: '1px solid rgba(107,114,128,0.4)',
                      flexShrink: 0
                    }}>
                      <Icon size={18} />
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <h4 style={{ fontSize: '13px', fontWeight: 700, color: '#f3f4f6', margin: 0 }}>{item.title}</h4>
                      <p style={{
                        fontSize: '11px',
                        marginTop: '3px',
                        color: item.isLink ? '#22d3ee' : '#9ca3af',
                        fontFamily: item.isLink ? 'monospace' : 'inherit',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}>
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* ── BOTTOM COUNTERS ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '16px',
          marginBottom: '24px'
        }}>
          {[
            { icon: Settings, label: "SKILLS LEARNED", count: "10+", desc: "React/node.js full-stack app", spin: true },
            { icon: Trophy, label: "INTERNSHIP", count: "1+", desc: "Cloud systems experience", spin: false },
            { icon: Rocket, label: "DEDICATION", count: "1+", desc: "End-to-end API design & ux", spin: false }
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} style={{
                background: '#0b0f17',
                border: '1px solid rgba(55,65,81,0.8)',
                borderRadius: '14px',
                padding: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '14px'
              }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: '#111622',
                  border: '1px solid #1f2937',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#22d3ee',
                  flexShrink: 0
                }}>
                  <Icon
                    size={20}
                    style={item.spin ? { animation: 'spin 8s linear infinite' } : {}}
                  />
                </div>
                <div>
                  <p style={{ fontSize: '10px', fontWeight: 700, color: '#6b7280', letterSpacing: '0.1em', margin: 0 }}>{item.label}</p>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                    <span style={{ fontSize: '22px', fontWeight: 900, color: 'white' }}>{item.count}</span>
                    <span style={{ fontSize: '10px', color: '#4b5563' }}>{item.desc}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── FOOTER ROW ── */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          paddingTop: '20px',
          borderTop: '1px solid rgba(55,65,81,0.5)',
          fontSize: '11px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <span style={{ fontWeight: 900, color: '#9ca3af', letterSpacing: '0.15em', fontSize: '13px' }}>.DEV</span>
            <a href="#" style={{ color: '#6b7280', textDecoration: 'none', fontWeight: 700, letterSpacing: '0.1em' }}>QUICK LINKS</a>
          </div>
          <a href="#" style={{ color: '#6b7280', textDecoration: 'none', fontWeight: 700, letterSpacing: '0.1em' }}>CONNECT WITH ME</a>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <button
              onClick={scrollToTop}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: '#9ca3af',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 700,
                letterSpacing: '0.1em',
                fontSize: '11px'
              }}
            >
              BACK TO TOP <ArrowRight size={13} />
            </button>
            <span style={{ color: '#374151' }}>© June 2026 Siddique Khan. All rights reserved</span>
          </div>
        </div>

      </div>

      {/* Spin keyframe */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

    </section>
  );
};

export default Contact;