import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { WellnessHeader } from "@/components/wellness/header";
import { WellnessButton } from "@/components/ui/wellness-button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, TrendingUp, TrendingDown, Calendar, Download, Share2 } from "lucide-react";

export default function Reports() {
  const navigate = useNavigate();
  const [timeRange, setTimeRange] = useState('7d');

  const timeRanges = [
    { id: '7d', label: '7 dias' },
    { id: '30d', label: '30 dias' },
    { id: '90d', label: '3 meses' },
  ];

  const weeklyData = [
    { day: 'Seg', sleep: 7.5, water: 2.1, steps: 8234, stress: 3 },
    { day: 'Ter', sleep: 6.8, water: 1.8, steps: 6543, stress: 4 },
    { day: 'Qua', sleep: 8.2, water: 2.4, steps: 9876, stress: 2 },
    { day: 'Qui', sleep: 7.1, water: 2.0, steps: 7654, stress: 3 },
    { day: 'Sex', sleep: 6.5, water: 1.9, steps: 5432, stress: 4 },
    { day: 'Sáb', sleep: 8.8, water: 2.3, steps: 10234, stress: 1 },
    { day: 'Dom', sleep: 9.1, water: 2.5, steps: 4567, stress: 1 },
  ];

  const insights = [
    {
      title: "Sono melhorou 15%",
      description: "Você dormiu mais nos fins de semana",
      trend: "up",
      value: "+1.2h",
      color: "text-green-600"
    },
    {
      title: "Hidratação estável",
      description: "Mantendo boa consistência",
      trend: "neutral",
      value: "2.1L média",
      color: "text-blue-600"
    },
    {
      title: "Passos variaram",
      description: "Maior atividade no meio da semana",
      trend: "up",
      value: "+12%",
      color: "text-purple-600"
    },
    {
      title: "Estresse reduzido",
      description: "Relaxamento no fim de semana",
      trend: "down",
      value: "-25%",
      color: "text-green-600"
    }
  ];

  const getStressColor = (level: number) => {
    if (level <= 2) return "bg-green-500";
    if (level <= 3) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="min-h-screen bg-background">
      <WellnessHeader />
      
      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <WellnessButton 
              variant="ghost" 
              size="icon"
              onClick={() => navigate('/dashboard')}
            >
              <ArrowLeft className="h-5 w-5" />
            </WellnessButton>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Relatórios Detalhados</h1>
              <p className="text-muted-foreground">Análise completa da sua saúde</p>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <WellnessButton variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Exportar
            </WellnessButton>
            <WellnessButton variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Compartilhar
            </WellnessButton>
          </div>
        </div>

        {/* Time Range Selector */}
        <div className="flex items-center space-x-2">
          <Calendar className="h-5 w-5 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Período:</span>
          {timeRanges.map(range => (
            <WellnessButton
              key={range.id}
              variant={timeRange === range.id ? "wellness" : "ghost"}
              size="sm"
              onClick={() => setTimeRange(range.id)}
            >
              {range.label}
            </WellnessButton>
          ))}
        </div>

        {/* Key Insights */}
        <Card className="p-6 bg-wellness-gradient text-primary-foreground">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <TrendingUp className="h-5 w-5 mr-2" />
            Principais insights dos últimos 7 dias
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {insights.map((insight, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{insight.title}</span>
                  {insight.trend === 'up' && <TrendingUp className="h-4 w-4 text-green-300" />}
                  {insight.trend === 'down' && <TrendingDown className="h-4 w-4 text-red-300" />}
                </div>
                <p className="text-2xl font-bold">{insight.value}</p>
                <p className="text-xs text-primary-foreground/80">{insight.description}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Weekly Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Sleep Chart */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Qualidade do Sono</h3>
            <div className="space-y-3">
              {weeklyData.map((day, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="w-8 text-sm text-muted-foreground">{day.day}</span>
                  <div className="flex-1">
                    <Progress value={(day.sleep / 10) * 100} className="h-3" />
                  </div>
                  <span className="w-12 text-sm font-medium">{day.sleep}h</span>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-accent/5 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Média:</strong> 7.7h/noite | <strong>Meta:</strong> 8h
              </p>
            </div>
          </Card>

          {/* Hydration Chart */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Hidratação Diária</h3>
            <div className="space-y-3">
              {weeklyData.map((day, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="w-8 text-sm text-muted-foreground">{day.day}</span>
                  <div className="flex-1">
                    <Progress value={(day.water / 2.5) * 100} className="h-3" />
                  </div>
                  <span className="w-12 text-sm font-medium">{day.water}L</span>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-accent/5 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Média:</strong> 2.1L/dia | <strong>Meta:</strong> 2.5L
              </p>
            </div>
          </Card>

          {/* Activity Chart */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Atividade Física</h3>
            <div className="space-y-3">
              {weeklyData.map((day, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="w-8 text-sm text-muted-foreground">{day.day}</span>
                  <div className="flex-1">
                    <Progress value={(day.steps / 10000) * 100} className="h-3" />
                  </div>
                  <span className="w-16 text-sm font-medium">{day.steps.toLocaleString()}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-accent/5 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Média:</strong> 7,577 passos | <strong>Meta:</strong> 10,000
              </p>
            </div>
          </Card>

          {/* Stress Level Chart */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Nível de Estresse</h3>
            <div className="space-y-3">
              {weeklyData.map((day, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="w-8 text-sm text-muted-foreground">{day.day}</span>
                  <div className="flex-1 flex space-x-1">
                    {[1, 2, 3, 4, 5].map(level => (
                      <div
                        key={level}
                        className={`flex-1 h-3 rounded-sm ${
                          level <= day.stress ? getStressColor(day.stress) : 'bg-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                  <Badge variant="secondary" className="w-16 text-center">
                    {day.stress === 1 ? 'Baixo' : day.stress <= 3 ? 'Médio' : 'Alto'}
                  </Badge>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-accent/5 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Tendência:</strong> Redução no fim de semana
              </p>
            </div>
          </Card>
        </div>

        {/* Recommendations */}
        <Card className="p-6 bg-card-gradient">
          <h3 className="text-lg font-semibold mb-4">Recomendações baseadas nos dados</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <div>
                <p className="font-medium">Melhore a consistência do sono</p>
                <p className="text-sm text-muted-foreground">
                  Tente manter o mesmo horário de dormir também durante a semana
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <div>
                <p className="font-medium">Aumente a atividade nos fins de semana</p>
                <p className="text-sm text-muted-foreground">
                  Seus passos caem significativamente no domingo
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <div>
                <p className="font-medium">Continue com as técnicas de relaxamento</p>
                <p className="text-sm text-muted-foreground">
                  Seu estresse reduziu nos fins de semana - replicar durante a semana
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}