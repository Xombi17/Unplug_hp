import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Users, Presentation, Lightbulb, Landmark, BookOpen, Trophy } from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hogwarts-library.jpg" 
          alt="Hogwarts Library" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/80"></div>
      </div>
      
      {/* Floating magical elements */}
      <div className="absolute top-1/4 left-10 animate-float opacity-30">
        <img src="/images/quill.png" alt="Floating Quill" className="h-12 w-12" />
      </div>
      <div className="absolute bottom-1/3 right-10 animate-float opacity-20" style={{ animationDelay: "2s" }}>
        <img src="/images/potion.png" alt="Floating Potion" className="h-10 w-10" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 font-harry-potter px-4 py-1 bg-sky-900/30 text-sky-300 border-sky-400/30">Magical Services</Badge>
          <h2 className="font-harry-potter text-3xl md:text-5xl font-bold mb-6 text-white">
            <span className="text-sky-400">Enchanted</span> Offerings
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto font-serif">
            Discover our collection of magical services designed to transform your startup from a mere muggle idea into a thriving wizarding enterprise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Networking Events - Styled as Great Hall */}
          <div className="parchment-card p-8 bg-gradient-to-b from-sky-900/40 to-sky-800/20 border border-sky-400/30 rounded-lg backdrop-blur-md group hover:border-sky-400/60 transition-all shadow-[0_0_15px_rgba(14,165,233,0.2)]">
            <div className="w-14 h-14 rounded-full bg-sky-600/20 flex items-center justify-center mb-6 group-hover:bg-sky-600/40 transition-all border border-sky-500/30">
              <Users className="w-7 h-7 text-sky-400" />
            </div>
            <h3 className="text-xl font-harry-potter font-bold text-sky-300 mb-3">The Great Hall Gatherings</h3>
            <p className="text-white/80 font-serif">
              Connect with industry wizards, fellow entrepreneurs, and potential collaborators in our enchanted networking sessions, reminiscent of Hogwarts' Great Hall.
            </p>
          </div>
          
          {/* Workshops - Styled as Defense Against the Dark Arts */}
          <div className="parchment-card p-8 bg-gradient-to-b from-sky-900/40 to-sky-800/20 border border-sky-400/30 rounded-lg backdrop-blur-md group hover:border-sky-400/60 transition-all shadow-[0_0_15px_rgba(14,165,233,0.2)]">
            <div className="w-14 h-14 rounded-full bg-sky-600/20 flex items-center justify-center mb-6 group-hover:bg-sky-600/40 transition-all border border-sky-500/30">
              <Presentation className="w-7 h-7 text-sky-400" />
            </div>
            <h3 className="text-xl font-harry-potter font-bold text-sky-300 mb-3">Defense Against Business Challenges</h3>
            <p className="text-white/80 font-serif">
              Master the art of defending your startup against common pitfalls through specialized workshops led by experienced professors of entrepreneurship.
            </p>
          </div>
          
          {/* Innovation Labs - Styled as Potions Class */}
          <div className="parchment-card p-8 bg-gradient-to-b from-sky-900/40 to-sky-800/20 border border-sky-400/30 rounded-lg backdrop-blur-md group hover:border-sky-400/60 transition-all shadow-[0_0_15px_rgba(14,165,233,0.2)]">
            <div className="w-14 h-14 rounded-full bg-sky-600/20 flex items-center justify-center mb-6 group-hover:bg-sky-600/40 transition-all border border-sky-500/30">
              <Lightbulb className="w-7 h-7 text-sky-400" />
            </div>
            <h3 className="text-xl font-harry-potter font-bold text-sky-300 mb-3">The Potions Laboratory</h3>
            <p className="text-white/80 font-serif">
              Brew your innovative ideas to perfection in our state-of-the-art innovation cauldrons, where you can test and refine your magical products and services.
            </p>
          </div>
          
          {/* Investment - Styled as Gringotts */}
          <div className="parchment-card p-8 bg-gradient-to-b from-sky-900/40 to-sky-800/20 border border-sky-400/30 rounded-lg backdrop-blur-md group hover:border-sky-400/60 transition-all shadow-[0_0_15px_rgba(14,165,233,0.2)]">
            <div className="w-14 h-14 rounded-full bg-sky-600/20 flex items-center justify-center mb-6 group-hover:bg-sky-600/40 transition-all border border-sky-500/30">
              <Landmark className="w-7 h-7 text-sky-400" />
            </div>
            <h3 className="text-xl font-harry-potter font-bold text-sky-300 mb-3">Gringotts Investment Vault</h3>
            <p className="text-white/80 font-serif">
              Present your startup to our network of goblin bankers and wizard investors looking to fill their vaults with the next magical innovation.
            </p>
          </div>
          
          {/* Mentorship - Styled as Dumbledore's Office */}
          <div className="parchment-card p-8 bg-gradient-to-b from-sky-900/40 to-sky-800/20 border border-sky-400/30 rounded-lg backdrop-blur-md group hover:border-sky-400/60 transition-all shadow-[0_0_15px_rgba(14,165,233,0.2)]">
            <div className="w-14 h-14 rounded-full bg-sky-600/20 flex items-center justify-center mb-6 group-hover:bg-sky-600/40 transition-all border border-sky-500/30">
              <BookOpen className="w-7 h-7 text-sky-400" />
            </div>
            <h3 className="text-xl font-harry-potter font-bold text-sky-300 mb-3">Headmaster's Guidance</h3>
            <p className="text-white/80 font-serif">
              Receive wisdom from our experienced mentors who, like Dumbledore, will help navigate the complex challenges of building a successful magical enterprise.
            </p>
          </div>
          
          {/* Competitions - Styled as Triwizard Tournament */}
          <div className="parchment-card p-8 bg-gradient-to-b from-sky-900/40 to-sky-800/20 border border-sky-400/30 rounded-lg backdrop-blur-md group hover:border-sky-400/60 transition-all shadow-[0_0_15px_rgba(14,165,233,0.2)]">
            <div className="w-14 h-14 rounded-full bg-sky-600/20 flex items-center justify-center mb-6 group-hover:bg-sky-600/40 transition-all border border-sky-500/30">
              <Trophy className="w-7 h-7 text-sky-400" />
            </div>
            <h3 className="text-xl font-harry-potter font-bold text-sky-300 mb-3">The Triwizard Business Cup</h3>
            <p className="text-white/80 font-serif">
              Enter your startup in our prestigious competition where champions emerge with funding galleons, magical resources, and recognition throughout the wizarding business world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 