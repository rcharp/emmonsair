import { useState } from "react";
import { Phone, Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuoteModal } from "./QuoteModal";
import logo from "@/assets/logo.png";
import icon from "@/assets/icon.png";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    children: [
      { label: "AC Repair", href: "/services/ac-repair" },
      { label: "AC Installation", href: "/services/ac-installation" },
      { label: "AC Maintenance", href: "/services/ac-maintenance" },
      { label: "Duct Cleaning", href: "/services/duct-cleaning" },
    ],
  },
  {
    label: "Service Areas",
    children: [
      { label: "Palmetto, FL", href: "/areas/palmetto" },
      { label: "Memphis, FL", href: "/areas/memphis" },
      { label: "Bradenton, FL", href: "/areas/bradenton" },
      { label: "Ellenton, FL", href: "/areas/ellenton" },
      { label: "Palma Sola, FL", href: "/areas/palma-sola" },
    ],
  },
  {
    label: "Contact",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Get In Contact", href: "/contact" },
      { label: "Review Us", href: "/review" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const { openQuoteModal } = useQuoteModal();

  return (
    <header className="sticky top-0 z-50 border-b border-secondary/20 max-w-[100vw]" style={{ backgroundColor: "#0f172a" }}>
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8 max-w-[100vw]">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 shrink-0 mr-2 lg:mr-4">
          <img src={icon} alt="Emmons Air icon" className="w-8 h-8 sm:w-10 sm:h-10 lg:hidden" width={40} height={40} />
          <img src={logo} alt="Emmons Air" className="hidden lg:block" style={{ width: "351px", height: "auto" }} />
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
                <button className="flex items-center gap-1 px-4 py-2 text-base font-medium text-primary-foreground/70 hover:text-primary-foreground transition-colors rounded-lg">
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
                      className="absolute top-full left-0 mt-1 z-50 rounded-xl shadow-lg border border-border py-2 min-w-[200px]"
                      style={{ backgroundColor: "#0f172a" }}
                    >
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2.5 text-base text-primary-foreground/70 hover:text-primary-foreground hover:bg-secondary/10 transition-colors"
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
                className="px-4 py-2 text-base font-medium text-primary-foreground/70 hover:text-primary-foreground transition-colors rounded-lg"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        {/* CTA - always visible */}
        <div className="flex items-center justify-center lg:justify-end gap-3 sm:gap-3 lg:gap-3 flex-1 lg:flex-none min-w-0">
          <a
            href="tel:+19412584006"
            className="flex items-center gap-1 sm:gap-1.5 lg:gap-2 px-2 sm:px-3 lg:px-6 py-2.5 sm:py-2.5 lg:py-3 text-xs sm:text-sm lg:text-base font-semibold text-secondary border border-secondary hover:bg-secondary/10 transition-colors whitespace-nowrap"
            style={{ borderRadius: "10px" }}
          >
            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 shrink-0" />
            (941) 258-4006
          </a>
          <button
            onClick={openQuoteModal}
            className="px-2 sm:px-3 lg:px-6 py-2.5 sm:py-2.5 lg:py-3 text-xs sm:text-sm lg:text-base font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
            style={{ backgroundColor: "#f59e0b", color: "#fff", borderRadius: "10px" }}
          >
            Get Free Quote
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-primary-foreground ml-auto"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
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
                  <div key={link.label}>
                    <button
                      onClick={() => setMobileDropdown(mobileDropdown === link.label ? null : link.label)}
                      className="flex items-center justify-between w-full py-2 text-base font-medium text-primary-foreground"
                    >
                      {link.label}
                      {mobileDropdown === link.label ? (
                        <ChevronUp className="w-4 h-4 text-primary-foreground/50" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-primary-foreground/50" />
                      )}
                    </button>
                    <AnimatePresence>
                      {mobileDropdown === link.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          {link.children.map((child) => (
                            <a
                              key={child.label}
                              href={child.href}
                              onClick={() => { setMobileOpen(false); setMobileDropdown(null); }}
                              className="block pl-4 py-2 text-base text-primary-foreground/70 hover:text-primary-foreground transition-colors"
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
                    onClick={() => { setMobileOpen(false); setMobileDropdown(null); }}
                    className="block py-2 text-base font-medium text-primary-foreground"
                  >
                    {link.label}
                  </a>
                )
              )}
              <div className="pt-4 space-y-3 border-t border-secondary/20">
                <a
                  href="tel:+19412584006"
                  className="flex items-center justify-center gap-2 w-full text-center px-6 py-3 text-sm font-semibold border border-secondary text-secondary"
                  style={{ borderRadius: "10px" }}
                >
                  <Phone className="w-5 h-5" /> (941) 258-4006
                </a>
                <button
                  onClick={() => { setMobileOpen(false); openQuoteModal(); }}
                  className="block w-full text-center px-6 py-3 text-sm font-semibold"
                  style={{ backgroundColor: "#f59e0b", color: "#fff", borderRadius: "10px" }}
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
