
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { BookOpen, Menu, X, Wand } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 parchment backdrop-blur">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Wand className="w-6 h-6 text-gryffindor-primary mr-2" />
          <span className="font-magical text-2xl font-bold">Wizarding Forge</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#houses" className="font-magical hover:text-primary transition-colors">Houses</a>
          <a href="#spellbook" className="font-magical hover:text-primary transition-colors">Spellbook</a>
          <a href="#mentors" className="font-magical hover:text-primary transition-colors">Mentors</a>
          <a href="#contact" className="font-magical hover:text-primary transition-colors">Contact</a>
          <Button className="magical-button">
            <BookOpen className="mr-2 h-4 w-4" />
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
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden absolute left-0 right-0 parchment shadow-lg transition-all duration-300 ease-in-out overflow-hidden",
        isMenuOpen ? "max-h-64 py-4" : "max-h-0 py-0"
      )}>
        <div className="container mx-auto px-4 flex flex-col space-y-3">
          <a href="#houses" className="font-magical p-2 hover:bg-muted rounded-md transition-colors" onClick={toggleMenu}>Houses</a>
          <a href="#spellbook" className="font-magical p-2 hover:bg-muted rounded-md transition-colors" onClick={toggleMenu}>Spellbook</a>
          <a href="#mentors" className="font-magical p-2 hover:bg-muted rounded-md transition-colors" onClick={toggleMenu}>Mentors</a>
          <a href="#contact" className="font-magical p-2 hover:bg-muted rounded-md transition-colors" onClick={toggleMenu}>Contact</a>
          <Button className="magical-button w-full">
            <BookOpen className="mr-2 h-4 w-4" />
            Apply Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
