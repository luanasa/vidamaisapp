import { Heart, Bell, User } from "lucide-react";
import { WellnessButton } from "@/components/ui/wellness-button";

export function WellnessHeader() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-wellness-gradient rounded-xl">
            <Heart className="h-6 w-6 text-primary-foreground fill-current" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Vida+</h1>
            <p className="text-xs text-muted-foreground">Saúde Preventiva</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <WellnessButton variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </WellnessButton>
          <WellnessButton variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </WellnessButton>
        </div>
      </div>
    </header>
  );
}