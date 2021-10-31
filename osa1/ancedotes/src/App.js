import './App.css';
import React, {useState} from 'react'

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0, 
    5: 0,
    6: 0
  });

  const Vote = () => {
    setVotes(votes => (
      {...votes, [selected]: votes[selected] + 1})
    );
  }

  const Highest_Votes = () => {
    let i = 0;
    for (const [key, value] of Object.entries(votes)) {
      console.log(key);
      if (value > i) {
        i = key;
      }
    }
    return anecdotes[i];
    
  }

  return (
    <div>
      <h3>Ancedote of the Day</h3>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={() => setSelected((selected + 1) % anecdotes.length)}>
        Change
      </button>
      <button onClick={() => Vote()}>Vote</button>
      <h3>Ancedote with most votes</h3>
      <p>{() => Highest_Votes}</p>
      
    </div>
  )
}

export default App;
