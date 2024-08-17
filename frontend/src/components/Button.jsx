import buttonCheck from "../utils/buttonCheck";
import { useEffect } from "react";
import "../index.css";

//Function that displays Grid of buttons
/*
 * state: state of the answer
 * set: sets the state of the answer
 * intNote: the true interval note -> the answer
 * setAnsStatus: sets the answer status to correct or incorrect, refers to "Game"
 * score: the user's score
 * setScore: setting the user's score
 */
export default function Button({
  state,
  set,
  intNote,
  setAnsStatus,
  score,
  setScore,
}) {
  useEffect(() => {
    if (state !== -1) {
      handleClick(state, intNote);
    }
  }, [state]);

  function handleClick(state, intNote) {
    //checks if the answer set by the user is correct
    const correct = buttonCheck(state, intNote);
    if (correct) {
      setAnsStatus("Correct");
      setScore(score + 1);
    } else {
      setAnsStatus("Incorrect");
    }
    //set the state to -1 to reset the answer for the next round
    set(-1);
  }
  return (
    <div className="flex justify-center bg-secondary border-4 border-primary rounded">
      <div className="grid grid-cols-3 gap-3 justify-center">
        <button className="custom-btn" onClick={() => set(0)}>
          Unison
        </button>
        <button className="custom-btn" onClick={() => set(1)}>
          Minor Second
        </button>
        <button className="custom-btn" onClick={() => set(2)}>
          Major Second
        </button>
        <button className="custom-btn" onClick={() => set(3)}>
          Minor Third
        </button>
        <button className="custom-btn" onClick={() => set(4)}>
          Major Third
        </button>
        <button className="custom-btn" onClick={() => set(5)}>
          Minor Fourth
        </button>
        <button className="custom-btn" onClick={() => set(6)}>
          Perfect Fourth
        </button>
        <button className="custom-btn" onClick={() => set(7)}>
          Perfect Fifth
        </button>
        <button className="custom-btn" onClick={() => set(8)}>
          Minor Sixth
        </button>
        <button className="custom-btn" onClick={() => set(9)}>
          Major Sixth
        </button>
        <button className="custom-btn" onClick={() => set(10)}>
          Minor Seventh
        </button>
        <button className="custom-btn" onClick={() => set(11)}>
          Major Seventh
        </button>
        <div></div>
        <button className="custom-btn" onClick={() => set(12)}>
          Octave
        </button>
        <div></div>
      </div>
    </div>
  );
}
