import './App.css';
import React, {useState, useEffect} from 'react'
import Filter from './Filter'
import PhoneInput from './PhoneInput';
import Persons from './Persons';
import Services from './Services';
import Delete from './Delete';




const App = () => {
  const [persons, setPersons] = useState([]);
  const[newName, setNewName] = useState('');
  const[deleteCursor, setDeleteCursor] = useState(1);

  const[filter, setFilter] = useState({
    name:'',
    number:''
  });
  const[number, setNumber] = useState('');


  const personHook = () => {
    Services.getAll().then(returned => {
      setPersons(returned);
    })
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

  const changeDelete = (e) => {
    setDeleteCursor(e.target.value);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newName || !number) {
      alert('Fill in information');
      return;
    }

    const new_person = {name: newName, number: number};
    const person_exists = persons.find(p => p.name === newName);
    const i = persons.indexOf(person_exists);
    if (person_exists) {
      if (window.confirm(`${new_person.name}'s number already exists\nWould you like to change it?`)) {
        Services.update(person_exists.id, new_person).then(ret => {
          //Not sure if shallow copy is a problem here
          let temp = [...persons]
          temp[i].number = number;
          setPersons(temp)
        })
      }

    } else {
      Services.create(new_person).then(ret_obj => {
      setPersons(persons.concat(ret_obj));
      setNewName('');
      setNumber('');
    }).catch(error => {
      console.log("Object Creation Failed");
    })

    }
  }

  const handleDelete = (e) => {
    e.preventDefault();
    const id = persons[deleteCursor - 1].id;
    if (window.confirm(`Delete ${persons[deleteCursor - 1].id}'s Number?`)) {
      Services.deleteObj(id).then(() => {
        setPersons(persons.filter(person => person.id !== id));
      }).catch(error => {
        //Put more descriptive error
        console.log("Id already deleted");
      })
    }
  }
  

  return (
    <div>
      <Filter filter={filter} 
        changeName={changeFilterName}
        changeValue={changeFilterValue}>
      </Filter>
      <PhoneInput
        name={newName}
        changeName={changeName}
        value={number}
        changeValue={changeNumber}
        submitForm={handleSubmit}
      ></PhoneInput>
      <Persons persons={persons} filter={filter} />
      <Delete 
        length={persons.length} 
        changeDelete={changeDelete}
        handleDelete={handleDelete}
      />
      

    </div>
  )
}

export default App;
