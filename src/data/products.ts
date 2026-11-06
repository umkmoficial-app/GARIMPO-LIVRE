import { Product, CategoryType, DealBadgeType, ShiftType } from '../types';

// Imagens geradas reais no applet para uso prioritário
export const HERO_IMAGE = '/src/assets/images/garimpo_hero_deals_1793938165209.jpg';
export const GADGET_IMAGE = '/src/assets/images/product_smartphone_gadget_1793938164906.jpg';
export const KITCHEN_IMAGE = '/src/assets/images/product_airfryer_kitchen_1793938166252.jpg';
export const SNEAKER_IMAGE = '/src/assets/images/product_sneakers_sport_1793938166174.jpg';

// Catálogo base de itens reais e atrativos do Mercado Livre para formar 180 produtos
interface RawProductDef {
  title: string;
  category: CategoryType;
  badge: DealBadgeType;
  oldPrice: number;
  price: number;
  installments: string;
  image?: string;
  affiliateUrl?: string;
  targetAudience?: 'todos' | 'idosos' | 'jovens' | 'geral';
  highlightTag?: string;
}

// 60 PRODUTOS DA MANHÃ (Foco em café da manhã, rotina matinal, gadgets diários, produtividade, saúde de idosos e jovens)
const MANHA_ITEMS: RawProductDef[] = [
  {
    title: 'Cafeteira Expresso Elétrica 20 Bar Bivolt Inox Automática',
    category: 'casa',
    badge: 'RELÂMPAGO',
    oldPrice: 599.90,
    price: 349.90,
    installments: '10x de R$ 34,99 sem juros',
    image: KITCHEN_IMAGE,
    highlightTag: 'Mais vendido',
    targetAudience: 'todos'
  },
  {
    title: 'Smartphone Galaxy A55 5G 128GB Tela Super AMOLED 120Hz',
    category: 'eletronicos',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 2299.00,
    price: 1489.00,
    installments: '10x de R$ 148,90 sem juros',
    image: GADGET_IMAGE,
    highlightTag: 'Oferta do dia',
    targetAudience: 'todos'
  },
  {
    title: 'Tênis Ortopédico Nuvem Ultraleve para Caminhada e Conforto Idosos',
    category: 'moda',
    badge: 'RELÂMPAGO',
    oldPrice: 239.90,
    price: 99.90,
    installments: '3x de R$ 33,30 sem juros',
    image: SNEAKER_IMAGE,
    highlightTag: 'Alívio nas articulações',
    targetAudience: 'idosos'
  },
  {
    title: 'Fritadeira Air Fryer Digital 4L Antiaderente Visor Touch',
    category: 'casa',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 489.90,
    price: 269.90,
    installments: '6x de R$ 44,98 sem juros',
    image: KITCHEN_IMAGE,
    highlightTag: 'Cozinha saudável',
    targetAudience: 'geral'
  },
  {
    title: 'Smartwatch Relógio Inteligente Monitor Cardíaco e Oxímetro 24h',
    category: 'eletronicos',
    badge: 'INTERNACIONAL',
    oldPrice: 320.00,
    price: 139.90,
    installments: '4x de R$ 34,97 sem juros',
    image: GADGET_IMAGE,
    highlightTag: 'Números grandes na tela',
    targetAudience: 'idosos'
  },
  {
    title: 'Parafusadeira e Furadeira de Impacto Bateria 21V com Maleta 24 Acessórios',
    category: 'ferramentas',
    badge: 'RELÂMPAGO',
    oldPrice: 419.00,
    price: 199.90,
    installments: '5x de R$ 39,98 sem juros',
    highlightTag: 'Maleta completa',
    targetAudience: 'geral'
  },
  {
    title: 'Cama Pet Ortopédica Grande Impermeável e Lavável para Cães e Gatos',
    category: 'pet',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 199.00,
    price: 109.90,
    installments: '3x de R$ 36,63 sem juros',
    highlightTag: 'Espuma ortopédica',
    targetAudience: 'todos'
  },
  {
    title: 'Kit 5 Elásticos Extensores Mini Bands Treino Fisioterapia e Musculação',
    category: 'esporte',
    badge: 'RELÂMPAGO',
    oldPrice: 79.90,
    price: 34.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Para todas as idades',
    targetAudience: 'todos'
  },
  {
    title: 'Escova Secadora Oval 1300W Bivolt 4 em 1 com Íons Negativos',
    category: 'beleza',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 249.90,
    price: 119.90,
    installments: '3x de R$ 39,96 sem juros',
    highlightTag: 'Não agride os fios',
    targetAudience: 'geral'
  },
  {
    title: 'Tablet 10 Polegadas Octa-Core 64GB com Capa Anti-Queda e Suporte',
    category: 'eletronicos',
    badge: 'INTERNACIONAL',
    oldPrice: 899.00,
    price: 499.00,
    installments: '10x de R$ 49,90 sem juros',
    image: GADGET_IMAGE,
    highlightTag: 'Fonte ajustável para leitura',
    targetAudience: 'idosos'
  },
  {
    title: 'Jogo de Panelas 5 Peças Antiaderente Cerâmica Indução Cabo Soft Touch',
    category: 'casa',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 659.00,
    price: 369.00,
    installments: '8x de R$ 46,12 sem juros',
    highlightTag: 'Sem óleo e fácil de lavar',
    targetAudience: 'geral'
  },
  {
    title: 'Robô Aspirador de Pó Inteligente Varre, Aspira e Passa Pano Bivolt',
    category: 'casa',
    badge: 'RELÂMPAGO',
    oldPrice: 799.00,
    price: 399.90,
    installments: '10x de R$ 39,99 sem juros',
    highlightTag: 'Zero esforço na limpeza',
    targetAudience: 'idosos'
  },
  {
    title: 'Tênis Running Esportivo Amortecimento Gel Conforto Masculino e Feminino',
    category: 'moda',
    badge: 'RELÂMPAGO',
    oldPrice: 349.90,
    price: 159.90,
    installments: '4x de R$ 39,97 sem juros',
    image: SNEAKER_IMAGE,
    highlightTag: 'Palmilha anatômica',
    targetAudience: 'todos'
  },
  {
    title: 'Bebedouro Fonte Cascata Automática Inox 2.5L Silenciosa para Pets',
    category: 'pet',
    badge: 'INTERNACIONAL',
    oldPrice: 179.90,
    price: 89.90,
    installments: '2x de R$ 44,95 sem juros',
    highlightTag: 'Filtro de carvão ativado',
    targetAudience: 'todos'
  },
  {
    title: 'Kit Aparador e Barbeador Elétrico 7 em 1 Recarregável Bivolt',
    category: 'beleza',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 189.00,
    price: 79.90,
    installments: '2x de R$ 39,95 sem juros',
    highlightTag: 'Lâminas auto-afiáveis',
    targetAudience: 'geral'
  },
  {
    title: 'Lavadora de Alta Pressão 1800W Bico Turbo e Engate Rápido',
    category: 'ferramentas',
    badge: 'RELÂMPAGO',
    oldPrice: 699.00,
    price: 389.90,
    installments: '8x de R$ 48,73 sem juros',
    highlightTag: 'Economiza 80% de água',
    targetAudience: 'geral'
  },
  {
    title: 'Garrafa Térmica 1000ml Inox com Termômetro Digital LED na Tampa',
    category: 'esporte',
    badge: 'INTERNACIONAL',
    oldPrice: 119.00,
    price: 49.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Mantém gelado por 24h',
    targetAudience: 'todos'
  },
  {
    title: 'Smart TV 50 Polegadas 4K Ultra HD HDR Comando de Voz no Controle',
    category: 'eletronicos',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 2899.00,
    price: 1899.00,
    installments: '10x de R$ 189,90 sem juros',
    highlightTag: 'Botões grandes de Netflix e YouTube',
    targetAudience: 'todos'
  },
  {
    title: 'Mop Giratório Limpeza Prática Balde com Centrífuga Inox e 2 Refis',
    category: 'casa',
    badge: 'RELÂMPAGO',
    oldPrice: 149.90,
    price: 74.90,
    installments: '2x de R$ 37,45 sem juros',
    highlightTag: 'Sem molhar as mãos',
    targetAudience: 'idosos'
  },
  {
    title: 'Fone de Ouvido Bluetooth Sem Fio Cancelamento Ativo de Ruído 40h',
    category: 'eletronicos',
    badge: 'INTERNACIONAL',
    oldPrice: 389.00,
    price: 179.90,
    installments: '4x de R$ 44,97 sem juros',
    image: GADGET_IMAGE,
    highlightTag: 'Confortável para ouvidos sensíveis',
    targetAudience: 'todos'
  },
  {
    title: 'Bolsa Feminina Transversal Couro Ecológico Fecho Seguro e Bolsos Grandes',
    category: 'moda',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 169.90,
    price: 79.90,
    installments: '2x de R$ 39,95 sem juros',
    highlightTag: 'Design clássico e leve',
    targetAudience: 'geral'
  },
  {
    title: 'Kit 4 Almofadas Ortopédicas Espuma Viscoelástica Nasa com Capa Lavável',
    category: 'casa',
    badge: 'RELÂMPAGO',
    oldPrice: 279.00,
    price: 139.90,
    installments: '3x de R$ 46,63 sem juros',
    highlightTag: 'Alinha coluna e pescoço',
    targetAudience: 'idosos'
  },
  {
    title: 'Nível a Laser Autonivelante 360 Graus 12 Linhas Verdes com Tripé',
    category: 'ferramentas',
    badge: 'INTERNACIONAL',
    oldPrice: 399.00,
    price: 189.90,
    installments: '4x de R$ 47,47 sem juros',
    highlightTag: 'Alta precisão visual',
    targetAudience: 'geral'
  },
  {
    title: 'Coleira Peitoral Ergonômica Anti-Puxão com Alça de Apoio para Cachorros',
    category: 'pet',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 110.00,
    price: 54.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Não sufoca o pet',
    targetAudience: 'todos'
  },
  {
    title: 'Bicicleta Aro 29 Câmbio 21 Velocidades Freio a Disco Alumínio',
    category: 'esporte',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 1599.00,
    price: 899.90,
    installments: '10x de R$ 89,99 sem juros',
    highlightTag: 'Quadro reforçado e leve',
    targetAudience: 'jovens'
  },
  {
    title: 'Kit Sérum Facial Clareador Vitamina C Pura 20% com Ácido Hialurônico',
    category: 'beleza',
    badge: 'RELÂMPAGO',
    oldPrice: 139.90,
    price: 59.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Efeito lifting imediato',
    targetAudience: 'todos'
  },
  {
    title: 'Caixa de Som Portátil Bluetooth Resistente à Água Bateria 18h',
    category: 'eletronicos',
    badge: 'RELÂMPAGO',
    oldPrice: 299.00,
    price: 139.90,
    installments: '3x de R$ 46,63 sem juros',
    highlightTag: 'Volume alto e sem distorção',
    targetAudience: 'todos'
  },
  {
    title: 'Sandália Ortopédica Antiderrapante Conforto Total Fechamento Fácil',
    category: 'moda',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 189.00,
    price: 89.90,
    installments: '2x de R$ 44,95 sem juros',
    highlightTag: 'Solado com absorção de impacto',
    targetAudience: 'idosos'
  },
  {
    title: 'Panela de Pressão Elétrica Digital 5L com 10 Dispositivos de Segurança',
    category: 'casa',
    badge: 'RELÂMPAGO',
    oldPrice: 549.00,
    price: 319.90,
    installments: '7x de R$ 45,70 sem juros',
    highlightTag: '100% segura, não explode',
    targetAudience: 'idosos'
  },
  {
    title: 'Carregador Portátil Power Bank 20.000mAh Indução e Cabos Embutidos',
    category: 'eletronicos',
    badge: 'INTERNACIONAL',
    oldPrice: 219.00,
    price: 99.90,
    installments: '2x de R$ 49,95 sem juros',
    highlightTag: 'Display digital percentual',
    targetAudience: 'todos'
  },
  {
    title: 'Maleta Jogo de Chaves e Ferramentas Manuais 82 Peças em Aço Cromo',
    category: 'ferramentas',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 320.00,
    price: 149.90,
    installments: '3x de R$ 49,96 sem juros',
    highlightTag: 'Garantia vitalícia contra corrosão',
    targetAudience: 'geral'
  },
  {
    title: 'Comedouro Automático Programável Pet 4L com Gravação de Voz',
    category: 'pet',
    badge: 'INTERNACIONAL',
    oldPrice: 389.00,
    price: 189.90,
    installments: '4x de R$ 47,47 sem juros',
    highlightTag: 'Porções exatas no horário',
    targetAudience: 'todos'
  },
  {
    title: 'Tapete de Yoga e Ginástica Extra Grosso 10mm Antiderrapante com Alça',
    category: 'esporte',
    badge: 'RELÂMPAGO',
    oldPrice: 139.00,
    price: 69.90,
    installments: '2x de R$ 34,95 sem juros',
    highlightTag: 'Protege joelhos e coluna',
    targetAudience: 'todos'
  },
  {
    title: 'Depilador a Laser Luz Pulsada IPL Indolor com 999.000 Disparos',
    category: 'beleza',
    badge: 'INTERNACIONAL',
    oldPrice: 499.00,
    price: 219.90,
    installments: '5x de R$ 43,98 sem juros',
    highlightTag: 'Resultado permanente',
    targetAudience: 'jovens'
  },
  {
    title: 'Liquidificador Turbo 1200W Copo Grande 3L Resistente com Filtro',
    category: 'casa',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 229.00,
    price: 119.90,
    installments: '3x de R$ 39,96 sem juros',
    highlightTag: 'Tritura gelo e grãos',
    targetAudience: 'geral'
  },
  {
    title: 'Fechadura Digital Biométrica com Senha, Cartão e Chave Mecânica',
    category: 'ferramentas',
    badge: 'RELÂMPAGO',
    oldPrice: 599.00,
    price: 299.90,
    installments: '6x de R$ 49,98 sem juros',
    highlightTag: 'Nunca mais esqueça as chaves',
    targetAudience: 'todos'
  },
  {
    title: 'Mochila Executiva Impermeável com Entrada USB e Trava Antifurto',
    category: 'moda',
    badge: 'INTERNACIONAL',
    oldPrice: 249.00,
    price: 119.90,
    installments: '3x de R$ 39,96 sem juros',
    highlightTag: 'Compartimento acolchoado notebook',
    targetAudience: 'jovens'
  },
  {
    title: 'Massageador Elétrico Pescoço e Ombros Shiatsu com Aquecimento Bivolt',
    category: 'beleza',
    badge: 'RELÂMPAGO',
    oldPrice: 269.00,
    price: 129.90,
    installments: '3x de R$ 43,30 sem juros',
    highlightTag: 'Alívio imediato do estresse',
    targetAudience: 'idosos'
  },
  {
    title: 'Tapete Higiênico Lavável Grande para Cães Absorção Rápida 2 Unidades',
    category: 'pet',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 129.00,
    price: 64.90,
    installments: '2x de R$ 32,45 sem juros',
    highlightTag: 'Ecológico e econômico',
    targetAudience: 'todos'
  },
  {
    title: 'Kit Halteres 20kg Ajustáveis com Barra Conectora Emborrachada',
    category: 'esporte',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 429.00,
    price: 239.90,
    installments: '5x de R$ 47,98 sem juros',
    highlightTag: 'Academia completa em casa',
    targetAudience: 'jovens'
  },
  {
    title: 'Aspirador de Pó Vertical e Portátil 2 em 1 1300W Filtro HEPA',
    category: 'casa',
    badge: 'RELÂMPAGO',
    oldPrice: 249.00,
    price: 139.90,
    installments: '3x de R$ 46,63 sem juros',
    highlightTag: 'Leve e silencioso',
    targetAudience: 'geral'
  },
  {
    title: 'Monitor Gamer 24 Polegadas 165Hz IPS 1ms Freesync Borda Ultrafina',
    category: 'eletronicos',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 1199.00,
    price: 699.00,
    installments: '10x de R$ 69,90 sem juros',
    highlightTag: 'Filtro contra cansaço visual',
    targetAudience: 'jovens'
  },
  {
    title: 'Jaqueta Térmica Corta-Vento Impermeável Unissex com Capuz Removível',
    category: 'moda',
    badge: 'INTERNACIONAL',
    oldPrice: 259.00,
    price: 119.90,
    installments: '3x de R$ 39,96 sem juros',
    highlightTag: 'Proteção contra vento e chuva',
    targetAudience: 'todos'
  },
  {
    title: 'Lixadeira Orbital Roto-Orbital Elétrica com Coletor de Pó 300W',
    category: 'ferramentas',
    badge: 'RELÂMPAGO',
    oldPrice: 299.00,
    price: 159.90,
    installments: '4x de R$ 39,97 sem juros',
    highlightTag: 'Acabamento profissional em madeira',
    targetAudience: 'geral'
  },
  {
    title: 'Arranhador Grande para Gatos com Torre, Rede e Bolinha de Pelúcia',
    category: 'pet',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 289.00,
    price: 149.90,
    installments: '3x de R$ 49,96 sem juros',
    highlightTag: 'Protege seus sofás',
    targetAudience: 'todos'
  },
  {
    title: 'Corda de Pular com Contador Digital de Calorias e Rolamento Duplo',
    category: 'esporte',
    badge: 'RELÂMPAGO',
    oldPrice: 79.00,
    price: 39.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Cabo de aço revestido',
    targetAudience: 'todos'
  },
  {
    title: 'Kit Clareamento Dental Profissional em Casa LED Luz Fria e Gel',
    category: 'beleza',
    badge: 'INTERNACIONAL',
    oldPrice: 199.00,
    price: 89.90,
    installments: '2x de R$ 44,95 sem juros',
    highlightTag: 'Sem sensibilidade nos dentes',
    targetAudience: 'jovens'
  },
  {
    title: 'Purificador de Água com Filtro Bacteriológico Torneira Bica Móvel',
    category: 'casa',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 219.00,
    price: 109.90,
    installments: '2x de R$ 54,95 sem juros',
    highlightTag: 'Água pura sem cloro',
    targetAudience: 'todos'
  },
  {
    title: 'Carregador Rápido 65W GaN Tipo-C Turbo para Celular e Notebook',
    category: 'eletronicos',
    badge: 'INTERNACIONAL',
    oldPrice: 189.00,
    price: 89.90,
    installments: '2x de R$ 44,95 sem juros',
    highlightTag: 'Carga 100% em 30 minutos',
    targetAudience: 'todos'
  },
  {
    title: 'Kit 3 Pares Meias de Compressão Ortopédica Circulação e Varizes',
    category: 'moda',
    badge: 'RELÂMPAGO',
    oldPrice: 120.00,
    price: 49.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Reduz inchaço nas pernas',
    targetAudience: 'idosos'
  },
  {
    title: 'Trena a Laser Digital Profissional Alcance 40 Metros Visor Retroiluminado',
    category: 'ferramentas',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 169.00,
    price: 79.90,
    installments: '2x de R$ 39,95 sem juros',
    highlightTag: 'Mede áreas e volumes em 1s',
    targetAudience: 'geral'
  },
  {
    title: 'Caixa de Transporte Pet Confortável Homologada para Viagens Aéreas',
    category: 'pet',
    badge: 'RELÂMPAGO',
    oldPrice: 210.00,
    price: 119.90,
    installments: '3x de R$ 39,96 sem juros',
    highlightTag: 'Ventilação 360 e trava segura',
    targetAudience: 'todos'
  },
  {
    title: 'Joelheira Articulada com Hastes de Alumínio Estabilizadora para Caminhada',
    category: 'esporte',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 149.00,
    price: 69.90,
    installments: '2x de R$ 34,95 sem juros',
    highlightTag: 'Firmeza e segurança para joelhos',
    targetAudience: 'idosos'
  },
  {
    title: 'Secador de Cabelo Profissional Silencioso 2400W 3 Temperaturas',
    category: 'beleza',
    badge: 'RELÂMPAGO',
    oldPrice: 299.00,
    price: 149.90,
    installments: '3x de R$ 49,96 sem juros',
    highlightTag: 'Secagem rápida sem ressecar',
    targetAudience: 'todos'
  },
  {
    title: 'Chaleira Elétrica Inox 1.8 Litros Desligamento Automático Rápido',
    category: 'casa',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 129.00,
    price: 69.90,
    installments: '2x de R$ 34,95 sem juros',
    highlightTag: 'Ferve água em 3 minutos',
    targetAudience: 'idosos'
  },
  {
    title: 'Mouse Sem Fio Ergonômico Vertical Anti-Tendinite e Ruído Silencioso',
    category: 'eletronicos',
    badge: 'INTERNACIONAL',
    oldPrice: 159.00,
    price: 69.90,
    installments: '2x de R$ 34,95 sem juros',
    highlightTag: 'Previne dores no punho',
    targetAudience: 'todos'
  },
  {
    title: 'Carteira Masculina Antifurto Bloqueio RFID Couro Genuíno',
    category: 'moda',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 99.00,
    price: 49.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Protege cartões por aproximação',
    targetAudience: 'geral'
  },
  {
    title: 'Jogo de Brocas e Bits Titanium para Concreto, Madeira e Aço 50 Peças',
    category: 'ferramentas',
    badge: 'RELÂMPAGO',
    oldPrice: 189.00,
    price: 89.90,
    installments: '2x de R$ 44,95 sem juros',
    highlightTag: 'Aço especial temperado',
    targetAudience: 'geral'
  },
  {
    title: 'Escova Removedora de Pelos a Vapor para Gatos e Cães Massagem',
    category: 'pet',
    badge: 'INTERNACIONAL',
    oldPrice: 99.00,
    price: 44.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Remove 95% dos pelos mortos',
    targetAudience: 'todos'
  },
  {
    title: 'Rolo de Liberação Miofascial e Massagem Muscular Lombar e Pernas',
    category: 'esporte',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 119.00,
    price: 59.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Alívio rápido de dores',
    targetAudience: 'todos'
  }
];

