import { Facebook, Twitter, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SocialShareProps {
  title: string;
  url?: string;
}

export const SocialShare = ({ title, url }: SocialShareProps) => {
  const currentUrl = url || window.location.href;
  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
  };

  const handleShare = (platform: keyof typeof shareLinks) => {
    window.open(shareLinks[platform], '_blank', 'width=600,height=400');
  };

  return (
    <div className="my-12 py-8 border-y border-border">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Compartilhe este artigo
        </h3>
        <p className="text-muted-foreground text-sm">
          Ajude outras pessoas a entenderem sobre privacidade e LGPD
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-3">
        <Button
          variant="outline"
          size="lg"
          onClick={() => handleShare('facebook')}
          className="gap-2 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-colors"
        >
          <Facebook className="w-5 h-5" />
          <span className="hidden sm:inline">Facebook</span>
        </Button>

        <Button
          variant="outline"
          size="lg"
          onClick={() => handleShare('twitter')}
          className="gap-2 hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2] transition-colors"
        >
          <Twitter className="w-5 h-5" />
          <span className="hidden sm:inline">Twitter</span>
        </Button>

        <Button
          variant="outline"
          size="lg"
          onClick={() => handleShare('linkedin')}
          className="gap-2 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-colors"
        >
          <Linkedin className="w-5 h-5" />
          <span className="hidden sm:inline">LinkedIn</span>
        </Button>

        <Button
          variant="outline"
          size="lg"
          onClick={() => handleShare('whatsapp')}
          className="gap-2 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="hidden sm:inline">WhatsApp</span>
        </Button>
      </div>
    </div>
  );
};
