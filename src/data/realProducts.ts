import { Product } from '../types';

// Imagens Oficiais dos Produtos no diretório público
export const PERFUME_IMAGE = '/images/perfume_asad_bourbon_1793952293980.jpg';
export const FECHADURA_IMAGE = '/images/fechadura_digital_intelbras_1793952294535.jpg';
export const ESMERILHADEIRA_IMAGE = '/images/esmerilhadeira_angular_1793952326110.jpg';
export const CADEIRA_IMAGE = '/images/cadeira_ergonomica_nr17_1793952310947.jpg';
export const SHORTS_IMAGE = '/images/shorts_dryfit_masculino_1793952326971.jpg';

export const CAIXA_SOM_COOLMUSIC_IMAGE = '/images/caixa_som_coolmusic_6w.jpg';
export const LANTERNA_IMAGE = '/images/lanterna_tatica_t9.jpg';
export const CHALEIRA_IMAGE = '/images/chaleira_eletrica_inox.jpg';
export const CUECAS_LUPO_IMAGE = '/images/cuecas_lupo_boxer.jpg';
export const MANGUEIRA_IMAGE = '/images/mangueira_jardim_30m.jpg';

export const TESTO_MULHERES_IMAGE = '/images/testo_essencial_mulheres.jpg';
export const TENIS_MIZUNO_IMAGE = '/images/tenis_mizuno_creation.jpg';
export const EXTRATORA_WAP_IMAGE = '/images/extratora_wap_cleaner.jpg';
export const OCULOS_IA_IMAGE = '/images/oculos_tradutor_ia.jpg';
export const CALCA_CARGO_IMAGE = '/images/calca_tatica_cargo.jpg';

