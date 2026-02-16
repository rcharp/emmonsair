import ServicePage from "@/components/ServicePageLayout";
import useSEO from "@/hooks/useSEO";

const DuctCleaningPage = () => {
  useSEO({
    title: "Duct Cleaning Palmetto FL | Air Quality | Emmons Air",
    description: "Professional duct cleaning in Palmetto & Bradenton. Remove dust, allergens & mold for healthier indoor air. Licensed & insured. Call 1-844-520-1313.",
    canonical: "https://emmonsair.com/services/duct-cleaning",
  });

  return (
    <ServicePage
      title="Duct Cleaning Services"
      subtitle="Breathe Easy with Emmons Air"
      intro="Your HVAC ducts can accumulate dust, allergens, and other contaminants over time, impacting indoor air quality and reducing system efficiency. Emmons Air offers expert duct cleaning services to help you maintain a healthy home environment."
      sections={[
        {
          heading: "Our Duct Cleaning Process",
          content: [
            "Comprehensive Inspection — thorough assessment of ductwork to identify contamination and issues",
            "Powerful Vacuum Cleaning — state-of-the-art equipment removes dust, dirt, debris, and pet dander",
            "Sanitization and Disinfection — eco-friendly sanitizers eliminate bacteria, mold, and mildew",
            "Sealing and Repair — we fix any leaks, cracks, or damaged sections found during inspection",
            "Airflow Optimization — clean ducts for better airflow and even temperature distribution",
          ],
        },
        {
          heading: "Frequently Asked Questions",
          content: [
            "Most residential duct cleaning jobs take between 2-4 hours depending on system size",
            "We recommend duct cleaning every 3-5 years, or more often if you have pets or allergies",
            "Our service includes cleaning supply and return air ducts, registers, grilles, and diffusers",
            "We use high-powered vacuums and specialized brushes for thorough cleaning",
          ],
        },
      ]}
      benefits={{
        heading: "Benefits of Duct Cleaning",
        items: [
          "Improved Indoor Air Quality — removes allergens, dust, and pollutants for healthier air",
          "Energy Savings — improved airflow reduces energy consumption and lowers utility bills",
          "Extended HVAC Lifespan — clean ducts reduce strain on your system",
          "Odor Reduction — eliminates trapped odors from pets, cooking, or smoke",
          "Enhanced Comfort — consistent airflow and temperature distribution throughout your home",
        ],
      }}
    />
  );
};

export default DuctCleaningPage;
