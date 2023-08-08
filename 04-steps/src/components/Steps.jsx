import React, { useState } from 'react'
const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];
  
export const Steps = () => {
    const [step, setStep] = useState(2);
    const [isOpen, setIsOpen] = useState(true);
    const handlePrevious = () => {
      if (step > 1) setStep(step - 1);
    };
    const handleNext = () => {
      if (step < 3) {
        setStep(step + 1);
        setStep(step + 1);
      }
    };
  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <StepMessage step={step}>
          {messages[step - 1]}
          </StepMessage>
         
          <div className="buttons">
            <Button bgcolor={'#7950f2'} color={'#fff'} onClick={handlePrevious}>
              👈 Previous 
            </Button>
            <Button bgcolor={'#7950f2'} color={'#fff'} onClick={handleNext}>
              Next 👉
            </Button>

            
            
        
          </div>
        </div>
      )}
    </>
  )
}
function  Button({onClick, bgcolor, color, children}) {
  return (
    <button
    onClick={onClick}
    style={{ backgroundColor: bgcolor, color }}
  >
    {children}
  </button>
  )
}

function StepMessage({ step , children}) {
  return (
    <p className="message">
    Step {step} : {children}
  </p>
  )
}