import { useNavigate } from "react-router-dom";
import { WellnessHeader } from "@/components/wellness/header";
import { WellnessButton } from "@/components/ui/wellness-button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Moon, Clock, TrendingUp, Target, Lightbulb } from "lucide-react";

export default function SleepMonitor() {
  const navigate = useNavigate();

  const sleepData = {
    lastNight: { duration: 6.5, quality: 72, bedtime: "23:30", wakeup: "06:00" },
    weekAverage: 7.2,
    goal: 8,
    trend: "+15min"
  };

  const sleepPhases = [
    { phase: "Sono Leve", duration: 2.1, percentage: 32, color: "bg-blue-200" },
    { phase: "Sono Profundo", duration: 2.8, percentage: 43, color: "bg-blue-500" },
    { phase: "REM", duration: 1.6, percentage: 25, color: "bg-purple-500" }
  ];

  const tips = [
    "Mantenha horário regular de sono",
    "Evite cafeína após 14h",
    "Quarto escuro e fresco (18-20°C)",
    "Meditação antes de dormir"
  ];

  return (
    <div className="min-h-screen bg-background">
      <WellnessHeader />
      
      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-4">
          <WellnessButton 
            variant="ghost" 
            size="icon"
            onClick={() => navigate('/dashboard')}
          >
            <ArrowLeft className="h-5 w-5" />
          </WellnessButton>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Monitor de Sono</h1>
            <p className="text-muted-foreground">Análise da sua qualidade de sono</p>
          </div>
        </div>

        {/* Current Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-6 bg-wellness-gradient text-primary-foreground">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Moon className="h-5 w-5" />
                <span className="font-medium">Última Noite</span>
              </div>
              <p className="text-3xl font-bold">{sleepData.lastNight.duration}h</p>
              <p className="text-primary-foreground/80">
                Qualidade: {sleepData.lastNight.quality}%
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-accent" />
                <span className="font-medium">Média Semanal</span>
              </div>
              <p className="text-3xl font-bold text-foreground">{sleepData.weekAverage}h</p>
              <p className="text-muted-foreground">
                Tendência: {sleepData.trend}
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-primary" />
                <span className="font-medium">Progresso da Meta</span>
              </div>
              <p className="text-3xl font-bold text-foreground">
                {Math.round((sleepData.weekAverage / sleepData.goal) * 100)}%
              </p>
              <Progress value={(sleepData.weekAverage / sleepData.goal) * 100} />
            </div>
          </Card>
        </div>

        {/* Sleep Phases */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Fases do Sono (Última Noite)</h3>
          <div className="space-y-4">
            {sleepPhases.map((phase, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{phase.phase}</span>
                  <div className="text-right">
                    <span className="text-sm text-muted-foreground">{phase.duration}h</span>
                    <Badge variant="secondary" className="ml-2">{phase.percentage}%</Badge>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full ${phase.color}`}
                    style={{ width: `${phase.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Sleep Schedule */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Horários de Sono</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-accent/5 rounded-lg">
              <Clock className="h-8 w-8 mx-auto mb-2 text-accent" />
              <p className="font-semibold">Hora de Dormir</p>
              <p className="text-2xl font-bold text-foreground">{sleepData.lastNight.bedtime}</p>
            </div>
            <div className="text-center p-4 bg-accent/5 rounded-lg">
              <Clock className="h-8 w-8 mx-auto mb-2 text-accent" />
              <p className="font-semibold">Hora de Acordar</p>
              <p className="text-2xl font-bold text-foreground">{sleepData.lastNight.wakeup}</p>
            </div>
          </div>
        </Card>

        {/* Sleep Tips */}
        <Card className="p-6 bg-card-gradient">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Lightbulb className="h-5 w-5 mr-2 text-accent" />
            Dicas para Melhorar o Sono
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {tips.map((tip, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-sm">{tip}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t">
            <WellnessButton onClick={() => navigate('/ai-recommendations')}>
              Ver Recomendações Personalizadas
            </WellnessButton>
          </div>
        </Card>
      </div>
    </div>
  );
}