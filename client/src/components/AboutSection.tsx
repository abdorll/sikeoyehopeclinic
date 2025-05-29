import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Check, Info } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const achievements = [
    "Over 20 years of reliable healthcare",
    "High recovery and satisfaction rates", 
    "Clean and modern facility",
    "Genuine care from trained professionals"
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Sikeoye Hope Clinic</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Sikeoye Hope Clinic is a patient-first medical facility delivering quality healthcare in the heart of Lagos since 2001. 
              Our team of over 80 seasoned professionals works tirelessly to ensure every patient receives personalized care with 
              compassion, respect, and expertise.
            </p>
            
            <div className="space-y-4 mb-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{achievement}</h4>
                    <p className="text-muted-foreground text-sm">
                      {index === 0 && "Consistent quality service since our establishment in 2001"}
                      {index === 1 && "Proven track record of successful treatments and happy patients"}
                      {index === 2 && "State-of-the-art equipment in a hygienic environment"}
                      {index === 3 && "Experienced staff committed to compassionate healthcare"}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Info className="mr-2 h-4 w-4" />
              Learn More About Us
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <img
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
              alt="Medical team consultation"
              className="rounded-2xl shadow-lg w-full h-48 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
              alt="Doctor consultation"
              className="rounded-2xl shadow-lg w-full h-48 object-cover mt-8"
            />
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
              alt="Happy family with doctor"
              className="rounded-2xl shadow-lg w-full h-48 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
              alt="Modern hospital interior"
              className="rounded-2xl shadow-lg w-full h-48 object-cover mt-8"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
