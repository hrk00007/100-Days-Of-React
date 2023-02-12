import logo from './logo.svg';
import './App.css';
import CategorySelector from './components/CategorySelector';
import ScoreBoard from './components/ScoreBoard';
import Question from './components/Question';
import ResultModal from './components/ResultModal';
import { useCallback, useEffect, useState } from 'react';

function App() {

  const [question, setQuestion] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('any')
  const [isCorrect, setIsCorrect] = useState(null)

  const getQuestion = useCallback(() => {
    setIsCorrect(null)
    let apiUrl = 'https://opentdb.com/api.php?amount=1';
    if (selectedCategory !== 'any') apiUrl += `&category=${selectedCategory}`;
    console.log(apiUrl);
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results[0])
        setQuestion(data.results[0])
      })
  }, [selectedCategory])


  useEffect(() => {
    getQuestion();
  }, [getQuestion, selectedCategory])

  function handledQuestionAnswer(answer) {
    const isCorrectAnswer = answer === question.correct_answer
    setIsCorrect(isCorrectAnswer);
  }

  return (
    <div className="app">

      {/* show the result modal ----------------------- */}
      {isCorrect !== null && <ResultModal isCorrect={isCorrect} question={question} getQuestion={getQuestion} />}

      {/* the question header ----------------------- */}
      <div className="question-header">
        <CategorySelector category={selectedCategory} chooseCategory={setSelectedCategory} />
        <ScoreBoard isCorrect={isCorrect} />
      </div>

      {/* the question itself ----------------------- */}
      <div className="question-main">
        {question && <Question question={question} answerQuestion={handledQuestionAnswer} />}
      </div>

      {/* question footer ----------------------- */}
      <div className="question-footer">
        <button onClick={getQuestion}>Go to The Next Question 👉</button>
      </div>
    </div>
  );
}

export default App;
