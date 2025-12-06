import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, Code, Smartphone, Cloud, ShoppingCart, BarChart3, Bot, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

// Tech-themed realistic images from Unsplash
const services = [
  {
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    icon: Code,
    title: "Web Development",
    description:
      "Custom websites and web applications built with cutting-edge technologies. React, Next.js, and modern frameworks for exceptional user experiences.",
    features: ["Responsive Design", "SEO Optimized", "Fast Performance"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile apps for iOS and Android. Flutter and React Native solutions that deliver seamless mobile experiences.",
    features: ["iOS & Android", "Cross-Platform", "Native Performance"],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    icon: Cloud,
    title: "Cloud & Hosting",
    description:
      "Scalable cloud infrastructure and reliable hosting solutions. AWS, Azure, and Google Cloud expertise for your business needs.",
    features: ["AWS & Azure", "Auto Scaling", "24/7 Monitoring"],
    color: "from-indigo-500/20 to-blue-500/20",
  },
  {
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description:
      "Complete online store solutions from scratch or with platforms like Shopify. Payment integration, inventory management, and more.",
    features: ["Payment Gateway", "Inventory System", "Analytics"],
    color: "from-emerald-500/20 to-green-500/20",
  },
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    icon: BarChart3,
    title: "Salesforce Services",
    description:
      "Expert Salesforce implementation, customization, and integration. CRM solutions that streamline your sales and customer relationships.",
    features: ["Implementation", "Customization", "Integration"],
    color: "from-orange-500/20 to-amber-500/20",
  },
  {
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    icon: Bot,
    title: "AI Agent Development",
    description:
      "Intelligent AI agents and chatbots powered by cutting-edge machine learning. Automate customer service and business processes.",
    features: ["Custom AI Models", "NLP Chatbots", "Process Automation"],
    color: "from-violet-500/20 to-purple-500/20",
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const controls = useAnimation();

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? -90 : 90,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 90 : -90,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    }),
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-black">
      {/* Futuristic Background */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
          
          {/* 3D Floating Grid Effect */}
          <motion.div 
            className="absolute inset-0"
            animate={{
              backgroundPosition: ["0px 0px", "60px 60px"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundImage: `
                linear-gradient(rgba(245, 158, 11, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(245, 158, 11, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        {/* Floating Tech Spheres */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full blur-3xl opacity-20"
            style={{
              background: i % 2 === 0 
                ? "radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent 70%)"
                : "radial-gradient(circle, rgba(245, 158, 11, 0.3), transparent 70%)",
              left: `${10 + i * 15}%`,
              top: `${20 + Math.sin(i) * 40}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.sin(i) * 20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Holographic Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          {[...Array(5)].map((_, i) => (
            <motion.path
              key={i}
              d={`M${i * 25},0 Q${i * 25 + 100},${200 + i * 50} ${i * 25 + 200},0`}
              stroke={`rgba(59, 130, 246, ${0.2 + i * 0.1})`}
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                delay: i * 0.2,
              }}
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-cyan-300 text-sm font-medium mb-4 border border-cyan-500/30"
          >
            <Sparkles className="w-4 h-4" />
            Our Services
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
          >
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
              Cutting-Edge
            </span>{" "}
            Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Transforming businesses with innovative technology solutions
          </motion.p>
        </div>

        {/* 3D Carousel */}
        <div className="relative h-[600px]">
          {/* Carousel Container */}
          <div className="relative w-full h-full perspective-1000">
            {services.map((service, index) => {
              const offset = (index - currentIndex + services.length) % services.length;
              const isActive = offset === 0;
              const isNext = offset === 1;
              const isPrev = offset === services.length - 1;
              
              return (
                <motion.div
                  key={service.title}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate={isActive ? "center" : offset === 1 || offset === services.length - 1 ? "exit" : {}}
                  className={`absolute inset-0 w-full max-w-4xl mx-auto transition-all duration-500 ${
                    isActive ? "z-30" : isNext || isPrev ? "z-20" : "z-10"
                  }`}
                  style={{
                    transform: `
                      translateX(${offset === 0 ? 0 : offset === 1 ? 150 : -150}%)
                      scale(${isActive ? 1 : 0.8})
                      rotateY(${isActive ? 0 : isNext ? -20 : 20}deg)
                    `,
                    opacity: isActive ? 1 : isNext || isPrev ? 0.7 : 0.2,
                    filter: isActive ? "none" : "blur(2px)",
                  }}
                >
                  <div className="relative h-full">
                    {/* 3D Card */}
                    <div className={`h-full rounded-3xl bg-gradient-to-br ${service.color} backdrop-blur-xl border border-white/10 shadow-2xl transform-gpu transition-all duration-500 hover:border-white/20 hover:scale-[1.02]`}>
                      {/* Glowing Edge */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Card Content */}
                      <div className="relative h-full flex flex-col lg:flex-row overflow-hidden">
                        {/* Left Side - Image */}
                        <div className="lg:w-1/2 relative overflow-hidden rounded-l-3xl">
                          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10" />
                          <motion.img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover"
                            animate={isActive ? {
                              scale: [1, 1.1, 1],
                            } : {}}
                            transition={{
                              duration: 10,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />
                          
                          {/* Floating Icon */}
                          <motion.div
                            animate={isActive ? {
                              y: [0, -10, 0],
                              rotate: [0, 5, 0],
                            } : {}}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="absolute top-6 left-6 z-20 w-16 h-16 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-2xl"
                          >
                            <service.icon className="w-8 h-8 text-white" />
                          </motion.div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                          <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            animate={isActive ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 }}
                            className="text-3xl lg:text-4xl font-bold text-white mb-4"
                          >
                            {service.title}
                          </motion.h3>
                          
                          <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isActive ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3 }}
                            className="text-gray-300 mb-8 leading-relaxed text-lg"
                          >
                            {service.description}
                          </motion.p>

                          {/* Features */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isActive ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap gap-3 mb-8"
                          >
                            {service.features.map((feature) => (
                              <span
                                key={feature}
                                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium backdrop-blur-sm"
                              >
                                {feature}
                              </span>
                            ))}
                          </motion.div>

                          {/* CTA Button */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isActive ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Link
                              to="/services"
                              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold group/button"
                            >
                              Explore Service
                              <motion.span
                                animate={{
                                  x: [0, 5, 0],
                                }}
                                transition={{
                                  duration: 1.5,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                              >
                                <ArrowRight className="w-5 h-5" />
                              </motion.span>
                            </Link>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <motion.button
            onClick={prevSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-4 lg:left-0 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-gradient-to-r from-gray-900/80 to-black/80 border border-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:border-white/30 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          
          <motion.button
            onClick={nextSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-4 lg:right-0 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-gradient-to-r from-gray-900/80 to-black/80 border border-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:border-white/30 transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-40 flex gap-3">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "w-8 bg-gradient-to-r from-blue-500 to-cyan-500"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Services Grid (for mobile) */}
        <div className="mt-16 lg:hidden">
          <div className="grid grid-cols-1 gap-6">
            {services.slice(0, 3).map((service) => (
              <div
                key={service.title}
                className="rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-cyan-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add to your global CSS */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-gpu {
          transform-style: preserve-3d;
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  );
};