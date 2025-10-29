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
import ContactPage from "./pages/ContactPage";
import HelpPage from "./pages/HelpPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminPostsPage from "./pages/AdminPostsPage";
import AdminPostEditorPage from "./pages/AdminPostEditorPage";
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
          
          {/* Geradores - URLs SEO Friendly */}
          <Route path="/gerador-politica-privacidade" element={<PrivacyPolicyGenerator />} />
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
