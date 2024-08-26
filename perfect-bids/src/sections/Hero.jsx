

export default function Hero() {
  return (
    <section className="relative h-[600px]">
    <div className="absolute inset-0 bg-black opacity-50 overlayDiv"></div>
    <div className="relative z-10 contentHero text-center text-white">
      <h1 className="text-4xl font-bold">Perfection</h1>
      <p className="mt-4 text-lg">We are the solution to your bidding errors</p>
      <button className="relative z-10 mt-8 px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
      Get Free Quote
    </button>
    </div>
    
  </section>
  
  )
}
