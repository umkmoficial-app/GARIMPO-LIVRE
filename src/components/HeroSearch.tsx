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
            className={`group relative p-[3px] rounded-2xl font-black overflow-hidden cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto shadow-[0_8px_25px_-5px_rgba(24,27,68,0.5)] ${
              isLargeFont ? 'text-xl' : 'text-lg'
            }`}
            title="Pedir garimpo de oferta especial com inteligência oficial"
          >
            {/* 1. Feixe de Foco Neon Nítido Circulando 360º com Intervalo de 5 Segundos */}
            <span
              className="absolute -inset-[150%] neon-360-spin pointer-events-none"
              style={{
                background:
                  'conic-gradient(from 0deg, transparent 0deg, transparent 270deg, #00F0FF 310deg, #FFE600 345deg, #FFFFFF 360deg)',
              }}
            />

            {/* 2. Brilho/Glow Neon Difuso Circulando 360º com Intervalo de 5 Segundos */}
            <span
              className="absolute -inset-[150%] neon-360-spin blur-md opacity-90 pointer-events-none"
              style={{
                background:
                  'conic-gradient(from 0deg, transparent 0deg, transparent 270deg, #00F0FF 315deg, #FFE600 350deg, #FFFFFF 360deg)',
              }}
            />

            {/* 3. Corpo Interno do Botão em Vidro Líquido Azul Oficial com Texto Amarelo */}
            <span className="relative z-10 w-full h-full px-10 py-3.5 rounded-[13px] bg-gradient-to-b from-[#363E96] via-[#262C73] to-[#181B44] text-[#FFE600] flex items-center justify-center gap-2.5 text-center tracking-wide shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),inset_0_-2px_3px_rgba(0,0,0,0.4)]">
              <Sparkles className="w-6 h-6 text-[#FFE600] animate-pulse shrink-0" />
              <span className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">PEDIR GARIMPO</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