// ==========================================
// LOTE 1 (5 PRODUTOS DISTINTOS)
// ==========================================
export const BATCH_1: Product[] = [
  {
    id: 'prod_real_1',
    title: 'Perfume Árabe Asad Bourbon Original Masculino 100ml Isabelle',
    category: 'beleza',
    badge: 'INTERNACIONAL',
    oldPrice: 149.99,
    price: 78.98,
    discountPercent: 47,
    rating: 4.8,
    reviewsCount: 2328,
    freeShipping: true,
    shift: 'manha',
    isAvailable: true,
    image: PERFUME_IMAGE,
    description: 'Fragrância árabe masculina marcante com notas amadeiradas, toque quente de especiarias e fixação prolongada de alta projeção.',
    installments: '12x de R$ 7,78 ou R$ 78,98 no Pix',
    affiliateUrl: 'https://www.mercadolivre.com.br/perfume-arabe-asad-bourbon-original-masculino-100ml-isabelle/up/MLBU3860438886?pdp_filters=item_id%3AMLB4546076673&matt_tool=sm20240625081530',
    targetAudience: 'todos',
    highlightTag: 'Importado Original',
  },
  {
    id: 'prod_real_3',
    title: 'Fechadura Digital de Sobrepor FR 101 V Preta Intelbras',
    category: 'casa',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 359.90,
    price: 220.50,
    discountPercent: 38,
    rating: 4.9,
    reviewsCount: 15006,
    freeShipping: true,
    shift: 'manha',
    isAvailable: true,
    image: FECHADURA_IMAGE,
    description: 'Abertura rápida por teclado touch screen numérico até 4 senhas, travamento automático da porta e alarme sonoro antiarrombamento.',
    installments: 'Preço no Pix ou 6x de R$ 40,83 sem juros',
    affiliateUrl: 'https://www.mercadolivre.com.br/fechadura-digital-de-sobrepor-fr-101-v-preta-intelbras/p/MLB63279922?pdp_filters=deal%3AMLB1298579-1&matt_tool=sm20240625081530',
    targetAudience: 'todos',
    highlightTag: 'Intelbras Oficial',
  },
  {
    id: 'prod_real_5',
    title: 'Esmerilhadeira e Lixadeira Angular 880W 115mm 11000RPM Profissional',
    category: 'ferramentas',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 224.00,
    price: 126.99,
    discountPercent: 43,
    rating: 4.8,
    reviewsCount: 11100,
    freeShipping: true,
    shift: 'tarde',
    isAvailable: true,
    image: ESMERILHADEIRA_IMAGE,
    description: 'Potente motor de 880W com 11.000 rotações por minuto, capa protetora de disco regulável e empunhadura ergonômica auxiliar de 2 posições.',
    installments: '12x de R$ 12,55 ou R$ 126,99 no Pix',
    affiliateUrl: 'https://produto.mercadolivre.com.br/MLB-4700283122-esmerilhadeira-lixadeira-angular-880w-115mm-11000rpm-_JM?matt_tool=sm20240625081530',
    targetAudience: 'todos',
    highlightTag: 'Potência 880W',
  },
  {
    id: 'prod_real_8',
    title: 'Cadeira de Escritório Presidente NR17 120kg Ergonômica Giratória Tela Mesh',
    category: 'casa',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 659.00,
    price: 337.62,
    discountPercent: 48,
    rating: 4.7,
    reviewsCount: 3646,
    freeShipping: true,
    shift: 'noite',
    isAvailable: true,
    image: CADEIRA_IMAGE,
    description: 'Certificação ergonômica NR17 com apoio de cabeça e lombar, tela mesh antitranspirante, mecanismo de reclinação relax e base giratória 360° reforçada.',
    installments: '12x de R$ 33,03 ou R$ 337,62 no Pix',
    affiliateUrl: 'https://www.mercadolivre.com.br/cadeira-de-escritorio-presidente-nr17-120kg-ergonomica-giratoria-com-tela-mesh-columbus-homenow-cor-preto/p/MLB57032440?pdp_filters=deal%3AMLB779362-1&matt_tool=sm20240625081530',
    targetAudience: 'todos',
    highlightTag: 'Ergonomia NR17',
  },
  {
    id: 'prod_real_10',
    title: 'Kit 4 Shorts 2 em 1 Duplo DryFit Masculino Compressão Térmico Treino',
    category: 'moda',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 142.00,
    price: 89.99,
    discountPercent: 36,
    rating: 4.6,
    reviewsCount: 16066,
    freeShipping: true,
    shift: 'manha',
    isAvailable: true,
    image: SHORTS_IMAGE,
    description: 'Camada externa DryFit respirável com bermuda interna de compressão que evita atrito entre as pernas, bolso interno para celular e cordão ajustável.',
    installments: '12x de R$ 8,86 ou R$ 89,99 no Pix',
    affiliateUrl: 'https://produto.mercadolivre.com.br/MLB-6203660830-kit-4-shorts-2-em-1-duplo-dryfit-masculino-compresso-termic-_JM?matt_tool=sm20240625081530',
    targetAudience: 'todos',
    highlightTag: 'Kit com 4 Peças',
  },
];

