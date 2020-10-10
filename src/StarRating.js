import React from "react";
import PropTypes from "prop-types";

export default function StarRating({ value, onClick, children: renderStar }) {
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

StarRating.propTypes = {
  value: PropTypes.number,
  onClick: PropTypes.func,
  children: PropTypes.func,
};
