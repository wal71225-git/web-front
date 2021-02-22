import './App.css';
import React, { useState } from 'react'
function App() {
  const [c, setC] = useState(0)
  return (
    <div className="App">
      <span>{c}</span>
      <button onClick={()=>setC(c +1)}>+1</button>
    </div>
  );
}

export default App;
