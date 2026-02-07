import { motion } from "framer-motion";
import { 
  Globe, 
  Smartphone, 
  Cloud, 
  ShoppingCart, 
  Zap, 
  Bot,
  Code,
  Database,
  Shield,
  Layers,
  ArrowRight,
  CheckCircle,
  Rocket
} from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom websites and web applications built with cutting-edge technologies like React, Next.js, and modern frameworks.",
    features: [
      "Responsive & Mobile-First Design",
      "SEO Optimized Architecture", 
      "Fast Performance & Core Web Vitals",
      "Progressive Web Apps (PWA)",
      "E-commerce Integration",
      "CMS Development"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.",
    features: [
      "React Native & Flutter Apps",
      "Native iOS & Android Development",
      "Cross-Platform Solutions",
      "App Store Optimization",
      "Push Notifications",
      "Offline Functionality"
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Cloud,
    title: "Cloud & Hosting",
    description: "Scalable cloud infrastructure and reliable hosting solutions with AWS, Azure, and Google Cloud expertise.",
    features: [
      "AWS, Azure & GCP Solutions",
      "Auto-Scaling Infrastructure",
      "24/7 Monitoring & Support",
      "DevOps & CI/CD Pipelines",
      "Container Orchestration",
      "Database Management"
    ],
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Complete online store solutions with payment integration, inventory management, and analytics.",
    features: [
      "Custom E-commerce Platforms",
      "Shopify & WooCommerce",
      "Payment Gateway Integration",
      "Inventory Management Systems",
      "Order Tracking & Analytics",
      "Multi-Currency Support"
    ],
    color: "from-orange-500 to-amber-500"
  },
  {
    icon: Zap,
    title: "Salesforce Services",
    description: "Expert Salesforce implementation, customization, and integration for streamlined CRM solutions.",
    features: [
      "Salesforce Implementation",
      "Custom App Development",
      "Integration Services",
      "Lightning Component Development",
      "Data Migration",
      "Training & Support"
    ],
    color: "from-indigo-500 to-blue-500"
  },
  {
    icon: Bot,
    title: "AI Agent Development",
    description: "Intelligent AI agents and chatbots powered by cutting-edge machine learning for business automation.",
    features: [
      "Custom AI/ML Models",
      "NLP & Chatbot Development",
      "Process Automation",
      "Predictive Analytics",
      "Computer Vision Solutions",
      "AI Integration Services"
    ],
    color: "from-rose-500 to-red-500"
  }
];

const additionalServices = [
  { icon: Code, title: "API Development", desc: "RESTful & GraphQL APIs" },
  { icon: Database, title: "Database Design", desc: "SQL & NoSQL Solutions" },
  { icon: Shield, title: "Security Audit", desc: "Penetration Testing" },
  { icon: Layers, title: "UI/UX Design", desc: "User-Centered Design" }
];

const ServicesPage = () => {
  return (
    <PageLayout>
      {/* Elegant Hero Section */}
      <section className="relative min-h-screen overflow-hidden pt-32">
        {/* Refined Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-80 h-80 bg-h2f-gold-500/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-h2f-blue-500/20 rounded-full blur-3xl animate-float-delayed"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative min-h-screen flex flex-col justify-center">
          <div className="max-w-6xl mx-auto text-center">
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-xl border border-slate-600/50 mb-8"
            >
              <Globe className="w-5 h-5 text-h2f-gold-500" />
              <span className="text-slate-300 text-sm font-bold tracking-wider uppercase">Our Services</span>
            </motion.div>

            {/* Main Heading with 3D Effect */}
            <div className="overflow-hidden mb-8">
              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4"
              >
                Transforming Ideas Into
                <br />
                <motion.span
                  className="text-gradient-gold inline-block"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  Digital Excellence
                </motion.span>
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Comprehensive technology solutions tailored to your business needs. 
              From development to deployment, we've got you covered.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-h2f-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-h2f-blue-600/10 text-h2f-blue-600 dark:text-h2f-gold-500 text-sm font-medium mb-6"
            >
              <Layers className="w-4 h-4" />
              <span>Core Services</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
            >
              Our <span className="text-gradient-gold">Services</span>
            </motion.h2>
          </div>

          <div className="grid gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`grid lg:grid-cols-2 gap-8 items-center bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200/50 dark:border-slate-700/50 transition-all duration-300 hover:shadow-xl ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`order-2 ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="relative w-full h-80 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-40 h-40 rounded-full bg-gradient-to-br ${service.color} opacity-10`}></div>
                      <div className={`w-24 h-24 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                        <service.icon className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={`order-1 ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{service.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-lg mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 + idx * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-h2f-gold-500 flex-shrink-0" />
                        <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold gradient-gold text-h2f-blue-900 shadow-gold hover:shadow-xl transition-all duration-300"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-h2f-gold-500/10 text-h2f-gold-500 text-sm font-medium mb-6"
            >
              <Layers className="w-4 h-4" />
              <span>Additional Solutions</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
            >
              Additional <span className="text-gradient-gold">Services</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200/50 dark:border-slate-700/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-h2f-blue-600 to-h2f-blue-800 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 text-center">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-center text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-h2f-gold-500/10 text-h2f-gold-500 text-sm font-medium mb-8"
            >
              <Rocket className="w-4 h-4" />
              <span>Let's Build Together</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Ready to Start
              <br />
              <span className="text-gradient-gold">Your Project?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-slate-300 max-w-xl mx-auto mb-10 leading-relaxed"
            >
              Let's discuss how we can help transform your business with our technology solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold gradient-gold text-h2f-blue-900 shadow-gold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Contact Us</span>
                <ArrowRight size={20} />
              </Link>
              
              <Link
                to="/about"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white border-2 border-white/30 hover:border-h2f-gold-500/50 hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Code size={18} className="text-h2f-gold-500" />
                <span>Learn More</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ServicesPage;
