import { useState, useEffect } from "react";
import Button from "./Button";
import * as Tone from "tone";
import listShift from "../utils/listShift";
import playInterval from "../utils/playInterval.js";

function Game() {
  const [rootNote, setRootNote] = useState(null);
  const [intNote, setIntNote] = useState(null);
  const [state, set] = useState(-1);
  const [ansStatus, setAnsStatus] = useState(null);

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

  const [newNoteList, setNewNoteList] = useState(notes);

  useEffect(() => {
    // Only play the interval if both rootNote and intNote are set
    if (rootNote !== null && intNote !== null) {
      playInterval(newNoteList, rootNote, intNote);
      console.log(newNoteList, rootNote, intNote);
      console.log(newNoteList[rootNote], newNoteList[intNote]);
    }
    return () => {
      Tone.Transport.stop();
      Tone.Transport.cancel();
    };
  }, [rootNote, intNote, newNoteList]);

  function nextClick() {
    let r = Math.floor(Math.random() * notes.length);
    setNewNoteList(listShift(r));

    setRootNote(0);
    const i = Math.floor(Math.random() * newNoteList.length);
    setIntNote(i);
  }

  function repeatClick() {
    playInterval(newNoteList, rootNote, intNote);

    return () => {
      Tone.Transport.stop();
      Tone.Transport.cancel();
    };
  }

  return (
    <div>
      <div className="flex justify-between">
        <button className="btn" onClick={nextClick}>
          {/* Next: {rootNote} , {intNote} */}
          Next
        </button>
        <div
          className={`font-extrabold ${
            ansStatus === "Correct" ? "text-green-500" : "text-red-500"
          }`}
        >
          {ansStatus}
        </div>
        <button className="btn" onClick={repeatClick}>
          Repeat
        </button>
      </div>
      <div className="flex mb-10" />
      <div className="flex bg-sky-50 card card-compact shadow-xl bg-secondary">
        <Button
          state={state}
          set={set}
          intNote={intNote}
          ansStatus={ansStatus}
          setAnsStatus={setAnsStatus}
        />
      </div>
    </div>
  );
}

export default Game;
