import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { 
  getRandomDirection, 
  getAnimationClasses,
  handleScrollAnimations,
  setupParallax
} from '@/lib/animation';

interface AnimationContextType {
  getEntryAnimation: (elementIndex?: number) => string;
  isInitialLoadComplete: boolean;
}

const AnimationContext = createContext<AnimationContextType>({
  getEntryAnimation: () => '',
  isInitialLoadComplete: false
});

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  const [isInitialLoadComplete, setIsInitialLoadComplete] = useState(false);
  
  // Function to generate entry animations with consistent but random directions
  const getEntryAnimation = (elementIndex = 0) => {
    const direction = getRandomDirection();
    return getAnimationClasses(direction, elementIndex);
  };
  
  // Handle scroll animations
  useEffect(() => {
    // Update the animation state after initial load
    const timer = setTimeout(() => {
      setIsInitialLoadComplete(true);
    }, 2000);
    
    // Set up scroll event listener for animations
    const handleScroll = () => {
      window.requestAnimationFrame(() => {
        handleScrollAnimations();
      });
    };
    
    // Initialize scroll animations
    handleScrollAnimations();
    window.addEventListener('scroll', handleScroll);
    
    // Set up parallax effects
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    const cleanupFuncs: (() => void)[] = [];
    
    parallaxElements.forEach((el) => {
      const speed = parseFloat(el.getAttribute('data-parallax-speed') || '0.1');
      cleanupFuncs.push(setupParallax(el as HTMLElement, speed));
    });
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      cleanupFuncs.forEach(cleanup => cleanup());
    };
  }, []);
  
  return (
    <AnimationContext.Provider value={{ getEntryAnimation, isInitialLoadComplete }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimations = () => useContext(AnimationContext); 