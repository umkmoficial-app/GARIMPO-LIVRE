import { DealBadgeType } from '../types';

export const AFFILIATE_LINKS = {
  TODAS: 'https://www.mercadolivre.com.br/ofertas?container_id=MLB779362-1&matt_tool=sm20240625081530',
  RELAMPAGO: 'https://www.mercadolivre.com.br/ofertas?container_id=MLB779362-1&promotion_type=lightning&matt_tool=sm20240625081530',
  IMBATIVEL: 'https://www.mercadolivre.com.br/ofertas?container_id=MLB1298579-1&deal_ids=MLB1298579&matt_tool=sm20240625081530',
  INTERNACIONAL: 'https://www.mercadolivre.com.br/ofertas?container_id=MLB1442406-1&matt_tool=sm20240625081530',
  ENTREGA_24H: 'https://www.mercadolivre.com.br/ofertas?shipping_cost=fulfillment&shipping=fulfillment&matt_tool=sm20240625081530',
};

/**
 * Retorna o link oficial de afiliado do Mercado Livre com base no selo da oferta.
 */
export function getAffiliateUrlByBadge(badge?: DealBadgeType | string): string {
  if (!badge) return AFFILIATE_LINKS.TODAS;
  
  const b = String(badge).toUpperCase();
  if (b.includes('RELÂMPAGO') || b.includes('RELAMPAGO') || b.includes('OFERTA_RELAMPAGO')) {
    return AFFILIATE_LINKS.RELAMPAGO;
  }
  if (b.includes('IMBATÍVEL') || b.includes('IMBATIVEL') || b.includes('PRECO_IMBATIVEL')) {
    return AFFILIATE_LINKS.IMBATIVEL;
  }
  if (b.includes('INTERNACIONAL')) {
    return AFFILIATE_LINKS.INTERNACIONAL;
  }

  return AFFILIATE_LINKS.TODAS;
}

/**
 * Limpa o nome do produto para busca direta precisa no Mercado Livre
 */
export function cleanProductSearchQuery(title: string): string {
  if (!title) return '';
  return title
    .replace(/^["']|["']$/g, '')
    .trim();
}

/**
 * Gera a URL DIRETA para compra do produto específico no Mercado Livre.
 * Se o link for um link genérico (container de ofertas sem o produto),
 * direciona o cliente diretamente para a página de compra do produto exato com tag de comissão.
 */
export function getDirectProductPurchaseUrl(
  productTitle: string,
  affiliateUrl?: string,
  badge?: DealBadgeType | string
): string {
  const cleanUrl = (affiliateUrl || '').trim();

  // 1. Se já for um link direto de produto individual (anúncio individual, catálogo /p/ ou variação /up/)
  if (
    cleanUrl.includes('produto.mercadolivre.com.br') ||
    cleanUrl.includes('/p/MLB') ||
    cleanUrl.includes('/up/MLB') ||
    cleanUrl.includes('/up/') ||
    cleanUrl.includes('/item/')
  ) {
    if (!cleanUrl.includes('matt_tool')) {
      const sep = cleanUrl.includes('?') ? '&' : '?';
      return `${cleanUrl}${sep}matt_tool=sm20240625081530`;
    }
    return cleanUrl;
  }

  // 2. Se for um link de busca já parametrizada com o produto específico
  if (cleanUrl.includes('q=') || cleanUrl.includes('lista.mercadolivre.com.br')) {
    if (!cleanUrl.includes('matt_tool')) {
      const sep = cleanUrl.includes('?') ? '&' : '?';
      return `${cleanUrl}${sep}matt_tool=sm20240625081530`;
    }
    return cleanUrl;
  }

  // 3. Se for link de container genérico ou ausente, gera o link de compra direto para o produto no Mercado Livre
  const query = cleanProductSearchQuery(productTitle);
  if (query.length > 0) {
    const encoded = encodeURIComponent(query);
    // lista.mercadolivre.com.br leva direto à lista de compra daquele produto exato com a comissão do afiliado
    return `https://lista.mercadolivre.com.br/${encoded}?matt_tool=sm20240625081530`;
  }

  // 4. Fallback final
  return cleanUrl || getAffiliateUrlByBadge(badge);
}

/**
 * Abre a oferta no Mercado Livre diretamente no produto para o cliente efetuar a compra com sua comissão.
 * Suporta assinatura flexível (objeto produto ou strings).
 */
export function openAffiliateOffer(
  firstArg: string | { title?: string; affiliateUrl?: string; badge?: DealBadgeType | string },
  secondArg?: string,
  thirdArg?: DealBadgeType | string
) {
  let title = '';
  let url: string | undefined;
  let badge: DealBadgeType | string | undefined;

  if (typeof firstArg === 'object' && firstArg !== null) {
    title = firstArg.title || '';
    url = firstArg.affiliateUrl;
    badge = firstArg.badge;
  } else if (typeof firstArg === 'string') {
    if (firstArg.startsWith('http')) {
      url = firstArg;
      badge = secondArg;
    } else {
      title = firstArg;
      url = secondArg;
      badge = thirdArg;
    }
  }

  const targetUrl = getDirectProductPurchaseUrl(title, url, badge);
  window.open(targetUrl, '_blank', 'noopener,noreferrer');
}
