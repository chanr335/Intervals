// import { useState } from 'react'
import Box from "./components/Box";

function App() {
  return (
    <>
      <div data-theme="black"></div>
      <div className="flex justify-center font-extrabold text-6xl p-2">
        intervals
      </div>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <Box />
      </div>
    </>
  );
}

export default App;
