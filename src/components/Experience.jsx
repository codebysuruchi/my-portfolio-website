import { Card, CardContent } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import { Download, MapPin, Calendar, Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Web Development Intern",
      company: "InternsElite (collaboration with IIT Bhubaneswar)",
      location: "Work From Home",
      period: "July 2025 - Present",
description: `Developed and maintained responsive web applications using modern web technologies.
Collaborated with mentors to design, implement, and test features for assigned projects.
Utilized HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, React.js, and other tools to build scalable solutions.`,
      technologies: ["HTML","CSS","Javascript","React js", "Node.js", "Express js", "", "MongoDB"]
    },
    {
      type: "work",
      title: "Intern – Python Programming,",
      company: "Interpe",
      location: "Online",
      period: "July 2024 - Aug 2024",
description: `Gained hands-on experience in Python programming by working on real-world tasks and projects.
Applied problem-solving skills to develop, debug, and optimize code.
Collaborated with the team to understand requirements, implement solutions, and deliver results.`,
      technologies: ["Python"]
    },
    {
      type: "education",
      title: "Bachelor of Computer Science",
      company: "Gandhi enginnering college ",
      location: "Bhubaneshwar , odisha",
      period: "2022 - present",
description: `Biju Patnaik university of technology.Final year b.tech student persuing
B.Tech in Computer Science & Engineering with specialization in AIML.`,
technologies:[" "]},
    {
      type: "education",
      title: "Secondary Education",
      company: "Rose Public School ",
      location: "Darbhanga, Bihar",
      period: "2014 - 2022",
      description: `CBSE-affiliated co-educational institution in Darbhanga, Bihar.
Completed full secondary and senior secondary education (Grade 5–12) with Class X (2020) and
Class XII – Science Stream (2022)`,
      technologies: [" "]
    }
  ];

  const handleDownloadResume = () => {
    // This would typically download a PDF file
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You would add the actual resume file to public folder
    link.download = 'John_Smith_Resume.pdf';
    link.click();
  };

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience & Education</h2>
          <div className="w-20 h-1 bg-accent-gradient mx-auto mb-8 rounded-full"></div>
          <div className="flex justify-center">
            <Button 
              className="bg-primary hover:bg-primary/90 transition-colors shadow-medium"
              onClick={handleDownloadResume}
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-medium z-10">
                  <div className="absolute inset-1 bg-primary-glow rounded-full animate-pulse"></div>
                </div>
                
                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 pl-12' : 'md:pl-8 pl-12'}`}>
                  <Card className="bg-card-gradient shadow-soft hover:shadow-medium transition-all duration-300 border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        {exp.type === 'work' ? (
                          <Briefcase className="w-5 h-5 text-primary mr-2" />
                        ) : (
                          <GraduationCap className="w-5 h-5 text-accent mr-2" />
                        )}
                        <Badge 
                          variant={exp.type === 'work' ? 'default' : 'secondary'}
                          className={exp.type === 'work' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'}
                        >
                          {exp.type === 'work' ? 'Work' : 'Education'}
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {exp.title}
                      </h3>
                      
                      <div className="text-primary font-medium mb-3">
                        {exp.company}
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {exp.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="outline"
                            className="text-xs border-muted text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
