import PortfolioCard from "../components/PortfolioCard";

// eslint-disable-next-line react/prop-types
export default function Portfolio({ projectHeading, portfolioCard }) {
  return (
    <section className="pt-20 bg-slate flex flex-col gap-4">
      <h1 className="text-center text-headerBlue text-4xl font-bold mb-6">
        {projectHeading}
      </h1>
      <div className="flex items-center justify-center flex-wrap gap-4 mb-4">
        {/* eslint-disable-next-line react/prop-types */}
        {portfolioCard.map((card, index) => (
          <PortfolioCard
            key={index}
            heading={card.name}
            paragraph={card.description}
            image={card.image}
          />
        ))}
      </div>
    </section>
  );
}
