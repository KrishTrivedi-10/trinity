import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/navbar';
import Footer from './components/layout/footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Courses from './pages/Courses';
import Consultation from './pages/Consultation';
import TestimonialsPage from './pages/TestimonialsPage';
import Videos from './pages/Videos';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Blog from './pages/Blog';
import Quotes from './pages/Quotes';
import CourseDetail from './pages/CourseDetail';
import Learn from './pages/Learn';
import Dashboard from './pages/Dashboard';
import BlogPost from './pages/BlogPost';
import Events from './pages/Events';
import Gallery from './pages/Gallery';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/learn/:id" element={<Learn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
      <Footer />
    </Router>
  );
}