// 60 PRODUTOS DA TARDE (Foco em almoço/tarde, conforto em casa, entretenimento, moda, beleza, pets, ferramentas práticas)
const TARDE_ITEMS: RawProductDef[] = [
  {
    title: 'Robô Passa Pano Automático Silencioso com Sensor Anti-Queda',
    category: 'casa',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 589.00,
    price: 299.90,
    installments: '6x de R$ 49,98 sem juros',
    highlightTag: 'Deixa o chão brilhando',
    targetAudience: 'idosos'
  },
  {
    title: 'Smart TV Stick 4K Transformador de TV Antiga em Smart com Controle de Voz',
    category: 'eletronicos',
    badge: 'RELÂMPAGO',
    oldPrice: 389.00,
    price: 199.90,
    installments: '5x de R$ 39,98 sem juros',
    image: GADGET_IMAGE,
    highlightTag: 'Fácil de usar por idosos',
    targetAudience: 'idosos'
  },
  {
    title: 'Tênis Slip-on Sem Cadarço Calce Fácil Macio para Terceira Idade',
    category: 'moda',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 219.00,
    price: 89.90,
    installments: '2x de R$ 44,95 sem juros',
    image: SNEAKER_IMAGE,
    highlightTag: 'Sem precisar amarrar cadarço',
    targetAudience: 'idosos'
  },
  {
    title: 'Grill e Sanduicheira Elétrica Dupla Chapa Antiaderente Fácil Limpeza',
    category: 'casa',
    badge: 'RELÂMPAGO',
    oldPrice: 169.00,
    price: 89.90,
    installments: '2x de R$ 44,95 sem juros',
    image: KITCHEN_IMAGE,
    highlightTag: 'Tosta em 2 minutos',
    targetAudience: 'todos'
  },
  {
    title: 'Caixa de Som Soundbar 120W Bluetooth para TV com Subwoofer Graves Potentes',
    category: 'eletronicos',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 699.00,
    price: 349.90,
    installments: '7x de R$ 49,98 sem juros',
    highlightTag: 'Vozes nítidas e altas na TV',
    targetAudience: 'idosos'
  },
  {
    title: 'Kit Parafusadeira Compacta Articulada Bivolt com 45 Acessórios',
    category: 'ferramentas',
    badge: 'INTERNACIONAL',
    oldPrice: 239.00,
    price: 109.90,
    installments: '2x de R$ 54,95 sem juros',
    highlightTag: 'Leve e ergonômica',
    targetAudience: 'geral'
  },
  {
    title: 'Tapete Sanitário Pet Grama Sintética Lavável com Bandeja Coletora',
    category: 'pet',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 179.00,
    price: 94.90,
    installments: '2x de R$ 47,45 sem juros',
    highlightTag: 'Ideal para apartamentos',
    targetAudience: 'todos'
  },
  {
    title: 'Kit Pesos de Tornozelo e Punho 2kg a 5kg para Caminhada e Fortalecimento',
    category: 'esporte',
    badge: 'RELÂMPAGO',
    oldPrice: 119.00,
    price: 59.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Fortalece pernas sem impacto',
    targetAudience: 'idosos'
  },
  {
    title: 'Prancha Alisadora de Cabelo Titânio 450F Bivolt com Placas Flutuantes',
    category: 'beleza',
    badge: 'RELÂMPAGO',
    oldPrice: 289.00,
    price: 139.90,
    installments: '3x de R$ 46,63 sem juros',
    highlightTag: 'Cabelos lisos com brilho espelhado',
    targetAudience: 'todos'
  },
  {
    title: 'Celular Idoso com Teclas Gigantes Botão SOS e Base de Carregador Fácil',
    category: 'eletronicos',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 269.00,
    price: 139.90,
    installments: '3x de R$ 46,63 sem juros',
    image: GADGET_IMAGE,
    highlightTag: 'Volume alto e botão de emergência',
    targetAudience: 'idosos'
  },
  {
    title: 'Jogo de Cama Queen 4 Peças Percal 400 Fios Toque de Seda Antialérgico',
    category: 'casa',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 299.00,
    price: 149.90,
    installments: '3x de R$ 49,96 sem juros',
    highlightTag: 'Não esquenta e super macio',
    targetAudience: 'todos'
  },
  {
    title: 'Mini Processador e Triturador Elétrico de Alimentos USB sem Fio 250ml',
    category: 'casa',
    badge: 'INTERNACIONAL',
    oldPrice: 89.00,
    price: 39.90,
    installments: 'Em até 2x no cartão',
    image: KITCHEN_IMAGE,
    highlightTag: 'Pica cebola e alho em 5s',
    targetAudience: 'todos'
  },
  {
    title: 'Sapatênis Masculino Couro Legítimo Solado Gel Antiderrapante',
    category: 'moda',
    badge: 'RELÂMPAGO',
    oldPrice: 289.00,
    price: 139.90,
    installments: '3x de R$ 46,63 sem juros',
    image: SNEAKER_IMAGE,
    highlightTag: 'Elegante e extremamente confortável',
    targetAudience: 'geral'
  },
  {
    title: 'Guia Retrátil Automática Pet 5 Metros com Trava Rápida e Fita Refletiva',
    category: 'pet',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 89.00,
    price: 44.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Não enrola e muito resistente',
    targetAudience: 'todos'
  },
  {
    title: 'Kit Cuidados Faciais Anti-Idade Ácido Glicólico + Niacinamida Pura',
    category: 'beleza',
    badge: 'RELÂMPAGO',
    oldPrice: 189.00,
    price: 79.90,
    installments: '2x de R$ 39,95 sem juros',
    highlightTag: 'Reduz manchas e rugas',
    targetAudience: 'todos'
  },
  {
    title: 'Serra Tico-Tico 600W com Guia Laser e 5 Lâminas de Corte em Aço',
    category: 'ferramentas',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 349.00,
    price: 179.90,
    installments: '4x de R$ 44,97 sem juros',
    highlightTag: 'Cortes retos e curvas perfeitas',
    targetAudience: 'geral'
  },
  {
    title: 'Mochila Esportiva Hidratação com Refil 2L Térmico para Corrida e Trilha',
    category: 'esporte',
    badge: 'INTERNACIONAL',
    oldPrice: 159.00,
    price: 79.90,
    installments: '2x de R$ 39,95 sem juros',
    highlightTag: 'Resistente a água e respirável',
    targetAudience: 'jovens'
  },
  {
    title: 'Tablet 11 Polegadas Full HD 128GB com Caneta Stylus e Teclado Bluetooth',
    category: 'eletronicos',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 1499.00,
    price: 899.00,
    installments: '10x de R$ 89,90 sem juros',
    image: GADGET_IMAGE,
    highlightTag: 'Estudos e lazer completo',
    targetAudience: 'jovens'
  },
  {
    title: 'Travesseiro Anti-Ronco Ergonômico Cervical Contorno Ortopédico',
    category: 'casa',
    badge: 'RELÂMPAGO',
    oldPrice: 199.00,
    price: 89.90,
    installments: '2x de R$ 44,95 sem juros',
    highlightTag: 'Sono profundo sem dor no pescoço',
    targetAudience: 'idosos'
  },
  {
    title: 'Relógio Smartband Pulseira Fitness Batimentos Cardíacos e Passômetro',
    category: 'eletronicos',
    badge: 'INTERNACIONAL',
    oldPrice: 179.00,
    price: 69.90,
    installments: '2x de R$ 34,95 sem juros',
    highlightTag: 'Bateria dura 14 dias',
    targetAudience: 'todos'
  },
  {
    title: 'Vestido Longo Casual Feminino com Bolsos Tecido Viscolycra Leve',
    category: 'moda',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 159.00,
    price: 74.90,
    installments: '2x de R$ 37,45 sem juros',
    highlightTag: 'Caimento perfeito, não amassa',
    targetAudience: 'geral'
  },
  {
    title: 'Organizador Giratório Multiuso Geladeira e Armário 360 Graus',
    category: 'casa',
    badge: 'RELÂMPAGO',
    oldPrice: 99.00,
    price: 49.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Acesso fácil sem derrubar potes',
    targetAudience: 'idosos'
  },
  {
    title: 'Esmerilhadeira Angular 4.1/2 850W com Empunhadura e Disco de Corte',
    category: 'ferramentas',
    badge: 'RELÂMPAGO',
    oldPrice: 319.00,
    price: 159.90,
    installments: '3x de R$ 53,30 sem juros',
    highlightTag: 'Corte rápido em metais e alvenaria',
    targetAudience: 'geral'
  },
  {
    title: 'Cortador de Unha Pet Profissional com LED e Lupa Iluminadora',
    category: 'pet',
    badge: 'INTERNACIONAL',
    oldPrice: 79.00,
    price: 39.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Evita sangramentos no pet',
    targetAudience: 'todos'
  },
  {
    title: 'Smartwatch Esportivo GPS Integrado Prova Dágua 50m Monitor de Corrida',
    category: 'esporte',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 499.00,
    price: 249.90,
    installments: '5x de R$ 49,98 sem juros',
    highlightTag: 'Mapeia rotas sem levar o celular',
    targetAudience: 'jovens'
  },
  {
    title: 'Perfume Feminino Floral Frutado Eau de Parfum 100ml Fixação 24h',
    category: 'beleza',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 279.00,
    price: 129.90,
    installments: '3x de R$ 43,30 sem juros',
    highlightTag: 'Fragrância sofisticada e marcante',
    targetAudience: 'geral'
  },
  {
    title: 'Câmera de Segurança Wi-Fi 360 Graus com Visão Noturna e Áudio Bidirecional',
    category: 'eletronicos',
    badge: 'RELÂMPAGO',
    oldPrice: 229.00,
    price: 109.90,
    installments: '2x de R$ 54,95 sem juros',
    highlightTag: 'Acompanhe a casa pelo celular',
    targetAudience: 'idosos'
  },
  {
    title: 'Óculos de Sol Polarizado com Proteção UV400 Armação Leve Titanium',
    category: 'moda',
    badge: 'INTERNACIONAL',
    oldPrice: 169.00,
    price: 79.90,
    installments: '2x de R$ 39,95 sem juros',
    highlightTag: 'Protege a visão contra reflexos',
    targetAudience: 'todos'
  },
  {
    title: 'Ventilador de Coluna Silencioso 40cm com Controle Remoto e Timer',
    category: 'casa',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 289.00,
    price: 159.90,
    installments: '3x de R$ 53,30 sem juros',
    highlightTag: 'Vento forte sem fazer barulho',
    targetAudience: 'idosos'
  },
  {
    title: 'Teclado e Mouse Sem Fio Teclas Grandes e Suaves Conexão 2.4Ghz',
    category: 'eletronicos',
    badge: 'RELÂMPAGO',
    oldPrice: 159.00,
    price: 79.90,
    installments: '2x de R$ 39,95 sem juros',
    highlightTag: 'Letras grandes bem visíveis',
    targetAudience: 'idosos'
  },
  {
    title: 'Kit 100 Discos de Lixa com Velcro para Furadeira e Esmerilhadeira',
    category: 'ferramentas',
    badge: 'INTERNACIONAL',
    oldPrice: 119.00,
    price: 49.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Grãos do 80 ao 3000',
    targetAudience: 'geral'
  },
  {
    title: 'Mochila Canguru Bolsa Transporte Pet para Passeio no Peito Respirável',
    category: 'pet',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 149.00,
    price: 79.90,
    installments: '2x de R$ 39,95 sem juros',
    highlightTag: 'Leve seu bichinho junto no passeio',
    targetAudience: 'todos'
  },
  {
    title: 'Cinto de Apoio Lombar Ortopédico com Hastes Duplas e Compressão Ajustável',
    category: 'esporte',
    badge: 'RELÂMPAGO',
    oldPrice: 139.00,
    price: 64.90,
    installments: '2x de R$ 32,45 sem juros',
    highlightTag: 'Alívio instantâneo do bico de papagaio',
    targetAudience: 'idosos'
  },
  {
    title: 'Kit Removedor de Cravos por Sucção a Vácuo 5 Níveis com Câmera HD',
    category: 'beleza',
    badge: 'INTERNACIONAL',
    oldPrice: 189.00,
    price: 89.90,
    installments: '2x de R$ 44,95 sem juros',
    highlightTag: 'Pele limpa sem marcas',
    targetAudience: 'jovens'
  },
  {
    title: 'Conjunto 10 Potes Herméticos de Vidro com Trava e Vedação de Silicone',
    category: 'casa',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 249.00,
    price: 129.90,
    installments: '3x de R$ 43,30 sem juros',
    highlightTag: 'Vão ao forno, micro-ondas e freezer',
    targetAudience: 'geral'
  },
  {
    title: 'Soprador Térmico 2000W com 4 Bocais Regulagem de Temperatura',
    category: 'ferramentas',
    badge: 'RELÂMPAGO',
    oldPrice: 229.00,
    price: 119.90,
    installments: '3x de R$ 39,96 sem juros',
    highlightTag: 'Remove tintas e molda plásticos',
    targetAudience: 'geral'
  },
  {
    title: 'Calça Legging Térmica Flanelada Conforto Cintura Alta Compressão',
    category: 'moda',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 129.00,
    price: 59.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Não fica transparente e esquenta bem',
    targetAudience: 'geral'
  },
  {
    title: 'Espelho de Maquiagem com Luz LED Touch 3 Tons e Aumento 5x Bivolt',
    category: 'beleza',
    badge: 'RELÂMPAGO',
    oldPrice: 139.00,
    price: 69.90,
    installments: '2x de R$ 34,95 sem juros',
    highlightTag: 'Iluminação de camarim',
    targetAudience: 'todos'
  },
  {
    title: 'Brinquedo Interativo Laser Automático 360 Graus para Gatos com Timer',
    category: 'pet',
    badge: 'INTERNACIONAL',
    oldPrice: 119.00,
    price: 54.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Distrai o pet por horas',
    targetAudience: 'todos'
  },
  {
    title: 'Pedalinho Exercitador de Pernas e Braços Fisioterapia Idosos com Visor',
    category: 'esporte',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 239.00,
    price: 129.90,
    installments: '3x de R$ 43,30 sem juros',
    highlightTag: 'Exercite-se sentado no sofá',
    targetAudience: 'idosos'
  },
  {
    title: 'Ferro de Passar a Vapor Cerâmica Antiaderente com Sistema Anti-Gotejamento',
    category: 'casa',
    badge: 'RELÂMPAGO',
    oldPrice: 179.00,
    price: 89.90,
    installments: '2x de R$ 44,95 sem juros',
    highlightTag: 'Desliza suave sem queimar roupas',
    targetAudience: 'geral'
  },
  {
    title: 'Mini Projetor Portátil Full HD Smart com Wi-Fi e Espelhamento de Celular',
    category: 'eletronicos',
    badge: 'INTERNACIONAL',
    oldPrice: 699.00,
    price: 369.90,
    installments: '8x de R$ 46,23 sem juros',
    image: GADGET_IMAGE,
    highlightTag: 'Cinema de até 130 polegadas',
    targetAudience: 'jovens'
  },
  {
    title: 'Camisa Polo Masculina Piquet Algodão Nobre Clássica Conforto',
    category: 'moda',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 139.00,
    price: 69.90,
    installments: '2x de R$ 34,95 sem juros',
    highlightTag: 'Não desbota e não encolhe',
    targetAudience: 'geral'
  },
  {
    title: 'Kit Chaves de Precisão Magnéticas 115 em 1 para Celular e Óculos',
    category: 'ferramentas',
    badge: 'INTERNACIONAL',
    oldPrice: 129.00,
    price: 54.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Pontas de aço reforçado',
    targetAudience: 'todos'
  },
  {
    title: 'Escova Pet Tira Pelos Autolimpante com Botão Ejetor Macia',
    category: 'pet',
    badge: 'RELÂMPAGO',
    oldPrice: 69.00,
    price: 29.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Limpeza em 1 clique',
    targetAudience: 'todos'
  },
  {
    title: 'Hand Grip Fortalecedor de Punho e Mão com Regulagem de Peso 5 a 60kg',
    category: 'esporte',
    badge: 'RELÂMPAGO',
    oldPrice: 59.00,
    price: 24.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Fortalece os dedos e o punho',
    targetAudience: 'idosos'
  },
  {
    title: 'Pomada Modeladora Cabelo Efeito Matte Seco Fixação Forte 150g',
    category: 'beleza',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 69.00,
    price: 32.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Sem deixar oleoso',
    targetAudience: 'jovens'
  },
  {
    title: 'Organizador de Sapatos Dobrável para Baixo da Cama com Zíper 12 Pares',
    category: 'casa',
    badge: 'RELÂMPAGO',
    oldPrice: 99.00,
    price: 49.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Protege contra poeira e mofo',
    targetAudience: 'geral'
  },
  {
    title: 'Luminária de Mesa LED Articulada com Carregador por Indução e Dimmer',
    category: 'eletronicos',
    badge: 'INTERNACIONAL',
    oldPrice: 199.00,
    price: 99.90,
    installments: '2x de R$ 49,95 sem juros',
    highlightTag: 'Luz sem piscar, protege a visão',
    targetAudience: 'todos'
  },
  {
    title: 'Sutiã Ortopédico Sustentação Sem Aro Fechamento Frontal Conforto',
    category: 'moda',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 129.00,
    price: 59.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Alças largas que não machucam',
    targetAudience: 'idosos'
  },
  {
    title: 'Alicate Rebitador Manual Reforçado com 100 Rebites em Maleta',
    category: 'ferramentas',
    badge: 'RELÂMPAGO',
    oldPrice: 149.00,
    price: 74.90,
    installments: '2x de R$ 37,45 sem juros',
    highlightTag: 'Fixação firme e segura',
    targetAudience: 'geral'
  },
  {
    title: 'Tapete Gelado Refrescante para Cães e Gatos no Calor sem Água',
    category: 'pet',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 139.00,
    price: 69.90,
    installments: '2x de R$ 34,95 sem juros',
    highlightTag: 'Alivia o calor instantaneamente',
    targetAudience: 'todos'
  },
  {
    title: 'Barra de Tração Fixa para Porta com Trava de Segurança sem Furar',
    category: 'esporte',
    badge: 'RELÂMPAGO',
    oldPrice: 169.00,
    price: 89.90,
    installments: '2x de R$ 44,95 sem juros',
    highlightTag: 'Suporta até 150kg',
    targetAudience: 'jovens'
  },
  {
    title: 'Kit Manicure e Pedicure Profissional 18 Peças em Estojo de Luxo',
    category: 'beleza',
    badge: 'INTERNACIONAL',
    oldPrice: 119.00,
    price: 49.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Aço inox afiado e durável',
    targetAudience: 'todos'
  },
  {
    title: 'Ralador e Fatiador de Legumes Giratório 3 Lâminas Tambor Inox',
    category: 'casa',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 129.00,
    price: 59.90,
    installments: 'Em até 2x no cartão',
    image: KITCHEN_IMAGE,
    highlightTag: 'Mãos seguras longe das lâminas',
    targetAudience: 'idosos'
  },
  {
    title: 'Adaptador Bluetooth 5.3 para Som de Carro e Caixa Antiga P2 USB',
    category: 'eletronicos',
    badge: 'RELÂMPAGO',
    oldPrice: 69.00,
    price: 29.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Conecta celular no carro sem fios',
    targetAudience: 'todos'
  },
  {
    title: 'Cinto Masculino de Couro Fivela Automática sem Furos Ajuste Perfeito',
    category: 'moda',
    badge: 'INTERNACIONAL',
    oldPrice: 99.00,
    price: 49.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Ajuste milimétrico exato',
    targetAudience: 'geral'
  },
  {
    title: 'Grampeador e Pinador Manual Tapeceiro Reforçado com 1000 Grampos',
    category: 'ferramentas',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 139.00,
    price: 69.90,
    installments: '2x de R$ 34,95 sem juros',
    highlightTag: 'Ideal para sofás, madeira e telas',
    targetAudience: 'geral'
  },
  {
    title: 'Coleira Antipulgas e Carrapatos Eficácia 8 Meses para Cachorros e Gatos',
    category: 'pet',
    badge: 'RELÂMPAGO',
    oldPrice: 169.00,
    price: 79.90,
    installments: '2x de R$ 39,95 sem juros',
    highlightTag: 'Proteção contínua e sem cheiro forte',
    targetAudience: 'todos'
  },
  {
    title: 'Faixa Elástica Terapêutica com Velcro para Joelho, Tornozelo e Cotovelo',
    category: 'esporte',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 79.00,
    price: 34.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Estabilidade imediata nas passadas',
    targetAudience: 'idosos'
  }
];

