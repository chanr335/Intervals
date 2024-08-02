import { useState } from "react";
import * as Tone from "tone";
import Button from "./Button";

function Game() {
  //create a synth and connect it to the main output (your speakers)
  const synth = new Tone.Synth().toDestination();
  const notes = [
    "A",
    "A#",
    "B",
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "E#",
    "F",
    "F#",
    "G",
    "G#",
  ];

  function handleClick() {
    const rootNote = Math.floor(Math.random() * notes.length);
    const intNote = Math.floor(Math.random() * notes.length);
    // Start the transport
    Tone.getTransport().start();

    // Schedule the first note
    Tone.getTransport().schedule((time) => {
      synth.triggerAttackRelease(notes[rootNote] + "4", "8n", time);
    }, "+0"); // 0 seconds from now

    // Schedule the second note with a pause
    Tone.getTransport().schedule((time) => {
      synth.triggerAttackRelease(notes[intNote] + "4", "8n", time);
    }, "+1"); // 1 second from now

    return rootNote, intNote;
  }

  //Choose a random note from the list
  return (
    <div>
      <button className="btn" onClick={handleClick}>
        Next
      </button>
      <Button />
    </div>
  );
}

export default Game;
