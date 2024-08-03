import { useState } from "react";
import * as Tone from "tone";
import Button from "./Button";
import listShift from "../utils/listShift";

function Game() {
  //create a synth and connect it to the main output (your speakers)
  const synth = new Tone.Synth().toDestination();

  const [rootNote, setRootNote] = useState(null);
  const [intNote, setIntNote] = useState(null);

  const notes = [
    "A",
    "A#",
    "B",
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
  ];

  function handleClick() {
    let rootNote = Math.floor(Math.random() * notes.length);
    console.log(rootNote);

    const newNoteList = listShift(rootNote);

    console.log(newNoteList);
    rootNote = 0;
    let intNote = Math.floor(Math.random() * newNoteList.length);
    console.log(intNote);

    setRootNote(rootNote);
    setIntNote(intNote);

    // Start the transport
    Tone.getTransport().start();

    // Schedule the first note
    Tone.getTransport().schedule((time) => {
      synth.triggerAttackRelease(newNoteList[rootNote] + "4", "8n", time);
    }, "+0"); // 0 seconds from now

    // Schedule the second note with a pause
    Tone.getTransport().schedule((time) => {
      synth.triggerAttackRelease(newNoteList[intNote] + "4", "8n", time);
    }, "+1"); // 1 second from now
  }

  //Choose a random note from the list
  return (
    <div>
      <button className="btn" onClick={handleClick}>
        Next: {rootNote} , {intNote}
      </button>
      <Button />
    </div>
  );
}

export default Game;
