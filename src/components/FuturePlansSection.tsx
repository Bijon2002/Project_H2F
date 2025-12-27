import { motion, useMotionValue, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Globe, Rocket, Users, TrendingUp, Sparkles, Brain, Database, Shield } from "lucide-react";

const plans = [
  {
    icon: Globe,
    title: "Global Expansion",
    description:
      "Expanding our presence across continents to serve clients worldwide with local expertise and global standards.",
    number: "01",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    glowColor: "shadow-blue-500/50",
  },
  {
    icon: Brain,
    title: "Proprietary AI Platforms",
    description:
      "Developing cutting-edge AI platforms that will revolutionize how businesses interact with technology.",
    number: "02",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    glowColor: "shadow-purple-500/50",
  },
  {
    icon: Users,
    title: "Educational Partnerships",
    description:
      "Collaborating with universities and institutions to nurture the next generation of tech innovators.",
    number: "03",
    color: "from-h2f-gold-500 to-amber-500",
    bgColor: "bg-h2f-gold-500/10",
    glowColor: "shadow-h2f-gold-500/50",
  },
  {
    icon: Database,
    title: "Enhanced Cloud Capabilities",
    description:
      "Building robust cloud infrastructure to deliver faster, more reliable, and scalable solutions.",
    number: "04",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    glowColor: "shadow-green-500/50",
  },
];

const Card3D = ({ plan, index, isInView }: any) => {
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
    const rotateXValue = ((y - centerY) / centerY) * -15;
    const rotateYValue = ((x - centerX) / centerX) * 15;

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
      initial={{ opacity: 0, y: 100, rotateX: -30 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        type: "spring",
        stiffness: 100
      }}
      style={{
        perspective: "1000px",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group h-full"
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
        {/* 3D Shine Effect */}
        <motion.div
          animate={{
            x: isHovered ? 0 : -100,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12"
          style={{ transform: "translateZ(20px)" }}
        />

        {/* Glowing Background */}
        <div className={`absolute -inset-1 ${plan.bgColor} opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500`} />
        
        {/* Content Container with 3D depth */}
        <div className="relative" style={{ transform: "translateZ(30px)" }}>
          {/* Floating Number Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 0.08, scale: 1 } : {}}
            transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
            className="absolute -top-4 -right-4 text-9xl font-black text-white pointer-events-none"
            style={{ 
              transform: "translateZ(10px)",
              WebkitTextStroke: "2px rgba(255,255,255,0.1)",
              WebkitTextFillColor: "transparent"
            }}
          >
            {plan.number}
          </motion.div>

          {/* Icon with 3D effect */}
          <motion.div
            whileHover={{ 
              rotateY: 360,
              scale: 1.1,
            }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative mb-6"
            style={{ transform: "translateZ(50px)" }}
          >
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center ${plan.glowColor} group-hover:shadow-2xl transition-all duration-500 relative`}>
              <plan.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
              
              {/* Orbiting particles */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute top-0 left-1/2 w-2 h-2 rounded-full bg-white/50" />
              </motion.div>
            </div>
          </motion.div>

          {/* Title */}
          <h3 
            className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all duration-300"
            style={{ transform: "translateZ(40px)" }}
          >
            {plan.title}
          </h3>

          {/* Description */}
          <p 
            className="text-slate-300 leading-relaxed mb-6 group-hover:text-white/90 transition-colors duration-300"
            style={{ transform: "translateZ(35px)" }}
          >
            {plan.description}
          </p>

          {/* 3D Progress Bar */}
          <div className="relative" style={{ transform: "translateZ(30px)" }}>
            <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
              <motion.div
                className={`h-full bg-gradient-to-r ${plan.color} relative`}
                initial={{ width: 0 }}
                animate={isInView ? { width: `${25 + index * 20}%` } : {}}
                transition={{ duration: 1.5, delay: 0.8 + index * 0.1, ease: "easeOut" }}
              >
                {/* Shimmer effect */}
                <motion.div
                  animate={{ x: [-100, 200] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                />
              </motion.div>
            </div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.2 + index * 0.1 }}
              className="text-xs text-slate-400 mt-2 block"
            >
              In Progress: {25 + index * 20}%
            </motion.span>
          </div>

          {/* Learn More Button */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`mt-6 w-full px-6 py-3 rounded-xl bg-gradient-to-r ${plan.color} text-white font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-2 ${plan.glowColor}`}
            style={{ transform: "translateZ(60px)" }}
          >
            <Sparkles size={16} />
            Learn More
          </motion.button>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-white/5 to-transparent rounded-tl-full" style={{ transform: "translateZ(5px)" }} />
      </motion.div>
    </motion.div>
  );
};

export const FuturePlansSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-30">
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(245, 185, 66, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 40% 20%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)
              `,
              backgroundSize: "200% 200%",
            }}
          />
        </div>

        {/* 3D Grid */}
        <div className="absolute inset-0" style={{ perspective: "1000px" }}>
          <motion.div
            animate={{
              rotateX: [0, 5, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
              transformStyle: "preserve-3d",
            }}
          />
        </div>

        {/* Floating orbs with 3D feel */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
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
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-h2f-gold-500" />
            </motion.div>
            <span className="text-slate-300 text-sm font-bold tracking-wider uppercase">Future Vision 2025-2030</span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6"
          >
            Where We're{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-h2f-gold-500 via-amber-400 to-h2f-gold-500 bg-clip-text text-transparent">Headed</span>
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
            Our roadmap for the future is ambitious and transformative. Here's what we're building to shape tomorrow.
          </motion.p>
        </motion.div>

        {/* 3D Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {plans.map((plan, index) => (
            <Card3D key={plan.title} plan={plan} index={index} isInView={isInView} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 rounded-2xl bg-gradient-to-r from-h2f-gold-500 to-amber-500 text-slate-900 font-bold text-lg shadow-2xl shadow-h2f-gold-500/30 hover:shadow-h2f-gold-500/50 transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            <Rocket size={24} />
            Join Our Journey
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
