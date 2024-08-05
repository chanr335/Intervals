export default function Button({ state, set }) {
  return (
    <div>
      <button className="btn" onClick={() => set(state + 1)}>
        Unison
        {state}
      </button>
      <button className="btn" onClick={() => set(state + 2)}>
        2nd
      </button>
      <button className="btn" onClick={() => set(state + 3)}>
        3rd
      </button>
      <button className="btn" onClick={() => set(state + 4)}>
        4th
      </button>
      <button className="btn" onClick={() => set(state + 5)}>
        5th
      </button>
      <button className="btn" onClick={() => set(state + 6)}>
        6th
      </button>
      <button className="btn" onClick={() => set(state + 7)}>
        7th
      </button>
      <button className="btn" onClick={() => set(state + 8)}>
        8th
      </button>
      <button className="btn" onClick={() => set(state + 9)}>
        9th
      </button>
      <button className="btn" onClick={() => set(state + 1)}>
        10th
      </button>
      <button className="btn" onClick={() => set(state + 11)}>
        11th
      </button>
      <button className="btn" onClick={() => set(state + 12)}>
        12th
      </button>
    </div>
  );
}
