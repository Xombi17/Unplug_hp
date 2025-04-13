import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Wand } from "lucide-react";

const Newsletter = () => {
  return (
    <section id="newsletter" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto glass-card p-8 md:p-12 bg-black/40 border border-sky-400/30 rounded-lg backdrop-blur-md">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-3/5">
              <Badge variant="outline" className="mb-4 font-magical px-4 py-1 bg-white/10 text-white border-sky-400/30">Stay Connected</Badge>
              <h2 className="font-magical text-3xl md:text-4xl font-bold mb-6 text-white">Subscribe to Our Owl Post</h2>
              <p className="text-white/80 mb-6">
                Join our magical mailing list to receive the latest news, upcoming events, investment opportunities, and exclusive tips from our mentors. Our owls are ready to deliver directly to your inbox!
              </p>
              
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-sky-600/20 rounded-full p-2">
                  <Wand className="h-5 w-5 text-sky-400" />
                </div>
                <div>
                  <h4 className="text-white font-magical font-medium">Exclusive Content</h4>
                  <p className="text-white/70 text-sm">Receive magical insights and resources not available elsewhere</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-sky-600/20 rounded-full p-2">
                  <Mail className="h-5 w-5 text-sky-400" />
                </div>
                <div>
                  <h4 className="text-white font-magical font-medium">Early Access</h4>
                  <p className="text-white/70 text-sm">Be the first to know about new events and opportunities</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-2/5 w-full">
              <div className="bg-black/50 border border-sky-400/20 rounded-lg p-6">
                <h3 className="font-magical text-xl text-white mb-4">Sign Up Now</h3>
                <form className="space-y-4">
                  <div>
                    <Input 
                      type="text" 
                      placeholder="Full Name" 
                      className="bg-white/5 border-sky-400/30 text-white placeholder:text-white/50 focus:border-sky-400"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Email Address" 
                      className="bg-white/5 border-sky-400/30 text-white placeholder:text-white/50 focus:border-sky-400"
                    />
                  </div>
                  <div>
                    <Button className="w-full bg-gradient-to-r from-sky-600 to-sky-400 text-white">
                      Subscribe
                    </Button>
                  </div>
                  <p className="text-white/50 text-xs text-center">
                    By subscribing, you agree to receive our magical newsletters. You can unsubscribe at any time.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter; 