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
    // Start the transport
    Tone.Transport.start();

    // Schedule the first note
    Tone.Transport.schedule((time) => {
      synth.triggerAttackRelease("C4", "8n", time);
    }, 0); // 0 seconds from now

    // Schedule the second note with a pause
    Tone.Transport.schedule((time) => {
      synth.triggerAttackRelease("G4", "8n", time);
    }, "+1"); // 1 second from now
  }

  //Choose a random note from the list
  return (
    <button className="btn" onClick={handleClick}>
      Next
    </button>
  );
}

export default Game;
