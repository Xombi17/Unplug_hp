import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "backdrop-blur-md bg-black/30 border-b border-amber-400/20" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Sparkles className="w-6 h-6 text-amber-400 mr-2" />
          <span className="font-magical text-2xl font-bold text-white">Hogwarts<span className="text-amber-400">Launch</span></span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#about" className="font-magical text-white hover:text-amber-400 transition-colors">About</a>
          <a href="#features" className="font-magical text-white hover:text-amber-400 transition-colors">Services</a>
          <a href="#mentors" className="font-magical text-white hover:text-amber-400 transition-colors">Mentors</a>
          <a href="#events" className="font-magical text-white hover:text-amber-400 transition-colors">Events</a>
          <a href="#newsletter" className="font-magical text-white hover:text-amber-400 transition-colors">Contact</a>
          <Button className="magical-button bg-gradient-to-r from-amber-600 to-amber-400 text-white">
            Apply Now
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="text-white"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden absolute left-0 right-0 backdrop-blur-md bg-black/50 shadow-lg transition-all duration-300 ease-in-out overflow-hidden border-b border-amber-400/20",
        isMenuOpen ? "max-h-96 py-4" : "max-h-0 py-0"
      )}>
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <a href="#about" className="font-magical p-2 text-white hover:bg-white/10 rounded-md transition-colors" onClick={toggleMenu}>About</a>
          <a href="#features" className="font-magical p-2 text-white hover:bg-white/10 rounded-md transition-colors" onClick={toggleMenu}>Services</a>
          <a href="#mentors" className="font-magical p-2 text-white hover:bg-white/10 rounded-md transition-colors" onClick={toggleMenu}>Mentors</a>
          <a href="#events" className="font-magical p-2 text-white hover:bg-white/10 rounded-md transition-colors" onClick={toggleMenu}>Events</a>
          <a href="#newsletter" className="font-magical p-2 text-white hover:bg-white/10 rounded-md transition-colors" onClick={toggleMenu}>Contact</a>
          <Button className="magical-button w-full bg-gradient-to-r from-amber-600 to-amber-400 text-white">
            Apply Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
