import buttonCheck from "../utils/buttonCheck";
import { useEffect } from "react";

export default function Button({ state, set, intNote }) {
  useEffect(() => {
    if (state !== 0) {
      handleClick(state, intNote);
    }
  }, [state]);

  function handleClick(state, intNote) {
    console.log({ state }, { intNote });

    const correct = buttonCheck(state, intNote);
    console.log({ correct });
    if (correct) {
      console.log("correct");
    } else {
      console.log("incorrect");
    }
    set(0);
    console.log({ state });
  }
  return (
    <div>
      <button className="btn" onClick={() => set(state + 1)}>
        Unison
      </button>
      <button className="btn" onClick={() => set(state + 2)}>
        2nd
      </button>
      <button className="btn" onClick={() => set(state + 3)}>
        3rd
      </button>
      <button className="btn" onClick={() => set(state + 4)}>
        4th
      </button>
      <button className="btn" onClick={() => set(state + 5)}>
        5th
      </button>
      <button className="btn" onClick={() => set(state + 6)}>
        6th
      </button>
      <button className="btn" onClick={() => set(state + 7)}>
        7th
      </button>
      <button className="btn" onClick={() => set(state + 8)}>
        8th
      </button>
      <button className="btn" onClick={() => set(state + 9)}>
        9th
      </button>
      <button className="btn" onClick={() => set(state + 10)}>
        10th
      </button>
      <button className="btn" onClick={() => set(state + 11)}>
        11th
      </button>
      <button className="btn" onClick={() => set(state + 12)}>
        12th
      </button>
    </div>
  );
}
