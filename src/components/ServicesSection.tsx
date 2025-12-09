import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Code, Smartphone, Cloud, ShoppingCart, BarChart3, Bot, ArrowRight, Sparkles, Zap, Shield, Cpu, Database } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Build fast, responsive, and scalable web applications with modern frameworks and best practices.",
    gradient: "from-blue-500 to-cyan-500",
    stats: "99.9% Uptime",
    color: "#3b82f6",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications with seamless user experiences.",
    gradient: "from-violet-500 to-purple-500",
    stats: "100M+ Downloads",
    color: "#8b5cf6",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and serverless architectures for modern applications.",
    gradient: "from-emerald-500 to-green-500",
    stats: "Auto Scaling",
    color: "#10b981",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Complete e-commerce platforms with secure payment processing and inventory management.",
    gradient: "from-amber-500 to-orange-500",
    stats: "30% Growth",
    color: "#f59e0b",
  },
  {
    icon: BarChart3,
    title: "Salesforce",
    description: "Custom Salesforce implementations that streamline your sales and customer relationships.",
    gradient: "from-rose-500 to-pink-500",
    stats: "50% Efficiency",
    color: "#f43f5e",
  },
  {
    icon: Bot,
    title: "AI Solutions",
    description: "Intelligent automation and AI-powered solutions for business transformation.",
    gradient: "from-indigo-500 to-blue-500",
    stats: "AI Powered",
    color: "#6366f1",
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="services" className="py-32 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(to right, #3b82f6 1px, transparent 1px),
              linear-gradient(to bottom, #3b82f6 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-200 mb-6">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-blue-600 font-medium text-sm">Our Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="block">Expert Solutions for</span>
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Digital Transformation
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We deliver cutting-edge technology solutions that drive innovation, 
            efficiency, and growth for businesses of all sizes.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group cursor-pointer"
            >
              {/* Card */}
              <div className="relative bg-white rounded-2xl p-8 h-full border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300">
                
                {/* Hover Effect Overlay */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{ background: service.color }}
                />
                
                {/* Icon Container */}
                <div className="relative mb-8">
                  <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br from-white to-gray-100 rounded-2xl rotate-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}>
                    <service.icon className="w-7 h-7 text-white" />
                    
                    {/* Pulse Animation */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-30 animate-ping" />
                  </div>
                  
                  {/* Floating Number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-sm font-bold text-gray-700">0{index + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Stats Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-50 to-white border border-gray-200 mb-8">
                  <Zap className="w-4 h-4 text-amber-500" />
                  <span className="text-sm font-medium text-gray-700">{service.stats}</span>
                </div>

                {/* Learn More Link */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <span className="text-blue-600 font-medium group-hover:text-blue-500 transition-colors duration-300">
                    Learn more
                  </span>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-gray-50 to-white border border-gray-200 flex items-center justify-center group-hover:border-blue-200 group-hover:bg-blue-50 transition-all duration-300">
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </div>

              {/* Connecting Line (for desktop) */}
              {index < services.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-8 lg:p-12 shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">250+</div>
              <div className="text-blue-100 font-medium">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-blue-100 font-medium">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">99.9%</div>
              <div className="text-blue-100 font-medium">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-100 font-medium">Support</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 text-center"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to transform your business?
            </h3>
            <p className="text-gray-600 text-lg mb-8">
              Let's discuss how our solutions can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center gap-2">
                  Start a Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animated Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      
      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </section>
  );
};