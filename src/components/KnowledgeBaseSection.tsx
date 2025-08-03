import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Users, 
  Settings, 
  ShoppingCart, 
  DollarSign,
  Package,
  FileText,
  Shield,
  Globe,
  Palette
} from "lucide-react";
import { Link } from "react-router-dom";

const KnowledgeBaseSection = () => {
  const categories = [
    {
      title: "Getting Started",
      description: "Essential guides for new users",
      icon: BookOpen,
      articles: 8,
      color: "text-primary",
      bgColor: "bg-primary/10",
      topics: ["System Requirements", "Free Trial Setup", "First Login", "Basic Navigation"]
    },
    {
      title: "Account Management", 
      description: "Manage your account and subscription",
      icon: Users,
      articles: 6,
      color: "text-accent",
      bgColor: "bg-accent/10", 
      topics: ["Vendor Setup", "Subscription Plans", "Password Reset", "2FA Security"]
    },
    {
      title: "POS & Sales",
      description: "Point of sale and sales management",
      icon: ShoppingCart,
      articles: 12,
      color: "text-success",
      bgColor: "bg-success/10",
      topics: ["POS Interface", "Sales Invoices", "Receipts", "Discounts & Tax"]
    },
    {
      title: "Inventory Management",
      description: "Product and stock management",
      icon: Package,
      articles: 10,
      color: "text-warning",
      bgColor: "bg-warning/10",
      topics: ["Add Products", "Stock Levels", "Low Stock Alerts", "Barcodes"]
    },
    {
      title: "Accounting & Payments",
      description: "Financial management and reporting",
      icon: DollarSign,
      articles: 15,
      color: "text-primary",
      bgColor: "bg-primary/10",
      topics: ["Chart of Accounts", "Income & Expenses", "Bank Reconciliation", "Payments"]
    },
    {
      title: "Reports & Analytics",
      description: "Business insights and reporting",
      icon: FileText,
      articles: 7,
      color: "text-accent",
      bgColor: "bg-accent/10",
      topics: ["Financial Dashboards", "Sales Reports", "Export Data", "Custom Reports"]
    },
    {
      title: "Customization",
      description: "Themes, languages, and personalization",
      icon: Palette,
      articles: 5,
      color: "text-success",
      bgColor: "bg-success/10",
      topics: ["Custom Themes", "Logo Setup", "Print Templates", "Local Language"]
    },
    {
      title: "System Tools",
      description: "Backup, security, and maintenance",
      icon: Settings,
      articles: 4,
      color: "text-warning",
      bgColor: "bg-warning/10",
      topics: ["Database Backup", "Auto Backup", "Data Restore", "Security Settings"]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">Knowledge Base</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive guides and tutorials to help you master every feature of Accura POS
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.title} 
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-lg bg-card hover:-translate-y-1"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`${category.bgColor} ${category.color} p-3 rounded-xl`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge variant="secondary" className="text-sm px-3 py-1 rounded-full">
                      {category.articles}
                    </Badge>
                  </div>
                <CardTitle className="text-base group-hover:text-primary transition-colors">
                  {category.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-1">
                  {category.topics.slice(0, 3).map((topic) => (
                    <Link
                      key={topic}
                      to="#"
                      className="block text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      • {topic}
                    </Link>
                  ))}
                  {category.topics.length > 3 && (
                    <p className="text-xs text-muted-foreground">
                      +{category.topics.length - 3} more topics
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBaseSection;