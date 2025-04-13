import React, { useState, useEffect } from 'react';
import { Badge } from "@/components/ui/badge";
import { Sparkles, Clock, Stars, BookOpen, GraduationCap, Scroll, ScrollText, Feather, CalendarDays, Coffee, Utensils, Music, Moon, MapPin, Mountain, Coins, Wand2, Hotel, Check, ChevronRight, Smile, Calendar, Users, Heart, Award, ChefHat, PartyPopper } from "lucide-react";

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(1);

  useEffect(() => {
    // Any existing useEffect logic
  }, [activeDay]);

  return (
    <>
    <section id="schedule" className="py-24 bg-gradient-to-b from-black to-sky-950/30 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div data-gsap-anim="fade-down" data-gsap-delay="0.1" className="inline-block mb-4">
            <span className="text-xs uppercase tracking-wider bg-sky-700/80 text-white px-6 py-2 rounded-full 
              font-harry-potter border border-sky-300/50 shadow-[0_0_15px_rgba(14,165,233,0.5)]">
              Magical Timetable
            </span>
          </div>
          
          <h2 data-gsap-anim="fade-up" data-gsap-delay="0.2" className="text-5xl md:text-6xl font-bold mb-6 font-harry-potter magical-text-shadow">
            <span className="text-sky-400">Event</span> Schedule
          </h2>
          
          <div data-gsap-anim="fade-up" data-gsap-delay="0.3" className="h-1 w-24 bg-gradient-to-r from-sky-500 to-sky-300 mb-10 mx-auto"></div>
          
          <p data-gsap-anim="fade-up" data-gsap-delay="0.4" className="max-w-3xl mx-auto text-lg text-white/80 mb-12">
            A carefully crafted schedule for your three-day magical retreat
          </p>
        </div>
        
        {/* Day selector */}
        <div data-gsap-anim="fade-up" data-gsap-delay="0.5" className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-md overflow-hidden border border-sky-700/50">
            {[1, 2, 3].map(day => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-8 py-4 font-harry-potter text-lg transition-all ${
                  activeDay === day 
                    ? 'bg-sky-700 text-white' 
                    : 'bg-sky-900/20 text-sky-300 hover:bg-sky-800/30'
                }`}
              >
                Day {day}
              </button>
            ))}
          </div>
        </div>

        {/* Schedule for Day 1 */}
        <div data-gsap-stagger="0.1" data-gsap-anim="fade-up" className={activeDay === 1 ? 'block' : 'hidden'}>
          {day1Schedule.map((event, index) => (
            <div 
              key={index}
              data-gsap-stagger-item
              className="mb-8 bg-gradient-to-r from-sky-900/10 to-transparent p-8 rounded-lg border-l-4 border-sky-500 hover:shadow-[0_0_25px_rgba(14,165,233,0.2)] transition-all"
            >
              <div className="flex flex-wrap items-start">
                <div className="w-full md:w-1/4 mb-4 md:mb-0">
                  <div className="flex items-center mb-2">
                    <Clock className="h-5 w-5 text-sky-400 mr-2" />
                    <span className="text-sky-300 font-harry-potter">{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-sky-400 mr-2" />
                    <span className="text-sky-300 font-harry-potter">{event.location}</span>
                  </div>
                </div>
                
                <div className="w-full md:w-3/4 md:pl-6">
                  <div className="flex items-center mb-2">
                    {React.createElement(event.icon, { className: "h-6 w-6 text-sky-400 mr-3" })}
                    <h3 className="text-2xl font-harry-potter text-white">{event.title}</h3>
                  </div>
                  <p className="text-white/70">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Schedule for Day 2 */}
        <div data-gsap-stagger="0.1" data-gsap-anim="fade-up" className={activeDay === 2 ? 'block' : 'hidden'}>
          {day2Schedule.map((event, index) => (
            <div 
              key={index}
              data-gsap-stagger-item
              className="mb-8 bg-gradient-to-r from-sky-900/10 to-transparent p-8 rounded-lg border-l-4 border-sky-500 hover:shadow-[0_0_25px_rgba(14,165,233,0.2)] transition-all"
            >
              <div className="flex flex-wrap items-start">
                <div className="w-full md:w-1/4 mb-4 md:mb-0">
                  <div className="flex items-center mb-2">
                    <Clock className="h-5 w-5 text-sky-400 mr-2" />
                    <span className="text-sky-300 font-harry-potter">{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-sky-400 mr-2" />
                    <span className="text-sky-300 font-harry-potter">{event.location}</span>
                  </div>
                </div>
                
                <div className="w-full md:w-3/4 md:pl-6">
                  <div className="flex items-center mb-2">
                    {React.createElement(event.icon, { className: "h-6 w-6 text-sky-400 mr-3" })}
                    <h3 className="text-2xl font-harry-potter text-white">{event.title}</h3>
                  </div>
                  <p className="text-white/70">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Schedule for Day 3 */}
        <div data-gsap-stagger="0.1" data-gsap-anim="fade-up" className={activeDay === 3 ? 'block' : 'hidden'}>
          {day3Schedule.map((event, index) => (
            <div 
              key={index}
              data-gsap-stagger-item
              className="mb-8 bg-gradient-to-r from-sky-900/10 to-transparent p-8 rounded-lg border-l-4 border-sky-500 hover:shadow-[0_0_25px_rgba(14,165,233,0.2)] transition-all"
            >
              <div className="flex flex-wrap items-start">
                <div className="w-full md:w-1/4 mb-4 md:mb-0">
                  <div className="flex items-center mb-2">
                    <Clock className="h-5 w-5 text-sky-400 mr-2" />
                    <span className="text-sky-300 font-harry-potter">{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-sky-400 mr-2" />
                    <span className="text-sky-300 font-harry-potter">{event.location}</span>
                  </div>
                </div>
                
                <div className="w-full md:w-3/4 md:pl-6">
                  <div className="flex items-center mb-2">
                    {React.createElement(event.icon, { className: "h-6 w-6 text-sky-400 mr-3" })}
                    <h3 className="text-2xl font-harry-potter text-white">{event.title}</h3>
                  </div>
                  <p className="text-white/70">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
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
        <div data-gsap-anim="fade-up" className="text-center mb-16">
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
          <div data-gsap-anim="fade-right" className="bg-black/60 backdrop-blur-md rounded-xl border border-sky-700/50 p-8 shadow-[0_0_25px_rgba(14,165,233,0.2)] transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(14,165,233,0.3)]">
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
          <div data-gsap-anim="fade-left" className="bg-black/60 backdrop-blur-md rounded-xl border border-sky-700/50 p-8 shadow-[0_0_25px_rgba(14,165,233,0.2)] transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(14,165,233,0.3)]">
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
        <div data-gsap-anim="fade-up" data-gsap-delay="0.3" className="max-w-4xl mx-auto mt-16 bg-black/40 backdrop-blur-md rounded-xl border border-sky-700/30 overflow-hidden shadow-[0_0_25px_rgba(14,165,233,0.15)]">
          <div className="bg-gradient-to-r from-sky-900/80 via-sky-800/80 to-sky-900/80 px-6 py-4 border-b border-sky-700/50">
            <h3 className="font-harry-potter text-2xl text-sky-300 flex items-center">
              <Sparkles className="w-6 h-6 mr-3 text-sky-400" />
              What's Included In Your Magical Pass
            </h3>
          </div>
          
          <div className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div data-gsap-stagger="0.1">
                <div data-gsap-stagger-item className="flex items-start mb-5">
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
                
                <div data-gsap-stagger-item className="flex items-start mb-5">
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
                
                <div data-gsap-stagger-item className="flex items-start mb-5">
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
              
              <div data-gsap-stagger="0.1" data-gsap-delay="0.3">
                <div data-gsap-stagger-item className="flex items-start mb-5">
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
                
                <div data-gsap-stagger-item className="flex items-start mb-5">
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
                
                <div data-gsap-stagger-item className="flex items-start mb-5">
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
            
            <div data-gsap-anim="fade-up" data-gsap-delay="0.6" className="text-center mt-8">
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

// Event schedules
const day1Schedule = [
  {
    time: "12:00 PM - 2:00 PM",
    location: "Great Hall Entrance",
    icon: Calendar,
    title: "Arrival and Check-in",
    description: "Begin your magical journey with a warm welcome. Collect your room keys, welcome pack, and conference materials."
  },
  {
    time: "2:00 PM - 3:30 PM",
    location: "Courtyard",
    icon: Coffee,
    title: "Welcome Drink + Snacks",
    description: "Connect with fellow attendees over refreshments in our enchanted courtyard. Light beverages and magical treats will be served."
  },
  {
    time: "4:00 PM - 5:30 PM",
    location: "Great Hall",
    icon: Sparkles,
    title: "Opening Ceremony: The Sorting",
    description: "Official kickoff with welcoming speeches, an overview of the retreat, and sorting participants into innovation houses for team activities."
  },
  {
    time: "6:00 PM - 7:30 PM",
    location: "Dining Hall",
    icon: Utensils,
    title: "Dinner & BBQ",
    description: "Enjoy a feast worthy of Hogwarts with a barbecue dinner under the stars. Special dietary requirements accommodated."
  },
  {
    time: "8:00 PM - 10:00 PM",
    location: "Astronomy Tower",
    icon: Music,
    title: "Networking Night: Wizard's Mixer",
    description: "Break the ice with fellow entrepreneurs through fun games and activities. Build connections that will last throughout the retreat and beyond."
  }
];

const day2Schedule = [
  {
    time: "7:30 AM - 9:00 AM",
    location: "Dining Hall",
    icon: Coffee,
    title: "Breakfast",
    description: "Start your day with a hearty breakfast buffet featuring both magic-inspired and traditional morning options."
  },
  {
    time: "9:30 AM - 11:00 AM",
    location: "Defense Against Dark Arts Room",
    icon: BookOpen,
    title: "Keynote: Business Defense Strategies",
    description: "Learn crucial entrepreneurial defense tactics from our master speaker who has successfully navigated startup challenges."
  },
  {
    time: "11:30 AM - 1:00 PM",
    location: "Different Classrooms",
    icon: Users,
    title: "Breakout Sessions (Track 1)",
    description: "Choose from specialized workshops on funding, marketing, product development, or team building."
  },
  {
    time: "1:00 PM - 2:30 PM",
    location: "Great Hall",
    icon: Utensils,
    title: "Themed Lunch: House Competition",
    description: "Enjoy lunch while participating in a friendly competition between the innovation houses formed during sorting."
  },
  {
    time: "3:00 PM - 4:30 PM",
    location: "Different Classrooms",
    icon: Users,
    title: "Breakout Sessions (Track 2)",
    description: "Second round of specialized workshops with new topics and skilled facilitators."
  },
  {
    time: "5:00 PM - 6:30 PM",
    location: "Potions Laboratory",
    icon: Heart,
    title: "Mentorship Matchmaking",
    description: "Connect with mentors in your field for one-on-one advice sessions. Pre-scheduling recommended."
  },
  {
    time: "7:00 PM - 9:00 PM",
    location: "Great Hall",
    icon: ChefHat,
    title: "Gala Dinner: Magical Feast",
    description: "Formal dinner with entertainment and surprise magical performances. Dress code: Smart casual with a touch of magic."
  }
];

const day3Schedule = [
  {
    time: "8:00 AM - 9:30 AM",
    location: "Dining Hall",
    icon: Coffee,
    title: "Breakfast",
    description: "Final day breakfast with overnight attendees. Connect over coffee before the day's activities begin."
  },
  {
    time: "10:00 AM - 12:00 PM",
    location: "Room of Requirement",
    icon: Sparkles,
    title: "Innovation Challenge: Final Pitch",
    description: "Teams present their solutions to the retreat challenge. Judges provide feedback and select winners."
  },
  {
    time: "12:30 PM - 2:00 PM",
    location: "Great Hall",
    icon: Utensils,
    title: "Farewell Lunch",
    description: "Last meal together before departure. Reflect on connections made and knowledge gained during the retreat."
  },
  {
    time: "2:30 PM - 3:30 PM",
    location: "Great Hall",
    icon: Award,
    title: "Closing Ceremony & Awards",
    description: "Celebration of achievements with awards for challenge winners and special recognitions. Final words from organizers."
  },
  {
    time: "3:30 PM - 4:30 PM",
    location: "Courtyard",
    icon: PartyPopper,
    title: "Farewell Tea & Departure",
    description: "Final networking opportunity with contact exchanges before heading back to the muggle world, inspired and ready to innovate."
  }
];

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
