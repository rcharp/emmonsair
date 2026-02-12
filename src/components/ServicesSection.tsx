import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import heroRepair from "@/assets/service-repair-stock.jpg";
import heroInstall from "@/assets/service-install-stock.jpg";
import serviceMaintenance from "@/assets/service-maintenance-stock.jpg";
import serviceDuct from "@/assets/service-duct-stock.jpg";

const services = [
  {
    image: heroRepair,
    title: "AC Repair",
    href: "/services/ac-repair",
    features: [
      "Fast response for quick repairs",
      "Expert diagnosis of any issue",
      "Upfront pricing—no surprises",
      "Same-day emergency service available",
    ],
  },
  {
    image: heroInstall,
    title: "AC Installation",
    href: "/services/ac-installation",
    features: [
      "Residential AC Installation",
      "Energy-efficient systems to reduce costs",
      "Proper sizing for optimal performance",
      "Replacements and Upgrades",
    ],
  },
  {
    image: serviceMaintenance,
    title: "AC Maintenance",
    href: "/services/ac-maintenance",
    features: [
      "Prevent costly breakdowns",
      "Lower your utility bills",
      "Extend system lifespan",
      "Priority scheduling available",
    ],
  },
  {
    image: serviceDuct,
    title: "Duct Cleaning",
    href: "/services/duct-cleaning",
    features: [
      "Remove dust, allergens, and contaminants",
      "Improve airflow and efficiency",
      "Reduce allergy and respiratory issues",
      "Complete vent and ductwork cleaning",
    ],
  },
];

const ServicesSection = () => (
  <section id="services" className="py-20 lg:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-base font-semibold text-primary uppercase tracking-wider">What We Do</span>
        <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mt-3">
          Homeowners in Palmetto, Bradenton and Sarasota Trust Us
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Complete HVAC solutions for your home comfort needs.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl overflow-hidden card-elevated border border-secondary/30 group"
            style={{ backgroundColor: "#0f172a" }}
          >
            <a href={service.href} className="block aspect-[16/9] overflow-hidden cursor-pointer">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </a>
            <div className="p-8">
              <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-4">{service.title}</h3>
              <ul className="space-y-3 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-base text-primary-foreground/80">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-base font-semibold text-secondary hover:gap-3 transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
