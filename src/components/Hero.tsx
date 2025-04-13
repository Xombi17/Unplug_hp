import React from 'react';
import { Button } from "@/components/ui/button";
import { Sparkles, Rocket, CalendarDays, Wand2, Stars, Feather, BookOpen } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
      {/* Decorative floating elements */}
      <div className="absolute top-1/4 left-10 flying-key z-10">
        <Feather className="h-10 w-10 text-amber-300" style={{ transform: "rotate(30deg)" }} />
      </div>
      <div className="absolute bottom-1/3 right-10 flying-key z-10" style={{ animationDelay: "2s" }}>
        <Feather className="h-8 w-8 text-amber-300" style={{ transform: "rotate(-20deg)" }} />
      </div>
      <div className="absolute top-1/2 right-1/4 flying-key z-10" style={{ animationDelay: "3s" }}>
        <Feather className="h-6 w-6 text-amber-300" style={{ transform: "rotate(15deg)" }} />
      </div>
      
      {/* Magical glow effect in background */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        {/* Floating elements for magical effect */}
        <div className="absolute top-1/4 left-10 animate-float opacity-30">
          <Wand2 className="h-12 w-12 text-amber-300" style={{ animationDelay: "0.5s" }} />
        </div>
        <div className="absolute top-1/3 right-10 animate-float opacity-30" style={{ animationDelay: "1.2s" }}>
          <Sparkles className="h-10 w-10 text-amber-300" />
        </div>
        <div className="absolute bottom-1/4 left-1/4 animate-float opacity-30" style={{ animationDelay: "0.8s" }}>
          <Stars className="h-14 w-14 text-amber-300" />
        </div>
        <div className="absolute top-2/3 right-1/4 animate-float opacity-30" style={{ animationDelay: "1.5s" }}>
          <BookOpen className="h-10 w-10 text-amber-300" />
        </div>
        
        <div className="text-center relative z-10">
          <div className="inline-block mb-8 quill-decoration">
            <span className="text-xs uppercase tracking-wider bg-amber-600/80 text-white px-6 py-2 rounded-full 
              font-harry-potter border border-amber-300/30 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
              The Chamber of Entrepreneurship
            </span>
          </div>
          
          <h1 className="font-harry-potter text-5xl md:text-7xl font-bold mb-8 leading-tight text-white magical-text-shadow">
            <span className="text-amber-400">Hogwarts</span> Startup Launchpad
          </h1>
          
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-white/90 font-serif">
            Where <span className="italic text-amber-300">muggle technology</span> meets <span className="italic text-amber-300">magical innovation</span>. Join our wizarding community in the mountains for an enchanted journey of entrepreneurship that will transform your startup from a mere spell into a powerful business empire.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <Button className="font-harry-potter bg-gradient-to-r from-amber-600 to-amber-400 text-white text-lg px-8 py-6 h-auto shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] transition-all" size="lg">
              <Wand2 className="mr-2 h-5 w-5" />
              Cast Your Application
            </Button>
            <Button variant="outline" size="lg" className="font-harry-potter bg-transparent border-amber-400/50 text-amber-400 hover:bg-amber-400/10 text-lg px-8 py-6 h-auto transition-all">
              <CalendarDays className="mr-2 h-5 w-5" />
              View Magical Schedule
            </Button>
          </div>
        </div>
        
        {/* Hogwarts houses-inspired features */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center glass-card px-5 py-8 rounded-lg animate-float bg-gradient-to-b from-red-900/30 to-yellow-800/30 border border-yellow-600/30 backdrop-blur-sm">
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-r from-red-700 to-yellow-600 mb-4 shadow-glow">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-harry-potter text-xl text-white mb-2">Gryffindor</h3>
            <p className="text-white/80 text-center">Courage and leadership for bold entrepreneurs</p>
          </div>
          
          <div className="flex flex-col items-center glass-card px-5 py-8 rounded-lg animate-float bg-gradient-to-b from-yellow-900/30 to-black/30 border border-yellow-600/30 backdrop-blur-sm" style={{ animationDelay: "0.3s" }}>
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-r from-yellow-700 to-black mb-4 shadow-glow">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-harry-potter text-xl text-white mb-2">Hufflepuff</h3>
            <p className="text-white/80 text-center">Dedication and teamwork for sustainable growth</p>
          </div>
          
          <div className="flex flex-col items-center glass-card px-5 py-8 rounded-lg animate-float bg-gradient-to-b from-blue-900/30 to-gray-800/30 border border-blue-600/30 backdrop-blur-sm" style={{ animationDelay: "0.6s" }}>
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-700 to-gray-600 mb-4 shadow-glow">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-harry-potter text-xl text-white mb-2">Ravenclaw</h3>
            <p className="text-white/80 text-center">Innovation and wisdom for breakthrough ideas</p>
          </div>
          
          <div className="flex flex-col items-center glass-card px-5 py-8 rounded-lg animate-float bg-gradient-to-b from-green-900/30 to-gray-800/30 border border-green-600/30 backdrop-blur-sm" style={{ animationDelay: "0.9s" }}>
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-r from-green-700 to-gray-600 mb-4 shadow-glow">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-harry-potter text-xl text-white mb-2">Slytherin</h3>
            <p className="text-white/80 text-center">Ambition and strategy for market domination</p>
          </div>
        </div>
        
        {/* Additional magical decoration */}
        <div className="w-full max-w-xl mx-auto h-px mt-20 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-10 left-0 right-0 h-20 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
