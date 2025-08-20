import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from './pages/Index.tsx';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.tsx';
import TermsOfUsePage from './pages/TermsOfUsePage.tsx';
import AllPoliciesPage from './pages/AllPoliciesPage.tsx';
import AboutPage from './pages/AboutPage.tsx';
import HelpPage from './pages/HelpPage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import BlogPage from './pages/BlogPage.tsx';
import OurPrivacyPage from './pages/OurPrivacyPage.tsx';
import OurTermsPage from './pages/OurTermsPage.tsx';
import CookieUsagePage from './pages/CookieUsagePage.tsx';
import CookiePolicyInfoPage from './pages/CookiePolicyInfoPage.tsx';
import RefundPolicyInfoPage from './pages/RefundPolicyInfoPage.tsx';
import PrivacyPolicyInfoPage from './pages/PrivacyPolicyInfoPage.tsx';
import TermsOfUseInfoPage from './pages/TermsOfUseInfoPage.tsx';
import NotFound from './pages/NotFound.tsx';
import './index.css';

const queryClient = new QueryClient();

const AppRouter = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/politicas" element={<AllPoliciesPage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/ajuda" element={<HelpPage />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/nossa-privacidade" element={<OurPrivacyPage />} />
          <Route path="/nossos-termos" element={<OurTermsPage />} />
          <Route path="/uso-cookies" element={<CookieUsagePage />} />
          <Route path="/o-que-e-politica-cookies" element={<CookiePolicyInfoPage />} />
          <Route path="/o-que-e-politica-reembolso" element={<RefundPolicyInfoPage />} />
          <Route path="/politica-privacidade" element={<PrivacyPolicyPage />} />
          <Route path="/termos-uso" element={<TermsOfUsePage />} />
          <Route path="/politica-de-privacidade" element={<PrivacyPolicyInfoPage />} />
          <Route path="/termos-de-uso" element={<TermsOfUseInfoPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<AppRouter />);
