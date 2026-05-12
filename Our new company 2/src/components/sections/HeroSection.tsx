import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Compass, Sparkles, Gem } from 'lucide-react';

const pillars = [
  { num: '01', title: 'Education', icon: BookOpen, desc: 'Master the sacred science of Vaastu through structured learning, ancient texts, and modern application.', link: '/courses', bg: 'var(--maroon)', color: '#FFFFFF', iconBg: 'rgba(255,255,255,0.1)', iconColor: '#FFFFFF' },
  { num: '02', title: 'Guidance', icon: Compass, desc: 'Personal consultations that align your space with universal energies for prosperity, health, and harmony.', link: '/consultation', bg: 'var(--gold)', color: '#FFFFFF', iconBg: 'rgba(255,255,255,0.2)', iconColor: '#FFFFFF' },
  { num: '03', title: 'Transformation', icon: Sparkles, desc: 'Holistic healing journeys that awaken inner clarity and restore the natural flow of energy in your life.', link: '/testimonials', bg: 'var(--cream-dark)', color: 'var(--text-main)', iconBg: '#FFFFFF', iconColor: 'var(--maroon)' },
  { num: '04', title: 'Solutions', icon: Gem, desc: 'Sacred energy tools, remedies, and products designed to correct imbalances and elevate your environment.', link: '/services', bg: '#FFFFFF', color: 'var(--text-main)', border: '1px solid var(--border)', iconBg: 'var(--cream-dark)', iconColor: 'var(--maroon)' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.65, ease: 'easeOut' as const } }),
};

const pennantVariant = {
  hidden: { opacity: 0, y: 150, scale: 0.8, rotateZ: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateZ: 0,
    transition: {
      delay: 0.4 + i * 0.15,
      type: 'spring',
      stiffness: 80,
      damping: 12
    }
  }),
  hover: {
    scale: 1.05,
    y: -8,
    transition: { type: 'spring', stiffness: 300, damping: 20 }
  }
};

const descVariant = {
  hidden: { opacity: 0, height: 0, marginTop: 0, display: 'none' },
  visible: { opacity: 0, height: 0, marginTop: 0, display: 'none' },
  hover: { opacity: 1, height: 'auto', marginTop: '0.75rem', display: 'block', transition: { duration: 0.3 } }
};

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-bg-pattern" />
      <div className="hero-grid-line" />
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', paddingTop: '2rem' }}>

        {/* Top — 4 Pillars (Pennants) */}
        <div className="hero-visual" style={{ width: '100%', maxWidth: '900px', margin: '0 auto 5rem', position: 'relative' }}>
          <div className="pennants-container">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <Link to={p.link} key={p.num} style={{ textDecoration: 'none', display: 'flex', flex: 1 }}>
                  <motion.div
                    className="pillar-pennant"
                    layout
                    style={{
                      background: p.bg,
                      color: p.color,
                      border: p.border ? p.border : 'none',
                      transformOrigin: 'top center'
                    }}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    variants={pennantVariant}
                  >
                    {/* Hanging Dot */}
                    <div style={{ position: 'absolute', top: '-6px', left: '50%', transform: 'translateX(-50%)', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--maroon)', border: '2px solid var(--gold)', zIndex: 10 }} />
                    
                    {/* Background Number */}
                    <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', fontFamily: 'var(--font-accent)', fontSize: '3.5rem', opacity: 0.1, color: 'inherit', lineHeight: 1, pointerEvents: 'none' }}>
                      {p.num}
                    </div>

                    <motion.div layout style={{
                      position: 'relative', zIndex: 1,
                      width: '44px', height: '44px', borderRadius: '50%',
                      background: p.iconBg, color: p.iconColor,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginBottom: '1.25rem', flexShrink: 0,
                      boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                    }}>
                      <Icon size={20} />
                    </motion.div>
                    <motion.h3 layout style={{ position: 'relative', zIndex: 1, fontFamily: 'var(--font-serif)', fontSize: '1.2rem', marginBottom: '0', lineHeight: 1.2 }}>{p.title}</motion.h3>
                    <motion.p variants={descVariant} style={{ position: 'relative', zIndex: 1, fontSize: '0.8rem', opacity: 0.9, lineHeight: 1.6, fontWeight: 300, overflow: 'hidden' }}>
                      {p.desc}
                    </motion.p>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Bottom — Text & Actions */}
        <motion.div initial="hidden" animate="show" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.div className="hero-eyebrow" custom={0} variants={fadeUp} initial="hidden" animate="show" style={{ justifyContent: 'center' }}>
            <span className="gold-line" />
            <span className="label">Science • Energy • Dharma</span>
            <span className="gold-line" />
          </motion.div>
          <motion.h1 className="hero-title" custom={1} variants={fadeUp} initial="hidden" animate="show">
            Transform Your Space, <br /><em>Energy &amp; Destiny</em>
          </motion.h1>
          <motion.p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '560px', margin: '0 auto 2.75rem', fontWeight: 300, lineHeight: 1.9 }} custom={2} variants={fadeUp} initial="hidden" animate="show">
            Where Vaastu, Astrology and Conscious Sciences meet modern clarity and real transformation.
          </motion.p>
          <motion.div className="hero-actions" custom={3} variants={fadeUp} initial="hidden" animate="show" style={{ justifyContent: 'center' }}>
            <Link to="/courses" className="btn-primary">Explore Courses</Link>
            <Link to="/consultation" className="btn-outline">Book Consultation</Link>
          </motion.div>
          <motion.div className="hero-stat-row" custom={4} variants={fadeUp} initial="hidden" animate="show" style={{ justifyContent: 'center', borderTop: 'none', paddingTop: '2rem' }}>
            {[{ val: '10k+', label: 'Lives Guided' }, { val: '100+', label: 'Workshops' }, { val: '2k+', label: 'Students' }].map(s => (
              <div className="hero-stat" key={s.label}><h4>{s.val}</h4><p>{s.label}</p></div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2.5 }}
        style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ fontSize: '0.52rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Scroll</span>
        <div style={{ width: '1px', height: '44px', background: 'linear-gradient(to bottom, var(--maroon), transparent)' }} />
      </motion.div>
    </section>
  );
}
