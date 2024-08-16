import Game from "./Game";
import "../index.css";

export default function Box() {
  return (
    <div className="w-full h-screen flex justify-center p-52">
      <div className="game-box">
        <h2 className="card-title">Ascending</h2>
        <Game />
      </div>
    </div>
  );
}
