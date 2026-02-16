import ServicePage from "@/components/ServicePageLayout";
import useSEO from "@/hooks/useSEO";

const ACRepairPage = () => {
  useSEO({
    title: "AC Repair Palmetto FL | Same-Day Service | Emmons Air",
    description: "Fast, reliable AC repair in Palmetto, Bradenton & Manatee County. 24/7 emergency service, upfront pricing. Licensed & insured. Call 1-844-520-1313.",
    canonical: "https://emmonsair.com/services/ac-repair",
  });

  return (
    <ServicePage
      title="AC Repair Services"
      subtitle="Beat the Heat with Emmons Air"
      intro="When your AC system breaks down, you need a trustworthy repair company to get it back up and running quickly. Emmons Air provides fast, reliable AC repair services in Palmetto, Bradenton, Memphis, Ellenton and Palma Sola."
      sections={[
        {
          heading: "Understanding AC Repair Needs in Florida",
          content: "Living in sunny Florida comes with its fair share of challenges when it comes to keeping your home cool and comfortable. The hot and humid climate puts extra strain on air conditioning systems, making them more susceptible to breakdowns. It's crucial to work with reliable AC repair services that can address issues promptly and keep your system running efficiently.",
        },
        {
          heading: "Common AC Issues We Fix",
          content: [
            "Refrigerant leaks — reduced cooling efficiency and potential compressor failure",
            "Compressor failures — the heart of your AC system, under constant stress in hot conditions",
            "Clogged drain lines — can lead to water damage and other issues",
            "Electrical problems — humidity causes corrosion and malfunction of components",
            "Thermostat issues — inaccurate readings and inconsistent temperatures",
            "Fan motor failures — reduced airflow and overheating",
          ],
        },
        {
          heading: "Why Choose Emmons Air for AC Repair?",
          content: [
            "Over 12 years of experience in the HVAC industry",
            "Licensed and insured technicians",
            "24/7 emergency repair services",
            "Upfront, transparent pricing — no surprises",
            "Same-day service available",
            "Flexible scheduling to fit your lifestyle",
          ],
        },
      ]}
      benefits={{
        heading: "Benefits of Timely AC Repair",
        items: [
          "Improved energy efficiency — up to 25% savings on utility bills",
          "Extended system lifespan — avoid costly replacements",
          "Consistent cooling throughout your home",
          "Fewer emergency breakdowns",
          "Better indoor air quality",
          "Peace of mind knowing your system is running properly",
        ],
      }}
    />
  );
};

export default ACRepairPage;
