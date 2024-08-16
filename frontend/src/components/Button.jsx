import buttonCheck from "../utils/buttonCheck";
import { useEffect } from "react";
import "../index.css";

export default function Button({
  state,
  set,
  intNote,
  ansStatus,
  setAnsStatus,
}) {
  useEffect(() => {
    if (state !== -1) {
      handleClick(state, intNote);
    }
  }, [state]);

  function handleClick(state, intNote) {
    const correct = buttonCheck(state, intNote);
    if (correct) {
      setAnsStatus("Correct");
      console.log("correct");
    } else {
      setAnsStatus("Incorrect");
      console.log("incorrect");
    }
    set(-1);
  }
  return (
    <div className="flex justify-center bg-secondary border border-secondary rounded">
      <div className="grid grid-cols-3 gap-3 justify-center">
        <button className="custom-btn" onClick={() => set(0)}>
          Unison
        </button>
        <button className="custom-btn" onClick={() => set(1)}>
          Minor Second
        </button>
        <button className="custom-btn" onClick={() => set(2)}>
          Major Second
        </button>
        <button className="custom-btn" onClick={() => set(3)}>
          Minor Third
        </button>
        <button className="custom-btn" onClick={() => set(4)}>
          Major Third
        </button>
        <button className="custom-btn" onClick={() => set(5)}>
          Minor Fourth
        </button>
        <button className="custom-btn" onClick={() => set(6)}>
          Perfect Fourth
        </button>
        <button className="custom-btn" onClick={() => set(7)}>
          Perfect Fifth
        </button>
        <button className="custom-btn" onClick={() => set(8)}>
          Minor Sixth
        </button>
        <button className="custom-btn" onClick={() => set(9)}>
          Major Sixth
        </button>
        <button className="custom-btn" onClick={() => set(10)}>
          Minor Seventh
        </button>
        <button className="custom-btn" onClick={() => set(11)}>
          Major Seventh
        </button>
        <button className="custom-btn" onClick={() => set(12)}>
          Octave
        </button>
      </div>
    </div>
  );
}
