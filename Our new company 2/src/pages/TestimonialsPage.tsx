import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Quote } from 'lucide-react';

const revealUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut' as const } },
};
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

const testimonials = [
  { name: 'Rajesh Sharma', city: 'Delhi', role: 'Business Owner', rating: 5, text: 'Sahil ji\'s Vaastu consultation transformed our home. Within months, the stagnation in our business completely dissolved. The precision of his analysis was extraordinary — nothing generic, everything specific to our situation.' },
  { name: 'Priya Mehta', city: 'Mumbai', role: 'Corporate Professional', rating: 5, text: 'I was deeply skeptical at first. But the logic and scientific backing behind every recommendation was unlike anything I had experienced. I finally understood why some spaces feel energising and others draining.' },
  { name: 'Anil Gupta', city: 'Jammu', role: 'Vaastu Course Student', rating: 5, text: 'The numerology course completely shifted how I make decisions. It\'s not superstition — it\'s a science. I now apply it in my business and personal life with consistent, measurable results.' },
  { name: 'Sunita Kapoor', city: 'Pune', role: 'Homemaker', rating: 5, text: 'After years of health issues with no clear cause, Saarthi ji identified a geopathic stress zone under our bedroom. Three months after the correction, my sleep and energy levels improved dramatically.' },
  { name: 'Vikram Singh', city: 'Chandigarh', role: 'Engineer', rating: 5, text: 'I attended the Astro-Vaastu workshop and left with a completely new framework for understanding my profession and home. The integration of astrology and space science is genuinely groundbreaking.' },
  { name: 'Kavita Rao', city: 'Hyderabad', role: 'Teacher', rating: 5, text: 'My daughter was struggling in her studies despite working hard. After a Vaastu correction in her study room — specifically the direction of her desk — her concentration and results improved within one academic term.' },
  { name: 'Manish Joshi', city: 'Ahmedabad', role: 'Numerology Student', rating: 5, text: 'The face reading and palmistry courses changed how I understand people. These are not fortune telling techniques — they are sophisticated diagnostic tools. Sahil ji teaches them with remarkable clarity.' },
  { name: 'Deepa Nair', city: 'Kochi', role: 'Online Consultation Client', rating: 5, text: 'I consulted from Kerala via Zoom. The depth of analysis I received remotely matched what I had expected from an in-person visit. Sahil ji knew exactly which zone was causing our financial blockage.' },
  { name: 'Rohit Malhotra', city: 'Noida', role: 'Entrepreneur', rating: 5, text: 'I have consulted multiple Vaastu experts over the years. None provided the level of individual analysis that Trinity does. My business registered its best quarter six weeks after implementing the recommended corrections.' },
  { name: 'Seema Bansal', city: 'Lucknow', role: 'Online Course Student', rating: 5, text: 'The 3rd Eye Sadhana workshop was genuinely transformative. Within a week of daily practice, my intuitive clarity in decision making improved noticeably. Highly recommend for anyone in consulting or healing work.' },
  { name: 'Arjun Verma', city: 'Bengaluru', role: 'Software Professional', rating: 5, text: 'As someone who approaches everything analytically, I found Trinity\'s approach refreshing. Every remedy has a logical explanation. There is no "just believe" here — everything is backed by observable patterns.' },
  { name: 'Neeraj Bhatia', city: 'Jaipur', role: 'Business Consultant', rating: 5, text: 'Sahil ji identified that the name of my firm had a numerological conflict with my birth number. After the suggested correction, client acquisition became noticeably easier. The numbers don\'t lie.' },
];

const stats = [
  { val: '10,000+', label: 'Lives Transformed' },
  { val: '500+', label: 'Certified Students' },
  { val: '15+', label: 'Years of Practice' },
  { val: '4.9★', label: 'Average Rating' },
];

export default function TestimonialsPage() {
  return (
    <div className="page-wrapper" style={{ background: '#FFFFFF' }}>

      {/* ── HERO ── */}
      <section style={{ background: 'var(--cream)', paddingTop: '10rem', paddingBottom: '7rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(200,150,27,0.06) 0%, transparent 70%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={revealUp} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
              <span className="label" style={{ color: 'var(--gold)' }}>REAL STORIES</span>
              <span className="gold-line" />
            </motion.div>
            <motion.h1 variants={revealUp} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem,6vw,4.5rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Lives <em style={{ color: 'var(--maroon)' }}>Transformed</em>
            </motion.h1>
            <motion.p variants={revealUp} style={{ color: 'var(--text-muted)', fontSize: '1.1rem', fontWeight: 300, lineHeight: 1.9 }}>
              Thousands of families, entrepreneurs, and students across India have experienced the precision of Trinity Vaastu's personalised approach.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: 'var(--maroon)', padding: '4rem 0' }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '2rem', textAlign: 'center' }}>
            {stats.map(s => (
              <motion.div key={s.label} variants={revealUp}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,3.5vw,3rem)', color: 'var(--gold)', lineHeight: 1 }}>{s.val}</div>
                <div style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginTop: '0.5rem' }}>{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FEATURED QUOTE ── */}
      <section style={{ background: 'var(--cream-dark)', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <Quote size={48} style={{ color: 'var(--gold)', opacity: 0.3, margin: '0 auto 2rem' }} />
            <p style={{ fontFamily: 'var(--font-accent)', fontSize: 'clamp(1.5rem,3vw,2.25rem)', color: 'var(--text-main)', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '2rem' }}>
              "We don't just get clients and students — we get people who are ready for a real shift. And that shift always happens, because we never offer generic solutions."
            </p>
            <div style={{ width: '40px', height: '1.5px', background: 'var(--gold)', margin: '0 auto 1rem' }} />
            <p style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 700 }}>Saarthi Sahil Jain · Founder, Trinity Gurukul</p>
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS GRID ── */}
      <section className="section">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2rem' }}>
            {testimonials.map((t, i) => (
              <motion.div key={i} variants={revealUp}
                style={{ background: 'var(--cream)', border: '1px solid var(--border)', borderRadius: '1.5rem', padding: '2.5rem', display: 'flex', flexDirection: 'column' }}
                whileHover={{ y: -4, boxShadow: '0 20px 50px rgba(0,0,0,0.06)', background: '#FFFFFF' }}>
                {/* Stars */}
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.5rem' }}>
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <Star key={si} size={14} fill="var(--gold)" style={{ color: 'var(--gold)' }} />
                  ))}
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', fontWeight: 300, lineHeight: 1.85, flex: 1, marginBottom: '2rem' }}>
                  "{t.text}"
                </p>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--maroon)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 700 }}>{t.name[0]}</span>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-main)' }}>{t.name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{t.role} · {t.city}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-band">
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem,4vw,3.5rem)', color: 'var(--text-main)', lineHeight: 1.2, marginBottom: '1.5rem' }}>
              Be the Next <em style={{ color: 'var(--gold)' }}>Success Story</em>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: 300, marginBottom: '2.5rem', maxWidth: '500px', margin: '0 auto 2.5rem' }}>
              Your transformation is one consultation away. Start your journey with Saarthi Sahil Jain today.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/consultation" className="btn-primary">Book Consultation <ArrowRight size={14} /></Link>
              <Link to="/courses" className="btn-outline">View Courses</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
