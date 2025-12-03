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
  MapPin
} from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly push boundaries and embrace cutting-edge technologies to deliver forward-thinking solutions."
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Every project we undertake is fueled by our genuine passion for technology and creating impactful solutions."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork, both within our team and in partnership with our clients."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in everything we do, ensuring the highest quality in our deliverables."
  }
];

const milestones = [
  {
    year: "August 2025",
    title: "Company Founded",
    description: "Host 2 Fusion was established in Jaffna, Sri Lanka, with a vision to transform businesses through technology."
  },
  {
    year: "September 2025",
    title: "First Client Project",
    description: "Successfully delivered our first major web development project, setting the standard for quality."
  },
  {
    year: "October 2025",
    title: "Team Expansion",
    description: "Grew our team to include specialists in mobile development, cloud services, and AI."
  },
  {
    year: "November 2025",
    title: "Global Reach",
    description: "Expanded our services to clients across multiple countries, establishing international presence."
  }
];

const stats = [
  { icon: Building, value: "6+", label: "Core Services" },
  { icon: Users, value: "5", label: "Expert Team Members" },
  { icon: Globe, value: "10+", label: "Countries Served" },
  { icon: Rocket, value: "100%", label: "Client Satisfaction" }
];

const AboutPage = () => {
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
              About Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Building the Future
              <span className="text-gradient-animated block mt-2">Through Innovation</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/70 max-w-2xl mx-auto"
            >
              We're a passionate team of innovators dedicated to transforming businesses 
              with cutting-edge technology solutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                From Vision to <span className="text-gradient-gold">Reality</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Founded in August 2025, Host 2 Fusion emerged from a shared vision among a group of 
                technology enthusiasts in Jaffna, Sri Lanka. We saw an opportunity to bridge the gap 
                between cutting-edge technology and businesses seeking digital transformation.
              </p>
              <p className="text-muted-foreground text-lg mb-6">
                What started as a small team with big dreams has evolved into a dynamic technology 
                company serving clients across the globe. Our commitment to excellence, innovation, 
                and client satisfaction has been the cornerstone of our rapid growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-h2f-gold-500" />
                  <span>Jaffna, Sri Lanka</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-5 h-5 text-h2f-gold-500" />
                  <span>Established August 2025</span>
                </div>
              </div>
            </div>
            <div data-aos="fade-left" className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-h2f-gold-500 to-h2f-blue-600 p-1">
                <div className="w-full h-full rounded-[22px] bg-card flex items-center justify-center overflow-hidden">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-2xl gradient-gold flex items-center justify-center">
                      <span className="text-5xl font-bold text-h2f-blue-900">H2F</span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Host 2 Fusion</h3>
                    <p className="text-muted-foreground">Innovating Tomorrow, Today</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl gradient-gold opacity-20 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div
              data-aos="fade-up"
              className="p-8 rounded-3xl bg-card border border-border/50 shadow-card"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-h2f-blue-600 to-h2f-blue-800 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To empower businesses worldwide with innovative technology solutions that drive 
                growth, efficiency, and digital transformation. We are committed to delivering 
                excellence in every project while fostering long-term partnerships built on trust 
                and mutual success.
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="p-8 rounded-3xl bg-card border border-border/50 shadow-card"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-h2f-gold-400 to-h2f-gold-500 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-h2f-blue-900" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To become a global leader in technology innovation, setting new standards for 
                excellence in software development and digital services. We aspire to be the 
                trusted technology partner of choice for businesses seeking to thrive in the 
                digital age.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-h2f-blue-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="text-center"
              >
                <stat.icon className="w-10 h-10 text-h2f-gold-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What <span className="text-gradient-gold">Drives Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="p-6 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 group text-center"
              >
                <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="w-7 h-7 text-h2f-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Key <span className="text-gradient-gold">Milestones</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="relative pl-8 pb-12 last:pb-0"
              >
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-h2f-gold-500" />
                {index < milestones.length - 1 && (
                  <div className="absolute left-[7px] top-4 w-0.5 h-full bg-border" />
                )}
                <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-card">
                  <span className="text-h2f-gold-500 font-semibold">{milestone.year}</span>
                  <h3 className="text-xl font-bold text-foreground mt-1 mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-h2f-blue-900">
        <div className="container mx-auto px-4 lg:px-8 text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Want to Work With Us?
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
            Join our journey of innovation and be part of something extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold gradient-gold text-h2f-blue-900 shadow-gold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </Link>
            <Link
              to="/careers"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white border-2 border-white/30 hover:bg-white/10 transition-all duration-300"
            >
              View Careers
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutPage;
