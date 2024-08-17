import Game from "./Game";
import Dropdown from "./Dropdown.jsx";
import "../index.css";
import { useState } from "react";

function Box() {
  const [gamemode, setGamemode] = useState("Ascending");

  return (
    <div className="w-full h-1/2 flex flex-col justify-center items-center">
      <div className="game-box">
        <Game gamemode={gamemode} />
      </div>

      <div>
        <Dropdown gamemode={gamemode} setGamemode={setGamemode} />
      </div>
    </div>
  );
}

export default Box;
