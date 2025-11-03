import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Jak to działa', href: '#jak-to-dziala' },
  { label: 'Funkcje', href: '#funkcje' },
  { label: 'Cennik', href: '#cennik' },
  { label: 'FAQ', href: '#faq' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSmoothLink = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const headerOffset = 72; // header height offset
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur border-b border-blue-200 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2" onClick={(e)=>handleSmoothLink(e,'#top')}>
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-600 to-blue-800" />
          <span className="font-semibold text-slate-800">Yieldo Wirtualna Recepcjonistka</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleSmoothLink(e, item.href)}
              className="text-slate-700 hover:text-blue-700 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#kontakt"
            onClick={(e) => handleSmoothLink(e, '#kontakt')}
            className="inline-flex items-center rounded-md bg-blue-900 text-white px-4 py-2 text-sm font-medium shadow hover:scale-[1.03] hover:bg-blue-800 transition-transform"
          >
            Umów demo
          </a>
        </div>
      </div>
    </motion.header>
  );
}
