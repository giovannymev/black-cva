import React, { useState, useEffect } from 'react';
import { PRICES } from '../constants';
import { Clock } from 'lucide-react';

export const CountdownBar: React.FC = () => {
  // 35 minutes in seconds
  const [timeLeft, setTimeLeft] = useState(35 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 35 * 60));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-orange-600 text-white py-2.5 px-4 text-center text-xs md:text-sm font-bold tracking-wide uppercase sticky top-0 z-50 shadow-lg border-b border-orange-800">
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
        <span className="hidden md:block animate-pulse">🔴</span>
        <span>BLACK CVA: {PRICES.discountPercentage}% DE DESCONTO</span>
        <div className="flex items-center gap-2 bg-black/20 px-3 py-1 rounded-full border border-white/20">
          <Clock className="w-3.5 h-3.5" />
          <span className="tabular-nums font-mono text-sm font-black text-yellow-300">
            EXPIRA EM: {formatTime(timeLeft)}
          </span>
        </div>
      </div>
    </div>
  );
};