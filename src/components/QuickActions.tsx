import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  HelpCircle, 
  MessageSquare, 
  FileText, 
  Download, 
  Shield, 
  Settings,
  CreditCard,
  Users,
  BarChart3
} from "lucide-react";
import { Link } from "react-router-dom";

const QuickActions = () => {
  const actions = [
    {
      title: "Submit a Ticket",
      description: "Get personalized help from our support team",
      icon: HelpCircle,
      href: "/tickets",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      title: "Join Community",
      description: "Connect with other Accura POS users",
      icon: MessageSquare,
      href: "/forum",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      title: "Browse Articles",
      description: "Explore our comprehensive knowledge base",
      icon: FileText,
      href: "/knowledge-base",
      color: "text-green-600",
      bgColor: "bg-green-50"
    }
  ];

  const quickLinks = [
    { icon: Download, label: "Download App", href: "#" },
    { icon: Shield, label: "Security Guide", href: "#" },
    { icon: Settings, label: "Account Settings", href: "#" },
    { icon: CreditCard, label: "Billing Help", href: "#" },
    { icon: Users, label: "User Management", href: "#" },
    { icon: BarChart3, label: "Reports Guide", href: "#" },
  ];

  return (
    <div className="container py-16">
      {/* Main Actions */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <Card key={action.title} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-card">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className={`${action.bgColor} ${action.color} p-4 rounded-2xl inline-flex mb-6`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                    {action.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {action.description}
                  </p>
                  <Button asChild className="w-full rounded-xl" size="lg">
                    <Link to={action.href}>Get Started</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Links */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Quick Links</h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Button
                key={link.label}
                variant="ghost"
                className="h-auto p-4 flex flex-col items-center gap-2 hover:bg-muted/50"
                asChild
              >
                <Link to={link.href}>
                  <Icon className="w-6 h-6 text-muted-foreground" />
                  <span className="text-xs text-center text-muted-foreground">
                    {link.label}
                  </span>
                </Link>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuickActions;