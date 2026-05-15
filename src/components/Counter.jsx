import { useState } from "react";
import StepInput from "./StepInput";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increase = () => {
    setCount(count + step);
  };

  const decrease = () => {
    const newValue = count - step;

    if (newValue >= 0) {
      setCount(newValue);
    } else {
      setCount(0);
    }
  };

  return (
    <div className="counter-container">
      <h2
        style={{
          color: count >= 50 ? "red" : "black",
        }}
      >
        {count}
      </h2>

      <div className="buttons">
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
      </div>

      <StepInput step={step} setStep={setStep} />
    </div>
  );
}
