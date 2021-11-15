import './App.css';
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Countries from "./Countries"
import Filter from './Filter'


const App = () => {

  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');
  const shownCountries = 
    filter.length === 0 ? countries
  : countries.filter(country => 
    country.name.common.toLowerCase().indexOf(filter) >= 0)

  const countryHook = () => {

    const eventHandler = response => {
      console.log('promise fulfilled');
      setCountries(response.data);
    }

    const promise = axios.get('https://restcountries.com/v3.1/all');
    promise.then(eventHandler);

  }

  console.log('Yo')

  useEffect(countryHook, []);

  const changeFilter = event => {
    setFilter(event.target.value.toLowerCase());
  }


  return (
    <div className="App">
      <Filter filter={filter} onChange={changeFilter}/>
      <Countries countries={shownCountries} handleClick={/>
    </div>
  );
}

export default App;
