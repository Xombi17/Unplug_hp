import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAnimations } from '@/hooks/useAnimations';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const { getEntryAnimation } = useAnimations();

  // Get consistently top-down animation instead of random directions
  const getNavAnimation = (index: number) => {
    return `opacity-0 translate-y-[-30px] animate-slide-down animation-delay-${index * 100}`;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      
      // Check if scrolled past initial threshold
      if (currentScrollTop > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Handle navbar show/hide on scroll
      if (currentScrollTop > lastScrollTop && currentScrollTop > 200) {
        // Scrolling down - hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up - show navbar
        setIsVisible(true);
      }
      
      setLastScrollTop(currentScrollTop);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "backdrop-blur-md bg-black/30 border-b border-sky-400/20" : "bg-transparent",
      isVisible ? "translate-y-0" : "-translate-y-full"
    )}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className={`flex items-center ${getNavAnimation(0)}`}>
          <a href="/" className="flex items-center">
            <img src="/images/gdsc.png" alt="GDSC Logo" className="h-8 w-auto mr-2" />
         
          </a>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-between flex-1">
          <div className="flex-grow-0"></div> {/* Empty space */}
          <div className="flex space-x-8 items-center mx-auto">
            {['about', 'features', 'mentors', 'schedule', 'newsletter'].map((item, index) => (
              <a 
                key={item}
                href={`#${item}`} 
                className={`font-magical text-white hover:text-sky-400 transition-colors ${getNavAnimation(index + 1)}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
          <Button className={`magical-button bg-gradient-to-r from-sky-600 to-sky-400 text-white ${getNavAnimation(6)}`}>
            Apply Now
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className={`md:hidden ${getNavAnimation(1)}`}>
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
        "md:hidden absolute left-0 right-0 backdrop-blur-md bg-black/50 shadow-lg transition-all duration-300 ease-in-out overflow-hidden border-b border-sky-400/20",
        isMenuOpen ? "max-h-96 py-4" : "max-h-0 py-0"
      )}>
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          {['about', 'features', 'mentors', 'schedule', 'newsletter'].map((item, index) => (
            <a 
              key={item}
              href={`#${item}`} 
              className={`font-magical p-2 text-white hover:bg-white/10 rounded-md transition-colors`}
              onClick={toggleMenu}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
          <Button className="magical-button w-full bg-gradient-to-r from-sky-600 to-sky-400 text-white">
            Apply Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
