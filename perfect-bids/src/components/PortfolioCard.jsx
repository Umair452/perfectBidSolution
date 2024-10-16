// eslint-disable-next-line react/prop-types
export default function PortfolioCard({ heading, paragraph, image }) {
  return (
    <section className="w-full my-5">
      <div className="container w-1/2 mx-auto flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:shadow-xl hover:scale-105">
        {/* Left Image */}
        <div className="w-full md:w-1/2 overflow-hidden">
          <img
            src={image}
            alt={heading}
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105 rounded-l-lg"
          />
        </div>
        {/* Right Content */}
        <div className="w-full md:w-1/2 p-4 flex flex-col justify-between bg-headerBlue text-white">
          <h2 className="text-xl font-semibold mb-2">{heading}</h2>
          <p className="text-sm leading-relaxed mb-4">{paragraph}</p>
        </div>
      </div>
    </section>
  );
}
