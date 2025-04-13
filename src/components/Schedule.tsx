
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Clock, Map, CalendarDays } from "lucide-react";

const Schedule = () => {
  return (
    <section id="schedule" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 font-magical px-4 py-1 bg-white/10 text-white">Event Details</Badge>
          <h2 className="font-magical text-3xl md:text-5xl font-bold mb-6 text-white">Magical Timeline</h2>
        </div>
        
        <div className="glass-card p-8 mb-12 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div className="flex items-center mb-4 md:mb-0">
              <CalendarDays className="w-6 h-6 text-secondary mr-3" />
              <div>
                <h3 className="text-xl font-magical text-white">Saturday, April 27th, 2025</h3>
                <p className="text-white/70">Mark your magical calendars</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Clock className="w-6 h-6 text-secondary mr-3" />
              <div>
                <h3 className="text-xl font-magical text-white">2:00 PM - 5:00 PM</h3>
                <p className="text-white/70">Three hours of wonder</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-start">
            <Map className="w-6 h-6 text-secondary mr-3 mt-1" />
            <div>
              <h3 className="text-xl font-magical text-white">The Great Hall</h3>
              <p className="text-white/70">Hogwarts School of Witchcraft and Wizardry</p>
              <p className="text-white/90 mt-2">Access through Platform 9¾, follow the moving staircases to the Great Hall.</p>
            </div>
          </div>
        </div>
        
        <div className="relative ml-4 pl-6 border-l-2 border-dashed border-primary/60 max-w-2xl mx-auto">
          {/* Timeline items */}
          <div className="mb-12 relative">
            <div className="timeline-dot"></div>
            <div className="event-card">
              <h3 className="text-xl font-magical text-white mb-2">2:00 PM - Arrival & Sorting Ceremony</h3>
              <p className="text-white/90">Begin your journey by being sorted into your Hogwarts house. Enjoy welcome refreshments as you meet fellow wizards and witches.</p>
            </div>
          </div>
          
          <div className="mb-12 relative">
            <div className="timeline-dot"></div>
            <div className="event-card">
              <h3 className="text-xl font-magical text-white mb-2">2:30 PM - Analog Games & Activities</h3>
              <p className="text-white/90">Engage in wizarding board games, card tricks, and creative activities that don't require electrical magic.</p>
            </div>
          </div>
          
          <div className="mb-12 relative">
            <div className="timeline-dot"></div>
            <div className="event-card">
              <h3 className="text-xl font-magical text-white mb-2">3:30 PM - Potions Class (Refreshments)</h3>
              <p className="text-white/90">Create your own non-alcoholic potions (mocktails) and enjoy magical treats while sharing stories with new friends.</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="timeline-dot"></div>
            <div className="event-card">
              <h3 className="text-xl font-magical text-white mb-2">4:30 PM - Reflection & Farewell</h3>
              <p className="text-white/90">Share your favorite moments from the day and exchange owl addresses before returning to the muggle world, refreshed and reconnected.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
