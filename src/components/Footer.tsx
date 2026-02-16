import { Phone, MapPin, Clock, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";
import icon from "@/assets/icon.png";

const Footer = () => (
  <footer className="bg-foreground text-card py-16">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <img src={logo} alt="Emmons Air" className="w-full max-w-[300px] h-auto mx-auto md:mx-0" />
        </div>

        {/* Business */}
        <div>
          <h4 className="font-heading font-semibold text-base uppercase tracking-wider mb-4 opacity-60">Business</h4>
          <nav className="space-y-3">
            <a href="/" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Home</a>
            <a href="/about" className="block text-base opacity-80 hover:opacity-100 transition-opacity">About Us</a>
            <a href="/contact" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Contact</a>
            <a href="/review" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Review Us</a>
            <a href="/gallery" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Gallery</a>
          </nav>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading font-semibold text-base uppercase tracking-wider mb-4 opacity-60">Services</h4>
          <nav className="space-y-3">
            <a href="#services" className="block text-base opacity-80 hover:opacity-100 transition-opacity">AC Repair</a>
            <a href="#services" className="block text-base opacity-80 hover:opacity-100 transition-opacity">AC Installation</a>
            <a href="#services" className="block text-base opacity-80 hover:opacity-100 transition-opacity">AC Maintenance</a>
            <a href="#services" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Duct Cleaning</a>
          </nav>
        </div>

        {/* Service Areas */}
        <div>
          <h4 className="font-heading font-semibold text-base uppercase tracking-wider mb-4 opacity-60">Service Areas</h4>
          <nav className="space-y-3">
            <a href="/areas/palmetto" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Palmetto, FL</a>
            <a href="/areas/bradenton" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Bradenton, FL</a>
            <a href="/areas/memphis" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Memphis, FL</a>
            <a href="/areas/ellenton" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Ellenton, FL</a>
            <a href="/areas/palma-sola" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Palma Sola, FL</a>
          </nav>
        </div>

        {/* Info */}
        <div className="space-y-4">
          <h4 className="font-heading font-semibold text-base uppercase tracking-wider mb-4 opacity-60">Contact</h4>
          <div className="flex items-start gap-3">
            <Phone className="w-4 h-4 mt-0.5 opacity-60" />
            <a href="tel:+18445201313" className="text-base opacity-80 hover:opacity-100 transition-opacity">1-844-520-1313</a>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 mt-0.5 opacity-60" />
            <span className="text-base opacity-80">531 46th St W, Palmetto, FL 34221</span>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 mt-0.5 opacity-60" />
            <span className="text-base opacity-80">Open 24 hours!</span>
          </div>
          <div className="flex items-start gap-3">
            <Facebook className="w-4 h-4 mt-0.5 opacity-60" />
            <a href="https://www.facebook.com/p/Emmons-Air-LLC-61551350440167/" target="_blank" rel="noopener noreferrer" className="text-base opacity-80 hover:opacity-100 transition-opacity">Facebook</a>
          </div>
          <div className="flex items-start gap-3">
            <svg className="w-4 h-4 mt-0.5 opacity-60" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            <a href="https://share.google/W7fsLxWgOy8fWOhTQ" target="_blank" rel="noopener noreferrer" className="text-base opacity-80 hover:opacity-100 transition-opacity">Google</a>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-card/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-base opacity-60">
          © 2026 Emmons Air | Marketing by{" "}
          <a href="https://juniesystems.com/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-100">
            Junie Systems
          </a>
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="text-base opacity-60 hover:opacity-100 transition-opacity">Terms & Conditions</a>
          <span className="opacity-30">|</span>
          <a href="#" className="text-base opacity-60 hover:opacity-100 transition-opacity">Privacy Policy</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
