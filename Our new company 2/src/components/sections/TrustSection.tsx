import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const whyPoints = [
  { title: 'Scientific Approach', desc: 'Every remedy is grounded in logic, not myth. We explain the why behind every recommendation.' },
  { title: 'Customized Solutions', desc: 'No two people are the same. Every consultation is uniquely tailored to your space, birth data, and life goal.' },
  { title: 'Ethical Mentorship', desc: 'We create direction, not dependence. Our goal is to give you knowledge that lasts a lifetime.' },
  { title: 'Ancient Meets Modern', desc: 'Deep roots in Vedic sciences, presented with the clarity and precision of modern consulting.' },
];

const revealUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut' as const } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

export default function TrustSection() {
  return (
    <section className="section trust-section" style={{ background: 'var(--cream-dark)' }}>
      <div className="container">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          className="trust-grid"
        >
          {/* Left sticky heading */}
          <motion.div variants={revealUp} className="trust-left">
            <div className="section-eyebrow" style={{ alignItems: 'flex-start' }}>
              <span className="label">The Difference</span>
              <span className="gold-rule" style={{ marginLeft: 0 }} />
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 3.75rem)', lineHeight: 1.15, marginBottom: '1.75rem', marginTop: '1.5rem' }}>
              Why Choose <em>Trinity</em>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: 300, lineHeight: 1.9, marginBottom: '2.5rem' }}>
              The distinction between generic advice and true life consulting. We don't guess — we diagnose.
            </p>
            <Link to="/consultation" className="btn-primary">Start Your Journey</Link>
          </motion.div>

          {/* Right reason list */}
          <motion.div variants={stagger}>
            <div style={{ borderTop: '1px solid var(--border)' }}>
              {whyPoints.map((pt, i) => (
                <motion.div key={pt.title} className="why-item" variants={revealUp}
                  whileHover={{ paddingLeft: '1rem' }} transition={{ duration: 0.3 }}>
                  <span className="why-num">{String(i + 1).padStart(2, '0')}</span>
                  <div className="why-body">
                    <h4>{pt.title}</h4>
                    <p>{pt.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}