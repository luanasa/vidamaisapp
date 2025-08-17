import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const wellnessButtonVariants = cva(
  "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        wellness: "bg-wellness-gradient text-primary-foreground shadow-wellness hover:shadow-lg hover:scale-105",
        accent: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-soft",
        ghost: "text-foreground hover:bg-muted hover:text-foreground",
        outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "wellness",
      size: "default"
    }
  }
);

export interface WellnessButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof wellnessButtonVariants> {}

export function WellnessButton({ className, variant, size, ...props }: WellnessButtonProps) {
  return (
    <Button
      className={cn(wellnessButtonVariants({ variant, size, className }))}
      {...props}
    />
  );
}