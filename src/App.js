import React, {useEffect, useState, useRef} from 'react';
import './App.css';

function App() {
  const INITIAL_TIME = 30;

  const [textTyped, setTextTyped] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(INITIAL_TIME);
  const [shouldTimeCountdown, setShouldTimeCountdown] = useState(false);
  const [wordsTyped, setWordsTyped] = useState(null);
  const textAreaEl = useRef(null);

  function handleOnChange(event) {
    setTextTyped(event.target.value);
  }

  function startTyping() {
    setTextTyped("");
    setShouldTimeCountdown(true);
    setTimeRemaining(INITIAL_TIME);
    setWordsTyped(null);
    textAreaEl.current.disabled = false;
    textAreaEl.current.placeholder = ``;
    textAreaEl.current.focus();
  }


  useEffect(() => {

    if(shouldTimeCountdown && timeRemaining > 0) {
      setTimeout(function(){setTimeRemaining(timeRemaining => timeRemaining - 1)}, 1000);
    }
    else if(timeRemaining === 0) {
      setWordsTyped(textTyped.trim().split(" ").filter(word => word !== "").length);
      setShouldTimeCountdown(false);
    }
  }, [timeRemaining, shouldTimeCountdown]);


  return (
    <div className="APP">
      <h1 className="page-heading">Check your typing speed</h1>
      <textarea ref = {textAreaEl} className="text-area-for-typing" rows = "20" cols="120" disabled={!shouldTimeCountdown} placeholder="Click Start button to start typing" value={textTyped} onChange={handleOnChange}/>
      <h2>Time Remaining: {timeRemaining} seconds</h2>
      <button className="toggle-game" disabled={shouldTimeCountdown} onClick={startTyping}>Start</button>
      <h2>{( wordsTyped !== null) && `Typing Speed: ${wordsTyped * 2} words per minute`}</h2>
    </div>
  );
}

export default App;
