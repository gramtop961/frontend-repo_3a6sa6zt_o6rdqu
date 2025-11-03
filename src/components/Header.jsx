import { useEffect, useState, useCallback } from 'react';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const smoothScroll = useCallback((e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const headerOffset = 80;
    const rect = el.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const target = rect.top + scrollTop - headerOffset;
    window.scrollTo({ top: target, behavior: 'smooth' });
    setOpen(false);
  }, []);

  const navItem = (id, label) => (
    <a
      href={`#${id}`}
      onClick={(e) => smoothScroll(e, id)}
      className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
    >
      {label}
    </a>
  );

  return (
    <header
      className={`${scrolled ? 'backdrop-blur-xl bg-white/70 shadow-sm' : 'bg-transparent'} fixed top-0 inset-x-0 z-50 transition-colors`}
      aria-label="Główna nawigacja"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#top" onClick={(e)=>smoothScroll(e,'top')} className="group flex items-center gap-2">
            <div className="relative h-8 w-8">
              <span className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600" aria-hidden="true" />
              <span className="absolute inset-0 rounded-lg bg-white/20" aria-hidden="true" />
            </div>
            <span className="font-semibold tracking-tight text-slate-900">Yieldo</span>
            <span className="sr-only">Powrót na początek</span>
          </a>

          <nav className="hidden md:flex items-center gap-1" role="navigation">
            {navItem('features','Funkcje')}
            {navItem('pricing','Cennik')}
            {navItem('faq','FAQ')}
            {navItem('contact','Kontakt')}
          </nav>

          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e)=>smoothScroll(e,'contact')}
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-2 text-sm font-semibold text-white shadow hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Wypróbuj za darmo
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="Otwórz menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path d="M3.75 5.25h16.5v1.5H3.75v-1.5ZM3.75 11.25h16.5v1.5H3.75v-1.5ZM3.75 17.25h16.5v1.5H3.75v-1.5Z"/></svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white/90 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-2">
            {navItem('features','Funkcje')}
            {navItem('pricing','Cennik')}
            {navItem('faq','FAQ')}
            {navItem('contact','Kontakt')}
            <a
              href="#contact"
              onClick={(e)=>smoothScroll(e,'contact')}
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-2 text-sm font-semibold text-white shadow"
            >
              Wypróbuj za darmo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
