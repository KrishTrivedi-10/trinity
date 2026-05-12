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

export default function EnquiryForm() {
  return (
    <section className="cta-band">
      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '740px', margin: '0 auto' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={revealUp} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '0.62rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600 }}>Begin Today</span>
            <span style={{ display: 'block', width: '40px', height: '1.5px', background: 'var(--gold)', opacity: 0.3 }} />
          </motion.div>
          <motion.h2 variants={revealUp} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 4vw, 4rem)', color: 'var(--text-main)', lineHeight: 1.2, marginBottom: '1.5rem' }}>
            Your Answers May Be One <em style={{ color: 'var(--gold)' }}>Consultation</em> Away
          </motion.h2>
          <motion.p variants={revealUp} style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: 300, lineHeight: 1.8, marginBottom: '3rem', maxWidth: '500px', margin: '0 auto 3rem' }}>
            Begin a conversation with Saarthi Sahil Jain. Every journey of clarity starts with a single, honest question.
          </motion.p>
          <motion.div variants={revealUp}>
            <Link to="/consultation" className="btn-primary" style={{ padding: '1.1rem 2.75rem' }}>
              Book Personal Consultation <ArrowRight size={14} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
