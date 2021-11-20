const PhoneInput = ({name, changeName, value, changeValue, submitForm}) => {
  return (
    <form onSubmit={submitForm}>
      <h2>Add a new</h2>
      <div id='filter_name'>
        Name: <input onChange={changeName} value={name} />
      </div>
      <div id='filter_value'>
        Number: <input onChange={changeValue} value={value} />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
}
export default PhoneInput;