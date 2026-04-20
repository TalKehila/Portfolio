import { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { WorkExperience } from "./components/WorkExperience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ScrollTopButton } from "./components/ScrollTopButton";
import { CursorAura } from "./components/CursorAura";
import { OrbsBackground } from "./components/OrbsBackground";
import { ScrollProgress } from "./components/ScrollProgress";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: 'ease-out-cubic',
      offset: 60,
    });
  }, []);

  return (
    <div className="App">
      <OrbsBackground />
      <ScrollProgress />
      <CursorAura />
      <NavBar />
      <Banner />
      <Skills />
      <WorkExperience />
      <Projects />
      <Contact />
      <Footer />
      <ScrollTopButton />
    </div>
  );
}

export default App;
