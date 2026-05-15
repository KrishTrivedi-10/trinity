import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Courses', path: '/courses' },
    { name: 'Learn', path: '/learn' },
    { name: 'Events', path: '/events' },
    { name: 'Media', path: '/videos' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blogs', path: '/blog' },
    { name: 'Quotes', path: '/quotes' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Consultation', path: '/consultation' },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <Link to="/" className="nav-brand" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.75rem' }}>
            <img src="/logo.svg" alt="Trinity Vaastu Logo" style={{ width: '36px', height: '36px' }} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span className="nav-brand-name">Trinity Vaastu</span>
              <span className="nav-brand-tagline">Science • Energy • Dharma</span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="nav-links">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={location.pathname === link.path ? 'active' : ''}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link to="/login" className="btn-outline nav-cta">Login / Sign up</Link>

          {/* Hamburger — mobile only */}
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`mobile-nav-drawer ${menuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={location.pathname === link.path ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </Link>
          ))}
        </nav>
        <Link to="/login" className="mobile-nav-cta" onClick={() => setMenuOpen(false)}>
          Login / Sign up
        </Link>
      </div>
    </>
  );
}