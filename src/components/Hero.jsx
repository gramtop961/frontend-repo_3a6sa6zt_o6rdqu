import { useCallback } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

function Hero() {
  const onCTAClick = useCallback((e, id) => {
    e.preventDefault();
    const headerOffset = 80;
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }, []);

  return (
    <section id="top" className="relative pt-28 sm:pt-32">
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="pointer-events-none absolute left-[-8%] top-[-10%] h-96 w-96 rounded-full bg-blue-500/25 blur-3xl" />
        <div className="pointer-events-none absolute right-[-6%] top-[20%] h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/60 px-3 py-1 text-xs font-medium text-blue-700 backdrop-blur">
            Wirtualna recepcjonistka • 24/7
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            Yieldo — asystent głosowy, który sprzedaje, rezerwuje i wspiera
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Inteligentna obsługa połączeń z naturalnym głosem. Zero nieodebranych leadów, pełna kontrola jakości i analityki.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              onClick={(e)=>onCTAClick(e,'contact')}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-5 py-3 text-white font-semibold shadow hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Zamów prezentację
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <a
              href="#features"
              onClick={(e)=>onCTAClick(e,'features')}
              className="inline-flex items-center justify-center rounded-lg px-5 py-3 font-semibold text-blue-700 ring-1 ring-blue-200 hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Zobacz możliwości
            </a>
          </div>
          <div className="mt-6 flex items-center gap-3 text-sm text-slate-500">
            <div className="flex -space-x-2">
              <img src="https://i.pravatar.cc/40?img=1" alt="Klient" className="h-8 w-8 rounded-full ring-2 ring-white" loading="lazy" />
              <img src="https://i.pravatar.cc/40?img=2" alt="Klient" className="h-8 w-8 rounded-full ring-2 ring-white" loading="lazy" />
              <img src="https://i.pravatar.cc/40?img=3" alt="Klient" className="h-8 w-8 rounded-full ring-2 ring-white" loading="lazy" />
            </div>
            <span>Setki firm oszczędzają z Yieldo czas i pieniądze</span>
          </div>
        </motion.div>

        {/* Spline in a glass card */}
        <motion.div
          className="relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-2xl overflow-hidden border border-slate-200/70 bg-white/50 backdrop-blur"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          <Spline scene="https://prod.spline.design/igThmltzmqv5hkWo/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/25 via-transparent to-transparent" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
