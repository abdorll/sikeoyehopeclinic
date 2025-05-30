import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function BookingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="booking" ref={ref} className="py-20 bg-gradient-to-br from-blue-600 to-green-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Book Your Consultation</h2>
            <p className="text-xl text-blue-100">
              Schedule an appointment easily using our Calendly link.
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-background rounded-3xl p-8 md:p-12 shadow-2xl flex justify-center items-center"
          >
            {/* Calendly embed code */}
            <div className="calendly-inline-widget" data-url="https://calendly.com/abdorll/30min" style={{ minWidth: '320px', height: '700px' }}></div>
            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
