import logo from './logo.svg';
import './App.css';
import { useCallback, useEffect, useState } from "react"
import { useStopwatch } from "react-timer-hook"
import { useSpeechSynthesis } from "react-speech-kit"
function App() {
  const [timers, setTimers] = useState([
    { time: 2, text: "This is my message" },
    { time: 5, text: "helo world" },
    { time: 8, text: "what's up" }
  ])

  const {
    seconds,
    isRunning,
    start,
    reset,
  } = useStopwatch();

  const { speak, speaking, supported, cancel } = useSpeechSynthesis();

  //if the child form state are updating parent state should also be updated
  function updateTimers(index, time, text) {
    const newTimers = [...timers]
    newTimers[index].text = text;
    newTimers[index].time = time;
    setTimers(newTimers)
  }
  //add a new timer
  function addTimer() {
    const newTimer = [...timers, { time: 15, text: 'New Timer Added' }]
    setTimers(newTimer)
  }

  // const doReset = useCallback(() => reset(), [])
  // const doSpeak = useCallback((...p) => speak(...p), [])
  useEffect(() => {
    const foundTimer = timers.find((t) => t.time === seconds)
    if (foundTimer) {
      //this is where we will speak the text
      speak({ text: foundTimer.text })
    }
    //check to see if the second is greater than the last timer then if yes then stop
    if (seconds > timers[timers.length - 1].time) reset();


  }, [seconds, timers])

  if (!supported) {
    return <div><h2>Your Browser is Not Supported. Sorry</h2></div>
  }
  return (
    <div className="app">
      <h2>Talk The Talk</h2>
      <div className="timers">
        {
          timers.map((timer, index) => (

            <TimerSlot key={index} index={index} timer={timer} updateTimers={updateTimers} />
          ))
        }
        <button onClick={() => addTimer()} className='add-button'>Add</button>
      </div>

      {/* Seconds */}
      <h2>{seconds}</h2>

      {/* Buttons */}
      <div className="buttons">
        {
          !isRunning &&
          <button className="start-button" onClick={start}>Start</button>
        }
        {
          isRunning &&
          <button className="stop-button" onClick={reset}>Stop</button>
        }
        {speaking && <p>I am speaking...</p>}
      </div>
    </div>
  );
}

function TimerSlot({ index, timer, updateTimers }) {

  const [time, setTime] = useState(timer.time)
  const [text, setText] = useState(timer.text)

  function handleBlur() {
    updateTimers(index, time, text)
  }
  return (
    <form className="timer" key={index}>
      <input
        type="number"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        onBlur={handleBlur}
      />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onBlur={handleBlur}
      />
    </form>
  )
}

export default App;
