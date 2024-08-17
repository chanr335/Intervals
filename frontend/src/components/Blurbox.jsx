function Blurbox({ setGameStart }) {
  return (
    <button
      className="absolute inset-0 h-full flex items-center justify-center"
      onClick={() => setGameStart(true)}
    >
      <span className="absolute inset-0 h-full btn btn-primary blur-md"></span>
      <span className="relative text-white font-medium z-10">
        click to start
      </span>
    </button>
  );
}

export default Blurbox;
