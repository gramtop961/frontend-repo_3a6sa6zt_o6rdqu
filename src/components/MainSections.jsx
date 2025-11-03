import React, { useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, X, Wallet, Frown, Calendar, Link as LinkIcon, Headphones, MessageSquare, Shield, Rocket, Tag, CheckCircle2, ChevronDown, Activity } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.1 * i, duration: 0.6 } }),
};

function BlueFlaresBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="flare absolute -top-10 left-10 w-[400px] h-[400px] rounded-full" style={{background: 'radial-gradient(circle, rgba(96,165,250,0.35) 20%, rgba(96,165,250,0) 70%)'}} />
      <div className="flare absolute bottom-0 right-10 w-[500px] h-[500px] rounded-full" style={{background: 'radial-gradient(circle, rgba(96,165,250,0.3) 20%, rgba(96,165,250,0) 70%)'}} />
      <div className="flare absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full" style={{background: 'radial-gradient(circle, rgba(96,165,250,0.25) 20%, rgba(96,165,250,0) 70%)'}} />
    </div>
  );
}

function SectionWrapper({ id, tinted = false, children }) {
  return (
    <section id={id} className={`relative py-20 ${tinted ? 'bg-[#F0F9FF]' : 'bg-white'}`}>
      <style>{`
        @keyframes drift { 0% { transform: translate(0,0) scale(1);} 50% { transform: translate(12px, -8px) scale(1.05);} 100% { transform: translate(0,0) scale(1);} }
        @keyframes pulseSoft { 0% { opacity: .3;} 50% { opacity: .5;} 100% { opacity: .3;} }
        .flare { filter: blur(80px); animation: drift 14s ease-in-out infinite, pulseSoft 10s ease-in-out infinite; }
      `}</style>
      {!tinted && <BlueFlaresBackdrop />}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

export default function MainSections() {
  return (
    <div>
      <SocialProof />
      <Problem />
      <Solution />
      <HowItWorks />
      <Features />
      <Pricing />
      <RoiCalculator />
      <FAQ />
      <ContactCTA />
    </div>
  );
}

function SocialProof() {
  return (
    <SectionWrapper tinted>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col items-center text-center gap-6"
      >
        <motion.p variants={fadeUp} className="text-slate-700">Zaufały nam salony w całej Polsce</motion.p>
        <div className="flex flex-wrap items-center justify-center gap-10 opacity-80">
          {['Salon Lumi','Klinika Derma','AutoPro','Viva Beauty'].map((name, i) => (
            <motion.div
              key={name}
              custom={i}
              variants={fadeUp}
              className="h-10 px-4 flex items-center rounded-md text-blue-900 bg-white shadow-sm border border-blue-100"
            >
              {name}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}

function Problem() {
  const items = [
    { icon: <Phone className="text-blue-600" size={28} />, title: '50+ nieodebranych połączeń tygodniowo' },
    { icon: <Wallet className="text-blue-600" size={28} />, title: '3,000-4,000 zł stracone miesięcznie' },
    { icon: <Frown className="text-blue-600" size={28} />, title: 'Klienci dzwonią do konkurencji' },
  ];
  return (
    <SectionWrapper>
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-10">
          Tracisz klientów, bo nikt nie odbiera telefonu
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={{ hidden: { opacity: 0, scale: .95 }, show: { opacity: 1, scale: 1, transition: { delay: 0.15 * i, duration: .5 } } }}
              className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm hover:shadow-md transition transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-blue-50">
                  {it.icon}
                </div>
                <p className="text-slate-700 font-medium">{it.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}

function Solution() {
  const [playing, setPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const oscRef = useRef(null);

  const togglePlay = () => {
    if (!playing) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!audioCtxRef.current) audioCtxRef.current = new AudioCtx();
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = 440;
      gain.gain.value = 0.03; // quiet
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      oscRef.current = osc;
      setPlaying(true);
    } else {
      if (oscRef.current) {
        try { oscRef.current.stop(); } catch {}
        oscRef.current.disconnect();
        oscRef.current = null;
      }
      setPlaying(false);
    }
  };

  const transcript = useMemo(() => [
    { who: 'Klient', text: 'Dzień dobry, chciałbym umówić wizytę na manicure.' },
    { who: 'AI', text: 'Dzień dobry! Jasne, jaki termin Panu odpowiada?' },
    { who: 'Klient', text: 'Najlepiej czwartek po południu.' },
    { who: 'AI', text: 'W czwartek mamy wolne 16:30 i 17:00. Która godzina będzie lepsza?' },
  ], []);

  return (
    <SectionWrapper>
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">AI, która brzmi jak prawdziwa recepcjonistka</motion.h2>
          <motion.p variants={fadeUp} className="text-slate-600 mb-6">95% klientów nie rozpoznaje, że rozmawia z AI</motion.p>

          <motion.div variants={fadeUp} className="relative rounded-2xl border border-blue-200 p-6 bg-white shadow-sm">
            <div className="absolute -inset-x-6 -top-6 h-6 rounded-t-2xl bg-gradient-to-r from-blue-800 to-blue-500 opacity-80" />

            {/* Audio UI */}
            <div className="relative z-10 flex items-center gap-4 mb-6">
              <button onClick={togglePlay} className={`h-14 w-14 rounded-full flex items-center justify-center text-white shadow transition transform ${playing ? 'bg-blue-700' : 'bg-blue-600 hover:scale-[1.05]'}`} aria-label="Odtwórz przykład">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {playing ? (
                    <rect x="6" y="5" width="4" height="14" fill="white"/><rect x="14" y="5" width="4" height="14" fill="white"/>
                  ) : (
                    <path d="M8 5v14l11-7L8 5z" fill="white" />
                  )}
                </svg>
              </button>
              {/* Waveform */}
              <div className="flex-1 h-16 flex items-end gap-1">
                {Array.from({ length: 40 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-1 bg-blue-400 rounded-sm"
                    style={{ height: `${playing ? (8 + (i % 6) * 6) : 8}px`, transition: 'height .2s ease', animation: playing ? `bar${i%5} 1s ${i%5*0.1}s infinite ease-in-out` : 'none' }}
                  />
                ))}
              </div>
            </div>

            {/* Transcript */}
            <div className="space-y-3">
              {transcript.map((t, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: t.who === 'AI' ? 20 : -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className={`max-w-md px-4 py-3 rounded-xl border ${t.who==='AI' ? 'bg-blue-50 border-blue-200 text-slate-800' : 'bg-white border-blue-100'}`}>
                  <div className="text-xs text-blue-700 font-medium mb-1">{t.who}</div>
                  <div className="text-slate-700">{t.text}</div>
                </motion.div>
              ))}
            </div>

            <style>{`
              @keyframes bar0 { 0%,100%{transform:scaleY(.5)} 50%{transform:scaleY(1)} }
              @keyframes bar1 { 0%,100%{transform:scaleY(.6)} 50%{transform:scaleY(1.1)} }
              @keyframes bar2 { 0%,100%{transform:scaleY(.55)} 50%{transform:scaleY(1.05)} }
              @keyframes bar3 { 0%,100%{transform:scaleY(.6)} 50%{transform:scaleY(1.2)} }
              @keyframes bar4 { 0%,100%{transform:scaleY(.5)} 50%{transform:scaleY(1)} }
            `}</style>

            <div className="mt-6 text-sm text-slate-500">Powered by <span className="font-semibold text-blue-700">ElevenLabs</span> & <span className="font-semibold text-blue-700">Gemini 2.5</span></div>
          </motion.div>
        </div>

        <motion.div variants={fadeUp} className="relative">
          <div className="pointer-events-none absolute -z-0 inset-0">
            <div className="flare absolute left-1/4 top-10 w-[360px] h-[360px] rounded-full" style={{background: 'radial-gradient(circle, rgba(96,165,250,0.3) 20%, rgba(96,165,250,0) 70%)'}} />
          </div>
          <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Dlaczego działa?</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-center gap-3"><Activity className="text-blue-600" size={20}/> Brzmienie naturalne i empatyczne</li>
              <li className="flex items-center gap-3"><Headphones className="text-blue-600" size={20}/> Obsługa reklamacji i pytań</li>
              <li className="flex items-center gap-3"><Calendar className="text-blue-600" size={20}/> Integracja z kalendarzem</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}

function HowItWorks() {
  const steps = [
    { title: 'Rozmowa 20 minut', desc: 'Dowiadujemy się o Twojej firmie' },
    { title: 'Integracja z Booksy/Google Calendar', desc: 'Łączymy z Twoimi systemami' },
    { title: 'Testowanie i dopracowanie', desc: 'Dopasowujemy AI do Twoich potrzeb' },
    { title: 'Gotowe!', desc: 'AI odbiera telefony 24/7' },
  ];
  return (
    <SectionWrapper id="jak-to-dziala">
      <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true, amount:.2}} transition={{duration:.6}} className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-12">Jak to działa?</motion.h2>
      <div className="grid md:grid-cols-[220px,1fr] gap-8">
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-900 to-blue-400 rounded-full" />
          <ul className="space-y-10">
            {steps.map((s, i) => (
              <motion.li key={i} initial={{scale:.9, opacity:0}} whileInView={{scale:1, opacity:1}} viewport={{once:true}} transition={{delay:i*0.1}} className="relative pl-16">
                <div className="absolute left-0 top-0 h-12 w-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shadow">{i+1}</div>
                <div className="bg-white rounded-xl border-l-4 border-blue-600 p-4 shadow-sm">
                  <div className="font-semibold text-slate-800">{s.title}</div>
                  <div className="text-slate-600">{s.desc}</div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-800 mb-3">Płynny proces wdrożenia</h3>
          <p className="text-slate-600">Zadbamy o każdy detal — od konfiguracji po testy. Po tygodniu AI odbiera za Ciebie telefony.</p>
        </div>
      </div>
    </SectionWrapper>
  );
}

function Features() {
  const items = [
    { title: 'Odbiera 24/7', icon: <Phone size={22} /> },
    { title: 'Umawia wizyty', icon: <Calendar size={22} /> },
    { title: 'Integracja z Booksy', icon: <LinkIcon size={22} /> },
    { title: 'Obsługuje reklamacje', icon: <Headphones size={22} /> },
    { title: 'SMS przypomnienia', icon: <MessageSquare size={22} /> },
    { title: 'Brzmi naturalnie', icon: <Activity size={22} /> },
    { title: 'Bez urlopów i L4', icon: <Shield size={22} /> },
    { title: 'Gotowa w 7 dni', icon: <Rocket size={22} /> },
    { title: 'Przejrzysta cena', icon: <Tag size={22} /> },
  ];
  return (
    <SectionWrapper id="funkcje">
      <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true, amount:.2}} transition={{duration:.6}} className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-12">Wszystko, czego potrzebuje Twój biznes</motion.h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.08 }}
            className="group rounded-xl border border-blue-100 bg-white p-6 shadow-sm hover:-translate-y-2 hover:shadow-xl transition transform"
          >
            <div className="h-12 w-12 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-4 group-hover:rotate-180 transition">
              {f.icon}
            </div>
            <div className="font-semibold text-slate-800">{f.title}</div>
            <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-tr from-blue-50/0 to-blue-100/60" />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

function Pricing() {
  const perks = ['Nielimitowane połączenia','Integracja z Twoimi systemami','Wsparcie techniczne 24/7','Aktualizacje i ulepszenia','Hosting i maintenance'];
  return (
    <SectionWrapper id="cennik">
      <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true, amount:.2}} transition={{duration:.6}} className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-10">Prosty, przejrzysty cennik</motion.h2>
      <motion.div initial={{scale:.9, opacity:0}} whileInView={{scale:1, opacity:1}} viewport={{once:true, amount:.3}} transition={{type:'spring', stiffness:120, damping:14}} className="mx-auto max-w-2xl rounded-2xl p-8 bg-white border border-blue-200 shadow-xl">
        <div className="text-center">
          <div className="text-3xl font-bold text-slate-800">599 zł jednorazowo</div>
          <div className="text-slate-500">Konfiguracja i wdrożenie</div>
          <div className="my-3 text-blue-700 text-xl font-bold">+</div>
          <div className="text-3xl font-bold text-slate-800">299 zł/miesiąc</div>
          <div className="text-slate-500">Utrzymanie i wsparcie</div>
        </div>
        <div className="my-6 h-px bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200" />
        <ul className="space-y-3">
          {perks.map((p, i) => (
            <motion.li key={p} initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay: i*0.15}} className="flex items-center gap-3">
              <CheckCircle2 className="text-blue-600" size={20}/>
              <span className="text-slate-700">{p}</span>
            </motion.li>
          ))}
        </ul>
        <div className="mt-8 flex justify-center">
          <a href="#kontakt" className="inline-flex items-center rounded-md bg-blue-900 text-white px-6 py-3 font-semibold shadow hover:scale-[1.05] hover:bg-blue-800 transition">Rozpocznij 30-dni test</a>
        </div>
        <div className="mt-6 flex justify-center">
          <span className="inline-flex items-center rounded-full px-4 py-1 text-sm bg-blue-50 text-blue-700 border border-blue-200">30 dni gwarancji zwrotu pieniędzy</span>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}

function RoiCalculator() {
  const [value, setValue] = useState(200);
  const [missed, setMissed] = useState(30);

  const monthlyLoss = value * missed * 4;
  const monthsToROI = Math.max(1, Math.ceil((599 + 299) / Math.max(1, monthlyLoss - 299)));

  return (
    <SectionWrapper id="kalkulator">
      <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true, amount:.2}} transition={{duration:.6}} className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-12">Policz ile tracisz teraz</motion.h2>
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-8">
          <div>
            <div className="flex justify-between mb-2 text-slate-700"><span>Średnia wartość wizyty</span><span className="font-semibold">{value} zł</span></div>
            <input type="range" min={50} max={500} value={value} onChange={(e)=>setValue(Number(e.target.value))} className="w-full accent-blue-600"/>
          </div>
          <div>
            <div className="flex justify-between mb-2 text-slate-700"><span>Nieodebrane połączenia tygodniowo</span><span className="font-semibold">{missed}</span></div>
            <input type="range" min={5} max={100} value={missed} onChange={(e)=>setMissed(Number(e.target.value))} className="w-full accent-blue-600"/>
          </div>
        </div>
        <motion.div initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="space-y-4">
          <div className="rounded-2xl p-6 bg-gradient-to-br from-blue-600 to-blue-400 text-white shadow">
            <div className="text-sm opacity-90">Tracisz</div>
            <div className="text-3xl font-bold">{monthlyLoss.toLocaleString('pl-PL')} zł</div>
            <div className="opacity-90">miesięcznie</div>
          </div>
          <div className="rounded-2xl p-6 bg-white border border-blue-200 shadow-sm">
            <div className="text-slate-700">Yieldo kosztuje 299 zł/m + 599 zł setup → Zwrot inwestycji w <span className="font-semibold text-blue-700">{Number.isFinite(monthsToROI) ? monthsToROI : '—'}</span> miesiące</div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

function FAQ() {
  const [open, setOpen] = useState(null);
  const faqs = [
    { q: 'Czy klienci zorientują się że to AI?', a: 'Nie. Głos brzmi naturalnie, a odpowiedzi są kontekstowe i życzliwe.' },
    { q: 'Jak długo trwa wdrożenie?', a: 'Standardowo 7 dni od rozmowy startowej.' },
    { q: 'Czy integruje się z moim systemem rezerwacji?', a: 'Tak, integrujemy się z popularnymi systemami lub Google Calendar.' },
    { q: 'Co jeśli AI nie zna odpowiedzi?', a: 'Przekieruje rozmowę lub zapisze wiadomość do kontaktu zwrotnego.' },
    { q: 'Czy mogę anulować w każdej chwili?', a: 'Tak, rozliczamy się miesięcznie — bez długich umów.' },
    { q: 'Ile kosztuje przekroczenie limitu połączeń?', a: 'Nie ma limitu!' },
  ];
  return (
    <SectionWrapper id="faq">
      <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true, amount:.2}} transition={{duration:.6}} className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-10">Najczęściej zadawane pytania</motion.h2>
      <div className="mx-auto max-w-3xl space-y-4">
        {faqs.map((f, i) => (
          <div key={i} className={`rounded-xl border-l-4 ${open===i ? 'border-blue-700 bg-[#F0F9FF]' : 'border-blue-300 bg-white'} transition overflow-hidden`}>
            <button onClick={()=>setOpen(open===i?null:i)} className="w-full flex items-center justify-between px-4 py-4 text-left">
              <span className="font-medium text-slate-800">{f.q}</span>
              <ChevronDown className={`text-blue-700 transition ${open===i ? 'rotate-180' : ''}`} />
            </button>
            <div className={`grid transition-all ${open===i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className="overflow-hidden px-4 pb-4 text-slate-600">{f.a}</div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

function ContactCTA() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: 'Salon piękności', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name) e.name = 'Wpisz imię i nazwisko';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Podaj prawidłowy email';
    if (!/^\+?\d[\d\s-]{6,}$/.test(form.phone)) e.phone = 'Podaj prawidłowy numer';
    return e;
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      alert('Dziękujemy! Skontaktujemy się wkrótce.');
      setForm({ name: '', email: '', phone: '', type: 'Salon piękności', message: '' });
    }
  };

  return (
    <SectionWrapper id="kontakt">
      <div className="mx-auto max-w-3xl">
        <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true, amount:.2}} transition={{duration:.6}} className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-4">Przestań tracić klientów już dziś</motion.h2>
        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="text-slate-600 text-center mb-8">Umów 15-minutowe demo i zobacz jak AI może zmienić Twój biznes</motion.p>

        <motion.form onSubmit={onSubmit} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="rounded-2xl bg-white p-6 md:p-8 border border-blue-200 shadow-xl">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Imię i nazwisko</label>
              <input value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} className={`w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 ${errors.name? 'border-red-400' : 'border-blue-200'}`} />
              {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input type="email" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} className={`w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 ${errors.email? 'border-red-400' : 'border-blue-200'}`} />
              {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Telefon</label>
              <input value={form.phone} onChange={(e)=>setForm({...form,phone:e.target.value})} className={`w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 ${errors.phone? 'border-red-400' : 'border-blue-200'}`} />
              {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Branża</label>
              <select value={form.type} onChange={(e)=>setForm({...form,type:e.target.value})} className="w-full rounded-md border border-blue-200 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500">
                <option>Salon piękności</option>
                <option>Gabinet lekarski</option>
                <option>Warsztat</option>
                <option>Inne</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1">Wiadomość</label>
              <textarea value={form.message} onChange={(e)=>setForm({...form,message:e.target.value})} rows={4} className="w-full rounded-md border border-blue-200 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <button className="rounded-md bg-blue-900 text-white px-6 py-3 font-semibold shadow hover:scale-[1.05] hover:bg-blue-800 transition">Umów bezpłatne demo</button>
          </div>
        </motion.form>
      </div>
    </SectionWrapper>
  );
}
