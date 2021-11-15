const Country = ({country, handleClick}) => {
  return(
  <li>
    {country.common.name} <button onClick={handleClick}></button>;
  </li>);
}

export default Country;