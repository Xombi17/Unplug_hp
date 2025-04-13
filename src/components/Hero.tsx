import React from 'react';
import { Button } from "@/components/ui/button";
import { Sparkles, Wand2, Stars, Feather } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Main background image for hero section */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/harry2.jpg" 
          alt="Hogwarts" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/40"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 flying-key z-10">
        <Feather className="h-10 w-10 text-sky-300" style={{ transform: "rotate(30deg)" }} />
      </div>
      <div className="absolute bottom-1/3 right-10 flying-key z-10" style={{ animationDelay: "2s" }}>
        <Feather className="h-8 w-8 text-sky-300" style={{ transform: "rotate(-20deg)" }} />
      </div>
      <div className="absolute top-1/2 right-1/4 flying-key z-10" style={{ animationDelay: "3s" }}>
        <Feather className="h-6 w-6 text-sky-300" style={{ transform: "rotate(15deg)" }} />
      </div>
      
      {/* Magical lighting effects */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-sky-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 right-1/3 w-80 h-80 bg-sky-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center min-h-screen pt-20">
        <div className="text-center mb-16">
          <div className="inline-block mb-8 quill-decoration">
            <span className="text-xs uppercase tracking-wider bg-sky-700/80 text-white px-6 py-2 rounded-full 
              font-harry-potter border border-sky-300/50 shadow-[0_0_15px_rgba(14,165,233,0.5)]">
              The Chamber of Entrepreneurship
            </span>
          </div>
          
          <h1 className="font-harry-potter text-6xl md:text-8xl font-bold mb-8 leading-tight text-white magical-text-shadow">
            <span className="text-sky-400">Unplug</span><br />
            Hogwarts Edition
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-white/90 font-serif">
            Where <span className="italic text-sky-300">muggle technology</span> meets <span className="italic text-sky-300">magical innovation</span> in our enchanted mountain sanctuary
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <Button className="font-harry-potter bg-gradient-to-r from-sky-700 to-sky-500 text-white text-lg px-8 py-6 h-auto shadow-[0_0_15px_rgba(14,165,233,0.4)] hover:shadow-[0_0_25px_rgba(14,165,233,0.6)] transition-all" size="lg">
              <Wand2 className="mr-2 h-5 w-5" />
              Cast Your Application
            </Button>
            <Button variant="outline" size="lg" className="font-harry-potter bg-black/30 backdrop-blur-sm border-sky-400/50 text-sky-400 hover:bg-sky-500/20 text-lg px-8 py-6 h-auto transition-all">
              <Stars className="mr-2 h-5 w-5" />
              View Magical Schedule
            </Button>
          </div>
        </div>
      </div>

      {/* About section with seamless transition */}
      <div id="about" className="relative mb-24">
        {/* Additional magical effects for about section */}
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-sky-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.8s" }}></div>
        
        {/* Additional floating elements for about section */}
        <div className="absolute top-1/3 right-20 floating-element opacity-30">
          <Sparkles className="h-10 w-10 text-sky-300" />
        </div>
        <div className="absolute bottom-1/4 left-20 floating-element opacity-20" style={{ animationDelay: "2.5s" }}>
          <Sparkles className="h-8 w-8 text-sky-300" />
        </div>
        
        <div className="container mx-auto px-4 pt-24 pb-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white">
                <span className="font-harry-potter">About <span className="text-sky-400">Unplug</span></span>
              </h2>
              
              <div className="h-1 w-24 bg-gradient-to-r from-sky-500 to-sky-300 mb-10"></div>
              
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
                <button className="bg-gradient-to-r from-sky-700 to-sky-500 hover:from-sky-600 hover:to-sky-400 
                  text-white font-bold py-3 px-8 rounded-full transition-all shadow-[0_0_15px_rgba(14,165,233,0.4)] 
                  hover:shadow-[0_0_25px_rgba(14,165,233,0.6)]">
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-sky-500/20 rounded-full"></div>
              <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-sky-500/10 rounded-full"></div>
              
              <div className="p-1 rounded-lg bg-gradient-to-br from-sky-600/50 via-sky-500/30 to-sky-600/50 shadow-[0_0_15px_rgba(14,165,233,0.5)] relative z-10">
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
      </div>
    </section>
  );
};

export default Hero;
