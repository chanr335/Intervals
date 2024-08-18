//Takes arguments for gamemode and setGamemode,
//allowing user to pick either
function Dropdown({ gamemode, setGamemode, setGameStart }) {
  return (
    <details className="dropdown">
      <summary className="btn m-1">{gamemode}</summary>
      <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
        <li
          onClick={() => {
            setGamemode("Ascending");
            setGameStart(0);
          }}
        >
          <a>Ascending</a>
        </li>
        <li
          onClick={() => {
            setGamemode("Descending");
            setGameStart(0);
          }}
        >
          <a>Descending</a>
        </li>
      </ul>
    </details>
  );
}

export default Dropdown;
