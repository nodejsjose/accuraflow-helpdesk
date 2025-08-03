import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Filter, 
  Plus, 
  MessageSquare, 
  Heart, 
  Eye, 
  TrendingUp, 
  Pin,
  Clock,
  Users,
  CheckCircle
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Forum = () => {
  const [activeTab, setActiveTab] = useState("discussions");

  const categories = [
    { name: "General Discussion", posts: 156, color: "bg-primary/10 text-primary" },
    { name: "Feature Requests", posts: 43, color: "bg-accent/10 text-accent" },
    { name: "Troubleshooting", posts: 89, color: "bg-warning/10 text-warning" },
    { name: "Tips & Tricks", posts: 67, color: "bg-success/10 text-success" },
    { name: "Integrations", posts: 34, color: "bg-purple-500/10 text-purple-600" },
    { name: "Customization", posts: 28, color: "bg-pink-500/10 text-pink-600" },
  ];

  const discussions = [
    {
      id: 1,
      title: "How to set up automated inventory alerts?",
      author: "Sarah Martinez",
      avatar: "/avatars/sarah.jpg",
      category: "Tips & Tricks",
      replies: 12,
      views: 234,
      likes: 8,
      lastActivity: "2 hours ago",
      isPinned: false,
      isSolved: true,
      excerpt: "I've been using Accura POS for 6 months and wanted to share my setup for automated low stock alerts..."
    },
    {
      id: 2,
      title: "Request: Multi-location reporting dashboard",
      author: "Mike Johnson",
      avatar: "/avatars/mike.jpg", 
      category: "Feature Requests",
      replies: 24,
      views: 456,
      likes: 18,
      lastActivity: "4 hours ago",
      isPinned: true,
      isSolved: false,
      excerpt: "Would love to see a consolidated dashboard that shows metrics across all my store locations..."
    },
    {
      id: 3,
      title: "POS freezing during peak hours - need help!",
      author: "Lisa Chen",
      avatar: "/avatars/lisa.jpg",
      category: "Troubleshooting", 
      replies: 7,
      views: 123,
      likes: 3,
      lastActivity: "1 day ago",
      isPinned: false,
      isSolved: false,
      excerpt: "My POS system keeps freezing during busy periods. Has anyone experienced this issue?"
    },
    {
      id: 4,
      title: "Best practices for employee management",
      author: "David Wilson",
      avatar: "/avatars/david.jpg",
      category: "General Discussion",
      replies: 15,
      views: 289,
      likes: 11,
      lastActivity: "2 days ago",
      isPinned: false,
      isSolved: true,
      excerpt: "Sharing some tips on how I manage my team using Accura POS's employee features..."
    }
  ];

  const topContributors = [
    { name: "Alex Rodriguez", posts: 89, reputation: 2456, avatar: "/avatars/alex.jpg" },
    { name: "Emma Thompson", posts: 67, reputation: 1890, avatar: "/avatars/emma.jpg" },
    { name: "John Davis", posts: 54, reputation: 1567, avatar: "/avatars/john.jpg" },
    { name: "Maria Garcia", posts: 43, reputation: 1234, avatar: "/avatars/maria.jpg" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Community Forum</h1>
          <p className="text-muted-foreground">
            Connect with other Accura POS users, share tips, and get help from the community
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <TabsList>
                  <TabsTrigger value="discussions">Discussions</TabsTrigger>
                  <TabsTrigger value="categories">Categories</TabsTrigger>
                </TabsList>
                
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Search discussions..."
                      className="pl-10 w-64"
                    />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    New Post
                  </Button>
                </div>
              </div>

              <TabsContent value="discussions" className="space-y-4">
                {discussions.map((discussion) => (
                  <Card key={discussion.id} className="border border-border/50 hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={discussion.avatar} />
                          <AvatarFallback>
                            {discussion.author.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2">
                              {discussion.isPinned && (
                                <Pin className="w-4 h-4 text-primary" />
                              )}
                              {discussion.isSolved && (
                                <CheckCircle className="w-4 h-4 text-success" />
                              )}
                              <h3 className="font-semibold text-foreground hover:text-primary cursor-pointer">
                                {discussion.title}
                              </h3>
                            </div>
                          </div>
                          
                          <p className="text-sm text-muted-foreground mb-3">
                            {discussion.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="font-medium">{discussion.author}</span>
                              <Badge variant="outline" className="text-xs">
                                {discussion.category}
                              </Badge>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {discussion.lastActivity}
                              </span>
                            </div>
                            
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <MessageSquare className="w-4 h-4" />
                                {discussion.replies}
                              </span>
                              <span className="flex items-center gap-1">
                                <Eye className="w-4 h-4" />
                                {discussion.views}
                              </span>
                              <span className="flex items-center gap-1">
                                <Heart className="w-4 h-4" />
                                {discussion.likes}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="categories" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  {categories.map((category) => (
                    <Card key={category.name} className="border border-border/50 hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold text-foreground mb-1">
                              {category.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {category.posts} posts
                            </p>
                          </div>
                          <Badge className={category.color}>
                            {category.posts}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Community Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Community Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Total Discussions</span>
                  <span className="font-semibold">1,234</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Active Members</span>
                  <span className="font-semibold">456</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Solved Questions</span>
                  <span className="font-semibold">89%</span>
                </div>
              </CardContent>
            </Card>

            {/* Top Contributors */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Top Contributors
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {topContributors.map((contributor, index) => (
                  <div key={contributor.name} className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold">
                      {index + 1}
                    </div>
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={contributor.avatar} />
                      <AvatarFallback>
                        {contributor.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{contributor.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {contributor.posts} posts • {contributor.reputation} rep
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full" size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Start Discussion
                </Button>
                <Button variant="outline" className="w-full" size="sm">
                  <Users className="w-4 h-4 mr-2" />
                  Browse Members
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Forum;