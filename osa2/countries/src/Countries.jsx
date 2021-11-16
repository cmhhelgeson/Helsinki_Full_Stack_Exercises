import Country from './Country' 
import ListCountries from "./ListCountries"


const Countries = ({countries, handleCountriesClick, handleCountryClick}) => {


  
  if (countries.length === 1) {
    return (
      <Country country={countries[0]}/>
    );
  } else if (countries.length > 1 && countries.length < 10) {
    return (
      <ListCountries 
        countries={countries} 
        handleClick={handleCountriesClick}
      />
    );
  } else if (countries.length > 10 ) {
    return (
      <p>Too many matches!</p>
    );
  } else {
    return (<p>No matches!</p>);
  }
}

export default Countries;