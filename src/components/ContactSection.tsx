import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label"; // Assuming Label is needed based on the original structure
import { Button } from "@/components/ui/button";

import { MapPin, Phone, Mail, MessageSquare, Clock, Send } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: "79, Karimu Street, Ojuelegba Rd, Lagos, Nigeria",
      color: "bg-blue-600"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+234 803 389 9431",
      action: "tel:+2348033899431",
      color: "bg-green-600"
    },
    {
      icon: Mail,
      title: "Email",
      details: "clinicshc@yahoo.com",
      action: "mailto:clinicshc@yahoo.com",
      color: "bg-purple-600"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      details: "Chat with us on WhatsApp",
      action: "https://wa.me/2348033899431",
      color: "bg-green-500"
    }
  ];

  return (
    <section id="contact" ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground">We're here to help. Contact us for any questions or to schedule a visit.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className={`w-12 h-12 ${info.color} rounded-xl flex items-center justify-center mr-4`}>
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                      {info.action ? (
                        <a
                          href={info.action}
                          target={info.action.startsWith('http') ? '_blank' : undefined}
                          rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.details}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.details}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex items-start"
                >
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Operating Hours</h4>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 4:00 PM</p>
                      <p>Sunday: Emergency Only</p>
                      <p className="text-red-600 font-semibold">24/7 Emergency Services</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">Find Us</h3>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2607347180045!2d3.3635!3d6.5064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b0777b1b1b1%3A0x1b1b1b1b1b1b1b1b!2sOjuelegba%20Rd%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1623456789012!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sikeoye Hope Clinic Location"
                />
              </div>
            </motion.div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
            {/* Formspree form */}
            <form action="https://formspree.io/f/xanengbz" method="POST" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                            id="name"
                            name="name"
                            placeholder="Your name"
                            className="focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                            required
                          />
                  </div>
                  
                  <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                            id="phone"
                            name="phone"
                            placeholder="Your phone number"
                            className="focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                          />
                  </div>
                </div>
                
                <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        className="focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                        required
                    />
                </div>
                
                <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                        id="subject"
                        name="subject"
                        placeholder="How can we help you?"
                        className="focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                        required
                    />
                </div>
                
                <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message..."
                        rows={6}
                        className="focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 resize-none"
                        required
                    />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 font-semibold transform hover:scale-105 transition-all duration-300"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
