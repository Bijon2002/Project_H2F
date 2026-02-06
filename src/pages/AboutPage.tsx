import { motion } from "framer-motion";
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  Lightbulb,
  Globe,
  Rocket,
  CheckCircle,
  Building,
  Calendar,
  MapPin,
  Code,
  Zap,
  Shield,
  TrendingUp,
  Star,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Link } from "react-router-dom";

// Elegant Animated Logo Component
function ElegantLogo() {
  return (
    <div className="relative w-64 h-64 mx-auto">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-h2f-gold-500/20 to-h2f-blue-500/20 blur-2xl animate-pulse"></div>
      <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 shadow-2xl border border-slate-200/50 dark:border-slate-700/50 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-h2f-gold-500/10 to-transparent"></div>
        <div className="text-center z-10">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-24 h-24 mx-auto mb-6 rounded-2xl gradient-gold flex items-center justify-center shadow-lg"
          >
            <span className="text-4xl font-black text-h2f-blue-900">H2F</span>
          </motion.div>
          <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Host 2 Fusion</h3>
          <p className="text-slate-600 dark:text-slate-400 font-medium">Innovating Tomorrow, Today</p>
        </div>
      </div>
    </div>
  );
}

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly push boundaries and embrace cutting-edge technologies to deliver forward-thinking solutions.",
    gradient: "from-blue-600 to-cyan-500",
    glow: "shadow-blue-500/30"
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Every project we undertake is fueled by our genuine passion for technology and creating impactful solutions.",
    gradient: "from-rose-500 to-pink-500",
    glow: "shadow-rose-500/30"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork, both within our team and in partnership with our clients.",
    gradient: "from-purple-500 to-indigo-500",
    glow: "shadow-purple-500/30"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in everything we do, ensuring the highest quality in our deliverables.",
    gradient: "from-h2f-gold-500 to-amber-500",
    glow: "shadow-h2f-gold-500/30"
  }
];

const milestones = [
  {
    year: "August 2025",
    title: "Company Founded",
    description: "Host 2 Fusion was established in Jaffna, Sri Lanka, with a vision to transform businesses through technology.",
    icon: Star
  },
  {
    year: "September 2025",
    title: "First Client Project",
    description: "Successfully delivered our first major web development project, setting the standard for quality.",
    icon: Code
  },
  {
    year: "October 2025",
    title: "Team Expansion",
    description: "Grew our team to include specialists in mobile development, cloud services, and AI.",
    icon: Users
  },
  {
    year: "November 2025",
    title: "Global Reach",
    description: "Expanded our services to clients across multiple countries, establishing international presence.",
    icon: Globe
  }
];

const stats = [
  { icon: Building, value: "6+", label: "Core Services", suffix: "" },
  { icon: Users, value: "5", label: "Expert Team", suffix: "" },
  { icon: Globe, value: "10+", label: "Countries", suffix: "Served" },
  { icon: Rocket, value: "100", label: "Client", suffix: "Satisfaction %" }
];

