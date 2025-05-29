import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertAppointmentSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Calendar, User, Phone, Mail, Stethoscope, Clock } from "lucide-react";
import type { InsertAppointment } from "@shared/schema";

export default function BookingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertAppointment>({
    resolver: zodResolver(insertAppointmentSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      service: "",
      preferredDate: "",
      preferredTime: "",
      message: "",
    },
  });

  const appointmentMutation = useMutation({
    mutationFn: async (data: InsertAppointment) => {
      const response = await apiRequest("POST", "/api/appointments", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Appointment Booked Successfully!",
        description: data.message,
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/appointments"] });
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: "Booking Failed",
        description: error.message || "Failed to book appointment. Please try again.",
      });
    },
  });

  const onSubmit = (data: InsertAppointment) => {
    appointmentMutation.mutate(data);
  };

  const services = [
    { value: "general", label: "General Consultation" },
    { value: "maternity", label: "Maternity & Pediatric Care" },
    { value: "laboratory", label: "Laboratory & Diagnostics" },
    { value: "pharmacy", label: "Pharmacy Services" },
    { value: "emergency", label: "Emergency Care" },
    { value: "immunization", label: "Immunization" },
    { value: "wellness", label: "Health Education & Wellness" },
  ];

  const timeSlots = [
    { value: "08:00", label: "08:00 AM" },
    { value: "09:00", label: "09:00 AM" },
    { value: "10:00", label: "10:00 AM" },
    { value: "11:00", label: "11:00 AM" },
    { value: "12:00", label: "12:00 PM" },
    { value: "14:00", label: "02:00 PM" },
    { value: "15:00", label: "03:00 PM" },
    { value: "16:00", label: "04:00 PM" },
    { value: "17:00", label: "05:00 PM" },
  ];

  // Set minimum date to today
  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="booking" ref={ref} className="py-20 bg-gradient-to-br from-blue-600 to-green-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Book Your Consultation</h2>
            <p className="text-xl text-blue-100">
              Schedule an appointment with our expert medical team. We're here to help you and your family stay healthy.
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-background rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 text-sm font-semibold text-foreground">
                          <User className="h-4 w-4 text-blue-600" />
                          Full Name *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your full name"
                            className="focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 text-sm font-semibold text-foreground">
                          <Phone className="h-4 w-4 text-blue-600" />
                          Phone Number *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="080XXXXXXXX"
                            className="focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-sm font-semibold text-foreground">
                        <Mail className="h-4 w-4 text-blue-600" />
                        Email Address
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          className="focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-sm font-semibold text-foreground">
                        <Stethoscope className="h-4 w-4 text-blue-600" />
                        Service Needed *
                      </FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300">
                            <SelectValue placeholder="Select a service..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service.value} value={service.value}>
                              {service.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="preferredDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 text-sm font-semibold text-foreground">
                          <Calendar className="h-4 w-4 text-blue-600" />
                          Preferred Date *
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="date"
                            min={today}
                            className="focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="preferredTime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 text-sm font-semibold text-foreground">
                          <Clock className="h-4 w-4 text-blue-600" />
                          Preferred Time *
                        </FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300">
                              <SelectValue placeholder="Select time..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {timeSlots.map((slot) => (
                              <SelectItem key={slot.value} value={slot.value}>
                                {slot.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-foreground">
                        Additional Information
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Please describe your symptoms or any specific concerns..."
                          rows={4}
                          className="focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="text-center">
                  <Button
                    type="submit"
                    disabled={appointmentMutation.isPending}
                    className="bg-green-600 hover:bg-green-700 text-white px-12 py-4 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    {appointmentMutation.isPending ? "Booking..." : "Book Appointment"}
                  </Button>
                </div>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
