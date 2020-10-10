import React from "react";

export default function StarRating({
  value,
  onClick,
  renderEmptyStar,
  renderFilledStar,
}) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Star
        starValue={i}
        starRatingValue={value}
        key={i}
        onClick={onClick}
        renderEmptyStar={renderEmptyStar}
        renderFilledStar={renderFilledStar}
      />
    );
  }

  return <>{stars}</>;
}

function Star({
  starValue,
  starRatingValue,
  onClick,
  renderEmptyStar,
  renderFilledStar,
}) {
  function handleClick() {
    const clickedStarValue = starValue === starRatingValue ? 0 : starValue;
    onClick(clickedStarValue);
  }

  const arg = {
    onClick: handleClick,
  };

  return (
    <>
      {starValue <= starRatingValue
        ? renderFilledStar(arg)
        : renderEmptyStar(arg)}
    </>
  );
}
