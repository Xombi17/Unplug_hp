import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Initialize scroll animations for elements with data-gsap-anim attribute
 */
export const initScrollAnimations = () => {
  // Get all elements with data-gsap-anim attribute
  const animElements = document.querySelectorAll('[data-gsap-anim]');
  
  // Create animation for each element
  animElements.forEach((element) => {
    const animType = element.getAttribute('data-gsap-anim');
    const delay = parseFloat(element.getAttribute('data-gsap-delay') || '0');
    const duration = parseFloat(element.getAttribute('data-gsap-duration') || '0.8');
    
    let animProps = {};
    
    // Set animation properties based on animation type
    switch (animType) {
      case 'fade':
        animProps = { opacity: 0 };
        break;
      case 'fade-up':
        animProps = { opacity: 0, y: 50 };
        break;
      case 'fade-down':
        animProps = { opacity: 0, y: -50 };
        break;
      case 'fade-left':
        animProps = { opacity: 0, x: -50 };
        break;
      case 'fade-right':
        animProps = { opacity: 0, x: 50 };
        break;
      case 'zoom-in':
        animProps = { opacity: 0, scale: 0.8 };
        break;
      case 'zoom-out':
        animProps = { opacity: 0, scale: 1.2 };
        break;
      default:
        animProps = { opacity: 0 };
    }
    
    // Set initial state
    gsap.set(element, animProps);
    
    // Create the scroll trigger animation
    gsap.to(element, {
      ...Object.fromEntries(
        Object.entries(animProps).map(([key, value]) => [key, key === 'opacity' ? 1 : 0])
      ),
      duration,
      delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%", // Starts animation when the top of the element is 85% from the top of the viewport
        toggleActions: "play none none none", // play, pause, resume, reset, restart, complete, reverse, none
      }
    });
  });
};

/**
 * Initialize staggered animations for children of container elements
 * with data-gsap-stagger attribute
 */
export const initStaggerAnimations = () => {
  // Get all elements with data-gsap-stagger attribute
  const staggerContainers = document.querySelectorAll('[data-gsap-stagger]');
  
  staggerContainers.forEach((container) => {
    const children = container.querySelectorAll('[data-gsap-stagger-item]');
    const staggerDelay = parseFloat(container.getAttribute('data-gsap-stagger') || '0.1');
    const animType = container.getAttribute('data-gsap-anim') || 'fade-up';
    
    let animProps = {};
    switch (animType) {
      case 'fade':
        animProps = { opacity: 0 };
        break;
      case 'fade-up':
        animProps = { opacity: 0, y: 30 };
        break;
      case 'fade-down':
        animProps = { opacity: 0, y: -30 };
        break;
      case 'fade-left':
        animProps = { opacity: 0, x: -30 };
        break;
      case 'fade-right':
        animProps = { opacity: 0, x: 30 };
        break;
      default:
        animProps = { opacity: 0, y: 30 };
    }
    
    // Set initial state
    gsap.set(children, animProps);
    
    // Create staggered animation
    gsap.to(children, {
      ...Object.fromEntries(
        Object.entries(animProps).map(([key, value]) => [key, key === 'opacity' ? 1 : 0])
      ),
      duration: 0.8,
      stagger: staggerDelay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container,
        start: "top 85%",
        toggleActions: "play none none none",
      }
    });
  });
};

/**
 * Initialize parallax effects for elements with data-gsap-parallax attribute
 */
export const initParallaxEffects = () => {
  const parallaxElements = document.querySelectorAll('[data-gsap-parallax]');
  
  parallaxElements.forEach((element) => {
    const speed = parseFloat(element.getAttribute('data-gsap-parallax') || '0.1');
    
    gsap.to(element, {
      y: `${speed * 100}%`,
      ease: "none",
      scrollTrigger: {
        trigger: element.parentElement || element,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  });
};

/**
 * Master function to initialize all GSAP animations
 */
export const initGSAPAnimations = () => {
  // Wait for DOM content to be fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        initScrollAnimations();
        initStaggerAnimations();
        initParallaxEffects();
      }, 200);
    });
  } else {
    setTimeout(() => {
      initScrollAnimations();
      initStaggerAnimations();
      initParallaxEffects();
    }, 200);
  }
}; 