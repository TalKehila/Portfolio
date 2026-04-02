import { useState, useEffect } from "react";
import { Navbar, Container } from "react-bootstrap";
import "./NavBar.css";
import lap from '../assets/img/i.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import git from '../assets/img/git4.svg'
import {
  BrowserRouter as Router
} from "react-router-dom";

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'work', label: 'Work Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'connect', label: 'Contact' },
];

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const viewportCenter = window.innerHeight / 2;
      let bestId = 'home';
      let bestDistance = Number.POSITIVE_INFINITY;

      navItems.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (!section) {
          return;
        }

        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);

        if (distance < bestDistance) {
          bestDistance = distance;
          bestId = id;
        }
      });

      setActiveLink((prev) => (prev === bestId ? prev : bestId));
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    const section = document.getElementById(value);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', `#${value}`);
    }
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={lap} alt="logo" />
          </Navbar.Brand>
          <div className="navbar-inline-content">
            <div className="main-nav-buttons" role="navigation" aria-label="Main navigation">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={activeLink === item.id ? 'active nav-link navbar-link nav-pill-btn' : 'nav-link navbar-link nav-pill-btn'}
                  onClick={(e) => {
                    e.preventDefault();
                    onUpdateActiveLink(item.id);
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="social-icon navbar-social">
              <a href="https://www.linkedin.com/in/tal-kehila-581166232/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://github.com/TalKehila" target="_blank" rel="noopener noreferrer"><img src={git} alt="GitHub" /></a>
            </div>
          </div>
        </Container>
      </Navbar>
    </Router>
  )
}
