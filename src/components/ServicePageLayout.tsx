import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Check, ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import heroServices from "@/assets/hero-services.jpg";
import { useQuoteModal } from "@/components/QuoteModal";


interface ServicePageProps {
  title: string;
  subtitle: string;
  intro: string;
  sections: { heading: string; content: string | string[] }[];
  benefits?: { heading: string; items: string[] };
}

const ServicePage = ({ title, subtitle, intro, sections, benefits }: ServicePageProps) => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-black">
          <img
            src={heroServices}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500"
            onLoad={(e) => { (e.target as HTMLImageElement).style.opacity = '1'; }}
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-32 relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider">{subtitle}</span>
              <h1 className="font-heading text-4xl lg:text-6xl font-bold text-primary-foreground mt-3">{title}</h1>
              <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto mt-6 leading-relaxed">{intro}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <a
                   href="tel:+18445201313"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-secondary border border-secondary hover:bg-secondary/10 transition-colors"
                  style={{ borderRadius: "10px" }}
                >
                  <Phone className="w-5 h-5" />
                  (844) 520-1313
                </a>
                <button
                  onClick={openQuoteModal}
                  className="px-8 py-3 font-semibold hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#f59e0b", color: "#fff", borderRadius: "10px" }}
                >
                  Get Free Quote
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            {sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="mb-12"
              >
                <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">{section.heading}</h2>
                {Array.isArray(section.content) ? (
                  <ul className="space-y-3">
                    {section.content.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-muted-foreground">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                )}
              </motion.div>
            ))}

            {benefits && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl p-8 lg:p-10 border border-secondary/30"
                style={{ backgroundColor: "#0f172a" }}
              >
                <h2 className="font-heading text-2xl lg:text-3xl font-bold text-primary-foreground mb-6">{benefits.heading}</h2>
                <ul className="space-y-4">
                  {benefits.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-primary-foreground/80">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-8 text-center">Explore Our Other Services</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "AC Repair", href: "/services/ac-repair" },
                { label: "AC Installation", href: "/services/ac-installation" },
                { label: "AC Maintenance", href: "/services/ac-maintenance" },
                { label: "Duct Cleaning", href: "/services/duct-cleaning" },
              ].map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-secondary/30 text-foreground font-semibold hover:bg-secondary/10 transition-colors text-center"
                >
                  {s.label} <ArrowRight className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 lg:py-20 border-t border-border">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-secondary" />
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Areas We Serve</span>
            </div>
            <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-6">Proudly Serving Manatee County</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              We provide expert HVAC services throughout the greater Palmetto and Bradenton area. <a href="/about" className="text-secondary hover:underline">Learn more about our team</a>.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "Palmetto, FL", href: "/areas/palmetto" },
                { label: "Bradenton, FL", href: "/areas/bradenton" },
                { label: "Memphis, FL", href: "/areas/memphis" },
                { label: "Ellenton, FL", href: "/areas/ellenton" },
                { label: "Palma Sola, FL", href: "/areas/palma-sola" },
              ].map((area) => (
                <a
                  key={area.href}
                  href={area.href}
                  className="px-4 py-2 rounded-full border border-secondary/30 text-sm font-medium text-foreground hover:bg-secondary/10 transition-colors"
                >
                  {area.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 relative overflow-hidden" style={{ backgroundColor: "#0f172a" }}>
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">Ready to Get Started?</h2>
            <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
              <a href="/contact" className="text-secondary hover:underline">Contact Emmons Air</a> today for a free consultation and experience the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+18445201313"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-secondary border border-secondary hover:bg-secondary/10 transition-colors"
                style={{ borderRadius: "10px" }}
              >
                <Phone className="w-5 h-5" />
                (844) 520-1313
              </a>
              <button
                onClick={openQuoteModal}
                className="px-8 py-3 font-semibold hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#f59e0b", color: "#fff", borderRadius: "10px" }}
              >
                Get Free Quote
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePage;
