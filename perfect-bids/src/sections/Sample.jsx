import Card from "../components/Card";

// eslint-disable-next-line react/prop-types
export default function Sample({ samplesHeading, cards }) {
  return (
    <section className="pt-20 bg-slate-100 flex flex-col gap-8">
      <h1 className="text-center text-headerBlue text-4xl font-bold mb-6">
        {samplesHeading}
      </h1>

      <div className="flex flex-wrap justify-center gap-8 px-4">
        {/* eslint-disable-next-line react/prop-types */}
        {cards.map((card, index) => (
          <Card
            key={index}
            cardHeading={card.heading}
            cardDescription={card.description}
          />
        ))}
      </div>
    </section>
  );
}
