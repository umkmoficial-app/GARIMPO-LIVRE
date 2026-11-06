import React from 'react';
import { Sparkles } from 'lucide-react';

interface HeroSearchProps {
  onOpenPedirGarimpo: () => void;
  isLargeFont: boolean;
}

export const HeroSearch: React.FC<HeroSearchProps> = ({
  onOpenPedirGarimpo,
  isLargeFont,
}) => {
  return (
    <section className="w-full bg-gradient-to-b from-[#FFE600] to-[#F5F5F5] pt-2 pb-4 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Botão PEDIR GARIMPO em Vidro Ultra-Realista Azul Oficial com Texto Amarelo */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-center">
          <button
            onClick={onOpenPedirGarimpo}
            className={`glass-btn-blue w-full sm:w-auto px-10 py-3.5 rounded-2xl font-black flex items-center justify-center gap-2.5 text-center tracking-wide ${
              isLargeFont ? 'text-xl' : 'text-lg'
            }`}
          >
            <Sparkles className="w-6 h-6 text-[#FFE600] animate-pulse" />
            <span>PEDIR GARIMPO</span>
          </button>
        </div>
      </div>
    </section>
  );
};
