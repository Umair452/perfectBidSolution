// eslint-disable-next-line react/prop-types
export default function Card({ cardHeading, cardDescription }) {
  return (
    <section className="bg-white shadow-md text-dark flex flex-col items-center rounded-lg p-6 w-full md:w-1/3 hover:shadow-lg hover:-translate-y-2 transition-transform duration-500 ease-in-out">
      <h1 className="text-xl font-bold text-center mb-4">{cardHeading}</h1>
      <p className="text-center text-gray-600">{cardDescription}</p>
    </section>
  );
}
