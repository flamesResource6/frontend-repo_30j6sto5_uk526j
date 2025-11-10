import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkBase = 'text-gray-700 hover:text-blue-600 transition-colors';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur bg-white/70 shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-gray-900 text-lg">My Portfolio</a>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 focus:outline-none"
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className={linkBase}>Home</a>
          <a href="#about" className={linkBase}>About</a>
          <a href="#projects" className={linkBase}>Projects</a>
          <a href="#contact" className={linkBase}>Contact</a>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="mx-auto max-w-6xl px-4 py-3 space-y-2">
            <a href="#home" className={linkBase} onClick={() => setIsOpen(false)}>Home</a>
            <div/>
            <a href="#about" className={linkBase} onClick={() => setIsOpen(false)}>About</a>
            <div/>
            <a href="#projects" className={linkBase} onClick={() => setIsOpen(false)}>Projects</a>
            <div/>
            <a href="#contact" className={linkBase} onClick={() => setIsOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
