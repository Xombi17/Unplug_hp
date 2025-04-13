
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Wand, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 font-magical px-4 py-1 bg-white/10 text-white">About Unplug</Badge>
          <h2 className="font-magical text-3xl md:text-5xl font-bold mb-6 text-white">The Magical Break You Deserve</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="glass-card p-8">
            <div className="flex items-center mb-4">
              <Wand className="w-6 h-6 text-secondary mr-3" />
              <h3 className="text-2xl font-magical text-white">Our Mission</h3>
            </div>
            <p className="text-white/90 mb-6">
              In a world overwhelmed by technology, the Room of Requirement has prepared a magical escape. We invite you to step away from your screens and reconnect with the enchantment of human connection.
            </p>
            <div className="flex items-center mb-4">
              <Sparkles className="w-6 h-6 text-secondary mr-3" />
              <h3 className="text-2xl font-magical text-white">The Experience</h3>
            </div>
            <p className="text-white/90">
              Unplug is not just an event—it's a magical journey. Join fellow wizards and witches for a day filled with analog games, potion-making (mocktails), enchanted conversations, and moments of genuine connection that digital magic simply cannot replicate.
            </p>
          </div>
          
          <div className="glass-card p-8">
            <h3 className="text-2xl font-magical text-white mb-4">What to Expect</h3>
            <ul className="space-y-4 text-white/90">
              <li className="flex items-start">
                <span className="text-secondary mr-2 font-bold">•</span>
                <span>Screen-free activities that spark joy and creativity</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2 font-bold">•</span>
                <span>Magical board games and wizard challenges</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2 font-bold">•</span>
                <span>Delicious treats and enchanted refreshments</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2 font-bold">•</span>
                <span>Meaningful connections with fellow magical beings</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2 font-bold">•</span>
                <span>A chance to rediscover the magic that exists beyond screens</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
