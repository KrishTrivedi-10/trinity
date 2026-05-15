import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const revealUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut' as const } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

export default function AboutSection() {
  return (
    <section className="section about-section" style={{ background: '#FFFFFF', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          className="about-grid"
        >
          {/* Visual Column */}
          <motion.div variants={revealUp} className="about-visual">
            <div className="about-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
                alt="Vaastu Space"
                className="about-img"
              />
              <div className="about-img-border" />
              <div className="about-floating-tag">
                <span className="label" style={{ fontSize: '0.65rem' }}>Pure Geometry</span>
                <div style={{ width: '48px', height: '1px', background: 'var(--gold)', marginTop: '0.5rem' }} />
              </div>
            </div>
            <div className="about-badge">
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', lineHeight: 1, fontWeight: 600 }}>15+</div>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.8, marginTop: '0.25rem' }}>Years of Mastery</div>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div variants={revealUp} style={{ paddingTop: '1rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
              <span className="label">Our Sanctuary</span>
              <span className="gold-rule" />
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 3.75rem)', marginBottom: '1.75rem', lineHeight: 1.15 }}>
              Ancient Wisdom <br />Rebuilt for <em>Modern Lives</em>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.9, marginBottom: '1.5rem' }}>
              Trinity Vaastu brings structure, logic and precision into ancient sciences. Every solution is customized—because every person, space and life path is unique.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: 300, lineHeight: 1.9, marginBottom: '2.5rem' }}>
              We don't believe in generic remedies or blind faith. Every recommendation is backed by principle, tested through experience, and refined over decades of dedicated practice.
            </p>
            <Link to="/about" className="btn-ghost">
              Know Our Story <ArrowRight size={14} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}