// ==========================================
// LOTE 2 (5 PRODUTOS DISTINTOS)
// ==========================================
export const BATCH_2: Product[] = [
  {
    id: 'prod_real_11',
    title: 'Caixa Caixinha De Som Potente Pc Notebook Subwoofer Para Computador 6w Usb P2 Alto Falante De Mesa Coolmusic',
    category: 'eletronicos',
    badge: 'RELÂMPAGO',
    oldPrice: 49.90,
    price: 23.40,
    discountPercent: 53,
    rating: 4.7,
    reviewsCount: 14000,
    freeShipping: true,
    shift: 'manha',
    isAvailable: true,
    image: CAIXA_SOM_COOLMUSIC_IMAGE,
    description: 'Potência de 6W RMS com som estéreo nítido, conexão P2 de 3.5mm para áudio e USB para alimentação direta no PC e notebook.',
    installments: 'Preço à vista ou no Pix R$ 23,40',
    affiliateUrl: 'https://www.mercadolivre.com.br/caixa-caixinha-de-som-potente-pc-notebook-subwoofer-para-computador-6w-usb-p2-alto-falante-de-mesa-coolmusic/p/MLB53988081?pdp_filters=item_id%3AMLB5677676192&matt_tool=sm20240625081530',
    targetAudience: 'todos',
    highlightTag: 'Potência 6W RMS',
    isLowStock: true,
    lowStockCount: 4,
  },
  {
    id: 'prod_real_12',
    title: 'Lanterna Tática Mais Forte Do Mundo T9 Potente Recarregável',
    category: 'esporte',
    badge: 'RELÂMPAGO',
    oldPrice: 84.03,
    price: 50.23,
    discountPercent: 40,
    rating: 4.8,
    reviewsCount: 7413,
    freeShipping: true,
    shift: 'tarde',
    isAvailable: true,
    image: LANTERNA_IMAGE,
    description: 'Super LED T9 de alta potência e longo alcance, bateria recarregável via USB e 5 modos de iluminação com zoom.',
    installments: '12x de R$ 5,70 ou R$ 50,23 no Pix',
    affiliateUrl: 'https://www.mercadolivre.com.br/lanterna-tatica-mais-forte-do-mundo-t9-potente-recarregavel/up/MLBU3668983470?pdp_filters=deal%3AMLB779362-1&matt_tool=sm20240625081530',
    targetAudience: 'todos',
    highlightTag: 'Super Potente T9',
  },
  {
    id: 'prod_real_13',
    title: 'Chaleira Elétrica Inox 1,8L Ferve Água Rápido Café 220v Inox 127v',
    category: 'casa',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 59.90,
    price: 38.29,
    discountPercent: 36,
    rating: 4.8,
    reviewsCount: 3609,
    freeShipping: true,
    shift: 'manha',
    isAvailable: true,
    image: CHALEIRA_IMAGE,
    description: 'Capacidade de 1,8 litros com aquecimento ultrarrápido em aço inox e desligamento automático de segurança.',
    installments: 'Preço à vista ou no Pix R$ 38,29',
    affiliateUrl: 'https://www.mercadolivre.com.br/chaleira-eletrica-inox-18l-ferve-agua-rapido-cafe-220v-inox/p/MLB77365894?pdp_filters=deal%3AMLB779362-1&matt_tool=sm20240625081530',
    targetAudience: 'todos',
    highlightTag: 'Inox 1,8 Litros',
  },
  {
    id: 'prod_real_14',
    title: 'Kit 6 Cuecas Lupo Boxer Box Sem Costura Basic Microfibra',
    category: 'moda',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 288.63,
    price: 119.99,
    discountPercent: 58,
    rating: 4.9,
    reviewsCount: 63536,
    freeShipping: true,
    shift: 'noite',
    isAvailable: true,
    image: CUECAS_LUPO_IMAGE,
    description: 'Kit oficial Lupo com 6 cuecas boxer em microfibra macia sem costura, ajuste anatômico perfeito e toque suave.',
    installments: '12x de R$ 11,86 ou R$ 119,99 no Pix',
    affiliateUrl: 'https://produto.mercadolivre.com.br/MLB-1010954920-kit-6-cuecas-lupo-boxer-box-sem-costura-basic-microfibra-_JM?matt_tool=sm20240625081530',
    targetAudience: 'todos',
    highlightTag: 'Kit 6 Peças Lupo',
  },
  {
    id: 'prod_real_15',
    title: 'Mangueira Jardim 30 Metros Com Esguicho Trançada Reforçada Marqs',
    category: 'casa',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 69.90,
    price: 57.90,
    discountPercent: 17,
    rating: 4.4,
    reviewsCount: 110078,
    freeShipping: true,
    shift: 'manha',
    isAvailable: true,
    image: MANGUEIRA_IMAGE,
    description: 'Comprimento de 30 metros com camada tripla de PVC trançado anti-dobra e esguicho regulável reforçado.',
    installments: '12x de R$ 5,70 ou R$ 57,90 no Pix',
    affiliateUrl: 'https://www.mercadolivre.com.br/mangueira-jardim-30-metros-com-esguicho-trancada-reforcada-flexivel-716-anti-dobra-irrigacao-quintal-poco-lavagem-duravel-marqs-home/p/MLB38284182?pdp_filters=deal%3AMLB779362-1&matt_tool=sm20240625081530',
    targetAudience: 'todos',
    highlightTag: 'Trançada 30 Metros',
  },
];

