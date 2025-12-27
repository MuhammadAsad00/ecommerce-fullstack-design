import { Star } from "lucide-react";

const RatingStars = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <Star
        key={i}
        size={16}
        className={`${i < Math.floor(rating / 2) ? 'text-orange-400 fill-current' : 'text-gray-300'}`}
      />
    );
  }
  return <div className="flex">{stars}</div>;
};

export default RatingStars;