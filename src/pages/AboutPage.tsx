import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Check, Phone } from "lucide-react";
import { useQuoteModal } from "@/components/QuoteModal";
import familyImg from "@/assets/gallery/emmons-family.png";
import ownerImg from "@/assets/gallery/daikin-rooftop.png";
import heroServices from "@/assets/hero-services.jpg";

const AboutPage = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroServices})` }}
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-32 relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Who We Are</span>
              <h1 className="font-heading text-4xl lg:text-6xl font-bold text-primary-foreground mt-3">About Emmons Air</h1>
              <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto mt-6 leading-relaxed">
                Family-owned, community-driven HVAC services you can count on.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Meet David */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img
                  src={familyImg}
                  alt="David Emmons and family"
                  className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Meet the Owner</span>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">Hey, I'm David!</h2>
                <p className="text-muted-foreground leading-relaxed">
                  I'm David Emmons, a licensed Air Conditioning contractor with over 12 years of experience serving the Palmetto, Bradenton, and Sarasota areas. As a family-owned and operated business, I take pride in treating every home like my own.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My commitment is simple: honest work, fair prices, and making sure you're completely satisfied. When you call Emmons Air, you're not just getting a technician — you're getting a neighbor who cares about your comfort.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: "#0f172a" }}>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6 order-2 lg:order-1"
              >
                <span className="text-sm font-semibold text-secondary uppercase tracking-wider">What We Do</span>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary-foreground">
                  Top-Quality Products & Exceptional Service
                </h2>
                <p className="text-primary-foreground/70 leading-relaxed">
                  At Emmons Air, we only use industry-leading products and materials. Our professional HVAC contractors are committed to providing our customers with fast, reliable and affordable services.
                </p>
                <ul className="space-y-3">
                  {[
                    "Licensed & insured technicians",
                    "Over 12 years of industry experience",
                    "Family-owned and locally operated",
                    "24/7 emergency service available",
                    "Upfront pricing with no hidden fees",
                    "Satisfaction guaranteed on every job",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-primary-foreground/80">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <img
                  src={ownerImg}
                  alt="David Emmons, HVAC professional"
                  className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
