import Portfolio from "../sections/Portfolio";
import Micasta from "../assets/images/Micasita.jpg";
import topImage from "../assets/images/portfolioOne.jpg";
export default function PortfolioScreen() {
  const commercialEstimates = [
    { name: "First Project", description: "First description", image: Micasta },
    { name: "Second Project", description: "First Second", image: topImage },
  ];

  return (
    <>
      <Portfolio
        projectHeading="Commercial estimates"
        portfolioCard={commercialEstimates}
      />
    </>
  );
}
