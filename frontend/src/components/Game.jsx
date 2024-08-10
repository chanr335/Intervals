import { useState } from "react";
import * as Tone from "tone";
import Button from "./Button";
import listShift from "../utils/listShift";

function Game() {
  const synth = new Tone.Synth().toDestination();
  const [rootNote, setRootNote] = useState(null);
  const [intNote, setIntNote] = useState(null);
  const [state, set] = useState(0);

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
    const newNoteList = listShift(rootNote);

    rootNote = 0;
    let intNote = Math.floor(Math.random() * newNoteList.length);

    setRootNote(rootNote);
    setIntNote(intNote);

    console.log(rootNote, intNote);
    console.log(newNoteList[rootNote], newNoteList[intNote]);

    Tone.getTransport().start();
    //Play the notes
    Tone.getTransport().schedule((time) => {
      synth.triggerAttackRelease(newNoteList[rootNote] + "4", "8n", time);
    }, "+0"); // 0 seconds from now

    Tone.getTransport().schedule((time) => {
      synth.triggerAttackRelease(newNoteList[intNote] + "5", "8n", time);
    }, "+1"); // 1 second from now
  }

  return (
    <div>
      <button className="btn" onClick={handleClick}>
        {/* Next: {rootNote} , {intNote} */}
        Next
      </button>
      <div className="flex mb-10" />
      <div className="flex bg-sky-50 card card-compact shadow-xl">
        <Button state={state} set={set} intNote={intNote} />
      </div>
    </div>
  );
}

export default Game;
