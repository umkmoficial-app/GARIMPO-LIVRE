import { DealBadgeType } from '../types';

export const AFFILIATE_LINKS = {
  TODAS: 'https://lista.mercadolivre.com.br/ofertas-do-dia?matt_tool=sm20240625081530',
  RELAMPAGO: 'https://lista.mercadolivre.com.br/ofertas-relampago_OrderId_PRICE_NoIndex_True?matt_tool=sm20240625081530',
  IMBATIVEL: 'https://lista.mercadolivre.com.br/promocoes-imperdiveis?matt_tool=sm20240625081530',
  INTERNACIONAL: 'https://lista.mercadolivre.com.br/compra-internacional_OrderId_PRICE_NoIndex_True?matt_tool=sm20240625081530',
  ENTREGA_24H: 'https://www.mercadolivre.com.br/ofertas?shipping_cost=fulfillment&shipping=fulfillment&matt_tool=sm20240625081530',
  MAIS_VENDIDOS: 'https://www.mercadolivre.com.br/mais-vendidos?matt_tool=sm20240625081530',
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
 * Cria uma URL de busca no Mercado Livre garantindo a ordenação do MENOR PARA O MAIOR PREÇO
 */
export function buildLowestPriceSearchUrl(searchTerm: string, affiliateTag = 'sm20240625081530'): string {
  const cleanTerm = cleanProductSearchQuery(searchTerm);
  if (!cleanTerm) {
    return AFFILIATE_LINKS.TODAS;
  }

  const slug = cleanTerm
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  return `https://lista.mercadolivre.com.br/${slug}_OrderId_PRICE_NoIndex_True?matt_tool=${affiliateTag}`;
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

  // 2. Se for link de busca no Mercado Livre, garante o sufixo _OrderId_PRICE_NoIndex_True
  if (cleanUrl.includes('lista.mercadolivre.com.br')) {
    let baseUrl = cleanUrl.split('?')[0];
    if (!baseUrl.includes('_OrderId_PRICE')) {
      baseUrl = `${baseUrl}_OrderId_PRICE_NoIndex_True`;
    }
    return `${baseUrl}?matt_tool=sm20240625081530`;
  }

  // 3. Se for busca a partir do título do produto, constrói URL com menor preço garantido
  const query = cleanProductSearchQuery(productTitle);
  if (query.length > 0) {
    return buildLowestPriceSearchUrl(query);
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
