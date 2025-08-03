import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import QuickActions from "@/components/QuickActions";
import KnowledgeBaseSection from "@/components/KnowledgeBaseSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <QuickActions />
      <KnowledgeBaseSection />
      <Footer />
    </div>
  );
};

export default Index;
