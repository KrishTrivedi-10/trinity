import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Heart, DollarSign, BookOpen, Users, Home as HomeIcon, Zap, GraduationCap, Phone, Mail, MapPin } from 'lucide-react';

const revealUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut' as const } },
};
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

const problems = [
  { icon: Briefcase, title: 'Business & Career', desc: 'Stagnation in growth, wrong direction in career, unstable income, difficult partnerships.', color: '#8B1A1A' },
  { icon: Heart, title: 'Health Problems', desc: 'Chronic illness, unexplained ailments, slow recovery, energy depletion.', color: '#C8961B' },
  { icon: DollarSign, title: 'Money Problems', desc: 'Financial leaks, debt cycles, wealth not accumulating despite effort.', color: '#8B1A1A' },
  { icon: GraduationCap, title: 'Education', desc: 'Difficulty concentrating, poor results despite hard work, wrong subject selection.', color: '#C8961B' },
  { icon: Zap, title: 'Addiction', desc: 'Dependency patterns, inability to break habits, family suffering.', color: '#8B1A1A' },
  { icon: Users, title: 'Marriage', desc: 'Delays in marriage, incompatibility, relationship friction, domestic unrest.', color: '#C8961B' },
  { icon: HomeIcon, title: 'Relationship', desc: 'Trust issues, communication breakdown, estrangement from loved ones.', color: '#8B1A1A' },
  { icon: ArrowRight, title: 'Others', desc: 'Legal disputes, accidents, fear, confusion, lack of clarity in life purpose.', color: '#C8961B' },
];

const sciences = [
  {
    num: '01', title: 'Vaastu Shastra',
    desc: 'The science of space and direction. Every zone in your home and office carries specific energy. Corrections restore natural flow and eliminate blockages in specific life areas.',
    points: ['Directional analysis', 'Five element balancing', 'Brahmasthan activation', 'Zone-based remedies'],
  },
  {
    num: '02', title: 'Numerology',
    desc: 'The mathematics of destiny. Numbers in your name, date of birth, and important choices carry vibrational frequencies that directly influence outcomes.',
    points: ['Name number analysis', 'Birth chart numerology', 'Business name correction', 'Lucky number integration'],
  },
  {
    num: '03', title: 'Astrology',
    desc: 'Planetary positions at birth create a blueprint of tendencies, strengths, and challenges. Understanding your kundali reveals your inner energy system.',
    points: ['Birth chart reading', 'Dasha-antardasha analysis', 'Transit predictions', 'Muhurta selection'],
  },
  {
    num: '04', title: 'Energy Healing',
    desc: 'Yantra, crystals, rudraksh, and meditation work at subtle energy levels to shift consciousness and remove deep-rooted blockages.',
    points: ['Yantra healing', 'Crystal programming', 'Rudraksh prescription', '3rd eye sadhana'],
  },
];

const process = [
  { step: '01', title: 'Share Your Situation', desc: 'Provide your birth details, floor plan or photos of your space, and a clear description of the challenge you are facing.' },
  { step: '02', title: 'Deep Analysis', desc: 'Saarthi Sahil Jain personally analyses your Vaastu, kundali, and numerology to find the root cause — not surface symptoms.' },
  { step: '03', title: 'Customised Remedy', desc: 'You receive a precise, personalised remedy plan — specific to your space, birth data, and life situation. No generic solutions.' },
];

