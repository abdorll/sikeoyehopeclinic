import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, UserCheck, DollarSign, Building, Users, Award } from "lucide-react";

export default function WhyChooseUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    {
      icon: Clock,
      title: "24/7 Emergency Response",
      description: "Round-the-clock emergency services ensuring immediate medical attention when you need it most."
    },
    {
      icon: UserCheck,
      title: "Experienced & Caring Medical Staff",
      description: "Our team of over 80 qualified professionals brings decades of medical expertise and compassionate care."
    },
    {
      icon: DollarSign,
      title: "Affordable & Transparent Pricing",
      description: "Quality healthcare at affordable rates with no hidden fees and transparent pricing policies."
    },
    {
      icon: Building,
      title: "Modern Facilities",
      description: "State-of-the-art medical equipment and clean, modern facilities ensuring the best treatment environment."
    },
    {
      icon: Users,
      title: "Over 10M+ Patients Served",
      description: "Two decades of trusted healthcare service with millions of satisfied patients and families."
    },
    {
      icon: Award,
      title: "Serving Since 2001",
      description: "Over 20 years of continuous service to the Lagos community with a proven track record of excellence."
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-600 to-green-600">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose Sikeoye Hope Clinic</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Experience the difference that quality healthcare makes. Our commitment to excellence sets us apart.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center text-white"
            >
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-blue-100 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
