import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Code, Smartphone, Cloud, ShoppingCart, BarChart3, Bot, ArrowRight, Sparkles, Zap, Shield, Cpu, Database, Star, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Build fast, responsive, and scalable web applications with modern frameworks and best practices.",
    gradient: "from-blue-500 via-blue-600 to-cyan-500",
    glowColor: "shadow-blue-500/50",
    stats: "99.9% Uptime",
    bgPattern: "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%233b82f6' fill-opacity='0.05'/%3E%3C/svg%3E",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications with seamless user experiences.",
    gradient: "from-violet-500 via-purple-600 to-purple-500",
    glowColor: "shadow-purple-500/50",
    stats: "100M+ Downloads",
    bgPattern: "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='15' fill='%238b5cf6' fill-opacity='0.05'/%3E%3C/svg%3E",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and serverless architectures for modern applications.",
    gradient: "from-emerald-500 via-green-600 to-green-500",
    glowColor: "shadow-green-500/50",
    stats: "Auto Scaling",
    bgPattern: "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h30v30H0zm30 30h30v30H30z' fill='%2310b981' fill-opacity='0.05'/%3E%3C/svg%3E",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Complete e-commerce platforms with secure payment processing and inventory management.",
    gradient: "from-amber-500 via-orange-600 to-orange-500",
    glowColor: "shadow-orange-500/50",
    stats: "30% Growth",
    bgPattern: "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='%23f59e0b' fill-opacity='0.05'/%3E%3C/svg%3E",
  },
  {
    icon: BarChart3,
    title: "Salesforce",
    description: "Custom Salesforce implementations that streamline your sales and customer relationships.",
    gradient: "from-rose-500 via-pink-600 to-pink-500",
    glowColor: "shadow-pink-500/50",
    stats: "50% Efficiency",
    bgPattern: "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 15l15 15-15 15-15-15z' fill='%23f43f5e' fill-opacity='0.05'/%3E%3C/svg%3E",
  },
  {
    icon: Bot,
    title: "AI Solutions",
    description: "Intelligent automation and AI-powered solutions for business transformation.",
    gradient: "from-indigo-500 via-blue-600 to-blue-500",
    glowColor: "shadow-indigo-500/50",
    stats: "AI Powered",
    bgPattern: "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 15h30v30H15z' fill='%236366f1' fill-opacity='0.05'/%3E%3C/svg%3E",
  },
];