const AboutPage = () => {
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
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 text-h2f-gold-500" />
              </motion.div>
              <span className="text-slate-300 text-sm font-bold tracking-wider uppercase">About H2F</span>
            </motion.div>

            {/* Main Heading with 3D Effect */}
            <div className="overflow-hidden mb-8">
              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4"
              >
                Building the Future
                <br />
                <motion.span
                  className="text-gradient-gold inline-block"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  Through Innovation
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
              We're a passionate team of innovators dedicated to transforming businesses 
              with cutting-edge technology solutions. Founded in August 2025, we're on a mission 
              to build tomorrow's digital landscape, today.
            </motion.p>

            {/* 3D Interactive Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center my-12"
            >
              <ElegantLogo />
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.15, duration: 0.5 }}
                  whileHover={{ scale: 1.08, y: -8 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md border border-slate-700/50 hover:border-h2f-gold-500/40 transition-all duration-300 group"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <stat.icon className="w-8 h-8 text-h2f-gold-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  </motion.div>
                  <motion.div
                    className="text-3xl font-black text-white mb-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    {stat.value}<span className="text-h2f-gold-500 text-xl">{stat.suffix}</span>
                  </motion.div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Story with 3D Effects */}
      <section className="py-32 relative overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-h2f-blue-50 dark:from-slate-900 dark:to-slate-800">
          <div className="absolute inset-0 opacity-50">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-h2f-gold-500/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-h2f-blue-500/20 to-transparent rounded-full blur-3xl" />
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", duration: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-h2f-blue-600/20 to-h2f-gold-500/20 backdrop-blur-sm border border-h2f-blue-500/30 mb-4"
              >
                <Sparkles className="w-4 h-4 text-h2f-gold-500" />
                <span className="text-h2f-blue-600 dark:text-h2f-gold-500 text-sm font-bold">Our Story</span>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6"
              >
                From Vision to <span className="text-gradient-gold">Reality</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
              >
                Founded in August 2025, Host 2 Fusion emerged from a shared vision among a group of 
                technology enthusiasts in Jaffna, Sri Lanka. We saw an opportunity to bridge the gap 
                between cutting-edge technology and businesses seeking digital transformation.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
              >
                What started as a small team with big dreams has evolved into a dynamic technology 
                company serving clients across the globe. Our commitment to excellence, innovation, 
                and client satisfaction has been the cornerstone of our rapid growth.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-6 pt-4"
              >
                <div className="flex items-center gap-3 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm px-4 py-3 rounded-xl border border-slate-200/50 dark:border-slate-700/50">
                  <MapPin className="w-5 h-5 text-h2f-gold-500 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300 font-medium">Jaffna, Sri Lanka</span>
                </div>
                <div className="flex items-center gap-3 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm px-4 py-3 rounded-xl border border-slate-200/50 dark:border-slate-700/50">
                  <Calendar className="w-5 h-5 text-h2f-gold-500 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300 font-medium">Established August 2025</span>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-h2f-gold-500 to-h2f-blue-600 p-1 shadow-2xl shadow-h2f-gold-500/30">
                <div className="w-full h-full rounded-[22px] bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center overflow-hidden relative">
                  <div className="text-center p-8 z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-32 h-32 mx-auto mb-6 rounded-2xl gradient-gold flex items-center justify-center shadow-lg"
                    >
                      <span className="text-5xl font-black text-h2f-blue-900">H2F</span>
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      viewport={{ once: true }}
                      className="text-2xl font-black text-slate-900 dark:text-white mb-2"
                    >
                      Host 2 Fusion
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                      viewport={{ once: true }}
                      className="text-slate-600 dark:text-slate-400 font-medium"
                    >
                      Innovating Tomorrow, Today
                    </motion.p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-h2f-gold-500/10 to-transparent" />
                </div>
              </div>
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl gradient-gold opacity-30 blur-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
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
              <Target className="w-4 h-4" />
              <span>Our Purpose</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
            >
              Mission & <span className="text-gradient-gold">Vision</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200/50 dark:border-slate-700/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-h2f-blue-600 to-h2f-blue-800 flex items-center justify-center mb-6 shadow-md">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Mission</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                To empower businesses worldwide with innovative technology solutions that drive 
                growth, efficiency, and digital transformation. We are committed to delivering 
                excellence in every project while fostering long-term partnerships built on trust 
                and mutual success.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200/50 dark:border-slate-700/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-h2f-gold-400 to-h2f-gold-500 flex items-center justify-center mb-6 shadow-md">
                <Eye className="w-8 h-8 text-h2f-blue-900" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Vision</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                To become a global leader in technology innovation, setting new standards for 
                excellence in software development and digital services. We aspire to be the 
                trusted technology partner of choice for businesses seeking to thrive in the 
                digital age.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              <Heart className="w-4 h-4" />
              <span>Our Values</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
            >
              What <span className="text-gradient-gold">Drives Us</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200/50 dark:border-slate-700/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mx-auto mb-4 shadow-md`}>
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 text-center">{value.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-center text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-h2f-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-h2f-gold-500/10 text-h2f-gold-500 text-sm font-medium mb-6"
            >
              <Calendar className="w-4 h-4" />
              <span>Our Journey</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
            >
              Key <span className="text-gradient-gold">Milestones</span>
            </motion.h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                {/* Timeline line */}
                <div className="absolute left-0 top-3 w-0.5 h-full bg-h2f-gold-500/30" />
                
                {/* Timeline dot */}
                <div className="absolute left-[-4px] top-0 w-3 h-3 rounded-full bg-h2f-gold-500"></div>
                
                {/* Milestone content */}
                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200/50 dark:border-slate-700/50 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="text-h2f-gold-500 font-bold text-sm">{milestone.year}</span>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1 mb-2">{milestone.title}</h3>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-h2f-gold-500 to-amber-500 flex items-center justify-center flex-shrink-0">
                      <milestone.icon className="w-5 h-5 text-slate-900" />
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">
                    {milestone.description}
                  </p>
                </div>
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
              Ready to Transform
              <br />
              <span className="text-gradient-gold">Your Business?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-slate-300 max-w-xl mx-auto mb-10 leading-relaxed"
            >
              Join our journey of innovation and be part of something extraordinary. 
              Let's build the future of technology together.
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
                <span>Get Started</span>
                <ArrowRight size={20} />
              </Link>
              
              <Link
                to="/services"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white border-2 border-white/30 hover:border-h2f-gold-500/50 hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Zap size={18} className="text-h2f-gold-500" />
                <span>Explore Services</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutPage;
