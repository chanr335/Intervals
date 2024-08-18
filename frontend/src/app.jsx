// import { useState } from 'react'
import Box from "./components/Box";

function App() {
  return (
    <>
      <div data-theme="black"></div>
      <div className="flex flex-col bg-[#131518] justify-center items-center min-h-screen">
        <div className="font-extrabold text-6xl mb-4">intervals</div>
        <Box />
      </div>
    </>
  );
}

export default App;
