import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Globe, CheckCircle } from "lucide-react";
import patternBg from "@/assets/pattern-bg.jpg";

const aboutCards = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower businesses worldwide with innovative technology solutions that drive growth, efficiency, and digital transformation.",
    color: "from-h2f-blue-600 to-h2f-blue-800",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become a global leader in technology innovation, setting new standards for excellence in software development and digital services.",
    color: "from-h2f-gold-400 to-h2f-gold-500",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "From our roots in Jaffna, Sri Lanka, we serve clients across continents, bringing world-class solutions to businesses everywhere.",
    color: "from-h2f-blue-500 to-h2f-blue-700",
  },
];

const highlights = [
  "Cutting-edge Technology Stack",
  "Agile Development Process",
  "24/7 Customer Support",
  "Scalable Solutions",
  "Industry Best Practices",
  "Transparent Communication",
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={patternBg}
          alt=""
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-h2f-blue-50/50 to-background" />
      </div>

      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-h2f-blue-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-h2f-gold-500/10 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            About Us
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Who We <span className="text-gradient-gold">Are</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Founded in August 2025, H2F is a dynamic technology startup committed to 
            delivering innovative solutions that transform businesses.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {aboutCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50, rotateX: 20 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="h-full p-8 rounded-3xl bg-card shadow-card hover:shadow-card-hover border border-border/50 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, hsl(var(--h2f-blue-600)), hsl(var(--h2f-gold-500)))`,
                  }}
                />

                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-gold transition-shadow duration-300`}
                >
                  <card.icon className="w-8 h-8 text-primary-foreground" />
                </motion.div>
                <h3 className="text-xl font-bold text-foreground mb-3">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{card.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05, x: 5 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-card/50 border border-border/30 hover:border-h2f-gold-500/30 transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <CheckCircle className="w-5 h-5 text-h2f-gold-500 flex-shrink-0" />
              </motion.div>
              <span className="text-foreground font-medium text-sm">{highlight}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
