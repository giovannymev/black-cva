import React from 'react';
import { PRICES } from '../constants';
import { Button } from './Button';
import { StockProgressBar } from './StockProgressBar';
import { Check, AlertTriangle } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-neutral-950 to-black relative" id="pricing">
      <div className="max-w-3xl mx-auto px-4 relative z-10">
        
        {/* Value Anchoring Card */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Discount Badge */}
          <div className="absolute top-0 right-0 bg-orange-600 text-white font-black text-lg px-6 py-3 rounded-bl-3xl z-20 shadow-lg shadow-orange-900/50">
            {PRICES.discountPercentage}% OFF
          </div>

          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-400 uppercase tracking-widest mb-2">Matemática da Economia</h2>
            <p className="text-gray-500 text-sm">Se você comprasse separadamente...</p>
          </div>

          {/* Regular Prices List */}
          <div className="space-y-4 mb-8 relative">
             <div className="absolute left-[19px] top-3 bottom-3 w-0.5 bg-zinc-800 md:block hidden"></div>
            
            <div className="flex items-center gap-4 opacity-80 hover:opacity-100 transition-opacity">
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 text-gray-500 font-bold border border-zinc-700">1</div>
              <div className="flex-1 border-b border-zinc-800 pb-4">
                <p className="text-gray-300 text-sm uppercase font-semibold">Ferramenta Proskë PRO (1 ano)</p>
                <p className="text-lg font-medium text-gray-500 decoration-slice">R$ {PRICES.appRegular}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 opacity-80 hover:opacity-100 transition-opacity">
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 text-gray-500 font-bold border border-zinc-700">2</div>
              <div className="flex-1 border-b border-zinc-800 pb-4">
                <p className="text-gray-300 text-sm uppercase font-semibold">Curso Desafio Nova Era</p>
                <p className="text-lg font-medium text-gray-500">R$ {PRICES.courseRegular}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 opacity-80 hover:opacity-100 transition-opacity">
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 text-gray-500 font-bold border border-zinc-700">3</div>
              <div className="flex-1">
                <p className="text-gray-300 text-sm uppercase font-semibold">Comunidade CVA (1 ano)</p>
                <p className="text-lg font-medium text-gray-500">R$ {PRICES.communityRegular}</p>
              </div>
            </div>
          </div>

          {/* Total Regular vs Black Friday */}
          <div className="text-center mb-8">
             <p className="text-gray-500 mb-1 uppercase text-xs md:text-sm font-bold tracking-wide">Total Regular Fora da Black Friday:</p>
             <p className="text-2xl font-bold text-zinc-600 line-through decoration-red-500/50 decoration-2 mb-6">
               R$ {PRICES.totalRegular}
             </p>

             <div className="bg-orange-900/20 border border-orange-500/30 rounded-2xl p-6 md:p-8 animate-pulse-slow relative overflow-hidden">
               {/* Shine effect */}
               <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-200%] animate-[float_3s_infinite]"></div>
               
               <h3 className="text-orange-400 font-bold uppercase tracking-wider mb-2 text-sm">Somente nesta Página</h3>
               <div className="flex flex-col items-center justify-center">
                 <span className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-2">
                   <span className="text-2xl align-top text-gray-400 font-medium mr-1">12x</span>
                   R$ {PRICES.installment}
                 </span>
                 <span className="text-gray-400 text-sm md:text-base font-medium">ou R$ {PRICES.blackFridayTotal} à vista</span>
               </div>
             </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-4 mb-8">
            <Button className="w-full" size="lg" />
            <StockProgressBar />
            <p className="text-center text-xs text-gray-500 flex items-center justify-center gap-1">
               <Check className="w-3 h-3 text-green-500" /> Compra 100% segura via WhatsApp
            </p>
          </div>

          {/* Scarcity Warning */}
          <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-4 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-red-400 font-bold text-sm uppercase mb-1">Aviso Importante</h4>
              <p className="text-red-300/80 text-xs leading-relaxed">
                Esta oferta é exclusiva para a Black CVA. O pacote completo (App + Curso + Comunidade) com este desconto jamais será repetido.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};