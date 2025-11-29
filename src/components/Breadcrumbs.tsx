import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
        <li className="flex items-center gap-2">
          <Link 
            to="/" 
            className="hover:text-primary transition-colors flex items-center gap-1"
            aria-label="Ir para página inicial"
          >
            <Home className="h-4 w-4" />
            <span className="hidden sm:inline">Início</span>
          </Link>
          {items.length > 0 && <ChevronRight className="h-4 w-4" />}
        </li>
        
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={item.url} className="flex items-center gap-2">
              {isLast ? (
                <span className="text-foreground font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link 
                    to={item.url} 
                    className="hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                  <ChevronRight className="h-4 w-4" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
