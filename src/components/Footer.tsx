import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const links = {
    product: [
      { name: "Features", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "API Docs", href: "#" },
      { name: "System Status", href: "#" },
    ],
    support: [
      { name: "Help Center", href: "/" },
      { name: "Submit Ticket", href: "/tickets" },
      { name: "Community", href: "/forum" },
      { name: "Contact Us", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Privacy Policy", href: "#" },
    ],
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">AP</span>
              </div>
              <span className="font-bold text-foreground">Accura POS</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Comprehensive point of sale and business management solution. 
              Streamline your operations with our powerful, easy-to-use platform.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                support@accurapos.com
              </div>
              <div className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                (555) 123-4567
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-2">
              {links.product.map((link) => (
                <li key={link.name}>
                  <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-primary" asChild>
                    <a href={link.href}>{link.name}</a>
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2">
              {links.support.map((link) => (
                <li key={link.name}>
                  <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-primary" asChild>
                    <a href={link.href}>{link.name}</a>
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.name}>
                  <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-primary" asChild>
                    <a href={link.href}>{link.name}</a>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Accura POS. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {[Github, Twitter, Linkedin].map((Icon, index) => (
                <Button key={index} variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Icon className="w-4 h-4" />
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;