// 60 PRODUTOS DA NOITE (Foco em descanso, sono reparador, segurança noturna, filmes/séries, cuidados noturnos, ofertas especiais)
const NOITE_ITEMS: RawProductDef[] = [
  {
    title: 'Umidificador e Aromatizador Ultrassônico de Ar Silencioso com LED',
    category: 'casa',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 179.00,
    price: 79.90,
    installments: '2x de R$ 39,95 sem juros',
    image: KITCHEN_IMAGE,
    highlightTag: 'Melhora a respiração à noite',
    targetAudience: 'idosos'
  },
  {
    title: 'Fone de Ouvido Bluetooth para Dormir com Máscara Tapa Olho Acolchoada',
    category: 'eletronicos',
    badge: 'INTERNACIONAL',
    oldPrice: 169.00,
    price: 79.90,
    installments: '2x de R$ 39,95 sem juros',
    image: GADGET_IMAGE,
    highlightTag: 'Bloqueia som e luz para dormir',
    targetAudience: 'todos'
  },
  {
    title: 'Pijama de Inverno Flanelado Conforto Térmico Toque de Pelúcia',
    category: 'moda',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 189.00,
    price: 89.90,
    installments: '2x de R$ 44,95 sem juros',
    highlightTag: 'Aquecimento gostoso e macio',
    targetAudience: 'idosos'
  },
  {
    title: 'Luminária Noturna com Sensor de Presença Sem Fio Recarregável (Kit 3)',
    category: 'casa',
    badge: 'RELÂMPAGO',
    oldPrice: 129.00,
    price: 59.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Acende sozinha ao levantar à noite',
    targetAudience: 'idosos'
  },
  {
    title: 'Echo Pop Caixa de Som Inteligente com Alexa e Comando de Voz',
    category: 'eletronicos',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 349.00,
    price: 219.00,
    installments: '5x de R$ 43,80 sem juros',
    highlightTag: 'Peça músicas e alarmes por voz',
    targetAudience: 'idosos'
  },
  {
    title: 'Lanterna Tática Militar LED Potente Recarregável com Zoom 2000m',
    category: 'ferramentas',
    badge: 'RELÂMPAGO',
    oldPrice: 149.00,
    price: 69.90,
    installments: '2x de R$ 34,95 sem juros',
    highlightTag: 'Ilumina a rua inteira na escuridão',
    targetAudience: 'geral'
  },
  {
    title: 'Cama Nuvem Pet Anti-Stress Pelúcia Ultra Macia Redonda Lavável',
    category: 'pet',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 179.00,
    price: 89.90,
    installments: '2x de R$ 44,95 sem juros',
    highlightTag: 'Acalma o bichinho ansioso',
    targetAudience: 'todos'
  },
  {
    title: 'Kit Ventosas de Silicone para Massagem e Liberação de Tensões Musculares',
    category: 'esporte',
    badge: 'INTERNACIONAL',
    oldPrice: 139.00,
    price: 64.90,
    installments: '2x de R$ 32,45 sem juros',
    highlightTag: 'Relaxa as costas antes de dormir',
    targetAudience: 'todos'
  },
  {
    title: 'Creme Anti-Idade Noturno Retinol Puro com Colágeno e Ácido Hialurônico',
    category: 'beleza',
    badge: 'RELÂMPAGO',
    oldPrice: 169.00,
    price: 74.90,
    installments: '2x de R$ 37,45 sem juros',
    highlightTag: 'Firmeza e renovação celular à noite',
    targetAudience: 'todos'
  },
  {
    title: 'Notebook 15.6 Polegadas SSD 256GB 8GB RAM Windows 11 Bateria Longa Duração',
    category: 'eletronicos',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 2899.00,
    price: 1799.00,
    installments: '10x de R$ 179,90 sem juros',
    highlightTag: 'Rápido, liga em 8 segundos',
    targetAudience: 'todos'
  },
  {
    title: 'Edredom Queen Dupla Face Toque Macio Sherpa Pele de Carneiro',
    category: 'casa',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 389.00,
    price: 199.90,
    installments: '5x de R$ 39,98 sem juros',
    highlightTag: 'Super quentinho para o frio',
    targetAudience: 'todos'
  },
  {
    title: 'Mini Máquina de Selar Sacos Plásticos e Embalagens a Vácuo',
    category: 'casa',
    badge: 'RELÂMPAGO',
    oldPrice: 69.00,
    price: 29.90,
    installments: 'Em até 2x no cartão',
    image: KITCHEN_IMAGE,
    highlightTag: 'Mantém alimentos frescos por mais tempo',
    targetAudience: 'todos'
  },
  {
    title: 'Chinelo Pantufa Ortopédica Fechada Forrada com Lã Antiderrapante',
    category: 'moda',
    badge: 'RELÂMPAGO',
    oldPrice: 149.00,
    price: 69.90,
    installments: '2x de R$ 34,95 sem juros',
    image: SNEAKER_IMAGE,
    highlightTag: 'Pés quentes e seguros sem escorregar',
    targetAudience: 'idosos'
  },
  {
    title: 'Comedouro Elevado Inox Postura Correta para Cães e Gatos Sem Refluxo',
    category: 'pet',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 159.00,
    price: 79.90,
    installments: '2x de R$ 39,95 sem juros',
    highlightTag: 'Protege a coluna do animal',
    targetAudience: 'todos'
  },
  {
    title: 'Óleo Reparador de Pontas Nutrição com Argan e Macadâmia 100ml',
    category: 'beleza',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 89.00,
    price: 39.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Zero frizz ao acordar',
    targetAudience: 'todos'
  },
  {
    title: 'Kit Ferro de Solda Elétrico 60W com Suporte, Estanho e Sugador',
    category: 'ferramentas',
    badge: 'INTERNACIONAL',
    oldPrice: 139.00,
    price: 64.90,
    installments: '2x de R$ 32,45 sem juros',
    highlightTag: 'Aquecimento rápido e estável',
    targetAudience: 'geral'
  },
  {
    title: 'Balança Digital de Bioimpedância com Bluetooth Aplicativo no Celular',
    category: 'esporte',
    badge: 'RELÂMPAGO',
    oldPrice: 149.00,
    price: 69.90,
    installments: '2x de R$ 34,95 sem juros',
    highlightTag: 'Mede gordura, músculos e água',
    targetAudience: 'todos'
  },
  {
    title: 'Projetor Estrelar Luz Noturna Galáxia com Controle e Som Bluetooth',
    category: 'eletronicos',
    badge: 'INTERNACIONAL',
    oldPrice: 219.00,
    price: 99.90,
    installments: '2x de R$ 49,95 sem juros',
    highlightTag: 'Ambiente relaxante para o quarto',
    targetAudience: 'jovens'
  },
  {
    title: 'Almofada de Assento Gel Ortopédico Silicone Colmeia para Cadeira e Sofá',
    category: 'casa',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 149.00,
    price: 69.90,
    installments: '2x de R$ 34,95 sem juros',
    highlightTag: 'Alivia dor no cóccix e ciático',
    targetAudience: 'idosos'
  },
  {
    title: 'Suporte Articulado para TV de 32 a 75 Polegadas com Nível Bolha',
    category: 'eletronicos',
    badge: 'RELÂMPAGO',
    oldPrice: 189.00,
    price: 89.90,
    installments: '2x de R$ 44,95 sem juros',
    highlightTag: 'Gira para qualquer lado da sala',
    targetAudience: 'todos'
  },
  {
    title: 'Camisola Feminina Conforto Manga Curta Algodão Puro Toque Suave',
    category: 'moda',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 119.00,
    price: 54.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Fresca e soltinha no corpo',
    targetAudience: 'idosos'
  },
  {
    title: 'Manta Cobertor Microfibra Casal Toque Macio e Aveludado',
    category: 'casa',
    badge: 'RELÂMPAGO',
    oldPrice: 139.00,
    price: 69.90,
    installments: '2x de R$ 34,95 sem juros',
    highlightTag: 'Leve e esquenta muito bem',
    targetAudience: 'todos'
  },
  {
    title: 'Pistola de Cola Quente Bivolt 60W com 20 Bastões de Silicone',
    category: 'ferramentas',
    badge: 'RELÂMPAGO',
    oldPrice: 79.00,
    price: 34.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Bico anti-gotejamento',
    targetAudience: 'geral'
  },
  {
    title: 'Bolinha Mordedor Pet Interativa Porta Ração e Petisco Borracha Atóxica',
    category: 'pet',
    badge: 'INTERNACIONAL',
    oldPrice: 59.00,
    price: 26.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Limpa os dentes enquanto brinca',
    targetAudience: 'todos'
  },
  {
    title: 'Garrafa Térmica 2 Litros Inox Canudo de Silicone e Alça Reforçada',
    category: 'esporte',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 179.00,
    price: 89.90,
    installments: '2x de R$ 44,95 sem juros',
    highlightTag: 'Água gelada o dia inteiro',
    targetAudience: 'todos'
  },
  {
    title: 'Máscara Facial Noturna Hidratante de Mel e Colágeno Sachê 20 Unidades',
    category: 'beleza',
    badge: 'INTERNACIONAL',
    oldPrice: 99.00,
    price: 44.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Acorde com pele de bebê',
    targetAudience: 'geral'
  },
  {
    title: 'Repetidor e Amplificador de Sinal Wi-Fi 300Mbps Conexão Rápida',
    category: 'eletronicos',
    badge: 'RELÂMPAGO',
    oldPrice: 119.00,
    price: 54.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Internet rápida em todos os cômodos',
    targetAudience: 'todos'
  },
  {
    title: 'Kit 5 Cuecas Boxer Sem Costura Microfibra Conforto Máximo',
    category: 'moda',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 129.00,
    price: 59.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Não aperta a cintura',
    targetAudience: 'geral'
  },
  {
    title: 'Filtro de Linha 6 Tomadas Bivolt com 4 Portas USB e Disjuntor Protetor',
    category: 'casa',
    badge: 'RELÂMPAGO',
    oldPrice: 129.00,
    price: 64.90,
    installments: '2x de R$ 32,45 sem juros',
    highlightTag: 'Protege seus aparelhos de raios',
    targetAudience: 'todos'
  },
  {
    title: 'Teclado Musical 61 Teclas com Fonte e Suporte de Partitura Iniciantes',
    category: 'eletronicos',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 589.00,
    price: 299.90,
    installments: '6x de R$ 49,98 sem juros',
    highlightTag: 'Excelente para hobby e memória',
    targetAudience: 'idosos'
  },
  {
    title: 'Kit Fita LED RGB 5 Metros com Controle Remoto e Fonte Bivolt',
    category: 'casa',
    badge: 'INTERNACIONAL',
    oldPrice: 89.00,
    price: 39.90,
    installments: 'Em até 2x no cartão',
    highlightTag: '16 cores ajustáveis',
    targetAudience: 'jovens'
  },
  {
    title: 'Kit Tesouras de Poda e Jardinagem Aço Temperado Cabo Ergonômico',
    category: 'ferramentas',
    badge: 'RELÂMPAGO',
    oldPrice: 129.00,
    price: 59.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Corte limpo sem machucar plantas',
    targetAudience: 'geral'
  },
  {
    title: 'Escova Dental Massageadora para Cães Limpeza Tártaro e Mau Hálito',
    category: 'pet',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 59.00,
    price: 24.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Hálito fresco no animal',
    targetAudience: 'todos'
  },
  {
    title: 'Pistola Massageadora Muscular Elétrica 6 Velocidades com 4 Ponteiras',
    category: 'esporte',
    badge: 'INTERNACIONAL',
    oldPrice: 249.00,
    price: 119.90,
    installments: '3x de R$ 39,96 sem juros',
    highlightTag: 'Massagem percussiva relaxante',
    targetAudience: 'todos'
  },
  {
    title: 'Kit 3 Loções Hidratantes Corporais Manteiga de Karité 400ml Pele Seca',
    category: 'beleza',
    badge: 'RELÂMPAGO',
    oldPrice: 149.00,
    price: 69.90,
    installments: '2x de R$ 34,95 sem juros',
    highlightTag: 'Hidratação profunda 48h',
    targetAudience: 'idosos'
  },
  {
    title: 'Controle Remoto Universal Inteligente Infravermelho Conecta TV e Ar',
    category: 'eletronicos',
    badge: 'INTERNACIONAL',
    oldPrice: 119.00,
    price: 54.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Controle tudo pelo celular',
    targetAudience: 'todos'
  },
  {
    title: 'Protetor de Colchão Impermeável Casal Anti-Ácaro e Anti-Alérgico',
    category: 'casa',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 159.00,
    price: 79.90,
    installments: '2x de R$ 39,95 sem juros',
    highlightTag: 'Silencioso, não faz barulho de plástico',
    targetAudience: 'todos'
  },
  {
    title: 'Óculos de Leitura Perto com Grau Ajustável Antirreflexo +1.0 a +4.0',
    category: 'moda',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 99.00,
    price: 44.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Leitura confortável de livros e bulas',
    targetAudience: 'idosos'
  },
  {
    title: 'Multímetro Digital Profissional com Teste de Voltagem e Bip Sonoro',
    category: 'ferramentas',
    badge: 'RELÂMPAGO',
    oldPrice: 129.00,
    price: 59.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Visor grande iluminado',
    targetAudience: 'geral'
  },
  {
    title: 'Coleira com Luz LED Noturna Recarregável USB para Passeios Seguros',
    category: 'pet',
    badge: 'RELÂMPAGO',
    oldPrice: 79.00,
    price: 34.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Visível a mais de 300 metros',
    targetAudience: 'todos'
  },
  {
    title: 'Faixa Postural Unissex Corretor de Postura Regulável Alívio Lombar',
    category: 'esporte',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 119.00,
    price: 49.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Mantém as costas retas sem dor',
    targetAudience: 'idosos'
  },
  {
    title: 'Escova Facial Elétrica de Silicone Limpeza Profunda à Prova Dágua',
    category: 'beleza',
    badge: 'INTERNACIONAL',
    oldPrice: 89.00,
    price: 39.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Pele macia e sem oleosidade',
    targetAudience: 'jovens'
  },
  {
    title: 'Cabideiro Arara Dupla de Roupas em Aço com Rodízios e Sapateira',
    category: 'casa',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 179.00,
    price: 89.90,
    installments: '2x de R$ 44,95 sem juros',
    highlightTag: 'Montagem simples sem parafusos',
    targetAudience: 'geral'
  },
  {
    title: 'Roteador Wi-Fi 6 Gigabit Dual Band 4 Antenas Alto Alcance',
    category: 'eletronicos',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 389.00,
    price: 199.90,
    installments: '4x de R$ 49,97 sem juros',
    highlightTag: 'Conecta mais de 50 aparelhos juntos',
    targetAudience: 'todos'
  },
  {
    title: 'Jaqueta Casaco Moletom Flanelado com Zíper e Capuz Conforto',
    category: 'moda',
    badge: 'RELÂMPAGO',
    oldPrice: 199.00,
    price: 94.90,
    installments: '2x de R$ 47,45 sem juros',
    highlightTag: 'Forro peluciado super macio',
    targetAudience: 'todos'
  },
  {
    title: 'Jogo de Soquetes Chave Catraca Reversível 46 Peças Aço Cromo Vanádio',
    category: 'ferramentas',
    badge: 'INTERNACIONAL',
    oldPrice: 199.00,
    price: 89.90,
    installments: '2x de R$ 44,95 sem juros',
    highlightTag: 'Indispensável no carro e em casa',
    targetAudience: 'geral'
  },
  {
    title: 'Cinto de Segurança para Cachorro Engate Universal no Carro',
    category: 'pet',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 49.00,
    price: 22.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Evita multas e protege seu pet',
    targetAudience: 'todos'
  },
  {
    title: 'Kit 3 Pares de Meias Esportivas Cano Médio Atoalhadas Conforto',
    category: 'esporte',
    badge: 'RELÂMPAGO',
    oldPrice: 59.00,
    price: 24.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Não esquenta o pé e absorve suor',
    targetAudience: 'todos'
  },
  {
    title: 'Sabonete Líquido Íntimo Ginecologicamente Testado Neutro 200ml (Kit 3)',
    category: 'beleza',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 89.00,
    price: 44.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Equilibra o pH natural',
    targetAudience: 'geral'
  },
  {
    title: 'Mini Seladora Térmica Portátil com Ímã de Geladeira',
    category: 'casa',
    badge: 'INTERNACIONAL',
    oldPrice: 49.00,
    price: 19.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Prende na geladeira para usar sempre',
    targetAudience: 'todos'
  },
  {
    title: 'Hub USB 4 Portas 3.0 com Chave Liga/Desliga Individual',
    category: 'eletronicos',
    badge: 'RELÂMPAGO',
    oldPrice: 79.00,
    price: 34.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Transferência rápida 5Gbps',
    targetAudience: 'todos'
  },
  {
    title: 'Kit 3 Camisetas Básicas Algodão Egípcio Conforto Premium Não Encolhe',
    category: 'moda',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 199.00,
    price: 99.90,
    installments: '2x de R$ 49,95 sem juros',
    highlightTag: 'Tecido nobre que respira',
    targetAudience: 'geral'
  },
  {
    title: 'Fita Isolante de Auto Fusão para Emenda Elétrica e Cano 10 Metros',
    category: 'ferramentas',
    badge: 'RELÂMPAGO',
    oldPrice: 69.00,
    price: 29.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Veda vazamento de cano e fiação',
    targetAudience: 'geral'
  },
  {
    title: 'Mordedor Osso de Nylon Resistente para Cães com Mastigação Forte',
    category: 'pet',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 79.00,
    price: 34.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Dura meses sem quebrar',
    targetAudience: 'todos'
  },
  {
    title: 'Smart Band Relógio Contador de Passos e Calorias Display Colorido',
    category: 'esporte',
    badge: 'INTERNACIONAL',
    oldPrice: 149.00,
    price: 59.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Leva você a caminhar mais',
    targetAudience: 'idosos'
  },
  {
    title: 'Óleo de Rosa Mosqueta Puro 100% Regenerador de Cicatrizes e Linhas',
    category: 'beleza',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 79.00,
    price: 34.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Recomendado por dermatologistas',
    targetAudience: 'todos'
  },
  {
    title: 'Cortina Blackout Tecido Corta 100% a Luz Ilhós Cromado 2.80x2.30m',
    category: 'casa',
    badge: 'RELÂMPAGO',
    oldPrice: 229.00,
    price: 119.90,
    installments: '3x de R$ 39,96 sem juros',
    highlightTag: 'Quarto escuro e fresco para dormir',
    targetAudience: 'todos'
  },
  {
    title: 'Suporte de Celular Veicular Magnético com Trava na Saída de Ar',
    category: 'eletronicos',
    badge: 'INTERNACIONAL',
    oldPrice: 69.00,
    price: 29.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Imã super forte não derruba',
    targetAudience: 'todos'
  },
  {
    title: 'Kit 3 Bermudas Moletom Masculina com Bolsos e Cordão Ajustável',
    category: 'moda',
    badge: 'PREÇO IMBATÍVEL',
    oldPrice: 169.00,
    price: 79.90,
    installments: '2x de R$ 39,95 sem juros',
    highlightTag: 'Conforto para usar em casa e passear',
    targetAudience: 'geral'
  },
  {
    title: 'Kit 10 Lâmpadas LED 9W Branca Bivolt Econômica Selo Procel A',
    category: 'ferramentas',
    badge: 'RELÂMPAGO',
    oldPrice: 99.00,
    price: 49.90,
    installments: 'Em até 2x no cartão',
    highlightTag: 'Economiza 85% na conta de luz',
    targetAudience: 'todos'
  }
];

