import Game from "./Game";

export default function Box() {
  return (
    <div className="w-full h-screen flex justify-center p-52">
      <div className="card card-compact bg-base-100 h-4/5 w-5/6 shadow-xl">
        <h2 className="card-title">Name the Interval!</h2>
        <div className="card-body">
          <Game />
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
}
