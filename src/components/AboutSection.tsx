import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Globe } from "lucide-react";

const aboutCards = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower businesses worldwide with innovative technology solutions that drive growth, efficiency, and digital transformation.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become a global leader in technology innovation, setting new standards for excellence in software development and digital services.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "From our roots in Jaffna, Sri Lanka, we serve clients across continents, bringing world-class solutions to businesses everywhere.",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 gradient-section relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-h2f-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-h2f-gold-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Who We <span className="text-gradient-gold">Are</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Founded in August 2025, H2F is a dynamic technology startup committed to 
            delivering innovative solutions that transform businesses.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {aboutCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="h-full p-8 rounded-3xl bg-card shadow-card hover:shadow-card-hover border border-border/50 transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 rounded-2xl gradient-gold flex items-center justify-center mb-6 shadow-gold group-hover:scale-110 transition-transform duration-300"
                >
                  <card.icon className="w-8 h-8 text-h2f-blue-900" />
                </motion.div>
                <h3 className="text-xl font-bold text-foreground mb-3">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{card.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
