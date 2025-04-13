
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Houses from '@/components/Houses';
import Spellbook from '@/components/Spellbook';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Houses />
      <Spellbook />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
