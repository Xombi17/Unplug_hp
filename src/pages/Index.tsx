import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Mentors from '@/components/Mentors';
import Schedule from '@/components/Schedule';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black">
      <Navbar />
      <Hero />
      <Features />
      <Mentors />
      <Schedule />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
