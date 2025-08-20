import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Copy, Download, FileText, File, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { GeneratedPolicy } from "@/types/policy";

interface GeneratedPolicyResultProps {
  generatedPolicy: GeneratedPolicy;
  onGenerateNew: () => void;
}

export const GeneratedPolicyResult = ({ generatedPolicy, onGenerateNew }: GeneratedPolicyResultProps) => {
  const { toast } = useToast();
  const [isDownloading, setIsDownloading] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedPolicy.content);
      toast({
        title: "Copiado!",
        description: "O texto da política foi copiado para a área de transferência.",
      });
    } catch (err) {
      toast({
        title: "Erro ao copiar",
        description: "Não foi possível copiar o texto. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  const downloadAsText = () => {
    const element = document.createElement("a");
    const file = new Blob([generatedPolicy.content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${generatedPolicy.type.slug}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    toast({
      title: "Download iniciado",
      description: "O arquivo de texto foi baixado com sucesso.",
    });
  };

  const downloadAsDoc = async () => {
    setIsDownloading(true);
    try {
      // Simular criação de documento Word (em uma implementação real, usaria uma biblioteca como docx)
      const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>${generatedPolicy.type.name}</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; margin: 40px; }
            h1 { color: #1a73e8; border-bottom: 2px solid #1a73e8; padding-bottom: 10px; }
            p { margin-bottom: 15px; }
          </style>
        </head>
        <body>
          ${generatedPolicy.content.replace(/\n/g, '<br>')}
        </body>
        </html>
      `;
      
      const element = document.createElement("a");
      const file = new Blob([htmlContent], { type: 'application/msword' });
      element.href = URL.createObjectURL(file);
      element.download = `${generatedPolicy.type.slug}.doc`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      
      toast({
        title: "Download iniciado",
        description: "O arquivo Word foi baixado com sucesso.",
      });
    } catch (error) {
      toast({
        title: "Erro no download",
        description: "Não foi possível baixar o arquivo Word. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  const downloadAsPDF = async () => {
    toast({
      title: "Em breve!",
      description: "A funcionalidade de download em PDF estará disponível em breve.",
    });
  };

  const sharePolicy = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: generatedPolicy.type.name,
          text: `Confira esta ${generatedPolicy.type.name} gerada automaticamente`,
          url: window.location.href,
        });
      } catch (err) {
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  return (
    <div className="space-y-6">
      {/* AdSense Banner - Leaderboard */}
      <div className="adsense-banner adsense-leaderboard">
        <span>Google AdSense - Leaderboard (728x90)</span>
      </div>

      <Card className="card-professional">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-3xl">{generatedPolicy.type.icon}</span>
              <div>
                <CardTitle className="text-xl">{generatedPolicy.type.name}</CardTitle>
                <CardDescription>
                  Gerada para: <strong>{generatedPolicy.formData.siteName}</strong>
                </CardDescription>
              </div>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              ✓ Concluído
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Botões de Ação */}
          <div className="flex flex-wrap gap-3">
            <Button variant="google" onClick={copyToClipboard}>
              <Copy className="mr-2 h-4 w-4" />
              Copiar Texto
            </Button>
            
            <Button variant="google-outline" onClick={downloadAsText}>
              <FileText className="mr-2 h-4 w-4" />
              Download TXT
            </Button>
            
            <Button variant="google-outline" onClick={downloadAsDoc} disabled={isDownloading}>
              <File className="mr-2 h-4 w-4" />
              {isDownloading ? "Gerando..." : "Download DOC"}
            </Button>
            
            <Button variant="google-outline" onClick={downloadAsPDF}>
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
            
            <Button variant="outline" onClick={sharePolicy}>
              <Share2 className="mr-2 h-4 w-4" />
              Compartilhar
            </Button>
          </div>

          <Separator />

          {/* Conteúdo da Política */}
          <div className="bg-muted/30 rounded-lg p-6 max-h-96 overflow-y-auto">
            <div className="whitespace-pre-wrap text-sm text-foreground leading-relaxed">
              {generatedPolicy.content}
            </div>
          </div>

          {/* Informações Adicionais */}
          <div className="bg-accent/20 rounded-lg p-4 space-y-2">
            <h4 className="font-medium text-foreground">Informações da Geração:</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-muted-foreground">
              <div><strong>Site:</strong> {generatedPolicy.formData.siteName}</div>
              <div><strong>URL:</strong> {generatedPolicy.formData.siteUrl}</div>
              <div><strong>Idioma:</strong> {generatedPolicy.formData.language}</div>
              <div><strong>AdSense:</strong> {generatedPolicy.formData.hasAdsense ? "Sim" : "Não"}</div>
            </div>
          </div>

          <div className="flex justify-center">
            <Button variant="outline" onClick={onGenerateNew}>
              Gerar Nova Política
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* AdSense Banner - Rectangle */}
      <div className="adsense-banner adsense-rectangle">
        <span>Google AdSense - Rectangle (300x250)</span>
      </div>
    </div>
  );
};