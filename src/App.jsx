import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-inter">
      <Navbar />
      <main>
        <div className="reveal opacity-0 translate-y-6 transition-all duration-700 ease-out">
          <Hero />
        </div>
        <div className="reveal opacity-0 translate-y-6 transition-all duration-700 ease-out">
          <About />
        </div>
        <div className="reveal opacity-0 translate-y-6 transition-all duration-700 ease-out">
          <Projects />
        </div>
        <div className="reveal opacity-0 translate-y-6 transition-all duration-700 ease-out">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
