import React from 'react';
import { Button } from "@/components/ui/button";
import { Sparkles, Wand2, Stars, Feather } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Main background image for hero section */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/harry2.jpg" 
          alt="Hogwarts" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 flying-key z-10">
        <Feather className="h-10 w-10 text-amber-300" style={{ transform: "rotate(30deg)" }} />
      </div>
      <div className="absolute bottom-1/3 right-10 flying-key z-10" style={{ animationDelay: "2s" }}>
        <Feather className="h-8 w-8 text-amber-300" style={{ transform: "rotate(-20deg)" }} />
      </div>
      <div className="absolute top-1/2 right-1/4 flying-key z-10" style={{ animationDelay: "3s" }}>
        <Feather className="h-6 w-6 text-amber-300" style={{ transform: "rotate(15deg)" }} />
      </div>
      
      {/* Magical lighting effects */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-amber-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 right-1/3 w-80 h-80 bg-amber-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center min-h-screen pt-20">
        <div className="text-center mb-16">
          <div className="inline-block mb-8 quill-decoration">
            <span className="text-xs uppercase tracking-wider bg-amber-700/80 text-white px-6 py-2 rounded-full 
              font-harry-potter border border-amber-300/50 shadow-[0_0_15px_rgba(245,158,11,0.5)]">
              The Chamber of Entrepreneurship
            </span>
          </div>
          
          <h1 className="font-harry-potter text-6xl md:text-8xl font-bold mb-8 leading-tight text-white magical-text-shadow">
            <span className="text-amber-400">Unplug</span><br />
            Hogwarts Edition
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-white/90 font-serif">
            Where <span className="italic text-amber-300">muggle technology</span> meets <span className="italic text-amber-300">magical innovation</span> in our enchanted mountain sanctuary
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <Button className="font-harry-potter bg-gradient-to-r from-amber-700 to-amber-500 text-white text-lg px-8 py-6 h-auto shadow-[0_0_15px_rgba(245,158,11,0.4)] hover:shadow-[0_0_25px_rgba(245,158,11,0.6)] transition-all" size="lg">
              <Wand2 className="mr-2 h-5 w-5" />
              Cast Your Application
            </Button>
            <Button variant="outline" size="lg" className="font-harry-potter bg-black/30 backdrop-blur-sm border-amber-400/50 text-amber-400 hover:bg-amber-500/20 text-lg px-8 py-6 h-auto transition-all">
              <Stars className="mr-2 h-5 w-5" />
              View Magical Schedule
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
