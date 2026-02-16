import ServiceAreaPage from "@/components/ServiceAreaLayout";
import useSEO from "@/hooks/useSEO";

const PalmettoPage = () => {
  useSEO({
    title: "HVAC Services Palmetto FL | AC Repair & Install | Emmons Air",
    description: "Trusted HVAC services in Palmetto FL. AC repair, installation, maintenance & duct cleaning. Family owned, licensed & insured. Call 1-844-520-1313.",
    canonical: "https://emmonsair.com/areas/palmetto",
  });

  return (
    <ServiceAreaPage
      city="Palmetto, FL"
      tagline="Your Trusted HVAC Partner"
      intro="At Emmons Air, we offer reliable and professional HVAC services in Palmetto, FL. Whether you need heating, cooling, or ventilation services, our experienced technicians are ready to assist you with installations, repairs, and maintenance."
    />
  );
};

export default PalmettoPage;
