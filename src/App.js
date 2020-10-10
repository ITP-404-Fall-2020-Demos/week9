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
        renderStar={({ onClick, isFilled }) => {
          return (
            <button type="button" className="btn btn-link" onClick={onClick}>
              <FontAwesomeIcon
                icon={faStar}
                color={isFilled ? "yellow" : "#bbb"}
                size={size}
              />
            </button>
          );
        }}
      />
    </div>
  );
}

export default App;
