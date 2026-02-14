import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import heroServices from "@/assets/hero-services.jpg";
import useSEO from "@/hooks/useSEO";
import icon from "@/assets/icon.png";

const WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/7IdpxAjxnevjhuMotlbS/webhook-trigger/15fdedb0-33ba-4fd1-97d7-bbaaf08d87ed";

const TestQuotePage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    helpWith: "",
    consentMarketing: false,
    consentNonMarketing: false,
  });

  useSEO({
    title: "Get A Quote | Emmons Air | (941) 258-4006",
    description:
      "Request a free HVAC quote from Emmons Air. AC repair, installation, and maintenance in Palmetto & Bradenton FL.",
    canonical: "https://emmonsair.com/testquote",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.helpWith.trim()) {
      toast.error("Please fill in all required fields.");
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

      toast.success("Quote request sent! We'll be in touch soon.");
      setFormData({
        fullName: "",
        phone: "",
        helpWith: "",
        consentMarketing: false,
        consentNonMarketing: false,
      });
    } catch {
      toast.error("Something went wrong. Please try again or call us.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            onLoad={(e) => {
              (e.target as HTMLImageElement).style.opacity = "1";
            }}
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-32 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
                Free Estimate
              </span>
              <h1 className="font-heading text-4xl lg:text-6xl font-bold text-primary-foreground mt-3">
                Get A Free Quote
              </h1>
              <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto mt-6 leading-relaxed">
                Fill out the form below and we'll get back to you with a free
                quote as fast as possible.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Form */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8 max-w-lg">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border-2 p-8 space-y-6 shadow-2xl"
              style={{ backgroundColor: "#0f172a", borderColor: "#3b82f6" }}
            >
              {/* Header */}
              <div className="text-center space-y-3 pb-2">
                <img src={icon} alt="Emmons Air" className="w-16 h-16 mx-auto" />
                <h2 className="font-heading text-2xl font-bold text-white">Get a Free Quote</h2>
              </div>

              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-white font-semibold">
                  Full Name <span className="text-secondary">*</span>
                </Label>
                <Input
                  id="fullName"
                  placeholder="Full Name"
                  required
                  maxLength={100}
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white font-semibold">
                  Phone
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Phone"
                  maxLength={20}
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>

              {/* What do you need help with? */}
              <div className="space-y-2">
                <Label htmlFor="helpWith" className="text-white font-semibold">
                  What do you need help with?{" "}
                  <span className="text-secondary">*</span>
                </Label>
                <Textarea
                  id="helpWith"
                  placeholder="What do you need help with?"
                  required
                  maxLength={1000}
                  rows={4}
                  value={formData.helpWith}
                  onChange={(e) =>
                    setFormData({ ...formData, helpWith: e.target.value })
                  }
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 resize-none"
                />
              </div>

              {/* Marketing Consent */}
              <div className="flex items-start gap-3">
                <Checkbox
                  id="consentMarketing"
                  checked={formData.consentMarketing}
                  onCheckedChange={(checked) =>
                    setFormData({
                      ...formData,
                      consentMarketing: checked === true,
                    })
                  }
                  className="mt-1 border-white/30 data-[state=checked]:bg-secondary data-[state=checked]:border-secondary"
                />
                <Label
                  htmlFor="consentMarketing"
                  className="text-white/70 text-xs leading-relaxed font-normal cursor-pointer"
                >
                  I consent to receive marketing text messages from Emmons Air
                  LLC at the phone number provided. Consent is not a condition
                  of purchase. Message frequency may vary. Message &amp; data
                  rates may apply. Text HELP for assistance, reply STOP to opt
                  out.
                </Label>
              </div>

              {/* Non-Marketing Consent */}
              <div className="flex items-start gap-3">
                <Checkbox
                  id="consentNonMarketing"
                  checked={formData.consentNonMarketing}
                  onCheckedChange={(checked) =>
                    setFormData({
                      ...formData,
                      consentNonMarketing: checked === true,
                    })
                  }
                  className="mt-1 border-white/30 data-[state=checked]:bg-secondary data-[state=checked]:border-secondary"
                />
                <Label
                  htmlFor="consentNonMarketing"
                  className="text-white/70 text-xs leading-relaxed font-normal cursor-pointer"
                >
                  I consent to receive non-marketing text messages from Emmons
                  Air LLC regarding appointment confirmations and reminders,
                  customer support updates, and service-related follow-ups at
                  the phone number provided. Consent is not a condition of
                  purchase. Message frequency may vary. Message &amp; data rates
                  may apply. Text HELP for assistance, reply STOP to opt out.
                </Label>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-lg py-6 rounded-xl"
              >
                {isSubmitting ? "Sending..." : "Get Free Quote"}
              </Button>
            </motion.form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TestQuotePage;
