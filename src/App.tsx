import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookieConsent } from "@/components/CookieConsent";
import { lazy, Suspense } from "react";

// Main pages - immediate load
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

// Generator pages - lazy load
const PrivacyPolicyGenerator = lazy(() => import("./pages/generators/PrivacyPolicyGenerator"));
const TermsOfUseGenerator = lazy(() => import("./pages/generators/TermsOfUseGenerator"));
const CookiePolicyGenerator = lazy(() => import("./pages/generators/CookiePolicyGenerator"));
const RefundPolicyGenerator = lazy(() => import("./pages/generators/RefundPolicyGenerator"));
const TransparencyPolicyGenerator = lazy(() => import("./pages/generators/TransparencyPolicyGenerator"));
const SecurityPolicyGenerator = lazy(() => import("./pages/generators/SecurityPolicyGenerator"));
const AntispamPolicyGenerator = lazy(() => import("./pages/generators/AntispamPolicyGenerator"));
const CopyrightPolicyGenerator = lazy(() => import("./pages/generators/CopyrightPolicyGenerator"));
const ContentPolicyGenerator = lazy(() => import("./pages/generators/ContentPolicyGenerator"));
const CommentModerationGenerator = lazy(() => import("./pages/generators/CommentModerationGenerator"));
const AccessibilityPolicyGenerator = lazy(() => import("./pages/generators/AccessibilityPolicyGenerator"));
const SustainabilityPolicyGenerator = lazy(() => import("./pages/generators/SustainabilityPolicyGenerator"));

const queryClient = new QueryClient();

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CookieConsent />
      <BrowserRouter>
        <Suspense fallback={<LoadingFallback />}>
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
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
