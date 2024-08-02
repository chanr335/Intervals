import { useState } from "react";

export default function Button() {
  const [state1, set1] = useState(0);
  const [state2, set2] = useState(0);
  const [state3, set3] = useState(0);
  const [state4, set4] = useState(0);
  const [state5, set5] = useState(0);
  const [state6, set6] = useState(0);
  const [state7, set7] = useState(0);
  const [state8, set8] = useState(0);
  const [state9, set9] = useState(0);
  const [state10, set10] = useState(0);
  const [state11, set11] = useState(0);
  const [state12, set12] = useState(0);
  const [state13, set13] = useState(0);

  return (
    <div>
      <button className="btn" onClick={() => set1(state1 + 1)}>
        Unison
      </button>
      {state1}
      <button className="btn" onClick={() => set2(state2 + 1)}>
        2nd
      </button>
      {state2}
      <button className="btn" onClick={() => set3(state3 + 1)}>
        3rd
      </button>
      {state3}
      <button className="btn" onClick={() => set4(state4 + 1)}>
        4th
      </button>
      {state4}
      <button className="btn" onClick={() => set5(state5 + 1)}>
        5th
      </button>
      {state5}
      <button className="btn" onClick={() => set6(state6 + 1)}>
        6th
      </button>
      {state6}
      <button className="btn" onClick={() => set7(state7 + 1)}>
        7th
      </button>
      {state7}
      <button className="btn" onClick={() => set8(state8 + 1)}>
        8th
      </button>
      {state8}
      <button className="btn" onClick={() => set9(state9 + 1)}>
        9th
      </button>
      {state9}
      <button className="btn" onClick={() => set10(state10 + 1)}>
        10th
      </button>
      {state10}
      <button className="btn" onClick={() => set11(state11 + 1)}>
        11th
      </button>
      {state11}
      <button className="btn" onClick={() => set12(state12 + 1)}>
        12th
      </button>
      {state12}
      <button className="btn" onClick={() => set13(state13 + 1)}>
        13th
      </button>
      {state13}
    </div>
  );
}
