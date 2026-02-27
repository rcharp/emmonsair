import { MapPin, Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="py-20 lg:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <span className="text-base font-semibold text-primary uppercase tracking-wider">About Us</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground">
            Family Owned. Locally Operated.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We've proudly served the Sarasota and Manatee areas for over 12 years. As a locally owned and operated family business, we treat every home like it's our own. No corporate runaround. No strangers at your door. Just honest service from people who live and work right here in your community.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            When you choose Emmons Air, you're getting more than just HVAC service—you're getting a partner who's invested in your comfort and satisfaction. We answer our phones, show up on time, and stand behind every job we complete.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Address</div>
                <div className="text-base font-semibold text-foreground">531 46th St W, Palmetto, FL 34221</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Phone</div>
                <a href="tel:+18445201313" className="text-base font-semibold text-foreground hover:text-primary transition-colors">
                  (844) 520-1313
                </a>
              </div>
           </div>
          </div>
          <a href="/about" className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all mt-2">
            Learn More About Us <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3537.235860983608!2d-82.57248938797551!3d27.555189576171195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c3197718acd711%3A0x5d1b29104c06ff28!2sEmmons!5e0!3m2!1sen!2sus!4v1770394947689!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0, maxWidth: "100%" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="Emmons Air Location"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
