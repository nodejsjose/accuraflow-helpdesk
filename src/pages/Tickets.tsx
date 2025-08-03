import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Plus, 
  Search, 
  Filter, 
  Bug, 
  HelpCircle, 
  CreditCard, 
  User, 
  Lightbulb,
  Clock,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Tickets = () => {
  const [activeTab, setActiveTab] = useState("create");

  const ticketCategories = [
    { value: "technical", label: "Technical Support", icon: HelpCircle, color: "text-primary" },
    { value: "billing", label: "Billing & Subscription", icon: CreditCard, color: "text-warning" },
    { value: "account", label: "Account Help", icon: User, color: "text-accent" },
    { value: "feature", label: "Feature Request", icon: Lightbulb, color: "text-success" },
    { value: "bug", label: "Report a Bug", icon: Bug, color: "text-destructive" },
  ];

  const priorities = [
    { value: "low", label: "Low - General inquiry" },
    { value: "medium", label: "Medium - Business impacted" },
    { value: "high", label: "High - Urgent issue" },
    { value: "critical", label: "Critical - System down" },
  ];

  const sampleTickets = [
    {
      id: "TICK-001",
      title: "POS not printing receipts",
      category: "Technical Support",
      priority: "High",
      status: "In Progress",
      created: "2 hours ago",
      description: "The POS system is not printing receipts after the latest update..."
    },
    {
      id: "TICK-002", 
      title: "Unable to process payment",
      category: "Technical Support",
      priority: "Critical",
      status: "Open",
      created: "5 hours ago",
      description: "Payment processing is failing for all credit card transactions..."
    },
    {
      id: "TICK-003",
      title: "Request multi-language support",
      category: "Feature Request",
      priority: "Low",
      status: "Under Review",
      created: "1 day ago",
      description: "Would like to see Spanish language support for our Mexican stores..."
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open": return "bg-destructive/10 text-destructive";
      case "In Progress": return "bg-warning/10 text-warning";
      case "Under Review": return "bg-primary/10 text-primary";
      case "Resolved": return "bg-success/10 text-success";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Critical": return "bg-destructive/10 text-destructive";
      case "High": return "bg-warning/10 text-warning";
      case "Medium": return "bg-primary/10 text-primary";
      case "Low": return "bg-success/10 text-success";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Support Tickets</h1>
          <p className="text-muted-foreground">
            Get help from our support team or track your existing tickets
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 max-w-md">
            <TabsTrigger value="create">Create Ticket</TabsTrigger>
            <TabsTrigger value="view">My Tickets</TabsTrigger>
          </TabsList>

          <TabsContent value="create" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="w-5 h-5" />
                  Submit a Support Ticket
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input 
                      id="subject"
                      placeholder="Brief description of your issue"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Category *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {ticketCategories.map((category) => {
                          const Icon = category.icon;
                          return (
                            <SelectItem key={category.value} value={category.value}>
                              <div className="flex items-center gap-2">
                                <Icon className={`w-4 h-4 ${category.color}`} />
                                {category.label}
                              </div>
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="priority">Priority *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority level" />
                      </SelectTrigger>
                      <SelectContent>
                        {priorities.map((priority) => (
                          <SelectItem key={priority.value} value={priority.value}>
                            {priority.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description *</Label>
                  <Textarea 
                    id="description"
                    placeholder="Please provide detailed information about your issue, including steps to reproduce, error messages, and what you expected to happen..."
                    rows={6}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="attachment">Attachments (optional)</Label>
                  <Input 
                    id="attachment"
                    type="file"
                    multiple
                    accept=".jpg,.jpeg,.png,.pdf,.txt"
                  />
                  <p className="text-xs text-muted-foreground">
                    Supported formats: JPG, PNG, PDF, TXT (Max 10MB per file)
                  </p>
                </div>

                <Button className="w-full md:w-auto">
                  Submit Ticket
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="view" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <CardTitle>My Support Tickets</CardTitle>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        placeholder="Search tickets..."
                        className="pl-10 w-64"
                      />
                    </div>
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sampleTickets.map((ticket) => (
                    <Card key={ticket.id} className="border border-border/50">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="font-mono text-sm text-muted-foreground">
                                {ticket.id}
                              </span>
                              <Badge className={getPriorityColor(ticket.priority)}>
                                {ticket.priority}
                              </Badge>
                              <Badge className={getStatusColor(ticket.status)}>
                                {ticket.status}
                              </Badge>
                            </div>
                            <h3 className="font-semibold text-foreground mb-2">
                              {ticket.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-2">
                              {ticket.description}
                            </p>
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                              <span>{ticket.category}</span>
                              <span>•</span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {ticket.created}
                              </span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Tickets;