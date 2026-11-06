import React from 'react';
import { Truck, ShieldCheck, PackageCheck, Zap, Sparkles } from 'lucide-react';

export const LOGISTICS_IMAGE = '/src/assets/images/mercadolivre_logistica_entrega_1793982579567.jpg';

interface DeliveryExplainerCardProps {
  isLargeFont: boolean;
  onOpenPedirGarimpo?: () => void;
}

export const DeliveryExplainerCard: React.FC<DeliveryExplainerCardProps> = ({
  isLargeFont,
  onOpenPedirGarimpo,
}) => {
  return (
    <section className="max-w-7xl mx-auto px-4 pt-4 pb-8 w-full">
      <div className="bg-gradient-to-r from-[#FFE600] to-yellow-300 rounded-3xl border-3 border-[#2D3277] shadow-[0_8px_0_#2D3277] overflow-hidden flex flex-col lg:flex-row items-center justify-between">
        {/* Lado Esquerdo: Conteúdo explicativo detalhado */}
        <div className="p-6 sm:p-8 lg:p-10 flex-1 text-center lg:text-left">
          {/* Badge superior com estilo idêntico */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#2D3277] text-[#FFE600] rounded-full text-xs font-black uppercase tracking-wider mb-3 shadow-[0_2px_0_#181B44]">
            <Truck className="w-4 h-4 text-[#FFE600]" />
            <span>Como Funciona o Garimpo e a Logística</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#2D3277] leading-tight mb-3">
            Do Garimpo Personalizado à Sua Porta no Mercado Livre
          </h2>

          <p className="text-sm sm:text-base font-bold text-neutral-900 mb-6 max-w-2xl leading-relaxed">
            Comprar no Mercado Livre através do Garimpo Livre é uma experiência revolucionária, simples e 100% segura.
            Conheça o recurso exclusivo de <strong>Pedir Garimpo</strong> e a logística oficial que entrega na sua porta:
          </p>

          {/* 4 Etapas do processo de compra e entrega */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left mb-6">
            {/* ETAPA 1: O REVOLUCIONÁRIO PEDIR GARIMPO */}
            <div className="bg-white/90 backdrop-blur-sm p-3.5 rounded-2xl border-2 border-[#2D3277] shadow-[0_2px_0_#2D3277] relative overflow-hidden">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-7 h-7 rounded-xl bg-[#2D3277] text-[#FFE600] flex items-center justify-center shrink-0 shadow-[0_2px_0_#181B44]">
                  <Sparkles className="w-4 h-4 fill-[#FFE600]" />
                </div>
                <h3 className="font-black text-[#2D3277] text-sm">
                  1. O Revolucionário &ldquo;Pedir Garimpo&rdquo;
                </h3>
              </div>
              <p className="text-xs font-semibold text-neutral-800 leading-snug">
                Não achou o produto desejado na vitrine? Basta clicar em <strong>PEDIR GARIMPO</strong>, dizer o que você quer e nosso sistema busca a melhor oferta oficial, menor preço e frete mais rápido no Mercado Livre para você.
              </p>
            </div>

            {/* ETAPA 2: PAGAMENTO E COMPRA GARANTIDA */}
            <div className="bg-white/90 backdrop-blur-sm p-3.5 rounded-2xl border-2 border-[#2D3277] shadow-[0_2px_0_#2D3277]">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-7 h-7 rounded-xl bg-[#00A650] text-white flex items-center justify-center shrink-0 shadow-[0_2px_0_#007a3b]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="font-black text-[#2D3277] text-sm">
                  2. Pagamento e Compra Garantida
                </h3>
              </div>
              <p className="text-xs font-semibold text-neutral-800 leading-snug">
                Ao escolher a oferta, o pagamento é 100% blindado pelo <strong>Mercado Pago</strong>. O valor só é liberado ao vendedor após o produto chegar em perfeitas condições em suas mãos.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-3.5 rounded-2xl border-2 border-[#2D3277] shadow-[0_2px_0_#2D3277]">
              <div className="flex items-center gap-2 mb-1">
                <PackageCheck className="w-5 h-5 text-[#2D3277] shrink-0" />
                <h3 className="font-black text-[#2D3277] text-sm">
                  Separação nos Centros FULL
                </h3>
              </div>
              <p className="text-xs font-semibold text-neutral-800 leading-snug">
                Os itens com selo <strong>FULL</strong> já ficam prontos e embalados nos Centros de Distribuição inteligentes do Mercado Livre em todo o Brasil.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-3.5 rounded-2xl border-2 border-[#2D3277] shadow-[0_2px_0_#2D3277]">
              <div className="flex items-center gap-2 mb-1">
                <Zap className="w-5 h-5 text-amber-600 shrink-0" />
                <h3 className="font-black text-[#2D3277] text-sm">
                  Entrega Rápida na Sua Porta
                </h3>
              </div>
              <p className="text-xs font-semibold text-neutral-800 leading-snug">
                Vans amarelas dedicadas, carretas e aviões próprios realizam o transporte com rastreamento ao vivo, entregando muitas vezes no mesmo dia ou dia seguinte.
              </p>
            </div>
          </div>

          {/* Botões de ação oficial */}
          {onOpenPedirGarimpo && (
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <button
                type="button"
                onClick={onOpenPedirGarimpo}
                className={`glass-btn-blue px-6 py-3 rounded-xl font-black text-sm flex items-center gap-2 ${
                  isLargeFont ? 'text-base py-3.5 px-7' : ''
                }`}
              >
                <Sparkles className="w-4 h-4 text-[#FFE600] fill-[#FFE600]" />
                <span>EXPERIMENTAR &ldquo;PEDIR GARIMPO&rdquo;</span>
              </button>
            </div>
          )}
        </div>

        {/* Lado Direito: Foto Comercial Oficial da Entrega Mercado Livre */}
        <div className="w-full lg:w-5/12 h-64 sm:h-80 lg:h-auto lg:self-stretch relative border-t-3 lg:border-t-0 lg:border-l-3 border-[#2D3277] overflow-hidden bg-white min-h-[280px]">
          <img
            src={LOGISTICS_IMAGE}
            alt="Logística oficial de entrega do Mercado Livre na porta de casa"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
