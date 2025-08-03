import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 border-b border-border">
      <div className="container py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            How can we help you today?
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Find answers, get support, and connect with the Accura POS community. 
            Everything you need to succeed with your business management.
          </p>
          
          <div className="relative max-w-xl mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search for help articles, guides, and tutorials..."
              className="pl-12 pr-4 py-3 text-lg h-12 bg-card shadow-lg border-0"
            />
            <Button className="absolute right-2 top-2 h-8" size="sm">
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="text-muted-foreground">Popular searches:</span>
            {["POS Setup", "Inventory Management", "Reports", "Payment Issues"].map((term) => (
              <Button
                key={term}
                variant="outline"
                size="sm"
                className="bg-card/50 hover:bg-card"
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