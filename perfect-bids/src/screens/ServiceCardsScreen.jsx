import Sample from "../sections/Sample";

export default function ServiceCardsScreen() {
  const cards = [
    {
      heading: "Mechanical Electrical & Plumbing (MEP)",
      description:
        "Comprehensive MEP solutions ensuring optimal performance and safety in all projects.",
    },
    {
      heading: "Structured Cabling (Telecommunication)",
      description:
        "High-quality cabling services to support robust communication infrastructure.",
    },
    {
      heading: "Security System",
      description:
        "Advanced security systems designed to safeguard your premises and personnel.",
    },
    {
      heading: "Audio & Visual System",
      description:
        "Top-tier AV systems that provide a seamless experience for presentations and events.",
    },
    {
      heading: "Fire Alarm System",
      description:
        "Reliable fire alarm installations to ensure safety and compliance with regulations.",
    },
    {
      heading: "HVAC, Demolition, Lighting Protection",
      description:
        "Comprehensive HVAC, demolition, and lightning protection services for various projects.",
    },
  ];

  return (
    <div className="bg-slate pb-10">
      <Sample samplesHeading="Our Services" cards={cards} />
    </div>
  );
}
