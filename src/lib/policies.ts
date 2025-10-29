import { PolicyType } from '@/types/policy';

export const POLICY_TYPES: PolicyType[] = [
  {
    id: 'privacy-policy',
    name: 'Modelo Política de Privacidade',
    description: 'Documenta como seus dados pessoais são coletados, usados e protegidos',
    keywords: ['gerador política privacidade', 'política de privacidade', 'LGPD', 'GDPR', 'proteção de dados'],
    slug: 'gerador-politica-privacidade',
    icon: '🔒',
    category: 'privacy'
  },
  {
    id: 'terms-of-use',
    name: 'Modelo Termos de Uso',
    description: 'Define as regras e condições para usar seu site ou serviço',
    keywords: ['gerador termos uso', 'termos de uso', 'condições', 'regulamento', 'direitos'],
    slug: 'gerador-termos-uso',
    icon: '📋',
    category: 'legal'
  },
  {
    id: 'cookie-policy',
    name: 'Modelo Política de Cookies',
    description: 'Explica como e por que seu site usa cookies',
    keywords: ['gerador política cookies', 'cookies', 'tracking', 'navegação', 'preferências'],
    slug: 'gerador-politica-cookies',
    icon: '🍪',
    category: 'technical'
  },
  {
    id: 'refund-policy',
    name: 'Modelo Política de Reembolso',
    description: 'Define condições e procedimentos para reembolsos',
    keywords: ['gerador política reembolso', 'reembolso', 'devolução', 'cancelamento', 'estorno'],
    slug: 'gerador-politica-reembolso',
    icon: '💰',
    category: 'business'
  },
  {
    id: 'transparency-policy',
    name: 'Modelo Política de Transparência',
    description: 'Demonstra transparência nas operações e processos',
    keywords: ['gerador política transparência', 'transparência', 'ética', 'governança', 'responsabilidade'],
    slug: 'gerador-politica-transparencia',
    icon: '🔍',
    category: 'business'
  },
  {
    id: 'security-policy',
    name: 'Modelo Política de Segurança',
    description: 'Descreve medidas de segurança para proteger dados e sistemas',
    keywords: ['gerador política segurança', 'segurança', 'proteção', 'cibersegurança', 'dados'],
    slug: 'gerador-politica-seguranca',
    icon: '🛡️',
    category: 'technical'
  },
  {
    id: 'antispam-policy',
    name: 'Modelo Política de Antispam',
    description: 'Define regras contra spam e comunicações não solicitadas',
    keywords: ['gerador política antispam', 'antispam', 'email marketing', 'comunicação', 'spam'],
    slug: 'gerador-politica-antispam',
    icon: '🚫',
    category: 'legal'
  },
  {
    id: 'copyright-policy',
    name: 'Modelo Política de Propriedade Intelectual',
    description: 'Protege direitos autorais e propriedade intelectual',
    keywords: ['gerador política propriedade intelectual', 'direitos autorais', 'propriedade intelectual', 'copyright'],
    slug: 'gerador-politica-propriedade-intelectual',
    icon: '©️',
    category: 'legal'
  },
  {
    id: 'content-policy',
    name: 'Modelo Política de Conteúdo',
    description: 'Define diretrizes para conteúdo aceitável na plataforma',
    keywords: ['gerador política conteúdo', 'conteúdo', 'diretrizes', 'moderação', 'comunidade'],
    slug: 'gerador-politica-conteudo',
    icon: '📝',
    category: 'legal'
  },
  {
    id: 'comment-moderation',
    name: 'Modelo Política de Moderação',
    description: 'Regras para moderação e aprovação de comentários',
    keywords: ['gerador política moderação', 'comentários', 'moderação', 'comunidade', 'interação'],
    slug: 'gerador-politica-moderacao',
    icon: '💬',
    category: 'legal'
  },
  {
    id: 'accessibility-policy',
    name: 'Modelo Política de Acessibilidade',
    description: 'Compromisso com acessibilidade digital para todos os usuários',
    keywords: ['gerador política acessibilidade', 'acessibilidade', 'inclusão', 'deficiência', 'WCAG'],
    slug: 'gerador-politica-acessibilidade',
    icon: '♿',
    category: 'legal'
  },
  {
    id: 'sustainability-policy',
    name: 'Modelo Política de Sustentabilidade',
    description: 'Compromisso com práticas sustentáveis e responsabilidade social',
    keywords: ['gerador política sustentabilidade', 'sustentabilidade', 'meio ambiente', 'responsabilidade social'],
    slug: 'gerador-politica-sustentabilidade',
    icon: '🌱',
    category: 'business'
  }
];

export const getPolicyBySlug = (slug: string): PolicyType | undefined => {
  return POLICY_TYPES.find(policy => policy.slug === slug);
};

export const getPolicyById = (id: string): PolicyType | undefined => {
  return POLICY_TYPES.find(policy => policy.id === id);
};