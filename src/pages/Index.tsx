import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Mentors from '@/components/Mentors';
import Schedule from '@/components/Schedule';
import SuccessStories from '@/components/SuccessStories';
import FAQ from '@/components/Newsletter';
import Footer from '@/components/Footer';
import { initGSAPAnimations } from '@/lib/gsap-animations';

const Index = () => {
  useEffect(() => {
    // Reset scroll position on page load/refresh
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    
    // Initialize GSAP animations
    initGSAPAnimations();
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
          window.scrollTo({
            top: target.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
        }
      });
    });
    
    return () => {
      // Clean up event listeners
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function () {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Features />
      <Mentors />
      <Schedule />
      <SuccessStories />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
