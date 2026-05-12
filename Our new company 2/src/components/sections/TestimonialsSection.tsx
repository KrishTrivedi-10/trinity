import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const testimonials = [
  { text: "Sahil ji's Vaastu consultation transformed our home. Within months, the stagnation in our business dissolved entirely.", name: 'Rajesh Sharma', detail: 'Business Owner · Delhi' },
  { text: "I was skeptical at first, but the precision and logic behind every recommendation was unlike anything I had experienced.", name: 'Priya Mehta', detail: 'Corporate Professional · Mumbai' },
  { text: "The numerology course completely shifted how I make decisions. It's scientific, not superstitious.", name: 'Anil Gupta', detail: 'Student · Jammu' },
];

const revealUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut' as const } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

export default function TestimonialsSection() {
  return (
    <section className="section" style={{ background: 'var(--cream)', position: 'relative', overflow: 'hidden' }}>
      {/* Bg ornament */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(200,150,27,0.06) 0%, transparent 60%)' }} />

      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '6rem', alignItems: 'center' }}>

          <motion.div variants={revealUp}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
              <span className="label">The Mentor</span>
              <span className="gold-rule" />
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 3.5vw, 3.75rem)', lineHeight: 1.15, marginBottom: '2rem' }}>
              Meet <em>Saarthi<br />Sahil Jain</em>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: 300, lineHeight: 1.9, marginBottom: '1.5rem' }}>
              Beginning his journey at 15 through practical astrology, Sahil ji spent decades studying the invisible forces that shape human outcomes — money, health, relationships, and purpose.
            </p>
            <div style={{ borderLeft: '2px solid var(--gold)', paddingLeft: '1.5rem', margin: '2rem 0' }}>
              <p style={{ fontFamily: 'var(--font-accent)', fontSize: '1.35rem', color: 'var(--green)', fontStyle: 'italic', lineHeight: 1.7 }}>
                "A true Saarthi shows direction — not dependence."
              </p>
            </div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
              {['Spaces influence people differently', 'Energy strength defines outcomes', 'Generic remedies do not work'].map(pt => (
                <li key={pt} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.9rem', color: 'var(--text-body)' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--maroon)', flexShrink: 0 }} />
                  {pt}
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn-secondary">Know the Mentor</Link>
          </motion.div>

          <motion.div variants={revealUp}>
            {/* Testimonials inline */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {testimonials.map((t, i) => (
                <motion.div key={i} className="testimonial-card"
                  initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.6 }} viewport={{ once: true }}>
                  <p className="testimonial-text">{t.text}</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar" />
                    <div>
                      <div className="testimonial-name">{t.name}</div>
                      <div className="testimonial-detail">{t.detail}</div>
                    </div>
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
