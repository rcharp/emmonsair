import ServiceAreaPage from "@/components/ServiceAreaLayout";
import useSEO from "@/hooks/useSEO";

const PalmaSolaPage = () => {
  useSEO({
    title: "HVAC Services Palma Sola FL | AC Repair & Install | Emmons Air",
    description: "Professional HVAC services in Palma Sola FL. AC repair, installation, maintenance & duct cleaning. Family owned, licensed & insured. Call (844) 520-1313.",
    canonical: "https://emmonsair.com/areas/palma-sola",
  });

  return (
    <ServiceAreaPage
      city="Palma Sola, FL"
      tagline="Your HVAC Solution Experts"
      intro="At Emmons Air, we offer reliable and professional HVAC services in Palma Sola, FL. Whether you need heating, cooling, or ventilation services, our experienced technicians are ready to assist you with installations, repairs, and maintenance."
    />
  );
};

export default PalmaSolaPage;
