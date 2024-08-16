import { useState, useEffect } from "react";
import Button from "./Button";
import * as Tone from "tone";
import listShift from "../utils/listShift";
import playInterval from "../utils/playInterval.js";

function Game({ gamemode }) {
  const [rootNote, setRootNote] = useState(null);
  const [intNote, setIntNote] = useState(null);
  const [state, set] = useState(-1);
  const [ansStatus, setAnsStatus] = useState(null);
  const [newNoteList, setNewNoteList] = useState(null);
  const [score, setScore] = useState(0);

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
    let r = Math.floor(Math.random() * 12);
    setNewNoteList(listShift(r));

    setRootNote(0);
    const i = Math.floor(Math.random() * 12);
    setIntNote(i);
  }

  function repeatClick() {
    playInterval(gamemode, newNoteList, rootNote, intNote);

    return () => {
      Tone.Transport.stop();
      Tone.Transport.cancel();
    };
  }

  return (
    <div>
      <div className="flex justify-between">
        <button
          className="btn btn-wide btn-accent border-2 border-primary rounded"
          onClick={nextClick}
        >
          Next
        </button>
        <div
          className={`flex items-center font-extrabold ${
            ansStatus === "Correct" ? "text-green-500" : "text-red-500"
          }`}
        >
          {ansStatus}
        </div>
        <button
          className="btn btn-wide btn-accent rounded"
          onClick={repeatClick}
        >
          Repeat
        </button>
      </div>
      <div className="flex mb-10" />
      <div className="flex bg-sky-50 card card-compact shadow-xl bg-secondary">
        <Button
          state={state}
          set={set}
          intNote={intNote}
          setAnsStatus={setAnsStatus}
          score={score}
          setScore={setScore}
        />
      </div>
      <div className="flex justify-end items-end font-extrabold">
        <div>{score}</div>
      </div>
    </div>
  );
}

export default Game;