export default function Services() {
  return (
    <div className="page-wrapper" style={{ background: '#FFFFFF' }}>

      {/* ── HERO ── */}
      <section style={{ background: 'var(--cream)', paddingTop: '10rem', paddingBottom: '8rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(139,26,26,0.04) 0%, transparent 60%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={revealUp} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
              <span className="label" style={{ color: 'var(--gold)' }}>ONE STOP SOLUTION</span>
              <span className="gold-line" />
            </motion.div>
            <motion.h1 variants={revealUp} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem,6vw,5rem)', lineHeight: 1.1, marginBottom: '2rem' }}>
              Solutions for <em style={{ color: 'var(--maroon)' }}>Your Problems</em>
            </motion.h1>
            <motion.p variants={revealUp} style={{ color: 'var(--text-muted)', fontSize: '1.15rem', fontWeight: 300, lineHeight: 1.9 }}>
              Complete Vaastu, Astrology and Numerology solutions tailored precisely to your life situation. Not generic remedies — personalised healing.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── PROBLEM AREAS ── */}
      <section className="section">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <motion.div variants={revealUp}>
              <span className="label">What We Solve</span>
              <h2 className="section-title" style={{ marginTop: '1rem' }}>Your <em>Life Challenges</em></h2>
              <p className="section-sub">Every challenge has an energetic root. We diagnose and correct it with precision.</p>
            </motion.div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.5rem' }}>
            {problems.map((p, i) => (
              <motion.div key={i} variants={revealUp}
                style={{ padding: '2.5rem 2rem', border: '1px solid var(--border)', borderRadius: '1.5rem', background: '#FAFAFA', cursor: 'pointer' }}
                whileHover={{ y: -6, borderColor: 'var(--gold)', boxShadow: '0 20px 50px rgba(0,0,0,0.05)', background: '#FFFFFF' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: `${p.color}10`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: p.color, marginBottom: '1.5rem' }}>
                  <p.icon size={20} />
                </div>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '0.75rem' }}>{p.title}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.7, fontWeight: 300 }}>{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SCIENCES ── */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <motion.div variants={revealUp}>
              <span className="label">Our Expertise</span>
              <h2 className="section-title" style={{ marginTop: '1rem' }}>The Sciences We <em>Master</em></h2>
            </motion.div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {sciences.map((s, i) => (
              <motion.div key={i} variants={revealUp}
                style={{ display: 'grid', gridTemplateColumns: '80px 1fr auto', gap: '3rem', alignItems: 'center', background: '#FFFFFF', border: '1px solid var(--border)', borderRadius: '1.5rem', padding: '3rem' }}
                whileHover={{ boxShadow: '0 20px 50px rgba(0,0,0,0.05)', borderColor: 'rgba(200,150,27,0.3)' }}>
                <div style={{ fontFamily: 'var(--font-accent)', fontSize: '3.5rem', color: 'var(--gold)', opacity: 0.3, lineHeight: 1 }}>{s.num}</div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--text-main)', marginBottom: '1rem' }}>{s.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: 300, lineHeight: 1.8, maxWidth: '600px', marginBottom: '1.5rem' }}>{s.desc}</p>
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    {s.points.map(pt => (
                      <span key={pt} style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', background: 'rgba(200,150,27,0.08)', color: 'var(--gold)', padding: '0.4rem 1rem', borderRadius: '100px', fontWeight: 700 }}>{pt}</span>
                    ))}
                  </div>
                </div>
                <Link to="/consultation" className="btn-ghost" style={{ whiteSpace: 'nowrap', color: 'var(--maroon)' }}>
                  Consult Now <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <motion.div variants={revealUp}>
              <span className="label">How It Works</span>
              <h2 className="section-title" style={{ marginTop: '1rem' }}>The <em>Process</em></h2>
            </motion.div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '3rem', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '3.5rem', left: '16.5%', right: '16.5%', height: '1px', background: 'var(--gold)', opacity: 0.2 }} />
            {process.map((p, i) => (
              <motion.div key={i} variants={revealUp} style={{ textAlign: 'center', padding: '0 1rem' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--maroon)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 700, margin: '0 auto 2rem', position: 'relative', zIndex: 1 }}>{p.step}</div>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--text-main)' }}>{p.title}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.8, fontWeight: 300 }}>{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT STRIP ── */}
      <section style={{ background: 'var(--cream)', padding: '4rem 0', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '3rem' }}>
            {[
              { icon: Phone, label: 'Call Us', text: '+91-9999051719 / +91-9419190432' },
              { icon: Mail, label: 'Email Us', text: 'info@trinityvaastu.com' },
              { icon: MapPin, label: 'Visit Us', text: 'Jammu & New Delhi, India' },
            ].map(({ icon: Icon, label, text }) => (
              <motion.div key={label} variants={revealUp} style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(200,150,27,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)', flexShrink: 0 }}>
                  <Icon size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 700, marginBottom: '0.25rem' }}>{label}</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-main)', fontWeight: 500 }}>{text}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-band">
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealUp}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem,4vw,3.75rem)', color: 'var(--text-main)', lineHeight: 1.2, marginBottom: '1.5rem' }}>
              Ready to Find Your <em style={{ color: 'var(--gold)' }}>Solution?</em>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: 300, lineHeight: 1.8, marginBottom: '2.5rem' }}>
              Every life challenge has an energetic root. Let us find yours.
            </p>
            <Link to="/consultation" className="btn-primary" style={{ padding: '1.1rem 3rem' }}>
              Book Personal Consultation <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
