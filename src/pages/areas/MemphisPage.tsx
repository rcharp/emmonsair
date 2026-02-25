import ServiceAreaPage from "@/components/ServiceAreaLayout";
import useSEO from "@/hooks/useSEO";

const MemphisPage = () => {
  useSEO({
    title: "HVAC Services Memphis FL | AC Repair & Install | Emmons Air",
    description: "Reliable HVAC services in Memphis FL. AC repair, installation, maintenance & duct cleaning. Family owned, licensed & insured. Call (844) 520-1313.",
    canonical: "https://emmonsair.com/areas/memphis",
  });

  return (
    <ServiceAreaPage
      city="Memphis, FL"
      tagline="Your HVAC Experts"
      intro="At Emmons Air, we offer reliable and professional HVAC services in Memphis, FL. Whether you need heating, cooling, or ventilation services, our experienced technicians are ready to assist you with installations, repairs, and maintenance."
    />
  );
};

export default MemphisPage;
