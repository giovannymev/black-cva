import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Goal } from './components/Goal';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { CountdownBar } from './components/CountdownBar';
import { WA_LINK } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500 selection:text-white">
      <CountdownBar />
      <Hero />
      <Features />
      <Goal />
      <Pricing />
      <Footer />

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-40">
        <a 
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-orange-600 text-white text-center font-bold py-4 rounded-full shadow-xl border border-orange-500 animate-bounce hover:animate-none"
        >
          QUERO APROVEITAR AGORA
        </a>
      </div>
    </div>
  );
};

export default App;