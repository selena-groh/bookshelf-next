import { FaStar, FaStarHalfStroke, FaRegStar } from "react-icons/fa6";
import "./RatingStars.scss";

export const __TEST_IDS__ = {
  FILLED_STAR: "RatingStars-filledStar",
  HALF_STAR: "RatingStars-halfStar",
  EMPTY_STAR: "RatingStars-emptyStar",
};

const DEFAULT_MAX_RATING = 5;

const RatingStars = ({
  rating,
  maxRating = DEFAULT_MAX_RATING,
  showEmptyStars = true,
}: {
  rating: number;
  maxRating?: number;
  showEmptyStars?: boolean;
}) => {
  // A rating of 0 indicates that it was not rated
  if (typeof rating !== "number" || rating === 0) {
    return null;
  }

  let normalizedRating = rating;
  if (rating > maxRating) {
    // This should ideally not happen, but just in case the passed rating is greater than the maximum, we'll change the passed rating to the max.
    normalizedRating = maxRating;
  }

  const showHalf = !Number.isInteger(normalizedRating);
  const wholeStarCount = Math.floor(normalizedRating); // Rounds down
  const emptyStarCount = showEmptyStars
    ? maxRating - wholeStarCount - (showHalf ? 1 : 0)
    : 0;

  return (
    <div
      className="RatingStars"
      aria-label={`${normalizedRating} out of ${maxRating} stars`}
    >
      {[...Array(wholeStarCount)].map((e, starIndex) => (
        <FaStar key={starIndex} data-testid={__TEST_IDS__.FILLED_STAR} />
      ))}
      {showHalf && (
        <FaStarHalfStroke
          // color="yellow.500"
          data-testid={__TEST_IDS__.HALF_STAR}
        />
      )}
      {[...Array(emptyStarCount)].map((e, emptyStarIndex) => (
        <FaRegStar
          key={wholeStarCount + (showHalf ? 1 : 0) + emptyStarIndex}
          // color="yellow.500"
          data-testid={__TEST_IDS__.EMPTY_STAR}
        />
      ))}
    </div>
  );
};

export default RatingStars;
