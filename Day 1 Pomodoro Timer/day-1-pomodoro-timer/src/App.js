import logo from './logo.svg';
import './App.css';
import React, { useRef, useState } from 'react'

function padTime(time) {
  return time.toString().padStart(2, '0');
}

function App() {
  const [timeLeft, setTimeLeft] = useState(10);
  const minutes = padTime(Math.floor(timeLeft / 60));
  const seconds = padTime(Math.floor(timeLeft - minutes * 60));
  const [title, setTitle] = useState('Let the CountDown Begin')
  const intervalRef = useRef(null)
  const [isRunning, setIsRunning] = useState(false)

  function startTimer() {
    if (intervalRef.current !== null) return;
    setIsRunning(true)
    setTitle(`You're doing great`)
    intervalRef.current = setInterval(() => {
      setTimeLeft(timeLeft => {
        if (timeLeft >= 1) return timeLeft - 1;
        resetTimer();
        return 0;
      });

    }, 1000)
  }

  function stopTimer() {
    if (intervalRef.current === null) return;
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsRunning(false)
    setTitle(`Keep it up`)
  }

  function resetTimer() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTimeLeft(25 * 60)
    setTitle(`Ready to go for Another Round`)
    setIsRunning(false)
  }

  return (
    <div className="app">
      <h2>POMODORO TIMER</h2>
      <h2>{title}</h2>
      <div className="timer">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>

      <div className="buttons">
        {!isRunning && <button button onClick={startTimer}>Start</button>}
        {isRunning && <button onClick={stopTimer}>Stop</button>}
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div >
  );
}

export default App;
