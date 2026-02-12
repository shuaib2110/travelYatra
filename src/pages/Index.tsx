import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BudgetTrips from "@/components/BudgetTrips";
import HiddenGems from "@/components/HiddenGems";
import AiPlannerSection from "@/components/AiPlannerSection";
import FloatingSupport from "@/components/FloatingSupport";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <BudgetTrips />
      <HiddenGems />
      <AiPlannerSection />
      <Footer />
      <FloatingSupport />
    </div>
  );
};

export default Index;
