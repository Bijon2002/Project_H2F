import { motion } from "framer-motion";
import { 
  Linkedin, 
  Twitter, 
  Github, 
  Mail,
  Award,
  Code,
  Briefcase,
  GraduationCap
} from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Link } from "react-router-dom";

const team = [
  {
    name: "Bijon Balachandran",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "Visionary leader with expertise in technology strategy and business development. Passionate about driving innovation and digital transformation.",
    skills: ["Leadership", "Strategy", "Business Development"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Arun Kumar",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Tech enthusiast with deep expertise in cloud architecture and full-stack development. Leading the technical vision of H2F.",
    skills: ["Cloud Architecture", "Full-Stack", "DevOps"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Priya Sharma",
    role: "Lead Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    bio: "Creative designer with a passion for user-centered design. Crafting beautiful and intuitive experiences for our clients.",
    skills: ["UI/UX Design", "Brand Identity", "Motion Design"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Raj Patel",
    role: "Senior Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    bio: "Full-stack developer with expertise in React, Node.js, and cloud technologies. Building scalable solutions for global clients.",
    skills: ["React", "Node.js", "AWS"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Maya Chen",
    role: "AI/ML Engineer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    bio: "AI specialist passionate about building intelligent systems. Expertise in machine learning, NLP, and computer vision.",
    skills: ["Machine Learning", "Python", "TensorFlow"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  }
];

const highlights = [
  { icon: Award, title: "Industry Experts", desc: "Our team comprises industry veterans with years of experience" },
  { icon: Code, title: "Technical Excellence", desc: "Proficient in the latest technologies and best practices" },
  { icon: Briefcase, title: "Professional Approach", desc: "Committed to delivering quality and meeting deadlines" },
  { icon: GraduationCap, title: "Continuous Learning", desc: "Always staying updated with emerging technologies" }
];

const TeamPage = () => {
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
              Our Team
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Meet the Minds Behind
              <span className="text-gradient-animated block mt-2">Our Innovation</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/70 max-w-2xl mx-auto"
            >
              A diverse team of passionate professionals dedicated to delivering 
              exceptional technology solutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Team Highlights */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50"
              >
                <div className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-h2f-blue-900" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group"
              >
                <div className="relative rounded-3xl overflow-hidden bg-card border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2">
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    
                    {/* Social Links Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 bg-h2f-blue-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a href={member.social.linkedin} className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-h2f-gold-500 transition-colors">
                        <Linkedin className="w-5 h-5 text-white" />
                      </a>
                      <a href={member.social.twitter} className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-h2f-gold-500 transition-colors">
                        <Twitter className="w-5 h-5 text-white" />
                      </a>
                      <a href={member.social.github} className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-h2f-gold-500 transition-colors">
                        <Github className="w-5 h-5 text-white" />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                      <span className="text-h2f-gold-500 font-medium">{member.role}</span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-24 bg-h2f-blue-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Want to Join Our Team?
            </h2>
            <p className="text-xl text-white/70 mb-10">
              We're always looking for talented individuals who share our passion for innovation. 
              Check out our open positions and become part of the H2F family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/careers"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold gradient-gold text-h2f-blue-900 shadow-gold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                View Open Positions
              </Link>
              <a
                href="mailto:careers@h2f.tech"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white border-2 border-white/30 hover:bg-white/10 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                careers@h2f.tech
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TeamPage;
