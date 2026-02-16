import ServicePage from "@/components/ServicePageLayout";
import useSEO from "@/hooks/useSEO";

const ACInstallationPage = () => {
  useSEO({
    title: "AC Installation Palmetto FL | New System Install | Emmons Air",
    description: "Professional AC installation in Palmetto & Bradenton. Energy-efficient systems, upfront pricing, manufacturer warranties. Call Emmons Air at 1-844-520-1313.",
    canonical: "https://emmonsair.com/services/ac-installation",
  });

  return (
    <ServicePage
      title="AC Installation Services"
      subtitle="Beat the Heat with Emmons Air"
      intro="Whether you're a homeowner, a business owner, or managing a commercial property, ensuring your AC is installed correctly is crucial for comfort and efficiency. Emmons Air provides expert installation services throughout the Palmetto and Bradenton areas."
      sections={[
        {
          heading: "Our Installation Services",
          content: [
            "Residential AC Installation — from single-room units to whole-home systems, tailored to your specific needs",
            "Commercial AC Installation — customized solutions for offices, retail, and industrial facilities",
            "New Construction Installations — we work with builders and contractors for seamless HVAC integration",
            "Replacement and Upgrades — choose the right system for your needs and budget",
          ],
        },
        {
          heading: "Why Choose Emmons Air?",
          content: [
            "Years of experience with knowledge and skills to handle any installation project",
            "Quality products from leading manufacturers known for performance and reliability",
            "Customer satisfaction is our top priority — we exceed expectations every step of the way",
            "Competitive, transparent pricing with no hidden fees",
            "Prompt, responsive service to minimize downtime",
          ],
        },
        {
          heading: "Our Installation Process",
          content: "We start with a thorough assessment of your property to determine the best AC system for your needs. Our technicians consider factors like square footage, insulation, ductwork, and your budget to recommend the most energy-efficient solution. We handle everything from removing old equipment to installing and testing your new system, ensuring everything works perfectly before we leave.",
        },
      ]}
      benefits={{
        heading: "Benefits of Professional Installation",
        items: [
          "Maximized energy efficiency and lower utility costs",
          "Proper sizing for optimal performance",
          "Extended equipment lifespan with correct installation",
          "Manufacturer warranty protection",
          "Better indoor comfort with even cooling",
          "10% discount for new customers on installations",
        ],
      }}
    />
  );
};

export default ACInstallationPage;
