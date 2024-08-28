import { useEffect, useState } from "react";

const review = [
  { name: "Umair", text: "I am very satisfied with their work" },
  { name: "Saad", text: "I am very satisfied with their work" },
  { name: "Huzaifa", text: "I am very satisfied with their work" },
  { name: "Talha", text: "I am very satisfied with their work" },
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
    <div className="flex justify-center items-center gap-4 flex-wrap">
      {randomReviews.map((review, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-6 max-w-xs w-1/4 
                     flex-grow mx-2 my-4 text-center flex flex-col justify-between"
        >
          <h3 className="text-lg font-semibold mb-2">{review.name}</h3>
          <p className="text-gray-700">{review.text}</p>
        </div>
      ))}
    </div>
  );
}
