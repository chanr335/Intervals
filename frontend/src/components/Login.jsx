import { useState } from "react";

function Login({ login, setLogin }) {
  // State to hold the person's address
  const [address, setAddress] = useState("");

  const handleSubmit = () => {
    // You can handle the submit logic here, for example, by logging the address to the console
    console.log("Submitted address:", address);
    // Add any additional actions you want to perform on form submission
  };

  return (
    <div className="flex flex-col w-1/3 h-2/3 rounded bg-primary border-2 border-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Login</h2>
        <button
          className="text-white font-bold text-lg"
          onClick={() => setLogin(!login)}
        >
          X
        </button>
      </div>
      <input
        type="text"
        className="mb-4 p-2 rounded border border-white text-black"
        placeholder="Enter your address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button
        className="bg-white text-primary font-bold py-2 px-4 rounded"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default Login;
