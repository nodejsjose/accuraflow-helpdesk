import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50/50 to-cyan-50/30 border-b border-border">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3"></div>
      <div className="container py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
            How can we help you today?
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Find answers, get support, and connect with the Accura POS community. 
            Everything you need to succeed with your business management.
          </p>
          
          <div className="relative max-w-2xl mx-auto mb-10">
            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-muted-foreground w-6 h-6" />
            <Input
              placeholder="Search for help articles, guides, and tutorials..."
              className="pl-16 pr-20 py-6 text-lg h-16 bg-card shadow-xl border-0 rounded-2xl"
            />
            <Button className="absolute right-3 top-3 h-10 px-6 rounded-xl" size="sm">
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <span className="text-muted-foreground font-medium">Popular searches:</span>
            {["POS Setup", "Inventory Management", "Reports", "Payment Issues"].map((term) => (
              <Button
                key={term}
                variant="outline"
                size="sm"
                className="bg-card/80 hover:bg-card shadow-sm border-border/50 rounded-full px-4 py-2"
              >
                {term}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;