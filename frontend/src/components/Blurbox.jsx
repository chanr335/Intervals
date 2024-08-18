function Blurbox({ setGameStart }) {
  return (
    <button
      className="absolute inset-0 h-full flex items-center justify-center opacity-90"
      onClick={() => setGameStart(1)}
    >
      <span className="absolute inset-0 h-full btn btn-primary blur-xl"></span>
      <span className="text-2xl relative text-white font-medium z-10">
        click to begin
      </span>
    </button>
  );
}

export default Blurbox;
