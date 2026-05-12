import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, MapPin, Clock } from 'lucide-react';

const revealUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut' as const } },
};
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

const offices = [
  {
    city: 'New Delhi',
    address: 'New Delhi, India',
    phone: '+91-9999051719',
    email: 'info@trinityvaastu.com',
    hours: 'Mon–Sat: 10 AM – 7 PM',
    primary: true,
  },
  {
    city: 'Jammu',
    address: 'Jammu, Jammu & Kashmir, India',
    phone: '+91-9419190432',
    email: 'info@trinityvaastu.com',
    hours: 'Mon–Sat: 10 AM – 7 PM',
    primary: false,
  },
];

const subjects = [
  'General Inquiry',
  'Online Consultation',
  'Site Visit Request',
  'Course Enrollment',
  'Upcoming Events',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: '', message: '' });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [k]: e.target.value }));

  return (
    <div className="page-wrapper" style={{ background: '#FFFFFF' }}>

      {/* ── HERO ── */}
      <section style={{ background: 'var(--cream)', paddingTop: '10rem', paddingBottom: '7rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(139,26,26,0.04) 0%, transparent 60%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={revealUp} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
              <span className="label" style={{ color: 'var(--gold)' }}>REACH OUT</span>
              <span className="gold-line" />
            </motion.div>
            <motion.h1 variants={revealUp} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem,6vw,4.5rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Get In <em style={{ color: 'var(--maroon)' }}>Touch</em>
            </motion.h1>
            <motion.p variants={revealUp} style={{ color: 'var(--text-muted)', fontSize: '1.1rem', fontWeight: 300, lineHeight: 1.9 }}>
              Whether you have a question, want to book a consultation, or enquire about our courses — we're here to help.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── OFFICES ── */}
      <section style={{ background: 'var(--maroon)', padding: '4rem 0' }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            {offices.map(o => (
              <motion.div key={o.city} variants={revealUp}
                style={{ padding: '2.5rem', borderRadius: '1.5rem', border: `1.5px solid ${o.primary ? 'var(--gold)' : 'rgba(255,255,255,0.15)'}`, background: o.primary ? 'rgba(200,150,27,0.08)' : 'rgba(255,255,255,0.04)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: '#fff' }}>{o.city}</h3>
                  {o.primary && <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 700, background: 'rgba(200,150,27,0.15)', padding: '0.3rem 0.8rem', borderRadius: '100px' }}>Primary</span>}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { icon: MapPin, text: o.address },
                    { icon: Phone, text: o.phone },
                    { icon: Mail, text: o.email },
                    { icon: Clock, text: o.hours },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <Icon size={14} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', fontWeight: 300 }}>{text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FORM + INFO ── */}
      <section className="section">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '6rem', alignItems: 'start' }}>

            {/* Left: Info */}
            <motion.div variants={revealUp}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}>
                <span className="label">Contact Information</span>
                <span className="gold-rule" />
              </div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,3vw,2.75rem)', lineHeight: 1.2, marginBottom: '1.5rem' }}>
                Let's Start a <em>Conversation</em>
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: 300, lineHeight: 1.9, marginBottom: '3rem' }}>
                We respond to all enquiries within 24 hours. For urgent consultations, call us directly on the numbers below.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {[
                  { icon: Phone, label: 'Phone', lines: ['+91-9999051719', '+91-9419190432'] },
                  { icon: Mail, label: 'Email', lines: ['info@trinityvaastu.com'] },
                  { icon: MapPin, label: 'Offices', lines: ['New Delhi, India', 'Jammu, J&K, India'] },
                  { icon: Clock, label: 'Working Hours', lines: ['Monday – Saturday', '10:00 AM – 7:00 PM IST'] },
                ].map(({ icon: Icon, label, lines }) => (
                  <div key={label} style={{ display: 'flex', gap: '1.25rem' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(200,150,27,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)', flexShrink: 0 }}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 700, marginBottom: '0.4rem' }}>{label}</div>
                      {lines.map(l => <div key={l} style={{ fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: 1.7 }}>{l}</div>)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div style={{ marginTop: '3rem', borderRadius: '1.5rem', overflow: 'hidden', height: '200px', background: 'var(--cream)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '0.75rem' }}>
                <MapPin size={28} style={{ color: 'var(--maroon)' }} />
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 300 }}>Serving Jammu & New Delhi, India</span>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div variants={revealUp}
              style={{ background: 'var(--cream)', borderRadius: '2rem', padding: '3.5rem', border: '1px solid var(--border)' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', color: 'var(--text-main)', marginBottom: '0.75rem' }}>Send an Enquiry</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '2.5rem', fontWeight: 300 }}>Fill in the form and our team will get back to you within 24 hours.</p>

              <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  {[
                    { id: 'name', label: 'Full Name *', type: 'text', placeholder: 'Your name' },
                    { id: 'phone', label: 'Phone *', type: 'tel', placeholder: '+91 XXXXX XXXXX' },
                  ].map(f => (
                    <div key={f.id}>
                      <label style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-main)', fontWeight: 700, display: 'block', marginBottom: '0.5rem' }}>{f.label}</label>
                      <input type={f.type} placeholder={f.placeholder} value={form[f.id as keyof typeof form]}
                        onChange={set(f.id)}
                        style={{ width: '100%', padding: '0.85rem 1rem', border: '1px solid var(--border)', borderRadius: '0.75rem', background: '#FFFFFF', fontSize: '0.9rem', color: 'var(--text-main)', outline: 'none', boxSizing: 'border-box' }} />
                    </div>
                  ))}
                </div>

                {[
                  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
                ].map(f => (
                  <div key={f.id}>
                    <label style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-main)', fontWeight: 700, display: 'block', marginBottom: '0.5rem' }}>{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder} value={form[f.id as keyof typeof form]}
                      onChange={set(f.id)}
                      style={{ width: '100%', padding: '0.85rem 1rem', border: '1px solid var(--border)', borderRadius: '0.75rem', background: '#FFFFFF', fontSize: '0.9rem', color: 'var(--text-main)', outline: 'none', boxSizing: 'border-box' }} />
                  </div>
                ))}

                <div>
                  <label style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-main)', fontWeight: 700, display: 'block', marginBottom: '0.5rem' }}>Subject</label>
                  <select value={form.subject} onChange={set('subject')}
                    style={{ width: '100%', padding: '0.85rem 1rem', border: '1px solid var(--border)', borderRadius: '0.75rem', background: '#FFFFFF', fontSize: '0.9rem', color: 'var(--text-main)', outline: 'none' }}>
                    <option value="">Select a subject</option>
                    {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-main)', fontWeight: 700, display: 'block', marginBottom: '0.5rem' }}>Your Message *</label>
                  <textarea rows={5} placeholder="Tell us how we can help..." value={form.message} onChange={set('message')}
                    style={{ width: '100%', padding: '0.85rem 1rem', border: '1px solid var(--border)', borderRadius: '0.75rem', background: '#FFFFFF', fontSize: '0.9rem', color: 'var(--text-main)', outline: 'none', resize: 'vertical', boxSizing: 'border-box', fontFamily: 'inherit' }} />
                </div>

                <button type="submit" className="btn-primary" style={{ padding: '1.1rem', borderRadius: '0.75rem', justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '0.5rem', width: '100%' }}>
                  Send Message <ArrowRight size={15} />
                </button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
