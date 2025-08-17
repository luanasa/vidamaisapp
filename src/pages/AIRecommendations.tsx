import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { WellnessHeader } from "@/components/wellness/header";
import { WellnessButton } from "@/components/ui/wellness-button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Brain, Play, Clock, Star, Zap, Heart } from "lucide-react";

export default function AIRecommendations() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Todas', icon: Brain },
    { id: 'exercise', label: 'Exercícios', icon: Zap },
    { id: 'meditation', label: 'Mindfulness', icon: Heart },
    { id: 'nutrition', label: 'Nutrição', icon: Star },
  ];

  const recommendations = [
    {
      id: 1,
      category: 'meditation',
      title: "Meditação Matinal Energizante",
      subtitle: "5 minutos de mindfulness para começar o dia",
      duration: "5 min",
      difficulty: "Iniciante",
      ai_reason: "Baseado no seu nível de estresse atual",
      image: "🧘‍♀️",
      action: "Começar agora"
    },
    {
      id: 2,
      category: 'exercise',
      title: "Yoga para Iniciantes",
      subtitle: "Sequência suave de alongamento",
      duration: "15 min",
      difficulty: "Fácil",
      ai_reason: "Ideal para seu nível de atividade física",
      image: "🧘",
      action: "Ver vídeo"
    },
    {
      id: 3,
      category: 'meditation',
      title: "Podcast: Hábitos Atômicos",
      subtitle: "Episódio sobre construção de rotinas",
      duration: "25 min",
      difficulty: "Moderado",
      ai_reason: "Recomendado para melhorar consistência",
      image: "🎧",
      action: "Ouvir no Spotify"
    },
    {
      id: 4,
      category: 'nutrition',
      title: "Smoothie Energético Verde",
      subtitle: "Abacate, espinafre e banana",
      duration: "10 min",
      difficulty: "Fácil",
      ai_reason: "Rico em nutrientes que você precisa",
      image: "🥤",
      action: "Ver receita"
    },
    {
      id: 5,
      category: 'exercise',
      title: "Caminhada Ativa",
      subtitle: "Rota de 30 minutos no parque",
      duration: "30 min",
      difficulty: "Moderado",
      ai_reason: "Perfeito para seu objetivo de passos",
      image: "🚶‍♀️",
      action: "Iniciar GPS"
    },
    {
      id: 6,
      category: 'nutrition',
      title: "Lanche Saudável",
      subtitle: "Mix de castanhas e frutas secas",
      duration: "2 min",
      difficulty: "Fácil",
      ai_reason: "Energia sustentada para a tarde",
      image: "🥜",
      action: "Ver ingredientes"
    }
  ];

  const filteredRecommendations = activeCategory === 'all' 
    ? recommendations 
    : recommendations.filter(rec => rec.category === activeCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Fácil': return 'bg-green-100 text-green-800';
      case 'Iniciante': return 'bg-blue-100 text-blue-800';
      case 'Moderado': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

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
            <h1 className="text-2xl font-bold text-foreground">Recomendações de IA</h1>
            <p className="text-muted-foreground">Sugestões personalizadas para você</p>
          </div>
        </div>

        {/* AI Insight */}
        <Card className="p-4 bg-wellness-gradient text-primary-foreground">
          <div className="flex items-start space-x-3">
            <div className="p-2 bg-primary-foreground/20 rounded-lg">
              <Brain className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">💡 Insight da IA</h3>
              <p className="text-sm text-primary-foreground/90">
                Com base nos seus dados, detectamos que você precisa de mais atividades relaxantes 
                e um boost de energia natural. Priorizamos exercícios leves e mindfulness.
              </p>
            </div>
          </div>
        </Card>

        {/* Category Filter */}
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {categories.map(cat => (
            <WellnessButton
              key={cat.id}
              variant={activeCategory === cat.id ? "wellness" : "ghost"}
              size="sm"
              onClick={() => setActiveCategory(cat.id)}
              className="whitespace-nowrap"
            >
              <cat.icon className="h-4 w-4 mr-2" />
              {cat.label}
            </WellnessButton>
          ))}
        </div>

        {/* Recommendations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredRecommendations.map((rec) => (
            <Card key={rec.id} className="p-4 bg-card-gradient shadow-soft hover:shadow-wellness transition-all duration-300 hover:scale-105">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">{rec.image}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{rec.title}</h3>
                      <p className="text-sm text-muted-foreground">{rec.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Metadata */}
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary" className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{rec.duration}</span>
                  </Badge>
                  <Badge className={getDifficultyColor(rec.difficulty)}>
                    {rec.difficulty}
                  </Badge>
                </div>

                {/* AI Reason */}
                <div className="p-3 bg-accent/5 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Brain className="h-4 w-4 text-accent" />
                    <span className="text-sm text-accent font-medium">Por que isso?</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{rec.ai_reason}</p>
                </div>

                {/* Action */}
                <WellnessButton className="w-full">
                  <Play className="h-4 w-4 mr-2" />
                  {rec.action}
                </WellnessButton>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center pt-4">
          <WellnessButton variant="outline">
            Carregar mais sugestões
          </WellnessButton>
        </div>
      </div>
    </div>
  );
}