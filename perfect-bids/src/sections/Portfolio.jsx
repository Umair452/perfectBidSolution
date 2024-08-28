import React from 'react';
import PortfolioCard from '../components/PortfolioCard';

export default function Portfolio({ projectHeading, portfolioCard }) {
  return (
    <section className=" p-3 flex flex-col gap-4 my-5">
      <h1 className="text-center text-headerBlue text-4xl font-bold">{projectHeading}</h1>
      <div className="flex items-center justify-evenly flex-wrap flex-col md:flex-row md:gap-0 gap-4">
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
