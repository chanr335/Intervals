function Instruction({ inst, setInst }) {
  return (
    <div className="flex flex-col w-1/3 h-1/2 rounded bg-primary border-2 border-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Instructions</h2>
        <button
          className="text-white font-bold text-lg"
          onClick={() => setInst(!inst)}
        >
          X
        </button>
      </div>
      <div className="flex flex-col text-left space-y-4">
        <div className="text-md"></div>
        <div className="text-md">1. Do this...</div>
        <div className="text-md">2. Then do that...</div>
      </div>
    </div>
  );
}

export default Instruction;
