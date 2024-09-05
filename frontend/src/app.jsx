// import { useState } from 'react'
import Box from "./components/Box";
import Instruction from "./components/Instruction";
import { useState } from "react";
import Login from "./components/Login";

function App() {
  const [inst, setInst] = useState(false);
  const [login, setLogin] = useState(false);

  return (
    <>
      <div data-theme="black"></div>
      <div className="flex flex-col bg-[#131518] justify-center items-center min-h-screen">
        <div className="flex">
          {inst && (
            <div>
              <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
              <Instruction inst={inst} setInst={setInst} />
            </div>
          )}
          {login && (
            <div>
              <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
              <Login login={login} setLogin={setLogin} />
            </div>
          )}

          <div className="flex justify-even items-center mb-4 relative">
            <div className="font-extrabold text-6xl">intervals</div>

            <button
              className="flex justify-center items-center w-6 h-6 text-md font-bold text-white bg-primary rounded-full border-2 border-white ml-4 absolute right-0 transform translate-x-12"
              onClick={() => setInst(!inst)}
              style={{ marginTop: "0.7em" }}
            >
              ?
            </button>
          </div>
        </div>
        <Box />
        <div className="transform translate-y-1">
          <button className="btn" onClick={() => setLogin(!login)}>
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
