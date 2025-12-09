import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Twitter, Mail } from "lucide-react";

import teamCeo from "@/assets/team-ceo.jpg";
import teamCto from "@/assets/team-cto.jpg";
import teamCoo from "@/assets/team-coo.jpg";
import teamCmo from "@/assets/team-cmo.jpg";
import teamCio from "@/assets/team-cio.jpg";
import bijonImg from "@/assets/bijon.png";
import Digee from "@/assets/digee.jpeg";


const teamMembers = [
  {
    firstName: "MARISILIN",
    lastName: "BIJON",
    role: "CEO",
    title: "Chief Executive Officer",
    image: bijonImg,
  },
  {
    firstName: "KRISHAN",
    lastName: "KAVISHAN",
    role: "CTO",
    title: "Chief Technology Officer",
    image: teamCto,
  },
  {
    firstName: "JEGANATHAN",
    lastName: "DIGEVAN",
    role: "COO",
    title: "Chief Operating Officer",
    image: Digee,
  },
  {
    firstName: "SIVANANTHARAJA",
    lastName: "LAJITHAN",
    role: "CMO",
    title: "Chief Marketing Officer",
    image: teamCmo,
  },
  {
    firstName: "MANOGARAN",
    lastName: "AHILLAN",
    role: "CIO",
    title: "Chief Information Officer",
    image: teamCio,
  },
];

export const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-24 relative overflow-hidden">
      {/* Tech-themed Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-h2f-blue-900 via-h2f-blue-800 to-h2f-blue-900">
        {/* Network Nodes Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          {[...Array(8)].map((_, i) => (
            <g key={i}>
              <motion.circle
                cx={`${15 + i * 12}%`}
                cy={`${20 + (i % 3) * 25}%`}
                r="3"
                fill="rgba(245, 185, 66, 0.5)"
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              />
              <motion.line
                x1={`${15 + i * 12}%`}
                y1={`${20 + (i % 3) * 25}%`}
                x2={`${25 + i * 10}%`}
                y2={`${40 + (i % 2) * 20}%`}
                stroke="rgba(245, 185, 66, 0.2)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
              />
            </g>
          ))}
        </svg>
        
        {/* Glowing Orbs */}
        <motion.div
          className="absolute top-40 right-20 w-80 h-80 bg-h2f-gold-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-96 h-96 bg-h2f-blue-400/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            data-aos="fade-up"
            className="inline-block px-4 py-1.5 rounded-full bg-h2f-gold-500/20 text-h2f-gold-500 text-sm font-medium mb-4"
          >
            Our Team
          </span>
          <h2 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Meet the <span className="text-gradient-gold">Founders</span>
          </h2>
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white/70 max-w-2xl mx-auto text-lg"
          >
            A passionate team of innovators dedicated to transforming businesses 
            through cutting-edge technology solutions.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.firstName + member.lastName}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <motion.div
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="p-6 rounded-3xl bg-card shadow-card hover:shadow-card-hover border border-border/50 transition-all duration-300 text-center group relative overflow-hidden"
              >
                {/* Background glow on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-h2f-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Avatar */}
                <div className="relative mb-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-28 h-28 mx-auto rounded-2xl overflow-hidden shadow-lg group-hover:shadow-gold transition-shadow duration-300"
                  >
                    <img
                      src={member.image}
                      alt={`${member.firstName} ${member.lastName}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay on hover */}
                    <motion.div
                      className="absolute inset-0 bg-primary/60 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-full bg-primary-foreground text-primary"
                      >
                        <Linkedin size={14} />
                      </motion.a>
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-full bg-primary-foreground text-primary"
                      >
                        <Mail size={14} />
                      </motion.a>
                    </motion.div>
                  </motion.div>

                  {/* Role Badge */}
                  <span
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full gradient-gold text-h2f-blue-900 text-xs font-bold shadow-gold"
                  >
                    {member.role}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300 mt-4">
                  <span className="block">{member.firstName}</span>
                  <span className="block">{member.lastName}</span>
                </h3>

                {/* Title */}
                <p className="text-muted-foreground text-sm">
                  {member.title}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="p-2 rounded-lg bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Linkedin size={14} />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="p-2 rounded-lg bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Twitter size={14} />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
