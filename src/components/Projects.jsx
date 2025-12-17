import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Password Manager App",
      description: "This project is a fully functional password manager application built from the ground up using React for the user interface, Tailwind CSS for styling, and browser local storage for data persistence.",
      image: "https://techlapse.com/images/blog/meta/best-password-managers-of-2023.png",
      technologies: ["React", "Node.js", "tailwindCSS"],
      demoLink: "https://password-manager-ten-alpha.vercel.app/",
      githubLink: "https://github.com/codebysuruchi/Password-manager"
    },
    {
      title: "To Do List App",
      description: "A sleek and responsive To-Do List application built using React and Tailwind CSS. This project helps users manage daily tasks.",
      image: "https://cdn.vectorstock.com/i/1000v/29/71/to-do-list-word-concepts-banner-task-prioritizing-vector-39922971.jpg",
      technologies: ["React js","TailwindCSS", "Express"],
      demoLink: "https://simple-todo-list-indol.vercel.app/",
      githubLink: "https://github.com/codebysuruchi/Todo-list-Project"
    },
    {
      title: "X Clone",
      description: "For the best experience, view this site at 75% zoom. This is my first project, so please excuse any mistakes—I'm still learning!",
      image: "https://www.wlns.com/wp-content/uploads/sites/50/2023/07/64bf1043ee0a44.40675335.jpeg?w=2560&h=1440&crop=1",
      technologies:["React js","TailwindCSS", "Express"],
      demoLink: "https://x-clone-rho-gilt.vercel.app/",
      githubLink: "https://github.com/codebysuruchi/X-clone"
    },
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
