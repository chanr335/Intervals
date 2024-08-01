import { useState } from "react";
import * as Tone from "tone";

function Game() {
  //create a synth and connect it to the main output (your speakers)
  const synth = new Tone.Synth().toDestination();
  const notes = ["A", "B", "C", "D", "E", "F", "G"];

  //create a "next" button that will sing a root note and interval
  const [active, setState] = useState(false);

  function handleClick() {
    setState(!active);
    console.log(active);
    if (active === true) {
      synth.triggerAttackRelease("C4", "8n");
      synth.triggerAttackRelease("G3", "8n");
    }
  }

  //Choose a random note from the list
  return (
    <button className="btn" onClick={handleClick}>
      Next
    </button>
  );
}

export default Game;
