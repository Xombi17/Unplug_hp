
import React from 'react';
import { Button } from "@/components/ui/button";
import { Wand, CalendarDays } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4">
        <div className="glass-card max-w-4xl mx-auto p-8 md:p-12">
          <div className="flex flex-col items-center text-center">
            <div className="inline-block mb-6 relative">
              <span className="text-xs uppercase tracking-wider bg-gryffindor-primary/80 text-white px-4 py-1 rounded-full">
                April 27, 2025 • The Great Hall
              </span>
            </div>
            
            <h1 className="font-magical text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              <span className="text-secondary">UNPLUG</span>: A Magical Digital Detox
            </h1>
            
            <p className="text-lg md:text-xl mb-8 max-w-2xl text-white/90">
              Step away from your screens and enter a world of analog enchantment. Join us for an afternoon of magical connection, real-world wonder, and screen-free spellbinding.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="magical-button bg-gradient-to-r from-gryffindor-primary to-gryffindor-secondary text-white" size="lg">
                <Wand className="mr-2 h-5 w-5" />
                Register Now
              </Button>
              <Button variant="outline" size="lg" className="font-magical bg-transparent border-white/30 text-white hover:bg-white/20">
                <CalendarDays className="mr-2 h-5 w-5" />
                Add to Calendar
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          <div className="flex items-center glass-card px-6 py-4 animate-float">
            <div className="w-12 h-12 flex items-center justify-center bg-gryffindor-primary rounded-full mr-4">
              <span className="font-magical text-white text-xl">3h</span>
            </div>
            <div>
              <h3 className="font-magical font-medium text-white">Digital Detox</h3>
              <p className="text-sm text-white/70">Screen-free magic</p>
            </div>
          </div>
          
          <div className="flex items-center glass-card px-6 py-4 animate-float" style={{ animationDelay: "0.3s" }}>
            <div className="w-12 h-12 flex items-center justify-center bg-slytherin-primary rounded-full mr-4">
              <span className="font-magical text-white text-xl">100%</span>
            </div>
            <div>
              <h3 className="font-magical font-medium text-white">Human Connection</h3>
              <p className="text-sm text-white/70">Real-world interactions</p>
            </div>
          </div>
          
          <div className="flex items-center glass-card px-6 py-4 animate-float" style={{ animationDelay: "0.6s" }}>
            <div className="w-12 h-12 flex items-center justify-center bg-ravenclaw-primary rounded-full mr-4">
              <span className="font-magical text-white text-xl">∞</span>
            </div>
            <div>
              <h3 className="font-magical font-medium text-white">Magical Memories</h3>
              <p className="text-sm text-white/70">Lasting enchantment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
