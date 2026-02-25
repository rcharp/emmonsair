import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBadges from "@/components/TrustBadges";
import SpecialOffers from "@/components/SpecialOffers";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/useSEO";

const Index = () => {
  useSEO({
    title: "Emmons Air | HVAC Services Palmetto FL",
    description: "Emmons Air provides expert AC repair, installation, maintenance and duct cleaning in Palmetto, Bradenton & Manatee County. Family owned since 2012. Call (844) 520-1313.",
    canonical: "https://emmonsair.com/",
  });

  return (
    <div className="min-h-screen bg-background overflow-x-hidden max-w-[100vw]">
      <Header />
      <main>
        <HeroSection />
        <TrustBadges />
        <SpecialOffers />
        <TestimonialsSection />
        <ServicesSection />
        <AboutSection />
        <GallerySection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
