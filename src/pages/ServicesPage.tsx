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
  CheckCircle
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
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-h2f-blue-900 via-h2f-blue-800 to-h2f-blue-900" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-h2f-gold-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-h2f-blue-500/20 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 rounded-full bg-h2f-gold-500/20 text-h2f-gold-500 text-sm font-medium mb-6"
            >
              Our Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Transforming Ideas Into
              <span className="text-gradient-animated block mt-2">Digital Excellence</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/70 max-w-2xl mx-auto"
            >
              Comprehensive technology solutions tailored to your business needs. 
              From development to deployment, we've got you covered.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div
                key={service.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`order-2 ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                  <div className={`relative h-80 rounded-3xl bg-gradient-to-br ${service.color} p-1`}>
                    <div className="absolute inset-1 bg-card rounded-[22px] flex items-center justify-center">
                      <service.icon className="w-32 h-32 text-muted-foreground/30" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-xl`}>
                          <service.icon className="w-12 h-12 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={`order-1 ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                  <h3 className="text-3xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground text-lg mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-h2f-gold-500 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold gradient-gold text-h2f-blue-900 shadow-gold hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              More Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Additional <span className="text-gradient-gold">Services</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={service.title}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="p-6 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-h2f-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-h2f-blue-900">
        <div className="container mx-auto px-4 lg:px-8 text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
            Let's discuss how we can help transform your business with our technology solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold gradient-gold text-h2f-blue-900 shadow-gold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Contact Us Today
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default ServicesPage;
