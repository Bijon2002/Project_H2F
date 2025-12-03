import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  Globe,
  CheckCircle
} from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@h2f.tech",
    link: "mailto:hello@h2f.tech"
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+94 77 123 4567",
    link: "tel:+94771234567"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "Jaffna, Sri Lanka",
    link: "#"
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon - Fri: 9AM - 6PM",
    link: "#"
  }
];

const faqs = [
  {
    question: "How do I get started with H2F?",
    answer: "Simply fill out our contact form or email us directly. We'll schedule a free consultation to discuss your project requirements and provide a tailored solution."
  },
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 2-6 months. We provide detailed timelines during the proposal phase."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes! We offer comprehensive maintenance and support packages to ensure your applications run smoothly after launch."
  },
  {
    question: "What technologies do you work with?",
    answer: "We work with modern technologies including React, Next.js, Node.js, Python, AWS, Azure, and various AI/ML frameworks. We choose the best stack for each project's needs."
  }
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
              Get In Touch
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Let's Build Something
              <span className="text-gradient-animated block mt-2">Amazing Together</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/70 max-w-2xl mx-auto"
            >
              Have a project in mind? We'd love to hear about it. Reach out and let's 
              discuss how we can help bring your vision to life.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-muted/50 -mt-10 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info, index) => (
              <a
                key={info.title}
                href={info.link}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="p-6 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <info.icon className="w-6 h-6 text-h2f-blue-900" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                <p className="text-muted-foreground">{info.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div data-aos="fade-right">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Send a Message
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Tell Us About <span className="text-gradient-gold">Your Project</span>
              </h2>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-green-50 border border-green-200 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-600">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-h2f-gold-500 focus:ring-2 focus:ring-h2f-gold-500/20 transition-all outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-h2f-gold-500 focus:ring-2 focus:ring-h2f-gold-500/20 transition-all outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-h2f-gold-500 focus:ring-2 focus:ring-h2f-gold-500/20 transition-all outline-none"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-h2f-gold-500 focus:ring-2 focus:ring-h2f-gold-500/20 transition-all outline-none"
                        placeholder="+94 77 123 4567"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Service Interested In</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-h2f-gold-500 focus:ring-2 focus:ring-h2f-gold-500/20 transition-all outline-none"
                      >
                        <option value="">Select a service</option>
                        <option value="web">Web Development</option>
                        <option value="mobile">Mobile Development</option>
                        <option value="cloud">Cloud & Hosting</option>
                        <option value="ecommerce">E-Commerce</option>
                        <option value="salesforce">Salesforce</option>
                        <option value="ai">AI Development</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Budget Range</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-h2f-gold-500 focus:ring-2 focus:ring-h2f-gold-500/20 transition-all outline-none"
                      >
                        <option value="">Select budget</option>
                        <option value="5k">Less than $5,000</option>
                        <option value="10k">$5,000 - $10,000</option>
                        <option value="25k">$10,000 - $25,000</option>
                        <option value="50k">$25,000 - $50,000</option>
                        <option value="50k+">$50,000+</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Project Details *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-h2f-gold-500 focus:ring-2 focus:ring-h2f-gold-500/20 transition-all outline-none resize-none"
                      placeholder="Tell us about your project, goals, and timeline..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-semibold gradient-gold text-h2f-blue-900 shadow-gold hover:shadow-lg transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-h2f-blue-900/30 border-t-h2f-blue-900 rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* FAQs */}
            <div data-aos="fade-left">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                FAQs
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Frequently Asked <span className="text-gradient-gold">Questions</span>
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-2xl bg-card border border-border/50 shadow-card"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg gradient-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                        <MessageSquare className="w-4 h-4 text-h2f-blue-900" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                        <p className="text-muted-foreground text-sm">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-8 rounded-2xl overflow-hidden border border-border/50 h-64 bg-muted flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <Globe className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p>Jaffna, Sri Lanka</p>
                  <p className="text-sm">Serving clients globally</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ContactPage;
