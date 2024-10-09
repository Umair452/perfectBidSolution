// StatsCounter.jsx
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const StatsCounter = () => {
  // Initialize the intersection observer
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when the component comes into view
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  return (
    <div
      ref={ref}
      className="flex flex-col gap-4 md:flex-row md:gap-0 justify-evenly space-x-8 py-8"
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold text-blue-500">
          Projects {inView ? <CountUp start={0} end={100} duration={3} /> : 0}
        </h2>
      </div>
      <div className="text-center">
        <h2 className="text-4xl font-bold text-green-500">
          Clients {inView ? <CountUp start={0} end={50} duration={3} /> : 0}
        </h2>
      </div>
      <div className="text-center">
        <h2 className="text-4xl font-bold text-purple-500">
          Success Rate:{" "}
          {inView ? <CountUp start={0} end={99} duration={3} /> : 0}%
        </h2>
      </div>
    </div>
  );
};

export default StatsCounter;
