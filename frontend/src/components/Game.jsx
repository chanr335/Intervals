import { useState, useEffect } from "react";
import Button from "./Button";
import * as Tone from "tone";
import listShift from "../utils/listShift";
import playInterval from "../utils/playInterval.js";

//Takes argument "gamemode" to determine which order to play notes
function Game({ gamemode, gameStart, setGameStart }) {
  const [rootNote, setRootNote] = useState(null);
  const [intNote, setIntNote] = useState(null);
  const [state, set] = useState(-1);
  const [ansStatus, setAnsStatus] = useState(null);
  const [ansStatusDisplay, setAnsStatusDisplay] = useState(null);
  const [newNoteList, setNewNoteList] = useState(null);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  //UseEffect watches changes in rootNote, intNote and newNoteList
  useEffect(() => {
    // Only play the interval if both rootNote and intNote are set
    if (rootNote !== null && intNote !== null) {
      //changes to the states will only happen when user moves to the next round
      //which will then play the notes
      playInterval(gamemode, newNoteList, rootNote, intNote);
      console.log(newNoteList, rootNote, intNote);
      console.log(newNoteList[rootNote], newNoteList[intNote]);
    }
    //Ensure that notes stop playing by next round
    return () => {
      Tone.Transport.stop();
      Tone.Transport.cancel();
    };
  }, [rootNote, intNote, newNoteList]);

  useEffect(() => {
    //0: False - game is ended/restarted
    //1: True - game is started
    //2: Pause - User is in the middle of picking button
    //If game has been started, play notes and put on pause
    if (gameStart === 1) {
      //Randomizes notes list
      let r = Math.floor(Math.random() * 12);
      setNewNoteList(listShift(r));

      setRootNote(0);
      const i = Math.floor(Math.random() * 12);
      setIntNote(i);
      setGameStart(2);
    }
    //Once ans Status has been changed, play new notes
    if (ansStatus === "Correct") {
      setGameStart(1);
      setAnsStatusDisplay("Correct");
      setAnsStatus(null);
    } else if (ansStatus === "Incorrect") {
      //If incorrect answer, reset the game
      setLives(lives - 1);
      if (lives === 0) {
        setGameStart(0);
        setAnsStatusDisplay("Incorrect");
      } else if (lives > 0) {
        setGameStart(1);
        setAnsStatusDisplay(null);
      }
      setAnsStatus(null);
      setScore(0);
    }
  }, [gameStart, ansStatus]);

  //Function that runs onclick for "Repeat" button
  function repeatClick() {
    playInterval(gamemode, newNoteList, rootNote, intNote);

    return () => {
      Tone.Transport.stop();
      Tone.Transport.cancel();
    };
  }

  return (
    //UI for function buttons and answer status
    <div>
      <div className="flex justify-between">
        <div className="flex bg-secondary rounded w-1/5 items-center justify-center font-semibold text-sm">
          <div>SCORE: {score}</div>
        </div>
        <div
          className={
            "flex items-center justify-center bg-secondary rounded w-1/5 border-2 border-white font-semibold text-sm"
          }
        >
          <span
            className={`text-center ${ansStatusDisplay === "Correct" ? "text-green-500" : "text-red-500"}`}
          >
            {ansStatusDisplay}
          </span>
        </div>
        <button className="btn btn-accent w-1/5 rounded" onClick={repeatClick}>
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
    </div>
  );
}

export default Game;
