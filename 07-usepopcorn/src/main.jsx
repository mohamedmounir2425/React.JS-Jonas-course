import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { StarRating } from './StarRating';
import { Test } from './Test';
// import App from './App.jsx'
// import './index.css'
function TestRating() {
  const [movieRating, setMovieRating] = useState(0)
  return (
    <div>
      <StarRating color="blue" onSetRating={ setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>

  )
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={["Trible", "Bad", "Okay", "Good", "Excellent"]}
    />
    <StarRating maxRating={5} color={"red"} size={24} defaultRating={3} />

    <TestRating/>
  </React.StrictMode>
);
