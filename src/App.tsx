import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookieConsent } from "@/components/CookieConsent";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AllPoliciesPage from "./pages/AllPoliciesPage";
import BlogPage from "./pages/BlogPage";
import AboutPage from "./pages/AboutPage";
import PrivacyPolicyInfoPage from "./pages/PrivacyPolicyInfoPage";
import TermsOfUseInfoPage from "./pages/TermsOfUseInfoPage";
import CookiePolicyInfoPage from "./pages/CookiePolicyInfoPage";
import TransparencyPolicyInfoPage from "./pages/TransparencyPolicyInfoPage";
import SecurityPolicyInfoPage from "./pages/SecurityPolicyInfoPage";
import AntispamPolicyInfoPage from "./pages/AntispamPolicyInfoPage";
import CopyrightPolicyInfoPage from "./pages/CopyrightPolicyInfoPage";
import ContentPolicyInfoPage from "./pages/ContentPolicyInfoPage";
import CommentModerationInfoPage from "./pages/CommentModerationInfoPage";
import AccessibilityPolicyInfoPage from "./pages/AccessibilityPolicyInfoPage";
import SustainabilityPolicyInfoPage from "./pages/SustainabilityPolicyInfoPage";
import RefundPolicyInfoPage from "./pages/RefundPolicyInfoPage";
import ContactPage from "./pages/ContactPage";
import HelpPage from "./pages/HelpPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminPostsPage from "./pages/AdminPostsPage";
import AdminPostEditorPage from "./pages/AdminPostEditorPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CookieConsent />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/politicas" element={<AllPoliciesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/ajuda" element={<HelpPage />} />
          <Route path="/contato" element={<ContactPage />} />
          
          {/* Geradores de Políticas - URLs SEO Friendly */}
          <Route path="/gerador-politica-privacidade" element={<PrivacyPolicyInfoPage />} />
          <Route path="/gerador-termos-uso" element={<TermsOfUseInfoPage />} />
          <Route path="/gerador-politica-cookies" element={<CookiePolicyInfoPage />} />
          <Route path="/gerador-politica-reembolso" element={<RefundPolicyInfoPage />} />
          <Route path="/gerador-politica-transparencia" element={<TransparencyPolicyInfoPage />} />
          <Route path="/gerador-politica-seguranca" element={<SecurityPolicyInfoPage />} />
          <Route path="/gerador-politica-antispam" element={<AntispamPolicyInfoPage />} />
          <Route path="/gerador-politica-propriedade-intelectual" element={<CopyrightPolicyInfoPage />} />
          <Route path="/gerador-politica-conteudo" element={<ContentPolicyInfoPage />} />
          <Route path="/gerador-politica-moderacao" element={<CommentModerationInfoPage />} />
          <Route path="/gerador-politica-acessibilidade" element={<AccessibilityPolicyInfoPage />} />
          <Route path="/gerador-politica-sustentabilidade" element={<SustainabilityPolicyInfoPage />} />
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

export default App;
