import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "Marisilin Bijosilin",
    role: "CEO",
    title: "Chief Executive Officer",
    initials: "MB",
    gradient: "from-h2f-blue-600 to-h2f-blue-800",
  },
  {
    name: "Krishan Kavishan",
    role: "CTO",
    title: "Chief Technology Officer",
    initials: "KK",
    gradient: "from-h2f-gold-400 to-h2f-gold-500",
  },
  {
    name: "Jeganathan Digevan",
    role: "COO",
    title: "Chief Operating Officer",
    initials: "JD",
    gradient: "from-h2f-blue-500 to-h2f-blue-700",
  },
  {
    name: "Sivanantharaja Lajithan",
    role: "CMO",
    title: "Chief Marketing Officer",
    initials: "SL",
    gradient: "from-h2f-gold-300 to-h2f-gold-500",
  },
  {
    name: "Manogaran Ahillan",
    role: "CIO",
    title: "Chief Information Officer",
    initials: "MA",
    gradient: "from-h2f-blue-700 to-h2f-blue-900",
  },
];

export const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-24 gradient-section relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-80 h-80 bg-h2f-gold-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-h2f-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Team
          </span>
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
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -10, rotate: 2 }}
                transition={{ duration: 0.3 }}
                className="p-6 rounded-3xl bg-card shadow-card hover:shadow-card-hover border border-border/50 transition-all duration-300 text-center group"
              >
                {/* Avatar */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className={`w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center shadow-lg group-hover:shadow-gold transition-shadow duration-300`}
                >
                  <span className="text-2xl font-bold text-primary-foreground">
                    {member.initials}
                  </span>
                </motion.div>

                {/* Role Badge */}
                <span className="inline-block px-3 py-1 rounded-full gradient-gold text-h2f-blue-900 text-xs font-bold mb-3">
                  {member.role}
                </span>

                {/* Name */}
                <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                  {member.name}
                </h3>

                {/* Title */}
                <p className="text-muted-foreground text-sm mb-4">
                  {member.title}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-3">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  >
                    <Linkedin size={16} />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  >
                    <Twitter size={16} />
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
