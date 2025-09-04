import { Button } from "@/components/ui/button.jsx";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import heroBackground from "@/assets/hero-background.jpg";
import prfImage from "@/assets/prf_image.jpg"

const Hero = ({ onNavigate }) => {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground}
          alt="profile pic" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-card-gradient shadow-large border-4 border-primary/20 overflow-hidden flex items-center justify-center">
              <img 
                className="w-full h-full object-cover object-top rounded-full" 
                src={prfImage} 
                alt="Suruchi Kumari - Profile Picture" 
              />
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-xl md:text-7xl font-bold text-white mb-6 font-serif"
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            >
              Hi <span className="text-sky-950">There </span>,
            </motion.div>
            <motion.div
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
            >
              I am Suruchi <span className="text-sky-950">Jha</span>
            </motion.div>
          </motion.h1>
          
          <motion.div 
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="text-xl md:text-2xl text-sky-950 mb-4 font-serif"
          >
            Full Stack Developer
          </motion.div>
          
          <motion.p 
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            className="text-lg text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed font-serif"
          >
            Passionate about creating innovative web solutions with modern technologies. 
            Specialized in MERN stack web development.
          </motion.p>
          
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button 
              size="lg" 
              className="bg-white text-sky-950 hover:bg-white/90 transition-smooth shadow-medium"
              onClick={() => onNavigate('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 transition-smooth"
              onClick={() => onNavigate('contact')}
            >
              Get In Touch
            </Button>
          </motion.div>
          
          <div className="flex justify-center space-x-6 mb-16">
            <a 
              href="https://github.com/codebysuruchi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-smooth shadow-soft"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/suruchi-jha-220995265/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-smooth shadow-soft"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="suruchijha798@gmail.com"
              className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-smooth shadow-soft"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <Button 
          onClick={() => onNavigate('about')}
          variant="ghost"
          className="text-white hover:bg-white/20 transition-smooth"
        >
          Learn More About Me
        </Button>
      </div>
    </section>
  );
};

export default Hero;
