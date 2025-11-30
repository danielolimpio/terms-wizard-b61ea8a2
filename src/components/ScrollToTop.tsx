import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full shadow-2xl hover:shadow-primary/50 bg-gradient-to-br from-primary to-primary/80 hover:from-primary hover:to-primary/90 transition-all duration-300 hover:scale-110 animate-fade-in p-0"
          size="icon"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="h-5 w-5 text-white" />
        </Button>
      )}
    </>
  );
};
