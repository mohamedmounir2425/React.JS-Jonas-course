import React, { useState } from "react";

export const ChallengeDataCounter = () => {
  const [range, setRange] = useState(1);
  const [count, setCount] = useState(0);
  const currentDate = new Date();
  const date = new Date(currentDate.toDateString());
  date.setDate(date.getDate() + count);
  const handleRangeChange = (e) => {
    const { value } = e.target;
    setRange(Number(value));
  };
  const handleInputChange = (e) => {
    const { value } = e.target;
    // const num = Number(value) === 0 ? 1 : Number(value)
    setCount(Number(value));
  };
  const decreaseDate = () => {
    setCount(count - range);
  };
  const increaseDate = () => {
    setCount(count + range);
  };

  const resetCount = () => {
    setRange(1)
    setCount(0);
  };
  console.log({ count });
  console.log(currentDate.toDateString());

  return (
    <div className="text-center">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={range}
          onChange={handleRangeChange}
        />
        {range}
      </div>
      <div>
        <button className="btn btn-danger" onClick={decreaseDate}>-</button>
        <input className="mx-2 " type="text" value={count}  onChange={handleInputChange} />
        <button className="btn btn-primary" onClick={increaseDate}>+</button>
      </div>

      <div>
        <span>
          {count == 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
            <span>    {date.toDateString()}</span>
      </div>
      {count !== 0 || range !== 1 ? 
      <button className="btn btn-info" onClick={resetCount}>reset</button>
    :null  
    
    }
    </div>
  );
};
