import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button.jsx';
import { Home, User, Briefcase, Award, Mail } from 'lucide-react';

const Navigation = ({ activeSection, onSectionChange }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'experience', label: 'Experience', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-card-gradient backdrop-blur-md border-b border-border/50 shadow-soft"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="text-2xl font-bold text-primary font-serif"
          >
            Suruchi 
          </motion.div>
          
          <div className="flex space-x-2">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <motion.div
                  key={item.id}
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    size="sm"
                    onClick={() => onSectionChange(item.id)}
                    className={`flex items-center space-x-2 transition-smooth ${
                      isActive 
                        ? 'bg-primary text-primary-foreground shadow-soft' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/10'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden md:inline">{item.label}</span>
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
