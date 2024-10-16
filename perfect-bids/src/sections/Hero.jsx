import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="relative h-dvh bg-cover bg-center"
      style={{ backgroundImage: "url('bluishTint.webp')" }} // You can update this path to your image
    >
      <div className="absolute inset-0 bg-black opacity-50 overlayDiv"></div>

      <div className="relative z-10 top-64 lg:left-11 contentHero text-center text-white gap-3 flex flex-col items-center lg:w-1/3">
        <h1 className="text-6xl font-bold text-stroke-white">PerfectBids</h1>
        <p className="text-3xl">We are the solution to your bidding errors</p>

        {/* Use Link for navigation */}
        <Link
          to="/contact-us"
          className="max-w-52 bg-slate text-bright border border-bright border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
        >
          <span className="bg-slate shadow-bright absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
          Get Free Quote
        </Link>
      </div>
    </section>
  );
}
