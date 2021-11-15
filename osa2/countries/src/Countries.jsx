import Country from './Country'

const Countries = ({countries, handleClick}) => {
  if (countries.length > 10) {
    return (<p>Too many matches</p>);
  } else if (countries.length === 1) {
    return (
      <div className="country_info">
        <h2>{countries[0].name.common}</h2>
        <p>Capital: {countries[0].capital}</p>
        <p>Population: {countries[0].population}</p>
        <ul> Languages: 
          {Object.values(countries[0].languages).map((value) => {
          return <li key={value}>{value}</li>
          })}
        </ul>
      </div>
    );
  } else {
  return (
  <div className="countries">
      <ul>
        {countries.map((country, idx) => {
          return (
              <Country key={idx} country={country} handleClick={handleClick} />
          );
        })}
      </ul>
  </div>
  );
}
}

export default Countries;
