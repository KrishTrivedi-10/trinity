import CourseGrid from '../components/sections/CourseGrid';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Courses() {
  return (
    <div className="page-wrapper" style={{ background: '#FFFFFF' }}>
      <CourseGrid />

      {/* CTA */}
      <section className="cta-band">
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'var(--white)', marginBottom: '2rem' }}>Not Sure Which Course Is Right for You?</h2>
            <Link to="/consultation" className="btn-secondary" style={{ borderColor: 'var(--gold)', color: 'var(--gold)' }}>Book a Free Discovery Call</Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
