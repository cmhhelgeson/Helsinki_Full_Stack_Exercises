const Filter = ({filter, onChange}) => {
  return (
    <div className="filter">
      Find Countries: <input type="text" 
        value={filter} 
        onChange={onChange}>
      </input>
    </div>
  );
}

export default Filter;