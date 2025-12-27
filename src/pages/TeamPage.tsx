import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Linkedin, 
  Twitter, 
  Github, 
  Mail,
  Sparkles,
  Star,
  ChevronDown,
  ArrowRight,
  Shield,
  TrendingUp,
  Megaphone,
  Database,
  Cpu,
  Briefcase
} from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Link } from "react-router-dom";
import conVideo from "@/assets/con.mp4";

// Team member images
import bijonImg from "@/assets/Bijon.jpg";
import digeeImg from "@/assets/digee.jpeg";
import venuImg from "@/assets/venu1.png";
import teamCto from "@/assets/team-cto.jpg";
import teamCmo from "@/assets/team-cmo.jpg";
import teamCio from "@/assets/team-cio.jpg";

const team = [
  {
    name: "Marisilin Bijon",
    role: "Chief Executive Officer",
    shortRole: "CEO",
    image: bijonImg,
    about: "Visionary leader driving innovation and growth",
    bio: "As the founder and CEO of HOST 2 FUSION, Marisilin brings a unique blend of technical expertise and business acumen. With a passion for transforming ideas into reality, he leads the company's strategic vision and ensures every project exceeds client expectations. His leadership style emphasizes innovation, collaboration, and excellence.",
    skills: ["Leadership", "Strategy", "Innovation", "Business Development"],
    icon: TrendingUp,
    gradient: "from-amber-500 to-orange-600",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Jeganathan Digevan",
    role: "Chief Operating Officer",
    shortRole: "COO",
    image: digeeImg,
    about: "Operational excellence and strategic execution",
    bio: "Jeganathan oversees the day-to-day operations of H2F, ensuring smooth execution of all projects and maintaining the highest standards of quality. His strategic approach to operations has streamlined processes and maximized efficiency across all departments, enabling the team to deliver exceptional results consistently.",
    skills: ["Operations", "Process Optimization", "Team Management", "Strategy"],
    icon: Briefcase,
    gradient: "from-blue-500 to-cyan-600",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Venujan Thirugnanam",
    role: "Chief Security Officer",
    shortRole: "CSO",
    image: venuImg,
    about: "Securing digital infrastructure and innovation",
    bio: "Venujan leads H2F's security initiatives, ensuring all client solutions are built with enterprise-grade security from the ground up. His expertise in cybersecurity and risk management protects our clients' digital assets and maintains the trust they place in our solutions.",
    skills: ["Cybersecurity", "Risk Management", "Compliance", "Infrastructure"],
    icon: Shield,
    gradient: "from-emerald-500 to-green-600",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Krishan Kavishan",
    role: "Chief Technology Officer",
    shortRole: "CTO",
    image: teamCto,
    about: "Leading technical innovation and development",
    bio: "Krishan drives the technical vision of H2F, staying at the forefront of emerging technologies and ensuring our solutions leverage the latest innovations. From cloud architecture to AI integration, he guides the technical direction of every project we undertake.",
    skills: ["Cloud Architecture", "AI/ML", "Full-Stack Development", "DevOps"],
    icon: Cpu,
    gradient: "from-violet-500 to-purple-600",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Sivanantharaja Lajithan",
    role: "Chief Marketing Officer",
    shortRole: "CMO",
    image: teamCmo,
    about: "Crafting compelling brand stories and growth",
    bio: "Sivanantharaja shapes H2F's brand identity and drives our marketing initiatives. His creative approach to storytelling and deep understanding of digital marketing helps our clients build strong, memorable brands that resonate with their audiences.",
    skills: ["Brand Strategy", "Digital Marketing", "Content Creation", "Growth"],
    icon: Megaphone,
    gradient: "from-pink-500 to-rose-600",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Manogaran Ahillan",
    role: "Chief Information Officer",
    shortRole: "CIO",
    image: teamCio,
    about: "Driving digital transformation and data excellence",
    bio: "Manogaran leads H2F's information strategy, ensuring our clients leverage data effectively to make informed decisions. His expertise in data architecture and digital transformation helps businesses unlock the full potential of their information assets.",
    skills: ["Data Strategy", "Digital Transformation", "Enterprise Systems", "Analytics"],
    icon: Database,
    gradient: "from-cyan-500 to-blue-600",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  }
];

