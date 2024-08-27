import React from 'react';
import Card from '../components/Card';


export default function Sample({ samplesHeading, cards }) {
    return (
      <section className='bg-slate p-3 flex flex-col gap-4 my-4'>
        <h1 className=" text-center text-bright text-4xl bg-slate font-bold">{samplesHeading}</h1>
       
        <div className='flex items-center justify-evenly flex-wrap flex-col md:flex-row md:gap-0 gap-4'>
          {cards.map((card, index) => (
            <Card key={index} cardHeading={card.heading} cardImage={card.image} />
          ))}
        </div>
      </section>
    );
  }
  
