import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import h2fLogo from "@/assets/h2f.jpg";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-2xl border-b border-white/20 shadow-xl shadow-black/5" // Enhanced glass effect when scrolled
          : "bg-white/60 backdrop-blur-xl border-b border-transparent" // Softer when at top
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`flex items-center justify-between h-20 transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/"
              className="flex items-center gap-3"
            >
              <div className="relative">
                <img src={h2fLogo} alt="H2F logo" className="w-10 h-10 rounded-xl object-cover shadow-lg" />
                {/* Enhanced liquid glass effect */}
                <motion.div 
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-purple-500/20 border border-white/30 pointer-events-none"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <span 
                className={`font-black text-xl hidden sm:block uppercase tracking-wide bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent transition-all duration-300 ${isScrolled ? 'text-lg' : 'text-xl'}`}
              >
                H2F
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ y: -2 }}
              >
                <Link
                  to={link.href}
                  className={`px-4 py-2.5 rounded-xl font-medium transition-all duration-300 relative group ${
                    location.pathname === link.href
                      ? "text-blue-600"
                      : isScrolled
                      ? "text-gray-700 hover:text-gray-900"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  {/* Animated background effect */}
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl opacity-0 -z-10"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link
              to="/contact"
              className="hidden md:block px-6 py-2.5 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Get Started
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-3 rounded-xl transition-all duration-300 ${
              isScrolled ? "text-gray-900 bg-white/50" : "text-gray-900 bg-white/50"
            } backdrop-blur-sm border border-white/30 hover:bg-white/70`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/90 backdrop-blur-2xl border-t border-white/20 shadow-2xl"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    to={link.href}
                    className={`block px-4 py-3 rounded-xl font-medium transition-colors ${
                      location.pathname === link.href
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <Link
                to="/contact"
                className="px-4 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-center mt-2 shadow-lg"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
