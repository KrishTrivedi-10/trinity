import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, ArrowRight, Users } from 'lucide-react';

const revealUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut' as const } },
};
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

const events = [
  { id: 268, day: '11', month: 'May', year: '2026', title: 'Yantra Healing', type: 'Online', duration: '2 Days', seats: '20', desc: 'Learn the ancient science of Yantra creation and activation. Understand how geometric energy tools heal specific life areas and how to prescribe them accurately.', tag: 'Healing' },
  { id: 267, day: '14', month: 'May', year: '2026', title: 'Self Healing', type: 'Online', duration: '1 Day', seats: '25', desc: 'A transformative workshop on channelling inner energy for physical, emotional and mental healing using Vedic techniques and breathwork.', tag: 'Healing' },
  { id: 266, day: '11', month: 'May', year: '2026', title: 'Rudraksh Course', type: 'Offline', duration: '1 Day', seats: '15', desc: 'Comprehensive study of Rudraksh beads — their types, energies, selection criteria, energisation process, and therapeutic applications.', tag: 'Course' },
  { id: 265, day: '11', month: 'May', year: '2026', title: 'Professional Vaastu', type: 'Offline', duration: '3 Days', seats: '18', desc: 'Complete professional certification in Vaastu Shastra. Covers directional analysis, five elements, zone mapping, and practical remedy design.', tag: 'Course' },
  { id: 264, day: '03', month: 'May', year: '2026', title: 'Crystal Healing', type: 'Online', duration: '1 Day', seats: '30', desc: 'Understanding crystal energies, programming techniques, placement according to Vaastu zones, and using crystals for specific healing intentions.', tag: 'Healing' },
  { id: 263, day: '03', month: 'May', year: '2026', title: 'Astrology Foundations', type: 'Online', duration: '2 Days', seats: '22', desc: 'Introduction to Vedic astrology — the twelve houses, nine planets, rashis, and the practical basics of birth chart reading.', tag: 'Course' },
  { id: 262, day: '03', month: 'May', year: '2026', title: 'Astro-Numerology', type: 'Online', duration: '2 Days', seats: '20', desc: 'The integration of astrology and numerology — understanding how planetary numbers relate to birth dates, names, and life patterns.', tag: 'Course' },
  { id: 261, day: '25', month: 'Apr', year: '2026', title: '3rd Eye Sadhana', type: 'Offline', duration: '1 Day', seats: '12', desc: 'Guided practice to activate and strengthen intuitive perception. Meditation-based techniques for enhanced clarity and energetic sensitivity.', tag: 'Sadhana' },
  { id: 260, day: '20', month: 'Apr', year: '2026', title: 'Tarot Reading', type: 'Online', duration: '2 Days', seats: '25', desc: 'A scientific approach to tarot — understanding archetypes, energy patterns, and how to give precise, responsible readings.', tag: 'Course' },
];

const tags = ['All', 'Course', 'Healing', 'Sadhana'];
const modes = ['All', 'Online', 'Offline'];

