import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Sparkles, Clock, Stars, BookOpen, GraduationCap, Scroll, ScrollText, Feather, CalendarDays, Coffee, Utensils, Music, Moon, MapPin, Mountain, Coins, Wand2, Hotel, Check, ChevronRight, Smile } from "lucide-react";

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(1);

  return (
    <>
    <section id="schedule" className="py-16 md:py-24 relative">
      {/* Magical background effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-sky-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 right-[10%] w-2 h-2 bg-sky-400/40 rounded-full animate-float" style={{ animationDelay: "0s" }}></div>
        <div className="absolute top-2/3 left-[20%] w-3 h-3 bg-sky-400/30 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 right-[30%] w-2 h-2 bg-sky-400/20 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-3/4 right-[15%] w-1 h-1 bg-sky-400/40 rounded-full animate-float" style={{ animationDelay: "1.5s" }}></div>
        <div className="absolute top-1/3 left-[15%] w-2 h-2 bg-sky-400/30 rounded-full animate-float" style={{ animationDelay: "0.5s" }}></div>
        
        {/* Magical symbols */}
        <div className="absolute top-20 right-[20%] opacity-10">
          <Feather className="h-12 w-12 text-sky-400" style={{ transform: "rotate(15deg)" }} />
        </div>
        <div className="absolute bottom-20 left-[15%] opacity-10">
          <Mountain className="h-16 w-16 text-sky-400" style={{ transform: "rotate(-10deg)" }} />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="flex justify-center">
            <CalendarDays className="h-14 w-14 text-sky-400 mx-auto mb-4" />
          </div>
          <Badge variant="outline" className="mb-4 font-harry-potter px-6 py-2 bg-sky-900/40 text-sky-100 border-sky-400/40 shadow-glow">
            Magical Timetable
          </Badge>
          <h2 className="font-harry-potter text-4xl md:text-6xl font-bold mb-6 text-sky-300 magical-text-shadow">
            Event Schedule
          </h2>
          <p className="text-sky-100 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Your detailed guide to our three-day magical retreat at Mahabaleshwar Mountains
          </p>
        </div>
        
        {/* Event details card */}
        <div className="max-w-4xl mx-auto mb-12 bg-black/60 backdrop-blur-md rounded-xl border border-sky-700/50 p-6 shadow-[0_0_25px_rgba(14,165,233,0.2)]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center">
              <div className="bg-sky-900/50 rounded-full p-3 mr-4">
                <CalendarDays className="h-8 w-8 text-sky-400" />
              </div>
              <div>
                <h3 className="text-2xl font-harry-potter text-sky-300">April 18-20, 2026</h3>
                <p className="text-sky-300/70">Three-Day Magical Retreat</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-sky-900/50 rounded-full p-3 mr-4">
                <MapPin className="h-8 w-8 text-sky-400" />
              </div>
              <div>
                <h3 className="text-2xl font-harry-potter text-sky-300">Mahabaleshwar, Maharashtra</h3>
                <p className="text-sky-300/70">Mountainside Magical Sanctuary</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Day selector tabs */}
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="inline-flex bg-black/60 backdrop-blur-md rounded-full p-1 border border-sky-700/50 shadow-glow">
              {[1, 2, 3].map((day) => (
                <button 
                  key={day}
                  onClick={() => setActiveDay(day)}
                  className={`font-harry-potter px-6 py-3 rounded-full transition-all duration-300 ${
                    activeDay === day 
                      ? 'bg-gradient-to-r from-sky-700 to-sky-600 text-white shadow-md' 
                      : 'text-sky-400 hover:text-sky-300'
                  }`}
                >
                  DAY {day}
                </button>
              ))}
            </div>
          </div>
          
          {/* Schedule content container */}
          <div className="bg-black/40 backdrop-blur-md rounded-xl border border-sky-700/30 overflow-hidden shadow-[0_0_25px_rgba(14,165,233,0.15)]">
            {/* Day header */}
            <div className="bg-gradient-to-r from-sky-900/80 via-sky-800/80 to-sky-900/80 px-6 py-4 border-b border-sky-700/50">
              <h3 className="font-harry-potter text-2xl text-sky-300 flex items-center">
                {activeDay === 1 && (
                  <>
                    <Sparkles className="w-6 h-6 mr-3 text-sky-400" />
                    Day One: The Awakening
                  </>
                )}
                {activeDay === 2 && (
                  <>
                    <Stars className="w-6 h-6 mr-3 text-sky-400" />
                    Day Two: The Transformation
                  </>
                )}
                {activeDay === 3 && (
                  <>
                    <Scroll className="w-6 h-6 mr-3 text-sky-400" />
                    Day Three: The Ascension
                  </>
                )}
              </h3>
            </div>
            
            {/* Day One Content */}
            {activeDay === 1 && (
              <div className="p-6 divide-y divide-sky-800/30">
                <div className="py-5 first:pt-0 last:pb-0">
                  <div className="flex items-start">
                    <div className="min-w-[140px] flex items-center mb-3 md:mb-0">
                      <Clock className="text-sky-500 w-5 h-5 mr-2" />
                      <span className="text-sky-300 font-harry-potter">4:00 PM</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-sky-900/50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <CalendarDays className="w-5 h-5 text-sky-400" />
                        </div>
                        <h4 className="font-harry-potter text-xl text-sky-300">Arrival and Check-in</h4>
                      </div>
                      <p className="text-sky-100/90 mt-2 pl-[52px]">
                        Welcome to our Magical Beachside Sanctuary. Collect your welcome kit and settle into your accommodations.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="py-5 first:pt-0 last:pb-0">
                  <div className="flex items-start">
                    <div className="min-w-[140px] flex items-center mb-3 md:mb-0">
                      <Clock className="text-sky-500 w-5 h-5 mr-2" />
                      <span className="text-sky-300 font-harry-potter">5:00-6:30 PM</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-sky-900/50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <Coffee className="w-5 h-5 text-sky-400" />
                        </div>
                        <h4 className="font-harry-potter text-xl text-sky-300">Welcome Drink + Snacks</h4>
                      </div>
                      <p className="text-sky-100/90 mt-2 pl-[52px]">
                        Enjoy magical refreshments and meet your fellow wizards and witches in an informal setting.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="py-5 first:pt-0 last:pb-0">
                  <div className="flex items-start">
                    <div className="min-w-[140px] flex items-center mb-3 md:mb-0">
                      <Clock className="text-sky-500 w-5 h-5 mr-2" />
                      <span className="text-sky-300 font-harry-potter">7:00-8:00 PM</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-sky-900/50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <Sparkles className="w-5 h-5 text-sky-400" />
                        </div>
                        <h4 className="font-harry-potter text-xl text-sky-300">Unplug Kickoff</h4>
                      </div>
                      <p className="text-sky-100/90 mt-2 pl-[52px]">
                        Opening ceremony and introduction to the magical entrepreneurship weekend ahead.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="py-5 first:pt-0 last:pb-0">
                  <div className="flex items-start">
                    <div className="min-w-[140px] flex items-center mb-3 md:mb-0">
                      <Clock className="text-sky-500 w-5 h-5 mr-2" />
                      <span className="text-sky-300 font-harry-potter">8:30-9:30 PM</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-sky-900/50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <Utensils className="w-5 h-5 text-sky-400" />
                        </div>
                        <h4 className="font-harry-potter text-xl text-sky-300">Dinner & BBQ</h4>
                      </div>
                      <p className="text-sky-100/90 mt-2 pl-[52px]">
                        Feast on a delicious dinner with magical cuisine and beachside barbecue.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="py-5 first:pt-0 last:pb-0">
                  <div className="flex items-start">
                    <div className="min-w-[140px] flex items-center mb-3 md:mb-0">
                      <Clock className="text-sky-500 w-5 h-5 mr-2" />
                      <span className="text-sky-300 font-harry-potter">9:30-11:00 PM</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-sky-900/50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <Scroll className="w-5 h-5 text-sky-400" />
                        </div>
                        <h4 className="font-harry-potter text-xl text-sky-300">Ice-breaker & Pitch by Campfire</h4>
                      </div>
                      <p className="text-sky-100/90 mt-2 pl-[52px]">
                        Connect with fellow entrepreneurs around the magical campfire and share your startup ideas.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="py-5 first:pt-0 last:pb-0">
                  <div className="flex items-start">
                    <div className="min-w-[140px] flex items-center mb-3 md:mb-0">
                      <Clock className="text-sky-500 w-5 h-5 mr-2" />
                      <span className="text-sky-300 font-harry-potter">11:00 PM+</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-sky-900/50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <Moon className="w-5 h-5 text-sky-400" />
                        </div>
                        <h4 className="font-harry-potter text-xl text-sky-300">Build or Sleep</h4>
                      </div>
                      <p className="text-sky-100/90 mt-2 pl-[52px]">
                        Continue developing your ideas with newfound collaborators or retire to your magical chambers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Day Two Content */}
            {activeDay === 2 && (
              <div className="p-6 divide-y divide-sky-800/30">
                <div className="py-5 first:pt-0 last:pb-0">
                  <div className="flex items-start">
                    <div className="min-w-[140px] flex items-center mb-3 md:mb-0">
                      <Clock className="text-sky-500 w-5 h-5 mr-2" />
                      <span className="text-sky-300 font-harry-potter">7:30-8:30 AM</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-sky-900/50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <Coffee className="w-5 h-5 text-sky-400" />
                        </div>
                        <h4 className="font-harry-potter text-xl text-sky-300">Breakfast</h4>
                      </div>
                      <p className="text-sky-100/90 mt-2 pl-[52px]">
                        Start your day with a hearty magical breakfast to fuel your creativity.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="py-5 first:pt-0 last:pb-0">
                  <div className="flex items-start">
                    <div className="min-w-[140px] flex items-center mb-3 md:mb-0">
                      <Clock className="text-sky-500 w-5 h-5 mr-2" />
                      <span className="text-sky-300 font-harry-potter">9:00-10:30 AM</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-sky-900/50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <GraduationCap className="w-5 h-5 text-sky-400" />
                        </div>
                        <h4 className="font-harry-potter text-xl text-sky-300">Workshop: Spellbinding Pitches</h4>
                      </div>
                      <p className="text-sky-100/90 mt-2 pl-[52px]">
                        Learn the art of crafting compelling startup pitches that captivate investors.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="py-5 first:pt-0 last:pb-0">
                  <div className="flex items-start">
                    <div className="min-w-[140px] flex items-center mb-3 md:mb-0">
                      <Clock className="text-sky-500 w-5 h-5 mr-2" />
                      <span className="text-sky-300 font-harry-potter">11:00-12:30 PM</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-sky-900/50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <BookOpen className="w-5 h-5 text-sky-400" />
                        </div>
                        <h4 className="font-harry-potter text-xl text-sky-300">Expert Panel: Magical Innovation</h4>
                      </div>
                      <p className="text-sky-100/90 mt-2 pl-[52px]">
                        Industry leaders share insights on disruptive innovation and market opportunities.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="py-5 first:pt-0 last:pb-0">
                  <div className="flex items-start">
                    <div className="min-w-[140px] flex items-center mb-3 md:mb-0">
                      <Clock className="text-sky-500 w-5 h-5 mr-2" />
                      <span className="text-sky-300 font-harry-potter">1:00-2:00 PM</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-sky-900/50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <Utensils className="w-5 h-5 text-sky-400" />
                        </div>
                        <h4 className="font-harry-potter text-xl text-sky-300">Lunch Break</h4>
                      </div>
                      <p className="text-sky-100/90 mt-2 pl-[52px]">
                        Networking lunch with fellow entrepreneurs and mentors.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="py-5 first:pt-0 last:pb-0">
                  <div className="flex items-start">
                    <div className="min-w-[140px] flex items-center mb-3 md:mb-0">
                      <Clock className="text-sky-500 w-5 h-5 mr-2" />
                      <span className="text-sky-300 font-harry-potter">2:30-5:30 PM</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-sky-900/50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <Stars className="w-5 h-5 text-sky-400" />
                        </div>
                        <h4 className="font-harry-potter text-xl text-sky-300">Mentor Matching & Working Session</h4>
                      </div>
                      <p className="text-sky-100/90 mt-2 pl-[52px]">
                        One-on-one sessions with industry experts matched to your specific startup needs.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="py-5 first:pt-0 last:pb-0">
                  <div className="flex items-start">
                    <div className="min-w-[140px] flex items-center mb-3 md:mb-0">
                      <Clock className="text-sky-500 w-5 h-5 mr-2" />
                      <span className="text-sky-300 font-harry-potter">6:00-7:30 PM</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-sky-900/50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <Music className="w-5 h-5 text-sky-400" />
                        </div>
                        <h4 className="font-harry-potter text-xl text-sky-300">Sunset Networking</h4>
                      </div>
                      <p className="text-sky-100/90 mt-2 pl-[52px]">
                        Mountain trails exploration and networking with light refreshments.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="py-5 first:pt-0 last:pb-0">
                  <div className="flex items-start">
                    <div className="min-w-[140px] flex items-center mb-3 md:mb-0">
                      <Clock className="text-sky-500 w-5 h-5 mr-2" />
                      <span className="text-sky-300 font-harry-potter">8:00-9:30 PM</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-sky-900/50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <Utensils className="w-5 h-5 text-sky-400" />
                        </div>
                        <h4 className="font-harry-potter text-xl text-sky-300">Magical Banquet</h4>
                      </div>
                      <p className="text-sky-100/90 mt-2 pl-[52px]">
                        An evening of celebration, featuring special entertainment and networking opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Day Three Content */}
            {activeDay === 3 && (
              <div className="p-6 divide-y divide-sky-800/30">
                <div className="py-5 first:pt-0 last:pb-0">
                  <div className="flex items-start">
                    <div className="min-w-[140px] flex items-center mb-3 md:mb-0">
                      <Clock className="text-sky-500 w-5 h-5 mr-2" />
                      <span className="text-sky-300 font-harry-potter">7:30-8:30 AM</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-sky-900/50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <Coffee className="w-5 h-5 text-sky-400" />
                        </div>
                        <h4 className="font-harry-potter text-xl text-sky-300">Final Breakfast</h4>
                      </div>
                      <p className="text-sky-100/90 mt-2 pl-[52px]">
                        Energize for your final day with a nutritious breakfast.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="py-5 first:pt-0 last:pb-0">
                  <div className="flex items-start">
                    <div className="min-w-[140px] flex items-center mb-3 md:mb-0">
                      <Clock className="text-sky-500 w-5 h-5 mr-2" />
                      <span className="text-sky-300 font-harry-potter">9:00-10:00 AM</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-sky-900/50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <Scroll className="w-5 h-5 text-sky-400" />
                        </div>
                        <h4 className="font-harry-potter text-xl text-sky-300">Pitch Preparation</h4>
                      </div>
                      <p className="text-sky-100/90 mt-2 pl-[52px]">
                        Final polishing of your startup pitches with mentor guidance.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="py-5 first:pt-0 last:pb-0">
                  <div className="flex items-start">
                    <div className="min-w-[140px] flex items-center mb-3 md:mb-0">
                      <Clock className="text-sky-500 w-5 h-5 mr-2" />
                      <span className="text-sky-300 font-harry-potter">10:30-12:30 PM</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-sky-900/50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <Sparkles className="w-5 h-5 text-sky-400" />
                        </div>
                        <h4 className="font-harry-potter text-xl text-sky-300">Startup Showcase</h4>
                      </div>
                      <p className="text-sky-100/90 mt-2 pl-[52px]">
                        Present your refined business ideas to a panel of investors and industry experts.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="py-5 first:pt-0 last:pb-0">
                  <div className="flex items-start">
                    <div className="min-w-[140px] flex items-center mb-3 md:mb-0">
                      <Clock className="text-sky-500 w-5 h-5 mr-2" />
                      <span className="text-sky-300 font-harry-potter">1:00-2:00 PM</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-sky-900/50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <Utensils className="w-5 h-5 text-sky-400" />
                        </div>
                        <h4 className="font-harry-potter text-xl text-sky-300">Celebratory Lunch</h4>
                      </div>
                      <p className="text-sky-100/90 mt-2 pl-[52px]">
                        Final networking lunch with entrepreneurs, mentors and investors.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="py-5 first:pt-0 last:pb-0">
                  <div className="flex items-start">
                    <div className="min-w-[140px] flex items-center mb-3 md:mb-0">
                      <Clock className="text-sky-500 w-5 h-5 mr-2" />
                      <span className="text-sky-300 font-harry-potter">2:30-3:30 PM</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-sky-900/50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <GraduationCap className="w-5 h-5 text-sky-400" />
                        </div>
                        <h4 className="font-harry-potter text-xl text-sky-300">Awards & Closing Ceremony</h4>
                      </div>
                      <p className="text-sky-100/90 mt-2 pl-[52px]">
                        Recognition of outstanding projects, startup funding announcements, and closing remarks.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="py-5 first:pt-0 last:pb-0">
                  <div className="flex items-start">
                    <div className="min-w-[140px] flex items-center mb-3 md:mb-0">
                      <Clock className="text-sky-500 w-5 h-5 mr-2" />
                      <span className="text-sky-300 font-harry-potter">4:00 PM</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-sky-900/50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <Sparkles className="w-5 h-5 text-sky-400" />
                        </div>
                        <h4 className="font-harry-potter text-xl text-sky-300">Departure</h4>
                      </div>
                      <p className="text-sky-100/90 mt-2 pl-[52px]">
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
            <div className="absolute w-40 h-1 bg-gradient-to-r from-transparent via-sky-600/50 to-transparent"></div>
            <div className="absolute -top-6 text-sky-400/30 font-harry-potter text-sm">
              - The Hogwarts Organizers
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Pricing Section */}
    <section id="pricing" className="py-16 md:py-24 relative">
      {/* Magical background effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-sky-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-[10%] w-2 h-2 bg-sky-400/40 rounded-full animate-float" style={{ animationDelay: "0.5s" }}></div>
        <div className="absolute top-2/3 right-[20%] w-3 h-3 bg-sky-400/30 rounded-full animate-float" style={{ animationDelay: "1.5s" }}></div>
        <div className="absolute top-1/2 left-[30%] w-2 h-2 bg-sky-400/20 rounded-full animate-float" style={{ animationDelay: "0.7s" }}></div>
        
        {/* Magical symbols */}
        <div className="absolute top-40 left-[20%] opacity-10">
          <Coins className="h-12 w-12 text-sky-400" style={{ transform: "rotate(-15deg)" }} />
        </div>
        <div className="absolute bottom-40 right-[15%] opacity-10">
          <Wand2 className="h-16 w-16 text-sky-400" style={{ transform: "rotate(10deg)" }} />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center">
            <Coins className="h-14 w-14 text-sky-400 mx-auto mb-4" />
          </div>
          <Badge variant="outline" className="mb-4 font-harry-potter px-6 py-2 bg-sky-900/40 text-sky-100 border-sky-400/40 shadow-glow">
            Investment Details
          </Badge>
          <h2 className="font-harry-potter text-4xl md:text-6xl font-bold mb-6 text-sky-300 magical-text-shadow">
            Ticket to Magic
          </h2>
          <p className="text-sky-100 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Your entry into our exclusive enchanted entrepreneurship retreat includes all this and more
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Early Bird Price Card */}
          <div className="bg-black/60 backdrop-blur-md rounded-xl border border-sky-700/50 p-8 shadow-[0_0_25px_rgba(14,165,233,0.2)] transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(14,165,233,0.3)]">
            <div className="absolute -top-3 -right-3">
              <Badge className="bg-sky-500 hover:bg-sky-600 px-4 py-1 text-black font-semibold">Limited Offer</Badge>
            </div>
            <h3 className="font-harry-potter text-3xl text-sky-300 mb-2">Early Bird</h3>
            <div className="flex items-end mb-6">
              <span className="text-4xl text-sky-100 font-bold">₹3,000</span>
              <span className="text-sky-300/70 ml-2 pb-1">per person</span>
            </div>
            <div className="mb-8">
              <p className="text-sky-100 italic">Available until March 18, 2026</p>
            </div>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-sky-900/50 rounded-full p-1 mr-3 mt-0.5">
                  <Check className="w-4 h-4 text-sky-400" />
                </div>
                <p className="text-sky-100">20% discount on the regular price</p>
              </div>
              <div className="flex items-start">
                <div className="bg-sky-900/50 rounded-full p-1 mr-3 mt-0.5">
                  <Check className="w-4 h-4 text-sky-400" />
                </div>
                <p className="text-sky-100">Priority seating at all workshops</p>
              </div>
              <div className="flex items-start">
                <div className="bg-sky-900/50 rounded-full p-1 mr-3 mt-0.5">
                  <Check className="w-4 h-4 text-sky-400" />
                </div>
                <p className="text-sky-100">Special welcome gift</p>
              </div>
            </div>
            <button className="w-full font-harry-potter bg-gradient-to-r from-sky-700 to-sky-500 text-white px-6 py-3 rounded-full shadow-glow hover:shadow-[0_0_25px_rgba(14,165,233,0.6)] transition-all flex items-center justify-center">
              <span>Book Now</span>
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          
          {/* Regular Price Card */}
          <div className="bg-black/60 backdrop-blur-md rounded-xl border border-sky-700/50 p-8 shadow-[0_0_25px_rgba(14,165,233,0.2)] transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(14,165,233,0.3)]">
            <h3 className="font-harry-potter text-3xl text-sky-300 mb-2">Regular Admission</h3>
            <div className="flex items-end mb-6">
              <span className="text-4xl text-sky-100 font-bold">₹3,500</span>
              <span className="text-sky-300/70 ml-2 pb-1">per person</span>
            </div>
            <div className="mb-8">
              <p className="text-sky-100 italic">Available until April 10, 2026</p>
            </div>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-sky-900/50 rounded-full p-1 mr-3 mt-0.5">
                  <Check className="w-4 h-4 text-sky-400" />
                </div>
                <p className="text-sky-100">Standard admission</p>
              </div>
              <div className="flex items-start">
                <div className="bg-sky-900/50 rounded-full p-1 mr-3 mt-0.5">
                  <Check className="w-4 h-4 text-sky-400" />
                </div>
                <p className="text-sky-100">All event benefits included</p>
              </div>
              <div className="flex items-start">
                <div className="bg-sky-900/50 rounded-full p-1 mr-3 mt-0.5">
                  <Smile className="w-4 h-4 text-sky-400" />
                </div>
                <p className="text-sky-100">Regular seating arrangement</p>
              </div>
            </div>
            <button className="w-full font-harry-potter bg-gradient-to-r from-sky-800 to-sky-600 text-white px-6 py-3 rounded-full shadow-glow hover:shadow-[0_0_25px_rgba(14,165,233,0.6)] transition-all flex items-center justify-center">
              <span>Reserve Spot</span>
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
        
        {/* What's Included Section */}
        <div className="max-w-4xl mx-auto mt-16 bg-black/40 backdrop-blur-md rounded-xl border border-sky-700/30 overflow-hidden shadow-[0_0_25px_rgba(14,165,233,0.15)]">
          <div className="bg-gradient-to-r from-sky-900/80 via-sky-800/80 to-sky-900/80 px-6 py-4 border-b border-sky-700/50">
            <h3 className="font-harry-potter text-2xl text-sky-300 flex items-center">
              <Sparkles className="w-6 h-6 mr-3 text-sky-400" />
              What's Included In Your Magical Pass
            </h3>
          </div>
          
          <div className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-start mb-5">
                  <div className="bg-sky-900/50 rounded-full p-2 mr-4 mt-1">
                    <Hotel className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <h4 className="font-harry-potter text-xl text-sky-300 mb-2">Accommodation</h4>
                    <p className="text-sky-100/90">
                      2 nights stay in magical mountain retreat cabin accommodation with all amenities
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start mb-5">
                  <div className="bg-sky-900/50 rounded-full p-2 mr-4 mt-1">
                    <Utensils className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <h4 className="font-harry-potter text-xl text-sky-300 mb-2">All Meals Included</h4>
                    <p className="text-sky-100/90">
                      Breakfast, lunch, dinner, and magical snacks throughout the 3-day event
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start mb-5">
                  <div className="bg-sky-900/50 rounded-full p-2 mr-4 mt-1">
                    <GraduationCap className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <h4 className="font-harry-potter text-xl text-sky-300 mb-2">All Workshops</h4>
                    <p className="text-sky-100/90">
                      Access to all workshops, expert panels and networking sessions
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-start mb-5">
                  <div className="bg-sky-900/50 rounded-full p-2 mr-4 mt-1">
                    <Mountain className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <h4 className="font-harry-potter text-xl text-sky-300 mb-2">Mountain Activities</h4>
                    <p className="text-sky-100/90">
                      Guided mountain trails exploration and sunrise meditation sessions
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start mb-5">
                  <div className="bg-sky-900/50 rounded-full p-2 mr-4 mt-1">
                    <Music className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <h4 className="font-harry-potter text-xl text-sky-300 mb-2">Evening Entertainment</h4>
                    <p className="text-sky-100/90">
                      Magical evening entertainment, campfire gatherings and networking events
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start mb-5">
                  <div className="bg-sky-900/50 rounded-full p-2 mr-4 mt-1">
                    <Scroll className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <h4 className="font-harry-potter text-xl text-sky-300 mb-2">Event Materials</h4>
                    <p className="text-sky-100/90">
                      Digital workbooks, handouts and exclusive post-event resources
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-sky-200 italic mb-6">
                * Transportation to and from Mahabaleshwar is not included in the ticket price
              </p>
              <button className="font-harry-potter bg-gradient-to-r from-sky-700 to-sky-500 text-white px-8 py-4 rounded-full shadow-glow hover:shadow-[0_0_25px_rgba(14,165,233,0.6)] transition-all flex items-center justify-center mx-auto">
                <Wand2 className="mr-2 h-5 w-5" />
                <span>Secure Your Magical Spot</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
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
