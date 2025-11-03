function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-20 border-t border-slate-200/70 bg-white">
      <div className="absolute inset-x-0 -top-6 h-6 bg-gradient-to-t from-white to-transparent" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700" aria-hidden="true" />
            <div>
              <p className="font-semibold text-slate-900">Yieldo</p>
              <p className="text-sm text-slate-500">Wirtualna recepcjonistka</p>
            </div>
          </div>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900">Funkcje</a>
            <a href="#pricing" className="hover:text-slate-900">Cennik</a>
            <a href="#faq" className="hover:text-slate-900">FAQ</a>
            <a href="#contact" className="hover:text-slate-900">Kontakt</a>
            <a href="#" className="hover:text-slate-900">Polityka prywatności</a>
          </nav>
        </div>
        <div className="mt-6 text-xs text-slate-500">© {year} Yieldo. Wszelkie prawa zastrzeżone.</div>
      </div>
    </footer>
  );
}

export default Footer;
