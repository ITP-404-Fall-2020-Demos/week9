import React from "react";

export default function StarRating({ value, onClick, renderStar }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Star
        starValue={i}
        starRatingValue={value}
        key={i}
        onClick={onClick}
        renderStar={renderStar}
      />
    );
  }

  return <>{stars}</>;
}

function Star({ starValue, starRatingValue, onClick, renderStar }) {
  function handleClick() {
    const clickedStarValue = starValue === starRatingValue ? 0 : starValue;
    onClick(clickedStarValue);
  }

  return renderStar({
    onClick: handleClick,
    isFilled: starValue <= starRatingValue,
  });
}
