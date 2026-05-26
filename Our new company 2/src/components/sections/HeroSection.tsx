import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, BookOpen, Compass, Gem } from 'lucide-react';

const pillars = [
  { title: 'Education', icon: BookOpen, desc: 'Learn the sacred science with structured courses and practical wisdom.' },
  { title: 'Guidance', icon: Compass, desc: 'Receive personal direction for your space, energy, and life decisions.' },
  { title: 'Solution', icon: Gem, desc: 'Apply precise remedies and tools to restore balance with intention.' },
];

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-backdrop" />
      <div className="hero-veil" />

      <div className="container">
        <div className="hero-grid">
          
          <div className="hero-left">
            <div className="hero-kicker">
              <Sparkles size={14} /> Sacred Sciences & Vaastu
            </div>
            <h1 className="hero-title">
              Design Your Space.<br />
              <em>Direct Your Life.</em>
            </h1>
            <p className="hero-copy">
              A refined path through Vaastu, astrology, numerology and energy alignment for homes, businesses and personal clarity.
            </p>
            <div className="hero-actions">
              <Link to="/courses" className="btn-primary">
                Explore Education <ArrowRight size={18} />
              </Link>
              <Link to="/consultation" className="btn-secondary">
                Book Guidance
              </Link>
            </div>
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
                    <span className="pillar-index">{String(i + 1).padStart(2, '0')}</span>
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
