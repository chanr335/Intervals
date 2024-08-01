import { useState } from "react";
import * as Tone from "tone";

export default function Button() {
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);
  const [state3, setState3] = useState(0);
  const [state4, setState4] = useState(0);

  function handleClick() {
    //create a synth and connect it to the main output (your speakers)
    const synth = new Tone.Synth().toDestination();

    //play a middle 'C' for the duration of an 8th note
    synth.triggerAttackRelease("C4", "8n");
    setState1(state1 + 1);
  }

  return (
    <div>
      <button className="btn" onClick={handleClick}>
        Button
      </button>
      {state1}
      <button className="btn" onClick={() => setState2(state2 + 1)}>
        Button
      </button>
      {state2}
      <button className="btn" onClick={() => setState3(state3 + 1)}>
        Button
      </button>
      {state3}
      <button className="btn" onClick={() => setState4(state4 + 1)}>
        Button
      </button>
      {state4}
    </div>
  );
}
