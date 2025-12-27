import { motion } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Twitter, Mail, Instagram } from "lucide-react";

import bijonImg from "@/assets/Bijon.jpg";
import digeeImg from "@/assets/digee.jpeg";
import venuImg from "@/assets/venu1.png";
import teamCto from "@/assets/team-cto.jpg";
import teamCmo from "@/assets/team-cmo.jpg";
import teamCio from "@/assets/team-cio.jpg";

const teamMembers = [
  {
    name: "Marisilin Bijon",
    role: "CEO",
    title: "Chief Executive Officer",
    image: bijonImg,
    bio: "Visionary leader driving innovation and growth",
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#"
    }
  },
  {
    name: "Jeganathan Digevan",
    role: "COO",
    title: "Chief Operating Officer",
    image: digeeImg,
    bio: "Operational excellence and strategic execution",
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#"
    }
  },
  {
    name: "Venujan Thirugnanam",
    role: "CSO",
    title: "Chief Security Officer",
    image: venuImg,
    bio: "Securing digital infrastructure and innovation",
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#"
    }
  },
  {
    name: "Krishan Kavishan",
    role: "CTO",
    title: "Chief Technology Officer",
    image: teamCto,
    bio: "Leading technical innovation and development",
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#"
    }
  },
  {
    name: "Sivanantharaja Lajithan",
    role: "CMO",
    title: "Chief Marketing Officer",
    image: teamCmo,
    bio: "Crafting compelling brand stories and growth",
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#"
    }
  },
  {
    name: "Manogaran Ahillan",
    role: "CIO",
    title: "Chief Information Officer",
    image: teamCio,
    bio: "Managing information systems and technology",
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#"
    }
  },
];

export const TeamSection = () => {
  const ref = useRef(null);

  return (
    <section id="team" className="py-24 relative overflow-hidden">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-h2f-gold-500/20 to-amber-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"/>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-h2f-gold-500/20 to-amber-500/20 border border-h2f-gold-500/30 backdrop-blur-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-h2f-gold-500 animate-pulse"/>
            <span className="text-h2f-gold-500 text-sm font-semibold tracking-wider uppercase">Our Leadership Team</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Meet the <span className="bg-gradient-to-r from-h2f-gold-500 via-amber-400 to-h2f-gold-500 bg-clip-text text-transparent">Visionaries</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Exceptional leaders united by a passion for innovation, driving digital transformation and creating impactful solutions for businesses worldwide.
          </motion.p>
        </motion.div>

        {/* Team Grid with Elegant Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 transition-all duration-500 hover:border-h2f-gold-500/50 hover:shadow-2xl hover:shadow-h2f-gold-500/20">
                {/* Animated Border Gradient */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-[-2px] bg-gradient-to-r from-h2f-gold-500 via-amber-400 to-h2f-gold-500 rounded-2xl animate-[spin_3s_linear_infinite] blur-sm" style={{ animation: 'gradient-rotate 3s linear infinite' }}/>
                  <div className="absolute inset-0 bg-slate-900 rounded-2xl"/>
                </div>
                
                {/* Content */}
                <div className="relative p-8">
                  {/* Image Container */}
                  <div className="relative mb-6 overflow-hidden rounded-xl">
                    <motion.div
                      className="relative aspect-square overflow-hidden rounded-xl"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                      />
                      
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"/>
                      
                      {/* Role Badge */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                        className="absolute top-4 right-4 px-4 py-2 rounded-full bg-gradient-to-r from-h2f-gold-500 to-amber-500 text-slate-900 text-xs font-bold uppercase tracking-wider shadow-lg"
                      >
                        {member.role}
                      </motion.div>
                      
                      {/* Social Links Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-slate-900/80 backdrop-blur-sm">
                        <motion.a
                          href={member.social.linkedin}
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-12 h-12 rounded-full bg-gradient-to-br from-h2f-gold-500 to-amber-500 flex items-center justify-center text-slate-900 hover:shadow-lg hover:shadow-h2f-gold-500/50 transition-all"
                        >
                          <Linkedin size={20} />
                        </motion.a>
                        <motion.a
                          href={member.social.twitter}
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                        >
                          <Twitter size={20} />
                        </motion.a>
                        <motion.a
                          href={member.social.instagram}
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white hover:shadow-lg hover:shadow-pink-500/50 transition-all"
                        >
                          <Instagram size={20} />
                        </motion.a>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Info */}
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-h2f-gold-500 transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-sm text-slate-400 font-medium">
                        {member.title}
                      </p>
                    </div>
                    
                    <p className="text-slate-300 text-sm leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-500">
                      {member.bio}
                    </p>
                    
                    {/* Contact Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full mt-4 px-6 py-3 rounded-lg bg-gradient-to-r from-slate-700 to-slate-800 text-white font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 hover:from-h2f-gold-500 hover:to-amber-500 hover:text-slate-900 flex items-center justify-center gap-2"
                    >
                      <Mail size={16} />
                      Get in Touch
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
