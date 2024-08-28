import React from 'react'

export default function PortfolioCard({heading, paragraph, image}) {
  return (
    <section className='w-1/3'>
        <div class="container mx-auto flex flex-col md:flex-row items-center justify-between bg-white shadow-lg p-6 rounded-lg">
   
    <div class="w-full md:w-1/2 mb-6 md:mb-0">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">{heading}</h2>
      <p class="text-gray-600 leading-relaxed">
        {paragraph}
      </p>
    </div>

   
    <div class="w-full md:w-1/2">
      <img src = {image} alt="Sample Image" class="rounded-lg shadow-lg max-w-full h-auto" />
    </div>
  </div>
        
    </section>
  )
}
