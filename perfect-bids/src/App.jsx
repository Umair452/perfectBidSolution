import Footer from "./components/Footer"
import Header from "./components/Header"
import Package from "./components/About"
import Hero from "./sections/Hero"
import LogoBar from "./components/LogoBar"
import ReviewComponent from "./components/Reviews"
import Sample from "./sections/Sample"
import datacamp from "./assets/images/datacamp.svg";
import building from "./assets/images/building.svg";
import engineer from "./assets/images/engineer.svg";
import engineering from "./assets/images/engineering.svg";
import construction from "./assets/images/construction.svg";
import automation from "./assets/images/automation.svg"



function App() {
  
  const residentialCards = [
    { heading: "First Card", image: datacamp },
    { heading: "Second Card", image: building },
    { heading: "Third Card", image: engineer }
  ];
  
  const commercialCards = [
    { heading: "Commercial Card 1", image: engineering },
    { heading: "Commercial Card 2", image: construction },
    { heading: "Commercial Card 3", image: automation }
  ];

  return (
    

    <div className="bg-slate">
    <Header/>
    <Hero />
    <Package />
    {/* <LogoBar /> */}
    <Sample samplesHeading="Residential Estimates" cards={residentialCards} />
      <Sample samplesHeading="Commercial Estimates" cards={commercialCards} />
    <Footer />
    </div>
  
  )
}

export default App
