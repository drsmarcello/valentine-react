// App.jsx
import { useState } from "react";

import CustomHeart from "./assets/file.png";

function App() {
  const [message, setMessage] = useState("");

  const handleYesClick = () => {
    setMessage("Ich freue mich, mein Schatz! I Love You ❤️ ");
  };

  const handleNoClick = () => {
    setMessage("Pech, bist du trotzdem!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-pink-600 to-red-900">
      <div className="bg-white rounded-lg shadow-2xl p-8 text-center max-w-sm border-4 border-pink-500">
        <div className="text-5xl mb-6">
          <img src={CustomHeart} alt="Custom Heart" className="mx-auto w-64 h-64" />
        </div>
        <h1 className="text-3xl font-extrabold mb-6 text-pink-700">
          Cinderella, willst du mein Valentinsdate sein?
        </h1>
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={handleYesClick}
            className="bg-pink-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-pink-600 transition duration-300 focus:outline-none"
          >
            Yes
          </button>
          <button
            onClick={handleNoClick}
            className="bg-red-800 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-red-900 transition duration-300 focus:outline-none"
          >
            No
          </button>
        </div>
        {message && <p className="mt-6 text-lg font-medium text-gray-800">{message}</p>}
      </div>
    </div>
  );
}

export default App;
