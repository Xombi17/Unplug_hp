import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Sparkles, Wand2, Stars, BookOpen, GraduationCap, Scroll, ScrollText, Feather } from "lucide-react";

const Events = () => {
  return (
    <section id="events" className="py-16 md:py-24 relative">
      {/* Background effects for magical ambiance */}
      <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
      
      {/* Floating magical elements */}
      <div className="absolute top-1/3 right-20 floating-element opacity-30">
        <Feather className="h-8 w-8 text-amber-300" style={{ transform: "rotate(15deg)" }} />
      </div>
      <div className="absolute bottom-1/4 left-20 floating-element opacity-20" style={{ animationDelay: "2s" }}>
        <Feather className="h-6 w-6 text-amber-300" style={{ transform: "rotate(-10deg)" }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <ScrollText className="h-12 w-12 text-amber-400 mx-auto mb-4" />
          <Badge variant="outline" className="mb-4 font-harry-potter px-6 py-2 bg-amber-900/40 text-white border-amber-400/40 shadow-glow">
            Magical Timetable
          </Badge>
          <h2 className="font-harry-potter text-4xl md:text-5xl font-bold mb-6 text-white magical-text-shadow">
            Schedule of Enchantments
          </h2>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
            Your daily guide to our mystical activities and transformative sessions
          </p>
        </div>
        
        {/* Parchment-like schedule */}
        <div className="max-w-5xl mx-auto">
          {/* Day One */}
          <div className="mb-12">
            <div className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="bg-gradient-to-r from-amber-700 to-amber-500 text-white font-harry-potter px-8 py-3 rounded-full shadow-glow">
                  <h3 className="text-xl md:text-2xl">Day One: The Awakening</h3>
                </div>
              </div>
              
              <div className="p-1 rounded-lg bg-gradient-to-br from-amber-600/50 via-amber-500/30 to-amber-600/50 shadow-glow mt-6">
                <div className="bg-gradient-to-br from-amber-50 to-amber-100/90 rounded-lg p-8 pt-12">
                  <div className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-4 md:items-center parchment-item hover:bg-amber-800/10 p-4 rounded-lg transition-colors">
                      <div className="md:w-32 font-harry-potter text-amber-800 text-lg">9:00 AM</div>
                      <div className="flex-1">
                        <div className="flex items-center">
                          <GraduationCap className="h-5 w-5 text-amber-700 mr-2" />
                          <h4 className="font-harry-potter text-xl text-amber-900">Arrival & Registration</h4>
                        </div>
                        <p className="text-amber-800 mt-1">Welcome to the Startup Sanctuary. Collect your magical credentials and welcome kit.</p>
                      </div>
                      <div className="md:w-32 text-center">
                        <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">Great Hall</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-4 md:items-center parchment-item hover:bg-amber-800/10 p-4 rounded-lg transition-colors">
                      <div className="md:w-32 font-harry-potter text-amber-800 text-lg">10:30 AM</div>
                      <div className="flex-1">
                        <div className="flex items-center">
                          <Wand2 className="h-5 w-5 text-amber-700 mr-2" />
                          <h4 className="font-harry-potter text-xl text-amber-900">Opening Ceremony</h4>
                        </div>
                        <p className="text-amber-800 mt-1">Inaugural address and keynote speech by our head wizard on the future of magical entrepreneurship.</p>
                      </div>
                      <div className="md:w-32 text-center">
                        <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">Grand Chamber</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-4 md:items-center parchment-item hover:bg-amber-800/10 p-4 rounded-lg transition-colors">
                      <div className="md:w-32 font-harry-potter text-amber-800 text-lg">1:00 PM</div>
                      <div className="flex-1">
                        <div className="flex items-center">
                          <BookOpen className="h-5 w-5 text-amber-700 mr-2" />
                          <h4 className="font-harry-potter text-xl text-amber-900">Innovation Workshop</h4>
                        </div>
                        <p className="text-amber-800 mt-1">Hands-on session exploring creative thinking and innovative approaches to startup challenges.</p>
                      </div>
                      <div className="md:w-32 text-center">
                        <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">Charms Classroom</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-4 md:items-center parchment-item hover:bg-amber-800/10 p-4 rounded-lg transition-colors">
                      <div className="md:w-32 font-harry-potter text-amber-800 text-lg">4:00 PM</div>
                      <div className="flex-1">
                        <div className="flex items-center">
                          <Stars className="h-5 w-5 text-amber-700 mr-2" />
                          <h4 className="font-harry-potter text-xl text-amber-900">Networking Social</h4>
                        </div>
                        <p className="text-amber-800 mt-1">Connect with fellow entrepreneurs and investors over magical refreshments and activities.</p>
                      </div>
                      <div className="md:w-32 text-center">
                        <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">Enchanted Garden</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Day Two */}
          <div className="mb-12">
            <div className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="bg-gradient-to-r from-amber-700 to-amber-500 text-white font-harry-potter px-8 py-3 rounded-full shadow-glow">
                  <h3 className="text-xl md:text-2xl">Day Two: The Transformation</h3>
                </div>
              </div>
              
              <div className="p-1 rounded-lg bg-gradient-to-br from-amber-600/50 via-amber-500/30 to-amber-600/50 shadow-glow mt-6">
                <div className="bg-gradient-to-br from-amber-50 to-amber-100/90 rounded-lg p-8 pt-12">
                  <div className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-4 md:items-center parchment-item hover:bg-amber-800/10 p-4 rounded-lg transition-colors">
                      <div className="md:w-32 font-harry-potter text-amber-800 text-lg">9:30 AM</div>
                      <div className="flex-1">
                        <div className="flex items-center">
                          <Scroll className="h-5 w-5 text-amber-700 mr-2" />
                          <h4 className="font-harry-potter text-xl text-amber-900">Business Strategy Session</h4>
                        </div>
                        <p className="text-amber-800 mt-1">Expert-led workshop on developing robust business models and go-to-market strategies.</p>
                      </div>
                      <div className="md:w-32 text-center">
                        <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">Strategy Tower</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-4 md:items-center parchment-item hover:bg-amber-800/10 p-4 rounded-lg transition-colors">
                      <div className="md:w-32 font-harry-potter text-amber-800 text-lg">11:00 AM</div>
                      <div className="flex-1">
                        <div className="flex items-center">
                          <Sparkles className="h-5 w-5 text-amber-700 mr-2" />
                          <h4 className="font-harry-potter text-xl text-amber-900">Pitch Perfect Workshop</h4>
                        </div>
                        <p className="text-amber-800 mt-1">Learn the art of enchanting pitches that captivate investors and customers alike.</p>
                      </div>
                      <div className="md:w-32 text-center">
                        <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">Oratory Chamber</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-4 md:items-center parchment-item hover:bg-amber-800/10 p-4 rounded-lg transition-colors">
                      <div className="md:w-32 font-harry-potter text-amber-800 text-lg">2:00 PM</div>
                      <div className="flex-1">
                        <div className="flex items-center">
                          <GraduationCap className="h-5 w-5 text-amber-700 mr-2" />
                          <h4 className="font-harry-potter text-xl text-amber-900">Mentor Matching</h4>
                        </div>
                        <p className="text-amber-800 mt-1">One-on-one sessions with industry experts matched to your specific startup needs.</p>
                      </div>
                      <div className="md:w-32 text-center">
                        <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">Wisdom Corridor</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-4 md:items-center parchment-item hover:bg-amber-800/10 p-4 rounded-lg transition-colors">
                      <div className="md:w-32 font-harry-potter text-amber-800 text-lg">6:00 PM</div>
                      <div className="flex-1">
                        <div className="flex items-center">
                          <Wand2 className="h-5 w-5 text-amber-700 mr-2" />
                          <h4 className="font-harry-potter text-xl text-amber-900">Magical Banquet</h4>
                        </div>
                        <p className="text-amber-800 mt-1">An evening of celebration, featuring special entertainment and networking opportunities.</p>
                      </div>
                      <div className="md:w-32 text-center">
                        <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">Feasting Hall</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Day Three */}
          <div>
            <div className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="bg-gradient-to-r from-amber-700 to-amber-500 text-white font-harry-potter px-8 py-3 rounded-full shadow-glow">
                  <h3 className="text-xl md:text-2xl">Day Three: The Ascension</h3>
                </div>
              </div>
              
              <div className="p-1 rounded-lg bg-gradient-to-br from-amber-600/50 via-amber-500/30 to-amber-600/50 shadow-glow mt-6">
                <div className="bg-gradient-to-br from-amber-50 to-amber-100/90 rounded-lg p-8 pt-12">
                  <div className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-4 md:items-center parchment-item hover:bg-amber-800/10 p-4 rounded-lg transition-colors">
                      <div className="md:w-32 font-harry-potter text-amber-800 text-lg">10:00 AM</div>
                      <div className="flex-1">
                        <div className="flex items-center">
                          <Scroll className="h-5 w-5 text-amber-700 mr-2" />
                          <h4 className="font-harry-potter text-xl text-amber-900">Funding Fundamentals</h4>
                        </div>
                        <p className="text-amber-800 mt-1">Expert panel on fundraising strategies, term sheets, and investor relations.</p>
                      </div>
                      <div className="md:w-32 text-center">
                        <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">Gringotts Room</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-4 md:items-center parchment-item hover:bg-amber-800/10 p-4 rounded-lg transition-colors">
                      <div className="md:w-32 font-harry-potter text-amber-800 text-lg">1:30 PM</div>
                      <div className="flex-1">
                        <div className="flex items-center">
                          <Stars className="h-5 w-5 text-amber-700 mr-2" />
                          <h4 className="font-harry-potter text-xl text-amber-900">Startup Showcase</h4>
                        </div>
                        <p className="text-amber-800 mt-1">Participants present their refined business ideas to a panel of investors and industry experts.</p>
                      </div>
                      <div className="md:w-32 text-center">
                        <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">Grand Auditorium</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-4 md:items-center parchment-item hover:bg-amber-800/10 p-4 rounded-lg transition-colors">
                      <div className="md:w-32 font-harry-potter text-amber-800 text-lg">4:00 PM</div>
                      <div className="flex-1">
                        <div className="flex items-center">
                          <BookOpen className="h-5 w-5 text-amber-700 mr-2" />
                          <h4 className="font-harry-potter text-xl text-amber-900">Closing Ceremony</h4>
                        </div>
                        <p className="text-amber-800 mt-1">Awards presentation, closing remarks, and future opportunities for continued support.</p>
                      </div>
                      <div className="md:w-32 text-center">
                        <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">Ceremonial Chamber</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-4 md:items-center parchment-item hover:bg-amber-800/10 p-4 rounded-lg transition-colors">
                      <div className="md:w-32 font-harry-potter text-amber-800 text-lg">5:30 PM</div>
                      <div className="flex-1">
                        <div className="flex items-center">
                          <Wand2 className="h-5 w-5 text-amber-700 mr-2" />
                          <h4 className="font-harry-potter text-xl text-amber-900">Farewell Gathering</h4>
                        </div>
                        <p className="text-amber-800 mt-1">Final networking opportunity and farewell celebration before your journey home.</p>
                      </div>
                      <div className="md:w-32 text-center">
                        <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">Astronomy Terrace</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <a href="#" className="inline-block font-harry-potter bg-gradient-to-r from-amber-700 to-amber-500 text-white px-8 py-4 rounded-full shadow-glow hover:shadow-[0_0_25px_rgba(245,158,11,0.6)] transition-all">
              <span className="flex items-center">
                <Scroll className="mr-2 h-5 w-5" />
                <span>Download Complete Schedule</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events; 