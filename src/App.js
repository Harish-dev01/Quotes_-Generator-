import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import './index.css'; // Import the Tailwind CSS file

function App() {
  const [gen, setGen] = useState('Please click the button to get advice');

  const getAdvice = async () => {
    try {
      const response = await axios.get('https://api.adviceslip.com/advice'); 
      setGen(response.data.slip.advice); // Update state with advice message
    } catch (error) {
      console.error('Error fetching advice:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-400">
      <h3 className="text-lg md:text-xl font-semibold text-center text-white mb-4">
        {gen}
      </h3>
      <button 
        onClick={getAdvice} 
        className="px-6 py-2 bg-orange-900 text-white font-semibold rounded-lg hover:bg-orange-800 transition duration-200"
      >
        Get a Piece Of Advice
      </button>
    </div>
  );
}

export default App;