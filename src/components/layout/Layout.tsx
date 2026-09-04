import { useState, type ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, GraduationCap, Menu, X } from 'lucide-react';
import { navigation } from '../../constants/site';

export function Layout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <div className="topbar">
        <div>Welcome to MySchool — Inspiring minds, shaping futures.</div>
        <div className="toplinks">📞 +91 1800 000 000 · ✉️ info@myschool.edu</div>
      </div>
      <header className="header">
        <Link to="/" className="brand" onClick={() => setOpen(false)} aria-label="MySchool home">
          <span className="brandmark"><GraduationCap size={28} /></span>
          <span><b>MySchool</b><small>Excellence in Education</small></span>
        </Link>
        <button className="menu" onClick={() => setOpen(value => !value)} aria-expanded={open} aria-controls="main-navigation" aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
        <nav id="main-navigation" className={open ? 'nav open' : 'nav'} aria-label="Main navigation">
          {navigation.map(item => (
            <Link key={item.path} className={location.pathname === item.path ? 'active' : ''} to={item.path} onClick={() => setOpen(false)}>{item.label}</Link>
          ))}
          <Link className="apply" to="/admissions" onClick={() => setOpen(false)}>Apply Now <ArrowRight size={16} /></Link>
        </nav>
      </header>
      {children}
      <footer>
        <div className="footergrid">
          <div>
            <div className="brand footerbrand"><span className="brandmark"><GraduationCap size={28} /></span><span><b>MySchool</b><small>Excellence in Education</small></span></div>
            <p>A welcoming school community where curiosity, character and confidence grow together.</p>
          </div>
          <div><h4>Explore</h4><Link to="/about">About School</Link><Link to="/academics">Academics</Link><Link to="/admissions">Admissions</Link></div>
          <div><h4>Quick Links</h4><Link to="/notices">Notices</Link><Link to="/events">Events</Link><Link to="/gallery">Gallery</Link></div>
          <div><h4>Contact</h4><p>123 Education Road<br />Your City, India</p><p>+91 1800 000 000<br />info@myschool.edu</p></div>
        </div>
        <div className="copyright">© {new Date().getFullYear()} MySchool. All rights reserved.</div>
      </footer>
    </>
  );
}
