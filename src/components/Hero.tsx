
import React from 'react';
import { Button } from "@/components/ui/button";
import { Wand, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="parchment max-w-4xl mx-auto p-8 md:p-12">
          <div className="flex flex-col items-center text-center">
            <h1 className="font-magical text-4xl md:text-6xl font-bold mb-6 leading-tight text-hogwarts-dark relative">
              <span className="text-gryffindor-primary">Wizarding</span> Startup Forge
              <Sparkles className="absolute -top-10 -right-10 text-secondary w-10 h-10 animate-glow hidden md:block" />
            </h1>
            
            <p className="text-lg md:text-xl mb-8 max-w-2xl">
              Where magical ideas transform into extraordinary startups. Enter our enchanted halls and let your entrepreneurial journey begin.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="magical-button" size="lg">
                <Wand className="mr-2 h-5 w-5" />
                Begin Your Journey
              </Button>
              <Button variant="outline" size="lg" className="font-magical">
                Discover Our Magic
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          <div className="flex items-center parchment px-6 py-4 animate-float">
            <div className="w-12 h-12 flex items-center justify-center bg-gryffindor-primary rounded-full mr-4">
              <span className="font-magical text-white text-xl">20+</span>
            </div>
            <div>
              <h3 className="font-magical font-medium">Startup Cohorts</h3>
              <p className="text-sm text-muted-foreground">Completed training</p>
            </div>
          </div>
          
          <div className="flex items-center parchment px-6 py-4 animate-float" style={{ animationDelay: "0.3s" }}>
            <div className="w-12 h-12 flex items-center justify-center bg-slytherin-primary rounded-full mr-4">
              <span className="font-magical text-white text-xl">$5M</span>
            </div>
            <div>
              <h3 className="font-magical font-medium">Funding Raised</h3>
              <p className="text-sm text-muted-foreground">By our startups</p>
            </div>
          </div>
          
          <div className="flex items-center parchment px-6 py-4 animate-float" style={{ animationDelay: "0.6s" }}>
            <div className="w-12 h-12 flex items-center justify-center bg-ravenclaw-primary rounded-full mr-4">
              <span className="font-magical text-white text-xl">95%</span>
            </div>
            <div>
              <h3 className="font-magical font-medium">Success Rate</h3>
              <p className="text-sm text-muted-foreground">For our graduates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
