// Animation utility functions and constants

// Random entry directions for elements
export const entryDirections = ['top', 'right', 'bottom', 'left', 'scale'];

// Get a random entry direction
export const getRandomDirection = () => {
  const idx = Math.floor(Math.random() * entryDirections.length);
  return entryDirections[idx];
};

// Generate the appropriate classes for a specific animation direction
export const getAnimationClasses = (direction: string, delay: number = 0) => {
  const baseClasses = 'opacity-0 transition-all duration-1000 ease-out';
  const delayClass = `animation-delay-${delay * 100}`;
  
  switch (direction) {
    case 'top':
      return `${baseClasses} translate-y-[-50px] animate-slide-down ${delayClass}`;
    case 'right':
      return `${baseClasses} translate-x-[50px] animate-slide-left ${delayClass}`;
    case 'bottom':
      return `${baseClasses} translate-y-[50px] animate-slide-up ${delayClass}`;
    case 'left':
      return `${baseClasses} translate-x-[-50px] animate-slide-right ${delayClass}`;
    case 'scale':
      return `${baseClasses} scale-90 animate-scale-up ${delayClass}`;
    default:
      return `${baseClasses} animate-fade-in ${delayClass}`;
  }
};

// Check if an element is in viewport
export const isInViewport = (element: HTMLElement, offset = 150) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset &&
    rect.bottom >= offset
  );
};

// Apply scroll animations
export const handleScrollAnimations = () => {
  const animatedElements = document.querySelectorAll('[data-scroll]');
  
  animatedElements.forEach((element) => {
    if (isInViewport(element as HTMLElement)) {
      element.classList.add('animate-in');
      element.classList.remove('animate-out');
    } else {
      element.classList.remove('animate-in');
      element.classList.add('animate-out');
    }
  });
};

// Set up parallax effect for an element
export const setupParallax = (element: HTMLElement, speed: number) => {
  const handleParallax = () => {
    const scrollPosition = window.pageYOffset;
    const translateY = scrollPosition * speed;
    
    // Apply the transform with 3D acceleration
    element.style.transform = `translate3d(0, ${translateY}px, 0)`;
  };
  
  window.addEventListener('scroll', handleParallax);
  return () => window.removeEventListener('scroll', handleParallax);
}; 