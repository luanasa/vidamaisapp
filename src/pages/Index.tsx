import { WellnessHeader } from "@/components/wellness/header";
import { WellnessDashboard } from "@/components/wellness/dashboard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <WellnessHeader />
      <WellnessDashboard />
    </div>
  );
};

export default Index;
