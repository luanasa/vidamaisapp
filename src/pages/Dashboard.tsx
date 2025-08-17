import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { WellnessHeader } from "@/components/wellness/header";
import { MetricCard } from "@/components/ui/metric-card";
import { WellnessButton } from "@/components/ui/wellness-button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Moon, 
  Droplets, 
  Activity, 
  Brain, 
  Target,
  BookOpen,
  Headphones,
  Utensils,
  Play,
  TrendingUp,
  Watch,
  MessageCircle,
  Bell,
  Settings,
  BarChart3,
  Zap
} from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();
  const [waterGoal, setWaterGoal] = useState(1.8);
  const [showNotification, setShowNotification] = useState(false);

  const metrics = [
    {
      title: "Sono",
      value: "6h 30m",
      subtitle: "Meta: 8h",
      icon: Moon,
      trend: "down" as const,
      onClick: () => navigate('/sleep-monitor')
    },
    {
      title: "Hidratação",
      value: "1.8L",
      subtitle: `Meta: 2.5L (${Math.round((waterGoal/2.5)*100)}%)`,
      icon: Droplets,
      trend: "neutral" as const,
      onClick: () => navigate('/hydration')
    },
    {
      title: "Atividade",
      value: "8,234",
      subtitle: "passos hoje",
      icon: Activity,
      trend: "up" as const,
      onClick: () => navigate('/activity')
    },
    {
      title: "Estresse",
      value: "Médio",
      subtitle: "Tente relaxar",
      icon: Brain,
      trend: "neutral" as const,
      onClick: () => navigate('/stress-monitor')
    }
  ];

  const quickActions = [
    {
      title: "Recomendações de IA",
      subtitle: "Sugestões personalizadas",
      icon: Brain,
      action: "Ver sugestões",
      onClick: () => navigate('/ai-recommendations')
    },
    {
      title: "Relatórios Detalhados",
      subtitle: "Análise completa dos últimos 7 dias",
      icon: BarChart3,
      action: "Ver relatórios",
      onClick: () => navigate('/reports')
    },
    {
      title: "Integração Smartwatch",
      subtitle: "Conectar dispositivos",
      icon: Watch,
      action: "Conectar",
      onClick: () => navigate('/smartwatch')
    },
    {
      title: "Configurações",
      subtitle: "Personalizar lembretes",
      icon: Settings,
      action: "Configurar",
      onClick: () => navigate('/settings')
    }
  ];

  const handleAddWater = () => {
    setWaterGoal(prev => Math.min(prev + 0.25, 2.5));
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const triggerAlert = () => {
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <WellnessHeader />
      
      {/* Notification */}
      {showNotification && (
        <div className="fixed top-20 right-4 z-50 animate-slide-in-right">
          <Card className="p-4 bg-wellness-gradient text-primary-foreground shadow-wellness">
            <div className="flex items-center space-x-2">
              <Bell className="h-5 w-5" />
              <span className="font-medium">Parabéns! +250ml adicionados ✨</span>
            </div>
          </Card>
        </div>
      )}

      <div className="container mx-auto px-4 py-6 space-y-8">
        {/* Welcome Section */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-foreground">Olá, Maria!</h2>
          <p className="text-muted-foreground">Como está se sentindo hoje?</p>
          <Badge variant="secondary" className="bg-accent/10 text-accent">
            Streak de 7 dias! 🔥
          </Badge>
        </div>

        {/* Quick Stats */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-foreground">Resumo de hoje</h3>
            <WellnessButton 
              variant="ghost" 
              size="sm"
              onClick={() => navigate('/reports')}
            >
              <TrendingUp className="h-4 w-4 mr-2" />
              Ver tendências
            </WellnessButton>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((metric, index) => (
              <div key={index} onClick={metric.onClick} className="cursor-pointer">
                <MetricCard {...metric} className="hover:scale-105 transition-transform" />
              </div>
            ))}
          </div>
        </section>

        {/* Daily Goal */}
        <Card className="p-6 bg-wellness-gradient text-primary-foreground">
          <div className="flex items-center justify-between">
            <div className="space-y-3 flex-1">
              <div className="flex items-center space-x-2">
                <Target className="h-5 w-5" />
                <span className="font-medium">Meta do Dia</span>
              </div>
              <h4 className="text-xl font-bold">Beba mais {(2.5 - waterGoal).toFixed(1)}L de água</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Progresso: {waterGoal.toFixed(1)}L / 2.5L</span>
                  <span>{Math.round((waterGoal/2.5)*100)}%</span>
                </div>
                <Progress value={(waterGoal/2.5)*100} className="bg-primary-foreground/20" />
              </div>
            </div>
            <div className="flex flex-col space-y-2 ml-4">
              <WellnessButton 
                variant="outline" 
                className="bg-primary-foreground text-primary border-primary-foreground hover:bg-primary-foreground/90"
                onClick={handleAddWater}
              >
                <Droplets className="h-4 w-4 mr-2" />
                +250ml
              </WellnessButton>
              <WellnessButton 
                variant="ghost" 
                size="sm"
                onClick={triggerAlert}
                className="text-primary-foreground/80 hover:text-primary-foreground"
              >
                <Bell className="h-4 w-4 mr-2" />
                Lembrete
              </WellnessButton>
            </div>
          </div>
        </Card>

        {/* Quick Actions */}
        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">Acesso rápido</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickActions.map((action, index) => (
              <Card 
                key={index} 
                className="p-4 bg-card-gradient shadow-soft hover:shadow-wellness transition-all duration-300 cursor-pointer hover:scale-105"
                onClick={action.onClick}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <action.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-medium text-foreground">{action.title}</h4>
                      <p className="text-sm text-muted-foreground">{action.subtitle}</p>
                    </div>
                  </div>
                  <WellnessButton variant="ghost" size="sm">
                    {action.action}
                  </WellnessButton>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* Floating AI Chat Button */}
      <button
        onClick={() => navigate('/ai-chat')}
        className="fixed bottom-6 right-6 p-4 bg-wellness-gradient text-primary-foreground rounded-full shadow-wellness hover:shadow-lg hover:scale-110 transition-all duration-300 z-50"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
}