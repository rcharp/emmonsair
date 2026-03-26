import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Percent } from "lucide-react";
import icon from "@/assets/icon.png";
import useSEO from "@/hooks/useSEO";

const WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/7IdpxAjxnevjhuMotlbS/webhook-trigger/d7a3c6e2-130d-4560-811a-b910c34eb037";

const GetYourDiscountPage = () => {
  useSEO({
    title: "Get Your Discount | Emmons Air",
    description:
      "Claim your exclusive HVAC discount from Emmons Air. Fill out the form and we'll get back to you with your savings!",
    canonical: "https://emmonsair.com/get-your-discount",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    summary: "",
    consent: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.summary.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (formData.phone.length < 10) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }
    if (!formData.consent) {
      toast.error("Please accept the terms & conditions.");
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: formData.fullName.trim(),
          phone: formData.phone.trim(),
          summary: formData.summary.trim(),
          consent: formData.consent,
        }),
      });

      setIsSubmitted(true);
    } catch {
      toast.error("Something went wrong. Please try again or call us.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden max-w-[100vw]">
      <Header />
      <main className="pt-28 pb-20 px-4">
        <div className="max-w-lg mx-auto">
          {isSubmitted ? (
            <div className="rounded-2xl border-2 border-secondary bg-primary p-10 shadow-2xl flex flex-col items-center justify-center text-center min-h-[400px]">
              <Percent className="w-14 h-14 text-accent mb-4" />
              <h1 className="font-heading font-bold text-primary-foreground text-3xl mb-4">
                YOU'RE IN!
              </h1>
              <p className="text-primary-foreground/80 text-lg">
                We got your request and will be in touch shortly with your exclusive discount!
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border-2 border-secondary bg-primary p-8 space-y-6 shadow-2xl"
            >
              {/* Header */}
              <div className="text-center space-y-2 pb-2">
                <img src={icon} alt="Emmons Air" className="w-16 h-16 mx-auto" />
                <h1 className="font-heading font-bold text-primary-foreground text-2xl">
                  Emmons Air
                </h1>
                <p className="text-secondary font-semibold text-lg">Get Your Discount!</p>
              </div>

              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-primary-foreground font-semibold">
                  Full Name <span className="text-secondary">*</span>
                </Label>
                <Input
                  id="fullName"
                  placeholder="John Smith"
                  required
                  maxLength={100}
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-primary-foreground font-semibold">
                  Phone <span className="text-secondary">*</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  inputMode="numeric"
                  placeholder="(888) 123-4567"
                  maxLength={10}
                  value={formData.phone}
                  onChange={(e) => {
                    const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
                    setFormData({ ...formData, phone: digits });
                  }}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
              </div>

              {/* Summary */}
              <div className="space-y-2">
                <Label htmlFor="summary" className="text-primary-foreground font-semibold">
                  Short summary of the work you need! <span className="text-secondary">*</span>
                </Label>
                <Textarea
                  id="summary"
                  placeholder="Your message goes straight to my phone, I'll get back to you as soon as I'm available"
                  required
                  maxLength={1000}
                  rows={4}
                  value={formData.summary}
                  onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 resize-none"
                />
              </div>

              {/* Single Consent */}
              <div className="flex items-start gap-3">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, consent: checked === true })
                  }
                  className="mt-1 border-primary-foreground/30 data-[state=checked]:bg-secondary data-[state=checked]:border-secondary"
                />
                <Label
                  htmlFor="consent"
                  className="text-primary-foreground/70 text-xs leading-relaxed font-normal cursor-pointer"
                >
                  I agree to the terms &amp; conditions provided by the company. By providing my
                  phone number, I agree to receive text messages from the business.
                </Label>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full font-bold text-lg py-6 bg-accent text-accent-foreground hover:bg-accent/90 transition-opacity uppercase tracking-wide"
                style={{ borderRadius: "10px" }}
              >
                <Percent className="w-5 h-5 mr-1" />
                {isSubmitting ? "Sending..." : "GET MY DISCOUNT"}
              </Button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GetYourDiscountPage;
