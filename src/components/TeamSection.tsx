import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Twitter, Mail } from "lucide-react";

import teamCeo from "@/assets/team-ceo.jpg";
import teamCto from "@/assets/team-cto.jpg";
import teamCoo from "@/assets/team-coo.jpg";
import teamCmo from "@/assets/team-cmo.jpg";
import teamCio from "@/assets/team-cio.jpg";

const teamMembers = [
  {
    name: "Marisilin Bijosilin",
    role: "CEO",
    title: "Chief Executive Officer",
    image: teamCeo,
  },
  {
    name: "Krishan Kavishan",
    role: "CTO",
    title: "Chief Technology Officer",
    image: teamCto,
  },
  {
    name: "Jeganathan Digevan",
    role: "COO",
    title: "Chief Operating Officer",
    image: teamCoo,
  },
  {
    name: "Sivanantharaja Lajithan",
    role: "CMO",
    title: "Chief Marketing Officer",
    image: teamCmo,
  },
  {
    name: "Manogaran Ahillan",
    role: "CIO",
    title: "Chief Information Officer",
    image: teamCio,
  },
];

export const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-24 gradient-section relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-40 right-20 w-80 h-80 bg-h2f-gold-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-96 h-96 bg-h2f-blue-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

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
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            Our Team
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet the <span className="text-gradient-gold">Founders</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A passionate team of innovators dedicated to transforming businesses 
            through cutting-edge technology solutions.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50, rotateY: -20 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
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
                      alt={member.name}
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
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full gradient-gold text-h2f-blue-900 text-xs font-bold shadow-gold"
                  >
                    {member.role}
                  </motion.span>
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300 mt-4">
                  {member.name}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
