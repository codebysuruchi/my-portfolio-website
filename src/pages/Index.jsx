import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from "@/components/Navigation.jsx";
import Hero from "@/components/Hero.jsx";
import About from "@/components/About.jsx";
import Projects from "@/components/Projects.jsx";
import Experience from "@/components/Experience.jsx";
import Contact from "@/components/Contact.jsx";

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const pageVariants = {
    initial: {
      opacity: 0,
      x: 300,
      scale: 0.8
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      x: -300,
      scale: 0.8
    }
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Hero onNavigate={setActiveSection} />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'experience':
        return <Experience />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero onNavigate={setActiveSection} />;
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
      <div className="pt-20 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="min-h-screen"
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
};

export default Index;
