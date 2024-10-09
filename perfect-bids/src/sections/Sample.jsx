import Card from "../components/Card";

// eslint-disable-next-line react/prop-types
export default function Sample({ samplesHeading, cards }) {
  return (
    <section className="pt-20 bg-slate flex flex-col gap-4">
      <h1 className=" text-center text-bright text-4xl bg-slate font-bold">
        {samplesHeading}
      </h1>

      <div className="flex items-center justify-evenly flex-wrap flex-col md:flex-row md:gap-0 gap-4">
        {/* eslint-disable-next-line react/prop-types */}
        {cards.map((card, index) => (
          <Card key={index} cardHeading={card.heading} cardImage={card.image} />
        ))}
      </div>
    </section>
  );
}
