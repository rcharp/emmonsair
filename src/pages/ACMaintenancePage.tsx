import ServicePage from "@/components/ServicePageLayout";
import useSEO from "@/hooks/useSEO";

const ACMaintenancePage = () => {
  useSEO({
    title: "AC Maintenance Palmetto FL | Tune-Ups | Emmons Air",
    description: "Preventive AC maintenance in Palmetto & Bradenton. Keep your system efficient with regular tune-ups. Family owned, licensed & insured. Call (844) 520-1313.",
    canonical: "https://emmonsair.com/services/ac-maintenance",
  });

  return (
    <ServicePage
      title="AC Maintenance Services"
      subtitle="Prevent Costly Breakdowns"
      intro="Regular maintenance is the key to ensuring your air conditioning system operates efficiently, minimizes energy consumption, and extends its lifespan. Emmons Air offers comprehensive AC maintenance services to keep your system in top condition year-round."
      sections={[
        {
          heading: "Our Maintenance Services",
          content: [
            "Preventive Maintenance — catch potential issues before they escalate into costly repairs",
            "Tune-Ups and Inspections — detailed inspections to identify worn-out parts or inefficiencies",
            "Filter Replacement — ensure proper airflow and prevent dust and debris buildup",
            "Condenser and Evaporator Coil Cleaning — restore your AC's cooling effectiveness",
            "Refrigerant Level Check and Recharge — ensure efficient operation and prevent compressor damage",
          ],
        },
        {
          heading: "What We Inspect",
          content: "Our skilled technicians conduct thorough inspections of every component of your AC system. We check electrical connections, thermostat calibration, condensate drains, refrigerant levels, and all moving parts. We'll tune up your AC to peak efficiency, saving you money on energy bills and preventing unexpected breakdowns.",
        },
      ]}
      benefits={{
        heading: "Benefits of Regular Maintenance",
        items: [
          "Improved Energy Efficiency — a well-maintained AC system reduces energy consumption and lowers utility bills",
          "Enhanced Comfort — prevents breakdowns and ensures consistent cooling",
          "Extended Lifespan — addressing minor issues before they escalate delays costly replacements",
          "Healthier Indoor Air — clean filters and coils reduce allergens, dust, and pollutants",
          "Peace of Mind — know your system is in expert hands, ready to keep you cool",
        ],
      }}
    />
  );
};

export default ACMaintenancePage;
