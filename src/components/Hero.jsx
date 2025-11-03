import Spline from '@splinetool/react-spline';

function Hero() {
  const onCTAClick = (e, id) => {
    e.preventDefault();
    const headerOffset = 80;
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <section id="top" className="relative pt-28 sm:pt-32">
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -right-16 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/60 px-3 py-1 text-xs font-medium text-blue-700 backdrop-blur">
            Wirtualna recepcjonistka • 24/7
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            Yieldo — inteligentna obsługa połączeń, która nigdy nie śpi
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Odbieraj, kwalifikuj i rezerwuj wizyty automatycznie. Naturalny głos, wysoka jakość, pełna kontrola.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              onClick={(e)=>onCTAClick(e,'contact')}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white font-semibold shadow hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
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
            <span>Dołącz do setek firm oszczędzających czas</span>
          </div>
        </div>

        <div className="relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-xl overflow-hidden ring-1 ring-slate-200/60 bg-white/50 backdrop-blur">
          <Spline scene="https://prod.spline.design/igThmltzmqv5hkWo/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
