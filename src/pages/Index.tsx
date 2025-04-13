import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Features from '@/components/Features';
import Mentors from '@/components/Mentors';
import Events from '@/components/Events';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed overflow-x-hidden" style={{ backgroundImage: 'url("/images/beautiful-snowy-mountains-road-fo-3840x2160.jpg")' }}>
      <div className="backdrop-blur-sm backdrop-brightness-50 min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Features />
        <Mentors />
        <Events />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
