import React from 'react';
import { ArrowRight } from 'lucide-react';
import { WA_LINK } from '../constants';

interface ButtonProps {
  text?: string;
  className?: string;
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  text = "QUERO O PACOTE BLACK CVA AGORA", 
  className = "",
  variant = 'primary',
  size = 'lg'
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 rounded-full tracking-wide hover:scale-105 transform shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)]";
  
  const variants = {
    primary: "bg-orange-600 hover:bg-orange-500 text-white border-2 border-orange-600 hover:border-orange-500",
    outline: "bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500/10"
  };

  const sizes = {
    sm: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-lg md:text-xl uppercase"
  };

  return (
    <a 
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <span>{text}</span>
      <ArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6 animate-pulse" />
    </a>
  );
};