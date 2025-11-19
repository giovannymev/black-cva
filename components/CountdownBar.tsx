import React from 'react';
import { PRICES } from '../constants';

export const CountdownBar: React.FC = () => {
  return (
    <div className="bg-orange-600 text-white py-2 px-4 text-center text-xs md:text-sm font-bold tracking-wide uppercase sticky top-0 z-50 shadow-lg">
      <div className="flex items-center justify-center gap-2 animate-pulse">
        <span className="w-2 h-2 bg-white rounded-full"></span>
        BLACK CVA: {PRICES.discountPercentage}% DE DESCONTO ENCERRANDO EM BREVE
        <span className="w-2 h-2 bg-white rounded-full"></span>
      </div>
    </div>
  );
};