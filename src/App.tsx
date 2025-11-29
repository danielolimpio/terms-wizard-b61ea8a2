import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Main pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AllPoliciesPage from "./pages/AllPoliciesPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import TermosUsoSegurancaJuridicaPost from "./pages/blog/TermosUsoSegurancaJuridicaPost";
import PoliticaCookiesGuiaCompletoPost from "./pages/blog/PoliticaCookiesGuiaCompletoPost";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HelpPage from "./pages/HelpPage";
import SitemapPage from "./pages/SitemapPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminPostsPage from "./pages/AdminPostsPage";
import AdminPostEditorPage from "./pages/AdminPostEditorPage";
import PoliticaPrivacidadeGratisPage from "./pages/PoliticaPrivacidadeGratisPage";
import GeradorPoliticaPrivacidadePage from "./pages/GeradorPoliticaPrivacidadePage";
import ComoGerarPoliticaPrivacidadePage from "./pages/ComoGerarPoliticaPrivacidadePage";

// Info pages
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfUsePage from "./pages/TermsOfUsePage";
import CookiePolicyPage from "./pages/CookiePolicyPage";

// Generator pages - DIRECT IMPORTS
import PrivacyPolicyGenerator from "./pages/generators/PrivacyPolicyGenerator";
import TermsOfUseGenerator from "./pages/generators/TermsOfUseGenerator";
import CookiePolicyGenerator from "./pages/generators/CookiePolicyGenerator";
import RefundPolicyGenerator from "./pages/generators/RefundPolicyGenerator";
import TransparencyPolicyGenerator from "./pages/generators/TransparencyPolicyGenerator";
import SecurityPolicyGenerator from "./pages/generators/SecurityPolicyGenerator";
import AntispamPolicyGenerator from "./pages/generators/AntispamPolicyGenerator";
import CopyrightPolicyGenerator from "./pages/generators/CopyrightPolicyGenerator";
import ContentPolicyGenerator from "./pages/generators/ContentPolicyGenerator";
import CommentModerationGenerator from "./pages/generators/CommentModerationGenerator";
import AccessibilityPolicyGenerator from "./pages/generators/AccessibilityPolicyGenerator";
import SustainabilityPolicyGenerator from "./pages/generators/SustainabilityPolicyGenerator";

console.log("App loaded - generators imported:", {
  PrivacyPolicyGenerator,
  TermsOfUseGenerator,
  CookiePolicyGenerator,
  RefundPolicyGenerator,
  TransparencyPolicyGenerator,
  SecurityPolicyGenerator,
  AntispamPolicyGenerator,
  CopyrightPolicyGenerator,
  ContentPolicyGenerator,
  CommentModerationGenerator,
  AccessibilityPolicyGenerator,
  SustainabilityPolicyGenerator
});

const queryClient = new QueryClient();

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag?: (command: string, targetId: string, config?: Record<string, any>) => void;
  }
}

// Google Analytics 4 tracking component
const GATracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view on route change
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', 'G-JT7VF729P8', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
};

const App = () => {
  console.log("App rendering - build v2.0");
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <GATracker />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/politicas" element={<AllPoliciesPage />} />
            <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/politica-privacidade-o-que-e-por-que-precisa-modelo-gratuito-2026" element={<BlogPostPage />} />
          <Route path="/blog/como-escrever-termos-do-seu-site-evitar-processos-garantir-seguranca-juridica" element={<TermosUsoSegurancaJuridicaPost />} />
          <Route path="/blog/politica-cookies-guia-completo-lgpd-gdpr-banner-correto-2026" element={<PoliticaCookiesGuiaCompletoPost />} />
            <Route path="/ajuda" element={<HelpPage />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route path="/sitemap" element={<SitemapPage />} />
            
            {/* SEO Landing Pages */}
            <Route path="/politica-de-privacidade-gratis" element={<PoliticaPrivacidadeGratisPage />} />
            <Route path="/como-gerar-politica-de-privacidade" element={<ComoGerarPoliticaPrivacidadePage />} />
            
            {/* Info pages */}
            <Route path="/politica-privacidade" element={<PrivacyPolicyPage />} />
            <Route path="/termos-uso" element={<TermsOfUsePage />} />
            <Route path="/politica-cookies" element={<CookiePolicyPage />} />
            
            {/* Geradores - URLs SEO Friendly */}
            <Route path="/gerador-politica-privacidade" element={<GeradorPoliticaPrivacidadePage />} />
            <Route path="/gerador-termos-uso" element={<TermsOfUseGenerator />} />
            <Route path="/gerador-politica-cookies" element={<CookiePolicyGenerator />} />
            <Route path="/gerador-politica-reembolso" element={<RefundPolicyGenerator />} />
            <Route path="/gerador-politica-transparencia" element={<TransparencyPolicyGenerator />} />
            <Route path="/gerador-politica-seguranca" element={<SecurityPolicyGenerator />} />
            <Route path="/gerador-politica-antispam" element={<AntispamPolicyGenerator />} />
            <Route path="/gerador-politica-propriedade-intelectual" element={<CopyrightPolicyGenerator />} />
            <Route path="/gerador-politica-conteudo" element={<ContentPolicyGenerator />} />
            <Route path="/gerador-politica-moderacao" element={<CommentModerationGenerator />} />
            <Route path="/gerador-politica-acessibilidade" element={<AccessibilityPolicyGenerator />} />
            <Route path="/gerador-politica-sustentabilidade" element={<SustainabilityPolicyGenerator />} />
            
            {/* Admin routes */}
            <Route path="/admin/login" element={<AdminLoginPage />} />
            <Route path="/admin/posts" element={<AdminPostsPage />} />
            <Route path="/admin/posts/new" element={<AdminPostEditorPage />} />
            <Route path="/admin/posts/edit/:id" element={<AdminPostEditorPage />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
