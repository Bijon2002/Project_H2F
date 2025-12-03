import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

import serviceWeb from "@/assets/service-web.jpg";
import serviceMobile from "@/assets/service-mobile.jpg";
import serviceCloud from "@/assets/service-cloud.jpg";
import serviceEcommerce from "@/assets/service-ecommerce.jpg";
import serviceSalesforce from "@/assets/service-salesforce.jpg";
import serviceAi from "@/assets/service-ai.jpg";

const services = [
  {
    image: serviceWeb,
    title: "Web Development",
    description:
      "Custom websites and web applications built with cutting-edge technologies. React, Next.js, and modern frameworks for exceptional user experiences.",
    features: ["Responsive Design", "SEO Optimized", "Fast Performance"],
  },
  {
    image: serviceMobile,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile apps for iOS and Android. Flutter and React Native solutions that deliver seamless mobile experiences.",
    features: ["iOS & Android", "Cross-Platform", "Native Performance"],
  },
  {
    image: serviceCloud,
    title: "Cloud & Hosting",
    description:
      "Scalable cloud infrastructure and reliable hosting solutions. AWS, Azure, and Google Cloud expertise for your business needs.",
    features: ["AWS & Azure", "Auto Scaling", "24/7 Monitoring"],
  },
  {
    image: serviceEcommerce,
    title: "E-Commerce Solutions",
    description:
      "Complete online store solutions from scratch or with platforms like Shopify. Payment integration, inventory management, and more.",
    features: ["Payment Gateway", "Inventory System", "Analytics"],
  },
  {
    image: serviceSalesforce,
    title: "Salesforce Services",
    description:
      "Expert Salesforce implementation, customization, and integration. CRM solutions that streamline your sales and customer relationships.",
    features: ["Implementation", "Customization", "Integration"],
  },
  {
    image: serviceAi,
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
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-h2f-blue-50 to-transparent" />
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 bg-h2f-gold-500/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-80 h-80 bg-h2f-blue-500/5 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], x: [0, 50, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
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
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            Our Services
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            What We <span className="text-gradient-gold">Offer</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive technology solutions tailored to your business needs. 
            From development to deployment, we've got you covered.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  
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
                    {service.features.map((feature, featureIndex) => (
                      <motion.span
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + index * 0.1 + featureIndex * 0.05 }}
                        className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium"
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <motion.a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-primary font-medium group/link text-sm"
                    whileHover={{ x: 5 }}
                  >
                    Learn More
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </motion.a>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
