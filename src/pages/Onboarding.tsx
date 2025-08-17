import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { WellnessButton } from "@/components/ui/wellness-button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Heart, Shield, Activity, Brain, Chrome } from "lucide-react";

export default function Onboarding() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSocialLogin = (provider: string) => {
    // Simular login com redes sociais
    setTimeout(() => {
      navigate('/dashboard');
    }, 1000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-wellness-gradient flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Logo e Titulo */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <div className="p-3 bg-white/20 rounded-xl">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white">Vida+</h1>
          </div>
          <p className="text-white/80 text-lg">Sua jornada para uma vida mais saudável</p>
        </div>

        {/* Features Preview */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="p-2 bg-white/10 rounded-lg mx-auto w-fit mb-2">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <span className="text-white/80 text-sm">Monitoramento</span>
          </div>
          <div className="text-center">
            <div className="p-2 bg-white/10 rounded-lg mx-auto w-fit mb-2">
              <Activity className="h-5 w-5 text-white" />
            </div>
            <span className="text-white/80 text-sm">Atividade</span>
          </div>
          <div className="text-center">
            <div className="p-2 bg-white/10 rounded-lg mx-auto w-fit mb-2">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <span className="text-white/80 text-sm">IA Pessoal</span>
          </div>
        </div>

        {/* Form Card */}
        <Card className="p-6 bg-white/95 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-foreground mb-2">
                {isLogin ? 'Bem-vindo de volta!' : 'Criar conta'}
              </h2>
              <p className="text-muted-foreground">
                {isLogin ? 'Entre na sua conta para continuar' : 'Comece sua jornada de bem-estar'}
              </p>
            </div>

            <div className="space-y-4">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="name">Nome completo</Label>
                  <Input id="name" placeholder="Seu nome" />
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" placeholder="seu@email.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>
            </div>

            <WellnessButton type="submit" className="w-full">
              {isLogin ? 'Entrar' : 'Criar conta'}
            </WellnessButton>

            <div className="relative">
              <Separator />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-xs text-muted-foreground">
                ou continue com
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <WellnessButton 
                variant="outline" 
                type="button"
                onClick={() => handleSocialLogin('google')}
                className="bg-white"
              >
                <Chrome className="h-4 w-4" />
                Google
              </WellnessButton>
              <WellnessButton 
                variant="outline" 
                type="button"
                onClick={() => handleSocialLogin('facebook')}
                className="bg-white"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </WellnessButton>
            </div>

            <div className="text-center">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-sm text-primary hover:underline"
              >
                {isLogin ? 'Não tem conta? Cadastre-se' : 'Já tem conta? Faça login'}
              </button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}