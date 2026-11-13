import { Product } from '../types';

// Imagens Oficiais dos 5 Produtos do Lote Único
export const CHALEIRA_UNITERMI_IMAGE = '/images/prod_chaleira_unitermi.jpg';
export const FRITADEIRA_MONDIAL_IMAGE = '/images/prod_fritadeira_mondial_12l.jpg';
export const KIT_FERRAMENTAS_IMAGE = '/images/prod_kit_ferramentas_11p.jpg';
export const CARREGADOR_WOOSH_IMAGE = '/images/prod_carregador_bateria_woosh.jpg';
export const POWERBANK_BASIKE_IMAGE = '/images/prod_powerbank_basike_20000.jpg';

// ==========================================
// LOTE ÚNICO (5 PRODUTOS OFICIAIS ATUALIZADOS)
// ==========================================
export const BATCH_1: Product[] = [
  {
    id: 'prod_lote_1',
    title: 'Chaleira Elétrica Atacama 1,8L - Unitermi',
    category: 'casa',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 89.99,
    price: 38.99,
    discountPercent: 56,
    rating: 4.8,
    reviewsCount: 191852,
    freeShipping: true,
    shift: 'manha',
    isAvailable: true,
    image: CHALEIRA_UNITERMI_IMAGE,
    description:
      'Com sistema bivolt para uso em diferentes tensões, base removível que facilita o manuseio e design moderno em aço inox de 1,8L.',
    installments: 'Preço à vista ou no Pix R$ 38,99',
    affiliateUrl:
      'https://www.mercadolivre.com.br/chaleira-eletrica-atacama-18l-unitermi/p/MLB13409956?matt_tool=sm20240625081530',
    targetAudience: 'todos',
    highlightTag: '1º Mais Vendido • FULL',
  },
  {
    id: 'prod_lote_2',
    title: 'Fritadeira Elétrica AFON-12L-BG Forno Oven 12 Litros Preto Mondial',
    category: 'casa',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 899.0,
    price: 490.82,
    discountPercent: 45,
    rating: 4.9,
    reviewsCount: 59299,
    freeShipping: true,
    shift: 'manha',
    isAvailable: true,
    image: FRITADEIRA_MONDIAL_IMAGE,
    description:
      '2 em 1: Air Fryer e Forno Oven de 12 litros com 3 assadeiras antiaderentes e painel digital com 10 funções pré-definidas.',
    installments: '10x de R$ 50,60 sem juros ou R$ 490,82 no Pix',
    affiliateUrl:
      'https://www.mercadolivre.com.br/fritadeira-eletrica-afon-12l-bg-forno-oven-12-litros-preto-mondial/p/MLB44117615?matt_tool=sm20240625081530',
    targetAudience: 'todos',
    highlightTag: 'Mondial 12L • FULL',
  },
  {
    id: 'prod_lote_3',
    title: 'Kit Jogo De Ferramentas Aço Carbono Titanium 11 Peças',
    category: 'ferramentas',
    badge: 'RELÂMPAGO',
    oldPrice: 29.9,
    price: 21.9,
    discountPercent: 26,
    rating: 4.5,
    reviewsCount: 3483,
    freeShipping: true,
    shift: 'tarde',
    isAvailable: true,
    image: KIT_FERRAMENTAS_IMAGE,
    description:
      'Kit completo em aço carbono com maleta organizadora para realizar diversos reparos mecânicos e domésticos em um único conjunto.',
    installments: 'Preço à vista ou no Pix R$ 21,90',
    affiliateUrl:
      'https://www.mercadolivre.com.br/kit-jogo-de-ferramentas-aco-carbono-titanium-11-pecas/p/MLB78796303?matt_tool=sm20240625081530',
    targetAudience: 'todos',
    highlightTag: '1º Mais Vendido • Maleta',
  },
  {
    id: 'prod_lote_4',
    title: 'Carregador Inteligente De Bateria Automotiva 12v 6a Bivolt Woosh',
    category: 'ferramentas',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 78.99,
    price: 38.99,
    discountPercent: 50,
    rating: 4.8,
    reviewsCount: 19458,
    freeShipping: true,
    shift: 'tarde',
    isAvailable: true,
    image: CARREGADOR_WOOSH_IMAGE,
    description:
      'Carregador 12V 6A bivolt 90W com display digital para baterias de 4Ah a 100Ah e proteção inteligente contra curto-circuito e sobrecarga.',
    installments: 'Preço à vista ou no Pix R$ 38,99',
    affiliateUrl:
      'https://www.mercadolivre.com.br/carregador-inteligente-de-bateria-automotiva-12v-6a-bivolt-recupera-baterias-4ah-a-100ah-todos-veiculos-moto-carro-caminhao-barco-woosh/p/MLB65770538?matt_tool=sm20240625081530',
    targetAudience: 'todos',
    highlightTag: '50% OFF • Bivolt FULL',
  },
  {
    id: 'prod_lote_5',
    title: 'Power Bank Basike 20000mAh Preto Carga Rápida 22.5W Cabos Embutidos',
    category: 'eletronicos',
    badge: 'RELÂMPAGO',
    oldPrice: 213.88,
    price: 136.88,
    discountPercent: 36,
    rating: 4.8,
    reviewsCount: 22151,
    freeShipping: true,
    shift: 'noite',
    isAvailable: true,
    image: POWERBANK_BASIKE_IMAGE,
    description:
      'Alta capacidade de 20.000mAh com carregamento ultrarrápido 22,5W, display inteligente e 4 saídas com cabos embutidos USB-C e Lightning.',
    installments: '12x de R$ 13,53 ou R$ 136,88 no Pix',
    affiliateUrl:
      'https://www.mercadolivre.com.br/power-bank-basike-20000mah-preto-carga-rapida-225w-para-iphone-e-samsung-com-cabos-embutidos-e-display/p/MLB50592250?matt_tool=sm20240625081530',
    targetAudience: 'todos',
    highlightTag: '20.000mAh • 22.5W FULL',
  },
];

// Lote único com 5 produtos
export const REAL_PRODUCTS_BATCHES: Product[][] = [BATCH_1];

// Catálogo com os 5 produtos oficiais
export const REAL_PRODUCTS_CATALOG: Product[] = [...BATCH_1];

// Compatibilidade com importações anteriores
export const REAL_PRODUCTS: Product[] = BATCH_1;

export const FIFTEEN_MINUTES_MS = 15 * 60 * 1000;

/**
 * Retorna o índice do lote único (sempre 0)
 */
export function getCurrent15MinBatchIndex(_timestamp: number = Date.now()): number {
  return 0;
}

/**
 * Retorna o lote único de 5 produtos da vitrine
 */
export function getCurrent15MinBatch(_timestamp: number = Date.now()): Product[] {
  return [...BATCH_1];
}

/**
 * Sem produtos reserva no modo de lote único
 */
export function getReplacementProduct(_currentProductIds: string[]): Product | null {
  return null;
}
