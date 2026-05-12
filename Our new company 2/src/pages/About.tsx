import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, BookOpen, Compass, Sparkles } from 'lucide-react';

const revealUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut' as const } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.13 } },
};

const milestones = [
  { year: '1995', title: 'The Spark', desc: 'At age 15, Sahil Jain began studying astrology through real case studies — observation first, theory later.' },
  { year: '2005', title: 'The Realization', desc: 'Years of research revealed that Vaastu impacts people differently based on inner energy, not space alone.' },
  { year: '2012', title: 'The Teacher', desc: 'Students began reporting life shifts beyond knowledge — clarity, better decisions, transformed patterns.' },
  { year: '2019', title: 'Trinity Gurukul', desc: 'Founded the only institute offering all occult sciences — Vaastu, Astrology, Numerology, Healing — under one umbrella.' },
];

const values = [
  { icon: BookOpen, title: 'Observation First', desc: 'Every insight emerged from watching real outcomes — not from textbooks. Theory followed observation.' },
  { icon: Compass, title: 'Individual Assessment', desc: 'No two spaces or people are the same. Generic formulas are replaced with personalized energy analysis.' },
  { icon: Sparkles, title: 'Structured Science', desc: 'Occult sciences are taught as systems of logic and repeatable patterns — not myths or blind belief.' },
  { icon: Star, title: 'Direction, Not Dependence', desc: 'A true Saarthi empowers you to navigate life independently, not to keep coming back for answers.' },
];

const achievements = [
  { val: '15+', label: 'Years of Practice' },
  { val: '10,000+', label: 'Lives Guided' },
  { val: '500+', label: 'Certified Students' },
  { val: '15+', label: 'Sciences Taught' },
];

