import { motion } from 'framer-motion';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import SolutionsGrid from '../components/sections/SolutionsGrid';
import TrustSection from '../components/sections/TrustSection';
import EnquiryForm from '../components/sections/EnquiryForm';

export default function Home() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <HeroSection />

      {/* ── MARQUEE ── */}
      <div className="marquee-band">
        <motion.div className="marquee-track"
          animate={{ x: ['0%', '-50%'] }} transition={{ repeat: Infinity, ease: 'linear' as const, duration: 22 }}>
          {['Vaastu', 'Astrology', 'Numerology', 'Healing', 'Tarot', 'Business', 'Relationships', 'Energy Balance',
            'Vaastu', 'Astrology', 'Numerology', 'Healing', 'Tarot', 'Business', 'Relationships', 'Energy Balance'].map((w, i) => (
            <span key={i} className="marquee-item">
              <span className="marquee-word">{w}</span>
              <span className="marquee-dot" />
            </span>
          ))}
        </motion.div>
      </div>

      <AboutSection />
      <TestimonialsSection />
      <SolutionsGrid />
      <TrustSection />
      <EnquiryForm />
    </div>
  );
}
