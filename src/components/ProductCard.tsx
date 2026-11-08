import React, { useState } from 'react';
import { Product } from '../types';
import { openAffiliateOffer } from '../utils/affiliateLinks';
import {
  Zap,
  Star,
  Globe,
  Truck,
  ArrowRight,
  ShieldCheck,
  RotateCcw,
} from 'lucide-react';

interface ProductCardProps {
  product: Product;
  isLargeFont: boolean;
  onMarkUnavailable: (productId: string, category: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isLargeFont,
  onMarkUnavailable,
}) => {
  const [imageError, setImageError] = useState(false);

  // Formatação de Moeda Brasileira
  const formatBRL = (value: number) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  // Cores e ícones dos selos flutuantes - largura adequada e fonte ajustada para nunca cortar
  const renderBadge = () => {
    if (product.badge === 'RELÂMPAGO') {
      return (
        <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1 px-2.5 py-0.5 bg-[#FF0000] text-white font-black text-[10px] sm:text-[11px] rounded-full shadow-[0_2px_0_#990000] tracking-normal uppercase whitespace-nowrap">
          <Zap className="w-3 h-3 fill-yellow-300 text-yellow-300 animate-pulse shrink-0" />
          <span>OFERTA RELÂMPAGO</span>
        </div>
      );
    }
    if (product.badge === 'PREÇO IMBATÍVEL') {
      return (
        <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1 px-2.5 py-0.5 bg-[#00A650] text-white font-black text-[10px] sm:text-[11px] rounded-full shadow-[0_2px_0_#006B33] tracking-normal uppercase whitespace-nowrap">
          <Star className="w-3 h-3 fill-[#FFE600] text-[#FFE600] shrink-0" />
          <span>PREÇO IMBATÍVEL</span>
        </div>
      );
    }
    return (
      <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1 px-2.5 py-0.5 bg-[#2D3277] text-[#FFE600] font-black text-[10px] sm:text-[11px] rounded-full shadow-[0_2px_0_#181B44] tracking-normal uppercase whitespace-nowrap">
        <Globe className="w-3 h-3 text-[#FFE600] shrink-0" />
        <span>INTERNACIONAL</span>
      </div>
    );
  };

  const handleOpenDeal = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Prioriza o link direto do produto para efetuar a compra com comissão de afiliado
    openAffiliateOffer(product.title, product.affiliateUrl, product.badge);
  };

  return (
    <article
      onClick={handleOpenDeal}
      className="card-3d bg-white rounded-2xl border-2 border-black shadow-[0_5px_0_#111111] overflow-hidden flex flex-col justify-between transition-all relative group cursor-pointer"
    >
      {/* Selo Flutuante Único no Topo (sem sobreposição) */}
      {renderBadge()}

      {/* Área da Imagem Grande */}
      <div className="relative w-full pt-[75%] bg-neutral-100 overflow-hidden border-b-2 border-black/10">
        {!imageError && product.image ? (
          <img
            src={product.image}
            alt={product.title}
            onError={() => setImageError(true)}
            referrerPolicy="no-referrer"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          /* Fallback visual resistente com cores da categoria */
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gradient-to-br from-yellow-50 to-amber-100 text-neutral-800">
            <div className="w-16 h-16 rounded-2xl bg-white border-2 border-black shadow-[0_3px_0_#000] flex items-center justify-center mb-2">
              <Star className="w-8 h-8 text-[#00A650] fill-[#FFE600]" />
            </div>
            <span className="text-xs font-black uppercase tracking-wider text-neutral-600">
              {product.category}
            </span>
          </div>
        )}

        {/* Tag de Destaque Flutuante na imagem */}
        {product.highlightTag && (
          <div className="absolute bottom-2 left-2 z-10 px-2 py-0.5 bg-[#2D3277]/90 backdrop-blur-sm text-[#FFE600] font-bold text-[11px] rounded-md">
            {product.highlightTag}
          </div>
        )}
      </div>

      {/* Informações do Produto */}
      <div className="p-3.5 sm:p-4 flex flex-col flex-grow justify-between gap-2.5">
        {/* Nome do Produto com 2 Linhas Completas Garantidas (sem corte no meio) */}
        <div>
          <h2
            title={product.title}
            className={`font-bold text-[#111111] line-clamp-2 leading-tight h-[2.75rem] sm:h-[3rem] overflow-hidden ${
              isLargeFont ? 'text-base sm:text-lg' : 'text-sm sm:text-base'
            }`}
          >
            {product.title}
          </h2>

          {/* Categoria e Frete */}
          <div className="flex items-center gap-2 mt-1 text-xs text-neutral-600">
            <span className="capitalize font-semibold text-neutral-700">{product.category}</span>
            <span>•</span>
            <span className="flex items-center gap-1 font-bold text-[#00A650]">
              <Truck className="w-3.5 h-3.5" />
              {product.freeShipping ? 'Frete Grátis FULL' : 'Envio Rápido'}
            </span>
          </div>

          {/* Descrição Real e Clara do Produto */}
          {product.description && (
            <p className="mt-2 text-xs text-neutral-600 line-clamp-2 leading-snug bg-amber-50/70 p-2 rounded-lg border border-amber-200/60 font-medium">
              {product.description}
            </p>
          )}
        </div>

        {/* Bloco de Preço */}
        <div className="pt-2 border-t border-neutral-100">
          {/* Preço Antigo Riscado + % Desconto em Badge Amarelo */}
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs text-neutral-500 line-through font-semibold">
              {formatBRL(product.oldPrice)}
            </span>
            <span className="px-2 py-0.5 bg-[#FFE600] text-[#111111] font-black text-xs rounded-md border border-black/30 shadow-[0_1px_0_#000]">
              -{product.discountPercent}% OFF
            </span>
          </div>

          {/* Preço Novo Grande em Verde (#00A650) com destaque 'no Pix' */}
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={`font-black text-[#00A650] tracking-tight ${
                isLargeFont ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
              }`}
            >
              {formatBRL(product.price)}
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-black bg-emerald-50 text-emerald-700 border border-emerald-300 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A650]"></span>
              no Pix
            </span>
          </div>

          {/* Parcelamento Amigável */}
          <p className="text-xs font-semibold text-neutral-600 mt-1">
            {product.installments}
          </p>

          {/* Selo Conforto Idosos Posicionado Embaixo do Preço (NUNCA em cima do selo principal) */}
          {product.targetAudience === 'idosos' && (
            <div className="mt-1.5 inline-flex items-center gap-1 px-2 py-0.5 bg-yellow-100 border border-yellow-300 text-[#2D3277] font-bold text-[11px] rounded-md shadow-xs">
              <span>👵👴 Conforto Idosos</span>
            </div>
          )}
        </div>

        {/* Botão de Vidro Ultra-Realista Azul Oficial com Texto Amarelo: VER OFERTA -> */}
        <div className="pt-1.5">
          <button
            onClick={handleOpenDeal}
            className="glass-btn-blue w-full py-3 px-4 rounded-xl font-black text-sm sm:text-base flex items-center justify-center gap-2 tracking-wide"
          >
            <span>VER OFERTA</span>
            <ArrowRight className="w-4 h-4 text-[#FFE600] stroke-[3]" />
          </button>
        </div>

        {/* Rodapé Interno com Garantia e Teste de Substituição por Indisponibilidade */}
        <div className="flex items-center justify-between pt-1.5 border-t border-neutral-100 text-[11px] text-neutral-500">
          <span className="flex items-center gap-1 font-semibold text-neutral-600">
            <ShieldCheck className="w-3 h-3 text-[#00A650]" />
            Mercado Livre Oficial
          </span>

          <button
            type="button"
            onClick={() => onMarkUnavailable(product.id, product.category)}
            title="Simular produto esgotado para testar a substituição automática por item reserva da mesma categoria"
            className="flex items-center gap-1 text-neutral-400 hover:text-red-600 font-medium transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Esgotou? Trocar</span>
          </button>
        </div>
      </div>
    </article>
  );
};
