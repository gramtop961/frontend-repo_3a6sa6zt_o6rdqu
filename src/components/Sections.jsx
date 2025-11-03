import { useId, useMemo, useState } from 'react';

function Section({ id, title, subtitle, children }) {
  const labelId = useId();
  return (
    <section id={id} aria-labelledby={labelId} className="relative py-16 sm:py-24">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-blue-400/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id={labelId} className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
          {subtitle && <p className="mt-3 text-slate-600">{subtitle}</p>}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function SocialProof() {
  const logos = useMemo(() => [
    'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png',
  ], []);
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-xl border border-slate-200/60 bg-white/60 p-6 backdrop-blur">
        <p className="text-center text-sm font-medium text-slate-500">Zaufali nam specjaliści z topowych firm</p>
        <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4 items-center opacity-80">
          {logos.map((src, i) => (
            <img key={i} src={src} alt="Logo firmy" className="mx-auto h-8 object-contain" loading="lazy" />
          ))}
        </div>
      </div>
    </div>
  );
}

function Features() {
  const items = [
    { title: 'Naturalny głos', desc: 'Zaawansowana synteza mowy i rozumienie kontekstu.', icon: (
      <svg className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/></svg>
    )},
    { title: 'Integracje', desc: 'Kalendarze, CRM, systemy rezerwacji – działa z Twoim stackiem.', icon: (
      <svg className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
    )},
    { title: '24/7', desc: 'Odbiera połączenia bez przerwy – żadnych nieodebranych leadów.', icon: (
      <svg className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/><path d="m21 3-9 9"/></svg>
    )},
    { title: 'Bezpieczeństwo', desc: 'Szyfrowanie i zgodność z RODO – dane klientów pod kontrolą.', icon: (
      <svg className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
    )},
  ];

  return (
    <Section id="features" title="Najważniejsze możliwości" subtitle="Wszystko, czego potrzebujesz do profesjonalnej obsługi połączeń">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <div key={it.title} className="group rounded-xl border border-slate-200/60 bg-white/70 p-6 transition hover:-translate-y-0.5 hover:shadow">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 ring-1 ring-blue-200">
              {it.icon}
            </div>
            <h3 className="mt-4 text-base font-semibold text-slate-900">{it.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{it.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Pricing() {
  const tiers = [
    { name: 'Start', price: '149 zł/mies.', features: ['Do 300 min', 'Podstawowe integracje', 'Wsparcie mailowe'] },
    { name: 'Pro', price: '349 zł/mies.', features: ['Do 1000 min', 'Zaawansowane integracje', 'Priorytetowe wsparcie'] },
    { name: 'Scale', price: 'Indywidualna', features: ['Nielimitowane minuty', 'SLA 99,9%', 'Onboarding dedykowany'] },
  ];

  return (
    <Section id="pricing" title="Prosty i czytelny cennik" subtitle="Płać tylko za to, czego potrzebujesz">
      <div className="grid gap-6 lg:grid-cols-3">
        {tiers.map((t) => (
          <div key={t.name} className="rounded-2xl border border-slate-200/60 bg-white/70 p-6">
            <div className="flex items-baseline justify-between">
              <h3 className="text-lg font-semibold text-slate-900">{t.name}</h3>
              <span className="text-blue-700 font-semibold">{t.price}</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {t.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m20 6-11 11L4 12"/></svg>
                  {f}
                </li>
              ))}
            </ul>
            <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">Wybierz</a>
          </div>
        ))}
      </div>
    </Section>
  );
}

function FAQ() {
  const items = [
    { q: 'Czy mogę zrezygnować w dowolnym momencie?', a: 'Tak, możesz anulować w dowolnym momencie bez dodatkowych opłat.' },
    { q: 'Czy rozwiązanie jest zgodne z RODO?', a: 'Tak. Dane są szyfrowane i przetwarzane zgodnie z obowiązującymi przepisami.' },
    { q: 'Czy działa z moim kalendarzem?', a: 'Integrujemy się z najpopularniejszymi narzędziami – Google Calendar, Outlook i inne.' },
  ];

  return (
    <Section id="faq" title="Najczęstsze pytania">
      <div className="mx-auto max-w-3xl divide-y divide-slate-200/70 rounded-xl border border-slate-200/60 bg-white/70">
        {items.map((it, idx) => (
          <details key={it.q} className={`group p-6 ${idx!==0 ? '' : ''}`}>
            <summary className="flex cursor-pointer list-none items-center justify-between text-left">
              <span className="text-base font-medium text-slate-900">{it.q}</span>
              <svg className="h-5 w-5 text-slate-500 transition group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
            </summary>
            <p className="mt-3 text-sm text-slate-600">{it.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // In this sandbox, we just simulate success
    setTimeout(() => setSent(true), 500);
  };

  if (sent) {
    return (
      <Section id="contact" title="Daj nam znać, kiedy porozmawiać" subtitle="Zostaw kontakt – wrócimy z prezentacją produktu">
        <div className="mx-auto max-w-md rounded-xl border border-slate-200/60 bg-white/70 p-8 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 ring-1 ring-blue-200">
            <svg className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m20 6-11 11L4 12"/></svg>
          </div>
          <h3 className="text-lg font-semibold text-slate-900">Dziękujemy! Skontaktujemy się wkrótce.</h3>
          <p className="mt-2 text-sm text-slate-600">W międzyczasie przejrzyj funkcje i cennik powyżej.</p>
        </div>
      </Section>
    );
  }

  return (
    <Section id="contact" title="Umów prezentację" subtitle="Wpisz swoje dane – oddzwonimy lub odpiszemy w ciągu 24h">
      <form onSubmit={onSubmit} className="mx-auto max-w-2xl grid gap-4 rounded-2xl border border-slate-200/60 bg-white/70 p-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700">Imię i nazwisko</label>
          <input id="name" required value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} className="mt-1 block w-full rounded-lg border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
          <input id="email" type="email" required value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} className="mt-1 block w-full rounded-lg border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700">Wiadomość</label>
          <textarea id="message" rows={4} value={form.message} onChange={(e)=>setForm({...form,message:e.target.value})} className="mt-1 block w-full rounded-lg border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
        </div>
        <div className="flex items-center justify-between">
          <p className="text-xs text-slate-500">Chronimy Twoje dane. Zawsze możesz zrezygnować.</p>
          <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">Wyślij</button>
        </div>
      </form>
    </Section>
  );
}

export default function Sections() {
  return (
    <div className="space-y-20">
      <SocialProof />
      <Features />
      <Pricing />
      <FAQ />
      <Contact />
    </div>
  );
}
