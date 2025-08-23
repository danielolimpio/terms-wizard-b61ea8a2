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
  
  // Campos específicos para Política de Transparência
  siteType?: string;
  legalResponsible?: string;
  cnpjCpf?: string;
  businessAddress?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  hasSponsoredContent?: boolean;
  hasAffiliatePrograms?: boolean;
  affiliatePartners?: string;
  receivesFreeProducts?: boolean;
  freeProductsDisclosure?: string;
  sellsProducts?: boolean;
  productTypes?: string;
  collectsUserData?: boolean;
  dataTypes?: string;
  sharesDataWithThirdParties?: boolean;
  thirdPartyServices?: string;
  hasPrivacyPolicy?: boolean;
  privacyPolicyUrl?: string;
  correctsErrors?: boolean;
  errorCorrectionProcess?: string;
  revealsConflictsOfInterest?: boolean;
  conflictExamples?: string;
  receivesEditorialSupport?: boolean;
  editorialSupportDetails?: string;
  usesAI?: boolean;
  aiDisclosureMethod?: string;
  allowsComments?: boolean;
  hasModeration?: boolean;
  hasErrorReportingProcess?: boolean;
  errorReportingMethod?: string;
  showsPublicationDates?: boolean;
  hasEditorialTeam?: boolean;
  editorialTeamDetails?: string;
  offersFreeAndPaidContent?: boolean;
  contentDifferentiation?: string;
  otherRevenueStreams?: string;
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