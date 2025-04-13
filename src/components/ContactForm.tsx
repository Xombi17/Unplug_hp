
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { BookOpen, Mail, SendHorizonal } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "An owl has been dispatched with your message. We'll respond soon!",
      duration: 5000,
    });
  };
  
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-magical text-3xl md:text-5xl font-bold mb-6">Send Us an Owl</h2>
            <p className="text-lg mb-8">
              Have questions about our magical startup program? Ready to begin your entrepreneurial journey? Send us a message and we'll respond faster than owl post!
            </p>
            
            <div className="parchment p-6 mb-8">
              <div className="flex items-center mb-4">
                <Mail className="text-gryffindor-primary mr-3 h-5 w-5" />
                <span className="font-magical">applications@wizardingforge.com</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="text-gryffindor-primary mr-3 h-5 w-5" />
                <span className="font-magical">Platform 9¾, King's Cross, London</span>
              </div>
            </div>
            
            <div className="divider"></div>
            
            <div className="flex flex-col space-y-4">
              <h3 className="font-magical text-xl font-semibold">Application Deadlines</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="parchment p-4">
                  <p className="font-magical text-lg mb-1">Spring Cohort</p>
                  <p className="text-muted-foreground">January 15th</p>
                </div>
                <div className="parchment p-4">
                  <p className="font-magical text-lg mb-1">Summer Cohort</p>
                  <p className="text-muted-foreground">May 1st</p>
                </div>
                <div className="parchment p-4">
                  <p className="font-magical text-lg mb-1">Fall Cohort</p>
                  <p className="text-muted-foreground">August 15th</p>
                </div>
                <div className="parchment p-4">
                  <p className="font-magical text-lg mb-1">Winter Cohort</p>
                  <p className="text-muted-foreground">October 31st</p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="parchment">
            <CardHeader>
              <CardTitle className="font-magical text-2xl">Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name" className="font-magical">First Name</Label>
                    <Input id="first-name" placeholder="Harry" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name" className="font-magical">Last Name</Label>
                    <Input id="last-name" placeholder="Potter" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-magical">Email</Label>
                  <Input id="email" type="email" placeholder="harry.potter@hogwarts.edu" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="house" className="font-magical">Preferred House</Label>
                  <select id="house" className="w-full rounded-md border border-input bg-card px-3 py-2 text-sm">
                    <option value="">Select a house...</option>
                    <option value="gryffindor">Gryffindor</option>
                    <option value="slytherin">Slytherin</option>
                    <option value="ravenclaw">Ravenclaw</option>
                    <option value="hufflepuff">Hufflepuff</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-magical">Your Message</Label>
                  <Textarea id="message" placeholder="Tell us about your magical startup idea..." rows={4} required />
                </div>
                
                <Button type="submit" className="magical-button w-full">
                  <SendHorizonal className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
