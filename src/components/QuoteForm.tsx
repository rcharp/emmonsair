import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import icon from "@/assets/icon.png";

const WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/7IdpxAjxnevjhuMotlbS/webhook-trigger/15fdedb0-33ba-4fd1-97d7-bbaaf08d87ed";

interface QuoteFormProps {
  /** Show the icon + heading at the top */
  showHeader?: boolean;
  /** Extra className on the outer wrapper */
  className?: string;
  /** Override inline styles (bg, border, opacity, etc.) */
  style?: React.CSSProperties;
}

const QuoteForm = ({ showHeader = true, className = "", style }: QuoteFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    <form
      onSubmit={handleSubmit}
      className={`rounded-2xl border-2 p-8 space-y-6 shadow-2xl ${className}`}
      style={{
        backgroundColor: "#0f172a",
        borderColor: "#3b82f6",
        ...style,
      }}
    >
      {showHeader && (
        <div className="text-center space-y-3 pb-2">
          <img src={icon} alt="Emmons Air" className="w-16 h-16 mx-auto" />
          <h2 className="font-heading text-2xl font-bold text-white">
            Get a Free Quote
          </h2>
        </div>
      )}

      {/* Full Name */}
      <div className="space-y-2">
        <Label htmlFor="fullName" className="text-white font-semibold">
          Full Name <span className="text-secondary">*</span>
        </Label>
        <Input
          id="fullName"
          placeholder="John Smith"
          required
          maxLength={100}
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
        />
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <Label htmlFor="phone" className="text-white font-semibold">
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
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
        />
      </div>

      {/* What do you need help with? */}
      <div className="space-y-2">
        <Label htmlFor="helpWith" className="text-white font-semibold">
          What do you need help with? <span className="text-secondary">*</span>
        </Label>
        <Textarea
          id="helpWith"
          placeholder="Your message goes straight to my phone, so I'll be able to get back to you ASAP!"
          required
          maxLength={1000}
          rows={4}
          value={formData.helpWith}
          onChange={(e) => setFormData({ ...formData, helpWith: e.target.value })}
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 resize-none"
        />
      </div>

      {/* Marketing Consent */}
      <div className="flex items-start gap-3">
        <Checkbox
          id="consentMarketing"
          checked={formData.consentMarketing}
          onCheckedChange={(checked) =>
            setFormData({ ...formData, consentMarketing: checked === true })
          }
          className="mt-1 border-white/30 data-[state=checked]:bg-secondary data-[state=checked]:border-secondary"
        />
        <Label
          htmlFor="consentMarketing"
          className="text-white/70 text-xs leading-relaxed font-normal cursor-pointer"
        >
          I consent to receive marketing text messages from Emmons Air LLC at the
          phone number provided. Consent is not a condition of purchase. Message
          frequency may vary. Message &amp; data rates may apply. Text HELP for
          assistance, reply STOP to opt out.
        </Label>
      </div>

      {/* Non-Marketing Consent */}
      <div className="flex items-start gap-3">
        <Checkbox
          id="consentNonMarketing"
          checked={formData.consentNonMarketing}
          onCheckedChange={(checked) =>
            setFormData({ ...formData, consentNonMarketing: checked === true })
          }
          className="mt-1 border-white/30 data-[state=checked]:bg-secondary data-[state=checked]:border-secondary"
        />
        <Label
          htmlFor="consentNonMarketing"
          className="text-white/70 text-xs leading-relaxed font-normal cursor-pointer"
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
        className="w-full font-bold text-lg py-6 hover:opacity-90 transition-opacity"
        style={{ backgroundColor: "#f59e0b", color: "#fff", borderRadius: "10px" }}
      >
        {isSubmitting ? "Sending..." : "Get Free Quote"}
      </Button>
    </form>
  );
};

export default QuoteForm;