// PRODUTOS RESERVA PARA SUBSTITUIÇÃO IMEDIATA POR CATEGORIA (Quando algum for marcado indisponível)
export const RESERVE_ITEMS: Record<CategoryType, RawProductDef[]> = {
  casa: [
    {
      title: 'Batedeira Planetária 700W Tigela Inox 4.5L com 3 Batedores',
      category: 'casa',
      badge: 'PREÇO IMBATÍVEL',
      oldPrice: 499.00,
      price: 279.90,
      installments: '6x de R$ 46,65 sem juros',
      highlightTag: 'Reserva Especial',
      targetAudience: 'geral'
    },
    {
      title: 'Conjunto 6 Facas Inox Profissionais com Cepo Giratório de Madeira',
      category: 'casa',
      badge: 'RELÂMPAGO',
      oldPrice: 229.00,
      price: 119.90,
      installments: '3x de R$ 39,96 sem juros',
      highlightTag: 'Reserva Especial',
      targetAudience: 'geral'
    }
  ],
  eletronicos: [
    {
      title: 'Fone de Ouvido Headphone Sem Fio Extra Bass com Microfone',
      category: 'eletronicos',
      badge: 'RELÂMPAGO',
      oldPrice: 249.00,
      price: 119.90,
      installments: '3x de R$ 39,96 sem juros',
      highlightTag: 'Reserva Especial',
      targetAudience: 'todos'
    },
    {
      title: 'Carregador Veicular Turbo 45W 2 Saídas USB-C e USB-A Metálico',
      category: 'eletronicos',
      badge: 'INTERNACIONAL',
      oldPrice: 99.00,
      price: 44.90,
      installments: 'Em até 2x no cartão',
      highlightTag: 'Reserva Especial',
      targetAudience: 'todos'
    }
  ],
  moda: [
    {
      title: 'Tênis Feminino Slip-on Elástico Conforto Palmilha Macia Anti-Impacto',
      category: 'moda',
      badge: 'PREÇO IMBATÍVEL',
      oldPrice: 199.00,
      price: 89.90,
      installments: '2x de R$ 44,95 sem juros',
      highlightTag: 'Reserva Especial',
      targetAudience: 'idosos'
    },
    {
      title: 'Bolsa Mochila Feminina Antifurto Impermeável com Alça Dupla',
      category: 'moda',
      badge: 'RELÂMPAGO',
      oldPrice: 169.00,
      price: 79.90,
      installments: '2x de R$ 39,95 sem juros',
      highlightTag: 'Reserva Especial',
      targetAudience: 'geral'
    }
  ],
  beleza: [
    {
      title: 'Kit 4 Batons Matte Longa Duração com Ácido Hialurônico',
      category: 'beleza',
      badge: 'PREÇO IMBATÍVEL',
      oldPrice: 119.00,
      price: 49.90,
      installments: 'Em até 2x no cartão',
      highlightTag: 'Reserva Especial',
      targetAudience: 'geral'
    },
    {
      title: 'Corta Cutícula Elétrico Bivolt sem Machucar com 5 Lixas Diamantadas',
      category: 'beleza',
      badge: 'RELÂMPAGO',
      oldPrice: 149.00,
      price: 69.90,
      installments: '2x de R$ 34,95 sem juros',
      highlightTag: 'Reserva Especial',
      targetAudience: 'idosos'
    }
  ],
  ferramentas: [
    {
      title: 'Jogo de Chaves Fenda e Philips com Ponta Magnética 8 Peças',
      category: 'ferramentas',
      badge: 'PREÇO IMBATÍVEL',
      oldPrice: 99.00,
      price: 44.90,
      installments: 'Em até 2x no cartão',
      highlightTag: 'Reserva Especial',
      targetAudience: 'geral'
    },
    {
      title: 'Detector de Tensão sem Contato Caneta Teste com LED Sonoro',
      category: 'ferramentas',
      badge: 'INTERNACIONAL',
      oldPrice: 79.00,
      price: 34.90,
      installments: 'Em até 2x no cartão',
      highlightTag: 'Reserva Especial',
      targetAudience: 'geral'
    }
  ],
  pet: [
    {
      title: 'Bebedouro Portátil para Cachorro com Garrafa e Trava de Vazamento',
      category: 'pet',
      badge: 'RELÂMPAGO',
      oldPrice: 69.00,
      price: 29.90,
      installments: 'Em até 2x no cartão',
      highlightTag: 'Reserva Especial',
      targetAudience: 'todos'
    },
    {
      title: 'Brinquedo Peixe Robótico que Se Mexe com Catnip para Gatos',
      category: 'pet',
      badge: 'INTERNACIONAL',
      oldPrice: 89.00,
      price: 39.90,
      installments: 'Em até 2x no cartão',
      highlightTag: 'Reserva Especial',
      targetAudience: 'todos'
    }
  ],
  esporte: [
    {
      title: 'Kit 3 Faixas Elásticas de Resistência Tecido Antiderrapante Glúteos',
      category: 'esporte',
      badge: 'PREÇO IMBATÍVEL',
      oldPrice: 99.00,
      price: 44.90,
      installments: 'Em até 2x no cartão',
      highlightTag: 'Reserva Especial',
      targetAudience: 'jovens'
    },
    {
      title: 'Bolsa Térmica Esportiva para Marmita e Água 10 Litros Impermeável',
      category: 'esporte',
      badge: 'RELÂMPAGO',
      oldPrice: 119.00,
      price: 54.90,
      installments: 'Em até 2x no cartão',
      highlightTag: 'Reserva Especial',
      targetAudience: 'todos'
    }
  ],
  todos: []
};

