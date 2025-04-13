import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

const Events = () => {
  return (
    <section id="events" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 font-magical px-4 py-1 bg-white/10 text-white border-amber-400/30">Calendar</Badge>
          <h2 className="font-magical text-3xl md:text-5xl font-bold mb-6 text-white">Upcoming Magical Events</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Join us for these exclusive events designed to accelerate your startup's growth and connect you with the right people.
          </p>
        </div>
        
        <div className="space-y-8">
          <div className="glass-card p-6 bg-black/40 border border-amber-400/30 rounded-lg backdrop-blur-md hover:border-amber-400/60 transition-all">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="bg-gradient-to-br from-amber-600/20 to-amber-400/20 rounded-lg p-4 text-center min-w-[120px]">
                <span className="text-amber-400 text-3xl font-bold block">15</span>
                <span className="text-white/80">September</span>
              </div>
              
              <div className="flex-grow">
                <h3 className="text-xl font-magical font-bold text-white mb-2">Startup Pitch Competition</h3>
                <p className="text-white/80 mb-4">
                  Present your innovative ideas to a panel of experienced investors and industry experts for a chance to win funding and mentorship.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center text-white/70">
                    <Clock className="w-4 h-4 mr-2 text-amber-400" />
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex items-center text-white/70">
                    <MapPin className="w-4 h-4 mr-2 text-amber-400" />
                    <span>The Great Hall</span>
                  </div>
                  <div className="flex items-center text-white/70">
                    <Users className="w-4 h-4 mr-2 text-amber-400" />
                    <span>Limited to 20 startups</span>
                  </div>
                </div>
              </div>
              
              <Button className="bg-gradient-to-r from-amber-600 to-amber-400 text-white mt-4 md:mt-0 min-w-[120px]">
                Register
              </Button>
            </div>
          </div>
          
          <div className="glass-card p-6 bg-black/40 border border-amber-400/30 rounded-lg backdrop-blur-md hover:border-amber-400/60 transition-all">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="bg-gradient-to-br from-amber-600/20 to-amber-400/20 rounded-lg p-4 text-center min-w-[120px]">
                <span className="text-amber-400 text-3xl font-bold block">22</span>
                <span className="text-white/80">September</span>
              </div>
              
              <div className="flex-grow">
                <h3 className="text-xl font-magical font-bold text-white mb-2">Venture Capital Networking</h3>
                <p className="text-white/80 mb-4">
                  Connect with leading venture capitalists and angel investors looking for promising startups in a relaxed mountain setting.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center text-white/70">
                    <Clock className="w-4 h-4 mr-2 text-amber-400" />
                    <span>6:00 PM - 9:00 PM</span>
                  </div>
                  <div className="flex items-center text-white/70">
                    <MapPin className="w-4 h-4 mr-2 text-amber-400" />
                    <span>Astronomy Tower</span>
                  </div>
                  <div className="flex items-center text-white/70">
                    <Users className="w-4 h-4 mr-2 text-amber-400" />
                    <span>By invitation only</span>
                  </div>
                </div>
              </div>
              
              <Button className="bg-gradient-to-r from-amber-600 to-amber-400 text-white mt-4 md:mt-0 min-w-[120px]">
                Apply
              </Button>
            </div>
          </div>
          
          <div className="glass-card p-6 bg-black/40 border border-amber-400/30 rounded-lg backdrop-blur-md hover:border-amber-400/60 transition-all">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="bg-gradient-to-br from-amber-600/20 to-amber-400/20 rounded-lg p-4 text-center min-w-[120px]">
                <span className="text-amber-400 text-3xl font-bold block">30</span>
                <span className="text-white/80">September</span>
              </div>
              
              <div className="flex-grow">
                <h3 className="text-xl font-magical font-bold text-white mb-2">Innovation Workshop Series</h3>
                <p className="text-white/80 mb-4">
                  A full-day workshop on integrating magical elements into modern technology, led by Professor Flitwick and industry innovators.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center text-white/70">
                    <Clock className="w-4 h-4 mr-2 text-amber-400" />
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex items-center text-white/70">
                    <MapPin className="w-4 h-4 mr-2 text-amber-400" />
                    <span>Charms Classroom</span>
                  </div>
                  <div className="flex items-center text-white/70">
                    <Users className="w-4 h-4 mr-2 text-amber-400" />
                    <span>30 participants max</span>
                  </div>
                </div>
              </div>
              
              <Button className="bg-gradient-to-r from-amber-600 to-amber-400 text-white mt-4 md:mt-0 min-w-[120px]">
                Reserve
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="font-magical inline-flex items-center py-3 px-6 rounded-lg border border-amber-400/50 text-amber-400 hover:bg-amber-400/10 transition-colors">
            <Calendar className="mr-2 h-5 w-5" />
            View Full Calendar
          </a>
        </div>
      </div>
    </section>
  );
};

export default Events; 