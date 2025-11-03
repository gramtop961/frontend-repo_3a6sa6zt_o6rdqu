import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const handleScrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      const headerOffset = 72;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-white">
      {/* Background blue flares */}
      <style>{`
        @keyframes drift { 0% { transform: translate(0,0) scale(1);} 50% { transform: translate(10px, -10px) scale(1.06);} 100% { transform: translate(0,0) scale(1);} }
        @keyframes pulseSoft { 0% { opacity: .3;} 50% { opacity: .5;} 100% { opacity: .3;} }
        .flare { filter: blur(80px); animation: drift 12s ease-in-out infinite, pulseSoft 8s ease-in-out infinite; }
      `}</style>
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="flare absolute top-10 -left-24 w-[500px] h-[500px] rounded-full" style={{background: 'radial-gradient(circle, rgba(96,165,250,0.4) 20%, rgba(96,165,250,0) 70%)'}} />
        <div className="flare absolute bottom-10 right-10 w-[600px] h-[600px] rounded-full" style={{background: 'radial-gradient(circle, rgba(96,165,250,0.35) 20%, rgba(96,165,250,0) 70%)'}} />
        <div className="flare absolute top-1/3 right-1/3 w-[400px] h-[400px] rounded-full" style={{background: 'radial-gradient(circle, rgba(96,165,250,0.3) 20%, rgba(96,165,250,0) 70%)'}} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-12 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-800">
            Recepcjonistka, która nigdy nie śpi
          </h1>
          <p className="text-lg md:text-xl text-slate-600">
            AI odbiera telefony 24/7, umawia wizyty i odpowiada na pytania klientów. Żadnych nieodebranych połączeń. Żadnych straconych klientów.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button onClick={() => handleScrollTo('#kontakt')} className="rounded-md bg-blue-900 text-white px-6 py-3 font-semibold shadow hover:scale-[1.05] hover:bg-blue-800 transition">
              Umów demo
            </button>
            <button onClick={() => handleScrollTo('#jak-to-dziala')} className="rounded-md border border-blue-500 text-blue-700 px-6 py-3 font-semibold hover:bg-blue-50 hover:scale-[1.05] transition">
              Zobacz jak działa
            </button>
          </div>
        </motion.div>

        {/* Phone mockup */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="relative flex justify-center md:justify-end"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[280px] h-[560px] rounded-[36px] bg-slate-900 p-3 shadow-2xl"
          >
            <div className="w-full h-full rounded-[28px] bg-white relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-10 bg-white/70 backdrop-blur flex items-center justify-center text-xs text-slate-500">10:24 • 5G</div>
              <div className="p-6 pt-14 space-y-4">
                <div className="text-center">
                  <div className="text-slate-500 text-sm">Połączenie przychodzące</div>
                  <div className="text-slate-800 text-2xl font-semibold">Salon Piękności</div>
                </div>
                <div className="mx-auto w-28 h-28 rounded-full bg-gradient-to-br from-blue-400 to-blue-600" />
                <div className="grid grid-cols-2 gap-4 pt-6">
                  <button className="rounded-full py-3 bg-red-500 text-white font-medium">Odrzuć</button>
                  <button className="rounded-full py-3 bg-green-500 text-white font-medium">Odbierz</button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
