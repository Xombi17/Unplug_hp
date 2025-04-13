import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Code, Coins, DollarSign, Users, Wand } from "lucide-react";

const Spellbook = () => {
  return (
    <section id="spellbook" className="py-16 md:py-24 bg-hogwarts-stone/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 font-harryPotter px-4 py-1">Resources</Badge>
          <h2 className="font-harryPotter text-3xl md:text-5xl font-bold mb-6">The Startup Spellbook</h2>
          <p className="max-w-2xl mx-auto text-lg">
            Every wizard needs their spellbook. Here are the magical resources we provide to help your startup succeed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="parchment">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-gryffindor-primary flex items-center justify-center mb-4">
                <Wand className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="font-harryPotter text-2xl">Incubation Magic</CardTitle>
              <CardDescription>Transform your idea into reality</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-spellbook">
                Our dedicated workspace and structured program help you turn your raw idea into a viable business. Access mentors and resources to validate your concept.
              </p>
            </CardContent>
          </Card>
          
          <Card className="parchment">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-slytherin-primary flex items-center justify-center mb-4">
                <Coins className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="font-harryPotter text-2xl">Funding Potions</CardTitle>
              <CardDescription>Access capital to grow</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-spellbook">
                Connect with our network of angel investors and venture capitalists looking for their next magical investment. We'll help you perfect your pitch.
              </p>
            </CardContent>
          </Card>
          
          <Card className="parchment">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-ravenclaw-primary flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="font-harryPotter text-2xl">Technical Charms</CardTitle>
              <CardDescription>Build your product</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-spellbook">
                Our technical workshops and development resources help you build your minimum viable product and iterate based on user feedback.
              </p>
            </CardContent>
          </Card>
          
          <Card className="parchment">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-hufflepuff-primary flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-black" />
              </div>
              <CardTitle className="font-harryPotter text-2xl">Network Enchantment</CardTitle>
              <CardDescription>Connect with the right people</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-spellbook">
                Join our community of founders, mentors, and industry experts. Networking events and partnerships can open doors to new opportunities.
              </p>
            </CardContent>
          </Card>
          
          <Card className="parchment">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-gryffindor-secondary flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-gryffindor-primary" />
              </div>
              <CardTitle className="font-harryPotter text-2xl">Knowledge Scrolls</CardTitle>
              <CardDescription>Learn what you need to succeed</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-spellbook">
                Our curriculum covers business fundamentals, marketing, product development, and more to equip you with the knowledge you need.
              </p>
            </CardContent>
          </Card>
          
          <Card className="parchment">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-slytherin-secondary flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-slytherin-primary" />
              </div>
              <CardTitle className="font-harryPotter text-2xl">Growth Elixirs</CardTitle>
              <CardDescription>Scale your business</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-spellbook">
                When you're ready to scale, our growth strategies and market expansion resources help you reach new heights with sustainable growth.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Spellbook;
