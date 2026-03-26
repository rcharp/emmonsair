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
    helpWith: "",
    consentMarketing: false,
    consentNonMarketing: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.helpWith.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (formData.phone.length < 10) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }
    if (!formData.consentMarketing || !formData.consentNonMarketing) {
      toast.error("Please accept both consent checkboxes.");
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
          help_with: formData.helpWith.trim(),
          consent_marketing: formData.consentMarketing,
          consent_non_marketing: formData.consentNonMarketing,
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
              <div className="text-center space-y-3 pb-2">
                <Percent className="w-14 h-14 text-accent mx-auto" />
                <h1 className="font-heading font-bold text-primary-foreground text-2xl">
                  Get Your Discount
                </h1>
                <p className="text-primary-foreground/70 text-sm">
                  Fill out the form below and we'll send you an exclusive offer!
                </p>
              </div>

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

              <div className="space-y-2">
                <Label htmlFor="helpWith" className="text-primary-foreground font-semibold">
                  What do you need help with? <span className="text-secondary">*</span>
                </Label>
                <Textarea
                  id="helpWith"
                  placeholder="Tell us about your HVAC needs and we'll find the best discount for you!"
                  required
                  maxLength={1000}
                  rows={4}
                  value={formData.helpWith}
                  onChange={(e) => setFormData({ ...formData, helpWith: e.target.value })}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 resize-none"
                />
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="consentMarketing"
                  checked={formData.consentMarketing}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, consentMarketing: checked === true })
                  }
                  className="mt-1 border-primary-foreground/30 data-[state=checked]:bg-secondary data-[state=checked]:border-secondary"
                />
                <Label
                  htmlFor="consentMarketing"
                  className="text-primary-foreground/70 text-xs leading-relaxed font-normal cursor-pointer"
                >
                  I consent to receive marketing text messages from Emmons Air LLC at the
                  phone number provided. Consent is not a condition of purchase. Message
                  frequency may vary. Message &amp; data rates may apply. Text HELP for
                  assistance, reply STOP to opt out.
                </Label>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="consentNonMarketing"
                  checked={formData.consentNonMarketing}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, consentNonMarketing: checked === true })
                  }
                  className="mt-1 border-primary-foreground/30 data-[state=checked]:bg-secondary data-[state=checked]:border-secondary"
                />
                <Label
                  htmlFor="consentNonMarketing"
                  className="text-primary-foreground/70 text-xs leading-relaxed font-normal cursor-pointer"
                >
                  I consent to receive non-marketing text messages from Emmons Air LLC
                  regarding appointment confirmations and reminders, customer support
                  updates, and service-related follow-ups at the phone number provided.
                  Consent is not a condition of purchase. Message frequency may vary.
                  Message &amp; data rates may apply. Text HELP for assistance, reply STOP
                  to opt out.
                </Label>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full font-bold text-lg py-6 bg-accent text-accent-foreground hover:bg-accent/90 transition-opacity"
                style={{ borderRadius: "10px" }}
              >
                {isSubmitting ? "Sending..." : "Claim My Discount"}
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
