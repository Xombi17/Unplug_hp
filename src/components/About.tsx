import React from 'react';
import { Sparkles, Wand2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 relative min-h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/4K-Mountains-Night-Starry-Sky-Wallpaper-3840x2160.jpg" 
          alt="Starry Mountains" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/50"></div>
      </div>
      
      {/* Magical effects */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 floating-element opacity-30">
        <Sparkles className="h-10 w-10 text-amber-300" />
      </div>
      <div className="absolute bottom-1/3 right-10 floating-element opacity-20" style={{ animationDelay: "2s" }}>
        <Wand2 className="h-8 w-8 text-amber-300" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
              <span className="font-harry-potter">About <span className="text-amber-400">Unplug</span></span>
            </h1>
            
            <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-amber-300 mb-10"></div>
            
            <div className="space-y-6 text-white/90 text-lg">
              <p>
                Unplug: Hogwarts Edition is your chance to escape the mundane and immerse yourself in magical innovation. 
                Organized by the Google Developer Student Clubs at Fr. Conceicao Rodrigues College of Engineering, 
                this three-day, two-night retreat in our enchanted mountain sanctuary focuses on spellbinding connections, 
                mystical learning, and crafting your future — no illusions, just pure wizardry.
              </p>
              
              <p>
                If you're ready to unplug and embark on a journey that can transform your path to greatness, 
                this is the enchantment you can't miss. Join us in the mountains where the stars align with your ambitions 
                and see where your magical ideas lead.
              </p>
            </div>
            
            <div className="mt-10">
              <button className="bg-gradient-to-r from-amber-700 to-amber-500 hover:from-amber-600 hover:to-amber-400 
                text-white font-bold py-3 px-8 rounded-full transition-all shadow-[0_0_15px_rgba(245,158,11,0.4)] 
                hover:shadow-[0_0_25px_rgba(245,158,11,0.6)]">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -left-4 -top-4 w-24 h-24 bg-amber-500/20 rounded-full"></div>
            <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-amber-500/10 rounded-full"></div>
            
            <div className="p-1 rounded-lg bg-gradient-to-br from-amber-600/50 via-amber-500/30 to-amber-600/50 shadow-[0_0_15px_rgba(245,158,11,0.5)] relative z-10">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/images/harry1.jpg" 
                  alt="Unplug Hogwarts" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
