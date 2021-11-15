import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Filter = ({filter, changeName, changeValue}) => {
  return (<div className="filter">
    <h3>Search</h3>
    Name: <input value={filter.name} type="text" onChange={changeName}></input>
    Number: <input value={filter.value} type="text" onChange={changeValue}></input>
  </div>);
}

const PhoneInput = ({name, changeName, value, changeValue, submitForm}) => {
  return (
    <form onSubmit={submitForm}>
      <h2>Add a new</h2>
      <div id='filter_name'>
        Name: <input onChange={changeName} value={name} />
      </div>
      <div id='filter_value'>
        Number: <input onChange={changeValue} value={value} />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
}

const Person = ({person}) => {
  return (
    <div className="person">
      <p>{person.name} {person.number}</p>
    </div>
  );

}

const Persons = ({persons, filter}) => {
  return(
  <div className="persons">
    {persons.filter(person => {
      return person.name.substring(0, filter.name.length).toLowerCase() 
        === filter.name.toLowerCase()
    }).map((person) => {
      return(<Person person={person}/>);
    })}
  </div>
  );


}

const App = () => {
  const [persons, setPersons ] = useState([]);
  const[newName, setNewName] = useState('');

  const[filter, setFilter] = useState({
    name:'',
    number:''
  });
  const[number, setNumber] = useState('');


  const personHook = () => {
    const eventHandler = response => {
      console.log("Promise fulfilled");
      setPersons(response.data);
    }

    const promise = axios.get("http://localhost:3001/persons");
    promise.then(eventHandler);

  }
  
  useEffect(personHook, [])

  const changeNumber = (e) => {
    setNumber(e.target.value);
  }

  const changeName = (e) => {
    setNewName(e.target.value)
  }

  const changeFilterName = (e) => {
    setFilter({...filter, name: e.target.value})
  }

  const changeFilterValue = (e) => {
    setFilter({...filter, value: e.target.value});
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newName || !number) {
      alert('Fill in information');
      return;
    }
    let new_obj = {
      name: newName,
      number: number, 
      id: persons.length
    }
    setPersons([...persons, new_obj]);
  }

  return (
    <div>
      <Filter filter={filter} 
        changeName={changeFilterName}
        changeValue={changeFilterValue}>Yo
      </Filter>
      <PhoneInput
        name={newName}
        changeName={changeName}
        value={number}
        changeValue={changeNumber}
        submitForm={handleSubmit}
      ></PhoneInput>
      <Persons persons={persons} filter={filter} />
      

    </div>
  )
}

export default App;
