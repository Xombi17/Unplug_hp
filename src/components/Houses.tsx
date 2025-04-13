
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Rocket, Shield, Star } from "lucide-react";

const Houses = () => {
  return (
    <section id="houses" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 font-magical px-4 py-1">Choose Your Path</Badge>
          <h2 className="font-magical text-3xl md:text-5xl font-bold mb-6">Hogwarts Houses of Innovation</h2>
          <p className="max-w-2xl mx-auto text-lg">
            Like the four houses of Hogwarts, our startup tracks are designed to nurture different entrepreneurial strengths.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Gryffindor */}
          <div className="house-card gryffindor-card">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-magical text-2xl font-bold">Gryffindor</h3>
              <Rocket className="w-8 h-8" />
            </div>
            <p className="mb-6 text-gryffindor-secondary">For the brave and bold founders who take risks and challenge the status quo.</p>
            <ul className="mb-8 space-y-2">
              <li className="flex items-center">
                <span className="text-gryffindor-secondary mr-2">•</span>
                <span>Risk-takers & Visionaries</span>
              </li>
              <li className="flex items-center">
                <span className="text-gryffindor-secondary mr-2">•</span>
                <span>Disruptive Technologies</span>
              </li>
              <li className="flex items-center">
                <span className="text-gryffindor-secondary mr-2">•</span>
                <span>High Growth Potential</span>
              </li>
            </ul>
            <Button className="w-full bg-gryffindor-secondary text-gryffindor-primary hover:bg-gryffindor-secondary/90 font-magical">
              Apply to Gryffindor
            </Button>
          </div>
          
          {/* Slytherin */}
          <div className="house-card slytherin-card">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-magical text-2xl font-bold">Slytherin</h3>
              <Star className="w-8 h-8" />
            </div>
            <p className="mb-6 text-slytherin-secondary">For the ambitious and strategic founders seeking to build influential ventures.</p>
            <ul className="mb-8 space-y-2">
              <li className="flex items-center">
                <span className="text-slytherin-secondary mr-2">•</span>
                <span>Strategic & Ambitious</span>
              </li>
              <li className="flex items-center">
                <span className="text-slytherin-secondary mr-2">•</span>
                <span>Market Dominators</span>
              </li>
              <li className="flex items-center">
                <span className="text-slytherin-secondary mr-2">•</span>
                <span>Business Model Innovation</span>
              </li>
            </ul>
            <Button className="w-full bg-slytherin-secondary text-slytherin-primary hover:bg-slytherin-secondary/90 font-magical">
              Apply to Slytherin
            </Button>
          </div>
          
          {/* Ravenclaw */}
          <div className="house-card ravenclaw-card">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-magical text-2xl font-bold">Ravenclaw</h3>
              <Brain className="w-8 h-8" />
            </div>
            <p className="mb-6 text-ravenclaw-secondary">For the creative and analytical founders who solve complex problems.</p>
            <ul className="mb-8 space-y-2">
              <li className="flex items-center">
                <span className="text-ravenclaw-secondary mr-2">•</span>
                <span>Innovative Problem Solvers</span>
              </li>
              <li className="flex items-center">
                <span className="text-ravenclaw-secondary mr-2">•</span>
                <span>Technical Excellence</span>
              </li>
              <li className="flex items-center">
                <span className="text-ravenclaw-secondary mr-2">•</span>
                <span>Research-Based Startups</span>
              </li>
            </ul>
            <Button className="w-full bg-ravenclaw-secondary text-ravenclaw-primary hover:bg-ravenclaw-secondary/90 font-magical">
              Apply to Ravenclaw
            </Button>
          </div>
          
          {/* Hufflepuff */}
          <div className="house-card hufflepuff-card">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-magical text-2xl font-bold">Hufflepuff</h3>
              <Shield className="w-8 h-8" />
            </div>
            <p className="mb-6 text-hufflepuff-secondary">For the dedicated and loyal founders focused on sustainable growth.</p>
            <ul className="mb-8 space-y-2">
              <li className="flex items-center">
                <span className="text-hufflepuff-secondary mr-2">•</span>
                <span>Community-Centered</span>
              </li>
              <li className="flex items-center">
                <span className="text-hufflepuff-secondary mr-2">•</span>
                <span>Impact-Driven</span>
              </li>
              <li className="flex items-center">
                <span className="text-hufflepuff-secondary mr-2">•</span>
                <span>Sustainable Business Models</span>
              </li>
            </ul>
            <Button className="w-full bg-hufflepuff-secondary text-hufflepuff-primary hover:bg-hufflepuff-secondary/90 font-magical">
              Apply to Hufflepuff
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Houses;
