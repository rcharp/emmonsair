import { Phone, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo.png";
import icon from "@/assets/icon.png";

const Footer = () => (
  <footer className="bg-foreground text-card py-16">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <img src={logo} alt="Emmons Air" className="w-[300px] h-auto" />
          <div className="flex items-center gap-4 pt-2">
            <a href="https://www.facebook.com/p/Emmons-Air-LLC-61551350440167/" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity text-sm font-medium">
              Facebook
            </a>
            <a href="https://share.google/W7fsLxWgOy8fWOhTQ" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity text-sm font-medium">
              Google
            </a>
          </div>
        </div>

        {/* Business */}
        <div>
          <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 opacity-60">Business</h4>
          <nav className="space-y-3">
            <a href="/" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">Home</a>
            <a href="/#about" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">About Us</a>
            <a href="/#contact" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">Contact</a>
            <a href="/review" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">Review Us</a>
            <a href="/gallery" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">Gallery</a>
          </nav>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 opacity-60">Services</h4>
          <nav className="space-y-3">
            <a href="#services" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">AC Repair</a>
            <a href="#services" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">AC Installation</a>
            <a href="#services" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">AC Maintenance</a>
            <a href="#services" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">Duct Cleaning</a>
          </nav>
        </div>

        {/* Service Areas */}
        <div>
          <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 opacity-60">Service Areas</h4>
          <nav className="space-y-3">
            <a href="/areas/palmetto" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">Palmetto, FL</a>
            <a href="/areas/bradenton" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">Bradenton, FL</a>
            <a href="/areas/memphis" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">Memphis, FL</a>
            <a href="/areas/ellenton" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">Ellenton, FL</a>
            <a href="/areas/palma-sola" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">Palma Sola, FL</a>
          </nav>
        </div>

        {/* Info */}
        <div className="space-y-4">
          <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 opacity-60">Contact</h4>
          <div className="flex items-start gap-3">
            <Phone className="w-4 h-4 mt-0.5 opacity-60" />
            <a href="tel:+19412584006" className="text-sm opacity-80 hover:opacity-100 transition-opacity">(941) 258-4006</a>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 mt-0.5 opacity-60" />
            <span className="text-sm opacity-80">531 46th St W, Palmetto, FL 34221</span>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 mt-0.5 opacity-60" />
            <span className="text-sm opacity-80">Open 24 hours!</span>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-card/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm opacity-60">
          © 2026 Emmons Air | Marketing by{" "}
          <a href="https://juniesystems.com/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-100">
            Junie Systems
          </a>
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Terms & Conditions</a>
          <span className="opacity-30">|</span>
          <a href="#" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Privacy Policy</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
