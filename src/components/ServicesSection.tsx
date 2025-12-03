import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Code, Smartphone, Cloud, ShoppingCart, BarChart3, Bot } from "lucide-react";
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
  },
  {
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile apps for iOS and Android. Flutter and React Native solutions that deliver seamless mobile experiences.",
    features: ["iOS & Android", "Cross-Platform", "Native Performance"],
  },
  {
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    icon: Cloud,
    title: "Cloud & Hosting",
    description:
      "Scalable cloud infrastructure and reliable hosting solutions. AWS, Azure, and Google Cloud expertise for your business needs.",
    features: ["AWS & Azure", "Auto Scaling", "24/7 Monitoring"],
  },
  {
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description:
      "Complete online store solutions from scratch or with platforms like Shopify. Payment integration, inventory management, and more.",
    features: ["Payment Gateway", "Inventory System", "Analytics"],
  },
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    icon: BarChart3,
    title: "Salesforce Services",
    description:
      "Expert Salesforce implementation, customization, and integration. CRM solutions that streamline your sales and customer relationships.",
    features: ["Implementation", "Customization", "Integration"],
  },
  {
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    icon: Bot,
    title: "AI Agent Development",
    description:
      "Intelligent AI agents and chatbots powered by cutting-edge machine learning. Automate customer service and business processes.",
    features: ["Custom AI Models", "NLP Chatbots", "Process Automation"],
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Tech-themed Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-h2f-blue-900 via-h2f-blue-800 to-h2f-blue-900">
        {/* Animated Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(245, 185, 66, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(245, 185, 66, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Floating Tech Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-h2f-gold-500/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Circuit Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <motion.path
            d="M0,200 Q200,100 400,200 T800,200"
            stroke="rgba(245, 185, 66, 0.5)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
          />
          <motion.path
            d="M0,400 Q300,300 600,400 T1200,400"
            stroke="rgba(245, 185, 66, 0.3)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "loop", delay: 1 }}
          />
        </svg>
        
        {/* Glowing Orbs */}
        <motion.div
          className="absolute top-1/4 right-10 w-72 h-72 bg-h2f-gold-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], x: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-10 w-96 h-96 bg-h2f-blue-400/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], x: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        {/* Binary Code Effect */}
        <div className="absolute inset-0 overflow-hidden opacity-5">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-h2f-gold-500 font-mono text-xs whitespace-nowrap"
              style={{ left: `${i * 10}%`, top: '-20px' }}
              animate={{ y: ['0%', '120vh'] }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: 'linear',
              }}
            >
              {Array(50).fill(null).map(() => Math.round(Math.random())).join('')}
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            data-aos="fade-up"
            className="inline-block px-4 py-1.5 rounded-full bg-h2f-gold-500/20 text-h2f-gold-500 text-sm font-medium mb-4"
          >
            Our Services
          </span>
          <h2 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            What We <span className="text-gradient-gold">Offer</span>
          </h2>
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white/70 max-w-2xl mx-auto text-lg"
          >
            Comprehensive technology solutions tailored to your business needs. 
            From development to deployment, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <motion.div
                whileHover={{ y: -12 }}
                transition={{ duration: 0.3 }}
                className="h-full rounded-3xl bg-card border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-300 group relative overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden rounded-t-3xl">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  
                  {/* Service Icon Badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl gradient-gold flex items-center justify-center shadow-gold">
                    <service.icon className="w-6 h-6 text-h2f-blue-900" />
                  </div>
                  
                  {/* Animated Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileHover={{ scale: 1, rotate: 0 }}
                      className="w-16 h-16 rounded-full bg-primary-foreground flex items-center justify-center"
                    >
                      <ArrowRight className="w-6 h-6 text-primary" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-5 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <motion.div whileHover={{ x: 5 }}>
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-2 text-primary font-medium group/link text-sm"
                    >
                      Learn More
                      <motion.span
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.span>
                    </Link>
                  </motion.div>
                </div>

                {/* Animated Border Glow */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, transparent 40%, hsl(45 93% 58% / 0.1) 50%, transparent 60%)",
                    backgroundSize: "200% 200%",
                  }}
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
