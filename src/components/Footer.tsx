
import React from 'react';
import { BookOpen, Facebook, Instagram, Twitter, Wand } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-hogwarts-stone/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Wand className="w-6 h-6 text-gryffindor-primary mr-2" />
              <span className="font-magical text-2xl font-bold">Wizarding Forge</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              The premier startup accelerator for magical entrepreneurs. We transform groundbreaking ideas into successful ventures.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-hogwarts-parchment flex items-center justify-center hover:bg-hogwarts-stone/20 transition-colors">
                <Twitter className="w-5 h-5 text-hogwarts-dark" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-hogwarts-parchment flex items-center justify-center hover:bg-hogwarts-stone/20 transition-colors">
                <Facebook className="w-5 h-5 text-hogwarts-dark" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-hogwarts-parchment flex items-center justify-center hover:bg-hogwarts-stone/20 transition-colors">
                <Instagram className="w-5 h-5 text-hogwarts-dark" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-magical text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#houses" className="text-muted-foreground hover:text-primary transition-colors">Houses</a></li>
              <li><a href="#spellbook" className="text-muted-foreground hover:text-primary transition-colors">Spellbook</a></li>
              <li><a href="#mentors" className="text-muted-foreground hover:text-primary transition-colors">Mentors</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-magical text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Events</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Success Stories</a></li>
              <li>
                <a href="#" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Apply Now
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="divider"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Wizarding Startup Forge. All rights reserved. No muggles allowed.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
