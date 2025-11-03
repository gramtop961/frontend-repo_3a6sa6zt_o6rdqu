import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MainSections from './components/MainSections';
import FooterArea from './components/FooterArea';

function App() {
  return (
    <div className="font-inter text-slate-800 bg-white">
      <Header />
      <main>
        <Hero />
        <MainSections />
      </main>
      <FooterArea />
    </div>
  );
}

export default App;
