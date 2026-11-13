import React, { useState, useEffect, useCallback } from 'react';
import { Product } from './types';
import {
  getCurrent15MinBatch,
  getCurrent15MinBatchIndex,
  getReplacementProduct,
} from './data/realProducts';
import { Header } from './components/Header';
import { CountdownTimer } from './components/CountdownTimer';
import { HeroSearch } from './components/HeroSearch';
import { QuickDealsGrid } from './components/QuickDealsGrid';
import { BestSellersBanner } from './components/BestSellersBanner';
import { FastDeliveryBanner } from './components/FastDeliveryBanner';
import { ProductCard } from './components/ProductCard';
import { PedirGarimpoModal } from './components/PedirGarimpoModal';
import { AntiFraudCard } from './components/AntiFraudCard';
import { TrustBadgesRow } from './components/TrustBadgesRow';
import { TrustFooter } from './components/TrustFooter';
import { Toast, ToastMessage } from './components/Toast';
import {
  Flame,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import { AFFILIATE_LINKS } from './utils/affiliateLinks';

export const HERO_IMAGE = '/images/garimpo_hero_deals_1793938165209.jpg';

export default function App() {
  // Rotação infinita: 5 produtos sem duplicatas a cada 15 minutos
  const [currentBatchIndex, setCurrentBatchIndex] = useState<number>(() => getCurrent15MinBatchIndex());
  const [productsList, setProductsList] = useState<Product[]>(() => getCurrent15MinBatch());

  // Acessibilidade: Modo de fonte grande para idosos
  const [isLargeFont, setIsLargeFont] = useState<boolean>(false);

  // Modal PEDIR GARIMPO
  const [isPedirGarimpoOpen, setIsPedirGarimpoOpen] = useState<boolean>(false);

  // Toasts
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Helper para adicionar Toast
  const addToast = useCallback((title: string, description: string, type: 'success' | 'info' | 'warning' = 'info') => {
    const newToast: ToastMessage = {
      id: Math.random().toString(36).substring(2, 9),
      title,
      description,
      type,
    };
    setToasts((prev) => [newToast, ...prev.slice(0, 3)]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
    }, 4500);
  }, []);

  // Rotação infinita silenciosa: a cada 15 minutos entram 5 novos produtos sem repetição
  useEffect(() => {
    const checkBatchRotation = () => {
      const now = Date.now();
      const newIndex = getCurrent15MinBatchIndex(now);

      // Virou o bloco de 15 minutos: troca o lote de 5 produtos sem duplicatas
      if (newIndex !== currentBatchIndex) {
        setCurrentBatchIndex(newIndex);
        const newBatch = getCurrent15MinBatch(now);
        setProductsList(newBatch);
        addToast(
          'Vitrine Atualizada!',
          'Novos produtos oficiais verificados entraram na vitrine.',
          'success'
        );
      }
    };

    checkBatchRotation();
    const timer = setInterval(checkBatchRotation, 5000);

    const handleSync = () => {
      checkBatchRotation();
    };
    window.addEventListener('focus', handleSync);
    document.addEventListener('visibilitychange', handleSync);

    return () => {
      clearInterval(timer);
      window.removeEventListener('focus', handleSync);
      document.removeEventListener('visibilitychange', handleSync);
    };
  }, [currentBatchIndex, addToast]);

  // Substituição por indisponibilidade (ou aviso quando operando em lote único de 5 ofertas)
  const handleMarkUnavailable = useCallback(
    (productId: string) => {
      const currentIds = productsList.map((p) => p.id);
      const replacement = getReplacementProduct(currentIds);

      if (!replacement) {
        addToast(
          'Lote Único de 5 Ofertas',
          'A vitrine está trabalhando exclusivamente com este lote de 5 produtos oficiais.',
          'info'
        );
        return;
      }

      setProductsList((prev) => prev.map((p) => (p.id === productId ? replacement : p)));
      addToast(
        'Produto Substituído!',
        'Item esgotado substituído por outra oferta oficial disponível sem repetição.',
        'success'
      );
    },
    [productsList, addToast]
  );

  const handlePedirGarimpoSubmit = (query: string) => {
    addToast(
      'Pedido de Garimpo Registrado!',
      `Estamos rastreando as melhores ofertas de "${query}" no Mercado Livre.`,
      'success'
    );
  };

  return (
    <div className={`min-h-screen bg-[#F5F5F5] flex flex-col ${isLargeFont ? 'text-lg' : 'text-base'}`}>
      {/* 1. TOPO: Identidade Mercado Livre com Azul Oficial #2D3277 e Amarelo #FFE600 */}
      <Header />

      {/* 2. CRONÔMETRO REGRESSIVO EM TEMPO REAL: CICLO DE 10 HORAS INFINITO */}
      <CountdownTimer isLargeFont={isLargeFont} />

      {/* 3. BOTÃO PEDIR GARIMPO */}
      <HeroSearch
        onOpenPedirGarimpo={() => setIsPedirGarimpoOpen(true)}
        isLargeFont={isLargeFont}
      />

      {/* 3. BANNER DE DESTAQUE COM CORES MERCADO LIVRE */}
      <section className="max-w-7xl mx-auto px-4 pt-4 pb-2 w-full">
        <div className="bg-gradient-to-r from-[#FFE600] to-yellow-300 rounded-3xl border-3 border-[#2D3277] shadow-[0_8px_0_#2D3277] overflow-hidden flex flex-col md:flex-row items-center justify-between">
          <div className="p-6 md:p-8 flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#2D3277] text-[#FFE600] rounded-full text-xs font-black uppercase tracking-wider mb-3 shadow-[0_2px_0_#181B44]">
              <Flame className="w-4 h-4 fill-[#FFE600]" />
              <span>Ofertas Verificadas Mercado Livre</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#2D3277] leading-tight mb-2">
              Até 80% de Desconto Real com Entrega FULL
            </h2>
            <p className="text-sm sm:text-base font-bold text-neutral-900 mb-5 max-w-xl">
              5 produtos selecionados a dedo com compra protegida. Clique em <strong>VER OFERTA</strong> e compre diretamente no anúncio oficial.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              <a
                href={AFFILIATE_LINKS.TODAS}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-[3px] rounded-2xl font-black overflow-hidden cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_8px_25px_-5px_rgba(24,27,68,0.5)] inline-flex"
                title="Ver todas as ofertas oficiais no Mercado Livre"
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
                <span className="relative z-10 w-full h-full px-6 py-3 rounded-[13px] bg-gradient-to-b from-[#363E96] via-[#262C73] to-[#181B44] text-[#FFE600] font-black text-sm flex items-center justify-center gap-2 text-center tracking-wide shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),inset_0_-2px_3px_rgba(0,0,0,0.4)]">
                  <span>VER TODAS AS OFERTAS OFICIAIS</span>
                  <ExternalLink className="w-4 h-4 text-[#FFE600] shrink-0" />
                </span>
              </a>
            </div>
          </div>

          <div className="w-full md:w-5/12 h-52 md:h-64 relative border-t-2 md:border-t-0 md:border-l-3 border-[#2D3277] overflow-hidden bg-white">
            <img
              src={HERO_IMAGE}
              alt="Mercado Livre Caixas de Entrega e Ofertas"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 4. GRADE DE 4 BOTÕES: Ofertas do Dia, Ofertas Relâmpago, Preço Imbatível, Ofertas Internacionais */}
      <QuickDealsGrid isLargeFont={isLargeFont} />

      {/* 5. VITRINE DE PRODUTOS REAIS */}
      <main className="max-w-7xl mx-auto px-4 py-6 w-full flex-grow">
        {/* Cabeçalho da Vitrine */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b-2 border-neutral-200">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-2xl sm:text-3xl font-black text-[#2D3277] tracking-tight">
                Vitrine de Ofertas Reais
              </h2>
              <span className="px-2.5 py-0.5 bg-yellow-200 text-neutral-900 text-xs font-bold rounded-full border border-black/20 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00A650]" />
                Links Diretos Oficiais
              </span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 font-semibold mt-1">
              Produtos verificados com compra protegida e garantia oficial do Mercado Livre.
            </p>
          </div>
        </div>

        {/* Grade de Produtos Reais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {productsList.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isLargeFont={isLargeFont}
              onMarkUnavailable={() => handleMarkUnavailable(product.id)}
            />
          ))}
        </div>

        {/* CARD PRODUTOS MAIS VENDIDOS DO MERCADO LIVRE */}
        <BestSellersBanner isLargeFont={isLargeFont} />

        {/* CARD IA DE PROTEÇÃO ATIVA */}
        <AntiFraudCard isLargeFont={isLargeFont} />

        {/* CARD PRODUTOS COM ENTREGA EM ATÉ 24 HORAS (FULL) - DEBAIXO DO CARD IA DE PROTEÇÃO ATIVA */}
        <FastDeliveryBanner isLargeFont={isLargeFont} />

        {/* Selo Visual de Confiança: Compra Garantida */}
        <TrustBadgesRow isLargeFont={isLargeFont} />
      </main>

      {/* 7. MODAL PEDIR GARIMPO */}
      <PedirGarimpoModal
        isOpen={isPedirGarimpoOpen}
        onClose={() => setIsPedirGarimpoOpen(false)}
        isLargeFont={isLargeFont}
        initialQuery=""
        onRequestSubmitted={handlePedirGarimpoSubmit}
      />

      {/* 7. TOAST NOTIFICATIONS */}
      <Toast toasts={toasts} onDismiss={(id) => setToasts((prev) => prev.filter((t) => t.id !== id))} />

      {/* 8. RODAPÉ DE CONFIANÇA */}
      <TrustFooter isLargeFont={isLargeFont} />
    </div>
  );
}
