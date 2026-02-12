import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const GOOGLE_REVIEW_URL = "https://share.google/W7fsLxWgOy8fWOhTQ";

const ReviewPage = () => {
  const [hoveredStar, setHoveredStar] = useState(0);
  const [selectedStar, setSelectedStar] = useState(0);
  const [showLowMessage, setShowLowMessage] = useState(false);

  const handleStarClick = (rating: number) => {
    setSelectedStar(rating);
    if (rating >= 4) {
      window.open(GOOGLE_REVIEW_URL, "_blank", "noopener,noreferrer");
    } else {
      setShowLowMessage(true);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">We Appreciate You</span>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mt-3">
              Leave Us A Review
            </h1>
            <p className="text-muted-foreground mt-4">
              Your feedback helps us improve and helps others find quality HVAC service.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-2xl border border-border card-elevated p-10 text-center"
          >
            <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
              How was your experience?
            </h2>
            <p className="text-muted-foreground mb-8">Tap a star to rate us</p>

            <div className="flex justify-center gap-3 mb-8">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onMouseEnter={() => setHoveredStar(star)}
                  onMouseLeave={() => setHoveredStar(0)}
                  onClick={() => handleStarClick(star)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    className={`w-12 h-12 transition-colors ${
                      star <= (hoveredStar || selectedStar)
                        ? "fill-accent text-accent"
                        : "text-border"
                    }`}
                  />
                </button>
              ))}
            </div>

            {selectedStar >= 4 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-muted-foreground"
              >
                Thank you! You're being redirected to Google Reviews. If the page didn't open,{" "}
                <a
                  href={GOOGLE_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary font-semibold hover:underline"
                >
                  click here
                </a>.
              </motion.p>
            )}

            {showLowMessage && selectedStar < 4 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <p className="text-foreground font-semibold">
                  We're sorry to hear that!
                </p>
                <p className="text-muted-foreground">
                  We'd love to make things right. Please give us a call at{" "}
                  <a href="tel:+19412584006" className="text-secondary font-semibold hover:underline">
                    (941) 258-4006
                  </a>{" "}
                  so we can address your concerns directly.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReviewPage;
