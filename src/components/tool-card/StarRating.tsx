import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  max?: number;
}

const StarRating = ({ rating, max = 5 }: StarRatingProps) => {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: max }, (_, i) => {
        const filled = i + 1 <= Math.floor(rating);
        const partial = !filled && i < rating;
        return (
          <Star
            key={i}
            size={14}
            className={
              filled
                ? "fill-amber-400 text-amber-400"
                : partial
                ? "fill-amber-400/50 text-amber-400"
                : "text-muted-foreground/30"
            }
          />
        );
      })}
    </div>
  );
};

export default StarRating;
