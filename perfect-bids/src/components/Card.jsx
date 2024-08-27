import React from 'react'

export default function Card({cardHeading, cardImage}) {
  return (
    <section className="bg-bright flex flex-col items-center rounded-md p-4 w-3/4 md:w-1/4 hover:-translate-y-2 hover:transition ease-in-out duration-1000">
    <img src={cardImage} alt="card image" className="w-12 h-12 mb-4" />
    <h1 className="text-dark text-center text-lg font-medium">
      {cardHeading}
    </h1>
    <button className="bg-dark text-white px-6 py-2 rounded-full hover:bg-slate focus:outline-none">
      View Sample Here
    </button>
  </section>
  )
}
