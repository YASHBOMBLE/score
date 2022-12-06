import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [scoreA, setScoreA] = useState(0)
  const [scoreB, setScoreB] = useState(0)
  useEffect(() => {
    const a = localStorage.getItem("scoreA");
    const b = localStorage.getItem("scoreB");
    if (a) {
      setScoreA(a);
    }
    if (b) {
      setScoreB(b);
    }
  }, [])
  useEffect(() => {
    if (scoreA > 0) {
      localStorage.setItem("scoreA", scoreA);
    }
    if (scoreB > 0) {
      localStorage.setItem("scoreB", scoreB);
    }
  }, [scoreA, scoreB])

  return (
    <>
      <h1 className='heading'>Score keeper</h1>
      <div className='container'>
        <div className='teams'>
          <h2 className='team-name'>Team A</h2>
          <h5 className='score'>{scoreA}</h5>
          <div className='btn-container'>
            <button className='btn' onClick={() => { setScoreA(scoreA + 1) }}>+</button>
            <button className='btn' onClick={() => { setScoreA(scoreA - 1) }}>-</button>
          </div>

        </div>
        <div className='teams'>
          <h2 className='team-name'>Team B</h2>
          <h5 className='score'>{scoreB}</h5>
          <div className='btn-container'>
            <button className='btn' onClick={() => { setScoreB(scoreB + 1) }}>+</button>
            <button className='btn' onClick={() => { setScoreB(scoreB - 1) }}>-</button>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
