import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Lock, Mail } from 'lucide-react';

const revealUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function Login() {
  return (
    <div className="split-page">
      {/* Floating Brand Ornament */}
      <div className="auth-ornament">
        <Link to="/" className="nav-brand">
          <span className="nav-brand-name" style={{ color: 'var(--maroon)' }}>Trinity Vaastu</span>
          <span className="nav-brand-tagline">Science • Energy • Dharma</span>
        </Link>
      </div>

      <div className="split-content">
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={stagger} 
          className="glass-card"
          style={{ maxWidth: '520px', width: '100%', margin: '0 auto' }}
        >
          <motion.div variants={revealUp} style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
            <span className="label">Access the Sanctuary</span>
            <h1 style={{ 
              fontFamily: 'var(--font-serif)', 
              fontSize: 'clamp(2rem, 3vw, 2.75rem)', 
              color: 'var(--text-main)', 
              marginTop: '1rem',
              lineHeight: 1.1 
            }}>
              Welcome Back to <em style={{ color: 'var(--gold)' }}>Trinity</em>
            </h1>
          </motion.div>
          
          <motion.form variants={revealUp} onSubmit={(e) => e.preventDefault()}>
            <div className="premium-input-group">
              <label className="premium-label">Email Address</label>
              <div style={{ position: 'relative' }}>
                <Mail size={16} style={{ position: 'absolute', left: '1.5rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input 
                  type="email" 
                  className="premium-input" 
                  placeholder="your@email.com" 
                  style={{ paddingLeft: '3.5rem', width: '100%' }}
                />
              </div>
            </div>

            <div className="premium-input-group">
              <label className="premium-label" style={{ display: 'flex', justifyContent: 'space-between' }}>
                Password
                <Link to="/forgot-password" style={{ color: 'var(--gold)', textTransform: 'none', letterSpacing: 'normal', fontSize: '0.7rem' }}>Forgot?</Link>
              </label>
              <div style={{ position: 'relative' }}>
                <Lock size={16} style={{ position: 'absolute', left: '1.5rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input 
                  type="password" 
                  className="premium-input" 
                  placeholder="••••••••" 
                  style={{ paddingLeft: '3.5rem', width: '100%' }}
                />
              </div>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary" 
              style={{ width: '100%', marginTop: '1rem', borderRadius: '100px', padding: '1.1rem' }} 
              type="submit"
            >
              Sign In to Dashboard <ArrowRight size={18} />
            </motion.button>
            
            <p style={{ marginTop: '2.5rem', fontSize: '0.85rem', color: 'var(--text-muted)', textAlign: 'center' }}>
              New to Trinity? <Link to="/contact" style={{ color: 'var(--maroon)', fontWeight: 700 }}>Request Access</Link>
            </p>
          </motion.form>
        </motion.div>
      </div>
      
      <div className="split-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop)' }}>
        {/* Subtle overlay elements */}
        <div style={{ 
          position: 'absolute', 
          bottom: '4rem', 
          left: '4rem', 
          color: 'var(--white)',
          maxWidth: '400px'
        }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>The Geometry of Peace</h3>
            <p style={{ fontSize: '0.9rem', fontWeight: 300, opacity: 0.8, lineHeight: 1.6 }}>
              "Your environment is a reflection of your internal state. Align the outer, and the inner follows."
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
