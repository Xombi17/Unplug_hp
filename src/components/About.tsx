import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Wand, Mountain, Sparkles, Shield, Star, Landmark } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/WallpaperDog-9189.jpg" 
          alt="Mountain Castle" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 font-harry-potter px-6 py-2 bg-amber-900/40 text-white border-amber-400/40 shadow-glow">About Our Magical Sanctuary</Badge>
          <h2 className="font-harry-potter text-4xl md:text-6xl font-bold mb-6 text-white magical-text-shadow">Where Magic Meets Innovation</h2>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
            Our enchanted mountain retreat provides the perfect environment for visionary startup wizards
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="p-1 rounded-lg bg-gradient-to-br from-amber-600/50 via-amber-500/30 to-amber-600/50 shadow-glow">
            <div className="bg-black/80 backdrop-blur-md p-8 rounded-lg border border-amber-500/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-amber-700/60 mr-4 shadow-glow">
                  <Wand className="w-6 h-6 text-amber-300" />
                </div>
                <h3 className="text-2xl font-harry-potter text-amber-400">Our Vision</h3>
              </div>
              <p className="text-white/90 mb-8 text-lg">
                Nestled in the majestic mountains, our startup launchpad transforms entrepreneurial visions into reality. We've created a magical environment where innovation flourishes and startups soar to new heights like a Phoenix rising from the ashes.
              </p>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-amber-700/60 mr-4 shadow-glow">
                  <Mountain className="w-6 h-6 text-amber-300" />
                </div>
                <h3 className="text-2xl font-harry-potter text-amber-400">The Location</h3>
              </div>
              <p className="text-white/90 text-lg">
                Our mountaintop sanctuary offers the perfect blend of isolation and inspiration. Far from the distractions of the muggle world, entrepreneurs can focus on developing their magical ideas while surrounded by breathtaking natural beauty that rivals the views from the Astronomy Tower.
              </p>
            </div>
          </div>
          
          <div className="p-1 rounded-lg bg-gradient-to-br from-amber-600/50 via-amber-500/30 to-amber-600/50 shadow-glow">
            <div className="bg-black/80 backdrop-blur-md p-8 rounded-lg border border-amber-500/20">
              <h3 className="text-2xl font-harry-potter text-amber-400 mb-6 flex items-center">
                <Shield className="w-6 h-6 text-amber-300 mr-3" />
                Why Choose Our Magical Launchpad
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="mt-1 w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center bg-amber-800/40 mr-4">
                    <Star className="w-4 h-4 text-amber-300" />
                  </div>
                  <div>
                    <h4 className="font-harry-potter text-white mb-1">Distinguished Network</h4>
                    <p className="text-white/80">Access to a network of distinguished mentors and magical industry professionals</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center bg-amber-800/40 mr-4">
                    <Star className="w-4 h-4 text-amber-300" />
                  </div>
                  <div>
                    <h4 className="font-harry-potter text-white mb-1">Magical Innovation</h4>
                    <p className="text-white/80">Specialized workshops on wizarding innovation and entrepreneurial spellcraft</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center bg-amber-800/40 mr-4">
                    <Landmark className="w-4 h-4 text-amber-300" />
                  </div>
                  <div>
                    <h4 className="font-harry-potter text-white mb-1">Investment Opportunities</h4>
                    <p className="text-white/80">Connections to Gringotts-backed venture capitalists and potential investors</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center bg-amber-800/40 mr-4">
                    <Star className="w-4 h-4 text-amber-300" />
                  </div>
                  <div>
                    <h4 className="font-harry-potter text-white mb-1">Enchanted Facilities</h4>
                    <p className="text-white/80">State-of-the-art facilities with a touch of Hogwarts magic and Room of Requirement flexibility</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
