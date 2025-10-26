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
          <Route path="/privacy-policy-info" element={<PrivacyPolicyInfoPage />} />
          <Route path="/transparency-policy-info" element={<TransparencyPolicyInfoPage />} />
          <Route path="/security-policy-info" element={<SecurityPolicyInfoPage />} />
          <Route path="/antispam-policy-info" element={<AntispamPolicyInfoPage />} />
          <Route path="/copyright-policy-info" element={<CopyrightPolicyInfoPage />} />
          <Route path="/content-policy-info" element={<ContentPolicyInfoPage />} />
          <Route path="/comment-moderation-info" element={<CommentModerationInfoPage />} />
          <Route path="/accessibility-policy-info" element={<AccessibilityPolicyInfoPage />} />
          <Route path="/sustainability-policy-info" element={<SustainabilityPolicyInfoPage />} />
          <Route path="/refund-policy-info" element={<RefundPolicyInfoPage />} />
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
