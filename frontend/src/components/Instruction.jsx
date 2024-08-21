function Instruction({ inst, setInst }) {
  return (
    <div className="flex flex-col w-1/3 h-2/3 rounded bg-primary border-2 border-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Instructions</h2>
        <button
          className="text-white font-bold text-lg"
          onClick={() => setInst(!inst)}
        >
          X
        </button>
      </div>
      <div className="flex flex-col text-left space-y-4 text-md">
        <div>
          <strong>Start the Game</strong>
          <br />
          Click "click to start!" to begin the game. A musical interval will
          play for you to identify.
        </div>
        <div>
          <strong>Guess the Interval</strong>
          <br />
          Use your musical knowledge or make an educated guess to identify the
          interval. The game will indicate if your guess is correct or incorrect
          in the "Rounds" box at the top center. Correct answers increase your
          score by 1.
        </div>
        <div>
          <strong>Lives and Game Over</strong>
          <br />
          Each incorrect guess results in a loss of life. The game continues
          until you lose all your lives. When that happens, it’s game over!
        </div>
        <div>
          <strong>Replay the Interval</strong>
          <br />
          If you didn’t hear the interval clearly, click the "Repeat" button to
          listen again.
        </div>
        <div>
          <strong>Choose Interval Type</strong>
          <br />
          Select between ascending or descending intervals using the drop-down
          menu at the bottom of the screen.
        </div>
      </div>
    </div>
  );
}

export default Instruction;
