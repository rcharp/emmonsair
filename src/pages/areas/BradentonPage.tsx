import ServiceAreaPage from "@/components/ServiceAreaLayout";
import useSEO from "@/hooks/useSEO";

const BradentonPage = () => {
  useSEO({
    title: "HVAC Services Bradenton FL | AC Repair & Install | Emmons Air",
    description: "Professional HVAC services in Bradenton FL. AC repair, installation, maintenance & duct cleaning. Family owned, licensed & insured. Call (844) 520-1313.",
    canonical: "https://emmonsair.com/areas/bradenton",
  });

  return (
    <ServiceAreaPage
      city="Bradenton, FL"
      tagline="Your Trusted HVAC Partner"
      intro="At Emmons Air, we offer reliable and professional HVAC services in Bradenton, FL. Whether you need heating, cooling, or ventilation services, our experienced technicians are ready to assist you with installations, repairs, and maintenance."
    />
  );
};

export default BradentonPage;
