import './App.css';
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Countries from "./Countries"



const Filter = ({filter, handleChange}) => {
  return (
    <div className="filter">
      Find Countries: <input value={filter} onChange={handleChange} />
    </div>
  );
}


const App = () => {

  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');

  const countryHook = () => {
    axios.get('https://restcountries.com/v3.1/all').then(response => {
      setCountries(response.data);
    });
  }
  useEffect(countryHook, []);
  const [shownCountries, setShownCountries] = useState(countries);


  
  

  const handleFilter = (event) => {
    setFilter(event.target.value);
    setShownCountries(countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase())));
  }


  const handleCountriesClick = (id) => {
    console.log(id);
    setShownCountries([countries.find(country => country.name.common === id)]);
  }

  const handleCountryClick = (event) => {
    setShownCountries(countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase())));
  }



  return (
    <div className="app">
      <Filter value={filter} handleChange={handleFilter} />
      <Countries 
        countries={shownCountries} 
        handleCountriesClick={handleCountriesClick}
        handleCountryClick={handleCountryClick}/>
    </div>
  );
}

export default App;



