import { useState } from 'react';
import Stoic from "./quotes/stoicQuotes";
import Heroic from './quotes/heroicQuotes'; 
import './App.css'

function App() {
  const [showStoic, setShowStoic] = useState(true);

  return (
    <>
    <div className="App">
      <h1>Quote Generator</h1>
      <div className="toggle-buttons">
        <button 
          onClick={() => setShowStoic(true)} 
          style={{ fontWeight: showStoic ? 'bold' : 'normal' }}
        >
          Stoic Quotes
        </button>
        <button 
          onClick={() => setShowStoic(false)} 
          style={{ fontWeight: !showStoic ? 'bold' : 'normal' }}
        >
          Heroic Quotes
        </button>
      </div>

      {showStoic ? <Stoic /> : <Heroic />}
    </div>
    </>
  )
}



export default App