import About from "../components/About";
import Hero from "../sections/Hero";
import Review from "../components/Reviews";
import StatsCounter from "../components/Counter";

export default function HomeScreen() {
  return (
    <>
      <Hero />
      <About />
      <StatsCounter />
      <Review />
    </>
  );
}
