import logo from './logo.svg';
import './App.css';
import ReactMarkdown from 'react-markdown'
import { useState } from 'react';

function App() {
  const [markdown, setMarkdown] = useState('# Write Your Markdown')
  let handleChange = (e) => {
    setMarkdown(e.target.value)
  }
  return (
    <div className="app">
      <textarea onChange={handleChange} value={markdown}></textarea>

      <ReactMarkdown className='preview'>{markdown}</ReactMarkdown>
    </div>
  );
}

export default App;
