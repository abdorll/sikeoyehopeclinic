import { Heart, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <Heart className="h-8 w-8 text-green-500 mr-2" />
              <span className="text-xl font-bold">Sikeoye Hope Clinic</span>
            </div>
            <p className="text-gray-300 mb-4">
              Compassionate healthcare serving the Lagos community since 2001. Your family's health is our priority.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-green-500 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-green-500 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-green-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-green-500 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection("home")}
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("booking")}
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  Book Appointment
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><span className="text-gray-300">General Consultation</span></li>
              <li><span className="text-gray-300">Maternity Care</span></li>
              <li><span className="text-gray-300">Laboratory Services</span></li>
              <li><span className="text-gray-300">Emergency Care</span></li>
              <li><span className="text-gray-300">Pharmacy</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-3">
              <p className="text-gray-300 flex items-start">
                <span className="text-green-500 mr-2 mt-1">📍</span>
                79, Karimu Street, Ojuelegba Rd, Lagos
              </p>
              <p className="text-gray-300">
                <span className="text-green-500 mr-2">📞</span>
                <a href="tel:+2348033899431" className="hover:text-green-500 transition-colors">
                  +234 803 389 9431
                </a>
              </p>
              <p className="text-gray-300">
                <span className="text-green-500 mr-2">✉️</span>
                <a href="mailto:clinicshc@yahoo.com" className="hover:text-green-500 transition-colors">
                  clinicshc@yahoo.com
                </a>
              </p>
              <p className="text-gray-300">
                <span className="text-green-500 mr-2">💬</span>
                <a href="https://wa.me/2348033899431" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">
                  WhatsApp Us
                </a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            &copy; 2024 Sikeoye Hope Clinic. All rights reserved. | 
            <a href="#" className="hover:text-green-500 transition-colors ml-2">Privacy Policy</a> | 
            <a href="#" className="hover:text-green-500 transition-colors ml-2">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
