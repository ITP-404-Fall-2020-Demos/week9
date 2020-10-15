import React from "react";
import { render, fireEvent } from "@testing-library/react";
import StarRating from "./StarRating";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

test("rendering 5 stars by default", () => {
  const rating = 2;
  const onClick = () => {};

  const { getAllByTestId } = render(
    <StarRating value={rating} onClick={onClick}>
      {({ onClick, isFilled }) => {
        return (
          <button
            type="button"
            className="btn btn-link"
            onClick={onClick}
            data-testid="star"
          >
            <FontAwesomeIcon
              icon={faStar}
              color={isFilled ? "yellow" : "#ddd"}
              size="3x"
              data-testid={isFilled ? "filled-star" : "empty-star"}
            />
          </button>
        );
      }}
    </StarRating>
  );

  expect(getAllByTestId("star").length).toBe(5);
});

test("rendering 5 empty stars", () => {
  const rating = 0;
  const onClick = () => {};

  const { getAllByTestId } = render(
    <StarRating value={rating} onClick={onClick}>
      {({ onClick, isFilled }) => {
        return (
          <button
            type="button"
            className="btn btn-link"
            onClick={onClick}
            data-testid="star"
          >
            <FontAwesomeIcon
              icon={faStar}
              color={isFilled ? "yellow" : "#ddd"}
              size="3x"
              data-testid={isFilled ? "filled-star" : "empty-star"}
            />
          </button>
        );
      }}
    </StarRating>
  );

  expect(getAllByTestId("empty-star").length).toBe(5);
});

test("rendering 5 filled stars", () => {
  const rating = 5;
  const onClick = () => {};

  const { getAllByTestId } = render(
    <StarRating value={rating} onClick={onClick}>
      {({ onClick, isFilled }) => {
        return (
          <button
            type="button"
            className="btn btn-link"
            onClick={onClick}
            data-testid="star"
          >
            <FontAwesomeIcon
              icon={faStar}
              color={isFilled ? "yellow" : "#ddd"}
              size="3x"
              data-testid={isFilled ? "filled-star" : "empty-star"}
            />
          </button>
        );
      }}
    </StarRating>
  );

  expect(getAllByTestId("filled-star").length).toBe(5);
});

test("rendering 3 filled stars and 2 empty stars", () => {
  const rating = 3;
  const onClick = () => {};

  const { getAllByTestId } = render(
    <StarRating value={rating} onClick={onClick}>
      {({ onClick, isFilled }) => {
        return (
          <button
            type="button"
            className="btn btn-link"
            onClick={onClick}
            data-testid="star"
          >
            <FontAwesomeIcon
              icon={faStar}
              color={isFilled ? "yellow" : "#ddd"}
              size="3x"
              data-testid={isFilled ? "filled-star" : "empty-star"}
            />
          </button>
        );
      }}
    </StarRating>
  );

  expect(getAllByTestId("filled-star").length).toBe(3);
  expect(getAllByTestId("empty-star").length).toBe(2);
});

test("clicking on an empty star", () => {
  const rating = 1;
  const onClick = jest.fn();

  const { getAllByTestId } = render(
    <StarRating value={rating} onClick={onClick}>
      {({ onClick, isFilled }) => {
        return (
          <button
            type="button"
            className="btn btn-link"
            onClick={onClick}
            data-testid="star"
          >
            <FontAwesomeIcon
              icon={faStar}
              color={isFilled ? "yellow" : "#ddd"}
              size="3x"
              data-testid={isFilled ? "filled-star" : "empty-star"}
            />
          </button>
        );
      }}
    </StarRating>
  );

  const thirdStar = getAllByTestId("star")[2];
  fireEvent.click(thirdStar);

  expect(onClick).toHaveBeenCalledWith(3);
});

test("clicking on a filled star", () => {
  const rating = 3;
  const onClick = jest.fn();

  const { getAllByTestId } = render(
    <StarRating value={rating} onClick={onClick}>
      {({ onClick, isFilled }) => {
        return (
          <button
            type="button"
            className="btn btn-link"
            onClick={onClick}
            data-testid="star"
          >
            <FontAwesomeIcon
              icon={faStar}
              color={isFilled ? "yellow" : "#ddd"}
              size="3x"
              data-testid={isFilled ? "filled-star" : "empty-star"}
            />
          </button>
        );
      }}
    </StarRating>
  );

  const thirdStar = getAllByTestId("star")[2];
  fireEvent.click(thirdStar);

  expect(onClick).toHaveBeenCalledWith(0);
});

test("clicking on a filled star and rerendering", () => {
  let rating = 1;

  const onClick = (newRating) => {
    rating = newRating;
  };

  const { rerender, getAllByTestId } = render(
    <StarRating value={rating} onClick={onClick}>
      {({ onClick, isFilled }) => {
        return (
          <button
            type="button"
            className="btn btn-link"
            onClick={onClick}
            data-testid="star"
          >
            <FontAwesomeIcon
              icon={faStar}
              color={isFilled ? "yellow" : "#ddd"}
              size="3x"
              data-testid={isFilled ? "filled-star" : "empty-star"}
            />
          </button>
        );
      }}
    </StarRating>
  );

  expect(getAllByTestId("filled-star").length).toBe(1);
  expect(getAllByTestId("empty-star").length).toBe(4);

  const thirdStar = getAllByTestId("star")[2];
  fireEvent.click(thirdStar);
  rerender(
    <StarRating value={rating} onClick={onClick}>
      {({ onClick, isFilled }) => {
        return (
          <button
            type="button"
            className="btn btn-link"
            onClick={onClick}
            data-testid="star"
          >
            <FontAwesomeIcon
              icon={faStar}
              color={isFilled ? "yellow" : "#ddd"}
              size="3x"
              data-testid={isFilled ? "filled-star" : "empty-star"}
            />
          </button>
        );
      }}
    </StarRating>
  );

  expect(getAllByTestId("filled-star").length).toBe(3);
  expect(getAllByTestId("empty-star").length).toBe(2);
});

// TDD example
test("rendering a specified number of stars", () => {
  const rating = 2;
  const onClick = () => {};

  const { getAllByTestId } = render(
    <StarRating starCount={10} value={rating} onClick={onClick}>
      {({ onClick, isFilled }) => {
        return (
          <button
            type="button"
            className="btn btn-link"
            onClick={onClick}
            data-testid="star"
          >
            <FontAwesomeIcon
              icon={faStar}
              color={isFilled ? "yellow" : "#ddd"}
              size="3x"
              data-testid={isFilled ? "filled-star" : "empty-star"}
            />
          </button>
        );
      }}
    </StarRating>
  );

  expect(getAllByTestId("star").length).toBe(10);
});
