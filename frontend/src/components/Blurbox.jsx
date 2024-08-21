function Blurbox({ setGameStart, scorecard }) {
  return (
    <button
      className="absolute inset-0 h-full flex items-center justify-center opacity-95"
      onClick={() => setGameStart(1)}
    >
      <span className="absolute inset-0 h-full btn btn-primary blur-sm"></span>
      <div className="relative flex flex-col items-center text-2xl text-white font-medium z-10">
        <div className="mb-2">
          <div>Game Over!</div>
          <div>Rounds: {scorecard[0]}</div>
          <div>Score: {scorecard[1]}</div>
        </div>
        <span>click to start!</span>
      </div>
    </button>
  );
}

export default Blurbox;
