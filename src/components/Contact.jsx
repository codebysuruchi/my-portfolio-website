import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";
import { Label } from "@/components/ui/label.jsx";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send data to backend API
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message sent successfully!",
          description: data.message,
        });
        
        // Reset form
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Handle validation errors from backend
        if (data.errors) {
          toast({
            title: "Validation Error",
            description: data.errors.join(', '),
            variant: "destructive",
          });
        } else {
          toast({
            title: "Error sending message",
            description: data.message || "Please try again later.",
            variant: "destructive",
          });
        }
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Network Error",
        description: "Unable to connect to server. Please check your internet connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "suruchijha798@gmail.com",
      href: "mailto:john.smith@email.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9102812338",
      href: "tel:9102812338"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Madanpur, Bhubaneshwar",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <div className="w-20 h-1 bg-accent-gradient mx-auto mb-8 rounded-full"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's discuss how we can bring your ideas to life.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-card-gradient shadow-soft border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-foreground flex items-center">
                <Send className="w-6 h-6 mr-3 text-primary" />
                Send Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-background border-border/50 focus:border-primary transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-background border-border/50 focus:border-primary transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="bg-background border-border/50 focus:border-primary transition-colors resize-none"
                    placeholder="Tell me about your project or say hello..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 transition-colors shadow-medium"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Let's Connect
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always open to discussing new opportunities, creative projects, 
                or potential collaborations. Whether you have a question about my work 
                or just want to say hello, feel free to reach out!
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="bg-card-gradient shadow-soft border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <div className="p-3 rounded-lg bg-primary/10 mr-4">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">
                            {info.label}
                          </div>
                          {info.href === "#" ? (
                            <div className="font-medium text-foreground">
                              {info.value}
                            </div>
                          ) : (
                            <a 
                              href={info.href}
                              className="font-medium text-primary hover:text-primary/80 transition-colors"
                            >
                              {info.value}
                            </a>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            
            <Card className="bg-accent-gradient p-6 text-white shadow-medium">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Quick Response</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    I typically respond to all inquiries within 24 hours. 
                    For urgent matters, feel free to call or text me directly.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
