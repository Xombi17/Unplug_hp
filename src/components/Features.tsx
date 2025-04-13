import React from 'react';
import { Sparkles, Stars, Wand2, Zap, Beaker, Lightbulb } from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="py-32 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hermo.jpg" 
          alt="Hogwarts Library" 
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black/80"></div>
      </div>
      
      {/* Magical particles */}
      <div className="absolute top-1/4 left-10 animate-float opacity-50" style={{ animationDuration: "4s" }}>
        <Sparkles className="h-10 w-10 text-sky-300/50" />
      </div>
      <div className="absolute bottom-1/3 right-10 animate-float opacity-40" style={{ animationDelay: "2s", animationDuration: "6s" }}>
        <Stars className="h-8 w-8 text-sky-300/50" />
      </div>
      <div className="absolute top-2/3 left-1/4 animate-float opacity-50" style={{ animationDelay: "1s", animationDuration: "5s" }}>
        <Sparkles className="h-6 w-6 text-sky-300/50" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div data-gsap-anim="fade-down" data-gsap-delay="0.1" className="inline-block mb-4">
            <span className="text-xs uppercase tracking-wider bg-sky-700/80 text-white px-6 py-2 rounded-full 
              font-harry-potter border border-sky-300/50 shadow-[0_0_15px_rgba(14,165,233,0.5)]">
              Magical Experience
            </span>
          </div>
          
          <h2 data-gsap-anim="fade-up" data-gsap-delay="0.2" className="text-5xl md:text-6xl font-bold mb-6 font-harry-potter magical-text-shadow">
            The <span className="text-sky-400">Magic</span> We Offer
          </h2>
        </div>
        
        <div data-gsap-stagger="0.15" data-gsap-anim="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {minimalisticFeatures.map((feature, index) => (
            <div 
              key={index}
              data-gsap-stagger-item
              className="group flex flex-col items-center text-center transform transition-all duration-300 hover:translate-y-[-8px]"
            >
              <div className="h-20 w-20 rounded-full bg-gradient-to-br from-sky-600 to-sky-400 flex items-center justify-center mb-8 shadow-[0_0_25px_rgba(14,165,233,0.5)] group-hover:shadow-[0_0_35px_rgba(14,165,233,0.7)] transition-all">
                {React.createElement(feature.icon, { className: "h-10 w-10 text-white" })}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 font-harry-potter text-white group-hover:text-sky-400 transition-colors">{feature.title}</h3>
              
              <p className="text-white/70 max-w-xs mx-auto">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const minimalisticFeatures = [
  {
    icon: Wand2,
    title: "Magical Workshops",
    description: "Interactive sessions with industry wizards to master the spells of entrepreneurship and innovation."
  },
  {
    icon: Stars,
    title: "Elite Networking",
    description: "Connect with like-minded magical entrepreneurs and forge powerful alliances for your journey."
  },
  {
    icon: Zap,
    title: "Spell-binding Talks",
    description: "Enlightening discussions that will spark your creative magic and inspire breakthrough innovations."
  },
  {
    icon: Beaker,
    title: "Innovation Lab",
    description: "Collaborative cauldrons where teams brew solutions for real-world challenges and opportunities."
  },
  {
    icon: Lightbulb,
    title: "Idea Illumination",
    description: "Transform sparks into brilliant magical concepts ready to change the wizarding world."
  },
  {
    icon: Sparkles,
    title: "Enchanted Setting",
    description: "An immersive mountain sanctuary that fosters creativity, connection, and magical thinking."
  }
];

export default Features; 