import Box from "./components/Box";
import Instruction from "./components/Instruction";
import { useState, useEffect } from "react";
import Login from "./components/Login";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithCustomToken } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function App() {
  const [inst, setInst] = useState(false);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    if (code) {
      handleGitHubCallback(code);
    }
  }, []);

  const handleLogin = () => {
    const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_REDIRECT_URI;
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user`;

    window.location.href = githubAuthUrl;
  };

  const handleGitHubCallback = async (code) => {
    try {
      const response = await fetch("/login/github", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });

      const { customToken } = await response.json();

      await signInWithCustomToken(auth, customToken);

      setLogin(false);
      console.log("Logged in successfully");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

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
          <button className="btn" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
