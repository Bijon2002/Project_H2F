import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import h2fLogo from "@/assets/h2f.jpg";
import {
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Github,
  Youtube,
  Mail,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "Web Development",
  "Mobile Development",
  "Cloud & Hosting",
  "E-Commerce",
  "Salesforce",
  "AI Development",
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export const Footer = () => {
  return (
    <footer className="bg-h2f-blue-900 text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <img src={h2fLogo} alt="H2F logo" className="w-10 h-10 rounded-lg object-cover shadow-gold" />
                <span className="font-bold text-xl">H2F</span>
              </div>
              <p className="text-primary-foreground/70 mb-4 leading-relaxed">
                Building the world through innovation. Your trusted partner for 
                cutting-edge technology solutions.
              </p>
              <p className="text-primary-foreground/50 text-sm">
                Established August 2025 • Jaffna, Sri Lanka
              </p>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-primary-foreground/70 hover:text-h2f-gold-500 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service}>
                    <Link
                      to="/services"
                      className="text-primary-foreground/70 hover:text-h2f-gold-500 transition-colors duration-300"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Newsletter */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-lg font-bold mb-4">Stay Updated</h4>
              <p className="text-primary-foreground/70 mb-4">
                Subscribe to our newsletter for updates.
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2.5 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-h2f-gold-500 focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-lg gradient-gold text-h2f-blue-900 font-semibold hover:shadow-gold transition-shadow"
                >
                  <Mail size={20} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 border-t border-primary-foreground/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2.5 rounded-lg bg-primary-foreground/10 hover:bg-h2f-gold-500 hover:text-h2f-blue-900 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-primary-foreground/50 text-sm text-center">
              © {new Date().getFullYear()} H2F. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
