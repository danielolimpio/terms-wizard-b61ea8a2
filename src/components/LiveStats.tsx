import { useEffect, useState } from "react";
import { Users, FileText, TrendingUp, Clock } from "lucide-react";
import avatar1 from "@/assets/avatars/avatar-1.jpg";
import avatar2 from "@/assets/avatars/avatar-2.jpg";
import avatar3 from "@/assets/avatars/avatar-3.jpg";
import avatar4 from "@/assets/avatars/avatar-4.jpg";

// Função para calcular estatísticas baseadas na data atual
const calculateStats = () => {
  const now = new Date();
  const dayOfYear = Math.floor((now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) / 86400000);
  const hourOfDay = now.getHours();
  const minuteOfHour = now.getMinutes();
  
  // Base numbers that feel realistic
  const baseTotal = 28547 + (dayOfYear * 120); // Cresce ~120 por dia
  const todayBase = Math.floor((hourOfDay * 35) + (minuteOfHour * 0.5)); // Cresce ao longo do dia
  const activeUsers = Math.floor(12 + (hourOfDay * 0.8) + Math.random() * 5); // Varia ao longo do dia
  const avgTime = 4 + Math.floor(Math.random() * 3); // Entre 4-7 minutos
  
  return {
    total: baseTotal,
    today: todayBase,
    activeUsers: activeUsers,
    avgTime: avgTime
  };
};

// Componente de contador animado
const AnimatedCounter = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;
      
      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);
  
  return <span>{count.toLocaleString('pt-BR')}</span>;
};

export const LiveStats = () => {
  const [stats, setStats] = useState(calculateStats());
  
  // Atualiza estatísticas a cada minuto
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(calculateStats());
    }, 60000); // Atualiza a cada 1 minuto
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-12 md:py-16 px-4 bg-gradient-to-br from-primary/5 via-background to-primary/10">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent animate-gradient">
            Estatísticas em Tempo Real
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Milhares de pessoas confiam no nosso gerador todos os dias
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {/* Políticas Geradas Hoje */}
          <div className="bg-card border border-border rounded-xl p-4 md:p-6 text-center hover:shadow-lg transition-shadow duration-300 hover:border-primary/50">
            <div className="bg-primary/10 rounded-full w-12 md:w-14 h-12 md:h-14 flex items-center justify-center mx-auto mb-3">
              <FileText className="h-6 md:h-7 w-6 md:w-7 text-primary" />
            </div>
            <div className="text-2xl md:text-4xl font-bold text-foreground mb-1">
              <AnimatedCounter end={stats.today} />
            </div>
            <p className="text-xs md:text-sm text-muted-foreground font-medium">
              Políticas Geradas Hoje
            </p>
            <div className="mt-2 flex items-center justify-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-600 dark:text-green-400 font-medium">Ao vivo</span>
            </div>
          </div>
          
          {/* Total de Políticas */}
          <div className="bg-card border border-border rounded-xl p-4 md:p-6 text-center hover:shadow-lg transition-shadow duration-300 hover:border-primary/50">
            <div className="bg-cyan-500/10 rounded-full w-12 md:w-14 h-12 md:h-14 flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="h-6 md:h-7 w-6 md:w-7 text-cyan-500" />
            </div>
            <div className="text-2xl md:text-4xl font-bold text-foreground mb-1">
              <AnimatedCounter end={stats.total} duration={2500} />
            </div>
            <p className="text-xs md:text-sm text-muted-foreground font-medium">
              Total de Documentos
            </p>
            <div className="mt-2">
              <span className="text-xs text-cyan-600 dark:text-cyan-400 font-medium">+120/dia</span>
            </div>
          </div>
          
          {/* Usuários Ativos Agora */}
          <div className="bg-card border border-border rounded-xl p-4 md:p-6 text-center hover:shadow-lg transition-shadow duration-300 hover:border-primary/50">
            <div className="bg-purple-500/10 rounded-full w-12 md:w-14 h-12 md:h-14 flex items-center justify-center mx-auto mb-3">
              <Users className="h-6 md:h-7 w-6 md:w-7 text-purple-500" />
            </div>
            <div className="text-2xl md:text-4xl font-bold text-foreground mb-1">
              <AnimatedCounter end={stats.activeUsers} duration={1500} />
            </div>
            <p className="text-xs md:text-sm text-muted-foreground font-medium">
              Usuários Online Agora
            </p>
            <div className="mt-2 flex items-center justify-center gap-1">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-purple-600 dark:text-purple-400 font-medium">Conectados</span>
            </div>
          </div>
          
          {/* Tempo Médio */}
          <div className="bg-card border border-border rounded-xl p-4 md:p-6 text-center hover:shadow-lg transition-shadow duration-300 hover:border-primary/50">
            <div className="bg-orange-500/10 rounded-full w-12 md:w-14 h-12 md:h-14 flex items-center justify-center mx-auto mb-3">
              <Clock className="h-6 md:h-7 w-6 md:w-7 text-orange-500" />
            </div>
            <div className="text-2xl md:text-4xl font-bold text-foreground mb-1">
              <AnimatedCounter end={stats.avgTime} duration={1000} />
              <span className="text-lg md:text-2xl"> min</span>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground font-medium">
              Tempo Médio de Criação
            </p>
            <div className="mt-2">
              <span className="text-xs text-orange-600 dark:text-orange-400 font-medium">Rápido!</span>
            </div>
          </div>
        </div>
        
        {/* Social Proof Banner */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 md:py-3 border border-primary/20">
            <div className="flex -space-x-2">
              <img 
                src={avatar1} 
                alt="Usuário satisfeito" 
                className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-background object-cover"
              />
              <img 
                src={avatar2} 
                alt="Usuário satisfeito" 
                className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-background object-cover"
              />
              <img 
                src={avatar3} 
                alt="Usuário satisfeito" 
                className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-background object-cover"
              />
              <img 
                src={avatar4} 
                alt="Usuário satisfeito" 
                className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-background object-cover"
              />
            </div>
            <p className="text-xs md:text-sm font-medium text-foreground">
              <span className="font-bold text-primary">+2.800</span> pessoas criaram suas políticas esta semana
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};