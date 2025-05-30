import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.9), rgba(5, 150, 105, 0.8)), url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&h=1200')`
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Compassionate Care,</span>
            <span className="block text-green-300">Trusted for Over 20 Years</span>
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your family's health is our priority. Book a consultation with our expert medical team today.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("booking")}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book a Consultation
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 text-lg font-semibold transition-all duration-300"
          >
            <a href="tel:+2348033899431">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </a>
          </Button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-12 flex flex-wrap justify-center items-center space-x-8 text-white"
        >
          <div className="text-center mb-4">
            <div className="text-3xl font-bold text-green-300">24/7</div>
            <div className="text-sm">Emergency Care</div>
          </div>
          <div className="text-center mb-4">
            <div className="text-3xl font-bold text-green-300">80+</div>
            <div className="text-sm">Expert Doctors</div>
          </div>
          <div className="text-center mb-4">
            <div className="text-3xl font-bold text-green-300">10M+</div>
            <div className="text-sm">Patients Served</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
