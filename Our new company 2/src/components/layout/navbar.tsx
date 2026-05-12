import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="nav-brand" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem' }}>
          <img src="/logo.svg" alt="Trinity Vaastu Logo" style={{ width: '40px', height: '40px' }} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span className="nav-brand-name">Trinity Vaastu</span>
            <span className="nav-brand-tagline">Science • Energy • Dharma</span>
          </div>
        </Link>
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
        <Link to="/login" className="btn-outline nav-cta">Login / Sign up</Link>
      </div>
    </nav>
  );
}
