import React from 'react';

export const StockProgressBar: React.FC = () => {
  return (
    <div className="w-full max-w-xs mx-auto mt-4 mb-2">
      <div className="flex justify-between items-end mb-1">
        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Vagas Preenchidas</span>
        <span className="text-[10px] text-orange-500 font-black">75%</span>
      </div>
      <div className="h-3 bg-zinc-800 rounded-full overflow-hidden border border-zinc-700/50 shadow-inner relative">
        {/* Animated Bar */}
        <div 
          className="h-full bg-orange-600 relative rounded-full transition-all duration-1000 w-[75%]"
        >
          {/* Striped Pattern Overlay */}
          <div 
            className="absolute inset-0 w-full h-full animate-[float_20s_linear_infinite]"
            style={{
              backgroundImage: 'linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent)',
              backgroundSize: '1rem 1rem'
            }}
          />
          
          {/* Glow at the tip */}
          <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 blur-[2px]" />
        </div>
      </div>
      <p className="text-[10px] text-gray-500 text-center mt-1.5 animate-pulse">
        <span className="text-orange-500 font-bold">Alta demanda!</span> Liberando novos acessos...
      </p>
    </div>
  );
};