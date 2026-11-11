import React from 'react';
import { ShieldCheck, BadgePercent, CheckCircle2, ArrowUp, Heart } from 'lucide-react';
import { AFFILIATE_LINKS } from '../utils/affiliateLinks';

interface TrustFooterProps {
  isLargeFont: boolean;
}

export const TrustFooter: React.FC<TrustFooterProps> = ({ isLargeFont }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#111111] text-white border-t-4 border-[#FFE600] mt-12">
      {/* Faixa Principal de Confiança com os 3 Ícones Obrigatórios */}
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center sm:text-left">
          {/* Ícone 1: Compra 100% Segura no Mercado Livre */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 rounded-2xl bg-neutral-900 border border-neutral-800">
            <div className="w-14 h-14 rounded-2xl bg-[#00A650] flex items-center justify-center shrink-0 border-2 border-white/20 shadow-md">
              <ShieldCheck className="w-8 h-8 text-white stroke-[2.2]" />
            </div>
            <div>
              <h3 className={`font-black text-[#FFE600] mb-1 ${isLargeFont ? 'text-lg' : 'text-base'}`}>
                Compra 100% Segura no Mercado Livre
              </h3>
              <p className="text-xs text-neutral-300 font-medium leading-relaxed">
                Você finaliza o pagamento dentro do site oficial do Mercado Livre, com Garantia da Entrega ou seu Dinheiro de Volta.
              </p>
            </div>
          </div>

          {/* Ícone 2: Você não paga nada a mais */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 rounded-2xl bg-neutral-900 border border-neutral-800">
            <div className="w-14 h-14 rounded-2xl bg-[#FFE600] flex items-center justify-center shrink-0 border-2 border-black/20 shadow-md">
              <BadgePercent className="w-8 h-8 text-black stroke-[2.2]" />
            </div>
            <div>
              <h3 className={`font-black text-[#FFE600] mb-1 ${isLargeFont ? 'text-lg' : 'text-base'}`}>
                Você não paga nada a mais
              </h3>
              <p className="text-xs text-neutral-300 font-medium leading-relaxed">
                O preço que você vê aqui é o menor valor com desconto real. Não cobramos taxa nenhuma pelo garimpo de ofertas.
              </p>
            </div>
          </div>

          {/* Ícone 3: Link Oficial Verificado */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 rounded-2xl bg-neutral-900 border border-neutral-800">
            <div className="w-14 h-14 rounded-2xl bg-[#1A73E8] flex items-center justify-center shrink-0 border-2 border-white/20 shadow-md">
              <CheckCircle2 className="w-8 h-8 text-white stroke-[2.2]" />
            </div>
            <div>
              <h3 className={`font-black text-[#FFE600] mb-1 ${isLargeFont ? 'text-lg' : 'text-base'}`}>
                Link Oficial Verificado
              </h3>
              <p className="text-xs text-neutral-300 font-medium leading-relaxed">
                Todos os botões levam diretamente ao Mercado Livre sem intermediários estranhos ou links suspeitos. Zero golpes.
              </p>
            </div>
          </div>
        </div>

        {/* Guia Rápido e Acolhedor para Idosos e Iniciantes */}
        <div className="mt-8 p-5 bg-neutral-900/60 rounded-2xl border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h4 className="text-sm font-black text-white flex items-center justify-center md:justify-start gap-1.5">
              <span>Como comprar com tranquilidade?</span>
            </h4>
            <p className="text-xs text-neutral-400 mt-1">
              Basta clicar no botão azul <strong>&ldquo;VER OFERTA &rarr;&rdquo;</strong> em qualquer produto. Uma nova página do Mercado Livre se abrirá para você conferir as fotos, reputação do vendedor e finalizar sua compra com frete grátis.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="btn-3d-yellow px-5 py-2.5 rounded-xl text-xs font-black flex items-center gap-1.5 shrink-0"
          >
            <ArrowUp className="w-4 h-4 stroke-[3]" />
            <span>Voltar ao Topo</span>
          </button>
        </div>

        {/* AVISO DE PREÇOS E DISPONIBILIDADE MERCADO LIVRE */}
        <div className="mt-6 p-3 bg-neutral-900/90 rounded-xl border border-neutral-800 text-center">
          <p className="text-[11px] sm:text-xs text-neutral-400 font-medium">
            ⚠️ <strong>Aviso Importante:</strong> Ofertas 100% oficiais do Mercado Livre - preços, estoque e condições de parcelamento conferidos no site oficial ao clicar.
          </p>
        </div>

        {/* Informações Legais e Créditos */}
        <div className="mt-6 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-[#FFE600] rounded-md flex items-center justify-center p-0.5 border border-yellow-300 shrink-0">
              <img src="/images/logo_g_azul.png" alt="G" className="w-full h-full object-contain" />
            </div>
            <span className="font-black text-[#FFE600] text-sm">GARIMPO LIVRE</span>
            <span>&copy; {new Date().getFullYear()} • Garimpado pra você, sem golpe.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px]">
            <a
              href={AFFILIATE_LINKS.TODAS}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFE600] transition-colors font-semibold"
            >
              Ofertas do Dia
            </a>
            <span>•</span>
            <a
              href={AFFILIATE_LINKS.RELAMPAGO}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFE600] transition-colors font-semibold"
            >
              Ofertas Relâmpago
            </a>
            <span>•</span>
            <a
              href={AFFILIATE_LINKS.IMBATIVEL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFE600] transition-colors font-semibold"
            >
              Preço Imbatível
            </a>
            <span>•</span>
            <a
              href={AFFILIATE_LINKS.INTERNACIONAL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFE600] transition-colors font-semibold"
            >
              Ofertas Internacionais
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
