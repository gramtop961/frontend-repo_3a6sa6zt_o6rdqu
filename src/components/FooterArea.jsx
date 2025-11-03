import React from 'react';
import { motion } from 'framer-motion';

export default function FooterArea() {
  const handleSmoothLink = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const headerOffset = 72;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#F0F9FF] pt-16">
      <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 pb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-600 to-blue-800" />
              <span className="font-semibold text-slate-800">Yieldo</span>
            </div>
            <p className="text-slate-700">AI, które naprawdę coś robi</p>
          </div>
          <div>
            <div className="font-semibold text-slate-800 mb-3">Produkty</div>
            <ul className="space-y-2 text-slate-700">
              <li>Yieldo Granty</li>
              <li>Yieldo Recepcjonistka</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-800 mb-3">Przydatne linki</div>
            <ul className="space-y-2 text-slate-700">
              <li><a href="#jak-to-dziala" onClick={(e)=>handleSmoothLink(e,'#jak-to-dziala')} className="hover:text-blue-700">Jak to działa</a></li>
              <li><a href="#funkcje" onClick={(e)=>handleSmoothLink(e,'#funkcje')} className="hover:text-blue-700">Funkcje</a></li>
              <li><a href="#cennik" onClick={(e)=>handleSmoothLink(e,'#cennik')} className="hover:text-blue-700">Cennik</a></li>
              <li><a href="#faq" onClick={(e)=>handleSmoothLink(e,'#faq')} className="hover:text-blue-700">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className="py-6 border-t border-blue-200 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} Yieldo. Wszelkie prawa zastrzeżone.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-blue-700">Polityka prywatności</a>
            <a href="#" className="hover:text-blue-700">Regulamin</a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
