import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function StarRating({ value, onClick }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Star starValue={i} starRatingValue={value} key={i} onClick={onClick} />
    );
  }

  return <>{stars}</>;
}

function Star({ starValue, starRatingValue, onClick }) {
  const emptyColor = "#ddd";
  const filledColor = "yellow";
  const size = "3x";

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
