import Micasta from "../assets/images/Micasita.jpg";
import topImage from "../assets/images/portfolioOne.jpg";
import Sample from "../sections/Sample";

export default function ServiceCardsScreen() {
  const cards = [
    { heading: "First Project", image: Micasta },
    { heading: "Second Project", image: topImage },
    { heading: "Third Project", image: Micasta },
    { heading: "Fourth Project", image: topImage },
    { heading: "Fifth Project", image: Micasta },
    { heading: "Sixth Project", image: topImage },
    { heading: "Seventh Project", image: Micasta },
    { heading: "Eighth Project", image: topImage },
    { heading: "Ninth Project", image: Micasta },
    { heading: "Tenth Project", image: topImage },
    { heading: "Eleventh Project", image: Micasta },
    { heading: "Twelfth Project", image: topImage },
  ];

  return (
    <>
      <Sample samplesHeading="These are some Samples" cards={cards} />
    </>
  );
}
