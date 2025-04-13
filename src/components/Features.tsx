import React from 'react';
import { Sparkles, Stars, Wand2, Zap, Beaker, Code, Lightbulb, BookOpen, Users } from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div data-gsap-anim="fade-down" data-gsap-delay="0.1" className="inline-block mb-4">
            <span className="text-xs uppercase tracking-wider bg-sky-700/80 text-white px-6 py-2 rounded-full 
              font-harry-potter border border-sky-300/50 shadow-[0_0_15px_rgba(14,165,233,0.5)]">
              Magical Experience
            </span>
          </div>
          
          <h2 data-gsap-anim="fade-up" data-gsap-delay="0.2" className="text-5xl md:text-6xl font-bold mb-6 font-harry-potter magical-text-shadow">
            What Makes <span className="text-sky-400">Unplug</span> Special
          </h2>
          
          <div data-gsap-anim="fade-up" data-gsap-delay="0.3" className="h-1 w-24 bg-gradient-to-r from-sky-500 to-sky-300 mb-10 mx-auto"></div>
          
          <p data-gsap-anim="fade-up" data-gsap-delay="0.4" className="max-w-3xl mx-auto text-lg text-white/80">
            Experience the enchantment of technology and entrepreneurship in our three-day magical retreat
          </p>
        </div>
        
        <div data-gsap-stagger="0.1" data-gsap-anim="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              data-gsap-stagger-item
              className="bg-gradient-to-br from-sky-800/10 via-sky-900/10 to-sky-800/10 rounded-xl p-8 border border-sky-700/30 backdrop-blur-sm
                hover:shadow-[0_0_25px_rgba(14,165,233,0.2)] transition-all duration-300"
            >
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-sky-600 to-sky-400 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(14,165,233,0.5)]">
                {React.createElement(feature.icon, { className: "h-8 w-8 text-white" })}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 font-harry-potter">{feature.title}</h3>
              
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const features = [
  {
    icon: Wand2,
    title: "Magical Workshops",
    description: "Interactive sessions led by industry wizards to help you master the spell of entrepreneurship."
  },
  {
    icon: Stars,
    title: "Networking Potions",
    description: "Mix and mingle with like-minded magical entrepreneurs and forge lasting connections."
  },
  {
    icon: Zap,
    title: "Spell-binding Talks",
    description: "Enlightening discussions that will spark your creative magic and inspire innovation."
  },
  {
    icon: Beaker,
    title: "Innovation Cauldron",
    description: "Collaborative problem-solving activities that brew solutions for real-world challenges."
  },
  {
    icon: Code,
    title: "Tech Incantations",
    description: "Learn the latest technical spells that will give your venture a competitive edge."
  },
  {
    icon: Lightbulb,
    title: "Idea Illumination",
    description: "Transform your ideas from mere sparks into brilliant magical concepts ready for the world."
  },
  {
    icon: BookOpen,
    title: "Scrolls of Wisdom",
    description: "Gain access to valuable resources and knowledge from the entrepreneurial wizarding world."
  },
  {
    icon: Users,
    title: "House Competition",
    description: "Friendly competitions to test your skills and win magical prizes for your achievements."
  },
  {
    icon: Sparkles,
    title: "Enchanted Surroundings",
    description: "Immerse yourself in a beautiful natural setting that fosters creativity and connection."
  }
];

export default Features; 