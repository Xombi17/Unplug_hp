import React from 'react';
import { 
  LinkedinIcon, 
  TwitterIcon, 
  GlobeIcon,
  Sparkles,
  Stars,
  Wand2
} from "lucide-react";

const Mentors = () => {
  return (
    <section id="mentors" className="py-32 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/mountains.jpg" 
          alt="Hogwarts Great Hall" 
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black/80"></div>
      </div>
      
      {/* Magical particles */}
      <div className="absolute top-1/4 right-20 animate-float opacity-50" style={{ animationDuration: "4s" }}>
        <Sparkles className="h-10 w-10 text-sky-300/50" />
      </div>
      <div className="absolute bottom-1/3 left-20 animate-float opacity-40" style={{ animationDelay: "2s", animationDuration: "6s" }}>
        <Stars className="h-8 w-8 text-sky-300/50" />
      </div>
      <div className="absolute top-2/3 right-1/4 animate-float opacity-50" style={{ animationDelay: "1s", animationDuration: "5s" }}>
        <Wand2 className="h-6 w-6 text-sky-300/50" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div data-gsap-anim="fade-down" data-gsap-delay="0.1" className="inline-block mb-4">
            <span className="text-xs uppercase tracking-wider bg-sky-700/80 text-white px-6 py-2 rounded-full 
              font-harry-potter border border-sky-300/50 shadow-[0_0_15px_rgba(14,165,233,0.5)]">
              Our Faculty
            </span>
          </div>
          
          <h2 data-gsap-anim="fade-up" data-gsap-delay="0.2" className="text-5xl md:text-6xl font-bold mb-6 font-harry-potter magical-text-shadow">
            <span className="text-sky-400">Distinguished</span> Professors
          </h2>
          
          <p data-gsap-anim="fade-up" data-gsap-delay="0.3" className="text-lg text-white/80 max-w-2xl mx-auto">
            Learn from the brightest minds in the wizarding entrepreneurial world
          </p>
        </div>
        
        <div data-gsap-stagger="0.15" data-gsap-anim="fade-up" className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {mentors.map((mentor, index) => (
            <div 
              key={index}
              data-gsap-stagger-item
              className="group"
            >
              <div className="h-96 rounded-xl overflow-hidden relative mb-8 transform transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(14,165,233,0.4)]">
                <img 
                  src={mentor.image} 
                  alt={mentor.name} 
                  className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80"></div>
                
                {/* Magical glow */}
                <div className="absolute inset-0 bg-sky-600/10 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-500">
                  <h3 className="text-2xl font-harry-potter font-bold text-white mb-1">{mentor.name}</h3>
                  <p className="text-sky-400 mb-4">{mentor.role}</p>
                  <p className="text-white/80 mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    {mentor.description}
                  </p>
                  
                  {/* Social links */}
                  <div className="flex space-x-3 items-center">
                    <a href="#" className="w-10 h-10 rounded-full bg-sky-800/50 border border-sky-400/30 flex items-center justify-center hover:bg-sky-600/30 transition-colors duration-300">
                      <LinkedinIcon className="w-5 h-5 text-white" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-sky-800/50 border border-sky-400/30 flex items-center justify-center hover:bg-sky-600/30 transition-colors duration-300">
                      <TwitterIcon className="w-5 h-5 text-white" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-sky-800/50 border border-sky-400/30 flex items-center justify-center hover:bg-sky-600/30 transition-colors duration-300">
                      <GlobeIcon className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div data-gsap-anim="fade-up" data-gsap-delay="0.6" className="mt-16 text-center">
          <a href="#" className="inline-block py-4 px-8 font-harry-potter rounded-full bg-gradient-to-r from-sky-800/80 to-sky-600/80 text-white border border-sky-400/50 shadow-[0_0_15px_rgba(14,165,233,0.3)] hover:shadow-[0_0_25px_rgba(14,165,233,0.5)] transition-all">
            Meet All Professors
          </a>
        </div>
      </div>
    </section>
  );
};

const mentors = [
  {
    name: "Harry Potter",
    role: "Innovation Specialist",
    description: "Renowned for defeating dark challenges, Harry brings his problem-solving expertise to help startups overcome obstacles.",
    image: "/images/harry3.jpg"
  },
  {
    name: "Hermione Granger",
    role: "Strategic Planning Expert",
    description: "With her exceptional analytical skills, Hermione helps founders develop robust business strategies and execution plans.",
    image: "/images/hermo.jpg"
  },
  {
    name: "Ron Weasley",
    role: "Networking Specialist",
    description: "With deep connections in the wizarding world, Ron helps startups build networks and form valuable partnerships.",
    image: "/images/ronald.jpg"
  }
];

export default Mentors; 