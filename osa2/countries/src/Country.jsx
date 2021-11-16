import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Weather from './Weather'

const Country = ({country}) => {

  const [weather, setWeather] = useState();
  const weatherHook = () => {
    let cancel = false;
    const API = process.env.REACT_APP_WEATHER_API;
    axios.get(
      `http://api.weatherstack.com/current?access_key=${API}&query=${country.capital}`).then(response => {
        if (!cancel) {
          setWeather(response.data);
        }
      });

      return () => {
        cancel = true;
      };
  }
  useEffect(weatherHook, []);

  


  
  return(<div id="country">
    <h2>{country.name.common}</h2>
    <img src={country.flags.png} alt="Flag of the Country"></img>
    <p>Capital: {country.capital}</p>
    <p>Population: {country.population}</p>
    <ul> Languages: 
      {Object.values(country.languages).map((value) => {
      return <li key={value}>{value}</li>
      })}
    </ul>
    {weather && <Weather weather={weather}/>}

  </div>
  
  );
}

export default Country;