const ServiceCard3D = ({ service, index, isInView }: any) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation based on mouse position
    const rotateXValue = ((y - centerY) / centerY) * -15;
    const rotateYValue = ((x - centerX) / centerX) * 15;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
    
    // Update mouse position for gradient effect
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.8, rotateX: -30 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateX: 0 } : {}}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      style={{ perspective: "2000px" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group h-full"
    >
      <motion.div
        animate={{
          rotateX,
          rotateY,
          z: isHovered ? 80 : 0,
        }}
        transition={{ 
          type: "spring", 
          stiffness: 400, 
          damping: 30 
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
        className="relative h-full bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-200/50 hover:border-gray-300 transition-all duration-500 overflow-hidden shadow-xl hover:shadow-2xl"
      >
        {/* Animated background pattern */}
        <div 
          className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500"
          style={{
            backgroundImage: `url("${service.bgPattern}")`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Dynamic gradient overlay */}
        <motion.div
          animate={{
            opacity: isHovered ? 0.15 : 0,
            scale: isHovered ? 1 : 0.8,
          }}
          className={`absolute inset-0 bg-gradient-to-br ${service.gradient} blur-3xl`}
          style={{ transform: "translateZ(10px)" }}
        />

        {/* Shine effect following cursor */}
        <motion.div
          animate={{
            x: isHovered ? 0 : -300,
            opacity: isHovered ? 0.5 : 0,
          }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12"
          style={{ transform: "translateZ(30px)" }}
        />

        {/* Content container with 3D depth */}
        <div className="relative" style={{ transform: "translateZ(50px)" }}>
          {/* Floating icon container with 3D effect */}
          <div className="relative mb-6" style={{ transform: "translateZ(70px)" }}>
            <motion.div
              whileHover={{ 
                rotateY: 180,
                scale: 1.15,
              }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative"
            >
              <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center ${service.glowColor} group-hover:shadow-2xl transition-all duration-500`}>
                <service.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                
                {/* Orbiting particles */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <div className="absolute top-0 left-1/2 w-2 h-2 rounded-full bg-white/80" />
                  <div className="absolute bottom-0 right-1/2 w-1.5 h-1.5 rounded-full bg-white/60" />
                </motion.div>
                
                {/* Pulsing ring */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.4, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className={`absolute inset-0 rounded-2xl border-2 bg-gradient-to-br ${service.gradient}`}
                />
              </div>
            </motion.div>
            
            {/* Floating index number */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
              className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-white to-gray-100 border-2 border-gray-200 rounded-full flex items-center justify-center shadow-lg"
              style={{ transform: "translateZ(80px)" }}
            >
              <span className="text-sm font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                0{index + 1}
              </span>
            </motion.div>
          </div>

          {/* Title with gradient on hover */}
          <h3 
            className="text-2xl font-black text-gray-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300"
            style={{ transform: "translateZ(60px)" }}
          >
            {service.title}
          </h3>

          {/* Description */}
          <p 
            className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
            style={{ transform: "translateZ(55px)" }}
          >
            {service.description}
          </p>

          {/* Stats badge with 3D effect */}
          <div 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-gray-100 to-white border border-gray-200 mb-6 group-hover:border-gray-300 group-hover:shadow-md transition-all duration-300"
            style={{ transform: "translateZ(65px)" }}
          >
            <motion.div
              animate={{ rotate: isHovered ? 360 : 0 }}
              transition={{ duration: 0.6 }}
            >
              <Zap className="w-4 h-4 text-amber-500" />
            </motion.div>
            <span className="text-sm font-bold text-gray-700">{service.stats}</span>
          </div>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
            className={`h-1 rounded-full bg-gradient-to-r ${service.gradient} mb-6 origin-left`}
            style={{ transform: "translateZ(50px)" }}
          />

          {/* Learn more section with enhanced interaction */}
          <motion.div 
            className="flex items-center justify-between"
            style={{ transform: "translateZ(70px)" }}
          >
            <span className={`text-base font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent group-hover:tracking-wider transition-all duration-300`}>
              Learn more
            </span>
            <motion.div
              whileHover={{ scale: 1.1, rotate: -10 }}
              whileTap={{ scale: 0.95 }}
              className={`w-12 h-12 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center ${service.glowColor} group-hover:shadow-xl transition-all duration-300`}
            >
              <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
            </motion.div>
          </motion.div>
        </div>

        {/* Corner accent */}
        <div 
          className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${service.gradient} opacity-5 rounded-tl-full`}
          style={{ transform: "translateZ(20px)" }}
        />

        {/* Top accent */}
        <div 
          className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-white/50 to-transparent rounded-br-full"
          style={{ transform: "translateZ(25px)" }}
        />
      </motion.div>
    </motion.div>
  );
};

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Animated mesh gradient */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)
            `,
            backgroundSize: "200% 200%",
          }}
        />

        {/* 3D Grid pattern */}
        <div className="absolute inset-0" style={{ perspective: "1000px" }}>
          <motion.div
            animate={{ rotateX: [0, 2, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(59, 130, 246, 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(59, 130, 246, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
              transformStyle: "preserve-3d",
            }}
          />
        </div>

        {/* Floating orbs with 3D feel */}
        <motion.div
          animate={{
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 50, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Section header with enhanced animations */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Animated badge */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ type: "spring", duration: 1 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-200/50 mb-6"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-blue-500" />
            </motion.div>
            <span className="text-blue-600 font-bold text-sm tracking-wider uppercase">Our Services</span>
          </motion.div>
          
          {/* Main title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-6"
          >
            Expert Solutions for
            <br />
            <span className="relative inline-block mt-2">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Digital Transformation
              </span>
              <motion.div
                animate={{ scaleX: [0, 1] }}
                transition={{ duration: 1.5, delay: 1 }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 origin-left"
              />
            </span>
          </motion.h2>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We deliver cutting-edge technology solutions that drive innovation, efficiency, and growth for businesses of all sizes.
          </motion.p>
        </motion.div>

        {/* 3D Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-24">
          {services.map((service, index) => (
            <ServiceCard3D key={service.title} service={service} index={index} isInView={isInView} />
          ))}
        </div>

        {/* Enhanced stats bar with 3D effect */}
        <motion.div
          initial={{ opacity: 0, y: 80, rotateX: 30 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          style={{ perspective: "2000px", transformStyle: "preserve-3d" }}
        >
          <div className="relative bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-3xl p-10 lg:p-14 shadow-2xl overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <motion.div
                animate={{ x: [0, 100, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-full h-full"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%23ffffff' fill-opacity='0.3'/%3E%3C/svg%3E")`,
                  backgroundSize: '60px 60px',
                }}
              />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {[
                { value: "250+", label: "Projects Delivered", icon: Cpu },
                { value: "50+", label: "Happy Clients", icon: Star },
                { value: "99.9%", label: "Uptime SLA", icon: Shield },
                { value: "24/7", label: "Support", icon: Database },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1 + index * 0.1, type: "spring" }}
                  className="text-center relative"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-block mb-4"
                  >
                    <stat.icon className="w-8 h-8 text-white/80" />
                  </motion.div>
                  <motion.div 
                    className="text-5xl lg:text-6xl font-black text-white mb-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-blue-100 font-semibold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Enhanced CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-24 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-4xl font-black text-gray-900 mb-6">
              Ready to transform your business?
            </h3>
            <p className="text-gray-600 text-xl mb-10 leading-relaxed">
              Let's discuss how our solutions can help you achieve your goals and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-2xl shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 overflow-hidden inline-flex items-center gap-3"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative">Start a Project</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.div>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/services"
                  className="px-10 py-5 bg-white border-2 border-gray-300 text-gray-700 font-bold rounded-2xl hover:border-blue-500 hover:text-blue-600 hover:shadow-xl transition-all duration-300"
                >
                  View All Services
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 4 + 1,
            height: Math.random() * 4 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `rgba(${Math.random() > 0.5 ? '59, 130, 246' : '168, 85, 247'}, ${Math.random() * 0.3 + 0.1})`,
          }}
          animate={{
            y: [0, -150, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}
    </section>
  );
};