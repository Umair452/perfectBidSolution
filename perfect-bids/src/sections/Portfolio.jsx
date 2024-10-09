import PortfolioCard from "../components/PortfolioCard";

// eslint-disable-next-line react/prop-types
export default function Portfolio({ projectHeading, portfolioCard }) {
  return (
    <section className="pt-20 flex bg-slate flex-col gap-4">
      <h1 className="text-center text-headerBlue text-4xl font-bold">
        {projectHeading}
      </h1>
      <div className="flex items-center justify-evenly flex-wrap flex-col md:flex-row md:gap-0 gap-4">
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
