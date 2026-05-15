export default function StepInput({ step, setStep }) {
  return (
    <div className="step-box">
      <label>Крок лічильника: </label>

      <input
        type="number"
        min="1"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
    </div>
  );
}
