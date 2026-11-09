export type CategoryType =
  | 'todos'
  | 'casa'
  | 'eletronicos'
  | 'moda'
  | 'beleza'
  | 'ferramentas'
  | 'pet'
  | 'esporte';

export type DealBadgeType = 'RELÂMPAGO' | 'PREÇO IMBATÍVEL' | 'INTERNACIONAL';

export type ShiftType = 'manha' | 'tarde' | 'noite';

export interface Product {
  id: string;
  title: string;
  category: CategoryType;
  badge: DealBadgeType;
  oldPrice: number;
  price: number;
  discountPercent: number;
  rating: number;
  reviewsCount: number;
  freeShipping: boolean;
  shift: ShiftType;
  isAvailable: boolean;
  image: string;
  installments: string;
  affiliateUrl?: string;
  description?: string;
  targetAudience?: 'todos' | 'idosos' | 'jovens' | 'geral';
  highlightTag?: string;
  isLowStock?: boolean;
  lowStockCount?: number;
}

export interface GarimpoRequest {
  id: string;
  query: string;
  category: string;
  maxBudget?: number;
  timestamp: number;
  status: 'encontrado' | 'garimpando';
}
