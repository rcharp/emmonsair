import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

import galleryTrailer from "@/assets/gallery/emmons-trailer.png";
import galleryWork from "@/assets/gallery/emmons-work.png";
import galleryFamily from "@/assets/gallery/emmons-family.png";
import galleryAmericanStandard from "@/assets/gallery/american-standard-units.png";
import galleryInstall1 from "@/assets/gallery/ac-unit-install-1.jpg";
import galleryInstall2 from "@/assets/gallery/ac-unit-install-2.jpg";
import galleryInstall3 from "@/assets/gallery/ac-unit-install-3.jpg";
import galleryAirHandler from "@/assets/gallery/air-handler-install.jpg";
import galleryFleet from "@/assets/gallery/fleet-trucks.png";
import galleryDaikin from "@/assets/gallery/daikin-rooftop.png";
import galleryCeilingHandler from "@/assets/gallery/ceiling-air-handler.jpg";
import galleryOwner from "@/assets/gallery/owner-selfie.jpg";
import galleryGoodmanDual from "@/assets/gallery/goodman-dual-units.jpg";
import galleryAirHandler2 from "@/assets/gallery/air-handler-install-2.jpg";
import galleryMiniSplit from "@/assets/gallery/aciq-mini-split.jpg";
import galleryCondenserStand from "@/assets/gallery/goodman-condenser-stand.jpg";
import galleryCloset from "@/assets/gallery/air-handler-closet.jpg";
import galleryCloset2 from "@/assets/gallery/air-handler-closet-2.jpg";
import galleryGoodmanPad from "@/assets/gallery/goodman-pad.jpg";
import galleryEnergyGuide from "@/assets/gallery/energy-guide-unit.jpg";
import galleryGreeMini from "@/assets/gallery/gree-mini-split.jpg";
import galleryGoodmanBracket from "@/assets/gallery/goodman-wall-bracket.jpg";
import galleryPackageCommercial from "@/assets/gallery/goodman-package-commercial.jpg";
import galleryCloset3 from "@/assets/gallery/air-handler-closet-3.jpg";
import galleryNewInstall from "@/assets/gallery/goodman-new-install.jpg";
import galleryTestimony from "@/assets/gallery/testimony-promo.png";
import galleryOwnerUnits from "@/assets/gallery/owner-with-units.png";
import galleryEventBooth from "@/assets/gallery/event-booth.png";
import galleryOwnerThumbsup from "@/assets/gallery/owner-thumbsup.jpg";
import galleryServiceTruck from "@/assets/gallery/service-truck.jpg";
import galleryPalmettoTrailer from "@/assets/gallery/palmetto-point-trailer.png";
import galleryOwnerGoodmanDisplay from "@/assets/gallery/owner-goodman-display.png";
import galleryHorizontalHandler from "@/assets/gallery/horizontal-handler-garage.jpg";
import galleryAmericanStandardPromo from "@/assets/gallery/american-standard-promo.png";
import galleryAmericanStandardRoof from "@/assets/gallery/american-standard-rooftop.jpg";
import galleryMitsubishiIndoor from "@/assets/gallery/mitsubishi-indoor.jpg";
import galleryMitsubishiOutdoor from "@/assets/gallery/mitsubishi-outdoor.jpg";

const images = [
  { src: galleryFleet, alt: "Emmons Air fleet of trucks and trailer" },
  { src: galleryOwnerUnits, alt: "Owner with Goodman AC units display" },
  { src: galleryOwnerGoodmanDisplay, alt: "Owner with Goodman units and fans" },
  { src: galleryTrailer, alt: "Emmons Air company trailer" },
  { src: galleryPalmettoTrailer, alt: "Emmons Air at Palmetto Point" },
  { src: galleryServiceTruck, alt: "Emmons Air service truck" },
  { src: galleryOwner, alt: "Emmons Air owner" },
  { src: galleryOwnerThumbsup, alt: "Owner on rooftop with commercial units" },
  { src: galleryTestimony, alt: "Customer testimonial graphic" },
  { src: galleryEventBooth, alt: "Emmons Air community event booth" },
  { src: galleryWork, alt: "Technician performing AC diagnostics" },
  { src: galleryDaikin, alt: "Daikin rooftop unit installation" },
  { src: galleryFamily, alt: "The Emmons family" },
  { src: galleryAmericanStandard, alt: "American Standard AC units" },
  { src: galleryAmericanStandardPromo, alt: "American Standard units promotional photo" },
  { src: galleryAmericanStandardRoof, alt: "American Standard rooftop units" },
  { src: galleryGoodmanDual, alt: "Dual Goodman condenser units" },
  { src: galleryCondenserStand, alt: "Goodman condenser on elevated stand" },
  { src: galleryGoodmanPad, alt: "Goodman unit on concrete pad" },
  { src: galleryNewInstall, alt: "New Goodman condenser installation" },
  { src: galleryEnergyGuide, alt: "AC unit with energy efficiency label" },
  { src: galleryInstall1, alt: "Residential AC condenser installation" },
  { src: galleryInstall2, alt: "Goodman package unit on stand" },
  { src: galleryInstall3, alt: "Wall-mounted condenser unit" },
  { src: galleryGoodmanBracket, alt: "Goodman unit on wall bracket" },
  { src: galleryPackageCommercial, alt: "Commercial Goodman package unit" },
  { src: galleryMiniSplit, alt: "ACiQ mini-split outdoor unit" },
  { src: galleryGreeMini, alt: "Gree mini-split system" },
  { src: galleryMitsubishiIndoor, alt: "Mitsubishi mini-split indoor unit" },
  { src: galleryMitsubishiOutdoor, alt: "Mitsubishi mini-split outdoor unit" },
  { src: galleryAirHandler, alt: "Indoor air handler installation" },
  { src: galleryCeilingHandler, alt: "Ceiling-mounted air handler" },
  { src: galleryHorizontalHandler, alt: "Horizontal air handler in garage" },
  { src: galleryAirHandler2, alt: "Air handler with ductwork" },
  { src: galleryCloset, alt: "Air handler in utility closet" },
  { src: galleryCloset2, alt: "Air handler closet installation" },
  { src: galleryCloset3, alt: "Vertical air handler in closet" },
];

const GalleryPage = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <section className="pt-32 pb-20 lg:pb-28 section-gradient">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Work</span>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mt-3">
              Project Gallery
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Browse photos from our recent HVAC installations, repairs, and maintenance projects across Manatee County.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-xl overflow-hidden aspect-[4/3] group cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </main>
    <Footer />
  </div>
);

export default GalleryPage;
