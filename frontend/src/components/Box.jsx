import Button from "./Button";
import Game from "../utils/Game";

export default function Box() {
  return (
    <div className="w-full h-screen flex justify-center p-52">
      <div className="card card-compact bg-base-100 h-3/5 w-5/6 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Game</h2>
          <div className="card-actions justify-end">
            <Game />
          </div>
        </div>
      </div>
    </div>
  );
}
