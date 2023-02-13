import React, { useState, useEffect, useCallback } from 'react';
import { useStopwatch } from 'react-timer-hook'
import { useSpeechSynthesis } from 'react-speech-kit'
import './App.css';

export default function App() {
  const [timers, setTimers] = useState([
    { time: 2, text: 'this is my message' },
    { time: 8, text: 'hello world' },
    { time: 12, text: 'whats up' },
  ]);

  const { seconds, isRunning, start, reset } = useStopwatch({ autoStart: false });
  const { speak, speaking, supported } = useSpeechSynthesis();
  //const doReset = useCallback(() => reset(), []);
  //const doSpeak = useCallback((...p) => speak(...p), []);

  function updateTimers(index, time, text) {
    const newTimers = [...timers]
    newTimers[index].time = time;
    newTimers[index].text = text;

    setTimers(newTimers);
  }

  function addTimer() {
    const newTimers = [...timers, { time: 10, text: 'Yoooo' }]
    setTimers(newTimers);
  }


  useEffect(() => {
    const foundTimer = timers.find(t => t.time === seconds)
    if (foundTimer) {
      speak({ text: foundTimer.text })
      //this is where we will speak
    }

    //check to see if second is greater than the last timers time
    if (seconds > timers[timers.length - 1].time) reset();
  }, [seconds, timers])


  if (!supported) {
    return <div>Your Browser is not supported</div>
  }

  return (
    <div className="app">
      <h2>Talk the Talk</h2>

      <div className="timers">
        {/* timers go here */}
        {
          timers.map((timer, index) => (

            <TimerSlot key={index} index={index} timer={timer} updateTimers={updateTimers} />
          ))
        }

        <button onClick={addTimer} className="add-button">Add</button>
      </div>

      {/* seconds */}
      <h2>{seconds}</h2>

      {/* buttons */}
      <div className="buttons">
        {
          !isRunning && (
            <button className="start-button" onClick={start}>Start</button>)
        }
        {
          isRunning && (
            <button className="stop-button" onClick={reset}>Stop</button>)
        }
        {speaking && <p>I am Speaking....</p>}
      </div>
    </div>
  );
}


let TimerSlot = ({ index, timer, updateTimers }) => {
  const [time, setTime] = useState(timer.time)
  const [text, setText] = useState(timer.text)

  function handleBlur() {
    updateTimers(index, time, text);
  }

  return (

    <form className="timer" key={index}>
      <input type="number" value={time} onChange={(e) => setTime(e.target.value)} onBlur={handleBlur} />
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} onBlur={handleBlur} />
    </form>
  )
}
