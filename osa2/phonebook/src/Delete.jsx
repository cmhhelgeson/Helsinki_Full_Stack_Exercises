const Delete = ({length, changeDelete, handleDelete}) => {
  return (
    <div className="delete">
      <form onSubmit={handleDelete}>
        <div id="delete_number">
          Delete Number: <input 
          type="number" 
          style={{width: "100px"}} 
          min={1} 
          max={length}
          onChange={changeDelete}>
          </input>
        </div>
        <div id="delete_submit">
          <button type="submit">Delete</button>
        </div>
      </form>
    </div>
  );
}

export default Delete;