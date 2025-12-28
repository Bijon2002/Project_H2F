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
    <footer className="bg-gradient-to-br from-gray-50 to-white pt-16 pb-8 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M30 0l30 30-30 30L0 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Liquid glass morphism container */}
        <div className="bg-white/70 backdrop-blur-xl border border-white/30 shadow-xl shadow-gray-900/5 rounded-3xl p-8 lg:p-12 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative">
                    <img src={h2fLogo} alt="H2F logo" className="w-12 h-12 rounded-xl object-cover shadow-lg" />
                    {/* Liquid glass border effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent border border-white/30 pointer-events-none" />
                  </div>
                  <span className="font-bold text-xl text-gray-900">H2F</span>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Building the world through innovation. Your trusted partner for 
                  cutting-edge technology solutions.
                </p>
                <p className="text-gray-500 text-sm">
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
                <h4 className="text-lg font-bold mb-4 text-gray-900">Quick Links</h4>
                <ul className="space-y-2">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-1.5 rounded-lg transition-all duration-300 block"
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
                <h4 className="text-lg font-bold mb-4 text-gray-900">Services</h4>
                <ul className="space-y-2">
                  {services.map((service) => (
                    <li key={service}>
                      <Link
                        to="/services"
                        className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-1.5 rounded-lg transition-all duration-300 block"
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
                <h4 className="text-lg font-bold mb-4 text-gray-900">Stay Updated</h4>
                <p className="text-gray-600 mb-4">
                  Subscribe to our newsletter for updates.
                </p>
                <form className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2.5 rounded-xl bg-white/50 border border-white/30 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:outline-none transition-colors backdrop-blur-sm"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                  >
                    <Mail size={20} />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 border-t border-gray-200/50 backdrop-blur-sm"
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
                  className="p-3 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/30 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-gray-600 text-sm text-center">
              © {new Date().getFullYear()} H2F. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
