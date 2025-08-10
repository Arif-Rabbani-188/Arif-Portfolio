import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Component/Navbar';
import Banner from './Component/Banner';
import Skills from './Component/Skills';
import Projects from './Component/Projects';
import SendMail from './Component/SendMail';
import Footer from './Component/Footer';
import Education from './Component/Education';
import AboutMe from './Component/AboutMe';
import ProjectDetail from './Pages/ProjectDetail';
import EducationDetail from './Pages/EducationDetail';

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <AboutMe />
      <Skills />
      <Projects />
      <Education />
      <SendMail />
      <Footer />
    </>
  );
}

export default function App() {
  // Scroll to hash target on route + hash changes
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return true;
        }
        return false;
      };
      if (!tryScroll()) {
        setTimeout(tryScroll, 60);
      }
    } else {
      // No hash: ensure new route (e.g., detail page) starts at top
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
    }
  }, [location.pathname, location.hash]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
  <Route path="/projects/:slug" element={<ProjectDetail />} />
  <Route path="/education/:slug" element={<EducationDetail />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
