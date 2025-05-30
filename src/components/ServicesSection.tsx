import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Stethoscope, 
  Baby, 
  Microscope, 
  Pill, 
  Ambulance, 
  Syringe, 
  Heart, 
  Eye 
} from "lucide-react";

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    {
      icon: Stethoscope,
      title: "General Consultation",
      description: "Comprehensive health assessments and medical consultations with our experienced physicians.",
      color: "bg-blue-600"
    },
    {
      icon: Baby,
      title: "Maternity & Pediatric Care",
      description: "Specialized care for mothers and children with dedicated pediatric and maternity services.",
      color: "bg-green-600"
    },
    {
      icon: Microscope,
      title: "Laboratory & Diagnostics",
      description: "Advanced diagnostic testing and laboratory services with quick and accurate results.",
      color: "bg-purple-600"
    },
    {
      icon: Pill,
      title: "Pharmacy Services",
      description: "On-site pharmacy with a wide range of medications and professional pharmaceutical care.",
      color: "bg-orange-500"
    },
    {
      icon: Ambulance,
      title: "Emergency & Trauma Care",
      description: "24/7 emergency services with rapid response and critical care capabilities.",
      color: "bg-red-600"
    },
    {
      icon: Syringe,
      title: "Immunization Programs",
      description: "Comprehensive vaccination services for all ages following WHO guidelines.",
      color: "bg-blue-500"
    },
    {
      icon: Heart,
      title: "Health Education & Wellness",
      description: "Preventive care programs and health education to promote community wellness.",
      color: "bg-teal-500"
    },
    {
      icon: Eye,
      title: "Eye Care Services",
      description: "Comprehensive eye examinations and vision care services for optimal eye health.",
      color: "bg-indigo-500"
    }
  ];

  return (
    <section id="services" ref={ref} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Medical Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive healthcare solutions tailored to meet your family's needs with expert care and modern facilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-background rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-4`}>
                <service.icon className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
