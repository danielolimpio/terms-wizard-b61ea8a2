// Comment Moderation Generator Page
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PolicyGenerator } from "@/components/PolicyGenerator";
import { GeneratedPolicyResult } from "@/components/GeneratedPolicyResult";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { getPolicyById } from "@/lib/policies";
import { generateCommentModerationPolicy } from "@/lib/policyTemplates";
import { GeneratedPolicy, PolicyFormData } from "@/types/policy";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogSidebar } from "@/components/BlogSidebar";

const CommentModerationGenerator = () => {
  const [generatedPolicy, setGeneratedPolicy] = useState<GeneratedPolicy | null>(null);
  const policyType = getPolicyById('comment-moderation');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  if (!policyType) {
    return <div>Política não encontrada</div>;
  }

  const handleGenerate = (formData: PolicyFormData) => {
    const content = generateCommentModerationPolicy(formData);
    setGeneratedPolicy({
      id: Date.now().toString(),
      type: policyType,
      content,
      formData,
      createdAt: new Date()
    });
  };

  if (generatedPolicy) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <GeneratedPolicyResult
            generatedPolicy={generatedPolicy}
            onGenerateNew={() => setGeneratedPolicy(null)}
          />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Gerador de Política de Moderação Grátis | Gerencie Comentários</title>
        <meta name="description" content="✅ Gere política de moderação de comentários grátis. Mantenha discussões saudáveis no seu site. Sem cadastro, baixe em PDF, DOC ou TXT." />
        <link rel="canonical" href="https://politicadeprivacidade.org/gerador-politica-moderacao" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
      </Helmet>
      <Header />
        <div className="flex gap-8">
          <div className="flex-1">
            <PolicyGenerator policyType={policyType} onGenerate={handleGenerate} />
            
            <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Tem dúvidas sobre Moderação de Comentários?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Saiba como gerenciar comentários e manter um ambiente saudável
              </p>
              <Link to="/moderacao-comentarios">
                <Button variant="outline" className="w-full">
                  O que é Política de Moderação de Comentário?
                </Button>
              </Link>
            </div>
            
            <RelatedArticles policyType="comment-moderation" />
          </div>
          <BlogSidebar />
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default CommentModerationGenerator;