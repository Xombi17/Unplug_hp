import React from 'react';
import { Star, Award, TrendingUp, Quote, ArrowUpRight } from "lucide-react";

const SuccessStories = () => {
  return (
    <section id="stories" className="py-32 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hogwarts-great-hall.jpg" 
          alt="Hogwarts Great Hall" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black/80"></div>
      </div>
      
      {/* Magical particles */}
      <div className="absolute top-1/3 left-20 animate-float opacity-40" style={{ animationDuration: "4s" }}>
        <Star className="h-10 w-10 text-sky-300/40" />
      </div>
      <div className="absolute bottom-1/4 right-[10%] animate-float opacity-30" style={{ animationDelay: "2s", animationDuration: "6s" }}>
        <Star className="h-8 w-8 text-sky-300/40" />
      </div>
      <div className="absolute top-2/3 left-[25%] animate-float opacity-20" style={{ animationDelay: "1s", animationDuration: "5s" }}>
        <Star className="h-6 w-6 text-sky-300/40" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div data-gsap-anim="fade-down" data-gsap-delay="0.1" className="inline-block mb-4">
            <span className="text-sm uppercase tracking-wider bg-sky-700/80 text-white px-6 py-2 rounded-full 
              font-harry-potter border border-sky-300/50 shadow-[0_0_15px_rgba(14,165,233,0.5)]">
              Success Stories
            </span>
          </div>
          
          <h2 data-gsap-anim="fade-up" data-gsap-delay="0.2" className="text-5xl md:text-6xl font-bold mb-6 font-harry-potter magical-text-shadow">
            <span className="text-sky-400">Magical</span> Transformations
          </h2>
          
          <p data-gsap-anim="fade-up" data-gsap-delay="0.3" className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover how our graduates have turned their entrepreneurial visions into reality
          </p>
        </div>
        
        <div data-gsap-stagger="0.15" data-gsap-anim="fade-up" className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {successStories.map((story, index) => (
            <div 
              key={index}
              data-gsap-stagger-item
              className="bg-gradient-to-r from-sky-900/20 to-black/20 border border-sky-400/30 rounded-xl p-8 hover:shadow-[0_0_30px_rgba(14,165,233,0.3)] transition-all duration-500 group"
            >
              {/* Quote icon */}
              <div className="mb-6 text-sky-400/30">
                <Quote className="h-16 w-16 rotate-180" />
              </div>
              
              {/* Testimonial */}
              <p className="text-white/90 text-lg leading-relaxed italic mb-8">
                {story.testimonial}
              </p>
              
              {/* Profile */}
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-sky-400/50">
                  <img 
                    src={story.image} 
                    alt={story.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <h4 className="text-xl font-harry-potter text-white">{story.name}</h4>
                  <p className="text-sky-400">{story.company}</p>
                </div>
                
                <div className="ml-auto bg-sky-800/30 p-2 rounded-full group-hover:bg-sky-700/50 transition-colors">
                  <ArrowUpRight className="h-5 w-5 text-sky-400" />
                </div>
              </div>
              
              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-sky-700/30">
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-sky-400 mr-2" />
                  <div>
                    <div className="text-xl font-bold text-white">{story.metrics.achievement}</div>
                    <div className="text-sm text-white/60">Achievement</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-sky-400 mr-2" />
                  <div>
                    <div className="text-xl font-bold text-white">{story.metrics.growth}</div>
                    <div className="text-sm text-white/60">Growth</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div data-gsap-anim="fade-up" data-gsap-delay="0.5" className="mt-16 text-center">
          <a href="#" className="inline-block py-4 px-10 text-lg font-harry-potter rounded-full bg-gradient-to-r from-sky-700 to-sky-500 text-white border border-sky-400/50 shadow-[0_0_15px_rgba(14,165,233,0.3)] hover:shadow-[0_0_25px_rgba(14,165,233,0.5)] transition-all">
            Read More Success Stories
          </a>
        </div>
      </div>
    </section>
  );
};

const successStories = [
  {
    name: "Neville Longbottom",
    company: "Magical Botanicals Inc.",
    image: "/images/hogwarts-harry-3840x2160-13694.jpg",
    testimonial: "Before Unplug: Hogwarts Edition, I was just a nervous wizard with a passion for herbology. The mentors helped me transform my unique plant knowledge into a thriving business that now supplies magical ingredients to apothecaries worldwide.",
    metrics: {
      achievement: "200+ Clients",
      growth: "310% YoY"
    }
  },
  {
    name: "Luna Lovegood",
    company: "Spectrespecs",
    image: "/images/hogwarts-legacy-3840x2160-10410.jpg",
    testimonial: "The connections I made at Unplug were invaluable. I came with a strange idea for magical eyewear that could see hidden creatures. Now Spectrespecs are sold in every magical shop from Diagon Alley to Tokyo!",
    metrics: {
      achievement: "Patent Holder",
      growth: "5M Galleons"
    }
  },
  {
    name: "Draco Malfoy",
    company: "Nimbus Innovations",
    image: "/images/hogwarts-harry-3840x2160-13694.jpg",
    testimonial: "I was skeptical at first, but the workshops on magical product development revolutionized my approach. Our racing brooms now incorporate technology no one thought possible, outperforming even the Firebolt.",
    metrics: {
      achievement: "Market Leader",
      growth: "87% Share"
    }
  },
  {
    name: "Cho Chang",
    company: "Divination Dynamics",
    image: "/images/WallpaperDog-657235.jpg",
    testimonial: "The mentor matching at Unplug connected me with experts who understood my vision for modernizing divination practices. We've now developed crystal ball technology that integrates with magical smartphones!",
    metrics: {
      achievement: "10 Patents",
      growth: "250% YoY"
    }
  }
];

export default SuccessStories; 