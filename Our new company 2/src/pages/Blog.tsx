import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const blogs = [
  {
    id: 7,
    date: '10 Jan 2024',
    title: 'BRAHMASTHAN IN VAASTU',
    desc: 'The central portion called the Brahmsthan was left open to receive the rays of the sun. Sunlight falling on the Navel represents your 7 Planets and the pure positive thoughts needed to destroy ego.',
    image: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 6,
    date: '10 Jan 2024',
    title: 'VAASTU SHASTRA AND MANASPUTRA',
    desc: 'Structure is not just four walls; it is the structure of your mind. Whether your thoughts are boundless or limited determines how you view your life and neighbor’s house as your own.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 5,
    date: '10 Jan 2024',
    title: 'IMPACT OF TOILET SEAT & REMEDIES',
    desc: 'Toilet activity is of disposal, flushing out toxins. If placed in the wrong zone like North, it flushes attributes of that zone. Balance it using colors wisely to avoid negative effects.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 4,
    date: '24 Sep 2023',
    title: 'SHOERACK: POSITION & PLACEMENT',
    desc: 'Entrances are the gateway of energy. Learn why shoeracks should never be placed in certain directions to avoid blocking wealth and health in your sanctuary.',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 3,
    date: '24 Sep 2023',
    title: 'DUSTBIN: THE DISPOSAL ZONE',
    desc: 'Disposal energy can either clean your life or drain your wealth. Learn the correct Vaastu zones for waste based on the SSW element for maximum prosperity.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 2,
    date: '20 Jul 2023',
    title: 'GEOPATHIC STRESS FACTORS',
    desc: 'Invisible earth energies caused by excess drilling, high-rise buildings, and underground tunnels that disrupt your home’s natural frequency and your inner peace.',
    image: 'https://images.unsplash.com/photo-1444491741275-3747c53c99b4?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 1,
    date: '28 Feb 2023',
    title: 'CURE OF DISEASE WITH VAASTU',
    desc: 'Every cell in your body responds to the space you live in. Discover how aligning your home can align your health and catalyze biological healing.',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2000&auto=format&fit=crop'
  }
];

const revealUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function Blog() {
  return (
    <div className="page-wrapper" style={{ background: 'var(--cream)', paddingBottom: '8rem' }}>
      {/* Bright Header Section */}
      <section style={{ background: '#FFFFFF', padding: '8rem 0 10rem', marginBottom: '4rem', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={stagger} style={{ textAlign: 'center' }}>
            <motion.div variants={revealUp} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
              <span className="label" style={{ color: 'var(--gold)', letterSpacing: '0.4em', fontWeight: 600 }}>KNOWLEDGE HUB</span>
              <span className="gold-line" />
            </motion.div>
            <motion.h1 variants={revealUp} style={{ fontSize: 'clamp(3.5rem, 7vw, 5.5rem)', color: 'var(--text-main)', marginBottom: '2rem', lineHeight: 1 }}>
              Insights & <em>Wisdom</em>
            </motion.h1>
            <motion.p variants={revealUp} style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto', fontWeight: 300, lineHeight: 1.9 }}>
              Deeply researched perspectives on the science of space, energy patterns, and conscious living.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '5rem 4rem' }}>
          {blogs.map((blog, i) => (
            <motion.div 
              key={blog.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
              className="elegant-card"
              style={{ 
                padding: 0, 
                overflow: 'hidden', 
                display: 'flex', 
                flexDirection: 'column', 
                borderRadius: '8px',
                background: '#FFFFFF',
                boxShadow: '0 10px 40px rgba(0,0,0,0.04)',
                border: '1px solid var(--border)'
              }}
            >
              <div style={{ height: '300px', overflow: 'hidden', position: 'relative' }}>
                <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 1s cubic-bezier(0.16, 1, 0.3, 1)' }} className="hover-zoom" />
                <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', background: '#FFFFFF', padding: '0.6rem 1.4rem', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.15em', color: 'var(--maroon)', boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }}>
                  {blog.date}
                </div>
              </div>
              <div style={{ padding: '3.5rem 2.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', lineHeight: 1.3, color: 'var(--text-main)', letterSpacing: '-0.01em' }}>{blog.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.8, fontWeight: 300, marginBottom: '3rem', flex: 1 }}>{blog.desc}</p>
                <a href="#" className="btn-ghost" style={{ alignSelf: 'flex-start', color: 'var(--gold)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em' }}>
                  EXPLORE INSIGHT <ArrowRight size={14} style={{ marginLeft: '0.75rem' }} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
