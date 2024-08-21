import Game from "./Game";
import Dropdown from "./Dropdown.jsx";
import "../index.css";
import { useState } from "react";
import Blurbox from "./Blurbox.jsx";

//Area for game and buttons
function Box() {
  //Gamemode state used to set Ascending or Descending gamemode
  const [gamemode, setGamemode] = useState("Ascending");
  //round, score
  const [scorecard, setScorecard] = useState([null, null]);
  //0: False
  //1: True
  //2: Pause
  const [gameStart, setGameStart] = useState(0);

  return (
    <div className="relative w-full h-1/2 flex flex-col justify-center items-center ">
      <div className="game-box relative bg-neutral-900">
        <Game
          gamemode={gamemode}
          gameStart={gameStart}
          setGameStart={setGameStart}
          scorecard={scorecard}
          setScorecard={setScorecard}
        />
        {gameStart === 0 && (
          <Blurbox setGameStart={setGameStart} scorecard={scorecard} />
        )}
      </div>
      <div>
        <Dropdown
          gamemode={gamemode}
          setGamemode={setGamemode}
          setGameStart={setGameStart}
        />
      </div>
    </div>
  );
}

export default Box;
