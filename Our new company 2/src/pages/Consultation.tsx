import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MapPin, Video, Car, CheckCircle } from 'lucide-react';

const revealUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut' as const } },
};
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

const types = [
  {
    id: 'online',
    icon: Video,
    title: 'Online Consultation',
    subtitle: 'Via Zoom / Google Meet',
    desc: 'A detailed one-on-one session over video call. Share your floor plan and birth details in advance. Get personalised analysis of your Vaastu, kundali, and numerology from wherever you are.',
    duration: '60–90 Minutes',
    includes: [
      'Detailed Vaastu analysis of your space',
      'Kundali and numerology assessment',
      'Personalised remedy plan',
      'Written summary shared post-session',
      'Follow-up Q&A support',
    ],
  },
  {
    id: 'sitevisit',
    icon: Car,
    title: 'Site Visit Consultation',
    subtitle: 'At Your Location',
    desc: 'Saarthi Sahil Jain visits your home, office or plot in person for a comprehensive on-ground Vaastu assessment. Ideal for new constructions, renovations, and complex energy blockages.',
    duration: '2–4 Hours',
    includes: [
      'Physical site inspection and mapping',
      'Zone-by-zone Vaastu analysis',
      'Energy field assessment',
      'On-site remedy suggestions',
      'Detailed written report',
    ],
  },
];

const faqs = [
  { q: 'What information do I need to provide?', a: 'For online consultation: date of birth, time of birth, current city, and photos or floor plan of your space. For site visit: just your address and preferred date.' },
  { q: 'How long does it take to see results?', a: 'Most clients report perceptible shifts within 21–45 days of implementing remedies. Deeper structural changes may take 3–6 months.' },
  { q: 'Are the remedies expensive or structural?', a: 'Most remedies are non-structural — colours, directions, element placements, and energy tools. Structural changes are only suggested when absolutely necessary.' },
  { q: 'Can I consult from outside India?', a: 'Yes. Online consultations are available for clients anywhere in the world. The analysis is equally detailed and personalised.' },
  { q: 'Is one session enough?', a: 'Usually yes. The remedy plan is comprehensive. Follow-up sessions are available if needed at no additional pressure.' },
];

