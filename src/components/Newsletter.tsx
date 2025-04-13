import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Sparkles, BookOpen, Wand2, School, GraduationCap, CreditCard } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  icon: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, icon, isOpen, onClick }: FAQItemProps) => {
  return (
    <div 
      className="mb-8 bg-gradient-to-r from-sky-900/40 to-black/40 border border-sky-400/30 rounded-lg shadow-md overflow-hidden transition-all duration-300"
      data-gsap-stagger-item
    >
      <button 
        onClick={onClick}
        className="w-full text-left p-6 flex items-center justify-between group focus:outline-none"
      >
        <div className="flex items-center">
          <div className="mr-4 bg-sky-800/50 p-3 rounded-full flex-shrink-0">
            {icon}
          </div>
          <h3 className="font-harry-potter text-2xl text-white group-hover:text-sky-400 transition-colors">
            {question}
          </h3>
        </div>
        <div className="ml-4 flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="h-7 w-7 text-sky-400 transition-transform duration-300" />
          ) : (
            <ChevronDown className="h-7 w-7 text-sky-400 transition-transform duration-300" />
          )}
        </div>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px]' : 'max-h-0'}`}
      >
        <div className="p-6 pt-0 text-white/90 text-lg leading-relaxed border-t border-sky-700/30">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  
  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="py-32 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hogwarts-library.jpg" 
          alt="Hogwarts Library" 
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90"></div>
      </div>
      
      {/* Magical particles */}
      <div className="absolute top-1/4 left-10 animate-float opacity-30" style={{ animationDuration: "4s" }}>
        <Sparkles className="h-10 w-10 text-sky-300/30" />
      </div>
      <div className="absolute bottom-1/3 right-10 animate-float opacity-20" style={{ animationDelay: "2s", animationDuration: "6s" }}>
        <BookOpen className="h-8 w-8 text-sky-300/30" />
      </div>
      <div className="absolute top-2/3 left-1/4 animate-float opacity-30" style={{ animationDelay: "1s", animationDuration: "5s" }}>
        <Wand2 className="h-6 w-6 text-sky-300/30" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div data-gsap-anim="fade-down" data-gsap-delay="0.1" className="inline-block mb-4">
            <span className="text-sm uppercase tracking-wider bg-sky-700/80 text-white px-6 py-2 rounded-full 
              font-harry-potter border border-sky-300/50 shadow-[0_0_15px_rgba(14,165,233,0.5)]">
              Common Questions
            </span>
          </div>
          
          <h2 data-gsap-anim="fade-up" data-gsap-delay="0.2" className="text-5xl md:text-6xl font-bold mb-8 font-harry-potter magical-text-shadow">
            Frequently Asked <span className="text-sky-400">Questions</span>
          </h2>
          
          <p data-gsap-anim="fade-up" data-gsap-delay="0.3" className="text-xl text-white/90 max-w-2xl mx-auto">
            Everything you need to know about our magical entrepreneurial retreat
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto" data-gsap-stagger="0.1" data-gsap-anim="fade-up">
          {faqData.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              icon={faq.icon}
              isOpen={openFaqIndex === index}
              onClick={() => toggleFaq(index)}
            />
          ))}
        </div>
        
        <div data-gsap-anim="fade-up" data-gsap-delay="0.5" className="mt-16 text-center">
          <p className="text-white/90 text-lg mb-4">Still have questions?</p>
          <a href="#contact" className="inline-block py-4 px-10 text-lg font-harry-potter rounded-full bg-gradient-to-r from-sky-700 to-sky-500 text-white border border-sky-400/50 shadow-[0_0_15px_rgba(14,165,233,0.3)] hover:shadow-[0_0_25px_rgba(14,165,233,0.5)] transition-all">
            Send an Owl
          </a>
        </div>
      </div>
    </section>
  );
};

const faqData = [
  {
    question: "What is Unplug: Hogwarts Edition?",
    answer: "Unplug: Hogwarts Edition is a three-day entrepreneurial retreat designed for aspiring magical startup founders. Located in a beautiful mountain sanctuary reminiscent of Hogwarts, this immersive experience combines workshops, networking, and mentorship in a Harry Potter-inspired setting.",
    icon: <School className="h-6 w-6 text-sky-400" />
  },
  {
    question: "Do I need prior entrepreneurial experience?",
    answer: "No prior entrepreneurial experience is required! Like first-year students at Hogwarts, we welcome participants at all stages of their journey. Our program is designed to benefit both those with established startup ideas and those just beginning to explore entrepreneurship.",
    icon: <GraduationCap className="h-6 w-6 text-sky-400" />
  },
  {
    question: "What should I bring to the retreat?",
    answer: "We recommend bringing your wand (laptop), comfortable muggle attire suitable for mountain weather, any potions (medications) you require, a notebook for capturing magical ideas, and an open mind. A detailed packing list will be sent via owl post (email) before the event.",
    icon: <BookOpen className="h-6 w-6 text-sky-400" />
  },
  {
    question: "Are accommodations provided?",
    answer: "Yes! All participants will be sorted into magical dormitories (comfortable hotel accommodations) included in your registration. Each room is equipped with modern amenities while maintaining the enchanted atmosphere of the wizarding world.",
    icon: <Wand2 className="h-6 w-6 text-sky-400" />
  },
  {
    question: "What is the application process?",
    answer: "The application process involves submitting a brief letter of interest explaining why you wish to attend Unplug: Hogwarts Edition, along with any current entrepreneurial endeavors. Our Sorting Hat (selection committee) will review applications and notify accepted participants within two weeks.",
    icon: <Sparkles className="h-6 w-6 text-sky-400" />
  },
  {
    question: "What is the cost to attend?",
    answer: "The full three-day retreat, including accommodations, meals, workshops, and materials, costs 599 Galleons (or the muggle equivalent). Limited scholarships are available for exceptional candidates demonstrating financial need. Early owl registration discounts may apply.",
    icon: <CreditCard className="h-6 w-6 text-sky-400" />
  }
];

export default FAQ; 