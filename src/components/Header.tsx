import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="relative w-full bg-[#FFE600] border-b-4 border-black/10 text-[#111111] shadow-md z-20">
      {/* Barra superior de confiança oficial */}
      <div className="bg-[#111111] text-white px-3 py-1.5 text-xs font-semibold flex items-center justify-center text-center">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-[#00A650] shrink-0" />
          <span className="truncate">Portal Oficial de Garimpo de Ofertas do Mercado Livre</span>
        </div>
      </div>

      {/* Marca Principal */}
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4 flex items-center justify-center">
        {/* LOGO GARIMPO LIVRE EM AZUL OFICIAL #2D3277 COM AMARELO #FFE600 */}
        <div className="bg-[#2D3277] text-[#FFE600] px-5 sm:px-6 py-2 rounded-2xl font-black text-2xl sm:text-4xl tracking-tight shadow-[0_4px_0_#181B44] border-2 border-[#181B44] flex items-center gap-2.5 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#FFE600] rounded-xl flex items-center justify-center p-1 sm:p-1.5 shadow-[0_2px_0_#181B44] border border-yellow-300 shrink-0">
            <img src="/images/logo_g_azul.png" alt="G" className="w-full h-full object-contain" />
          </div>
          <div className="flex items-center gap-1.5">
            <span>GARIMPO</span>
            <span className="text-white">LIVRE</span>
          </div>
        </div>
      </div>
    </header>
  );
};
