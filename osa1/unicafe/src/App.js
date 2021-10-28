import './App.css';

import React, {useState} from 'react'

const Header = () => {
  return <h1>Give Feedback</h1>
}


const App = () => {

  const [state, updateState] = useState({
    good: 0,
    neutral: 0, 
    bad: 0
  });

  const updateKey = (key_name) => {
    updateState(state => (
      {...state, [key_name]: state[key_name] + 1})
    );
  }
  
  //onClick={() => updateKey('good')} this format makes it explicit that
  //you are passing in a function signature rather than a return value
  //onClick={updateKey('good')} calls that function on every render, not every button press, 
  //which causes the program to crash

  return (
    <div>
    <Header />
    <button onClick={() => updateKey('good')}>Good</button>
    <button onClick={() => updateKey('bad')}>Bad</button>
    <button onClick={() => updateKey('neutral')}>Neutral</button>
    <p>Good: {state.good}   Bad: {state.bad}   Neutral: {state.neutral}</p>
    </div>

  
  );
}

export default App;
