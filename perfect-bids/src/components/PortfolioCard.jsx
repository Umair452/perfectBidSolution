import React from 'react';

export default function PortfolioCard({ heading, paragraph, image }) {
  return (
    <section className="w-full my-5">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between  shadow-lg  rounded-lg">
        <div className="w-full md:w-1/2 mb-6 md:mb-0 text-bright bg-headerBlue">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{heading}</h2>
          <p className="text-gray-600 leading-relaxed">
            {paragraph}
          </p>
        </div>
        <div className="w-full max-h-80 md:w-1/2 overflow-hidden">
          <img src={image} alt="Sample Image" className="rounded-lg shadow-lg max-w-full max-h-full object-contain" />
        </div>
      </div>
    </section>
  );
}
