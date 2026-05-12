import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const revealUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut' as const } },
};
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

const quotes = [
  "A true Saarthi shows direction — not dependence.",
  "Structure is not just four walls. It is the structure of your mind.",
  "Every challenge has an energetic root. Diagnosis is the first step to healing.",
  "Vaastu does not create destiny. It clears the path for your true potential to manifest.",
  "Numbers in your birth date are not random. They are the mathematics of your soul's journey.",
  "When the Brahmasthan breathes, the entire house thrives.",
  "Healing is not about adding energy. It's about removing blockages so natural energy can flow.",
  "We don't just teach occult sciences. We teach the logic behind the universe.",
];

export default function Quotes() {
  return (
    <div className="page-wrapper" style={{ background: '#FFFFFF' }}>
      {/* ── HERO ── */}
      <section style={{ background: 'var(--cream)', paddingTop: '10rem', paddingBottom: '7rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(200,150,27,0.05) 0%, transparent 60%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={revealUp} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
              <span className="label" style={{ color: 'var(--gold)' }}>WISDOM</span>
              <span className="gold-line" />
            </motion.div>
            <motion.h1 variants={revealUp} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem,6vw,4.5rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Words of <em style={{ color: 'var(--maroon)' }}>Wisdom</em>
            </motion.h1>
            <motion.p variants={revealUp} style={{ color: 'var(--text-muted)', fontSize: '1.1rem', fontWeight: 300, lineHeight: 1.9 }}>
              Reflections, insights, and core teachings from Saarthi Sahil Jain.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── QUOTES GRID ── */}
      <section className="section">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '3rem' }}>
            {quotes.map((q, i) => (
              <motion.div key={i} variants={revealUp}
                style={{ background: 'var(--cream)', padding: '4rem', borderRadius: '2rem', border: '1px solid var(--border)', position: 'relative' }}>
                <Quote size={40} style={{ color: 'var(--gold)', opacity: 0.2, position: 'absolute', top: '2rem', left: '2rem' }} />
                <p style={{ fontFamily: 'var(--font-accent)', fontSize: '1.75rem', color: 'var(--text-main)', fontStyle: 'italic', lineHeight: 1.6, marginTop: '1rem', position: 'relative', zIndex: 1 }}>
                  "{q}"
                </p>
                <div style={{ marginTop: '2rem', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 700 }}>
                  — Saarthi Sahil Jain
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
