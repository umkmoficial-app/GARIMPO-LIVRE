import React from 'react';
import { Trophy, ExternalLink, ShieldCheck, Award, Star } from 'lucide-react';
import { AFFILIATE_LINKS } from '../utils/affiliateLinks';

interface BestSellersBannerProps {
  isLargeFont: boolean;
}

export const BestSellersBanner: React.FC<BestSellersBannerProps> = ({ isLargeFont }) => {
  return (
    <section className="w-full mt-8">
      <div className="bg-gradient-to-r from-[#FFE600] to-yellow-300 rounded-3xl border-3 border-[#2D3277] shadow-[0_8px_0_#2D3277] overflow-hidden flex flex-col md:flex-row items-center justify-between">
        {/* Lado Esquerdo: Conteúdo Promocional dos Mais Vendidos */}
        <div className="p-6 md:p-8 flex-1 text-center md:text-left">
          {/* Selo Superior em Azul e Dourado */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#2D3277] text-[#FFE600] rounded-full text-xs font-black uppercase tracking-wider mb-3 shadow-[0_2px_0_#181B44]">
            <Trophy className="w-4 h-4 text-[#FFE600] fill-[#FFE600]" />
            <span>RANKING OFICIAL • OS CAMPEÕES DE VENDA DO MERCADO LIVRE</span>
          </div>

          {/* Título de Alto Impacto */}
          <h2
            className={`font-black text-[#2D3277] leading-tight mb-2 tracking-tight ${
              isLargeFont ? 'text-3xl sm:text-4xl md:text-5xl' : 'text-2xl sm:text-3xl md:text-4xl'
            }`}
          >
            Os Produtos Mais Vendidos do Brasil
          </h2>

          {/* Descrição Persuasiva de Prova Social */}
          <p
            className={`font-bold text-neutral-900 mb-5 max-w-xl ${
              isLargeFont ? 'text-base sm:text-lg' : 'text-sm sm:text-base'
            }`}
          >
            Acesse a seleção oficial dos produtos <strong>#1 em preferência nacional</strong> com o
            selo <strong>MAIS VENDIDO</strong>. Milhares de compradores satisfeitos, melhores
            avaliações e frete rápido FULL para você comprar com segurança máxima.
          </p>

          {/* Botão de Ação de Vidro Azul Oficial com Efeito Neon 360º */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            <a
              href={AFFILIATE_LINKS.MAIS_VENDIDOS}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-[3px] rounded-2xl font-black overflow-hidden cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_8px_25px_-5px_rgba(24,27,68,0.5)] inline-flex"
              title="Acessar o ranking dos produtos mais vendidos no Mercado Livre"
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
              <span className="relative z-10 w-full h-full px-6 py-3.5 rounded-[13px] bg-gradient-to-b from-[#363E96] via-[#262C73] to-[#181B44] text-[#FFE600] font-black text-sm sm:text-base flex items-center justify-center gap-2.5 tracking-wide uppercase shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),inset_0_-2px_3px_rgba(0,0,0,0.4)]">
                <Award className="w-5 h-5 text-[#FFE600] shrink-0" />
                <span>VER PRODUTOS MAIS VENDIDOS</span>
                <ExternalLink className="w-4 h-4 text-[#FFE600] shrink-0" />
              </span>
            </a>
          </div>
        </div>

        {/* Lado Direito: Imagem Comercial com Tag Laranja Mais Vendido e Troféus */}
        <div className="w-full md:w-5/12 h-56 md:h-64 relative border-t-2 md:border-t-0 md:border-l-3 border-[#2D3277] overflow-hidden bg-white">
          <img
            src="/images/mais_vendidos_oficial.jpg"
            alt="Produtos Mais Vendidos e Campeões de Venda no Mercado Livre"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />

          {/* Badge Laranja Flutuante "MAIS VENDIDO" idêntico ao Mercado Livre */}
          <div className="absolute top-3 right-3 bg-[#FF7700] text-white px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-md border border-white/30">
            <Star className="w-3.5 h-3.5 fill-white text-white" />
            <span>MAIS VENDIDO</span>
          </div>

          {/* Rodapé Interno da Imagem */}
          <div className="absolute bottom-3 left-3 right-3 bg-[#2D3277]/90 backdrop-blur-xs text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center justify-between border border-white/20">
            <span className="flex items-center gap-1 text-[#FFE600]">
              <ShieldCheck className="w-4 h-4 text-[#00A650]" />
              Compra Garantida
            </span>
            <span className="font-extrabold text-[11px] uppercase tracking-wider text-amber-300">
              Líderes de Mercado
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