// Converte definição bruta em modelo Product com cálculos e ID
function buildProduct(def: RawProductDef, shift: ShiftType, index: number): Product {
  const discountPercent = Math.round(((def.oldPrice - def.price) / def.oldPrice) * 100);
  
  // Imagem apropriada conforme categoria/especificação
  let resolvedImage = def.image;
  if (!resolvedImage) {
    if (def.category === 'casa') resolvedImage = KITCHEN_IMAGE;
    else if (def.category === 'eletronicos') resolvedImage = GADGET_IMAGE;
    else if (def.category === 'moda' || def.category === 'esporte') resolvedImage = SNEAKER_IMAGE;
    else resolvedImage = KITCHEN_IMAGE;
  }

  // Link direto de afiliado exclusivo do produto (prioriza link direto ou gera busca com a tag de afiliado)
  const defaultAffiliateUrl = `https://www.mercadolivre.com.br/ofertas?q=${encodeURIComponent(
    def.title.split(' ').slice(0, 4).join(' ')
  )}&container_id=MLB779362-1&matt_tool=sm20240625081530`;

  return {
    id: `prod_${shift}_${index + 1}`,
    title: def.title,
    category: def.category,
    badge: def.badge,
    oldPrice: def.oldPrice,
    price: def.price,
    discountPercent,
    rating: 4.8 + ((index % 3) * 0.1),
    reviewsCount: 140 + (index * 23),
    freeShipping: def.price >= 79 || index % 2 === 0,
    shift,
    isAvailable: true,
    image: resolvedImage,
    installments: def.installments,
    affiliateUrl: def.affiliateUrl || defaultAffiliateUrl,
    targetAudience: def.targetAudience || 'todos',
    highlightTag: def.highlightTag
  };
}

// 180 PRODUTOS COMPLETOS DIVIDIDOS EXATAMENTE EM 3 LEVAS DE 60 PRODUTOS
export const ALL_PRODUCTS: Product[] = [
  ...MANHA_ITEMS.map((item, idx) => buildProduct(item, 'manha', idx)),
  ...TARDE_ITEMS.map((item, idx) => buildProduct(item, 'tarde', idx)),
  ...NOITE_ITEMS.map((item, idx) => buildProduct(item, 'noite', idx)),
];

// Helper para obter a leva baseada no horário atual do dia
export function getCurrentShift(): ShiftType {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 12) return 'manha';
  if (hour >= 12 && hour < 18) return 'tarde';
  return 'noite';
}

// Helper para obter a lista de produtos de uma determinada leva
export function getProductsByShift(shift: ShiftType): Product[] {
  return ALL_PRODUCTS.filter(p => p.shift === shift);
}
