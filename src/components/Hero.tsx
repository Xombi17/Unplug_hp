import React from 'react';
import { Button } from "@/components/ui/button";
import { Sparkles, Wand2, Stars, Feather, BookOpen, GraduationCap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Main background image for hero section */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hogwarts-legacy-3840x2160-10410.jpg" 
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
            <span className="text-amber-400">Hogwarts</span> Startup Launchpad
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
      
      {/* Houses section with a different background */}
      <div className="relative bg-gradient-to-b from-black/90 to-black/70 backdrop-blur-lg">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="/images/4K-Mountains-Night-Starry-Sky-Wallpaper-3840x2160.jpg" 
            alt="Night Sky" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-2">
              <GraduationCap className="h-12 w-12 mx-auto text-amber-400 mb-2" />
            </div>
            <h2 className="font-harry-potter text-3xl text-white mb-4 magical-text-shadow">The Four Pillars of Magical Entrepreneurship</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-12">Discover which Hogwarts house traits will drive your startup to success</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Gryffindor */}
            <div className="group cursor-pointer">
              <div className="flex flex-col items-center px-6 py-10 rounded-lg bg-gradient-to-b from-red-900/40 to-yellow-800/40 border-2 border-yellow-600/30 backdrop-blur-sm hover:bg-gradient-to-b hover:from-red-900/60 hover:to-yellow-800/60 transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-r from-red-700 to-yellow-600 mb-6 shadow-glow group-hover:shadow-[0_0_25px_rgba(245,158,11,0.7)] transition-all duration-300">
                  <Sparkles className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-harry-potter text-2xl text-white mb-3">Gryffindor</h3>
                <p className="text-white/80 text-center">Courage and leadership for bold entrepreneurial ventures</p>
              </div>
            </div>
            
            {/* Hufflepuff */}
            <div className="group cursor-pointer">
              <div className="flex flex-col items-center px-6 py-10 rounded-lg bg-gradient-to-b from-yellow-800/40 to-black/40 border-2 border-yellow-600/30 backdrop-blur-sm hover:bg-gradient-to-b hover:from-yellow-800/60 hover:to-black/60 transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-r from-yellow-600 to-black mb-6 shadow-glow group-hover:shadow-[0_0_25px_rgba(245,158,11,0.7)] transition-all duration-300">
                  <Sparkles className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-harry-potter text-2xl text-white mb-3">Hufflepuff</h3>
                <p className="text-white/80 text-center">Dedication and teamwork for sustainable business growth</p>
              </div>
            </div>
            
            {/* Ravenclaw */}
            <div className="group cursor-pointer">
              <div className="flex flex-col items-center px-6 py-10 rounded-lg bg-gradient-to-b from-blue-900/40 to-gray-800/40 border-2 border-blue-600/30 backdrop-blur-sm hover:bg-gradient-to-b hover:from-blue-900/60 hover:to-gray-800/60 transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-700 to-gray-600 mb-6 shadow-glow group-hover:shadow-[0_0_25px_rgba(245,158,11,0.7)] transition-all duration-300">
                  <BookOpen className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-harry-potter text-2xl text-white mb-3">Ravenclaw</h3>
                <p className="text-white/80 text-center">Innovation and wisdom for breakthrough ideas and strategies</p>
              </div>
            </div>
            
            {/* Slytherin */}
            <div className="group cursor-pointer">
              <div className="flex flex-col items-center px-6 py-10 rounded-lg bg-gradient-to-b from-green-900/40 to-gray-800/40 border-2 border-green-600/30 backdrop-blur-sm hover:bg-gradient-to-b hover:from-green-900/60 hover:to-gray-800/60 transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-r from-green-700 to-gray-600 mb-6 shadow-glow group-hover:shadow-[0_0_25px_rgba(245,158,11,0.7)] transition-all duration-300">
                  <Sparkles className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-harry-potter text-2xl text-white mb-3">Slytherin</h3>
                <p className="text-white/80 text-center">Ambition and cunning strategy for market domination</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative bottom fade */}
      <div className="relative h-24 bg-gradient-to-b from-black/70 to-transparent"></div>
    </section>
  );
};

export default Hero;
