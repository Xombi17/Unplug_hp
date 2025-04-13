import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Users, Presentation, Lightbulb, Landmark, BookOpen, Trophy } from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 font-magical px-4 py-1 bg-white/10 text-white border-amber-400/30">Services</Badge>
          <h2 className="font-magical text-3xl md:text-5xl font-bold mb-6 text-white">Magical Services We Offer</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Our comprehensive services are designed to transform your startup from a mere idea into a thriving magical enterprise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="glass-card p-8 bg-black/40 border border-amber-400/30 rounded-lg backdrop-blur-md group hover:border-amber-400/60 transition-all">
            <div className="w-14 h-14 rounded-lg bg-amber-600/20 flex items-center justify-center mb-6 group-hover:bg-amber-600/40 transition-all">
              <Users className="w-7 h-7 text-amber-400" />
            </div>
            <h3 className="text-xl font-magical font-bold text-white mb-3">Networking Events</h3>
            <p className="text-white/80">
              Connect with industry professionals, fellow entrepreneurs, and potential collaborators in our specially designed networking sessions.
            </p>
          </div>
          
          <div className="glass-card p-8 bg-black/40 border border-amber-400/30 rounded-lg backdrop-blur-md group hover:border-amber-400/60 transition-all">
            <div className="w-14 h-14 rounded-lg bg-amber-600/20 flex items-center justify-center mb-6 group-hover:bg-amber-600/40 transition-all">
              <Presentation className="w-7 h-7 text-amber-400" />
            </div>
            <h3 className="text-xl font-magical font-bold text-white mb-3">Workshops & Training</h3>
            <p className="text-white/80">
              Participate in specialized workshops and training sessions led by experienced wizards from various industry backgrounds.
            </p>
          </div>
          
          <div className="glass-card p-8 bg-black/40 border border-amber-400/30 rounded-lg backdrop-blur-md group hover:border-amber-400/60 transition-all">
            <div className="w-14 h-14 rounded-lg bg-amber-600/20 flex items-center justify-center mb-6 group-hover:bg-amber-600/40 transition-all">
              <Lightbulb className="w-7 h-7 text-amber-400" />
            </div>
            <h3 className="text-xl font-magical font-bold text-white mb-3">Innovation Labs</h3>
            <p className="text-white/80">
              Access our state-of-the-art innovation laboratories to develop, test, and refine your magical products and services.
            </p>
          </div>
          
          <div className="glass-card p-8 bg-black/40 border border-amber-400/30 rounded-lg backdrop-blur-md group hover:border-amber-400/60 transition-all">
            <div className="w-14 h-14 rounded-lg bg-amber-600/20 flex items-center justify-center mb-6 group-hover:bg-amber-600/40 transition-all">
              <Landmark className="w-7 h-7 text-amber-400" />
            </div>
            <h3 className="text-xl font-magical font-bold text-white mb-3">Investment Opportunities</h3>
            <p className="text-white/80">
              Present your startup to our network of venture capitalists and angel investors looking for the next magical innovation.
            </p>
          </div>
          
          <div className="glass-card p-8 bg-black/40 border border-amber-400/30 rounded-lg backdrop-blur-md group hover:border-amber-400/60 transition-all">
            <div className="w-14 h-14 rounded-lg bg-amber-600/20 flex items-center justify-center mb-6 group-hover:bg-amber-600/40 transition-all">
              <BookOpen className="w-7 h-7 text-amber-400" />
            </div>
            <h3 className="text-xl font-magical font-bold text-white mb-3">Mentorship Programs</h3>
            <p className="text-white/80">
              Receive guidance from our experienced mentors who will help navigate the challenges of building a successful startup.
            </p>
          </div>
          
          <div className="glass-card p-8 bg-black/40 border border-amber-400/30 rounded-lg backdrop-blur-md group hover:border-amber-400/60 transition-all">
            <div className="w-14 h-14 rounded-lg bg-amber-600/20 flex items-center justify-center mb-6 group-hover:bg-amber-600/40 transition-all">
              <Trophy className="w-7 h-7 text-amber-400" />
            </div>
            <h3 className="text-xl font-magical font-bold text-white mb-3">Startup Competitions</h3>
            <p className="text-white/80">
              Showcase your business in our competitive events with opportunities to win funding, resources, and valuable exposure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 