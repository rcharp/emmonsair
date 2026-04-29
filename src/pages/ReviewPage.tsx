import { useState } from "react";
import { ExternalLink, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import icon from "@/assets/icon.png";
import useSEO from "@/hooks/useSEO";

const WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/7IdpxAjxnevjhuMotlbS/webhook-trigger/b880cd03-0b9f-4480-b707-4aa5683173fc";

const GMB_LINK = "https://share.google/6U7ypypwc22rQHvBZ";

const ratingOptions = [
  { stars: 5, label: "Excellent" },
  { stars: 4, label: "Great" },
  { stars: 3, label: "Okay" },
  { stars: 2, label: "Poor" },
  { stars: 1, label: "Terrible" },
];

const ReviewPage = () => {
  useSEO({
    title: "Leave a Review | Emmons Air | Palmetto FL",
    description:
      "Share your experience with Emmons Air. Your feedback helps us improve and helps others find quality HVAC service in Palmetto & Bradenton.",
    canonical: "https://emmonsair.com/review",
  });

  const [step, setStep] = useState<"rating" | "form" | "thanks">("rating");
  const [selectedRating, setSelectedRating] = useState(0);
  const [showGoogleDialog, setShowGoogleDialog] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleRatingClick = (stars: number) => {
    setSelectedRating(stars);
    setShowGoogleDialog(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    setIsSubmitting(true);
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim(),
          rating: selectedRating,
        }),
      });
      setStep("thanks");
    } catch {
      toast.error("Something went wrong. Please try again or call us.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-xl">
          {/* Rating Step */}
          <div
            className={`transition-all duration-500 ${
              step === "rating"
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 hidden"
            }`}
          >
            <div className="text-center mb-10">
              <img src={icon} alt="Emmons Air" className="w-16 h-16 mx-auto mb-4" />
              <h1 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
                How was your experience?
              </h1>
              <p className="text-muted-foreground mt-2">
                We'd love to hear your feedback
              </p>
            </div>
            <div className="space-y-3">
              {ratingOptions.map(({ stars, label }) => (
                <button
                  key={stars}
                  onClick={() => handleRatingClick(stars)}
                  className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all duration-200 cursor-pointer group"
                >
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-6 h-6 ${
                          i < stars
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-none text-muted-foreground/30"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors font-medium">
                    {label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Google Review Dialog */}
          {showGoogleDialog && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
              <div className="bg-card rounded-2xl border border-border shadow-2xl p-8 max-w-md w-full animate-in fade-in zoom-in-95 duration-200">
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  Thank you for your {selectedRating}-star rating! ⭐
                </h3>
                <p className="text-muted-foreground mb-6">
                  We're so glad you had a great experience! You'll be redirected to Google to leave your review — it only takes a moment and means the world to us.
                </p>
                <div className="flex items-center gap-3 justify-end">
                  <Button
                    variant="outline"
                    onClick={() => setShowGoogleDialog(false)}
                    className="rounded-xl"
                  >
                    Cancel
                  </Button>
                  <a
                    href={GMB_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="rounded-xl font-bold gap-2">
                      Leave a Google Review <ExternalLink className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Feedback Form Step */}
          <div
            className={`transition-all duration-500 ${
              step === "form"
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 hidden"
            }`}
          >
            <div className="text-center mb-8">
              <img src={icon} alt="Emmons Air" className="w-16 h-16 mx-auto mb-4" />
              <h2 className="font-heading text-3xl font-bold text-foreground">
                Tell us more
              </h2>
              <p className="text-muted-foreground mt-2">
                We're sorry to hear that. Please let us know how we can improve.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-semibold text-foreground">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  maxLength={100}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="rounded-xl bg-muted/50 border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="font-semibold text-foreground">
                  Phone
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  inputMode="numeric"
                  placeholder="Your phone number"
                  maxLength={10}
                  value={formData.phone}
                  onChange={(e) => {
                    const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
                    setFormData({ ...formData, phone: digits });
                  }}
                  className="rounded-xl bg-muted/50 border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="font-semibold text-foreground">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us what happened..."
                  maxLength={1000}
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="rounded-xl bg-muted/50 border-border resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl py-6 text-lg font-bold"
              >
                {isSubmitting ? "Sending..." : "Submit Feedback"}
              </Button>
              <button
                type="button"
                onClick={() => setStep("rating")}
                className="w-full text-center text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                ← Back to ratings
              </button>
            </form>
          </div>

          {/* Thank You Step */}
          <div
            className={`transition-all duration-500 ${
              step === "thanks"
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 hidden"
            }`}
          >
            <div className="text-center py-16">
              <img src={icon} alt="Emmons Air" className="w-16 h-16 mx-auto mb-6" />
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                Thank You!
              </h2>
              <p className="text-muted-foreground text-lg">
                We appreciate your feedback and will use it to improve our service.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReviewPage;
