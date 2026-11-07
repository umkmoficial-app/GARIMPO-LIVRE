// Assets de imagens reais de alta fidelidade gerados para o Garimpo Livre
export const HERO_IMAGE = '/images/garimpo_hero_deals_1793938165209.jpg';
export const GADGET_IMAGE = '/images/product_smartphone_gadget_1793938164906.jpg';
export const HEADPHONES_IMAGE = '/images/headphones_audio_anc_1793950152624.jpg';
export const KITCHEN_IMAGE = '/images/product_airfryer_kitchen_1793938166252.jpg';
export const COOKER_POTS_IMAGE = '/images/pressure_cooker_pots_1793950165638.jpg';
export const FAN_BLENDER_IMAGE = '/images/fan_blender_appliance_1793950151608.jpg';
export const SNEAKER_IMAGE = '/images/product_sneakers_sport_1793938166174.jpg';
export const APPAREL_IMAGE = '/images/apparel_jacket_jogger_1793950152130.jpg';
export const TOOLS_IMAGE = '/images/product_tools_drill_1793949115987.jpg';
export const TOOLBOX_IMAGE = '/images/product_toolbox_ladder_1793949904899.jpg';
export const FRIDGE_IMAGE = '/images/product_fridge_kitchen_1793949116739.jpg';
export const SMARTWATCH_IMAGE = '/images/product_smartwatch_screen_1793949116463.jpg';
export const BEAUTY_IMAGE = '/images/product_beauty_skincare_1793949117399.jpg';
export const TV_LAPTOP_IMAGE = '/images/product_tv_laptop_1793949903807.jpg';
export const BEDDING_IMAGE = '/images/product_bedding_blanket_1793949905893.jpg';
export const PET_IMAGE = '/images/product_pet_accessories_1793949904949.jpg';

/**
 * Resolve a imagem real de alta fidelidade do produto:
 * Substitui os placeholders genéricos/cinzas pela fotografia correta e exata do produto.
 */
export function resolveProductImage(fotoUrl: string | undefined, title: string, category: string): string {
  // Se for uma foto externa real e válida que NÃO seja o placeholder cinza do picsum.photos
  if (fotoUrl && fotoUrl.startsWith('http') && !fotoUrl.includes('picsum.photos')) {
    return fotoUrl;
  }

  const t = (title || '').toLowerCase();
  const c = (category || '').toLowerCase();

  // 1. Eletrodomésticos Grandes: Geladeira
  if (t.includes('geladeira') || t.includes('refrigerador')) {
    return FRIDGE_IMAGE;
  }

  // 2. Ventilador e Liquidificador
  if (t.includes('ventilador') || t.includes('liquidificador')) {
    return FAN_BLENDER_IMAGE;
  }

  // 3. Panelas, Panela de Pressão e Churrasqueira Elétrica
  if (t.includes('panela') || t.includes('churrasqueira') || t.includes('cafeteira')) {
    return COOKER_POTS_IMAGE;
  }

  // 4. Air Fryer / Fritadeira Elétrica
  if (t.includes('air fryer') || t.includes('fritadeira')) {
    return KITCHEN_IMAGE;
  }

  // 5. Áudio: Fone de Ouvido Bluetooth, Headphone, Headset
  if (t.includes('fone') || t.includes('headphone') || t.includes('earbud') || t.includes('auricular')) {
    return HEADPHONES_IMAGE;
  }

  // 6. Eletrônicos Grandes: TV, Smart TV, Notebook, Laptop
  if (t.includes('tv') || t.includes('smart tv') || t.includes('notebook') || t.includes('laptop')) {
    return TV_LAPTOP_IMAGE;
  }

  // 7. Ferramentas: Maletas, Caixas, Escadas, Chaves Manuais, Multímetro
  if (
    t.includes('caixa de ferramentas') ||
    t.includes('maleta') ||
    t.includes('escada') ||
    t.includes('jogo de chaves') ||
    t.includes('multímetro')
  ) {
    return TOOLBOX_IMAGE;
  }

  // 8. Ferramentas Elétricas: Furadeira, Parafusadeira, Serra Circular
  if (t.includes('furadeira') || t.includes('parafusadeira') || t.includes('serra')) {
    return TOOLS_IMAGE;
  }

  // 9. Cama, Mesa e Banho: Cobertor, Edredom, Sherpa, Lençol
  if (t.includes('cobertor') || t.includes('edredom') || t.includes('sherpa') || t.includes('lençol')) {
    return BEDDING_IMAGE;
  }

  // 10. Pets: Coleira, Peitoral, Mordedor
  if (t.includes('coleira') || t.includes('peitoral') || t.includes('mordedor') || t.includes('pet') || c.includes('pet')) {
    return PET_IMAGE;
  }

  // 11. Wearables: Smartwatch, Relógio, Smartband
  if (t.includes('smartwatch') || t.includes('relógio') || t.includes('smartband')) {
    return SMARTWATCH_IMAGE;
  }

  // 12. Cosméticos, Higiene e Beleza
  if (
    t.includes('creme') ||
    t.includes('hidratante') ||
    t.includes('maquiagem') ||
    t.includes('espelho') ||
    t.includes('escova') ||
    t.includes('barbeador') ||
    t.includes('cortador') ||
    t.includes('perfume') ||
    t.includes('chapinha') ||
    t.includes('prancha') ||
    c.includes('beleza')
  ) {
    return BEAUTY_IMAGE;
  }

  // 13. Vestuário e Roupas: Jaqueta, Calça Jogger, Meia, Boné
  if (
    t.includes('jaqueta') ||
    t.includes('calça') ||
    t.includes('jogger') ||
    t.includes('corta vento') ||
    t.includes('boné') ||
    t.includes('meia')
  ) {
    return APPAREL_IMAGE;
  }

  // 14. Calçados e Artigos Esportivos
  if (
    t.includes('tênis') ||
    t.includes('chinelo') ||
    t.includes('slide') ||
    t.includes('corda') ||
    t.includes('luvas') ||
    t.includes('vôlei') ||
    t.includes('garrafa') ||
    c.includes('esporte')
  ) {
    return SNEAKER_IMAGE;
  }

  // 15. Gadgets e Acessórios Tech: Celular, Smartphone, Mouse Gamer, Luminária
  if (t.includes('celular') || t.includes('smartphone') || t.includes('mouse') || t.includes('luminária') || c.includes('eletron')) {
    return GADGET_IMAGE;
  }

  // Fallbacks por categoria
  if (c.includes('ferramenta')) return TOOLBOX_IMAGE;
  if (c.includes('casa')) return COOKER_POTS_IMAGE;
  if (c.includes('moda')) return APPAREL_IMAGE;

  return HERO_IMAGE;
}