// ==========================================
// LOTE 3 (5 PRODUTOS DISTINTOS)
// ==========================================
export const BATCH_3: Product[] = [
  {
    id: 'prod_real_16',
    title: 'Testo Essencial Mulheres 60 Cápsulas Feno Grego Boro Arginina ZMA',
    category: 'beleza',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 104.77,
    price: 54.77,
    discountPercent: 47,
    rating: 4.8,
    reviewsCount: 3869,
    freeShipping: true,
    shift: 'manha',
    isAvailable: true,
    image: TESTO_MULHERES_IMAGE,
    description: 'Fórmula exclusiva feminina com feno grego, boro, arginina, ZMA, biotina e vitaminas B6 e B12 para vitalidade e disposição.',
    installments: 'Preço à vista ou no Pix R$ 54,77',
    affiliateUrl: 'https://www.mercadolivre.com.br/testo-essencial-para-mulheres-formula-exclusiva-com-feno-grego-boro-arginina-zma-biotina-vitaminas-b6-e-b12-60-capsulas/p/MLB70523626?pdp_filters=deal%3AMLB779362-1&matt_tool=sm20240625081530',
    targetAudience: 'todos',
    highlightTag: 'Fórmula Exclusiva',
  },
  {
    id: 'prod_real_17',
    title: 'Tênis Mizuno Academia Creation Caminhada Corrida Conforto',
    category: 'moda',
    badge: 'RELÂMPAGO',
    oldPrice: 339.90,
    price: 89.90,
    discountPercent: 73,
    rating: 4.4,
    reviewsCount: 179,
    freeShipping: true,
    shift: 'tarde',
    isAvailable: true,
    image: TENIS_MIZUNO_IMAGE,
    description: 'Amortecimento Wave de alta absorção de impacto, cabedal em mesh respirável para caminhada, academia e corrida.',
    installments: '12x de R$ 8,85 ou R$ 89,90 no Pix',
    affiliateUrl: 'https://produto.mercadolivre.com.br/MLB-7846891628-tnis-mizuno-academia-creation-caminhada-corrida-conforto-_JM?searchVariation=208013937089&matt_tool=sm20240625081530',
    targetAudience: 'todos',
    highlightTag: 'Mizuno Wave 73% OFF',
  },
  {
    id: 'prod_real_18',
    title: 'Extratora de Sujeira Portátil WAP Spot Cleaner W3 1450W',
    category: 'casa',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 948.57,
    price: 484.90,
    discountPercent: 48,
    rating: 4.9,
    reviewsCount: 24454,
    freeShipping: true,
    shift: 'manha',
    isAvailable: true,
    image: EXTRATORA_WAP_IMAGE,
    description: 'Função 3 em 1: borrifa, esfrega e extrai sujeira profunda de estofados, sofás, carpetes e colchões com 1450W e autolimpeza.',
    installments: 'Preço no Pix R$ 484,90 ou 10x sem juros',
    affiliateUrl: 'https://www.mercadolivre.com.br/extratora-de-sujeira-portatil-wap-spot-cleaner-w3-borrifa-esfrega-e-extrai-1450w-de-potencia-e-bico-de-autolimpeza/p/MLB26797988?pdp_filters=deal%3AMLB779362-1&matt_tool=sm20240625081530',
    targetAudience: 'todos',
    highlightTag: 'Potência 1450W WAP',
  },
  {
    id: 'prod_real_19',
    title: 'Óculos Inteligente Tradutor IA Bluetooth UV400',
    category: 'eletronicos',
    badge: 'INTERNACIONAL',
    oldPrice: 323.68,
    price: 162.84,
    discountPercent: 49,
    rating: 4.3,
    reviewsCount: 110,
    freeShipping: true,
    shift: 'noite',
    isAvailable: true,
    image: OCULOS_IA_IMAGE,
    description: 'Tradução em tempo real por inteligência artificial com áudio integrado via Bluetooth, microfone HD e lentes com proteção UV400.',
    installments: '5x de R$ 32,57 sem juros ou R$ 162,84 no Pix',
    affiliateUrl: 'https://produto.mercadolivre.com.br/MLB-6073503198-oculos-inteligente-tradutor-ia-bluetooth-uv400-_JM?matt_tool=sm20240625081530',
    targetAudience: 'todos',
    highlightTag: 'IA Tradução em Tempo Real',
  },
  {
    id: 'prod_real_20',
    title: 'Calça Tática Cargo Masculina Com Vários Bolsos Reforçada',
    category: 'moda',
    badge: 'INTERNACIONAL',
    oldPrice: 127.04,
    price: 76.20,
    discountPercent: 40,
    rating: 4.8,
    reviewsCount: 1245,
    freeShipping: true,
    shift: 'manha',
    isAvailable: true,
    image: CALCA_CARGO_IMAGE,
    description: 'Tecido militar ripstop resistente a rasgos e água, costuras duplas reforçadas e múltiplos bolsos táticos para máxima utilidade.',
    installments: '12x de R$ 7,51 ou R$ 76,20 no Pix',
    affiliateUrl: 'https://www.mercadolivre.com.br/calca-tatica-cargo-masculina-com-varios-bolsos/up/MLBU3938259296?pdp_filters=deal%3AMLB1442406-1&matt_tool=sm20240625081530',
    targetAudience: 'todos',
    highlightTag: 'Tecido Militar Ripstop',
  },
];

