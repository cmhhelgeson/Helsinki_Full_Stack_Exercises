

const ListCountries = ({countries, handleClick}) => {
  return (
    <div style ={{width: "400px"}}>
    <ul>
      {countries.map((country, idx) => {
        return <li key={country.name.common}>
          {country.name.common}
          <button id={country.name.common} 
            onClick ={() => handleClick(country.name.common)}
            style={{float: "right"}}>
            Expand
          </button>
        </li>
      })}
    </ul>
    </div>
  )

}
export default ListCountries;