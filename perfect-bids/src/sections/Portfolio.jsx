import React from 'react'

export default function Portfolio({projectHeading, portfolioCard}) {
  return (
   <>
   <section className='bg-slate p-3 flex flex-col gap-4 my-4'>
        <h1 className=" text-center text-bright text-4xl bg-slate font-bold">{samplesHeading}</h1>
       
        <div className='flex items-center justify-evenly flex-wrap flex-col md:flex-row md:gap-0 gap-4'>
          {portfolioCard.map((card, index) => (
            <Portfolio key={index} cardHeading={card.heading} cardImage={card.image} />
          ))}
        </div>
      </section>
   </>
  )
}
