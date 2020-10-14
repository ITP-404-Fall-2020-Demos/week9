import React, { useState } from "react";
import "./App.css";
import StarRating from "./StarRating";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const [rating1, setRating1] = useState(2);

  return (
    <div>
      <StarRating value={rating1} onClick={setRating1}>
        {({ onClick, isFilled }) => {
          return (
            <button type="button" className="btn btn-link" onClick={onClick}>
              <FontAwesomeIcon
                icon={faStar}
                color={isFilled ? "yellow" : "#ddd"}
                size="3x"
              />
            </button>
          );
        }}
      </StarRating>
    </div>
  );
}

export default App;
