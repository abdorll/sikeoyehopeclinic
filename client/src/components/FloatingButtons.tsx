import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FloatingButtons() {
  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          asChild
          size="icon"
          className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-2xl animate-bounce transition-all duration-300 hover:scale-110"
        >
          <a
            href="https://wa.me/2348033899431?text=Hello%20Sikeoye%20Hope%20Clinic,%20I%20would%20like%20to%20book%20an%20appointment"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="h-8 w-8 text-white" />
          </a>
        </Button>
      </div>

      {/* Mobile Call Button */}
      <div className="fixed bottom-6 left-6 z-50 md:hidden">
        <Button
          asChild
          size="icon"
          className="w-16 h-16 rounded-full bg-blue-600 hover:bg-blue-700 shadow-2xl transition-all duration-300 hover:scale-110"
        >
          <a
            href="tel:+2348033899431"
            aria-label="Call Clinic"
          >
            <Phone className="h-8 w-8 text-white" />
          </a>
        </Button>
      </div>
    </>
  );
}
