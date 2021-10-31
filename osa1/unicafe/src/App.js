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

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}: {value}</td>
    </tr>
  );
}

const Statistics = ({state}) => {
  <h3>Statistics</h3>
  if (state.Good + state.Bad + state.Neutral !== 0) {
    return (

    <table>
    <StatisticLine text="Good" value={state.Good}/>
    <StatisticLine text="Neutral" value={state.Neutral}/>
    <StatisticLine text="Bad" value={state.Bad}/>
    <StatisticLine text="Total" 
      value={state.Good + state.Bad + state.Neutral} />
    <StatisticLine text="Average"
      value={(( ((state.Good * 1) + (state.Bad * -1) 
      ) / (state.Good + state.Neutral + state.Bad))).toFixed(2)}/>
    <StatisticLine text="Positive" value={
      state.Good / (state.Good + state.Bad + state.Neutral)} />
    </table>
    );
  } else {
    return (
      <>
      <br></br>
      <p>No feedback given</p>
      </>
    );
  }
  
}


const App = () => {

  const [state, updateState] = useState({
    Good: 0,
    Neutral: 0, 
    Bad: 0,
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
    <Statistics state={state} />
    <br></br>
    </div>
    

  
  );
}

export default App;

/*<button onClick={() => updateKey('good')}>Good</button>
    <button onClick={() => updateKey('bad')}>Bad</button>
    <button onClick={() => updateKey('neutral')}>Neutral</button> */
