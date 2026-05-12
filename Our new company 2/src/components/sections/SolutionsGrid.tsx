import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Briefcase, ArrowRight, Heart, Home as HomeIcon, Building2, Zap, BookOpen, Users } from 'lucide-react';

const services = [
  { title: 'Business Growth', icon: Briefcase, tag: 'Enterprise' },
  { title: 'Career Direction', icon: ArrowRight, tag: 'Professional' },
  { title: 'Marriage Guidance', icon: Heart, tag: 'Personal' },
  { title: 'Home Vaastu', icon: HomeIcon, tag: 'Residential' },
  { title: 'Office Vaastu', icon: Building2, tag: 'Commercial' },
  { title: 'Energy Healing', icon: Zap, tag: 'Wellness' },
  { title: 'Education Support', icon: BookOpen, tag: 'Academic' },
  { title: 'Relationship Harmony', icon: Users, tag: 'Social' },
];

const revealUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut' as const } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

export default function SolutionsGrid() {
  return (
    <section className="section">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={revealUp} style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <div className="section-eyebrow"><span className="label">Our Expertise</span><span className="gold-rule" /></div>
            <h2 className="section-title">Targeted <em>Solutions</em></h2>
            <p className="section-sub">Precise energetic interventions for specific life challenges.</p>
          </motion.div>

          <motion.div variants={stagger} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {services.map((svc, _i) => {
              const Icon = svc.icon;
              return (
                <motion.div key={svc.title} variants={revealUp}
                  style={{ 
                    background: '#FFFFFF', 
                    padding: '2.5rem', 
                    borderRadius: '2rem', 
                    border: '1px solid var(--border)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                    transition: 'all 0.5s ease'
                  }}
                  whileHover={{ translateY: -8, boxShadow: '0 25px 50px rgba(0,0,0,0.05)', borderColor: 'rgba(200, 150, 27, 0.2)' }}>
                  <div style={{ width: '48px', height: '48px', background: 'rgba(200, 150, 27, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--maroon)', borderRadius: '50%', marginBottom: '1.5rem' }}>
                    <Icon size={20} />
                  </div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>{svc.title}</div>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 700 }}>{svc.tag}</div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div variants={revealUp} style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link to="/services" className="btn-outline">Explore All Services</Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
