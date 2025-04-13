
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Schedule from '@/components/Schedule';
import Houses from '@/components/Houses';
import Spellbook from '@/components/Spellbook';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed overflow-x-hidden" style={{ backgroundImage: 'url("/lovable-uploads/b26c3556-0799-4528-af90-0bafd8c77ca7.png")' }}>
      <div className="backdrop-blur-sm backdrop-brightness-50 min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Schedule />
        <Houses />
        <Spellbook />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
