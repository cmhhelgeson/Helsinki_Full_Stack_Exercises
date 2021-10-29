import './App.css';

import React, {useState} from 'react'



const Header = () => {
  return <h1>Give Feedback</h1>
}

const Button = ({name, updateKey}) => {
  return (
    <button onClick = {() => updateKey(name)}>
      {name}
    </button>
  );
}

const Buttons = ({state, updateKey}) => {
  let key_array = Object.keys(state);
  return (
    <div className="buttons"> {
      key_array.map(name => {
        return (
        <div className="button" key={name}>
          <Button key={name} name={name}updateKey={updateKey} />
        </div>
        );
      })}
    </div>
  );


  
}


const App = () => {

  const [state, updateState] = useState({
    Good: 0,
    Neutral: 0, 
    Bad: 0
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
    <Buttons state={state} updateKey={updateKey}/>
    <br></br>
    <p>Good: {state.Good}</p>
    <p>Neutral: {state.Neutral}</p>
    <p>Bad: {state.Bad}</p>
    </div>

  
  );
}

export default App;

/*<button onClick={() => updateKey('good')}>Good</button>
    <button onClick={() => updateKey('bad')}>Bad</button>
    <button onClick={() => updateKey('neutral')}>Neutral</button> */