// Todos os 3 lotes combinados
export const REAL_PRODUCTS_BATCHES: Product[][] = [BATCH_1, BATCH_2, BATCH_3];

// Catálogo com os 15 produtos únicos
export const REAL_PRODUCTS_CATALOG: Product[] = [...BATCH_1, ...BATCH_2, ...BATCH_3];

// Compatibilidade com importações anteriores
export const REAL_PRODUCTS: Product[] = BATCH_1;

// Ciclo de rotação infinita a cada 15 minutos (900.000 ms)
export const FIFTEEN_MINUTES_MS = 15 * 60 * 1000;

/**
 * Retorna o índice do lote de 15 minutos (0, 1 ou 2)
 */
export function getCurrent15MinBatchIndex(timestamp: number = Date.now()): number {
  return Math.floor(timestamp / FIFTEEN_MINUTES_MS) % REAL_PRODUCTS_BATCHES.length;
}

/**
 * Retorna o lote exato de 5 produtos sem duplicatas para o intervalo atual de 15 minutos
 */
export function getCurrent15MinBatch(timestamp: number = Date.now()): Product[] {
  const index = getCurrent15MinBatchIndex(timestamp);
  return [...REAL_PRODUCTS_BATCHES[index]];
}

/**
 * Substitui um produto esgotado garantindo que NUNCA haja produtos repetidos na vitrine
 */
export function getReplacementProduct(currentProductIds: string[]): Product | null {
  const available = REAL_PRODUCTS_CATALOG.filter((p) => !currentProductIds.includes(p.id));
  if (available.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * available.length);
  return { ...available[randomIndex] };
}
