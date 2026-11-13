import React from 'react';
import { Zap, Star, Globe, Flame, ExternalLink } from 'lucide-react';
import { AFFILIATE_LINKS } from '../utils/affiliateLinks';

interface QuickDealsGridProps {
  isLargeFont: boolean;
}

export const QuickDealsGrid: React.FC<QuickDealsGridProps> = ({ isLargeFont }) => {
  const quickDeals = [
    {
      title: 'Ofertas do Dia',
      icon: Flame,
      url: AFFILIATE_LINKS.TODAS,
      bgClass: 'glass-btn-yellow',
      iconClass: 'text-[#E60000] fill-[#E60000]',
      badgeText: 'Mais Relevantes',
    },
    {
      title: 'Ofertas Relâmpago',
      icon: Zap,
      url: AFFILIATE_LINKS.RELAMPAGO,
      bgClass: 'glass-btn-red',
      iconClass: 'text-[#FFE600] fill-[#FFE600] animate-pulse',
      badgeText: 'Mais Baratas 1º',
    },
    {
      title: 'Preço Imbatível',
      icon: Star,
      url: AFFILIATE_LINKS.IMBATIVEL,
      bgClass: 'glass-btn-green',
      iconClass: 'text-[#FFE600] fill-[#FFE600]',
      badgeText: 'Mais Relevantes',
    },
    {
      title: 'Ofertas Internacionais',
      icon: Globe,
      url: AFFILIATE_LINKS.INTERNACIONAL,
      bgClass: 'glass-btn-blue',
      iconClass: 'text-[#FFE600]',
      badgeText: 'Mais Baratos 1º',
    },
  ];

  const handleOpenDeal = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="max-w-7xl mx-auto px-4 pt-3 pb-2 w-full">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {quickDeals.map((deal) => {
          const Icon = deal.icon;
          return (
            <button
              key={deal.title}
              onClick={() => handleOpenDeal(deal.url)}
              className={`p-3.5 sm:p-4 rounded-2xl font-black flex flex-col items-center justify-center gap-1.5 transition-all text-center relative cursor-pointer ${deal.bgClass}`}
              title={`Ver ${deal.title} no Mercado Livre`}
            >
              <div className="flex items-center gap-1.5">
                <Icon className="w-5 h-5 shrink-0" />
                <span className={`font-black leading-tight ${isLargeFont ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'}`}>
                  {deal.title}
                </span>
              </div>
              <span className="text-[11px] font-bold opacity-90 flex items-center gap-1 tracking-tight">
                <span>{deal.badgeText}</span>
                <ExternalLink className="w-3 h-3 stroke-[2.5]" />
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
};
