import './App.css';
import Rock from './icons/Rock';
import Paper from './icons/Paper';
import Scissors from './icons/Scissors';
import { useEffect, useState } from 'react';

const choices = [
  { id: 1, name: 'rock', component: Rock, losesto: 2 },
  { id: 2, name: 'paper', component: Paper, losesto: 3 },
  { id: 3, name: 'scissors', component: Scissors, losesto: 1 }
]

function App() {
  const [wins, setWins] = useState(0)
  const [losses, setLosses] = useState(0)
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [gameState, setGameState] = useState(null);


  function handleUserChoice(choice) {
    let chosenChoices = choices.find(c => c.id === choice)
    setUserChoice(chosenChoices)

    //determine the winner
    if (chosenChoices.losesto === computerChoice.id) {
      //lose
      setGameState('lose')
      setLosses(losses => losses + 1)
    } else if (computerChoice.losesto == chosenChoices.id) {
      //win
      setGameState('win')
      setWins(wins => wins + 1)
    } else if (chosenChoices.id === computerChoice.id) {
      //draw
      setGameState('draw')
    }
  }

  function renderComponent(choice) {
    let Component = choice.component;
    return <Component />
  }

  useEffect(() => {
    let randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(randomChoice)
  }, []) //[userChoice] 

  function restartGame() {
    setGameState(null)
    setUserChoice(null)
    let randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(randomChoice)
  }

  return (
    <div className="app">
      <div className="info">
        <h2>Rock.Paper.Scissors</h2>

        {/* wins losses */}
        <div className="wins-losses">
          <div className="wins">
            <span className="number">{wins}</span>
            <span className="text">Wins</span>
          </div>
          <div className="losses">
            <span className="number">{losses}</span>
            <span className="text">Losses</span>
          </div>
        </div>
      </div>

      {/* the popup to show win/loss/draw */}
      {
        gameState &&
        <div className={`game-state ${gameState}`}>
          <div>
            <div className="game-state-content">
              <p>{renderComponent(userChoice)}</p>
              {/* <p>You {gameState}!</p> */}
              {gameState === 'win' && <p>Congrats! You Win</p>}
              {gameState === 'lose' && <p>Sorry! You Lose</p>}
              {gameState === 'draw' && <p>You Drew</p>}
              <p>{renderComponent(computerChoice)}</p>
            </div>
            <button onClick={() => restartGame()}>Play Again</button>
          </div>
        </div>
      }

      <div className="choices">
        {/* choices captions */}
        <div>You</div>
        <div />
        <div>Computer</div>

        {/* buttons for my choice */}
        <div>
          <button className="rock" onClick={() => handleUserChoice(1)}>
            <Rock />
          </button>
          <button className="paper" onClick={() => handleUserChoice(2)}>
            <Paper />
          </button>
          <button className="scissors" onClick={() => handleUserChoice(3)}>
            <Scissors />
          </button>
        </div>

        <div className="vs">vs</div>

        {/* show the computer's choice */}
        <div>
          <button className="computer-choice">?</button>
        </div>
      </div>



    </div>
  );
}

export default App;