export default function Events() {
  const [activeTag, setActiveTag] = useState('All');
  const [activeMode, setActiveMode] = useState('All');

  const filtered = events.filter(e =>
    (activeTag === 'All' || e.tag === activeTag) &&
    (activeMode === 'All' || e.type === activeMode)
  );

  return (
    <div className="page-wrapper" style={{ background: '#FFFFFF' }}>

      {/* ── HERO ── */}
      <section style={{ background: 'var(--cream)', paddingTop: '10rem', paddingBottom: '7rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 75% 40%, rgba(200,150,27,0.06) 0%, transparent 60%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial="hidden" animate="visible" variants={stagger}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
            <motion.div variants={revealUp}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}>
                <span className="label" style={{ color: 'var(--gold)' }}>UPCOMING</span>
                <span className="gold-line" style={{ margin: 0 }} />
              </div>
              <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem,5.5vw,5rem)', lineHeight: 1.1, marginBottom: '1.75rem' }}>
                Events & <em style={{ color: 'var(--maroon)' }}>Workshops</em>
              </h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', fontWeight: 300, lineHeight: 1.9 }}>
                Join Saarthi Sahil Jain for live workshops, certification courses and healing sessions — online and offline across India.
              </p>
            </motion.div>
            <motion.div variants={revealUp}
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              {[
                { val: events.length + '+', label: 'Events This Month' },
                { val: '2', label: 'Cities Covered' },
                { val: '500+', label: 'Past Attendees' },
                { val: 'Online', label: '& Offline Modes' },
              ].map(s => (
                <div key={s.label} style={{ background: '#FFFFFF', border: '1px solid var(--border)', borderRadius: '1.25rem', padding: '2rem', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--maroon)', lineHeight: 1 }}>{s.val}</div>
                  <div style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: '0.5rem' }}>{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── FILTERS ── */}
      <section style={{ borderBottom: '1px solid var(--border)', padding: '2rem 0', background: '#FFFFFF', position: 'sticky', top: '72px', zIndex: 10 }}>
        <div className="container" style={{ display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <span style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', alignSelf: 'center', fontWeight: 700 }}>Type:</span>
            {tags.map(t => (
              <button key={t} onClick={() => setActiveTag(t)}
                style={{ padding: '0.5rem 1.25rem', borderRadius: '100px', border: `1.5px solid ${activeTag === t ? 'var(--maroon)' : 'var(--border)'}`, background: activeTag === t ? 'var(--maroon)' : 'transparent', color: activeTag === t ? '#fff' : 'var(--text-muted)', fontSize: '0.82rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' }}>
                {t}
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <span style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', alignSelf: 'center', fontWeight: 700 }}>Mode:</span>
            {modes.map(m => (
              <button key={m} onClick={() => setActiveMode(m)}
                style={{ padding: '0.5rem 1.25rem', borderRadius: '100px', border: `1.5px solid ${activeMode === m ? 'var(--gold)' : 'var(--border)'}`, background: activeMode === m ? 'var(--gold)' : 'transparent', color: activeMode === m ? '#fff' : 'var(--text-muted)', fontSize: '0.82rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' }}>
                {m}
              </button>
            ))}
          </div>
          <span style={{ marginLeft: 'auto', fontSize: '0.82rem', color: 'var(--text-muted)' }}>{filtered.length} events found</span>
        </div>
      </section>

      {/* ── EVENTS GRID ── */}
      <section className="section">
        <div className="container">
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '6rem 0', color: 'var(--text-muted)' }}>
              <p style={{ fontSize: '1.2rem', fontWeight: 300 }}>No events match your filters.</p>
            </div>
          ) : (
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {filtered.map(event => (
                <motion.div key={event.id} variants={revealUp}
                  style={{ display: 'grid', gridTemplateColumns: '120px 1fr auto', gap: '3rem', alignItems: 'center', background: '#FAFAFA', border: '1px solid var(--border)', borderRadius: '1.5rem', padding: '2.5rem', transition: 'all 0.3s ease' }}
                  whileHover={{ background: '#FFFFFF', borderColor: 'rgba(200,150,27,0.3)', boxShadow: '0 20px 50px rgba(0,0,0,0.05)' }}>

                  {/* Date Badge */}
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ background: 'var(--maroon)', borderRadius: '1rem', padding: '1.25rem', display: 'inline-flex', flexDirection: 'column', alignItems: 'center', minWidth: '80px' }}>
                      <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: '#fff', lineHeight: 1, fontWeight: 700 }}>{event.day}</span>
                      <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginTop: '0.25rem', fontWeight: 700 }}>{event.month}</span>
                    </div>
                  </div>

                  {/* Details */}
                  <div>
                    <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 700, background: 'rgba(200,150,27,0.08)', padding: '0.3rem 0.8rem', borderRadius: '100px' }}>{event.tag}</span>
                      <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: event.type === 'Online' ? '#1a7a4a' : 'var(--maroon)', fontWeight: 700, background: event.type === 'Online' ? 'rgba(26,122,74,0.08)' : 'rgba(139,26,26,0.08)', padding: '0.3rem 0.8rem', borderRadius: '100px' }}>{event.type}</span>
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '0.75rem' }}>{event.title}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', fontWeight: 300, lineHeight: 1.7, maxWidth: '600px', marginBottom: '1rem' }}>{event.desc}</p>
                    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}><Clock size={13} style={{ color: 'var(--gold)' }} />{event.duration}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}><Users size={13} style={{ color: 'var(--gold)' }} />Max {event.seats} seats</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}><Calendar size={13} style={{ color: 'var(--gold)' }} />{event.day} {event.month} {event.year}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'flex-end' }}>
                    <Link to="/consultation" className="btn-primary" style={{ whiteSpace: 'nowrap', padding: '0.9rem 2rem' }}>
                      Register <ArrowRight size={14} />
                    </Link>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textAlign: 'center' }}>Limited seats</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-band">
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,4vw,3rem)', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
              Want to Host or Co-Create an <em style={{ color: 'var(--gold)' }}>Event?</em>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: 300, marginBottom: '2.5rem' }}>Get in touch to discuss partnership, group bookings, or private workshops.</p>
            <Link to="/contact" className="btn-primary">Contact Us <ArrowRight size={14} /></Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
