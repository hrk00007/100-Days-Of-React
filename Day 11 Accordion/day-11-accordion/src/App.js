import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import data from './Components/Data/data'
import SingleQuestion from './Components/Question'

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Details About ME!</h3>
        <section className='info'>
          {
            questions.map((question) => {
              return <SingleQuestion key={question.id} {...question} />
            })
          }
        </section>
      </div>
    </main>
  );
}

export default App;
