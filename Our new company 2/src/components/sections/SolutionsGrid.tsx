import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Compass, Gem } from 'lucide-react';

const services = [
  {
    title: 'Education',
    icon: BookOpen,
    tag: 'Courses & Learning',
    path: '/courses',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1200&auto=format&fit=crop',
    desc: 'Structured study in Vaastu, numerology, tarot and sacred sciences with clear, practical foundations.',
  },
  {
    title: 'Guidance',
    icon: Compass,
    tag: 'Personal Consultation',
    path: '/consultation',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
    desc: 'One-to-one direction for homes, businesses, relationships, career decisions and energetic blocks.',
  },
  {
    title: 'Solution',
    icon: Gem,
    tag: 'Remedies & Alignment',
    path: '/services',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop',
    desc: 'Precise remedies and space corrections designed for your unique life pattern and environment.',
  },
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
    <section className="section pathway-section">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={revealUp} className="pathway-heading">
            <div className="pathway-copy">
              <div className="section-eyebrow">
                <span className="label">The Trinity Path</span>
                <span className="gold-rule" />
              </div>
              <p className="section-sub">Three focused ways to enter the work, whether you want knowledge, direction, or a practical remedy.</p>
            </div>
            <div className="pathway-title-wrap">
              <h2 className="section-title">Learn. Align. <em>Transform.</em></h2>
            </div>
          </motion.div>

          <motion.div variants={stagger} className="solutions-grid">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div
                  key={svc.title}
                  variants={revealUp}
                  className={`solution-card ${i === 0 ? 'solution-card-featured' : 'solution-card-compact'}`}
                >
                  <div className="solution-image">
                    <img src={svc.image} alt={svc.title} />
                    <span>{String(i + 1).padStart(2, '0')}</span>
                    <div className="solution-image-label">{svc.tag}</div>
                  </div>
                  <div className="solution-body">
                    <div className="solution-meta-row">
                      <div className="solution-icon">
                        <Icon size={20} />
                      </div>
                      <div className="solution-tag">{svc.tag}</div>
                    </div>
                    <div className="solution-title">{svc.title}</div>
                    <p>{svc.desc}</p>
                    <Link to={svc.path} className="solution-link">
                      Explore <ArrowRight size={15} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div variants={revealUp} style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link to="/services" className="btn-outline">Explore All Solutions</Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
