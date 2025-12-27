import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Target, Eye, Globe, CheckCircle, Award, Code, Zap, Shield, Heart, TrendingUp } from "lucide-react";

const aboutCards = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower businesses worldwide with innovative technology solutions that drive growth, efficiency, and digital transformation.",
    gradient: "from-blue-600 via-blue-500 to-cyan-500",
    glowColor: "shadow-blue-500/50",
    stats: "100+ Projects",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become a global leader in technology innovation, setting new standards for excellence in software development and digital services.",
    gradient: "from-h2f-gold-500 via-amber-500 to-yellow-500",
    glowColor: "shadow-h2f-gold-500/50",
    stats: "Global Presence",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Innovation, integrity, and excellence drive everything we do. We build lasting relationships through quality and commitment.",
    gradient: "from-purple-600 via-pink-500 to-rose-500",
    glowColor: "shadow-purple-500/50",
    stats: "Client Focused",
  },
];

const highlights = [
  { icon: Code, text: "Cutting-edge Technology Stack", color: "from-blue-500 to-cyan-500" },
  { icon: Zap, text: "Agile Development Process", color: "from-yellow-500 to-orange-500" },
  { icon: Shield, text: "24/7 Customer Support", color: "from-green-500 to-emerald-500" },
  { icon: TrendingUp, text: "Scalable Solutions", color: "from-purple-500 to-pink-500" },
  { icon: Award, text: "Industry Best Practices", color: "from-h2f-gold-500 to-amber-500" },
  { icon: Globe, text: "Global Delivery", color: "from-indigo-500 to-blue-500" },
];

const Card3D = ({ card, index, isInView }: any) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = ((y - centerY) / centerY) * -12;
    const rotateYValue = ((x - centerX) / centerX) * 12;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        type: "spring",
        stiffness: 100
      }}
      style={{ perspective: "1500px" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group"
    >
      <motion.div
        animate={{
          rotateX,
          rotateY,
          z: isHovered ? 50 : 0,
        }}
        transition={{ 
          type: "spring", 
          stiffness: 400, 
          damping: 30 
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
        className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-slate-700/50 hover:border-slate-600 transition-all duration-500 overflow-hidden"
      >
        {/* Animated gradient background */}
        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.8,
          }}
          className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-10 blur-2xl`}
        />

        {/* Shine effect */}
        <motion.div
          animate={{
            x: isHovered ? 0 : -200,
            opacity: isHovered ? 0.3 : 0,
          }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12"
          style={{ transform: "translateZ(20px)" }}
        />

        {/* Content */}
        <div className="relative" style={{ transform: "translateZ(40px)" }}>
          {/* Icon with 3D effect */}
          <motion.div
            whileHover={{ 
              rotateY: 180,
              scale: 1.1,
            }}
            transition={{ duration: 0.6 }}
            className="relative mb-6"
            style={{ transform: "translateZ(60px)" }}
          >
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center ${card.glowColor} group-hover:shadow-2xl transition-all duration-500 relative`}>
              <card.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
              
              {/* Pulsing ring */}
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className={`absolute inset-0 rounded-2xl border-2 border-gradient-to-br ${card.gradient}`}
              />
            </div>
          </motion.div>

          {/* Stats badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 + index * 0.2 }}
            className="absolute top-0 right-0 px-4 py-2 rounded-full bg-gradient-to-r from-slate-700/80 to-slate-600/80 backdrop-blur-sm border border-slate-500/30"
            style={{ transform: "translateZ(50px)" }}
          >
            <span className={`text-xs font-bold bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent`}>
              {card.stats}
            </span>
          </motion.div>

          {/* Title */}
          <h3 
            className="text-2xl font-black text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-slate-200 group-hover:to-white transition-all duration-300"
            style={{ transform: "translateZ(45px)" }}
          >
            {card.title}
          </h3>

          {/* Description */}
          <p 
            className="text-slate-300 leading-relaxed group-hover:text-white transition-colors duration-300"
            style={{ transform: "translateZ(35px)" }}
          >
            {card.description}
          </p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
            className={`mt-6 h-1 rounded-full bg-gradient-to-r ${card.gradient} origin-left`}
            style={{ transform: "translateZ(30px)" }}
          />
        </div>

        {/* Corner decoration */}
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-white/5 to-transparent rounded-tl-full" style={{ transform: "translateZ(10px)" }} />
      </motion.div>
    </motion.div>
  );
};

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        {/* Animated mesh gradient */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 70% 80%, rgba(245, 185, 66, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)
            `,
            backgroundSize: "200% 200%",
          }}
        />

        {/* 3D Grid */}
        <div className="absolute inset-0" style={{ perspective: "1000px" }}>
          <motion.div
            animate={{ rotateX: [0, 3, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
              transformStyle: "preserve-3d",
            }}
          />
        </div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Glowing orbs */}
        <motion.div
          animate={{ y: [0, -40, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 40, 0], scale: [1.2, 1, 1.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-h2f-gold-500/20 to-amber-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ type: "spring", duration: 1 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-xl border border-slate-600/50 mb-6"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Award className="w-5 h-5 text-h2f-gold-500" />
            </motion.div>
            <span className="text-slate-300 text-sm font-bold tracking-wider uppercase">About H2F</span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6"
          >
            Who We{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-h2f-gold-500 via-amber-400 to-h2f-gold-500 bg-clip-text text-transparent">Are</span>
              <motion.div
                animate={{ scaleX: [0, 1] }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-h2f-gold-500 to-amber-500 origin-left"
              />
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Founded in <span className="text-h2f-gold-500 font-bold">August 2025</span>, H2F is a dynamic technology startup committed to delivering innovative solutions that transform businesses worldwide.
          </motion.p>
        </motion.div>

        {/* 3D Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 mb-20">
          {aboutCards.map((card, index) => (
            <Card3D key={card.title} card={card} index={index} isInView={isInView} />
          ))}
        </div>

        {/* Highlights Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-10">
            Why Choose <span className="bg-gradient-to-r from-h2f-gold-500 to-amber-500 bg-clip-text text-transparent">Us</span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.text}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, x: 10 }}
                className="group"
              >
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600 transition-all duration-300 overflow-hidden">
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} />
                  
                  <div className="flex items-center gap-4 relative">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${highlight.color} flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300`}
                    >
                      <highlight.icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                    </motion.div>
                    <span className="text-white font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all duration-300">
                      {highlight.text}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
