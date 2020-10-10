import React, { useState } from "react";
import StarRating from "./StarRating";
import "./App.css";

function App() {
  const [rating1, setRating1] = useState(2);

  return (
    <div>
      <StarRating value={rating1} onClick={setRating1} />
    </div>
  );
}

export default App;
