export type TabType = 
  | 'home' 
  | 'company-overview' 
  | 'product-catalog' 
  | 'engineering-services' 
  | 'production-facilities' 
  | 'esg-management' 
  | 'customer-support'
  | 'msds-archive'
  | 'directions';

export type GasCategory = 
  | 'all'
  | 'industrial'
  | 'fuel'
  | 'specialty'
  | 'medical'
  | 'calibration'
  | 'infrastructure';

export interface GasProduct {
  id: string;
  code: string;
  name: string;
  chemicalFormula: string;
  category: GasCategory;
  categoryLabel: string;
  subtitle: string;
  description: string;
  purity: string;
  grade: string;
  deliveryMethods: string[];
  applications: string[];
  imageUrl: string;
  hazards: string[];
  specs: {
    molecularWeight?: string;
    boilingPoint?: string;
    cylinderPressure?: string;
    purityGuaranteed?: string;
    impurities?: string;
  };
  msdsId?: string;
}

export interface FacilityHub {
  id: string;
  name: string;
  region: string;
  type: 'headquarters' | 'production_plant' | 'logistics_hub' | 'rnd_center';
  address: string;
  phone: string;
  tankCapacity: string;
  fleetCount: number;
  coordinates: { x: number; y: number }; // percentage on Korea map
  features: string[];
}

export interface NoticeItem {
  id: string;
  badge: string;
  badgeType: 'tender' | 'news' | 'hazard' | 'csr';
  date: string;
  title: string;
  summary: string;
  content: string;
  agency?: string;
  deadline?: string;
  externalLink?: boolean;
}

export interface MsdsDocument {
  id: string;
  casNo: string;
  productName: string;
  chemicalName: string;
  formula: string;
  category: string;
  unNumber: string;
  updatedAt: string;
  fileSize: string;
  ghsPictograms: string[];
  healthHazard: string;
  fireHazard: string;
  handlingCare: string;
}

export interface QuoteRequest {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  gasType: string;
  category: string;
  requiredPurity: string;
  estimatedVolume: string;
  containerType: string;
  deliveryRegion: string;
  targetDate: string;
  notes: string;
}
