import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Globe, CheckCircle } from "lucide-react";

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
      {/* Tech-themed Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-h2f-blue-900 via-h2f-blue-800 to-h2f-blue-900">
        {/* Hexagon Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23f5b942' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        />
        
        {/* Data Flow Lines */}
        <svg className="absolute inset-0 w-full h-full">
          {[...Array(5)].map((_, i) => (
            <motion.line
              key={i}
              x1="0%"
              y1={`${20 + i * 15}%`}
              x2="100%"
              y2={`${30 + i * 12}%`}
              stroke="rgba(245, 185, 66, 0.1)"
              strokeWidth="1"
              strokeDasharray="10 20"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: -100 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
            />
          ))}
        </svg>
        
        {/* Floating Tech Nodes */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-h2f-gold-500/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Glowing Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-h2f-blue-400/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-h2f-gold-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            data-aos="fade-up"
            className="inline-block px-4 py-1.5 rounded-full bg-h2f-gold-500/20 text-h2f-gold-500 text-sm font-medium mb-4"
          >
            About Us
          </span>
          <h2 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Who We <span className="text-gradient-gold">Are</span>
          </h2>
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white/70 max-w-2xl mx-auto text-lg"
          >
            Founded in August 2025, H2F is a dynamic technology startup committed to 
            delivering innovative solutions that transform businesses.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {aboutCards.map((card, index) => (
            <div
              key={card.title}
              data-aos="flip-up"
              data-aos-delay={index * 150}
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
            </div>
          ))}
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {highlights.map((highlight, index) => (
            <div
              key={highlight}
              data-aos="fade-right"
              data-aos-delay={index * 100}
            >
              <motion.div
                whileHover={{ scale: 1.05, x: 5 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-h2f-gold-500/30 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle className="w-5 h-5 text-h2f-gold-500 flex-shrink-0" />
                </motion.div>
                <span className="text-white font-medium text-sm">{highlight}</span>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
