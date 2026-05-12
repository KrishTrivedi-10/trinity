import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const revealUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut' as const } },
};
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

const videos = [
  { id: '1', title: 'The Science of Directions in Vaastu', category: 'Vaastu Basics', duration: '12:45', thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop' },
  { id: '2', title: 'Why Generic Remedies Fail', category: 'Case Studies', duration: '18:20', thumbnail: 'https://images.unsplash.com/photo-1574621100236-d25b64cbc2fb?q=80&w=1200&auto=format&fit=crop' },
  { id: '3', title: 'Astrology and Space: The Missing Link', category: 'Astro-Vaastu', duration: '24:10', thumbnail: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1200&auto=format&fit=crop' },
  { id: '4', title: 'Understanding Geopathic Stress', category: 'Advanced Vaastu', duration: '15:30', thumbnail: 'https://images.unsplash.com/photo-1444491741275-3747c53c99b4?q=80&w=1200&auto=format&fit=crop' },
  { id: '5', title: 'Numerology for Business Growth', category: 'Numerology', duration: '21:05', thumbnail: 'https://images.unsplash.com/photo-1554774853-719586f82d77?q=80&w=1200&auto=format&fit=crop' },
  { id: '6', title: '3rd Eye Activation Techniques', category: 'Sadhana', duration: '30:00', thumbnail: 'https://images.unsplash.com/photo-1528319725582-ddc096101511?q=80&w=1200&auto=format&fit=crop' },
];

export default function Videos() {
  return (
    <div className="page-wrapper" style={{ background: '#FFFFFF' }}>

      {/* ── HERO ── */}
      <section style={{ background: 'var(--cream)', paddingTop: '10rem', paddingBottom: '7rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(139,26,26,0.04) 0%, transparent 60%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={revealUp} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
              <span className="label" style={{ color: 'var(--gold)' }}>LEARN VISUALLY</span>
              <span className="gold-line" />
            </motion.div>
            <motion.h1 variants={revealUp} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem,6vw,4.5rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Video <em style={{ color: 'var(--maroon)' }}>Library</em>
            </motion.h1>
            <motion.p variants={revealUp} style={{ color: 'var(--text-muted)', fontSize: '1.1rem', fontWeight: 300, lineHeight: 1.9 }}>
              Deepen your understanding of occult sciences with structured video lessons, case studies, and guided practices by Saarthi Sahil Jain.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── VIDEO GRID ── */}
      <section className="section">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2.5rem' }}>
            {videos.map(v => (
              <motion.div key={v.id} variants={revealUp} style={{ cursor: 'pointer', group: 'true' }}>
                <div style={{ position: 'relative', borderRadius: '1.5rem', overflow: 'hidden', aspectRatio: '16/9', marginBottom: '1.25rem', border: '1px solid var(--border)' }}>
                  <img src={v.thumbnail} alt={v.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,10,10,0.3)', transition: 'background 0.3s ease' }} />
                  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', border: '1px solid rgba(255,255,255,0.4)', transition: 'all 0.3s ease' }}>
                    <Play size={24} fill="currentColor" style={{ marginLeft: '4px' }} />
                  </div>
                  <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', background: 'rgba(10,5,5,0.8)', color: '#fff', fontSize: '0.75rem', padding: '0.3rem 0.6rem', borderRadius: '0.4rem', fontWeight: 600 }}>
                    {v.duration}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 700 }}>{v.category}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--text-main)', lineHeight: 1.4 }}>{v.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-band">
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,4vw,3rem)', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
              Want the Full <em style={{ color: 'var(--gold)' }}>Experience?</em>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: 300, marginBottom: '2.5rem' }}>Join our structured courses for comprehensive video modules and live doubt clearing.</p>
            <Link to="/courses" className="btn-primary">Explore Courses <ArrowRight size={14} /></Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
