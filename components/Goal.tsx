import React from 'react';
import { Rocket, LockOpen } from 'lucide-react';

export const Goal: React.FC = () => {
  return (
    <section className="py-20 border-y border-zinc-900 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <div className="inline-block p-3 rounded-full bg-orange-500/10 border border-orange-500/30 mb-6">
          <Rocket className="w-8 h-8 text-orange-500" />
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          O OBJETIVO É CLARO: <br />
          <span className="text-orange-500">LIBERDADE EM 3 MESES</span>
        </h2>
        
        <p className="text-xl text-gray-300 leading-relaxed mb-8">
          Com esse pacote em mãos, nossa meta para você é ousada e real: <br className="hidden md:block" />
          <strong className="text-white">Sair da dependência das cifras e dominar seu instrumento em até 90 dias.</strong>
        </p>
        
        <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 p-6 rounded-xl max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="shrink-0 bg-green-500/10 p-3 rounded-full">
              <LockOpen className="w-6 h-6 text-green-500" />
            </div>
            <p className="text-gray-300 text-left">
              Saia da estagnação e viva a experiência de adorar com <span className="text-white font-semibold">liberdade técnica e espiritual</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};