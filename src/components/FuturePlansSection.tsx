import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Rocket, Users, TrendingUp } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const plans = [
  {
    icon: Globe,
    title: "Global Expansion",
    description:
      "Expanding our presence across continents to serve clients worldwide with local expertise and global standards.",
    number: "01",
  },
  {
    icon: Rocket,
    title: "Proprietary AI Platforms",
    description:
      "Developing cutting-edge AI platforms that will revolutionize how businesses interact with technology.",
    number: "02",
  },
  {
    icon: Users,
    title: "Educational Partnerships",
    description:
      "Collaborating with universities and institutions to nurture the next generation of tech innovators.",
    number: "03",
  },
  {
    icon: TrendingUp,
    title: "Enhanced Cloud Capabilities",
    description:
      "Building robust cloud infrastructure to deliver faster, more reliable, and scalable solutions.",
    number: "04",
  },
];

export const FuturePlansSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-h2f-blue-900/95" />
      </div>

      {/* Animated Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Rotating Circles */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/2 w-full h-full"
        >
          <div className="absolute top-1/2 left-1/2 w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2 border border-primary-foreground/5 rounded-full" />
          <div className="absolute top-1/2 left-1/2 w-[100%] h-[100%] -translate-x-1/2 -translate-y-1/2 border border-primary-foreground/5 rounded-full" />
          <div className="absolute top-1/2 left-1/2 w-[80%] h-[80%] -translate-x-1/2 -translate-y-1/2 border border-primary-foreground/5 rounded-full" />
        </motion.div>

        {/* Floating Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-h2f-gold-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-h2f-blue-500/20 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(45, 93%, 58%) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
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
            className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-4"
          >
            Future Plans
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Where We're <span className="text-gradient-gold">Headed</span>
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
            Our roadmap for the future is ambitious. Here's what we're working towards.
          </p>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="h-full p-6 lg:p-8 rounded-3xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:border-h2f-gold-500/30 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Number Badge */}
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 0.1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="absolute top-4 right-4 text-6xl font-bold text-primary-foreground pointer-events-none"
                >
                  {plan.number}
                </motion.span>

                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-14 h-14 rounded-2xl gradient-gold flex items-center justify-center mb-5 shadow-gold group-hover:scale-110 transition-transform duration-300"
                >
                  <plan.icon className="w-7 h-7 text-h2f-blue-900" />
                </motion.div>
                <h3 className="text-xl font-bold text-primary-foreground mb-3">
                  {plan.title}
                </h3>
                <p className="text-primary-foreground/70 leading-relaxed">
                  {plan.description}
                </p>

                {/* Progress indicator */}
                <motion.div
                  className="mt-5 h-1 bg-primary-foreground/10 rounded-full overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <motion.div
                    className="h-full gradient-gold"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${25 + index * 15}%` } : {}}
                    transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
