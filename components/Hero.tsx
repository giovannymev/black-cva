import React from 'react';
import { ShieldCheck, Zap } from 'lucide-react';
import { Button } from './Button';
import { PRICES } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24 px-4">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-semibold mb-8 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
          </span>
          OFERTA LIMITADA BLACK FRIDAY
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 uppercase leading-tight">
          Black <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">CVA</span>
        </h1>
        
        <h2 className="text-2xl md:text-4xl font-bold text-gray-200 mb-6 max-w-4xl mx-auto">
          A OPORTUNIDADE ÚNICA DE TER O <span className="text-orange-500">PACOTE COMPLETO</span> PARA SUA EVOLUÇÃO MUSICAL
        </h2>

        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          Unimos a <strong>Melhor Ferramenta</strong>, o <strong>Curso Completo</strong> e o <strong>Melhor Acompanhamento</strong> para você tocar sem cifras em até 3 meses — com <span className="bg-orange-600 text-white px-2 py-0.5 rounded font-bold">{PRICES.discountPercentage}% OFF</span>.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button />
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-gray-500 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-orange-500" />
            <span>Garantia de Satisfação</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-orange-500" />
            <span>Acesso Imediato</span>
          </div>
        </div>
      </div>
    </section>
  );
};