const TeamPage = () => {
  const [activeTeamMember, setActiveTeamMember] = useState<number>(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <PageLayout>
      {/* Hero Section - Full Video Background with 6 Team Member Cards */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Full Background Video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={conVideo} type="video/mp4" />
          </video>
          {/* Video Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-h2f-blue-900/80 via-h2f-blue-900/70 to-h2f-blue-900/90" />
        </div>

        {/* Static Overlay Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Static Grid */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(251,191,36,0.03) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(251,191,36,0.03) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
          
          {/* Floating Orbs - simplified */}
          <div
            className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-h2f-gold-500/10 rounded-full blur-3xl"
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-3xl"
          />

          {/* Static Particles - no animation for performance */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-h2f-gold-500/30 rounded-full"
              style={{
                left: `${10 + i * 12}%`,
                top: `${15 + (i % 4) * 20}%`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-28 pb-20 min-h-[60vh] flex flex-col justify-center">
          {/* Section Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-h2f-gold-500/20 to-amber-500/10 border border-h2f-gold-500/40 backdrop-blur-xl">
              <Star className="w-4 h-4 text-h2f-gold-500 fill-h2f-gold-500" />
              <span className="text-h2f-gold-500 text-sm font-bold tracking-wider uppercase">Meet Our Team</span>
              <Sparkles className="w-4 h-4 text-h2f-gold-500" />
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-7xl font-black text-white text-center mb-4"
          >
            The{" "}
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{
                background: "linear-gradient(90deg, #fbbf24, #f59e0b, #fbbf24, #d97706, #fbbf24)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Fusion Force
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/70 text-lg md:text-xl text-center mb-12 max-w-3xl mx-auto"
          >
            Meet the passionate innovators and visionary leaders driving HOST 2 FUSION's mission forward
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex justify-center"
          >
            <div
              className="flex flex-col items-center gap-2 text-white/50 hover:text-h2f-gold-500 transition-colors cursor-pointer"
            >
              <span className="text-xs uppercase tracking-widest">Scroll to meet the team</span>
              <ChevronDown size={24} className="animate-bounce" />
            </div>
          </motion.div>
        </div>

        {/* Business Cards Floating Over Video */}
        <div className="relative z-10 pb-24">
          <div className="container mx-auto px-6 sm:px-8 md:px-6 lg:px-8">
            {/* Team Members - Full Width Business Cards */}
            <div className="space-y-6 md:space-y-8 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  id={`team-member-${index}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="group scroll-mt-24"
                >
                  {/* Horizontal Business Card */}
                  <div
                    className="relative mx-2 sm:mx-0 hover:scale-[1.01] hover:-translate-y-1 transition-transform duration-300 ease-out"
                  >
                    {/* Card Glow - CSS only */}
                    <div
                      className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"
                      style={{
                        background: `linear-gradient(135deg, ${member.gradient.includes('amber') ? 'rgba(245,158,11,0.3)' : member.gradient.includes('blue') ? 'rgba(59,130,246,0.3)' : member.gradient.includes('emerald') ? 'rgba(16,185,129,0.3)' : member.gradient.includes('violet') ? 'rgba(139,92,246,0.3)' : member.gradient.includes('pink') ? 'rgba(236,72,153,0.3)' : 'rgba(6,182,212,0.3)'} 0%, transparent 70%)`,
                      }}
                    />

                    {/* Main Card Container */}
                    <div 
                      className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden backdrop-blur-2xl border border-white/10 group-hover:border-h2f-gold-500/50 transition-all duration-500"
                      style={{ 
                        background: "linear-gradient(135deg, rgba(15,23,42,0.85) 0%, rgba(30,41,59,0.75) 50%, rgba(15,23,42,0.85) 100%)",
                      }}
                    >
                      {/* Card Content - Horizontal Layout */}
                      <div className="flex flex-col sm:flex-row">
                        {/* Left - Photo Section */}
                        <div className="relative w-full sm:w-2/5 md:w-1/3 lg:w-1/4">
                          {/* Photo Container */}
                          <div className="relative aspect-[4/3] sm:aspect-square md:aspect-auto md:h-full overflow-hidden">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            
                            {/* Photo Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-slate-900/90 md:block hidden" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent md:hidden" />

                            {/* Role Badge on Photo */}
                            <div
                              className={`absolute top-4 left-4 w-14 h-14 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center shadow-2xl border-2 border-white/20`}
                            >
                              <member.icon className="w-7 h-7 text-white" />
                            </div>
                          </div>
                        </div>

                        {/* Right - Content Section */}
                        <div className="flex-1 p-4 sm:p-5 md:p-8 lg:p-10 flex flex-col justify-center">
                          {/* Top Row - Role & Name */}
                          <div className="mb-3 md:mb-4">
                            {/* Role Tag */}
                            <span
                              className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r ${member.gradient} text-white mb-2 sm:mb-3 shadow-lg`}
                            >
                              <member.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                              {member.role}
                            </span>
                            
                            {/* Name */}
                            <h3
                              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white group-hover:text-h2f-gold-400 transition-colors duration-300"
                            >
                              {member.name}
                            </h3>
                          </div>

                          {/* Quote */}
                          <p
                            className="text-h2f-gold-500/90 text-sm sm:text-base md:text-lg italic mb-3 md:mb-4"
                          >
                            "{member.about}"
                          </p>

                          {/* Bio */}
                          <p
                            className="text-white/60 text-xs sm:text-sm md:text-base leading-relaxed mb-4 md:mb-6 line-clamp-2 group-hover:line-clamp-none transition-all duration-300"
                          >
                            {member.bio}
                          </p>

                          {/* Skills Row */}
                          <div
                            className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 md:mb-6"
                          >
                            {member.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-semibold bg-white/5 border border-white/10 text-white/70 group-hover:border-h2f-gold-500/30 group-hover:text-h2f-gold-500/80 transition-colors duration-300 hover:scale-105 hover:-translate-y-0.5"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>

                          {/* Bottom Row - Social & Contact */}
                          <div className="flex items-center justify-between flex-wrap gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-white/10">
                            {/* Social Links */}
                            <div className="flex gap-2 sm:gap-3">
                              {[
                                { href: member.social.linkedin, icon: Linkedin },
                                { href: member.social.twitter, icon: Twitter },
                                { href: member.social.github, icon: Github },
                              ].map((social, i) => (
                                <a
                                  key={i}
                                  href={social.href}
                                  className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-h2f-gold-500 hover:border-h2f-gold-500 hover:text-h2f-blue-900 hover:scale-110 hover:-translate-y-1 active:scale-95 transition-all duration-200 shadow-lg"
                                >
                                  <social.icon size={18} />
                                </a>
                              ))}
                            </div>

                            {/* Contact Button */}
                            <a
                              href={`mailto:${member.name.split(' ')[0].toLowerCase()}@h2f.tech`}
                              className={`inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl bg-gradient-to-r ${member.gradient} text-white text-sm sm:text-base font-bold shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200`}
                            >
                              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                              <span className="hidden sm:inline">Get in Touch</span>
                              <span className="sm:hidden">Contact</span>
                              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Decorative Elements */}
                      <div
                        className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      >
                        <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-bl ${member.gradient} opacity-10`} style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }} />
                      </div>

                      {/* Static Corner Lines */}
                      <div className="absolute bottom-4 left-4 opacity-50">
                        <div className={`w-8 h-0.5 bg-gradient-to-r ${member.gradient} rounded-full mb-1`} />
                        <div className={`w-4 h-0.5 bg-gradient-to-r ${member.gradient} rounded-full`} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-h2f-blue-900 via-slate-900 to-h2f-blue-900">
          {/* Static Grid */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(251,191,36,0.05) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(251,191,36,0.05) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
          
          {/* Static Orb */}
          <div
            className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-h2f-gold-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-h2f-gold-500/20 border border-h2f-gold-500/40 mb-8"
            >
              <Sparkles className="w-4 h-4 text-h2f-gold-500" />
              <span className="text-h2f-gold-500 font-bold text-sm uppercase tracking-wider">Join Our Team</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Want to Join the{" "}
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{
                  background: "linear-gradient(90deg, #fbbf24, #f59e0b, #fbbf24, #d97706, #fbbf24)",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Fusion?
              </motion.span>
            </h2>

            <p className="text-xl text-white/70 mb-10">
              We're always looking for talented individuals who share our passion for innovation.
            </p>

            <div className="flex justify-center">
              <motion.a
                href="mailto:h2f.solutionz@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold gradient-gold text-h2f-blue-900 shadow-xl shadow-h2f-gold-500/30"
              >
                <Mail size={20} />
                h2f.solutionz@gmail.com
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TeamPage;
