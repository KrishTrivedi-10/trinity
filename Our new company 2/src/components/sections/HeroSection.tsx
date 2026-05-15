import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, BookOpen, Compass, Gem, HeartPulse } from 'lucide-react';

const pillars = [
  { title: 'Education', icon: BookOpen, desc: 'Master the sacred science of Vaastu.' },
  { title: 'Guidance', icon: Compass, desc: 'Personal consultations for energy alignment.' },
  { title: 'Transformation', icon: HeartPulse, desc: 'Holistic healing for inner clarity.' },
  { title: 'Solutions', icon: Gem, desc: 'Sacred tools to correct imbalances.' },
];

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="orb orb-gold" />
      <div className="orb orb-maroon" />

      <div className="container">
        <div className="hero-grid">
          
          <div className="hero-left">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#fff', padding: '0.6rem 1.2rem', borderRadius: '100px', fontSize: '0.75rem', marginBottom: '2rem', border: '1px solid var(--border)' }}>
              <Sparkles size={14} /> Sacred Sciences & Vaastu
            </div>
            <h1 className="hero-title">
              Align Your Space.<br />
              <em>Awaken Your Destiny.</em>
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#4A4A4A', marginBottom: '2.5rem', maxWidth: '500px' }}>
              Experience the profound intersection of ancient Vedic wisdom and modern living.
            </p>
            <Link to="/courses" className="btn-primary">
              Explore Courses <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </Link>
          </div>

          <div className="hero-right">
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="glass-panel"
            >
              <div className="pillars-grid">
                {pillars.map((p, i) => (
                  <div key={i} className="pillar-card-hero">
                    <div className="icon-box-hero"><p.icon size={20} /></div>
                    <div>
                      <h4>{p.title}</h4>
                      <p>{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}