export default function Consultation() {
  const [activeType, setActiveType] = useState<'online' | 'sitevisit'>('online');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', dob: '', city: '', message: '', type: 'online',
  });

  const active = types.find(t => t.id === activeType)!;

  return (
    <div className="page-wrapper" style={{ background: '#FFFFFF' }}>

      {/* ── HERO ── */}
      <section style={{ background: 'var(--cream)', paddingTop: '10rem', paddingBottom: '7rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 80% 40%, rgba(200,150,27,0.06) 0%, transparent 60%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '750px', margin: '0 auto' }}>
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={revealUp} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
              <span className="label" style={{ color: 'var(--gold)' }}>BOOK A SESSION</span>
              <span className="gold-line" />
            </motion.div>
            <motion.h1 variants={revealUp} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem,6vw,5rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Personal <em style={{ color: 'var(--maroon)' }}>Consultation</em>
            </motion.h1>
            <motion.p variants={revealUp} style={{ color: 'var(--text-muted)', fontSize: '1.1rem', fontWeight: 300, lineHeight: 1.9 }}>
              A one-on-one session with Saarthi Sahil Jain — personally analysed, precisely prescribed, and deeply transformative.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── TYPE SELECTOR + DETAILS ── */}
      <section className="section">
        <div className="container">
          {/* Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '4rem' }}>
            {types.map(t => (
              <button
                key={t.id}
                onClick={() => setActiveType(t.id as 'online' | 'sitevisit')}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                  padding: '1rem 2.5rem', borderRadius: '100px',
                  border: `1.5px solid ${activeType === t.id ? 'var(--maroon)' : 'var(--border)'}`,
                  background: activeType === t.id ? 'var(--maroon)' : 'transparent',
                  color: activeType === t.id ? '#fff' : 'var(--text-muted)',
                  cursor: 'pointer', fontWeight: 600, fontSize: '0.9rem',
                  transition: 'all 0.3s ease',
                }}>
                <t.icon size={16} />
                {t.title}
              </button>
            ))}
          </div>

          {/* Main content */}
          <motion.div
            key={activeType}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }}>

            {/* Left: Info */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'rgba(139,26,26,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--maroon)' }}>
                  <active.icon size={22} />
                </div>
                <div>
                  <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--text-main)', lineHeight: 1 }}>{active.title}</h2>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.25rem' }}>{active.subtitle}</p>
                </div>
              </div>

              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: 300, lineHeight: 1.9, marginBottom: '2rem' }}>{active.desc}</p>

              <div style={{ background: 'var(--cream)', borderRadius: '1rem', padding: '2rem', marginBottom: '2rem' }}>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 700, marginBottom: '0.5rem' }}>Duration</div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--text-main)' }}>{active.duration}</div>
              </div>

              <h4 style={{ fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-main)', fontWeight: 700, marginBottom: '1.25rem' }}>What's Included</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                {active.includes.map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--text-muted)', fontWeight: 300 }}>
                    <CheckCircle size={16} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '0.15rem' }} />
                    {item}
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {[{ icon: Phone, text: '+91-9999051719' }, { icon: Mail, text: 'info@trinityvaastu.com' }].map(({ icon: Icon, text }) => (
                  <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    <Icon size={14} style={{ color: 'var(--gold)' }} /> {text}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div style={{ background: 'var(--cream)', borderRadius: '2rem', padding: '3rem', border: '1px solid var(--border)' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--text-main)', marginBottom: '0.75rem' }}>Book Your Session</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '2rem', fontWeight: 300 }}>Fill in your details and we'll reach out to confirm your appointment.</p>

              <form
                onSubmit={(e) => e.preventDefault()}
                style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { id: 'name', label: 'Full Name *', type: 'text', placeholder: 'Your full name' },
                  { id: 'phone', label: 'Phone Number *', type: 'tel', placeholder: '+91 XXXXX XXXXX' },
                  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
                  { id: 'dob', label: 'Date of Birth *', type: 'date', placeholder: '' },
                  { id: 'city', label: 'City / Location', type: 'text', placeholder: 'Your city' },
                ].map(field => (
                  <div key={field.id}>
                    <label style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-main)', fontWeight: 700, display: 'block', marginBottom: '0.5rem' }}>{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.id as keyof typeof formData]}
                      onChange={e => setFormData(prev => ({ ...prev, [field.id]: e.target.value }))}
                      style={{ width: '100%', padding: '0.9rem 1.2rem', border: '1px solid var(--border)', borderRadius: '0.75rem', background: '#FFFFFF', fontSize: '0.95rem', color: 'var(--text-main)', outline: 'none', boxSizing: 'border-box' }}
                    />
                  </div>
                ))}

                <div>
                  <label style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-main)', fontWeight: 700, display: 'block', marginBottom: '0.5rem' }}>Consultation Type</label>
                  <select
                    value={formData.type}
                    onChange={e => { setFormData(prev => ({ ...prev, type: e.target.value })); setActiveType(e.target.value as 'online' | 'sitevisit'); }}
                    style={{ width: '100%', padding: '0.9rem 1.2rem', border: '1px solid var(--border)', borderRadius: '0.75rem', background: '#FFFFFF', fontSize: '0.95rem', color: 'var(--text-main)', outline: 'none' }}>
                    <option value="online">Online Consultation</option>
                    <option value="sitevisit">Site Visit</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-main)', fontWeight: 700, display: 'block', marginBottom: '0.5rem' }}>Your Message / Concern</label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe the challenge or area you need guidance on..."
                    value={formData.message}
                    onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    style={{ width: '100%', padding: '0.9rem 1.2rem', border: '1px solid var(--border)', borderRadius: '0.75rem', background: '#FFFFFF', fontSize: '0.95rem', color: 'var(--text-main)', outline: 'none', resize: 'vertical', boxSizing: 'border-box', fontFamily: 'inherit' }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ padding: '1.1rem', borderRadius: '0.75rem', justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '0.5rem', width: '100%' }}>
                  Request Consultation <ArrowRight size={15} />
                </button>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', fontWeight: 300 }}>We'll contact you within 24 hours to confirm your appointment.</p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container" style={{ maxWidth: '780px', margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <motion.div variants={revealUp}>
              <span className="label">Common Questions</span>
              <h2 className="section-title" style={{ marginTop: '1rem' }}>Frequently <em>Asked</em></h2>
            </motion.div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={revealUp}
                style={{ borderTop: '1px solid var(--border)', padding: '1.75rem 0' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '1rem' }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--text-main)' }}>{faq.q}</span>
                  <span style={{ fontSize: '1.5rem', color: 'var(--gold)', flexShrink: 0, transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s ease' }}>+</span>
                </button>
                {openFaq === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: 300, lineHeight: 1.8, marginTop: '1rem', paddingRight: '2rem' }}>
                    {faq.a}
                  </motion.p>
                )}
              </motion.div>
            ))}
            <div style={{ borderTop: '1px solid var(--border)' }} />
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT STRIP ── */}
      <section style={{ background: 'var(--maroon)', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', color: '#fff', marginBottom: '0.5rem' }}>Have Questions?</h3>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', fontWeight: 300 }}>Reach out before booking your consultation.</p>
            </div>
            {[{ icon: Phone, text: '+91-9999051719 / +91-9419190432' }, { icon: MapPin, text: 'Jammu & New Delhi, India' }].map(({ icon: Icon, text }) => (
              <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)', flexShrink: 0 }}>
                  <Icon size={16} />
                </div>
                <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
