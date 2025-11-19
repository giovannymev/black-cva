import React from 'react';
import { FEATURES } from '../constants';
import { Smartphone, Users, CheckCircle2, GraduationCap } from 'lucide-react';

export const Features: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'smartphone': return <Smartphone className="w-8 h-8 text-white" />;
      case 'course': return <GraduationCap className="w-8 h-8 text-white" />;
      case 'users': return <Users className="w-8 h-8 text-white" />;
      default: return <Smartphone className="w-8 h-8 text-white" />;
    }
  };

  return (
    <section className="py-20 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-2">O Combo Perfeito</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            O Ecossistema Completo para sua <br className="hidden md:block" />
            <span className="text-orange-500">Independência Musical</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Nesta Black Friday, você não precisa escolher. Leve tecnologia, metodologia e comunidade em uma única oferta.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {FEATURES.map((feature) => (
            <div 
              key={feature.id} 
              className="group relative bg-zinc-900/50 border border-zinc-800 hover:border-orange-500/50 p-6 lg:p-8 rounded-2xl transition-all duration-300 hover:bg-zinc-900 flex flex-col"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 bg-orange-600 p-4 rounded-xl shadow-lg shadow-orange-900/20 group-hover:scale-110 transition-transform duration-300">
                {getIcon(feature.icon)}
              </div>

              <div className="mt-8 text-center md:text-left">
                <h4 className="text-orange-500 font-bold uppercase text-sm mb-1">{feature.title}</h4>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.subtitle}</h3>
                <p className="text-gray-400 mb-6 min-h-[48px] text-sm leading-relaxed">{feature.description}</p>

                <ul className="space-y-3 text-left">
                  {feature.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};