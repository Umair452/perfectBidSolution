import Footer from "./components/Footer";
import Header from "./components/Header";
import Package from "./components/About";
import Hero from "./sections/Hero";
import Micasta from "./assets/images/Micasita.jpg";
import topImage from "./assets/images/portfolioOne.jpg";
import Portfolio from "./sections/Portfolio";
import Review from "./components/Reviews";
import StatsCounter from "./components/Counter";

function App() {
  const commercialEstimates = [
    { name: "First Project", description: "First description", image: Micasta },
    { name: "Second Project", description: "First Second", image: topImage },
  ];

  return (
    <div className="">
      <Header />
      <Hero />
      <Package />
      <Portfolio projectHeading="Commercial estimates" portfolioCard={commercialEstimates} />
      <StatsCounter />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
