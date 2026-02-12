import { useEffect } from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { useQuoteModal } from "./QuoteModal";
import heroBg from "@/assets/hero-bg.png";
import reviewerImg1 from "@/assets/reviewers/reviewer-1.jpg";
import reviewerImg2 from "@/assets/reviewers/reviewer-2.jpg";
import reviewerImg3 from "@/assets/reviewers/reviewer-3.jpg";
import reviewerImg4 from "@/assets/reviewers/reviewer-4.jpg";

const HeroSection = () => {
  const { openQuoteModal } = useQuoteModal();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://api.juniesystems.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="relative overflow-hidden max-w-[100vw]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-8 lg:pt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-heading text-4xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-primary-foreground text-center lg:text-left">
                Comfort You Can{" "}
                <span className="text-secondary-color">Count On.</span>
                <br />
                Service You Can{" "}
                <span className="text-secondary-color">Trust.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-primary-foreground/70 max-w-lg leading-relaxed break-words"
            >
              When your AC breaks down in July or your furnace fails in January, you need someone who shows up—fast. We're your neighbors, and we treat your home like our own.
              <br /><br />
              Local to Manatee County since 2012, Emmons Air has been providing high-quality heating and AC installation and repair services for hundreds of families and businesses in the Manatee, Sarasota, and surrounding areas.
            </motion.p>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <div className="flex -space-x-2">
                {[reviewerImg1, reviewerImg2, reviewerImg3, reviewerImg4].map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="Happy customer"
                    className="w-9 h-9 rounded-full border-2 border-primary object-cover"
                  />
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-base text-primary-foreground/70">Trusted by 100+ happy customers!</span>
              </div>
            </motion.div>

            {/* Review badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-6 pt-2"
            >
              <div className="flex items-center gap-2">
                <span className="text-base font-semibold text-primary-foreground">Google</span>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base font-semibold text-primary-foreground">Facebook</span>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - Quote Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            id="quote-form"
            className="rounded-2xl overflow-hidden shadow-2xl border-2"
            style={{ backgroundColor: "rgba(15, 23, 42, 0.6)", borderColor: "#3b82f6", minHeight: "883px" }}
          >
            <iframe
              src="https://api.juniesystems.com/widget/form/P2loR2dW6LgPnGhKf4Px"
              className="quote-iframe-fade"
              style={{ width: "100%", height: "883px", border: "none", borderRadius: "10px", display: "block" }}
              id="inline-P2loR2dW6LgPnGhKf4Px"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Get A Quote Form"
              data-height="883"
              data-layout-iframe-id="inline-P2loR2dW6LgPnGhKf4Px"
              data-form-id="P2loR2dW6LgPnGhKf4Px"
              title="Get A Quote Form"
              onLoad={(e) => { (e.target as HTMLIFrameElement).classList.add('loaded'); }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
