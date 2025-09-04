import { Card, CardContent } from "@/components/ui/card.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import { Code, Database, Globe, Smartphone } from "lucide-react";

const About = () => {
  const skills = [
    { category: "Frontend", icon: Globe, skills: ["React", "JavaScript", "Tailwind CSS", "Next.js"] },
    { category: "Backend", icon: Database, skills: ["Node.js", "Express", "MongoDB"] },
    { category: "Tools", icon: Code, skills: ["Git", "Github", "Vercel"] }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <div className="w-20 h-1 bg-accent-gradient mx-auto mb-8 rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Passionate Developer & Problem Solver
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am a final year B.Tech student in Computer Science and Engineering with a strong foundation in computer science fundamentals. I possess hands-on experience in Full Stack Web Development, proficient in MERN (MongoDB, Express.js, React.js, Node.js) stack, REST APIs, and database management systems like MySQL and MongoDB.
              </p>
              <p>
                I'm passionate about clean code, user experience, and staying up-to-date with the 
                latest technologies. When I'm not coding, you'll find me contributing to open-source 
                projects, writing technical blogs, or exploring new frameworks.
              </p>
              <p>
                Currently focused on learning  Web Development and AIML in more depth .
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skillGroup, index) => {
              const Icon = skillGroup.icon;
              return (
                <Card key={index} className="bg-card-gradient shadow-soft hover:shadow-medium transition-smooth border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-2 rounded-lg bg-primary/10 mr-3">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground">{skillGroup.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="secondary" 
                          className="text-xs bg-muted/50 text-muted-foreground hover:bg-accent/10 transition-smooth"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
