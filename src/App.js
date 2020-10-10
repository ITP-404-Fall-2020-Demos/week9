import React, { useState } from "react";
import StarRating from "./StarRating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  const [rating1, setRating1] = useState(2);
  const size = "3x";

  return (
    <div>
      <StarRating
        value={rating1}
        onClick={setRating1}
        renderEmptyStar={(props) => {
          return (
            <button
              type="button"
              className="btn btn-link"
              onClick={props.onClick}
            >
              <FontAwesomeIcon icon={faStar} color="#bbb" size={size} />
            </button>
          );
        }}
        renderFilledStar={(props) => {
          return (
            <button
              type="button"
              className="btn btn-link"
              onClick={props.onClick}
            >
              <FontAwesomeIcon icon={faStar} color="yellow" size={size} />
            </button>
          );
        }}
      />
    </div>
  );
}

export default App;
