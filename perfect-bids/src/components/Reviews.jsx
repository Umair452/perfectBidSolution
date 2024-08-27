import { useEffect, useState } from "react";

const review = [
    { name: 'Umair', text: 'I am very satisfied with their work' },
    { name: 'Saad', text: 'I am very satisfied with their work' },
    { name: 'Huzaifa', text: 'I am very satisfied with their work' },
    { name: 'Talha', text: 'I am very satisfied with their work' }
];

export default function Review() {
  const [randomReviews, setRandomReviews] = useState([]);

  useEffect(() => {
    function getRandomReviews() {
      // Shuffle the array
      const shuffled = review.sort(() => 0.5 - Math.random());
      // Pick first two elements
      return shuffled.slice(0, 2);
    }

    setRandomReviews(getRandomReviews());
  }, []);

  return (
    <div>
      {randomReviews.map((review, index) => (
        <div key={index}>
          <h3>{review.name}</h3>
          <p>{review.text}</p>
        </div>
      ))}
    </div>
  );
}
