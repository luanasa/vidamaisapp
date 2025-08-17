import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: LucideIcon;
  trend?: "up" | "down" | "neutral";
  className?: string;
}

export function MetricCard({ title, value, subtitle, icon: Icon, trend = "neutral", className }: MetricCardProps) {
  const trendColors = {
    up: "text-primary",
    down: "text-destructive", 
    neutral: "text-muted-foreground"
  };

  return (
    <Card className={cn(
      "p-6 bg-card-gradient shadow-soft hover:shadow-wellness transition-all duration-300 border-0",
      className
    )}>
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold text-foreground">{value}</p>
          {subtitle && (
            <p className={cn("text-sm font-medium", trendColors[trend])}>
              {subtitle}
            </p>
          )}
        </div>
        <div className="p-3 bg-wellness-gradient rounded-xl">
          <Icon className="h-5 w-5 text-primary-foreground" />
        </div>
      </div>
    </Card>
  );
}