import React from 'react';
import { Truck, ExternalLink, Zap, ShieldCheck } from 'lucide-react';
import { AFFILIATE_LINKS } from '../utils/affiliateLinks';

interface FastDeliveryBannerProps {
  isLargeFont: boolean;
}

export const FastDeliveryBanner: React.FC<FastDeliveryBannerProps> = ({ isLargeFont }) => {
  return (
    <section className="w-full mt-8">
      <div className="bg-gradient-to-r from-[#FFE600] to-yellow-300 rounded-3xl border-3 border-[#2D3277] shadow-[0_8px_0_#2D3277] overflow-hidden flex flex-col md:flex-row items-center justify-between">
        {/* Lado Esquerdo: Conteúdo Promocional e Botão de Ação */}
        <div className="p-6 md:p-8 flex-1 text-center md:text-left">
          {/* Selo Superior em Azul e Amarelo */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#2D3277] text-[#FFE600] rounded-full text-xs font-black uppercase tracking-wider mb-3 shadow-[0_2px_0_#181B44]">
            <Zap className="w-4 h-4 fill-[#00A650] text-[#00A650] animate-pulse" />
            <span>MERCADO ENVIOS FULL • ENTREGA EM ATÉ 24 HORAS</span>
          </div>

          {/* Título de Alto Impacto */}
          <h2
            className={`font-black text-[#2D3277] leading-tight mb-2 tracking-tight ${
              isLargeFont ? 'text-3xl sm:text-4xl md:text-5xl' : 'text-2xl sm:text-3xl md:text-4xl'
            }`}
          >
            Compre Hoje e Receba em até 24 Horas
          </h2>

          {/* Descrição Persuasiva para Compradores com Pressa */}
          <p
            className={`font-bold text-neutral-900 mb-5 max-w-xl ${
              isLargeFont ? 'text-base sm:text-lg' : 'text-sm sm:text-base'
            }`}
          >
            Está com pressa? Acesse ofertas estocadas diretamente nos galpões oficiais do Mercado Livre com{' '}
            <strong>envio imediato FULL e garantia de entrega amanhã</strong> no conforto da sua casa.
          </p>

          {/* Botão de Ação de Vidro Azul Oficial */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            <a
              href={AFFILIATE_LINKS.ENTREGA_24H}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-btn-blue px-6 py-3.5 rounded-xl font-black text-sm sm:text-base flex items-center justify-center gap-2.5 tracking-wide uppercase shadow-md cursor-pointer group"
              title="Ver produtos com envio imediato FULL que chegam em até 24 horas"
            >
              <Truck className="w-5 h-5 text-[#FFE600] group-hover:scale-110 transition-transform" />
              <span>VER PRODUTOS COM ENTREGA EM 24H</span>
              <ExternalLink className="w-4 h-4 text-[#FFE600]" />
            </a>
          </div>
        </div>

        {/* Lado Direito: Imagem Oficial de Entrega Rápida Mercado Livre */}
        <div className="w-full md:w-5/12 h-56 md:h-64 relative border-t-2 md:border-t-0 md:border-l-3 border-[#2D3277] overflow-hidden bg-white">
          <img
            src="/images/mercadolivre_logistica_entrega_homem.jpg"
            alt="Mercado Livre Van e Entrega em 24 Horas Chega Amanhã"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />

          {/* Badge Flutuante Chega Amanhã */}
          <div className="absolute top-3 right-3 bg-[#00A650] text-white px-3 py-1 rounded-full text-xs font-black flex items-center gap-1.5 shadow-md border border-white/30">
            <Zap className="w-3.5 h-3.5 fill-[#FFE600] text-[#FFE600]" />
            <span>CHEGA AMANHÃ</span>
          </div>

          {/* Rodapé Interno da Imagem */}
          <div className="absolute bottom-3 left-3 right-3 bg-[#2D3277]/90 backdrop-blur-xs text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center justify-between border border-white/20">
            <span className="flex items-center gap-1 text-[#FFE600]">
              <ShieldCheck className="w-4 h-4 text-[#00A650]" />
              Compra Garantida
            </span>
            <span className="font-extrabold text-[11px] uppercase tracking-wider text-emerald-300">
              Logística FULL Oficial
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