export default function About() {
  return (
    <div className="page-wrapper" style={{ background: '#FFFFFF' }}>

      {/* ── HERO ── */}
      <section style={{
        background: 'var(--cream)',
        paddingTop: '10rem',
        paddingBottom: '8rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 70% 40%, rgba(200,150,27,0.07) 0%, transparent 60%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial="hidden" animate="visible" variants={stagger}
            style={{ display: 'grid', gridTemplateColumns: '1fr 0.85fr', gap: '8rem', alignItems: 'center' }}>
            <motion.div variants={revealUp}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}>
                <span className="label" style={{ color: 'var(--gold)' }}>BioSketch</span>
                <span className="gold-line" style={{ margin: 0 }} />
              </div>
              <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3.5rem, 5.5vw, 6rem)', lineHeight: 1, marginBottom: '2rem', letterSpacing: '-0.02em' }}>
                Saarthi <br /><em style={{ color: 'var(--maroon)' }}>Sahil Jain</em>
              </h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', fontWeight: 300, lineHeight: 1.9, maxWidth: '500px', marginBottom: '2rem' }}>
                Founder of Trinity Gurukul. Practitioner of Vaastu, Astrology, Numerology and Vedic Healing Sciences. A guide who shows direction without creating dependence.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: 300, lineHeight: 1.8, maxWidth: '460px', marginBottom: '3rem' }}>
                From Jammu. Teaching across India. Trusted by thousands.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <Link to="/consultation" className="btn-primary">Book Consultation <ArrowRight size={14} /></Link>
                <Link to="/courses" className="btn-outline">Explore Courses</Link>
              </div>
            </motion.div>

            <motion.div variants={revealUp}>
              <div style={{ position: 'relative', borderRadius: '3rem', overflow: 'hidden', height: '560px' }}>
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1600&auto=format&fit=crop"
                  alt="Saarthi Sahil Jain"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,10,10,0.3) 0%, transparent 60%)' }} />
                <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', background: 'var(--maroon)', padding: '1rem 2rem', borderRadius: '1rem', color: '#fff' }}>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 600, lineHeight: 1 }}>15+</div>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.8 }}>Years Mastery</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: 'var(--maroon)', padding: '4rem 0' }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '2rem', textAlign: 'center' }}>
            {achievements.map((a) => (
              <motion.div key={a.label} variants={revealUp}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem,4vw,3.5rem)', color: 'var(--gold)', lineHeight: 1 }}>{a.val}</div>
                <div style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginTop: '0.5rem' }}>{a.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── BIOGRAPHY ── */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem' }}>
            <motion.div variants={revealUp} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
              <span className="label">The Journey</span>
              <span className="gold-line" />
            </motion.div>
            
            <motion.h2 variants={revealUp} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem,4vw,3.5rem)', color: 'var(--text-main)', lineHeight: 1.2 }}>
              A Story of <em style={{ color: 'var(--maroon)' }}>Remembrance</em>
            </motion.h2>

            <motion.div variants={revealUp} style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', width: '100%', marginTop: '1rem' }}>
              {[
                'Saarthi Sahil Jain comes from a renowned business family in Jammu. From a young age, his connection with occult sciences felt natural. At 15, he began studying astrology through real case studies. Observation came first. Theory followed later.',
                'As his work deepened, the knowledge did not feel newly acquired. It felt remembered. Insights came with ease. Patterns revealed themselves quickly. This understanding felt carried forward from past life impressions, refined through present experience.',
                'Years of research led to a critical realization — people living in the same house experienced different outcomes. Vaastu affected some deeply and left others untouched. The deciding factor was not space alone. It was inner strength. Especially the condition of the kundali system.',
                'This exposed a major flaw in the field. Most consultants used generic formulas — same remedies, same directions, same advice. No individual assessment. No integration of energy, consciousness, and readiness.',
                'When Saarthi Sahil Jain started teaching these sciences, something unexpected happened. Students reported changes beyond knowledge. Decision making improved. Emotional clarity increased. Life patterns shifted. They said they were not just learning subjects — they were experiencing transformation.',
                'That is when the name Saarthi emerged. Not chosen by branding. Given by people. A Saarthi is one who guides — who helps navigate confusion without taking control. One who shows direction while keeping responsibility with the individual.',
              ].map((para, i) => (
                <p key={i} style={{ color: 'var(--text-main)', fontSize: '1.15rem', fontWeight: 500, lineHeight: 1.9, letterSpacing: '0.02em' }}>{para}</p>
              ))}
            </motion.div>

            <motion.div variants={revealUp} style={{ margin: '4rem 0', width: '100%', display: 'flex', justifyContent: 'center' }}>
               <div style={{ width: '60px', height: '2px', background: 'var(--gold)' }} />
            </motion.div>

            <motion.div variants={revealUp} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <span className="label">Trinity Gurukul</span>
              <span className="gold-line" />
            </motion.div>

            <motion.div variants={revealUp} style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', width: '100%' }}>
              <p style={{ color: 'var(--text-main)', fontSize: '1.15rem', fontWeight: 500, lineHeight: 1.9, letterSpacing: '0.02em' }}>
                From this foundation, Trinity Gurukul was established — the only institute that offers all occult sciences under one umbrella. Astrology, Vaastu, numerology, healing, yantra, tarot, palmistry, face reading, swar vigyan and more are taught as integrated sciences. Not myths. Not beliefs.
              </p>
              <p style={{ color: 'var(--text-main)', fontSize: '1.15rem', fontWeight: 500, lineHeight: 1.9, letterSpacing: '0.02em' }}>
                His mission is clear: to help people understand that occult sciences are structured systems based on logic, observation, and repeatable patterns — and to guide them as a Saarthi. With clarity. With responsibility. With truth.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <motion.div variants={revealUp}>
              <span className="label">The Path</span>
              <h2 className="section-title" style={{ marginTop: '1rem' }}>Key <em>Milestones</em></h2>
            </motion.div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '2rem', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '3rem', left: '12.5%', right: '12.5%', height: '1px', background: 'var(--gold)', opacity: 0.3 }} />
            {milestones.map((m, i) => (
              <motion.div key={i} variants={revealUp} style={{ textAlign: 'center', padding: '0 1rem' }}>
                <div style={{
                  width: '56px', height: '56px', borderRadius: '50%',
                  background: 'var(--maroon)', color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-serif)', fontSize: '0.85rem', fontWeight: 700,
                  margin: '0 auto 2rem', position: 'relative', zIndex: 1
                }}>{m.year}</div>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'var(--text-main)', marginBottom: '1rem' }}>{m.title}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.8, fontWeight: 300 }}>{m.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <motion.div variants={revealUp}>
              <span className="label">Core Principles</span>
              <h2 className="section-title" style={{ marginTop: '1rem' }}>What Sets Us <em>Apart</em></h2>
            </motion.div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '2rem' }}>
            {values.map((v, i) => (
              <motion.div key={i} variants={revealUp}
                style={{ padding: '3rem 2rem', border: '1px solid var(--border)', borderRadius: '1.5rem', textAlign: 'center', background: 'var(--cream)' }}
                whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(0,0,0,0.06)' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'rgba(200,150,27,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--maroon)', margin: '0 auto 1.5rem' }}>
                  <v.icon size={22} />
                </div>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-main)' }}>{v.title}</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.8, fontWeight: 300 }}>{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-band">
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={revealUp}>
              <span className="label" style={{ color: 'var(--gold)' }}>Begin Your Journey</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem,4vw,3.75rem)', color: 'var(--text-main)', lineHeight: 1.2, margin: '1.5rem 0', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
                Experience the <em style={{ color: 'var(--gold)' }}>Saarthi</em> Difference
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: 300, lineHeight: 1.8, marginBottom: '3rem' }}>
                Book a personal consultation and start your journey of clarity, direction, and transformation.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/consultation" className="btn-primary">Book Consultation <ArrowRight size={14} /></Link>
                <Link to="/courses" className="btn-outline">Browse Courses</Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
