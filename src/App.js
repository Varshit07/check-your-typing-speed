import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Check your typing speed</h1>
      <textarea rows = "8" cols="60" placeholder="Click Start button to start typing" />
      <h2>Time Remaining: ---</h2>
      <button>Start</button>
      <h2>Words Typed: ---</h2>
    </div>
  );
}

export default App;
