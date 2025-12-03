import { motion } from "framer-motion";
import { ArrowRight, Code2, Globe, Rocket, Users } from "lucide-react";

const stats = [
  { icon: Code2, value: "6+", label: "Core Services" },
  { icon: Users, value: "5", label: "Expert Team" },
  { icon: Globe, value: "Global", label: "Operations" },
  { icon: Rocket, value: "100%", label: "Dedication" },
];

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden gradient-hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-h2f-gold-500/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-h2f-blue-500/20 to-transparent rounded-full blur-3xl"
        />
        
        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-h2f-gold-500/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-4 lg:px-8 pt-32 pb-20 min-h-screen flex flex-col justify-center">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-h2f-gold-500 animate-pulse" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              Established August 2025 • Jaffna, Sri Lanka
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6"
          >
            Build the World{" "}
            <span className="text-gradient-gold">Through</span>
            <br />
            Innovation
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10"
          >
            We craft cutting-edge digital solutions that transform businesses. 
            From web development to AI agents, we're your partner in technological excellence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold gradient-gold text-h2f-blue-900 shadow-gold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              Explore Services
              <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-primary-foreground border-2 border-primary-foreground/30 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-4 md:p-6 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:border-h2f-gold-500/30 transition-all duration-300"
              >
                <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-h2f-gold-500 mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-primary-foreground">{stat.value}</div>
                <div className="text-sm text-primary-foreground/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-h2f-gold-500"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
