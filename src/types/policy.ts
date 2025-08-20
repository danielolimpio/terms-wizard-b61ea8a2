export interface PolicyType {
  id: string;
  name: string;
  description: string;
  keywords: string[];
  slug: string;
  icon: string;
  category: 'legal' | 'privacy' | 'business' | 'technical';
}

export interface PolicyFormData {
  siteName: string;
  siteUrl: string;
  hasAdsense: boolean;
  language: string;
  contactEmail?: string;
  companyName?: string;
  country?: string;
}

export interface GeneratedPolicy {
  id: string;
  type: PolicyType;
  content: string;
  formData: PolicyFormData;
  createdAt: Date;
}

export const AVAILABLE_LANGUAGES = [
  { code: 'pt-BR', name: 'Português (Brasil)' },
  { code: 'en-US', name: 'English (US)' },
  { code: 'es-ES', name: 'Español' },
  { code: 'fr-FR', name: 'Français' },
  { code: 'de-DE', name: 'Deutsch' },
  { code: 'it-IT', name: 'Italiano' },
] as const;

export type LanguageCode = typeof AVAILABLE_LANGUAGES[number]['code'];