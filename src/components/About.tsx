import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Wand, Mountain, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 font-magical px-4 py-1 bg-white/10 text-white border-amber-400/30">About Us</Badge>
          <h2 className="font-magical text-3xl md:text-5xl font-bold mb-6 text-white">Where Magic Meets Innovation</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="glass-card p-8 bg-black/40 border border-amber-400/30 rounded-lg backdrop-blur-md">
            <div className="flex items-center mb-4">
              <Wand className="w-6 h-6 text-amber-400 mr-3" />
              <h3 className="text-2xl font-magical text-white">Our Vision</h3>
            </div>
            <p className="text-white/90 mb-6">
              Nestled in the majestic mountains, our startup launchpad transforms entrepreneurial visions into reality. We've created a magical environment where innovation flourishes and startups soar to new heights.
            </p>
            <div className="flex items-center mb-4">
              <Mountain className="w-6 h-6 text-amber-400 mr-3" />
              <h3 className="text-2xl font-magical text-white">The Location</h3>
            </div>
            <p className="text-white/90">
              Our mountaintop sanctuary offers the perfect blend of isolation and inspiration. Far from the distractions of the muggle world, entrepreneurs can focus on developing their magical ideas while surrounded by breathtaking natural beauty.
            </p>
          </div>
          
          <div className="glass-card p-8 bg-black/40 border border-amber-400/30 rounded-lg backdrop-blur-md">
            <h3 className="text-2xl font-magical text-white mb-4">Why Choose Us</h3>
            <ul className="space-y-4 text-white/90">
              <li className="flex items-start">
                <span className="text-amber-400 mr-2 font-bold">•</span>
                <span>Access to a network of distinguished mentors and industry professionals</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2 font-bold">•</span>
                <span>Specialized workshops on magical innovation and entrepreneurship</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2 font-bold">•</span>
                <span>Connections to venture capitalists and potential investors</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2 font-bold">•</span>
                <span>State-of-the-art facilities with a touch of Hogwarts magic</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2 font-bold">•</span>
                <span>A supportive community of like-minded magical entrepreneurs</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
