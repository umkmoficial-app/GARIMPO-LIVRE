import React, { useState, useEffect } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { CategoryType } from '../types';
import { AFFILIATE_LINKS } from '../utils/affiliateLinks';

interface PedirGarimpoModalProps {
  isOpen: boolean;
  onClose: () => void;
  isLargeFont: boolean;
  initialQuery?: string;
  onRequestSubmitted: (query: string, category: string) => void;
}

export const PedirGarimpoModal: React.FC<PedirGarimpoModalProps> = ({
  isOpen,
  onClose,
  isLargeFont,
  initialQuery = '',
  onRequestSubmitted,
}) => {
  const [productName, setProductName] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('todos');
  const [budgetRange, setBudgetRange] = useState<string>('qualquer');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setProductName(initialQuery || '');
      setIsSuccess(false);
    }
  }, [isOpen, initialQuery]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!productName.trim()) return;

    onRequestSubmitted(productName, selectedCategory);
    setIsSuccess(true);
  };

  const handleOpenDirectML = () => {
    const rawQuery = productName.trim();
    if (!rawQuery) {
      window.open(
        'https://www.mercadolivre.com.br/ofertas?matt_tool=sm20240625081530',
        '_blank',
        'noopener,noreferrer'
      );
      onClose();
      setIsSuccess(false);
      return;
    }

    // Cria o slug otimizado para o Mercado Livre
    const slug = rawQuery
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');

    // Aplica o filtro de orçamento caso o usuário tenha selecionado
    let priceRangeSlug = '';
    if (budgetRange === 'ate150') priceRangeSlug = '_PriceRange_0-150';
    else if (budgetRange === 'ate500') priceRangeSlug = '_PriceRange_0-500';
    else if (budgetRange === 'ate1000') priceRangeSlug = '_PriceRange_0-1000';
    else if (budgetRange === 'ate2000') priceRangeSlug = '_PriceRange_0-2000';
    else if (budgetRange === 'premium') priceRangeSlug = '_PriceRange_2000-0';

    // Pedir Garimpo: Ordenação padrão por Mais Relevantes (melhores vendedores, avaliações e anúncios oficiais)
    const url = `https://lista.mercadolivre.com.br/${slug}${priceRangeSlug}?matt_tool=sm20240625081530`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
    setIsSuccess(false);
  };

  const categoriesList: { id: CategoryType; label: string }[] = [
    { id: 'todos', label: 'Qualquer' },
    { id: 'casa', label: 'Casa' },
    { id: 'eletronicos', label: 'Eletrônicos' },
    { id: 'moda', label: 'Moda' },
    { id: 'beleza', label: 'Beleza' },
    { id: 'ferramentas', label: 'Ferramentas' },
    { id: 'pet', label: 'Pet' },
    { id: 'esporte', label: 'Esporte' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div
        className="w-full max-w-lg bg-white rounded-3xl border-3 border-black shadow-[0_12px_0_#111111] overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Topo do Modal Amarelo Mercado Livre */}
        <div className="bg-[#FFE600] px-5 py-4 border-b-2 border-black flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-black rounded-xl text-[#FFE600]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-black text-lg sm:text-xl text-black leading-tight">
                PEDIR GARIMPO ESPECIAL
              </h3>
              <p className="text-xs font-bold text-neutral-800">
                Nossa equipe busca a melhor oferta sem golpe pra você
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white border-2 border-black shadow-[0_2px_0_#000] flex items-center justify-center text-black hover:bg-neutral-100 active:translate-y-0.5 active:shadow-none transition-all"
            title="Fechar"
          >
            <X className="w-6 h-6 stroke-[2.5]" />
          </button>
        </div>

        {/* Corpo do Modal */}
        <div className="p-5 sm:p-6">
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-black text-sm sm:text-base text-black mb-1.5">
                  1. Qual produto você está procurando?
                </label>
                <input
                  type="text"
                  required
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  placeholder="Ex: Celular Samsung, Tênis para idoso, Air Fryer..."
                  className={`w-full p-3.5 rounded-xl border-2 border-black font-bold focus:outline-none focus:ring-2 focus:ring-[#FFE600] shadow-[0_3px_0_#000] ${
                    isLargeFont ? 'text-lg' : 'text-base'
                  }`}
                />
              </div>

              <div>
                <label className="block font-black text-sm sm:text-base text-black mb-1.5">
                  2. Em qual categoria ele se encaixa?
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {categoriesList.map((cat) => (
                    <button
                      type="button"
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`py-2 px-1 text-center font-bold text-xs rounded-xl border-2 border-black transition-all ${
                        selectedCategory === cat.id
                          ? 'bg-[#FFE600] text-black shadow-[0_3px_0_#000] font-black scale-102'
                          : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700 shadow-[0_2px_0_#000]'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-black text-sm sm:text-base text-black mb-1.5">
                  3. Quanto você pretende gastar aproximadamente?
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs font-bold">
                  {[
                    { id: 'qualquer', label: 'Melhor Preço' },
                    { id: 'ate150', label: 'Até R$ 150' },
                    { id: 'ate500', label: 'Até R$ 500' },
                    { id: 'ate1000', label: 'Até R$ 1.000' },
                    { id: 'ate2000', label: 'Até R$ 2.000' },
                    { id: 'premium', label: 'Mais de R$ 2.000' },
                  ].map((budget) => (
                    <button
                      type="button"
                      key={budget.id}
                      onClick={() => setBudgetRange(budget.id)}
                      className={`py-2 px-2 text-center rounded-xl border-2 border-black transition-all ${
                        budgetRange === budget.id
                          ? 'bg-black text-[#FFE600] font-black shadow-[0_2px_0_#666]'
                          : 'bg-white hover:bg-neutral-100 text-neutral-800 shadow-[0_2px_0_#000]'
                      }`}
                    >
                      {budget.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dica de Segurança */}
              <div className="p-3 bg-green-50 border-2 border-[#00A650] rounded-xl flex items-center gap-2 text-xs font-bold text-green-900">
                <ShieldCheck className="w-5 h-5 text-[#00A650] shrink-0" />
                <span>
                  Você não paga nada por esse serviço. A compra é feita 100% direta no Mercado Livre oficial!
                </span>
              </div>

              {/* Botão de Envio em Vidro Ultra-Realista */}
              <button
                type="submit"
                className="glass-btn-blue w-full py-4 rounded-2xl font-black text-base sm:text-lg flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5 text-[#FFE600]" />
                <span>ENCONTRAR OFERTA AGORA</span>
                <ArrowRight className="w-5 h-5 text-[#FFE600]" />
              </button>
            </form>
          ) : (
            /* Tela de Confirmação & Redirecionamento Imediato */
            <div className="text-center py-4 space-y-4">
              <div className="w-16 h-16 bg-[#00A650] text-white rounded-full flex items-center justify-center mx-auto border-3 border-black shadow-[0_4px_0_#000]">
                <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
              </div>

              <h4 className="text-xl sm:text-2xl font-black text-black">
                Garimpo Encontrado com Sucesso!
              </h4>

              <p className="text-sm font-semibold text-neutral-700 max-w-sm mx-auto">
                Localizamos os melhores vendedores e preços verificados para &ldquo;{productName}&rdquo; no Mercado Livre.
              </p>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-[#181B44] border-2 border-[#2D3277]/30 rounded-full text-xs font-black shadow-xs">
                <span>✨ Mais Relevantes: Melhores anúncios e vendedores oficiais selecionados!</span>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleOpenDirectML}
                  className="glass-btn-yellow w-full py-4 rounded-2xl font-black text-base sm:text-lg flex items-center justify-center gap-2"
                >
                  <span>IR DIRETO PARA A MELHOR OFERTA NO MERCADO LIVRE</span>
                  <ArrowRight className="w-5 h-5 stroke-[3]" />
                </button>
              </div>

              <button
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="text-xs font-bold text-neutral-500 hover:text-black underline"
              >
                Fechar janela
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
