import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Rocket, Users, TrendingUp } from "lucide-react";

const plans = [
  {
    icon: Globe,
    title: "Global Expansion",
    description:
      "Expanding our presence across continents to serve clients worldwide with local expertise and global standards.",
  },
  {
    icon: Rocket,
    title: "Proprietary AI Platforms",
    description:
      "Developing cutting-edge AI platforms that will revolutionize how businesses interact with technology.",
  },
  {
    icon: Users,
    title: "Educational Partnerships",
    description:
      "Collaborating with universities and institutions to nurture the next generation of tech innovators.",
  },
  {
    icon: TrendingUp,
    title: "Enhanced Cloud Capabilities",
    description:
      "Building robust cloud infrastructure to deliver faster, more reliable, and scalable solutions.",
  },
];

export const FuturePlansSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/2 w-full h-full border border-primary-foreground/5 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full border border-primary-foreground/5 rounded-full"
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-4">
            Future Plans
          </span>
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
                className="h-full p-6 lg:p-8 rounded-3xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:border-h2f-gold-500/30 transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
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
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
