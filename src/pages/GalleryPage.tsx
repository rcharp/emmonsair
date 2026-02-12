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

const images = [
  { src: galleryTrailer, alt: "Emmons Air company trailer" },
  { src: galleryWork, alt: "Technician performing AC diagnostics" },
  { src: galleryFamily, alt: "The Emmons family" },
  { src: galleryAmericanStandard, alt: "American Standard AC units installation" },
  { src: galleryInstall1, alt: "Residential AC condenser unit installation" },
  { src: galleryInstall2, alt: "Goodman package unit on stand" },
  { src: galleryInstall3, alt: "Wall-mounted condenser unit installation" },
  { src: galleryAirHandler, alt: "Indoor air handler installation" },
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
