import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { UserCheck, Users, Calendar } from "lucide-react";

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !animated) {
      setAnimated(true);
    }
  }, [isInView, animated]);

  const stats = [
    {
      icon: UserCheck,
      value: 80,
      label: "Expert Doctors",
      description: "Qualified medical professionals dedicated to your health",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: Users,
      value: 10000000,
      label: "Patients Treated",
      description: "Lives touched and families cared for over the years",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: Calendar,
      value: 23,
      label: "Years of Service",
      description: "Serving the Lagos community since 2001",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    }
  ];

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M+";
    }
    return num.toString() + "+";
  };

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Achievements</h2>
          <p className="text-xl text-muted-foreground">Numbers that reflect our commitment to quality healthcare</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card rounded-2xl p-8 text-center shadow-lg border border-border"
            >
              <div className={`w-16 h-16 ${stat.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className={`${stat.color} h-8 w-8`} />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={animated ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-2"
              >
                {formatNumber(stat.value)}
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{stat.label}</h3>
              <p className="text-muted-foreground">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
