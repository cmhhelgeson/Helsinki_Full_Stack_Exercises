const Person = ({person}) => {
  return (
    <div className="person">
      <p>{person.name} {person.number}</p>
    </div>
  );

}
export default Person;