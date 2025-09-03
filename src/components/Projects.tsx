import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, inventory management, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      demoLink: "https://demo.example.com",
      githubLink: "https://github.com/johnsmith/ecommerce"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, drag & drop interface, team collaboration features, and detailed analytics dashboard.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL", "Docker"],
      demoLink: "https://taskapp.example.com",
      githubLink: "https://github.com/johnsmith/taskapp"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather application with geolocation, detailed forecasts, interactive maps, and personalized weather alerts. Responsive design for all devices.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
      technologies: ["React Native", "TypeScript", "REST API", "Charts.js"],
      demoLink: "https://weather.example.com",
      githubLink: "https://github.com/johnsmith/weather"
    },
    {
      title: "AI Chat Bot",
      description: "Intelligent chatbot powered by machine learning for customer support. Features natural language processing, context awareness, and multi-language support.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      technologies: ["Python", "TensorFlow", "Flask", "OpenAI", "Redis"],
      demoLink: "https://chatbot.example.com",
      githubLink: "https://github.com/johnsmith/chatbot"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <div className="w-20 h-1 bg-accent-gradient mx-auto mb-8 rounded-full"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            UI/UX design, and problem-solving.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group bg-card-gradient shadow-soft hover:shadow-large transition-all duration-300 border-border/50 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary"
                      className="text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button 
                    size="sm" 
                    className="bg-primary hover:bg-primary/90 transition-colors shadow-soft"
                    asChild
                  >
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-border hover:bg-muted/50 transition-colors"
                    asChild
                  >
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;