import React from 'react';
import { Badge } from "@/components/ui/badge";
import { 
  LinkedinIcon, 
  TwitterIcon, 
  GlobeIcon 
} from "lucide-react";

const Mentors = () => {
  return (
    <section id="mentors" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 font-magical px-4 py-1 bg-white/10 text-white border-amber-400/30">Our Team</Badge>
          <h2 className="font-magical text-3xl md:text-5xl font-bold mb-6 text-white">Distinguished Mentors & Speakers</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Learn from the brightest minds in the wizarding entrepreneurial world who will guide you on your startup journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="glass-card p-6 bg-black/40 border border-amber-400/30 rounded-lg backdrop-blur-md group hover:border-amber-400/60 transition-all">
            <div className="relative mb-6 overflow-hidden rounded-lg">
              <img src="/images/hogwarts-harry-3840x2160-13694.jpg" alt="Mentor" className="w-full h-64 object-cover object-top" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="flex space-x-2">
                  <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                    <LinkedinIcon className="w-4 h-4 text-white" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                    <TwitterIcon className="w-4 h-4 text-white" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                    <GlobeIcon className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-magical font-bold text-white mb-1">Harry Potter</h3>
            <p className="text-amber-400 mb-3">Innovation Specialist</p>
            <p className="text-white/80">
              Renowned for defeating dark challenges, Harry brings his problem-solving expertise to help startups overcome obstacles and achieve success.
            </p>
          </div>
          
          <div className="glass-card p-6 bg-black/40 border border-amber-400/30 rounded-lg backdrop-blur-md group hover:border-amber-400/60 transition-all">
            <div className="relative mb-6 overflow-hidden rounded-lg">
              <img src="/images/hogwarts-legacy-3840x2160-10410.jpg" alt="Mentor" className="w-full h-64 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="flex space-x-2">
                  <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                    <LinkedinIcon className="w-4 h-4 text-white" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                    <TwitterIcon className="w-4 h-4 text-white" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                    <GlobeIcon className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-magical font-bold text-white mb-1">Hermione Granger</h3>
            <p className="text-amber-400 mb-3">Strategic Planning Expert</p>
            <p className="text-white/80">
              With her exceptional analytical skills and resourcefulness, Hermione helps founders develop robust business strategies and execution plans.
            </p>
          </div>
          
          <div className="glass-card p-6 bg-black/40 border border-amber-400/30 rounded-lg backdrop-blur-md group hover:border-amber-400/60 transition-all">
            <div className="relative mb-6 overflow-hidden rounded-lg">
              <img src="/images/WallpaperDog-657235.jpg" alt="Mentor" className="w-full h-64 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="flex space-x-2">
                  <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                    <LinkedinIcon className="w-4 h-4 text-white" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                    <TwitterIcon className="w-4 h-4 text-white" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                    <GlobeIcon className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-magical font-bold text-white mb-1">Ron Weasley</h3>
            <p className="text-amber-400 mb-3">Networking Specialist</p>
            <p className="text-white/80">
              With deep connections in the wizarding world, Ron helps startups build their networks and form valuable partnerships.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-white/70 mb-8">Join our growing network of mentors and industry experts</p>
          <a href="#" className="font-magical inline-block py-3 px-6 rounded-lg border border-amber-400/50 text-amber-400 hover:bg-amber-400/10 transition-colors">
            View All Mentors
          </a>
        </div>
      </div>
    </section>
  );
};

export default Mentors; 