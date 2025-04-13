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
          <Badge variant="outline" className="mb-4 font-harry-potter px-6 py-2 bg-sky-900/40 text-sky-100 border-sky-400/40 shadow-[0_0_15px_rgba(14,165,233,0.3)]">
            Magical Timetable
          </Badge>
          <h2 className="font-harry-potter text-4xl md:text-6xl font-bold mb-6 text-sky-300 shadow-[0_0_15px_rgba(14,165,233,0.3)]">
            Event Schedule
          </h2>
          <p className="text-sky-100 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Your detailed guide to our three-day magical retreat at Mahabaleshwar Mountains
          </p>
        </div>
        
        {/* Event details card */}
        <div className="max-w-5xl mx-auto mb-12 bg-black/60 backdrop-blur-md rounded-xl border border-sky-700/50 p-6 shadow-[0_0_25px_rgba(14,165,233,0.2)]">
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
        <div className="max-w-5xl mx-auto mb-10">
          <div className="flex justify-center">
            <div className="inline-flex bg-black/60 backdrop-blur-md rounded-full p-1 border border-sky-700/50 shadow-[0_0_15px_rgba(14,165,233,0.15)]">
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
        </div>

        {/* Schedule content */}
        <div className="max-w-5xl mx-auto">
          {/* Day header */}
          <div className="bg-gradient-to-r from-sky-900/80 via-sky-800/80 to-sky-900/80 rounded-t-xl px-6 py-4 border border-sky-700/50">
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
          
          {/* Day content */}
          <div className="bg-black/40 backdrop-blur-md rounded-b-xl border-x border-b border-sky-700/30 overflow-hidden shadow-[0_0_25px_rgba(14,165,233,0.15)]">
            {/* Day One Content */}
            {activeDay === 1 && (
              <div className="grid gap-6 p-6 md:grid-cols-2">
                <EventCard 
                  time="4:00 PM"
                  title="Arrival and Check-in"
                  description="Welcome to our Magical Beachside Sanctuary. Collect your welcome kit and settle into your accommodations."
                  icon={<CalendarDays className="w-5 h-5 text-sky-400" />}
                />
                
                <EventCard 
                  time="5:00-6:30 PM"
                  title="Welcome Drink + Snacks"
                  description="Enjoy magical refreshments and meet your fellow wizards and witches in an informal setting."
                  icon={<Coffee className="w-5 h-5 text-sky-400" />}
                />
                
                <EventCard 
                  time="7:00-8:00 PM"
                  title="Unplug Kickoff"
                  description="Opening ceremony and introduction to the magical entrepreneurship weekend ahead."
                  icon={<Sparkles className="w-5 h-5 text-sky-400" />}
                />
                
                <EventCard 
                  time="8:30-9:30 PM"
                  title="Dinner & BBQ"
                  description="Feast on a delicious dinner with magical cuisine and beachside barbecue."
                  icon={<Utensils className="w-5 h-5 text-sky-400" />}
                />
                
                <EventCard 
                  time="9:30-11:00 PM"
                  title="Ice-breaker & Pitch by Campfire"
                  description="Connect with fellow entrepreneurs around the magical campfire and share your startup ideas."
                  icon={<Scroll className="w-5 h-5 text-sky-400" />}
                />
                
                <EventCard 
                  time="11:00 PM+"
                  title="Build or Sleep"
                  description="Continue developing your ideas with newfound collaborators or retire to your magical chambers."
                  icon={<Moon className="w-5 h-5 text-sky-400" />}
                />
              </div>
            )}
            
            {/* Day Two Content */}
            {activeDay === 2 && (
              <div className="grid gap-6 p-6 md:grid-cols-2">
                <EventCard 
                  time="7:30-8:30 AM"
                  title="Breakfast"
                  description="Start your day with a hearty magical breakfast to fuel your creativity."
                  icon={<Coffee className="w-5 h-5 text-sky-400" />}
                />
                
                <EventCard 
                  time="9:00-10:30 AM"
                  title="Workshop: Spellbinding Pitches"
                  description="Learn the art of crafting compelling startup pitches that captivate investors."
                  icon={<GraduationCap className="w-5 h-5 text-sky-400" />}
                />
                
                <EventCard 
                  time="11:00-12:30 PM"
                  title="Expert Panel: Magical Innovation"
                  description="Industry leaders share insights on disruptive innovation and market opportunities."
                  icon={<BookOpen className="w-5 h-5 text-sky-400" />}
                />
                
                <EventCard 
                  time="1:00-2:00 PM"
                  title="Lunch Break"
                  description="Networking lunch with fellow entrepreneurs and mentors."
                  icon={<Utensils className="w-5 h-5 text-sky-400" />}
                />
                
                <EventCard 
                  time="2:30-5:30 PM"
                  title="Mentor Matching & Working Session"
                  description="One-on-one sessions with industry experts matched to your specific startup needs."
                  icon={<Stars className="w-5 h-5 text-sky-400" />}
                />
                
                <EventCard 
                  time="6:00-7:30 PM"
                  title="Sunset Networking"
                  description="Mountain trails exploration and networking with light refreshments."
                  icon={<Music className="w-5 h-5 text-sky-400" />}
                />
                
                <EventCard 
                  time="8:00-9:30 PM"
                  title="Magical Banquet"
                  description="An evening of celebration, featuring special entertainment and networking opportunities."
                  icon={<Utensils className="w-5 h-5 text-sky-400" />}
                />
              </div>
            )}
            
            {/* Day Three Content */}
            {activeDay === 3 && (
              <div className="grid gap-6 p-6 md:grid-cols-2">
                <EventCard 
                  time="7:30-8:30 AM"
                  title="Final Breakfast"
                  description="Energize for your final day with a nutritious breakfast."
                  icon={<Coffee className="w-5 h-5 text-sky-400" />}
                />
                
                <EventCard 
                  time="9:00-10:00 AM"
                  title="Pitch Preparation"
                  description="Final polishing of your startup pitches with mentor guidance."
                  icon={<Scroll className="w-5 h-5 text-sky-400" />}
                />
                
                <EventCard 
                  time="10:30-12:30 PM"
                  title="Startup Showcase"
                  description="Present your refined business ideas to a panel of investors and industry experts."
                  icon={<Sparkles className="w-5 h-5 text-sky-400" />}
                />
                
                <EventCard 
                  time="1:00-2:00 PM"
                  title="Celebratory Lunch"
                  description="Final networking lunch with entrepreneurs, mentors and investors."
                  icon={<Utensils className="w-5 h-5 text-sky-400" />}
                />
                
                <EventCard 
                  time="2:30-3:30 PM"
                  title="Awards & Closing Ceremony"
                  description="Recognition of outstanding projects, startup funding announcements, and closing remarks."
                  icon={<GraduationCap className="w-5 h-5 text-sky-400" />}
                />
                
                <EventCard 
                  time="4:00 PM"
                  title="Departure"
                  description="Farewell to our magical retreat. Transportation arrangements back to the city."
                  icon={<Sparkles className="w-5 h-5 text-sky-400" />}
                />
              </div>
            )}
          </div>
          
          {/* Magical signature */}
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

// EventCard component
const EventCard = ({ time, title, description, icon }) => {
  return (
    <div className="bg-sky-900/20 backdrop-blur-md border border-sky-700/30 rounded-lg p-4 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(14,165,233,0.2)] hover:border-sky-400/50">
      <div className="flex items-center mb-3">
        <div className="flex items-center mr-4">
          <Clock className="text-sky-500 w-5 h-5 mr-2" />
          <span className="text-sky-300 font-harry-potter">{time}</span>
        </div>
      </div>
      <div className="flex items-center mb-2">
        <div className="w-10 h-10 bg-sky-900/50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
          {icon}
        </div>
        <h4 className="font-harry-potter text-xl text-sky-300">{title}</h4>
      </div>
      <p className="text-sky-100/90 pl-[52px]">
        {description}
      </p>
    </div>
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
  animation: float 4s ease-in-out infinite;
}

.shadow-glow {
  box-shadow: 0 0 15px rgba(14, 165, 233, 0.3);
}

.magical-text-shadow {
  text-shadow: 0 0 10px rgba(14, 165, 233, 0.5);
}
`;

if (typeof document !== 'undefined') {
  document.head.appendChild(customStyleTag);
}

export default Schedule;
