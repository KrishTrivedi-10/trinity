import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, Users, Star } from 'lucide-react';

const courses = [
  { num: '01', title: 'Professional Vaastu Shastra', duration: '3 Months', students: '500+', level: 'Foundation', desc: 'A complete system covering directional science, five elements, planetary energies, and practical space correction techniques.' },
  { num: '02', title: 'Vedic Numerology Mastery', duration: '6 Weeks', students: '300+', level: 'Intermediate', desc: 'Decode the mathematics of destiny. Learn how numbers influence names, dates, business decisions, and life cycles.' },
  { num: '03', title: 'Tarot & Intuitive Guidance', duration: '8 Weeks', students: '200+', level: 'Foundation', desc: 'A scientific approach to symbolic reading. Understand archetypes, energy patterns, and precise interpretation methods.' },
  { num: '04', title: 'Astrology for Modern Life', duration: '4 Months', students: '400+', level: 'Advanced', desc: 'Go beyond sun signs. Master birth chart analysis, dashas, transits, and predictive astrology for real-world consulting.' },
];

const revealUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut' as const } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

export default function CourseGrid() {
  return (
    <section className="section" style={{ paddingTop: '8rem', paddingBottom: '10rem', background: '#FFFFFF' }}>
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={revealUp} style={{ textAlign: 'center', marginBottom: '6.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
              <span className="label" style={{ color: 'var(--gold)', fontWeight: 600 }}>EDUCATION</span>
              <span className="gold-rule" />
            </div>
            <h1 className="section-title" style={{ fontSize: 'clamp(3.5rem, 6vw, 5rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>Learn Ancient Sciences <em>Professionally</em></h1>
            <p className="section-sub" style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', color: 'var(--text-muted)', lineHeight: 1.8 }}>Structured, logical, and deeply transformative courses for serious learners. Not superstition — science.</p>
          </motion.div>

          <motion.div variants={stagger} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {courses.map((course, _i) => (
              <motion.div key={course.num} variants={revealUp}
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '100px 1fr auto', 
                  gap: '4rem', 
                  alignItems: 'center', 
                  padding: '3.5rem', 
                  background: '#FFFFFF', 
                  border: '1px solid var(--border)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                  transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'pointer',
                  borderRadius: '4px'
                }}
                whileHover={{ scale: 1.01, boxShadow: '0 30px 60px rgba(0,0,0,0.06)', borderColor: 'rgba(200, 150, 27, 0.2)' }}>
                <div style={{ fontFamily: 'var(--font-accent)', fontSize: '4rem', color: 'var(--gold)', opacity: 0.3, lineHeight: 1 }}>{course.num}</div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                    <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 800, background: 'rgba(200, 150, 27, 0.05)', padding: '0.4rem 1rem', borderRadius: '2px' }}>{course.level}</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.9rem', marginBottom: '1.25rem', color: 'var(--text-main)' }}>{course.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.85, maxWidth: '650px' }}>{course.desc}</p>
                  <div style={{ display: 'flex', gap: '2.5rem', marginTop: '2.5rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}><Clock size={16} style={{ color: 'var(--gold)' }} />{course.duration}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}><Users size={16} style={{ color: 'var(--gold)' }} />{course.students} Enrolled</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--gold)', fontWeight: 700 }}><Star size={16} fill="currentColor" />4.9</span>
                  </div>
                </div>
                <Link to="/consultation" className="btn-primary" style={{ whiteSpace: 'nowrap', padding: '1.25rem 2.5rem' }}>Enroll Now</Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
