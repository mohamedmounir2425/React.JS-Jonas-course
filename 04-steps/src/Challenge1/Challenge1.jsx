import React, { useState } from "react";

export const Challenge1 = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date("june 27 2027")

    date.setDate(date.getDate() + count)
    


  return (
    <>
      <div className="text-center mt-5">
        <div>
          <button
            onClick={() => {
              if (count > 1) setStep(step - 1);
            }}
            className="btn btn-danger"
          >
            -
          </button>
          <span className="mx-2 fs-5 fw-semibold">Step: {step}</span>
          <button onClick={() => setStep(step + 1)} className="btn btn-primary">
            +
          </button>
        </div>
        <div className="my-3">
          <button onClick={() => setCount(count - step)} className="btn btn-danger">
            -
          </button>
          <span className="mx-2 fs-5 fw-semibold">Count: {count}</span>
          <button onClick={() => setCount(count + step)} className="btn btn-primary">
            +
          </button>
        </div>
              <span>
                  {count == 0 ? 'Today is ': count > 0 ? count +" days from today is " : count + " days ago was "}
        </span>
              <span>{ date.toDateString()}</span>
       
      </div>
    </>
  );
};


