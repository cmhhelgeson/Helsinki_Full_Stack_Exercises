const Filter = ({filter, changeName, changeValue}) => {
  return (<div className="filter">
    <h3>Search</h3>
    Name: <input value={filter.name} type="text" onChange={changeName}></input>
    Number: <input value={filter.value} type="text" onChange={changeValue}></input>
  </div>);
}
export default Filter;