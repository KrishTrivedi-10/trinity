import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, MessageCircle, Send, Briefcase, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer style={{ background: '#FAF8F5', borderTop: '1px solid var(--border)' }}>

      {/* ── Newsletter Band ── */}
      <div style={{ background: 'var(--maroon)', padding: '4rem 0' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' as const }}
            className="footer-newsletter-grid"
          >
            <div>
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 700 }}>
                Inner Circle
              </span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem, 3vw, 2.75rem)', color: '#FFFFFF', lineHeight: 1.2, marginTop: '1rem', marginBottom: '1rem' }}>
                Join Our <em style={{ color: 'var(--gold)' }}>Inner Circle</em>
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', fontWeight: 300, lineHeight: 1.8 }}>
                Receive exclusive Vedic wisdom, energy alignment tips, and updates on our latest courses directly in your inbox.
              </p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="footer-newsletter-form">
              <input
                type="email"
                placeholder="Your email address"
                style={{
                  flex: 1,
                  minWidth: 0,
                  padding: '1rem 1.5rem',
                  borderRadius: '100px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  background: 'rgba(255,255,255,0.08)',
                  color: '#fff',
                  fontSize: '0.95rem',
                  outline: 'none',
                  width: '100%',
                }}
              />
              <button
                type="submit"
                className="btn-primary"
                style={{
                  padding: '1rem 2rem',
                  borderRadius: '100px',
                  background: 'var(--gold)',
                  color: '#fff',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  border: 'none',
                  cursor: 'pointer',
                  width: 'auto',
                }}
              >
                Subscribe <ArrowRight size={15} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* ── Main Footer Grid ── */}
      <div className="container footer-main-container" style={{ padding: '4rem 0 3rem' }}>
        <div className="footer-main-grid" style={{ paddingBottom: '3rem', borderBottom: '1px solid var(--border)' }}>

          {/* Brand Column */}
          <motion.div className="footer-brand-column" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <Link to="/" style={{ marginBottom: '1.5rem', display: 'inline-flex', textDecoration: 'none' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span className="nav-brand-name" style={{ fontSize: '1.4rem' }}>Trinity Vaastu</span>
                <span className="nav-brand-tagline">Science • Energy • Dharma</span>
              </div>
            </Link>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.85, maxWidth: '280px', fontWeight: 400, marginTop: '1rem' }}>
              Bridging ancient Vedic wisdom with modern scientific precision to create spaces that heal, empower, and transform lives.
            </p>
            <div className="footer-socials" style={{ display: 'flex', gap: '0.75rem', marginTop: '2rem', flexWrap: 'wrap' }}>
              {[Globe, MessageCircle, Send, Briefcase].map((Icon, i) => (
                <a key={i} href="#" style={{ width: '38px', height: '38px', borderRadius: '50%', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', flexShrink: 0 }}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Explore */}
          <motion.div className="footer-link-column" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <h4 style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-main)', fontWeight: 700, marginBottom: '1.5rem' }}>Explore</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {[{ label: 'Our Philosophy', path: '/about' }, { label: 'Services', path: '/services' }, { label: 'Courses', path: '/courses' }, { label: 'Testimonials', path: '/testimonials' }, { label: 'Resources', path: '/blog' }].map(link => (
                <Link key={link.path} to={link.path} style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 400 }}>{link.label}</Link>
              ))}
            </div>
          </motion.div>

          {/* Support */}
          <motion.div className="footer-link-column" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
            <h4 style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-main)', fontWeight: 700, marginBottom: '1.5rem' }}>Support</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {[{ label: 'Contact Us', path: '/contact' }, { label: 'FAQs', path: '/faq' }, { label: 'Privacy Policy', path: '/privacy' }, { label: 'Terms of Service', path: '/terms' }, { label: 'Join our Team', path: '/careers' }].map(link => (
                <Link key={link.path} to={link.path} style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 400 }}>{link.label}</Link>
              ))}
            </div>
          </motion.div>

          {/* Connect */}
          <motion.div className="footer-connect-column" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}>
            <h4 style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-main)', fontWeight: 700, marginBottom: '1.5rem' }}>Connect</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              {[{ Icon: Phone, text: '+91-9999051719' }, { Icon: Mail, text: 'info@trinityvaastu.com' }, { Icon: MapPin, text: 'New Delhi, India' }].map(({ Icon, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(200,150,27,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)', flexShrink: 0 }}>
                    <Icon size={14} />
                  </div>
                  <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom-bar">
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Trinity Vaastu. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {[{ label: 'Privacy', path: '/privacy' }, { label: 'Terms', path: '/terms' }, { label: 'Cookies', path: '/cookies' }].map(link => (
              <Link key={link.path} to={link.path} style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{link.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
