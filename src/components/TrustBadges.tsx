import { Shield, Clock, Phone, Star, ThumbsUp } from "lucide-react";
import { motion } from "framer-motion";

const badges = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Clock, label: "12+ Years of Experience" },
  { icon: Phone, label: "24/7 Availability" },
  { icon: Star, label: "4.8-Star Google Rating" },
  { icon: ThumbsUp, label: "Satisfaction Guaranteed" },
];

const TrustBadges = () => (
  <section className="py-12 bg-card border-y border-border">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="flex justify-center gap-4 sm:gap-6 lg:gap-16">
        {badges.map((badge, i) => (
          <motion.div
            key={badge.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-3"
          >
            <badge.icon className="w-5 h-5 text-secondary" />
            <span className="text-sm font-semibold text-foreground whitespace-nowrap">{badge.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBadges;
