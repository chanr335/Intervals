// import { useState } from 'react'

import NavBar from "./components/NavBar";
import Box from "./components/Box";

function App() {
  return (
    <>
      <div className="flex justify-start bg-gray-500">
        <NavBar />
      </div>

      <div className="flex justify-center items-center min-h-screen">
        <Box></Box>
      </div>
    </>
  );
}

export default App;
