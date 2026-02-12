import { useState } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuoteModal } from "./QuoteModal";
import logo from "@/assets/logo.png";
import icon from "@/assets/icon.png";

const navLinks = [
  { label: "Home", href: "#" },
  {
    label: "Services",
    children: [
      { label: "AC Repair", href: "#services" },
      { label: "AC Installation", href: "#services" },
      { label: "AC Maintenance", href: "#services" },
      { label: "Duct Cleaning", href: "#services" },
    ],
  },
  {
    label: "Service Areas",
    children: [
      { label: "Palmetto, FL", href: "#" },
      { label: "Memphis, FL", href: "#" },
      { label: "Bradenton, FL", href: "#" },
      { label: "Ellenton, FL", href: "#" },
      { label: "Palma Sola, FL", href: "#" },
    ],
  },
  {
    label: "Contact",
    children: [
      { label: "About Us", href: "#about" },
      { label: "Get In Contact", href: "#contact" },
      { label: "Review Us", href: "/review" },
    ],
  },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { openQuoteModal } = useQuoteModal();

  return (
    <header className="sticky top-0 z-50 border-b border-secondary/20" style={{ backgroundColor: "#0f172a" }}>
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img src={icon} alt="Emmons Air icon" className="w-10 h-10 lg:hidden" />
          <img src={logo} alt="Emmons Air" className="hidden lg:block h-14" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground transition-colors rounded-lg">
                  {link.label}
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <AnimatePresence>
                  {openDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 rounded-xl shadow-lg border border-border py-2 min-w-[200px]"
                      style={{ backgroundColor: "#0f172a" }}
                    >
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-primary-foreground/70 hover:text-primary-foreground hover:bg-secondary/10 transition-colors"
                        >
                          {child.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground transition-colors rounded-lg"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+19412584006"
            className="flex items-center gap-2 px-5 py-2.5 text-base font-semibold text-secondary border border-secondary rounded-full hover:bg-secondary/10 transition-colors"
          >
            <Phone className="w-5 h-5" />
            (941) 258-4006
          </a>
          <button
            onClick={openQuoteModal}
            className="px-6 py-2.5 bg-secondary text-secondary-foreground text-sm font-semibold rounded-full hover:opacity-90 transition-opacity"
          >
            Get Free Quote
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-primary-foreground"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-secondary/20"
            style={{ backgroundColor: "#0f172a" }}
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/50">{link.label}</span>
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block pl-3 py-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm font-medium text-primary-foreground"
                  >
                    {link.label}
                  </a>
                )
              )}
              <div className="pt-4 space-y-3 border-t border-secondary/20">
                <a href="tel:+19412584006" className="flex items-center gap-2 text-base font-semibold text-primary-foreground">
                  <Phone className="w-5 h-5" /> (941) 258-4006
                </a>
                <button
                  onClick={() => { setMobileOpen(false); openQuoteModal(); }}
                  className="block w-full text-center px-6 py-3 bg-secondary text-secondary-foreground text-sm font-semibold rounded-full"
                >
                  Get Free Quote
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
