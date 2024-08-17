import Game from "./Game";
import Dropdown from "./Dropdown.jsx";
import "../index.css";
import { useState } from "react";
import Blurbox from "./Blurbox.jsx";

//Area for game and buttons
function Box() {
  //Gamemode state used to set Ascending or Descending gamemode
  const [gamemode, setGamemode] = useState("Ascending");
  const [gameStart, setGameStart] = useState(false);

  return (
    <div className="relative w-full h-1/2 flex flex-col justify-center items-center ">
      <div className="game-box relative">
        <Game gamemode={gamemode} gameStart={gameStart} />
        {!gameStart && <Blurbox setGameStart={setGameStart} />}
      </div>
      <div>
        <Dropdown gamemode={gamemode} setGamemode={setGamemode} />
      </div>
    </div>
  );
}

export default Box;
