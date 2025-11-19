import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-zinc-900 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-orange-600 font-black text-2xl mb-4 tracking-tighter">BLACK CVA</p>
        <p className="text-zinc-600 text-sm mb-8">
          &copy; {new Date().getFullYear()} Todos os direitos reservados. <br />
          Evolução musical com propósito.
        </p>
        <div className="flex justify-center gap-6 text-zinc-700 text-xs">
          <span>Termos de Uso</span>
          <span>Privacidade</span>
        </div>
      </div>
    </footer>
  );
};