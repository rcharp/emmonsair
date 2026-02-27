import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import QuoteForm from "@/components/QuoteForm";
import heroServices from "@/assets/hero-services.jpg";
import useSEO from "@/hooks/useSEO";

const ContactPage = () => {
  useSEO({
    title: "Contact Emmons Air | Get a Free Quote | (844) 520-1313",
    description: "Contact Emmons Air for HVAC service in Palmetto & Bradenton. Get a free quote, schedule service, or call (844) 520-1313. Open 24/7.",
    canonical: "https://emmonsair.com/contact",
  });

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
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Get In Touch</span>
              <h1 className="font-heading text-4xl lg:text-6xl font-bold text-primary-foreground mt-3">Contact Us</h1>
              <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto mt-6 leading-relaxed">
                Ready to schedule a service or have a question? We're here to help.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    Let's Talk
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Whether you need an <a href="/services/ac-repair" className="text-secondary hover:underline">emergency repair</a>, a <a href="/services/ac-installation" className="text-secondary hover:underline">new installation</a>, or just have questions about your HVAC system — we're here for you. We also offer <a href="/services/ac-maintenance" className="text-secondary hover:underline">routine maintenance</a> and <a href="/services/duct-cleaning" className="text-secondary hover:underline">duct cleaning</a>. Reach out and we'll get back to you as quickly as possible.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">Phone</h3>
                      <a href="tel:+18445201313" className="text-muted-foreground hover:text-secondary transition-colors">
                        (844) 520-1313
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">Email</h3>
                      <a href="mailto:emmonsairllc@gmail.com" className="text-muted-foreground hover:text-secondary transition-colors">
                        emmonsairllc@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">Address</h3>
                      <p className="text-muted-foreground">531 46th St W, Palmetto, FL 34221</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">Hours</h3>
                      <p className="text-muted-foreground">Open 24 hours — we're always here when you need us!</p>
                    </div>
                  </div>
                </div>

                {/* Map embed */}
                <div className="rounded-2xl overflow-hidden border border-border shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3537.235860983608!2d-82.57248938797551!3d27.555189576171195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c3197718acd711%3A0x5d1b29104c06ff28!2sEmmons!5e0!3m2!1sen!2sus!4v1770394947689!5m2!1sen!2sus"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Emmons Air location"
                  />
                </div>
              </motion.div>

              {/* Quote Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <QuoteForm />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
