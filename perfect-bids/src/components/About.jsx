import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 200, // Animation duration in milliseconds (optional)
      offset: 200, // Offset from the original trigger point (optional)
      once: true, // Whether animation should happen only once (optional)
    });
  }, []);

  return (
    <section id="aboutus">
      <div className=" relative gap-5 px-2 lg:px-28 py-12 packageContainer flex flex-col justify-center items-center text-center  bg-backgroundBlue text-headerBlue bg-fixed">
        {/* <div className="absolute inset-0 bg-black opacity-10"></div> */}
        <div
          className="relative bg-fixed bg-cover bg-center w-[100%] pb-10 mb-5"
          style={{ backgroundImage: "url('orangishTint.webp')" }} // Replace with your image path
        >
          {/* Darker overlay for better text readability */}
          <div className="absolute inset-0 bg-black opacity-60"></div>

          <div className="max-w-5xl mx-auto relative z-10 p-4 sm:p-6 lg:p-8">
            <h1 className="pt-20 transition ease-in duration-500 text-4xl lg:text-6xl font-bold text-headerBlue drop-shadow-lg">
              Who are we?
            </h1>
            <p className="text-xl m-4 text-white text-justify leading-relaxed drop-shadow-md">
              <strong>PerfectBid Solutions</strong> delivers precise and
              targeted cost estimating and quantity takeoff services. With a
              growing list of satisfied clients, we are proud to offer
              industry-leading expertise in cost estimation and project
              takeoffs.
            </p>

            <p className="text-xl m-4 text-white text-justify leading-relaxed drop-shadow-md">
              Our team of skilled cost estimators and engineers brings years of
              experience, combining functional engineering insights with
              advanced cost estimation techniques. At PerfectBid Solutions, we
              provide both public and private sector clients across the U.S. and
              Canada with reliable, data-driven advice for their construction
              projects.
            </p>

            <p className="text-xl m-4 text-white text-justify leading-relaxed drop-shadow-md">
              Our mission is to <strong>empower developers</strong>,
              contractors, and architects by helping them streamline their cost
              estimation process, driving more sales and fostering long-term
              client relationships. With a primary focus on construction, we
              ensure our clients can make informed decisions, leading to project
              success and sustained growth.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full">
          <div className="lg:w-[45%] p-10 text-center  gap-4 lg:text-start bg-bright text-black flex flex-col justify-start">
            <h1 className="text-4xl font-bold">How we proceed</h1>
            <p className="text-xl">
              We proceed in a simplified manner in order to deliver the client
              what he / she desires.
            </p>
            {/* <p className="text-2xl font-bold text-heading">35$ <span className="text-xl text-black">/hour</span></p>
        <button className="text-2xl bg-slate p-6 lg:w-2/4 text-bright font-bold rounded-full hover:transition-color ease-in-out duration-500 hover:text-bright hover:bg-black">Read more</button> */}
          </div>

          <div
            className="flex flex-col lg:flex-row lg:pb-32 justify-end bg-no-repeat bg-cover bg-center 
                        lg:w-[55%]"
          >
            <div className="flex flex-col items-start p-8 bg-headerBlue text-bright lg:bg-heading lg:w-[54%] space-y-6">
              <div className="w-full text-justify p-4 border-l-4 border-yellow-400 bg-white/10 rounded-md">
                <span className="text-lg font-semibold ">
                  01. Weekend Service at no extra charge – stress-free project
                  deadlines.
                </span>
              </div>

              <div className="w-full p-4 border-l-4 text-justify border-blue-400 bg-white/10 rounded-md">
                <span className="text-lg font-semibold text-justify">
                  02. Dedicated resource for personalized attention and fast
                  results.
                </span>
              </div>

              <div className="w-full p-4 border-l-4 text-justify border-green-400 bg-white/10 rounded-md">
                <span className="text-lg font-semibold text-justify">
                  03. 50% off your first project – seamless and accurate
                  estimation.
                </span>
              </div>

              <div className="w-full p-4 border-l-4 text-justify border-purple-400 bg-white/10 rounded-md">
                <span className="text-lg font-semibold text-justify">
                  04. Your peace of mind and project success are our top
                  priorities.
                </span>
              </div>

              <div className="w-full p-4 border-l-4 text-justify border-red-400 bg-white/10 rounded-md">
                <span className="text-lg font-semibold text-justify">
                  05. Reach out anytime – we&apos;re here to help you succeed!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
