import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function StarRating({
  value,
  onClick,
  emptyColor,
  filledColor,
  size,
}) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Star
        starValue={i}
        starRatingValue={value}
        key={i}
        onClick={onClick}
        emptyColor={emptyColor}
        filledColor={filledColor}
        size={size}
      />
    );
  }

  return <>{stars}</>;
}

function Star({
  starValue,
  starRatingValue,
  onClick,
  emptyColor = "#ddd",
  filledColor = "yellow",
  size = "2x",
}) {
  function handleClick() {
    const clickedStarValue = starValue === starRatingValue ? 0 : starValue;
    onClick(clickedStarValue);
  }

  return (
    <button type="button" className="btn btn-link" onClick={handleClick}>
      <FontAwesomeIcon
        icon={faStar}
        color={starValue <= starRatingValue ? filledColor : emptyColor}
        size={size}
      />
    </button>
  );
}
