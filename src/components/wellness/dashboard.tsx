import { MetricCard } from "@/components/ui/metric-card";
import { WellnessButton } from "@/components/ui/wellness-button";
import { 
  Moon, 
  Droplets, 
  Activity, 
  Brain, 
  Target,
  BookOpen,
  Headphones,
  Utensils,
  Play
} from "lucide-react";
import { Card } from "@/components/ui/card";

export function WellnessDashboard() {
  const metrics = [
    {
      title: "Sono",
      value: "7h 30m",
      subtitle: "+15 min que ontem",
      icon: Moon,
      trend: "up" as const
    },
    {
      title: "Hidratação",
      value: "1.8L",
      subtitle: "Meta: 2.5L",
      icon: Droplets,
      trend: "neutral" as const
    },
    {
      title: "Atividade",
      value: "8,234",
      subtitle: "passos hoje",
      icon: Activity,
      trend: "up" as const
    },
    {
      title: "Estresse",
      value: "Baixo",
      subtitle: "Excelente!",
      icon: Brain,
      trend: "up" as const
    }
  ];

  const recommendations = [
    {
      title: "Meditação Matinal",
      subtitle: "5 minutos de mindfulness",
      icon: Brain,
      action: "Começar"
    },
    {
      title: "Receita Saudável",
      subtitle: "Smoothie energético",
      icon: Utensils,
      action: "Ver receita"
    },
    {
      title: "Podcast Wellness",
      subtitle: "Como dormir melhor",
      icon: Headphones,
      action: "Ouvir"
    },
    {
      title: "Leitura",
      subtitle: "Hábitos atômicos",
      icon: BookOpen,
      action: "Ler"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-6 space-y-8">
      {/* Boas-vindas */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Olá, Maria!</h2>
        <p className="text-muted-foreground">Como está se sentindo hoje?</p>
      </div>

      {/* Métricas principais */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-foreground">Seu resumo de hoje</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>
      </section>

      {/* Meta do dia */}
      <Card className="p-6 bg-wellness-gradient text-primary-foreground">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Target className="h-5 w-5" />
              <span className="font-medium">Meta do Dia</span>
            </div>
            <h4 className="text-xl font-bold">Beba mais 0.7L de água</h4>
            <p className="text-primary-foreground/80">Você está 72% da sua meta diária!</p>
          </div>
          <WellnessButton variant="outline" className="bg-primary-foreground text-primary border-primary-foreground hover:bg-primary-foreground/90">
            <Play className="h-4 w-4 mr-2" />
            Começar
          </WellnessButton>
        </div>
      </Card>

      {/* Recomendações personalizadas */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-foreground">Recomendações para você</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recommendations.map((rec, index) => (
            <Card key={index} className="p-4 bg-card-gradient shadow-soft hover:shadow-wellness transition-all duration-300">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <rec.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-medium text-foreground">{rec.title}</h4>
                    <p className="text-sm text-muted-foreground">{rec.subtitle}</p>
                  </div>
                </div>
                <WellnessButton variant="ghost" size="sm">
                  {rec.action}
                </WellnessButton>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}