import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Sparkles, Clock, Stars, BookOpen, GraduationCap, Scroll, ScrollText, Feather, CalendarDays, Coffee, Utensils, Music, Moon, MapPin, Mountain } from "lucide-react";

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(1);

  return (
    <section id="schedule" className="py-16 md:py-24 relative">
      {/* Magical background effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 right-[10%] w-2 h-2 bg-amber-400/40 rounded-full animate-float" style={{ animationDelay: "0s" }}></div>
        <div className="absolute top-2/3 left-[20%] w-3 h-3 bg-amber-400/30 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 right-[30%] w-2 h-2 bg-amber-400/20 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-3/4 right-[15%] w-1 h-1 bg-amber-400/40 rounded-full animate-float" style={{ animationDelay: "1.5s" }}></div>
        <div className="absolute top-1/3 left-[15%] w-2 h-2 bg-amber-400/30 rounded-full animate-float" style={{ animationDelay: "0.5s" }}></div>
        
        {/* Magical symbols */}
        <div className="absolute top-20 right-[20%] opacity-10">
          <Feather className="h-12 w-12 text-amber-400" style={{ transform: "rotate(15deg)" }} />
        </div>
        <div className="absolute bottom-20 left-[15%] opacity-10">
          <Mountain className="h-16 w-16 text-amber-400" style={{ transform: "rotate(-10deg)" }} />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="flex justify-center">
            <CalendarDays className="h-14 w-14 text-amber-400 mx-auto mb-4" />
          </div>
          <Badge variant="outline" className="mb-4 font-harry-potter px-6 py-2 bg-amber-900/40 text-white border-amber-400/40 shadow-glow">
            Magical Timetable
          </Badge>
          <h2 className="font-harry-potter text-4xl md:text-6xl font-bold mb-6 text-white magical-text-shadow">
            Event Schedule
          </h2>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Your detailed guide to our three-day magical retreat at Mahabaleshwar Mountains
          </p>
        </div>
        
        {/* Event details card */}
        <div className="max-w-4xl mx-auto mb-12 bg-black/60 backdrop-blur-md rounded-xl border border-amber-700/50 p-6 shadow-[0_0_25px_rgba(245,158,11,0.2)]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center">
              <div className="bg-amber-900/50 rounded-full p-3 mr-4">
                <CalendarDays className="h-8 w-8 text-amber-400" />
              </div>
              <div>
                <h3 className="text-2xl font-harry-potter text-amber-300">April 18-20, 2026</h3>
                <p className="text-amber-400/70">Three-Day Magical Retreat</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-amber-900/50 rounded-full p-3 mr-4">
                <MapPin className="h-8 w-8 text-amber-400" />
              </div>
              <div>
                <h3 className="text-2xl font-harry-potter text-amber-300">Mahabaleshwar, Maharashtra</h3>
                <p className="text-amber-400/70">Mountainside Magical Sanctuary</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Day selector tabs */}
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="inline-flex bg-black/60 backdrop-blur-md rounded-full p-1 border border-amber-700/50 shadow-glow">
              {[1, 2, 3].map((day) => (
                <button 
                  key={day}
                  onClick={() => setActiveDay(day)}
                  className={`font-harry-potter px-6 py-3 rounded-full transition-all duration-300 ${
                    activeDay === day 
                      ? 'bg-gradient-to-r from-amber-700 to-amber-600 text-white shadow-md' 
                      : 'text-amber-400 hover:text-amber-300'
                  }`}
                >
                  DAY {day}
                </button>
              ))}
            </div>
          </div>
          
          {/* Schedule content container */}
          <div className="bg-black/40 backdrop-blur-md rounded-xl border border-amber-700/30 overflow-hidden shadow-[0_0_25px_rgba(245,158,11,0.15)]">
            {/* Day header */}
            <div className="bg-gradient-to-r from-amber-900/80 via-amber-800/80 to-amber-900/80 px-6 py-4 border-b border-amber-700/50">
              <h3 className="font-harry-potter text-2xl text-amber-300 flex items-center">
                {activeDay === 1 && (
                  <>
                    <Sparkles className="w-6 h-6 mr-3 text-amber-400" />
                    Day One: The Awakening
                  </>
                )}
                {activeDay === 2 && (
                  <>
                    <Stars className="w-6 h-6 mr-3 text-amber-400" />
                    Day Two: The Transformation
                  </>
                )}
                {activeDay === 3 && (
                  <>
                    <Scroll className="w-6 h-6 mr-3 text-amber-400" />
                    Day Three: The Ascension
                  </>
                )}
              </h3>
            </div>
            
            {/* Day One Content */}
            {activeDay === 1 && (
              <div className="p-6 divide-y divide-amber-800/30">
                <div className="py-5 first:pt-0 last:pb-0">
                  <div className="flex items-start">
                    <div className="min-w-[140px] flex items-center mb-3 md:mb-0">
                      <Clock className="text-amber-500 w-5 h-5 mr-2" />
                      <span className="text-amber-300 font-harry-potter">4:00 PM</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-amber-900/50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <CalendarDays className="w-5 h-5 text-amber-400" />
                        </div>
                        <h4 className="font-harry-potter text-xl text-amber-300">Arrival and Check-in</h4>
                      </div>
                      <p className="text-amber-400/70 mt-2 pl-[52px]">
                        Welcome to our Magical Beachside Sanctuary. Collect your welcome kit and settle into your accommodations.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="py-5 first:pt-0 last:pb-0">
                  <div className="flex items-start">
                    <div className="min-w-[140px] flex items-center mb-3 md:mb-0">
                      <Clock className="text-amber-500 w-5 h-5 mr-2" />
                      <span className="text-amber-300 font-harry-potter">5:00-6:30 PM</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-amber-900/50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <Coffee className="w-5 h-5 text-amber-400" />
                        </div>
                        <h4 className="font-harry-potter text-xl text-amber-300">Welcome Drink + Snacks</h4>
                      </div>
                      <p className="text-amber-400/70 mt-2 pl-[52px]">
                        Enjoy magical refreshments and meet your fellow wizards and witches in an informal setting.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="py-5 first:pt-0 last:pb-0">
                  <div className="flex items-start">
                    <div className="min-w-[140px] flex items-center mb-3 md:mb-0">
                      <Clock className="text-amber-500 w-5 h-5 mr-2" />
                      <span className="text-amber-300 font-harry-potter">7:00-8:00 PM</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-amber-900/50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <Sparkles className="w-5 h-5 text-amber-400" />
                        </div>
                        <h4 className="font-harry-potter text-xl text-amber-300">Unplug Kickoff</h4>
                      </div>
                      <p className="text-amber-400/70 mt-2 pl-[52px]">
                        Opening ceremony and introduction to the magical entrepreneurship weekend ahead.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="py-5 first:pt-0 last:pb-0">
                  <div className="flex items-start">
                    <div className="min-w-[140px] flex items-center mb-3 md:mb-0">
                      <Clock className="text-amber-500 w-5 h-5 mr-2" />
                      <span className="text-amber-300 font-harry-potter">8:30-9:30 PM</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-amber-900/50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <Utensils className="w-5 h-5 text-amber-400" />
                        </div>
                        <h4 className="font-harry-potter text-xl text-amber-300">Dinner & BBQ</h4>
                      </div>
                      <p className="text-amber-400/70 mt-2 pl-[52px]">
                        Feast on a delicious dinner with magical cuisine and beachside barbecue.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="py-5 first:pt-0 last:pb-0">
                  <div className="flex items-start">
                    <div className="min-w-[140px] flex items-center mb-3 md:mb-0">
                      <Clock className="text-amber-500 w-5 h-5 mr-2" />
                      <span className="text-amber-300 font-harry-potter">9:30-11:00 PM</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-amber-900/50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <Scroll className="w-5 h-5 text-amber-400" />
                        </div>
                        <h4 className="font-harry-potter text-xl text-amber-300">Ice-breaker & Pitch by Campfire</h4>
                      </div>
                      <p className="text-amber-400/70 mt-2 pl-[52px]">
                        Connect with fellow entrepreneurs around the magical campfire and share your startup ideas.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="py-5 first:pt-0 last:pb-0">
                  <div className="flex items-start">
                    <div className="min-w-[140px] flex items-center mb-3 md:mb-0">
                      <Clock className="text-amber-500 w-5 h-5 mr-2" />
                      <span className="text-amber-300 font-harry-potter">11:00 PM+</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-amber-900/50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <Moon className="w-5 h-5 text-amber-400" />
                        </div>
                        <h4 className="font-harry-potter text-xl text-amber-300">Build or Sleep</h4>
                      </div>
                      <p className="text-amber-400/70 mt-2 pl-[52px]">
                        Continue developing your ideas with newfound collaborators or retire to your magical chambers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Day Two Content */}
            {activeDay === 2 && (
              <div className="p-6 divide-y divide-amber-800/30">
                <div className="py-5 first:pt-0 last:pb-0">
                  <div className="flex items-start">
                    <div className="min-w-[140px] flex items-center mb-3 md:mb-0">
                      <Clock className="text-amber-500 w-5 h-5 mr-2" />
                      <span className="text-amber-300 font-harry-potter">7:30-8:30 AM</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-amber-900/50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <Coffee className="w-5 h-5 text-amber-400" />
                        </div>
                        <h4 className="font-harry-potter text-xl text-amber-300">Breakfast</h4>
                      </div>
                      <p className="text-amber-400/70 mt-2 pl-[52px]">
                        Start your day with a hearty magical breakfast to fuel your creativity.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="py-5 first:pt-0 last:pb-0">
                  <div className="flex items-start">
                    <div className="min-w-[140px] flex items-center mb-3 md:mb-0">
                      <Clock className="text-amber-500 w-5 h-5 mr-2" />
                      <span className="text-amber-300 font-harry-potter">9:00-10:30 AM</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-amber-900/50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <GraduationCap className="w-5 h-5 text-amber-400" />
                        </div>
                        <h4 className="font-harry-potter text-xl text-amber-300">Workshop: Spellbinding Pitches</h4>
                      </div>
                      <p className="text-amber-400/70 mt-2 pl-[52px]">
                        Learn the art of crafting compelling startup pitches that captivate investors.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="py-5 first:pt-0 last:pb-0">
                  <div className="flex items-start">
                    <div className="min-w-[140px] flex items-center mb-3 md:mb-0">
                      <Clock className="text-amber-500 w-5 h-5 mr-2" />
                      <span className="text-amber-300 font-harry-potter">11:00-12:30 PM</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-amber-900/50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <BookOpen className="w-5 h-5 text-amber-400" />
                        </div>
                        <h4 className="font-harry-potter text-xl text-amber-300">Expert Panel: Magical Innovation</h4>
                      </div>
                      <p className="text-amber-400/70 mt-2 pl-[52px]">
                        Industry leaders share insights on disruptive innovation and market opportunities.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="py-5 first:pt-0 last:pb-0">
                  <div className="flex items-start">
                    <div className="min-w-[140px] flex items-center mb-3 md:mb-0">
                      <Clock className="text-amber-500 w-5 h-5 mr-2" />
                      <span className="text-amber-300 font-harry-potter">1:00-2:00 PM</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-amber-900/50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <Utensils className="w-5 h-5 text-amber-400" />
                        </div>
                        <h4 className="font-harry-potter text-xl text-amber-300">Lunch Break</h4>
                      </div>
                      <p className="text-amber-400/70 mt-2 pl-[52px]">
                        Networking lunch with fellow entrepreneurs and mentors.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="py-5 first:pt-0 last:pb-0">
                  <div className="flex items-start">
                    <div className="min-w-[140px] flex items-center mb-3 md:mb-0">
                      <Clock className="text-amber-500 w-5 h-5 mr-2" />
                      <span className="text-amber-300 font-harry-potter">2:30-5:30 PM</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-amber-900/50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <Stars className="w-5 h-5 text-amber-400" />
                        </div>
                        <h4 className="font-harry-potter text-xl text-amber-300">Mentor Matching & Working Session</h4>
                      </div>
                      <p className="text-amber-400/70 mt-2 pl-[52px]">
                        One-on-one sessions with industry experts matched to your specific startup needs.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="py-5 first:pt-0 last:pb-0">
                  <div className="flex items-start">
                    <div className="min-w-[140px] flex items-center mb-3 md:mb-0">
                      <Clock className="text-amber-500 w-5 h-5 mr-2" />
                      <span className="text-amber-300 font-harry-potter">6:00-7:30 PM</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-amber-900/50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <Music className="w-5 h-5 text-amber-400" />
                        </div>
                        <h4 className="font-harry-potter text-xl text-amber-300">Sunset Networking</h4>
                      </div>
                      <p className="text-amber-400/70 mt-2 pl-[52px]">
                        Mountain trails exploration and networking with light refreshments.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="py-5 first:pt-0 last:pb-0">
                  <div className="flex items-start">
                    <div className="min-w-[140px] flex items-center mb-3 md:mb-0">
                      <Clock className="text-amber-500 w-5 h-5 mr-2" />
                      <span className="text-amber-300 font-harry-potter">8:00-9:30 PM</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-amber-900/50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <Utensils className="w-5 h-5 text-amber-400" />
                        </div>
                        <h4 className="font-harry-potter text-xl text-amber-300">Magical Banquet</h4>
                      </div>
                      <p className="text-amber-400/70 mt-2 pl-[52px]">
                        An evening of celebration, featuring special entertainment and networking opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Day Three Content */}
            {activeDay === 3 && (
              <div className="p-6 divide-y divide-amber-800/30">
                <div className="py-5 first:pt-0 last:pb-0">
                  <div className="flex items-start">
                    <div className="min-w-[140px] flex items-center mb-3 md:mb-0">
                      <Clock className="text-amber-500 w-5 h-5 mr-2" />
                      <span className="text-amber-300 font-harry-potter">7:30-8:30 AM</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-amber-900/50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <Coffee className="w-5 h-5 text-amber-400" />
                        </div>
                        <h4 className="font-harry-potter text-xl text-amber-300">Final Breakfast</h4>
                      </div>
                      <p className="text-amber-400/70 mt-2 pl-[52px]">
                        Energize for your final day with a nutritious breakfast.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="py-5 first:pt-0 last:pb-0">
                  <div className="flex items-start">
                    <div className="min-w-[140px] flex items-center mb-3 md:mb-0">
                      <Clock className="text-amber-500 w-5 h-5 mr-2" />
                      <span className="text-amber-300 font-harry-potter">9:00-10:00 AM</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-amber-900/50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <Scroll className="w-5 h-5 text-amber-400" />
                        </div>
                        <h4 className="font-harry-potter text-xl text-amber-300">Pitch Preparation</h4>
                      </div>
                      <p className="text-amber-400/70 mt-2 pl-[52px]">
                        Final polishing of your startup pitches with mentor guidance.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="py-5 first:pt-0 last:pb-0">
                  <div className="flex items-start">
                    <div className="min-w-[140px] flex items-center mb-3 md:mb-0">
                      <Clock className="text-amber-500 w-5 h-5 mr-2" />
                      <span className="text-amber-300 font-harry-potter">10:30-12:30 PM</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-amber-900/50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <Sparkles className="w-5 h-5 text-amber-400" />
                        </div>
                        <h4 className="font-harry-potter text-xl text-amber-300">Startup Showcase</h4>
                      </div>
                      <p className="text-amber-400/70 mt-2 pl-[52px]">
                        Present your refined business ideas to a panel of investors and industry experts.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="py-5 first:pt-0 last:pb-0">
                  <div className="flex items-start">
                    <div className="min-w-[140px] flex items-center mb-3 md:mb-0">
                      <Clock className="text-amber-500 w-5 h-5 mr-2" />
                      <span className="text-amber-300 font-harry-potter">1:00-2:00 PM</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-amber-900/50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <Utensils className="w-5 h-5 text-amber-400" />
                        </div>
                        <h4 className="font-harry-potter text-xl text-amber-300">Celebratory Lunch</h4>
                      </div>
                      <p className="text-amber-400/70 mt-2 pl-[52px]">
                        Final networking lunch with entrepreneurs, mentors and investors.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="py-5 first:pt-0 last:pb-0">
                  <div className="flex items-start">
                    <div className="min-w-[140px] flex items-center mb-3 md:mb-0">
                      <Clock className="text-amber-500 w-5 h-5 mr-2" />
                      <span className="text-amber-300 font-harry-potter">2:30-3:30 PM</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-amber-900/50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <GraduationCap className="w-5 h-5 text-amber-400" />
                        </div>
                        <h4 className="font-harry-potter text-xl text-amber-300">Awards & Closing Ceremony</h4>
                      </div>
                      <p className="text-amber-400/70 mt-2 pl-[52px]">
                        Recognition of outstanding projects, startup funding announcements, and closing remarks.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="py-5 first:pt-0 last:pb-0">
                  <div className="flex items-start">
                    <div className="min-w-[140px] flex items-center mb-3 md:mb-0">
                      <Clock className="text-amber-500 w-5 h-5 mr-2" />
                      <span className="text-amber-300 font-harry-potter">4:00 PM</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-amber-900/50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <Sparkles className="w-5 h-5 text-amber-400" />
                        </div>
                        <h4 className="font-harry-potter text-xl text-amber-300">Departure</h4>
                      </div>
                      <p className="text-amber-400/70 mt-2 pl-[52px]">
                        Farewell to our magical retreat. Transportation arrangements back to the city.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Magical decorative footer */}
          <div className="relative h-12 mt-6 flex justify-center">
            <div className="absolute w-40 h-1 bg-gradient-to-r from-transparent via-amber-600/50 to-transparent"></div>
            <div className="absolute -top-6 text-amber-400/30 font-harry-potter text-sm">
              - The Hogwarts Organizers
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Add these animations to your globals.css
const customStyleTag = document.createElement('style');
customStyleTag.textContent = `
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
`;
document.head.appendChild(customStyleTag);

export default Schedule;
