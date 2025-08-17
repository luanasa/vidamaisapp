import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { WellnessHeader } from "@/components/wellness/header";
import { WellnessButton } from "@/components/ui/wellness-button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Send, Brain, Sparkles, MessageCircle } from "lucide-react";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export default function AIChat() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Olá! Sou a IA do Vida+ 💚 Como posso ajudar você a ter uma vida mais saudável hoje?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");

  const quickQuestions = [
    "Como melhorar meu sono?",
    "Receitas saudáveis para o jantar",
    "Exercícios para reduzir estresse",
    "Dicas de hidratação"
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simular resposta da IA
    setTimeout(() => {
      const aiResponse = getAIResponse(input);
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        text: aiResponse,
        isUser: false,
        timestamp: new Date()
      }]);
    }, 1000);

    setInput("");
  };

  const getAIResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase();
    
    if (lowerInput.includes('sono')) {
      return "Para melhorar seu sono, recomendo:\n\n🌙 Manter horário regular (deitar às 22h)\n📱 Evitar telas 1h antes de dormir\n🧘 Fazer meditação por 5 minutos\n🛏️ Quarto escuro e fresco (18-20°C)\n\nVocê tem dormido em média 6h30. Que tal tentarmos chegar a 8h?";
    }
    
    if (lowerInput.includes('receita') || lowerInput.includes('jantar')) {
      return "Aqui está uma receita saudável perfeita para hoje:\n\n🥗 **Salmão grelhado com quinoa**\n• 150g salmão\n• 1 xícara quinoa cozida\n• Brócolis no vapor\n• Azeite e limão\n\n✨ Rica em ômega-3 e proteínas. Quer que eu envie o passo a passo completo?";
    }
    
    if (lowerInput.includes('estresse') || lowerInput.includes('ansiedade')) {
      return "Detectei que seu estresse está médio hoje. Vamos reduzir juntos:\n\n🧘 Respiração 4-7-8 (inspire 4s, segure 7s, expire 8s)\n🚶 Caminhada de 10 min ao ar livre\n🎵 Playlist relaxante que preparei para você\n📱 Exercício de gratidão\n\nQual você gostaria de tentar primeiro?";
    }
    
    if (lowerInput.includes('água') || lowerInput.includes('hidratação')) {
      return "Sobre hidratação, você está em 1.8L hoje (72% da meta)!\n\n💧 **Dicas para beber mais água:**\n• Adicione limão ou hortelã\n• Use apps de lembrete (ativo para você)\n• Garrafa de 500ml = 5 recargas/dia\n• Chás e água saborizada contam\n\nVou te lembrar a cada 2 horas, ok?";
    }
    
    return "Interessante! Com base nos seus dados, sugiro:\n\n✨ Foque no seu sono (meta: +1h30)\n💧 Continue hidratando bem\n🏃 Mais atividade nos fins de semana\n🧘 Técnicas de relaxamento\n\nQuer detalhes sobre alguma dessas áreas? Estou aqui para personalizar suas metas!";
  };

  const handleQuickQuestion = (question: string) => {
    setInput(question);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <WellnessHeader />
      
      {/* Header */}
      <div className="bg-card border-b px-4 py-3">
        <div className="container mx-auto flex items-center space-x-4">
          <WellnessButton 
            variant="ghost" 
            size="icon"
            onClick={() => navigate('/dashboard')}
          >
            <ArrowLeft className="h-5 w-5" />
          </WellnessButton>
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-wellness-gradient rounded-full">
              <Brain className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-semibold text-foreground">IA do Vida+</h1>
              <p className="text-sm text-muted-foreground flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Online
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="container mx-auto max-w-2xl space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[80%] ${message.isUser ? 'order-2' : 'order-1'}`}>
                {!message.isUser && (
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="p-1 bg-wellness-gradient rounded-full">
                      <Sparkles className="h-3 w-3 text-primary-foreground" />
                    </div>
                    <span className="text-xs text-muted-foreground">IA do Vida+</span>
                  </div>
                )}
                <Card className={`p-3 ${
                  message.isUser 
                    ? 'bg-wellness-gradient text-primary-foreground ml-auto' 
                    : 'bg-card'
                }`}>
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <span className={`text-xs mt-2 block ${
                    message.isUser ? 'text-primary-foreground/70' : 'text-muted-foreground'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Questions */}
      {messages.length === 1 && (
        <div className="p-4 border-t bg-card">
          <div className="container mx-auto max-w-2xl">
            <p className="text-sm text-muted-foreground mb-3">Perguntas rápidas:</p>
            <div className="grid grid-cols-2 gap-2">
              {quickQuestions.map((question, index) => (
                <WellnessButton
                  key={index}
                  variant="outline"
                  size="sm"
                  className="text-left justify-start h-auto p-3"
                  onClick={() => handleQuickQuestion(question)}
                >
                  <MessageCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="text-sm">{question}</span>
                </WellnessButton>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t bg-card">
        <div className="container mx-auto max-w-2xl">
          <div className="flex space-x-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua pergunta sobre saúde e bem-estar..."
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1"
            />
            <WellnessButton 
              onClick={handleSend}
              disabled={!input.trim()}
              size="icon"
            >
              <Send className="h-4 w-4" />
            </WellnessButton>
          </div>
        </div>
      </div>
    </div>
  );
}