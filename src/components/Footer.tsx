import React from 'react';
import { BookOpen, Facebook, Instagram, Twitter, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-amber-400/20 bg-black/60 backdrop-blur-md">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Sparkles className="w-6 h-6 text-amber-400 mr-2" />
              <span className="font-magical text-2xl font-bold text-white">Hogwarts<span className="text-amber-400">Launch</span></span>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              The premier startup launchpad for magical entrepreneurs. We transform groundbreaking ideas into successful ventures in our enchanted mountain setting.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-amber-600/20 flex items-center justify-center hover:bg-amber-600/40 transition-colors">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-amber-600/20 flex items-center justify-center hover:bg-amber-600/40 transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-amber-600/20 flex items-center justify-center hover:bg-amber-600/40 transition-colors">
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-magical text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-white/70 hover:text-amber-400 transition-colors">About Us</a></li>
              <li><a href="#features" className="text-white/70 hover:text-amber-400 transition-colors">Services</a></li>
              <li><a href="#mentors" className="text-white/70 hover:text-amber-400 transition-colors">Mentors</a></li>
              <li><a href="#events" className="text-white/70 hover:text-amber-400 transition-colors">Events</a></li>
              <li><a href="#newsletter" className="text-white/70 hover:text-amber-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-magical text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-amber-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-white/70 hover:text-amber-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-white/70 hover:text-amber-400 transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-white/70 hover:text-amber-400 transition-colors">Investor Relations</a></li>
              <li>
                <a href="#" className="flex items-center text-white/70 hover:text-amber-400 transition-colors">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Apply Now
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-amber-400/20 my-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/60">
            © 2025 Unplug Startup Launchpad. All rights reserved. No muggles allowed.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-white/60 hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-white/60 hover:text-amber-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-white/60 hover:text-amber-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 